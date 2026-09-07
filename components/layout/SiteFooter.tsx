import { copy, type Locale } from "../../src/i18n";
import { site } from "../../src/config/site";
import { mainNavigation, projectLinks, socialLinks } from "../../src/config/navigation";
import { homeSectionHref, routePath } from "../../src/config/routes";
import BrandName from "./BrandName";
import LanguageSwitch from "./LanguageSwitch";

export default function SiteFooter({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.subject)}`;
  return (
    <footer className="site-footer section-grid">
      <div className="shell">
        <div className="footer-top">
          <a className="brand" href={routePath("home", lang)} aria-label={`${site.name} — ${lang === "en" ? "home" : "inicio"}`}><BrandName /></a>
          <p>{t.footer.tagline}</p>
        </div>
        <div className="footer-links">
          <div>
            <p>{t.footer.navigation}</p>
            {mainNavigation.map((section) => <a key={section} href={homeSectionHref(lang, section)}>{t.nav[section]}</a>)}
          </div>
          <div>
            <p>{t.footer.projects}</p>
            {projectLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
          </div>
          <div>
            <p>{t.footer.connect}</p>
            {socialLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
            <a href={mailto}>{site.email}</a>
            <LanguageSwitch lang={lang} compact={false} />
            <a href={routePath("privacy", lang)}>{t.footer.privacy}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()}</span>
          <span>{t.footer.legal}</span>
          <a href="#content">{t.footer.backToTop} ↑</a>
        </div>
      </div>
    </footer>
  );
}
