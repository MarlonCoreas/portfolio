# Independent Developer Portfolio

A bilingual portfolio built with vinext. English is the default language and Spanish lives at `/es`.

**Live site:** [mscoreas-portfolio.mcoreas279.chatgpt.site](https://mscoreas-portfolio.mcoreas279.chatgpt.site)

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

## Update personal details

The shared email address, social links, project links, and all English/Spanish copy live in [`src/i18n.ts`](src/i18n.ts). Update the `site` object first when a dedicated portfolio email becomes available. The canonical site URL is also centralized there as `siteUrl`.

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
