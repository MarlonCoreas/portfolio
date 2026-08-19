import { copy, site, siteUrl, type Locale } from "../src/i18n";
import ClientEnhancements from "./ClientEnhancements";

type Props = {
  lang: Locale;
};

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4.5 15.5 15 5m0 0H7m8 0v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PortfolioPage({ lang }: Props) {
  const t = copy[lang];
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.subject)}`;
  const year = new Date().getFullYear();
  const canonical = lang === "en" ? `${siteUrl}/` : `${siteUrl}/es`;
  const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const privacyPath = lang === "en" ? "/privacy" : "/es/privacidad";

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
        image: `${siteUrl}/og.png`,
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
        <div className="shell header-inner">
          <a className="brand" href={lang === "en" ? "/" : "/es"} aria-label="Portfolio home">
            <span className="brand-glyph" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="brand-label">
              BUILD<span>/</span>SHIP
            </span>
          </a>

          <nav className="desktop-nav" aria-label={lang === "en" ? "Primary navigation" : "Navegación principal"}>
            <a href="#work">{t.nav.work}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#about">{t.nav.about}</a>
          </nav>

          <div className="header-actions">
            <a
              className="language-switch"
              href={t.alternatePath}
              hrefLang={lang === "en" ? "es" : "en"}
              lang={lang === "en" ? "es" : "en"}
              aria-label={lang === "en" ? "Ver en español" : "View in English"}
            >
              {t.alternateLabel}
            </a>
            <a className="header-cta" href="#contact" data-track="header_contact_click">
              <span>{t.nav.contact}</span>
              <span className="icon">
                <Arrow />
              </span>
            </a>
          </div>
        </div>
      </header>

      <main id="content">
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="shell hero-inner">
            <div className="hero-copy" data-reveal>
              <div className="availability">
                <span className="availability-pulse" aria-hidden="true" />
                {t.hero.status}
              </div>

              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1 id="hero-title">
                <span>{t.hero.titleStart}</span>
                <em>{t.hero.titleAccent}</em>
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

            <div className="hero-system" data-reveal data-spotlight>
              <div className="system-orbit orbit-one" aria-hidden="true" />
              <div className="system-orbit orbit-two" aria-hidden="true" />
              <div className="system-card">
                <div className="system-topline">
                  <span>{t.hero.consoleEyebrow}</span>
                  <span className="system-status">
                    <i /> online
                  </span>
                </div>
                <h2>{t.hero.consoleTitle}</h2>
                <div className="system-code" aria-label={t.hero.consoleTitle}>
                  {t.hero.consoleLines.map((line) => (
                    <div key={line.key}>
                      <span>{line.key}</span>
                      <strong>{line.value}</strong>
                    </div>
                  ))}
                </div>
                <div className="shipping-card">
                  <div className="shipping-icon" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div>
                    <small>{t.hero.shipping}</small>
                    <p>{t.hero.shippingValue}</p>
                  </div>
                </div>
              </div>
              <span className="system-coordinate coordinate-one">13.69°N</span>
              <span className="system-coordinate coordinate-two">DEV/26</span>
            </div>

            <div className="hero-proof" data-reveal>
              <p>{t.hero.proofLabel}</p>
              <div className="proof-list">
                {t.hero.proof.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="work section-grid" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">{t.work.eyebrow}</p>
              <div>
                <h2 id="work-title">{t.work.title}</h2>
                <p>{t.work.intro}</p>
              </div>
            </div>

            <div className="project-list">
              {t.work.items.map((project, index) => {
                // Every current project ships an image, so TypeScript narrows the
                // fallback branch to never. Widening here keeps the stealth visual
                // available for confidential work without an image to show.
                const projectImage: string | undefined = project.image;
                // Only LoanPilot publishes the reading it applies where the law
                // admits more than one, so the fourth evidence row is optional.
                const highlight = "highlight" in project ? project.highlight : undefined;
                return (
                <article
                  className={`project-card theme-${project.theme}`}
                  data-reveal
                  data-spotlight
                  key={project.number}
                >
                  <div className="project-visual">
                    {projectImage ? (
                      <>
                        <img
                          src={projectImage}
                          alt={project.alt}
                          width="1200"
                          height={project.imageHeight ?? 800}
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="project-chip">{project.kind}</span>
                        {index === 0 ? (
                          <img
                            className="project-app-icon"
                            src="/images/peek-icon.webp"
                            alt=""
                            width="82"
                            height="82"
                            loading="lazy"
                          />
                        ) : null}
                      </>
                    ) : (
                      <div className="stealth-visual" aria-hidden="true">
                        <div className="stealth-ring ring-a" />
                        <div className="stealth-ring ring-b" />
                        <div className="stealth-ring ring-c" />
                        <div className="stealth-center">
                          <span>{lang === "en" ? "BUILD" : "CREAR"}</span>
                          <strong>{project.number}</strong>
                          <span>{lang === "en" ? "TEST" : "PROBAR"}</span>
                        </div>
                        <span className="stealth-note note-a">{lang === "en" ? "research" : "estudio"}</span>
                        <span className="stealth-note note-b">{lang === "en" ? "prototype" : "prototipo"}</span>
                        <span className="stealth-note note-c">{lang === "en" ? "iterate" : "iterar"}</span>
                      </div>
                    )}
                  </div>

                  <div className="project-content">
                    <div className="project-number">{project.number}</div>
                    <div className="project-main">
                      <p className="project-kind">{project.kind}</p>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <p className="project-role">{project.role}</p>
                      <dl className="project-evidence">
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
                    </div>
                    {project.links.length > 0 ? (
                      <div className="project-links">
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
          <section className="testimonials section-grid" aria-labelledby="testimonials-title">
            <div className="shell">
              <div className="section-heading" data-reveal>
                <p className="eyebrow">{t.testimonials.eyebrow}</p>
                <div>
                  <h2 id="testimonials-title">{t.testimonials.title}</h2>
                </div>
              </div>
              <div className="testimonial-list">
                {t.testimonials.items.map((item) => (
                  <figure className="testimonial-card" data-reveal data-spotlight key={item.name}>
                    <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
                    <blockquote>
                      <p>{item.quote}</p>
                    </blockquote>
                    <figcaption>
                      <strong>{item.name}</strong>
                      <span>
                        {item.role} · {item.company}
                      </span>
                      {item.project ? <span className="testimonial-project">{item.project}</span> : null}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="services section-grid" id="services" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-heading section-heading-wide" data-reveal>
              <p className="eyebrow">{t.services.eyebrow}</p>
              <div>
                <h2 id="services-title">{t.services.title}</h2>
                <p>{t.services.intro}</p>
              </div>
            </div>

            <div className="service-grid">
              {t.services.items.map((service) => (
                <article className="service-card" data-reveal data-spotlight key={service.number}>
                  <div className="service-number">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <p className="service-fit">{service.fit}</p>
                  <p className="service-price">{service.priceFrom}</p>
                  <ul>
                    {service.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <a className="service-link" href={service.path} data-track="service_detail_open" data-track-label={service.title}>
                    <span>{service.linkLabel}</span>
                    <span className="icon"><Arrow /></span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-grid" aria-labelledby="approach-title">
          <div className="shell approach-inner">
            <div className="approach-copy" data-reveal>
              <p className="eyebrow">{t.approach.eyebrow}</p>
              <h2 id="approach-title">{t.approach.title}</h2>
              <p>{t.approach.intro}</p>
            </div>

            <ol className="approach-list">
              {t.approach.points.map((point, index) => (
                <li data-reveal key={point.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about section-grid" id="about" aria-labelledby="about-title">
          <div className="shell about-inner">
            <div className="about-mark" aria-hidden="true" data-reveal>
              <span className="about-bracket">[</span>
              <div className="about-core">
                <span>think</span>
                <strong>+</strong>
                <span>make</span>
              </div>
              <span className="about-bracket">]</span>
            </div>

            <div className="about-copy" data-reveal>
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2 id="about-title">{t.about.title}</h2>
              <p>{t.about.text}</p>
              <div className="about-availability">
                <span aria-hidden="true" />
                {t.about.availability}
              </div>
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

        <section className="fit section-grid" aria-labelledby="fit-title">
          <div className="shell">
            <div className="section-heading section-heading-wide" data-reveal>
              <p className="eyebrow">{t.fit.eyebrow}</p>
              <div>
                <h2 id="fit-title">{t.fit.title}</h2>
              </div>
            </div>
            <div className="fit-grid">
              <article className="fit-card fit-card-positive" data-reveal>
                <h3>{t.fit.goodTitle}</h3>
                <ul>
                  {t.fit.good.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="fit-card" data-reveal>
                <h3>{t.fit.notTitle}</h3>
                <ul>
                  {t.fit.not.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="faq section-grid" aria-labelledby="faq-title">
          <div className="shell faq-inner">
            <div className="faq-heading" data-reveal>
              <p className="eyebrow">{t.faq.eyebrow}</p>
              <h2 id="faq-title">{t.faq.title}</h2>
            </div>
            <div className="faq-list">
              {t.faq.items.map((item) => (
                <details key={item.question} data-reveal>
                  <summary>{item.question}<span aria-hidden="true">+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-grid" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <div className="contact-panel" data-reveal data-spotlight>
              <div className="contact-grid" aria-hidden="true" />
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 id="contact-title">{t.contact.title}</h2>
              <p className="contact-intro">{t.contact.text}</p>
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
                        className="button button-light"
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
                      <a className="button button-light" href="#work" data-track="contact_success_work">
                        <span>{t.contact.fields.successAction}</span>
                        <span className="icon"><Arrow /></span>
                      </a>
                    )}
                    <button type="button" className="contact-result-secondary" data-contact-reset>
                      {t.contact.fields.sendAnother}
                    </button>
                  </div>
                  <div className="contact-result-actions contact-result-error-actions">
                    <a className="button button-light" href={mailto} data-track="contact_error_email">
                      <span>{t.contact.fields.emailAction}</span>
                      <span className="icon"><Arrow /></span>
                    </a>
                  </div>
                </div>
              </section>
              <form className="contact-form" action="/api/contact.php" method="post" data-contact-form>
                <input type="hidden" name="language" value={lang} />
                <input type="hidden" name="redirect" value={lang === "en" ? "/" : "/es"} />
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
                    rows={6}
                    maxLength={2500}
                    required
                  />
                </div>
                <label className="consent-field form-field-wide">
                  <input type="checkbox" name="consent" value="yes" required />
                  <span>{t.contact.fields.consent} <a href={privacyPath}>{t.contact.fields.privacy}</a>.</span>
                </label>
                <div className="contact-submit form-field-wide">
                  <button className="button button-light" type="submit" data-contact-submit data-sending={t.contact.fields.sending}>
                    <span data-contact-submit-label>{t.contact.button}</span>
                    <span className="icon"><Arrow /></span>
                  </button>
                  <div>
                    <span>{t.contact.responseTime}</span>
                    <p>{t.contact.emailLabel} <a href={mailto} data-track="email_click">{site.email}</a></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-grid">
        <div className="shell">
          <div className="footer-top">
            <a className="brand" href={lang === "en" ? "/" : "/es"} aria-label="Portfolio home">
              <span className="brand-glyph" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="brand-label">
                BUILD<span>/</span>SHIP
              </span>
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
