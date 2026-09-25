import type { CSSProperties } from "react";
import { copy, site, siteUrl, type Locale } from "../src/i18n";
import ClientEnhancements from "./ClientEnhancements";

type Props = {
  lang: Locale;
};

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M3.5 10h13m0 0-5-5m5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Splits a heading into words so each one can rise out of its own mask. The
// spaces stay real text nodes, so assistive tech reads the sentence unchanged.
function SplitWords({ text }: { text: string }) {
  return (
    <span className="split">
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>
          {index > 0 ? " " : null}
          <span className="split-word" style={{ "--i": index } as CSSProperties}>
            <span>{word}</span>
          </span>
        </span>
      ))}
    </span>
  );
}

const serviceIcons = [
  // A page with a clear call to action.
  <svg viewBox="0 0 32 32" aria-hidden="true" key="site">
    <rect x="4.5" y="6.5" width="23" height="19" rx="1" />
    <path d="M4.5 11.5h23M9 16.5h9M9 20.5h5" />
    <circle cx="8" cy="9" r=".6" />
  </svg>,
  // Connected tools, one workflow.
  <svg viewBox="0 0 32 32" aria-hidden="true" key="software">
    <circle cx="8" cy="8" r="3.5" />
    <circle cx="24" cy="8" r="3.5" />
    <circle cx="16" cy="24" r="3.5" />
    <path d="M11 9.5 14 21M21 9.5 18 21M11.5 8h9" />
  </svg>,
  // Something new, from nothing.
  <svg viewBox="0 0 32 32" aria-hidden="true" key="product">
    <path d="M16 3.5v7M16 21.5v7M3.5 16h7M21.5 16h7" />
    <path d="m16 11 1.6 3.4L21 16l-3.4 1.6L16 21l-1.6-3.4L11 16l3.4-1.6Z" />
  </svg>
];

const numerals = ["I", "II", "III", "IV", "V", "VI"];

