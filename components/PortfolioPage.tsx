import ActionLink from "./ui/ActionLink";
import Arrow from "./ui/ArrowIcon";
import ContactSection from "./portfolio/ContactSection";
import SectionHeading from "./ui/SectionHeading";
import { routePath } from "../src/config/routes";
import { site, siteUrl } from "../src/config/site";
import { copy, type Locale } from "../src/i18n";

type Props = {
  lang: Locale;
};

export default function PortfolioPage({ lang }: Props) {
  const t = copy[lang];
  const canonical = `${siteUrl}${routePath("home", lang)}`;

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
      <main id="content" tabIndex={-1}>
        <section className="hero section-grid" aria-labelledby="hero-title">

          <div className="shell hero-inner">
            <div className="hero-copy" data-reveal>
              <div className="availability">
                <span className="availability-pulse" aria-hidden="true" />
                {t.hero.status}
              </div>

              <p className="eyebrow">{site.name}<span className="hero-role">{t.hero.role}</span></p>
              <h1 id="hero-title">
                <span>{t.hero.titleStart}</span>
                <em>{t.hero.titleAccent}</em>
              </h1>
              <p className="hero-intro">{t.hero.intro}</p>

              <div className="hero-actions">
                <ActionLink href="#work" data-track="hero_evidence_click" arrow>{t.hero.primary}</ActionLink>
                <ActionLink variant="ghost" href="#contact" data-track="hero_contact_click">{t.hero.secondary}</ActionLink>
              </div>
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
            <SectionHeading id="work-title" eyebrow={t.work.eyebrow} title={t.work.title} intro={t.work.intro} />

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
                  data-spotlight
                  data-reveal

                  key={project.number}
                  id={`project-${project.number}`}
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
                    <div className="project-main">
                      <p className="project-kind">{project.kind}</p>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <p className="project-role">{project.role}</p>
                      <details className="project-details">
                        <summary>{lang === "es" ? "Detrás del proyecto" : "Behind the project"}<span aria-hidden="true">+</span></summary>
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
                      </details>
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
              <SectionHeading id="testimonials-title" eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
              <div className="testimonial-list">
                {t.testimonials.items.map((item) => (
                  <figure className="testimonial-card" data-spotlight data-reveal key={item.name}>
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
            <SectionHeading id="services-title" eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} wide />

            <div className="service-grid">
              {t.services.items.map((service) => (
                <article className="service-card" data-spotlight data-reveal key={service.number}>
                  <div className="service-topline"><span className="service-number">{service.number}</span><span className="service-price">{service.priceFrom}</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <p className="service-fit">{service.fit}</p>
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

          {/* The fit lists close the same argument as the steps above: what the
              engagement looks like, and when it is worth starting at all. */}
          <div className="shell fit-block">
            <h3 className="fit-title" id="fit-title">{t.approach.fitTitle}</h3>
            <div className="fit-grid">
              <article className="fit-card fit-card-positive" data-reveal>
                <h4>{t.approach.goodTitle}</h4>
                <ul>
                  {t.approach.good.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="fit-card" data-reveal>
                <h4>{t.approach.notTitle}</h4>
                <ul>
                  {t.approach.not.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="about section-grid" id="about" aria-labelledby="about-title">
          <div className="shell about-inner">
            <div className="personal-card" data-spotlight data-reveal>
              <p className="personal-location">{t.about.location}</p>
              <span className="personal-monogram" aria-hidden="true">mc<span>.</span></span>
              <div className="personal-identity">
                <p>{site.name}</p>
                <span>{t.about.personalRole}</span>
              </div>
              <p className="personal-note">{t.about.personalNote}</p>
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

        <ContactSection lang={lang} />
      </main>

    </>
  );
}
