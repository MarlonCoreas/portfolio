import { privacyContent } from "../src/content/privacy";
import ActionLink from "./ui/ActionLink";
import type { Locale } from "../src/i18n";

export default function PrivacyPage({ lang }: { lang: Locale }) {
  const t = privacyContent[lang];
  return (
    <main id="content" tabIndex={-1} className="legal-page section-grid">
      <div className="shell legal-page-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="legal-updated">{t.updated}</p>
        <div className="legal-sections">
          {t.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
        <ActionLink href={t.home} arrow>{t.back}</ActionLink>
      </div>
    </main>
  );
}
