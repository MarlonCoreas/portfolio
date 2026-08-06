<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');

function respond_to(string $path, string $status, int $httpStatus = 200, array $extra = []): never {
    $allowed = ['/', '/es'];
    if (!in_array($path, $allowed, true)) {
        $path = '/';
    }

    $accept = strtolower((string)($_SERVER['HTTP_ACCEPT'] ?? ''));
    $requestedWith = strtolower((string)($_SERVER['HTTP_X_REQUESTED_WITH'] ?? ''));
    $expectsJson = str_contains($accept, 'application/json') || $requestedWith === 'xmlhttprequest';

    if ($expectsJson) {
        http_response_code($httpStatus);
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['status' => $status] + $extra, JSON_UNESCAPED_SLASHES);
        exit;
    }

    header('Location: ' . $path . '?contact=' . $status . '#contact', true, 303);
    exit;
}

/**
 * The real config lives above the document root so the password can never be
 * served. Returns an empty array when it is absent, which makes the form fall
 * back to mail() instead of breaking between a deploy and the config upload.
 */
function load_config(): array {
    $docRoot = (string)($_SERVER['DOCUMENT_ROOT'] ?? '');
    $candidates = [];
    if ($docRoot !== '') {
        $candidates[] = dirname($docRoot) . DIRECTORY_SEPARATOR . 'contact-config.php';
    }
    $candidates[] = __DIR__ . DIRECTORY_SEPARATOR . 'config.php';

    foreach ($candidates as $candidate) {
        if (is_file($candidate) && is_readable($candidate)) {
            $config = @include $candidate;
            if (is_array($config)) {
                return $config;
            }
        }
    }

    return [];
}

/**
 * Sends through the domain mailbox over authenticated SMTP so the message
 * carries DKIM and aligns with SPF. Without that, the confirmation sent to a
 * stranger's inbox is very likely to be filtered as spam.
 *
 * $error is filled with the transport failure so it can be written to the log.
 */
function send_via_smtp(
    array $config,
    string $toEmail,
    string $toName,
    string $subject,
    string $body,
    string $replyToEmail,
    string $replyToName,
    ?string &$error = null,
    array $customHeaders = []
): bool {
    static $loaded = false;
    if (!$loaded) {
        require_once __DIR__ . '/vendor/PHPMailer/Exception.php';
        require_once __DIR__ . '/vendor/PHPMailer/PHPMailer.php';
        require_once __DIR__ . '/vendor/PHPMailer/SMTP.php';
        $loaded = true;
    }

    $mailer = new PHPMailer(true);

    try {
        $mailer->isSMTP();
        $mailer->Host = (string)($config['smtp_host'] ?? '');
        $mailer->Port = (int)($config['smtp_port'] ?? 465);
        $mailer->SMTPAuth = true;
        $mailer->Username = (string)($config['smtp_user'] ?? '');
        $mailer->Password = (string)($config['smtp_pass'] ?? '');
        $mailer->SMTPSecure = ((string)($config['smtp_secure'] ?? 'ssl')) === 'tls'
            ? PHPMailer::ENCRYPTION_STARTTLS
            : PHPMailer::ENCRYPTION_SMTPS;
        $mailer->Timeout = 15;
        $mailer->CharSet = PHPMailer::CHARSET_UTF8;

        $mailer->setFrom(
            (string)($config['from_email'] ?? $config['smtp_user'] ?? ''),
            (string)($config['from_name'] ?? 'Marlon Coreas')
        );
        $mailer->addAddress($toEmail, $toName);
        if ($replyToEmail !== '') {
            $mailer->addReplyTo($replyToEmail, $replyToName);
        }

        foreach ($customHeaders as $headerName => $headerValue) {
            $mailer->addCustomHeader($headerName, $headerValue);
        }

        $mailer->Subject = $subject;
        $mailer->Body = $body;
        $mailer->XMailer = 'marloncoreas.com contact form';

        return $mailer->send();
    } catch (\Throwable $exception) {
        $error = $exception->getMessage();
        return false;
    }
}

/**
 * Normalises the wordlists from contact-config.php into the shape the scorer
 * expects. Missing keys become empty lists rather than an error, so a server
 * without the config still runs on the structural signals alone.
 */
