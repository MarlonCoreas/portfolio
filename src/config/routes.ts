import paths from "./routes.json" with { type: "json" };
import type { Locale } from "../i18n";

export type PageKey = keyof typeof paths;
export type HomeSection = "work" | "services" | "about" | "contact";
export const locales: readonly Locale[] = ["en", "es"];
export const pageKeys = Object.keys(paths) as PageKey[];
export const routePath = (page: PageKey, lang: Locale): string => paths[page][lang];
export const homeSectionHref = (lang: Locale, section: HomeSection): string => `${routePath("home", lang)}#${section}`;
export const alternateLocale = (lang: Locale): Locale => lang === "en" ? "es" : "en";

export function pageForPath(pathname: string): PageKey | undefined {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return pageKeys.find((page) => locales.some((lang) => routePath(page, lang) === normalized));
}

export function alternateHref(pathname: string, lang: Locale): string {
  return routePath(pageForPath(pathname) ?? "home", alternateLocale(lang));
}

export function routeAlternates(page: PageKey, lang: Locale) {
  return { canonical: routePath(page, lang), languages: { ...paths[page], "x-default": paths[page].en } };
}