export default function PortfolioPage({ lang }: Props) {
  const t = copy[lang];
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.subject)}`;
  const year = new Date().getFullYear();
  const canonical = lang === "en" ? `${siteUrl}/` : `${siteUrl}/es`;
  const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const privacyPath = lang === "en" ? "/privacy" : "/es/privacidad";
  const homePath = lang === "en" ? "/" : "/es";

  const sections = [
    { id: "top", label: lang === "en" ? "Intro" : "Inicio" },
    { id: "work", label: t.nav.work },
    { id: "services", label: t.nav.services },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact }
  ];

  // One person across both languages, so the node carries a language-neutral
  // @id and every other node points at it instead of repeating the object.
  const personId = `${siteUrl}/#person`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: `${site.name} — Portfolio`,
        inLanguage: ["en", "es"]
      },
      {
        "@type": "ProfilePage",
        "@id": `${canonical}#profile`,
        url: canonical,
        name: t.seo.title,
        description: t.seo.description,
        inLanguage: lang,
        mainEntity: { "@id": personId }
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        jobTitle: "Independent Web & Software Developer",
        url: `${siteUrl}/`,
        email: site.email,
        knowsLanguage: ["en", "es"],
        nationality: { "@type": "Country", name: "El Salvador" },
        knowsAbout: [
          "Business websites",
          "Web platforms and client portals",
          "Custom web applications",
          "Online stores",
          "Booking and quoting systems",
          "Automation and integrations",
          "Desktop app development",
          "Search engine optimization",
          "Bilingual English and Spanish websites"
        ],
        sameAs: [
          site.githubUrl,
          site.linkedinUrl,
          site.peekUrl,
          site.remodelingUrl,
          site.loanpilotUrl
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${canonical}#service`,
        name: t.seo.title,
        url: canonical,
        description: t.seo.description,
        email: site.email,
        image: `${siteUrl}/og-noir-${lang}.jpg`,
        inLanguage: lang,
        provider: { "@id": personId },
        founder: { "@id": personId },
        availableLanguage: ["en", "es"],
        address: { "@type": "PostalAddress", addressCountry: "SV" },
        areaServed: t.seo.areaServed.map((place) => ({ "@type": place.type, name: place.name })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.nav.services,
          itemListElement: t.services.items.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.text,
              url: `${siteUrl}${service.path}`,
              provider: { "@id": personId }
            }
          }))
        }
      },
      {
        // Read from the same array that renders the accordion, so the markup
        // cannot drift from the visible text when the copy changes.
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        inLanguage: lang,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer }
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#content">
        {t.skip}
      </a>

      <header className="site-header" data-header>
        <div className="header-inner">
          <a className="wordmark" href={homePath} aria-label="Portfolio home">
            Marlon Coreas
          </a>

          <nav className="desktop-nav" aria-label={lang === "en" ? "Primary navigation" : "Navegación principal"}>
            {sections.slice(1, 4).map((section) => (
              <a href={`#${section.id}`} data-section-link={section.id} key={section.id}>
                {section.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <p className="language-pair">
              <span aria-current="true">{lang.toUpperCase()}</span>
              <a
                href={t.alternatePath}
                hrefLang={lang === "en" ? "es" : "en"}
                lang={lang === "en" ? "es" : "en"}
                aria-label={lang === "en" ? "Ver en español" : "View in English"}
              >
                {t.alternateLabel}
              </a>
            </p>
            <a className="header-cta" href="#contact" data-track="header_contact_click">
              {t.nav.contact}
            </a>
            <details className="menu" data-menu>
              <summary aria-label={lang === "en" ? "Menu" : "Menú"}>
                <span className="menu-dots" aria-hidden="true">
                  {Array.from({ length: 9 }, (_, index) => <i key={index} />)}
                </span>
              </summary>
              <div className="menu-panel">
                <nav aria-label={lang === "en" ? "Menu" : "Menú"}>
                  {sections.map((section, index) => (
                    <a href={`#${section.id}`} key={section.id}>
                      <span>0{index + 1}</span>
                      {section.label}
                    </a>
                  ))}
                </nav>
                <div className="menu-meta">
                  <a href={mailto}>{site.email}</a>
                  <a href={site.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                  <a href={site.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href={t.alternatePath}>{lang === "en" ? "Español" : "English"}</a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </header>

      <nav className="section-rail" aria-label={lang === "en" ? "Page sections" : "Secciones de la página"}>
        {sections.map((section) => (
          <a href={`#${section.id}`} data-section-link={section.id} key={section.id}>
            <span>{section.label}</span>
          </a>
        ))}
      </nav>

      <div className="social-rail">
        <a href={site.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">Gh</a>
        <a href={site.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">In</a>
      </div>

      <main id="content">
        <section className="hero" id="top" data-section aria-labelledby="hero-title">
          <div className="hero-light" aria-hidden="true" />
          <div className="shell hero-inner">
            <div className="hero-copy">
              <p className="availability">
                <span className="availability-pulse" aria-hidden="true" />
                {t.hero.status}
              </p>
              <p className="hero-eyebrow">{t.hero.eyebrow}</p>
              <h1 id="hero-title">
                <span className="hero-line">{t.hero.titleStart}</span>
                <em className="hero-line">{t.hero.titleAccent}</em>
              </h1>
              <p className="hero-intro">{t.hero.intro}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work" data-track="hero_evidence_click">
                  <span>{t.hero.primary}</span>
                  <span className="icon">
                    <Arrow />
                  </span>
                </a>
                <a className="button button-ghost" href="#contact" data-track="hero_contact_click">
                  {t.hero.secondary}
                </a>
              </div>
            </div>

            <div className="hero-stage" data-light>
              <div className="halo" aria-hidden="true" />
              <div className="orb" aria-hidden="true" />
              <div className="orb-floor" aria-hidden="true" />
              <div className="stage-caption">
                <p>{t.hero.consoleEyebrow}</p>
                <h2>{t.hero.consoleTitle}</h2>
              </div>
              <ol className="stage-notes">
                {t.hero.consoleLines.map((line) => (
                  <li key={line.key}>
                    <span>{line.key}</span>
                    <strong>{line.value}</strong>
                  </li>
                ))}
              </ol>
              <span className="stage-coordinate coordinate-one" aria-hidden="true">13.69°N 89.19°W</span>
              <span className="stage-coordinate coordinate-two" aria-hidden="true">DEV / 26</span>
            </div>
          </div>

          <div className="shell">
            <div className="hero-proof">
              <p className="hero-proof-label">{t.hero.proofLabel}</p>
              <dl>
                {t.hero.proof.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
                <div className="hero-principle">
                  <dt>{t.hero.shipping}</dt>
                  <dd>{t.hero.shippingValue}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="work" id="work" data-section aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">{t.work.eyebrow}</p>
              <h2 id="work-title">
                <SplitWords text={t.work.title} />
              </h2>
              <p className="section-intro">{t.work.intro}</p>
            </div>

            <div className="exhibit-list">
              {t.work.items.map((project, index) => {
                // Every current project ships an image, so TypeScript narrows the
                // fallback branch to never. Widening here keeps the veiled visual
                // available for confidential work without an image to show.
                const projectImage: string | undefined = project.image;
                // Only LoanPilot publishes the reading it applies where the law
                // admits more than one, so the fourth evidence row is optional.
                const highlight = "highlight" in project ? project.highlight : undefined;
                return (
                  <article className={`exhibit theme-${project.theme}`} key={project.number}>
                    <div className="exhibit-visual" data-reveal data-spotlight>
                      <span className="exhibit-index" aria-hidden="true">{project.number}</span>
                      {projectImage ? (
                        <figure className="exhibit-frame">
                          <img
                            src={projectImage}
                            alt={project.alt}
                            width="1200"
                            height={project.imageHeight ?? 800}
                            loading="lazy"
                            decoding="async"
                          />
                          {index === 0 ? (
                            <img
                              className="exhibit-app-icon"
                              src="/images/peek-icon.webp"
                              alt=""
                              width="82"
                              height="82"
                              loading="lazy"
                            />
                          ) : null}
                        </figure>
                      ) : (
                        <div className="exhibit-frame veiled" aria-hidden="true">
                          <div className="veiled-halo" />
                          <div className="veiled-orb" />
                          <span className="veiled-label">
                            {lang === "en" ? "In the studio" : "En el taller"}
                          </span>
                        </div>
                      )}
                      <p className="exhibit-plate">
                        <span>N° {project.number}</span>
                        <span>{project.kind}</span>
                      </p>
                    </div>

                    <div className="exhibit-content" data-reveal>
                      <p className="exhibit-kind">{project.kind}</p>
                      <h3>{project.title}</h3>
                      <p className="exhibit-description">{project.description}</p>
                      <p className="exhibit-role">{project.role}</p>
                      <dl className="exhibit-evidence">
                        <div>
                          <dt>{lang === "en" ? "Challenge" : "Problema"}</dt>
                          <dd>{project.challenge}</dd>
                        </div>
                        <div>
                          <dt>{lang === "en" ? "Delivered" : "Entregado"}</dt>
                          <dd>{project.delivered}</dd>
                        </div>
                        <div>
                          <dt>{lang === "en" ? "Evidence" : "Evidencia"}</dt>
                          <dd>{project.evidence}</dd>
                        </div>
                        {highlight ? (
                          <div className="evidence-highlight">
                            <dt>{highlight.label}</dt>
                            <dd>
                              {highlight.text}{" "}
                              <a
                                className="evidence-link"
                                href={highlight.link.href}
                                target="_blank"
                                rel="noreferrer"
                                data-track="evidence_link_open"
                                data-track-label={project.title}
                              >
                                {highlight.link.label}
                              </a>
                            </dd>
                          </div>
                        ) : null}
                      </dl>
                      <ul
                        className="tag-list"
                        aria-label={lang === "en" ? "Project characteristics" : "Características del proyecto"}
                      >
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                      {project.links.length > 0 ? (
                        <div className="exhibit-links">
                          {project.links.map((link) => (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              key={link.href}
                              data-track="case_study_open"
                              data-track-label={project.title}
                            >
                              <span>{link.label}</span>
                              <span className="icon">
                                <Arrow />
                              </span>
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {t.testimonials.items.length > 0 ? (
          <section className="testimonials" aria-labelledby="testimonials-title">
            <div className="shell">
              <div className="section-heading" data-reveal>
                <p className="eyebrow">{t.testimonials.eyebrow}</p>
                <h2 id="testimonials-title">
                  <SplitWords text={t.testimonials.title} />
                </h2>
              </div>
              <div className="testimonial-list">
                {t.testimonials.items.map((item) => (
                  <figure className="testimonial" data-reveal key={item.name}>
                    <blockquote>
                      <p>&ldquo;{item.quote}&rdquo;</p>
                    </blockquote>
                    <figcaption>
                      <strong>{item.name}</strong>
                      <span>
                        {item.role} · {item.company}
                      </span>
                      {item.project ? <span>{item.project}</span> : null}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="services" id="services" data-section aria-labelledby="services-title">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">{t.services.eyebrow}</p>
              <h2 id="services-title">
                <SplitWords text={t.services.title} />
              </h2>
              <p className="section-intro">{t.services.intro}</p>
            </div>

            <div className="service-grid">
              {t.services.items.map((service, index) => (
                <article className="service" data-reveal data-spotlight key={service.number}>
                  <div className="service-top">
                    <span className="service-icon">{serviceIcons[index]}</span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <p className="service-fit">{service.fit}</p>
                  <ul>
                    {service.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <p className="service-price">{service.priceFrom}</p>
                  <a className="service-link" href={service.path} data-track="service_detail_open" data-track-label={service.title}>
                    <span>{service.linkLabel}</span>
                    <span className="icon"><Arrow /></span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach" aria-labelledby="approach-title">
          <div className="approach-halo" aria-hidden="true" />
          <div className="shell approach-inner">
            <div className="approach-copy" data-reveal>
              <p className="eyebrow">{t.approach.eyebrow}</p>
              <h2 id="approach-title">
                <SplitWords text={t.approach.title} />
              </h2>
              <p>{t.approach.intro}</p>
            </div>

            <ol className="approach-list">
              {t.approach.points.map((point, index) => (
                <li data-reveal key={point.title}>
                  <span className="approach-numeral" aria-hidden="true">{numerals[index]}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about" id="about" data-section aria-labelledby="about-title">
          <div className="shell about-inner">
            <div className="about-plinth" aria-hidden="true" data-reveal>
              <div className="plinth-frame">
                <span className="plinth-monogram">
                  M<em>c</em>
                </span>
                <div className="plinth-ring" />
              </div>
              <p className="plinth-caption">
                <span>San Salvador</span>
                <span>13.69°N · 89.19°W</span>
              </p>
            </div>

            <div className="about-copy" data-reveal>
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2 id="about-title">
                <SplitWords text={t.about.title} />
              </h2>
              <p className="about-text">{t.about.text}</p>
              <p className="about-availability">
                <span aria-hidden="true" />
                {t.about.availability}
              </p>
              <div className="toolkit">
                <p>{t.about.capabilitiesLabel}</p>
                <ul>
                  {t.about.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="profile-links">
                {t.about.profileLinks.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                    <span>{link.label}</span>
                    <span className="icon"><Arrow /></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="fit" aria-labelledby="fit-title">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">{t.fit.eyebrow}</p>
              <h2 id="fit-title">
                <SplitWords text={t.fit.title} />
              </h2>
            </div>
            <div className="fit-grid">
              <article className="fit-column fit-positive" data-reveal>
                <h3>{t.fit.goodTitle}</h3>
                <ul>
                  {t.fit.good.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="fit-column" data-reveal>
                <h3>{t.fit.notTitle}</h3>
                <ul>
                  {t.fit.not.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="faq" aria-labelledby="faq-title">
          <div className="shell faq-inner">
            <div className="faq-heading" data-reveal>
              <p className="eyebrow">{t.faq.eyebrow}</p>
              <h2 id="faq-title">
                <SplitWords text={t.faq.title} />
              </h2>
            </div>
            <div className="faq-list">
              {t.faq.items.map((item) => (
                <details key={item.question} data-reveal>
                  <summary>{item.question}<span aria-hidden="true" /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact" data-section aria-labelledby="contact-title">
          <div className="contact-halo" aria-hidden="true" />
          <div className="shell contact-inner">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 id="contact-title">
                <SplitWords text={t.contact.title} />
              </h2>
              <p className="contact-intro">{t.contact.text}</p>
              <div className="contact-direct">
                <span>{t.contact.responseTime}</span>
                <p>{t.contact.emailLabel} <a href={mailto} data-track="email_click">{site.email}</a></p>
              </div>
            </div>

            <div className="contact-panel" data-reveal>
              <section
                className="contact-result"
                data-contact-status
                data-success-kicker={t.contact.fields.successKicker}
                data-success-title={t.contact.fields.successTitle}
                data-success={t.contact.fields.success}
                data-success-plain={t.contact.fields.successPlain}
                data-error-kicker={t.contact.fields.errorKicker}
                data-error-title={t.contact.fields.errorTitle}
                data-error={t.contact.fields.error}
                role="status"
                aria-live="polite"
                tabIndex={-1}
                hidden
              >
                <span className="contact-result-icon" aria-hidden="true" data-contact-result-icon>✓</span>
                <div className="contact-result-copy">
                  <p className="contact-result-kicker" data-contact-result-kicker />
                  <h3 data-contact-result-title />
                  <p className="contact-result-message" data-contact-result-message />
                  <div className="contact-result-actions contact-result-success-actions">
                    {site.bookingUrl ? (
                      <a
                        className="button button-primary"
                        href={site.bookingUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-track="contact_success_book"
                        data-contact-booking
                      >
                        <span>{t.contact.fields.bookAction}</span>
                        <span className="icon"><Arrow /></span>
                      </a>
                    ) : (
                      <a className="button button-primary" href="#work" data-track="contact_success_work">
                        <span>{t.contact.fields.successAction}</span>
                        <span className="icon"><Arrow /></span>
                      </a>
                    )}
                    <button type="button" className="contact-result-secondary" data-contact-reset>
                      {t.contact.fields.sendAnother}
                    </button>
                  </div>
                  <div className="contact-result-actions contact-result-error-actions">
                    <a className="button button-primary" href={mailto} data-track="contact_error_email">
                      <span>{t.contact.fields.emailAction}</span>
                      <span className="icon"><Arrow /></span>
                    </a>
                  </div>
                </div>
              </section>
              <form className="contact-form" action="/api/contact.php" method="post" data-contact-form>
                <input type="hidden" name="language" value={lang} />
                <input type="hidden" name="redirect" value={homePath} />
                {/* Filled in at submit time with how long the form was open. A
                    bot posting straight at the endpoint leaves it empty, which
                    the server scores rather than rejects. */}
                <input type="hidden" name="elapsed" value="" data-contact-elapsed />
                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor={`website-${lang}`}>Website</label>
                  <input id={`website-${lang}`} name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="form-field">
                  <label htmlFor={`name-${lang}`}>{t.contact.fields.name}</label>
                  <input id={`name-${lang}`} name="name" type="text" autoComplete="name" maxLength={100} required />
                </div>
                <div className="form-field">
                  <label htmlFor={`email-${lang}`}>{t.contact.fields.email}</label>
                  <input id={`email-${lang}`} name="email" type="email" autoComplete="email" maxLength={160} required />
                </div>
                <div className="form-field form-field-wide">
                  <label htmlFor={`company-${lang}`}>{t.contact.fields.company}</label>
                  <input id={`company-${lang}`} name="company" type="text" autoComplete="organization" maxLength={220} />
                </div>
                <div className="form-field">
                  <label htmlFor={`project-type-${lang}`}>{t.contact.fields.projectType}</label>
                  <select id={`project-type-${lang}`} name="project_type" required defaultValue="">
                    <option value="" disabled>—</option>
                    {t.contact.fields.projectOptions.map((option) => (
                      <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor={`timeline-${lang}`}>{t.contact.fields.timeline}</label>
                  <select id={`timeline-${lang}`} name="timeline" required defaultValue="">
                    <option value="" disabled>—</option>
                    {t.contact.fields.timelineOptions.map((option) => (
                      <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field form-field-wide">
                  <label htmlFor={`budget-${lang}`}>{t.contact.fields.budget}</label>
                  <select id={`budget-${lang}`} name="budget" required defaultValue="">
                    <option value="" disabled>—</option>
                    {t.contact.fields.budgetOptions.map((option) => (
                      <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field form-field-wide">
                  <label htmlFor={`goal-${lang}`}>{t.contact.fields.goal}</label>
                  <textarea
                    id={`goal-${lang}`}
                    name="goal"
                    placeholder={t.contact.fields.goalPlaceholder}
                    rows={5}
                    maxLength={2500}
                    required
                  />
                </div>
                <label className="consent-field form-field-wide">
                  <input type="checkbox" name="consent" value="yes" required />
                  <span>{t.contact.fields.consent} <a href={privacyPath}>{t.contact.fields.privacy}</a>.</span>
                </label>
                <div className="contact-submit form-field-wide">
                  <button className="button button-primary" type="submit" data-contact-submit data-sending={t.contact.fields.sending}>
                    <span data-contact-submit-label>{t.contact.button}</span>
                    <span className="icon"><Arrow /></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <div className="footer-intro">
              <a className="wordmark" href={homePath} aria-label="Portfolio home">
                Marlon Coreas
              </a>
              <p>{t.footer.tagline}</p>
            </div>
            <div className="footer-links">
              <div>
                <p>{t.footer.navigation}</p>
                <a href="#work">{t.nav.work}</a>
                <a href="#services">{t.nav.services}</a>
                <a href="#about">{t.nav.about}</a>
              </div>
              <div>
                <p>{t.footer.projects}</p>
                <a href={site.peekUrl} target="_blank" rel="noreferrer">
                  Peek Compress
                </a>
                <a href={site.remodelingUrl} target="_blank" rel="noreferrer">
                  NC Home Remodeling
                </a>
                <a href={site.loanpilotUrl} target="_blank" rel="noreferrer">
                  LoanPilot
                </a>
              </div>
              <div>
                <p>{t.footer.connect}</p>
                <a href={site.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={site.linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={mailto}>{site.email}</a>
                <a href={t.alternatePath}>{lang === "en" ? "Español" : "English"}</a>
                <a href={privacyPath}>{t.footer.privacy}</a>
              </div>
            </div>
          </div>
          <p className="footer-signature" aria-hidden="true">
            Marlon <em>Coreas</em>
          </p>
          <div className="footer-bottom">
            <span>© {year}</span>
            <span>{t.footer.legal}</span>
            <a href="#content">{t.footer.backToTop} ↑</a>
          </div>
        </div>
      </footer>
      <ClientEnhancements analyticsId={analyticsId} />
    </>
  );
}