function load_spam_phrases(array $config): array {
    $configured = is_array($config['spam_phrases'] ?? null) ? $config['spam_phrases'] : [];
    $normalise = static function (mixed $list): array {
        if (!is_array($list)) {
            return [];
        }
        $clean = [];
        foreach ($list as $phrase) {
            $phrase = mb_strtolower(trim((string)$phrase), 'UTF-8');
            if ($phrase !== '') {
                $clean[] = $phrase;
            }
        }
        return $clean;
    };

    return [
        'vendor' => $normalise($configured['vendor'] ?? []),
        'soft' => $normalise($configured['soft'] ?? []),
        'bulk' => $normalise($configured['bulk'] ?? []),
        'hosts' => $normalise($config['extra_suspect_hosts'] ?? []),
    ];
}

/**
 * Scores an inquiry for cold-outreach spam — agencies pitching SEO, app
 * development or link building through the form.
 *
 * The signal that matters is DIRECTION, not topic. A real client writes "I need
 * help ranking on Google"; a vendor writes "we offer SEO services". Scoring the
 * topic would reject genuine prospects, so offering-language and structural
 * signals (links, markup) carry the weight instead.
 *
 * Nothing is ever rejected on this score. A flagged inquiry still reaches the
 * inbox tagged, which keeps a false positive cheap: it costs the automatic
 * confirmation, never the lead.
 *
 * The phrase lists are deliberately NOT in this file. This repository is
 * public, and a list anyone can read is a list anyone can write around, so the
 * wording lives in contact-config.php on the server. The structural signals
 * below stay here: knowing that file-share links are scored does not help a
 * sender who needs the link to deliver the pitch in the first place.
 *
 * $phrases arrives as ['vendor' => [], 'soft' => [], 'bulk' => []]. With no
 * config the wordlists are simply empty and only structure is scored.
 */
function spam_assessment(string $name, string $company, string $goal, array $phrases, array &$reasons): int {
    $reasons = [];
    $score = 0;
    $haystack = mb_strtolower($name . ' ' . $company . ' ' . $goal, 'UTF-8');

    // Selling, not buying. These rarely appear in a real problem description.
    foreach ($phrases['vendor'] as $phrase) {
        if (str_contains($haystack, $phrase)) {
            $score += 3;
            $reasons[] = 'vendor-phrase:' . $phrase;
            if (count($reasons) >= 4) {
                break;
            }
        }
    }

    // Softer signals. Real prospects say these too ("our company needs a site"),
    // so they only nudge the score and never flag an inquiry on their own.
    foreach ($phrases['soft'] as $phrase) {
        if (str_contains($haystack, $phrase)) {
            $score += 1;
            $reasons[] = 'cold-opener:' . $phrase;
        }
    }

    // Bulk mail leftovers that have no business in a contact form.
    foreach ($phrases['bulk'] as $phrase) {
        if (str_contains($haystack, $phrase)) {
            $score += 4;
            $reasons[] = 'bulk-mail:' . $phrase;
        }
    }

    // Links in the problem field. There is a dedicated field for their own site,
    // so a URL here usually points at a portfolio, a price list or a payload.
    preg_match_all('~https?://|www\.~i', $goal, $urlMatches);
    $urlCount = count($urlMatches[0]);
    if ($urlCount > 0) {
        $score += min(2 + ($urlCount - 1), 4);
        $reasons[] = 'links-in-message:' . $urlCount;
    }

    // File-share and shortener hosts: the pattern behind the recent Mega links.
    // Safe to keep public — the sender needs the link for the pitch to work.
    $suspectHosts = array_merge([
        'mega.nz', 'mega.io', 'mega.co.nz', 'bit.ly', 'tinyurl', 'cutt.ly', 'rebrand.ly',
        't.me', 'wetransfer', 'dropbox.com', 'drive.google.com', 'shorturl', 'is.gd',
    ], $phrases['hosts']);
    foreach ($suspectHosts as $host) {
        if (str_contains($haystack, $host)) {
            $score += 5;
            $reasons[] = 'file-share-link:' . $host;
            break;
        }
    }

    // Markup pasted from a mail-merge template.
    if (preg_match('~<\s*(a|img|br|div|p|table)\b|\[url|\[link~i', $goal)) {
        $score += 3;
        $reasons[] = 'markup-in-message';
    }

    // A name field carrying a company slogan or a URL.
    if (preg_match('~https?://|www\.~i', $name)) {
        $score += 3;
        $reasons[] = 'link-in-name';
    }

    return $score;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Method not allowed');
}

$redirect = (string)($_POST['redirect'] ?? '/');

