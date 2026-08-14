<?php
// Copy this file to `contact-config.php` and place it ONE LEVEL ABOVE public_html
// (so the web server can never serve it), then fill in the real values.
//
// On Hostinger the layout is usually:
//   ~/domains/marloncoreas.com/contact-config.php   <- the real config lives here
//   ~/domains/marloncoreas.com/public_html/         <- the site
//
// If that directory is not writable, the form falls back to `api/config.php`
// inside the site, which the .htaccess rules block from being served.

return [
    // SMTP mailbox that sends the messages. Use a real mailbox on the domain so
    // the mail is signed with DKIM and aligns with SPF — this is what keeps the
    // confirmation email out of the recipient's spam folder.
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,
    'smtp_secure' => 'ssl', // 'ssl' for port 465, 'tls' for port 587
    'smtp_user' => 'hello@marloncoreas.com',
    'smtp_pass' => 'PUT-THE-MAILBOX-PASSWORD-HERE',

    // Where new inquiries are delivered.
    'notify_to' => 'hello@marloncoreas.com',

    // Shown as the sender on both the notification and the confirmation.
    'from_email' => 'hello@marloncoreas.com',
    'from_name' => 'Marlon Coreas',

    // Send the visitor a confirmation email. Set to false to disable.
    'send_confirmation' => true,

    // Booking link included in the confirmation email. Keep it in sync with
    // `site.bookingUrl` in src/i18n.ts, which controls the button on the page.
    // Leave empty to omit that paragraph entirely.
    'booking_url' => 'https://cal.com/mcoreas/15min',

    // Score at which an inquiry is treated as cold-outreach spam. Flagged mail
    // still arrives, tagged with [SPAM?] and an X-Spam-Flag header, but the
    // sender gets no confirmation email and no booking link.
    // Lower = stricter. Raise to 7 if real inquiries are being flagged; drop to
    // 4 if vendor pitches are getting through.
    'spam_threshold' => 5,

    // Wordlists for the spam scorer. They live here, outside the public
    // repository, because a list anyone can read is a list anyone can write
    // around. Structural signals (links, file-share hosts, pasted markup) stay
    // in contact.php — those cannot be avoided by a sender who needs the link.
    //
    // Match on lowercase substrings of name + company + message.
    //   'vendor' scores 3 — selling language a real client rarely uses
    //   'soft'   scores 1 — openers prospects also use, never enough alone
    //   'bulk'   scores 4 — mail-merge leftovers with no place in a form
    //
    // Leaving these empty is valid: only structure gets scored. The lead log
    // records `phrases=N` on every submission, so a list that failed to load
    // shows up as phrases=0.
    // Placeholders only — replace with the real wording on the server.
    'spam_phrases' => [
        'vendor' => ['a phrase only someone selling would write'],
        'soft' => ['an opener a real client might also use'],
        'bulk' => ['a mail-merge leftover'],
    ],

    // Added to the file-share and shortener hosts already built in.
    'extra_suspect_hosts' => [],
];
