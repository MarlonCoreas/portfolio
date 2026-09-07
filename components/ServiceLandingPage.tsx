import ActionLink from "./ui/ActionLink";
import { homeSectionHref } from "../src/config/routes";
import { serviceContent } from "../src/content/services";
import { site } from "../src/config/site";
import type { Locale } from "../src/i18n";

type ServiceKind = "websites" | "software";

type Props = {
  lang: Locale;
  service: ServiceKind;
};

export default function ServiceLandingPage({ lang, service }: Props) {
  const locale = serviceContent[lang];
  const t = locale.services[service];
  const contactPath = homeSectionHref(lang, "contact");

  return (
    <>
      <main id="content" tabIndex={-1} className="service-page">
        <section className="service-page-hero section-grid">
          <div className="shell">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="service-page-intro">{t.intro}</p>
            <div className="service-page-actions">
              <ActionLink href={contactPath} arrow>{locale.contactLabel}</ActionLink>
              <ActionLink variant="ghost" href={locale.home}>{locale.homeLabel}</ActionLink>
            </div>
            <ul className="service-page-proof">
              {t.proof.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="service-page-section section-grid">
          <div className="shell service-page-two-column">
            <h2>{t.problemTitle}</h2>
            <ul className="service-page-problems">
              {t.problems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        {/* The Spanish service card links to #productos, so the anchor has to be
            localised or that link lands nowhere. */}
        <section
          className="service-page-section service-page-light section-grid"
          id={service === "software" ? (lang === "en" ? "products" : "productos") : undefined}
        >
          <div className="shell">
            <h2>{t.deliverTitle}</h2>
            <div className="service-page-deliverables">
              {t.deliverables.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-page-section section-grid">
          <div className="shell service-page-two-column service-page-honesty">
            <h2>{t.evidenceTitle}</h2>
            <p>{t.evidence}</p>
          </div>
        </section>

        <section className="service-page-cta section-grid">
          <div className="shell">
            <p className="eyebrow">{site.name}</p>
            <h2>{t.nextTitle}</h2>
            <p>{t.nextText}</p>
            <ActionLink variant="light" href={contactPath} arrow>{locale.contactLabel}</ActionLink>
          </div>
        </section>
      </main>
    </>
  );
}