$origin = (string)($_SERVER['HTTP_ORIGIN'] ?? '');
$host = (string)($_SERVER['HTTP_HOST'] ?? '');
if ($origin !== '') {
    $originHost = (string)(parse_url($origin, PHP_URL_HOST) ?? '');
    $requestHost = explode(':', $host)[0];
    if ($originHost === '' || !hash_equals(strtolower($requestHost), strtolower($originHost))) {
        respond_to($redirect, 'error', 403);
    }
}

// Hidden field: bots usually fill it; people never see it.
if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond_to($redirect, 'sent');
}

// Lightweight rate limit: one accepted attempt per minute per IP hash.
// Only accepted submissions are recorded, so a visitor who mistypes a field
// can correct it and resend immediately instead of waiting out the window.
$ip = (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateFile = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'marlon-contact-' . hash('sha256', $ip);
$lastAttempt = is_file($rateFile) ? (int)@file_get_contents($rateFile) : 0;
if ($lastAttempt > 0 && time() - $lastAttempt < 60) {
    respond_to($redirect, 'error', 429);
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$company = trim((string)($_POST['company'] ?? ''));
$goal = trim((string)($_POST['goal'] ?? ''));
$language = (string)($_POST['language'] ?? 'en');
$projectType = (string)($_POST['project_type'] ?? '');
$timeline = (string)($_POST['timeline'] ?? '');
$budget = (string)($_POST['budget'] ?? '');
$consent = (string)($_POST['consent'] ?? '');

$projectTypes = ['website', 'software', 'product', 'unsure'];
$timelines = ['soon', '1-2-months', '3-6-months', 'exploring'];
// 'under-5k' was split into two ranges. It stays accepted so a visitor with the
// previous page cached in their browser does not get an error on submit.
$budgets = ['guidance', 'under-2k', '2k-5k', 'under-5k', '5k-10k', '10k-25k', '25k-plus'];

$valid = $name !== ''
    && strlen($name) <= 100
    && filter_var($email, FILTER_VALIDATE_EMAIL)
    && strlen($email) <= 160
    && strlen($company) <= 220
    && $goal !== ''
    && strlen($goal) <= 2500
    && in_array($projectType, $projectTypes, true)
    && in_array($timeline, $timelines, true)
    && in_array($budget, $budgets, true)
    && $consent === 'yes';

if (!$valid) {
    respond_to($redirect, 'error', 422);
}

@file_put_contents($rateFile, (string)time(), LOCK_EX);

$language = $language === 'es' ? 'es' : 'en';
$safeName = str_replace(["\r", "\n"], ' ', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safeCompany = str_replace(["\r", "\n"], ' ', $company);

// Readable versions of the form values. These mirror the option labels in
// src/i18n.ts; this endpoint is standalone PHP and cannot import them.
$optionLabels = [
    'en' => [
        'project_type' => [
            'website' => 'Business website',
            'software' => 'Custom software or internal tool',
            'product' => 'New digital product',
            'unsure' => 'Not sure yet',
        ],
        'timeline' => [
            'soon' => 'As soon as there is a good plan',
            '1-2-months' => 'Within 1–2 months',
            '3-6-months' => 'Within 3–6 months',
            'exploring' => 'Still exploring',
        ],
        'budget' => [
            'guidance' => 'Needs guidance',
            'under-2k' => 'Under US$2,000',
            '2k-5k' => 'US$2,000–5,000',
            'under-5k' => 'Under US$5,000 (from a cached page)',
            '5k-10k' => 'US$5,000–10,000',
            '10k-25k' => 'US$10,000–25,000',
            '25k-plus' => 'US$25,000+',
        ],
    ],
    'es' => [
        'project_type' => [
            'website' => 'Sitio web para empresa',
            'software' => 'Software a la medida o herramienta interna',
            'product' => 'Producto digital nuevo',
            'unsure' => 'Aún no está seguro',
        ],
        'timeline' => [
            'soon' => 'En cuanto haya un buen plan',
            '1-2-months' => 'En 1–2 meses',
            '3-6-months' => 'En 3–6 meses',
            'exploring' => 'Todavía explorando',
        ],
        'budget' => [
            'guidance' => 'Necesita orientación',
            'under-2k' => 'Menos de US$2,000',
            '2k-5k' => 'US$2,000–5,000',
            'under-5k' => 'Menos de US$5,000',
            '5k-10k' => 'US$5,000–10,000',
            '10k-25k' => 'US$10,000–25,000',
            '25k-plus' => 'US$25,000+',
        ],
    ],
];

$config = load_config();

// --- Spam assessment --------------------------------------------------------

$spamReasons = [];
$spamPhrases = load_spam_phrases($config);
$spamScore = spam_assessment($safeName, $safeCompany, $goal, $spamPhrases, $spamReasons);
$spamThreshold = (int)($config['spam_threshold'] ?? 5);
$isSuspected = $spamScore >= $spamThreshold;
$phraseCount = count($spamPhrases['vendor']) + count($spamPhrases['soft']) + count($spamPhrases['bulk']);

// --- Notification to Marlon -------------------------------------------------

$en = $optionLabels['en'];
$notifySubject = ($isSuspected ? '[SPAM? ' . $spamScore . '] ' : '')
    . '[marloncoreas.com] '
    . ($language === 'es' ? 'Nueva consulta de proyecto' : 'New project inquiry');
$notifyBody = implode("\n", [
    'Name: ' . $safeName,
    'Email: ' . $safeEmail,
    'Company / website: ' . ($safeCompany !== '' ? $safeCompany : 'Not provided'),
    'Project type: ' . $en['project_type'][$projectType],
    'Timeline: ' . $en['timeline'][$timeline],
    'Budget range: ' . $en['budget'][$budget],
    'Language: ' . ($language === 'es' ? 'Spanish' : 'English'),
    '',
    'Problem / desired outcome:',
    $goal,
    '',
    'Consent to reply: yes',
    ...($isSuspected ? [
        '',
        '--- Flagged as likely cold-outreach spam (score ' . $spamScore . '/' . $spamThreshold . ')',
        '--- Signals: ' . implode(', ', $spamReasons),
        '--- No confirmation email was sent and no booking link was shown.',
    ] : []),
]);

$spamHeaders = $isSuspected
    ? [
        'X-Spam-Flag' => 'YES',
        'X-Contact-Spam-Score' => (string)$spamScore,
        'X-Contact-Spam-Reasons' => substr(implode(', ', $spamReasons), 0, 400),
    ]
    : ['X-Contact-Spam-Score' => (string)$spamScore];

$transport = 'smtp';
$transportError = null;

if (($config['smtp_host'] ?? '') !== '' && ($config['smtp_pass'] ?? '') !== '') {
    $sent = send_via_smtp(
        $config,
        (string)($config['notify_to'] ?? 'hello@marloncoreas.com'),
        'Marlon Coreas',
        $notifySubject,
        $notifyBody,
        $safeEmail,
        $safeName,
        $transportError,
        $spamHeaders
    );
} else {
    // No SMTP config yet: keep accepting inquiries through the local mailer.
    $transport = 'mail()';
    $headers = [
        'From: Marlon Coreas Website <hello@marloncoreas.com>',
        'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
        'Content-Type: text/plain; charset=UTF-8',
        'X-Mailer: marloncoreas.com contact form',
    ];
    foreach ($spamHeaders as $headerName => $headerValue) {
        $headers[] = $headerName . ': ' . str_replace(["\r", "\n"], ' ', $headerValue);
    }
    $encodedSubject = function_exists('mb_encode_mimeheader')
        ? mb_encode_mimeheader($notifySubject, 'UTF-8')
        : $notifySubject;
    $recipient = (string)($config['notify_to'] ?? 'hello@marloncoreas.com');
    $sent = @mail($recipient, $encodedSubject, $notifyBody, implode("\r\n", $headers), '-f hello@marloncoreas.com')
        || @mail($recipient, $encodedSubject, $notifyBody, implode("\r\n", $headers));
}

// --- Confirmation to the visitor --------------------------------------------
// Only sent once the inquiry is safely captured, so the visitor is never told
// "received" for something that was not — and never to a flagged sender, who
// would otherwise learn the address is live and read by a person.

$confirmationSent = false;

if ($sent && !$isSuspected && ($config['send_confirmation'] ?? true) && ($config['smtp_host'] ?? '') !== '') {
    $labels = $optionLabels[$language];
    $bookingUrl = trim((string)($config['booking_url'] ?? ''));

    if ($language === 'es') {
        $confirmSubject = 'Recibí los detalles de tu proyecto — Marlon Coreas';
        $bookingBlock = $bookingUrl !== ''
            ? "Si prefieres avanzar más rápido, puedes reservar una llamada de 15 minutos aquí:\n" . $bookingUrl . "\n\n"
            : '';
        $confirmBody = "Hola " . $safeName . ",\n\n"
            . "Gracias por escribir. Esta es la confirmación de que tu consulta llegó: la leo yo personalmente, no un equipo de ventas.\n\n"
            . "Qué sigue: voy a revisar el contexto que describiste y te responderé en un máximo de dos días hábiles, con una lectura honesta de si soy la persona indicada para ayudarte y cuál sería un primer paso sensato.\n\n"
            . $bookingBlock
            . "Copia de lo que enviaste:\n\n"
            . "  Qué necesitas:      " . $labels['project_type'][$projectType] . "\n"
            . "  Cuándo:             " . $labels['timeline'][$timeline] . "\n"
            . "  Rango de inversión: " . $labels['budget'][$budget] . "\n"
            . "  Empresa o sitio:    " . ($safeCompany !== '' ? $safeCompany : 'No indicado') . "\n\n"
            . "  Problema a resolver:\n"
            . "  " . str_replace("\n", "\n  ", $goal) . "\n\n"
            . "Si algo de lo anterior está mal, responde este correo y lo corrijo.\n\n"
            . "— Marlon Coreas\n"
            . "  marloncoreas.com\n";
    } else {
        $confirmSubject = 'I received your project details — Marlon Coreas';
        $bookingBlock = $bookingUrl !== ''
            ? "If you would rather move faster, you can book a 15-minute call here:\n" . $bookingUrl . "\n\n"
            : '';
        $confirmBody = "Hi " . $safeName . ",\n\n"
            . "Thanks for writing. This confirms your inquiry arrived — I read these myself, not a sales team.\n\n"
            . "What happens next: I will review the context you described and reply within two business days, with an honest read on whether I am the right person to help and what a sensible first step would be.\n\n"
            . $bookingBlock
            . "A copy of what you sent:\n\n"
            . "  What you need:    " . $labels['project_type'][$projectType] . "\n"
            . "  Timing:           " . $labels['timeline'][$timeline] . "\n"
            . "  Investment range: " . $labels['budget'][$budget] . "\n"
            . "  Company/website:  " . ($safeCompany !== '' ? $safeCompany : 'Not provided') . "\n\n"
            . "  Problem to solve:\n"
            . "  " . str_replace("\n", "\n  ", $goal) . "\n\n"
            . "If anything above is wrong, just reply to this email and I will correct it.\n\n"
            . "— Marlon Coreas\n"
            . "  marloncoreas.com\n";
    }

    $confirmationSent = send_via_smtp(
        $config,
        $safeEmail,
        $safeName,
        $confirmSubject,
        $confirmBody,
        (string)($config['from_email'] ?? 'hello@marloncoreas.com'),
        'Marlon Coreas'
    );
}

// --- Local copy -------------------------------------------------------------
// Mail can be rejected upstream or filtered silently, and a lost lead is worse
// than a duplicated one. The log holds personal data, so it is written above the
// document root when possible; inside the webroot the .htaccess rules block it.

$logEntry = implode("\n", [
    '--- ' . gmdate('c')
        . ' · via=' . $transport
        . ' · delivery=' . ($sent ? 'ok' : 'failed')
        . ' · confirmation=' . ($confirmationSent ? 'ok' : 'no')
        . ' · spam=' . $spamScore . '/' . $spamThreshold . ' · phrases=' . $phraseCount
        . ($isSuspected ? ' (FLAGGED: ' . implode(', ', $spamReasons) . ')' : '')
        . ($transportError !== null ? ' · error=' . str_replace("\n", ' ', $transportError) : ''),
    $notifyBody,
    ''
]) . "\n";

$docRoot = (string)($_SERVER['DOCUMENT_ROOT'] ?? '');
$privateDir = $docRoot !== '' ? dirname($docRoot) : '';
$logFile = ($privateDir !== '' && is_dir($privateDir) && is_writable($privateDir))
    ? $privateDir . DIRECTORY_SEPARATOR . 'contact-leads.log'
    : __DIR__ . DIRECTORY_SEPARATOR . 'leads.log';

@file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);

// A flagged sender is told the same thing as everyone else: nothing here should
// teach them how the filter works. Only the page's follow-up text differs.
respond_to($redirect, $sent ? 'sent' : 'error', $sent ? 200 : 500, [
    'confirmed' => $confirmationSent,
    'booking' => !$isSuspected,
]);
