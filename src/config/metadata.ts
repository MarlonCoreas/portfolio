import { copy, type Locale } from "../i18n";
import { site, siteUrl } from "./site";
import { alternateLocale, routeAlternates, routePath } from "./routes";

export function siteMetadata(lang: Locale) {
  const t = copy[lang];
  return {
    metadataBase: new URL(siteUrl),
    title: t.seo.title,
    description: t.seo.description,
    robots: { index: true, follow: true },
    alternates: routeAlternates("home", lang),
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-96.png", type: "image/png", sizes: "96x96" }
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
    },
    openGraph: {
      type: "website",
      siteName: `${site.name} — ${lang === "en" ? "Portfolio" : "Portafolio"}`,
      title: t.seo.title,
      description: t.seo.description,
      url: routePath("home", lang),
      locale: t.locale,
      alternateLocale: [copy[alternateLocale(lang)].locale],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "More useful inquiries. Less manual work. — Marlon Coreas" }]
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
      images: ["/og.png"]
    }
  };

}
