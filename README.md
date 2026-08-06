# Independent Developer Portfolio

A bilingual portfolio built with vinext. English is the default language and Spanish lives at `/es`. Dedicated bilingual service pages explain business websites and custom software without relying on unverified outcome claims.

**Live site:** [marloncoreas.com](https://marloncoreas.com)

![Portfolio preview](public/social-card.png)

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Deploy to Hostinger (static hosting)

```bash
npm run export:hostinger
```

This builds the app, snapshots every public page plus `robots.txt` and `sitemap.xml`, and assembles `dist/hostinger/` plus an upload-ready `dist/hostinger.zip`. Upload the **zip** to `public_html` in hPanel and extract it there — that guarantees the hidden `.htaccess` files arrive too. The export bakes in `https://marloncoreas.com` (override with `NEXT_PUBLIC_SITE_URL`); the `.htaccess` serves clean URLs without redirects, forces HTTPS, redirects `www` to the apex domain, returns a real 404 page, and caches hashed assets for a year.

## Update personal details

The shared email address, social links, project links, and all English/Spanish copy live in [`src/i18n.ts`](src/i18n.ts). Update the `site` object first when a dedicated portfolio email becomes available. The canonical site URL is also centralized there as `siteUrl`.

## Contact form

`public/api/contact.php` handles project inquiries on Hostinger. It validates fields, checks same-origin requests, uses a honeypot and a one-minute IP-hash rate limit (counted only on accepted submissions), emails the inquiry, sends the visitor a confirmation, and appends every accepted lead to a log so nothing is lost to a mail failure. The direct email link remains available as a fallback.

### Mailer setup (required for the confirmation email)

Mail is sent over authenticated SMTP through the domain mailbox, so it carries DKIM and aligns with SPF. Without this the confirmation sent to a stranger's inbox is very likely to be filtered as spam.

1. Create or reuse the `hello@marloncoreas.com` mailbox in hPanel and note its password.
2. Copy `public/api/config.example.php` to `contact-config.php` and upload it **one level above** `public_html` (e.g. `~/domains/marloncoreas.com/contact-config.php`), then fill in `smtp_pass`.
3. Optionally set `booking_url` to include a scheduling link in the confirmation email, and set the same URL as `site.bookingUrl` in [`src/i18n.ts`](src/i18n.ts) to show the button on the success panel.

Until that file exists the form still works — it falls back to PHP `mail()` for the inquiry and skips the confirmation, rather than breaking between a deploy and the config upload. Check `contact-leads.log` (written above the document root) to see which transport was used: `via=smtp` means the mailer is live.

Any transactional email provider that offers SMTP credentials (Brevo, Resend, MailerSend, Amazon SES) can be used instead by changing only `contact-config.php` — no code change required.

`public/api/vendor/PHPMailer` is PHPMailer 6.9.3, vendored because static hosting has no Composer. Check [its releases](https://github.com/PHPMailer/PHPMailer/releases) once or twice a year and replace the three files if a security fix ships.

## Optional analytics

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` during build to enable privacy-reduced GA4 measurement. When omitted, no third-party analytics script loads. Conversion interactions still dispatch a local `portfolio:conversion` browser event so another analytics provider can be connected later without changing the markup.

When the custom domain is ready:

1. Set `NEXT_PUBLIC_SITE_URL` in the hosting environment (see `.env.example`).
2. Rebuild and redeploy — canonicals, `robots.txt`, and the sitemap are generated from that variable.

## SEO and performance

- Server-rendered HTML for both languages
- Canonical URLs and `hreflang` alternates
- Open Graph and Twitter metadata
- JSON-LD profile data
- XML sitemap and `robots.txt`
- Responsive WebP project imagery
- Reduced-motion support and accessible landmarks

Latest local Lighthouse production audit: 90 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO.
