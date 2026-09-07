import { copy, type Locale } from "../../src/i18n";
import { site } from "../../src/config/site";
import { routePath } from "../../src/config/routes";
import Arrow from "../ui/ArrowIcon";

export default function ContactSection({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.subject)}`;
  const privacyPath = routePath("privacy", lang);
  return (
        <section className="contact section-grid" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <div className="contact-panel" data-spotlight data-reveal>
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
                  <label htmlFor={`goal-${lang}`}>{t.contact.fields.goal}</label>
                  <textarea
                    id={`goal-${lang}`}
                    name="goal"
                    placeholder={t.contact.fields.goalPlaceholder}
                    rows={4}
                    maxLength={2500}
                    required
                  />
                </div>
                <details className="contact-options form-field-wide">
                  <summary>{t.contact.fields.optionalContext}<span aria-hidden="true">+</span></summary>
                  <div className="contact-options-grid">
                    <div className="form-field form-field-wide">
                      <label htmlFor={`company-${lang}`}>{t.contact.fields.company}</label>
                      <input id={`company-${lang}`} name="company" type="text" autoComplete="organization" maxLength={220} />
                    </div>
                    <div className="form-field">
                      <label htmlFor={`project-type-${lang}`}>{t.contact.fields.projectType}</label>
                      <select id={`project-type-${lang}`} name="project_type" defaultValue="">
                        <option value="">{t.contact.fields.notSpecified}</option>
                        {t.contact.fields.projectOptions.map((option) => (
                          <option value={option.value} key={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor={`timeline-${lang}`}>{t.contact.fields.timeline}</label>
                      <select id={`timeline-${lang}`} name="timeline" defaultValue="">
                        <option value="">{t.contact.fields.notSpecified}</option>
                        {t.contact.fields.timelineOptions.map((option) => (
                          <option value={option.value} key={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field form-field-wide">
                      <label htmlFor={`budget-${lang}`}>{t.contact.fields.budget}</label>
                      <select id={`budget-${lang}`} name="budget" defaultValue="">
                        <option value="">{t.contact.fields.notSpecified}</option>
                        {t.contact.fields.budgetOptions.map((option) => (
                          <option value={option.value} key={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </details>
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
  );
}
