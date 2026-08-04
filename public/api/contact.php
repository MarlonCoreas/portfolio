<?php
declare(strict_types=1);

header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');

function redirect_to(string $path, string $status): never {
    $allowed = ['/', '/es'];
    if (!in_array($path, $allowed, true)) {
        $path = '/';
    }
    header('Location: ' . $path . '?contact=' . $status . '#contact', true, 303);
    exit;
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
        redirect_to($redirect, 'error');
    }
}

// Hidden field: bots usually fill it; people never see it.
if (trim((string)($_POST['website'] ?? '')) !== '') {
    redirect_to($redirect, 'sent');
}

// Lightweight rate limit: one accepted attempt per minute per IP hash.
$ip = (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateFile = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'marlon-contact-' . hash('sha256', $ip);
$lastAttempt = is_file($rateFile) ? (int)@file_get_contents($rateFile) : 0;
if ($lastAttempt > 0 && time() - $lastAttempt < 60) {
    redirect_to($redirect, 'error');
}
@file_put_contents($rateFile, (string)time(), LOCK_EX);

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
$budgets = ['guidance', 'under-5k', '5k-10k', '10k-25k', '25k-plus'];

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
    redirect_to($redirect, 'error');
}

$safeName = str_replace(["\r", "\n"], ' ', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$recipient = 'hello@marloncoreas.com';
$subjectText = $language === 'es' ? 'Nueva consulta de proyecto' : 'New project inquiry';
$subject = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader('[marloncoreas.com] ' . $subjectText, 'UTF-8')
    : '[marloncoreas.com] ' . $subjectText;

$message = implode("\n", [
    'Name: ' . $safeName,
    'Email: ' . $safeEmail,
    'Company / website: ' . ($company !== '' ? $company : 'Not provided'),
    'Project type: ' . $projectType,
    'Timeline: ' . $timeline,
    'Budget range: ' . $budget,
    'Language: ' . ($language === 'es' ? 'Spanish' : 'English'),
    '',
    'Problem / desired outcome:',
    $goal,
    '',
    'Consent to reply: yes',
]);

$headers = [
    'From: Marlon Coreas Website <hello@marloncoreas.com>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: marloncoreas.com contact form',
];

$sent = @mail($recipient, $subject, $message, implode("\r\n", $headers));
redirect_to($redirect, $sent ? 'sent' : 'error');
