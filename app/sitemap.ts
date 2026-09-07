import { siteUrl } from "../src/config/site";
import { locales, pageKeys, routePath, type PageKey } from "../src/config/routes";

const priorities: Record<PageKey, number> = { home: 1, websites: 0.85, software: 0.8, privacy: 0.2 };

export default function sitemap() {
  const lastModified = new Date();
  return pageKeys.flatMap((page) => locales.map((lang) => ({
    url: `${siteUrl}${routePath(page, lang)}`,
    lastModified,
    changeFrequency: page === "privacy" ? "yearly" : "monthly",
    priority: page === "home" && lang === "es" ? 0.9 : priorities[page],
    alternates: { languages: Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}${routePath(page, locale)}`])) }
  })));
}
