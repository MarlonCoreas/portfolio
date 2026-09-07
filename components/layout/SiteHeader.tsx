import { copy, type Locale } from "../../src/i18n";
import { site } from "../../src/config/site";
import { mainNavigation } from "../../src/config/navigation";
import { homeSectionHref, routePath } from "../../src/config/routes";
import BrandName from "./BrandName";
import LanguageSwitch from "./LanguageSwitch";

export default function SiteHeader({ lang }: { lang: Locale }) {
  const t = copy[lang];
  return (
    <header className="site-header" data-header>
      <div className="shell header-inner">
        <a className="brand" href={routePath("home", lang)} aria-label={`${site.name} — ${lang === "en" ? "home" : "inicio"}`}>
          <BrandName />
        </a>
        <nav className="desktop-nav" aria-label={lang === "en" ? "Primary navigation" : "Navegación principal"}>
          {mainNavigation.map((section) => <a key={section} href={homeSectionHref(lang, section)}>{t.nav[section]}</a>)}
        </nav>
        <div className="header-actions">
          <LanguageSwitch lang={lang} />
          <a className="header-cta" href={homeSectionHref(lang, "contact")} data-track="header_contact_click">
            <span>{t.nav.contact}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
