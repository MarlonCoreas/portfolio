import { copy, site, siteUrl, type Locale } from "../src/i18n";

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

const clientScript = `
  (() => {
    const header = document.querySelector("[data-header]");
    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      }, { threshold: 0.12 });

      document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
      document.querySelectorAll("[data-spotlight]").forEach((element) => {
        element.addEventListener("pointermove", (event) => {
          const rect = element.getBoundingClientRect();
          element.style.setProperty("--spot-x", event.clientX - rect.left + "px");
          element.style.setProperty("--spot-y", event.clientY - rect.top + "px");
        });
      });
    } else {
      document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
    }
  })();
`;

export default function PortfolioPage({ lang }: Props) {
  const t = copy[lang];
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.subject)}`;
  const year = new Date().getFullYear();
  const canonical = lang === "en" ? `${siteUrl}/` : `${siteUrl}/es`;

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
        mainEntity: {
          "@type": "Person",
          name: site.name,
          jobTitle: "Software Engineer & Product Builder",
          knowsAbout: [
            "Native macOS development",
            "Product engineering",
            "Web development",
            "Astro",
            "TypeScript",
            "Technical SEO",
            "Internationalization"
          ],
          sameAs: [site.githubUrl, site.linkedinUrl, site.peekUrl, site.remodelingUrl]
        }
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
            <a className="header-cta" href="#contact">
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
                <a className="button button-primary" href="#work">
                  <span>{t.hero.primary}</span>
                  <span className="icon">
                    <Arrow />
                  </span>
                </a>
                <a className="button button-ghost" href="#contact">
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
              {t.work.items.map((project, index) => (
                <article
                  className={`project-card theme-${project.theme}`}
                  data-reveal
                  data-spotlight
                  key={project.number}
                >
                  <div className="project-visual">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.alt}
                          width="1200"
                          height={index === 0 ? "750" : "800"}
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
                          <span>BUILD</span>
                          <strong>03</strong>
                          <span>TEST</span>
                        </div>
                        <span className="stealth-note note-a">research</span>
                        <span className="stealth-note note-b">prototype</span>
                        <span className="stealth-note note-c">iterate</span>
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
                          <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
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
              ))}
            </div>
          </div>
        </section>

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
                  <ul>
                    {service.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
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
                <p>{t.about.stackLabel}</p>
                <ul>
                  {t.about.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
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
              <div className="contact-actions">
                <a className="button button-light" href={mailto}>
                  <span>{t.contact.button}</span>
                  <span className="icon">
                    <Arrow />
                  </span>
                </a>
                <div>
                  <span>{t.contact.emailLabel}</span>
                  <a href={mailto}>{site.email}</a>
                </div>
              </div>
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
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year}</span>
            <span>{t.footer.legal}</span>
            <a href="#content">{t.footer.backToTop} ↑</a>
          </div>
        </div>
      </footer>
      <script dangerouslySetInnerHTML={{ __html: clientScript }} />
    </>
  );
}
