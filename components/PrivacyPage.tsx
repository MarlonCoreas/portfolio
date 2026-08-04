import { site, type Locale } from "../src/i18n";

const content = {
  en: {
    home: "/",
    alternate: "/es/privacidad",
    alternateLabel: "ES",
    eyebrow: "Plain-language privacy",
    title: "Your project details are used to answer you — nothing more.",
    updated: "Last updated: August 4, 2026",
    sections: [
      { title: "What the contact form sends", text: "When you submit the project form, it sends the name, email, company or website, project type, timing, budget range and message that you choose to provide." },
      { title: "Why it is used", text: "The information is used only to review your inquiry, reply to you and decide whether a project conversation would be useful." },
      { title: "Where it goes", text: `The form delivers the message to ${site.email}. The website does not create a marketing account or sell the information. Hosting and email providers may process the message as necessary to deliver and protect their services.` },
      { title: "Analytics", text: "The site can use a configured analytics service to measure broad interactions such as opening a service page or submitting the form. Advertising profiles are not intentionally created. If analytics is not configured, those events remain only inside the browser." },
      { title: "Your choice", text: `You can avoid the form and write directly to ${site.email}. You may also ask for your inquiry to be corrected or deleted, subject to any information that must be retained for legitimate business or legal reasons.` }
    ],
    back: "Back to the portfolio"
  },
  es: {
    home: "/es",
    alternate: "/privacy",
    alternateLabel: "EN",
    eyebrow: "Privacidad en lenguaje claro",
    title: "Los detalles de tu proyecto se usan para responderte, nada más.",
    updated: "Última actualización: 4 de agosto de 2026",
    sections: [
      { title: "Qué envía el formulario", text: "Al enviar el formulario se transmite el nombre, correo, empresa o sitio, tipo de proyecto, plazo, rango de inversión y mensaje que decidas proporcionar." },
      { title: "Para qué se usa", text: "La información se usa únicamente para revisar la consulta, responderte y decidir si una conversación sobre el proyecto sería útil." },
      { title: "A dónde llega", text: `El formulario entrega el mensaje a ${site.email}. El sitio no crea una cuenta de mercadeo ni vende la información. Los proveedores de alojamiento y correo pueden procesarla cuando sea necesario para entregar y proteger sus servicios.` },
      { title: "Analítica", text: "El sitio puede utilizar un servicio de analítica configurado para medir interacciones generales, como abrir una página de servicio o enviar el formulario. No se crean intencionalmente perfiles publicitarios. Si la analítica no está configurada, esos eventos permanecen solamente en el navegador." },
      { title: "Tu elección", text: `Puedes evitar el formulario y escribir directamente a ${site.email}. También puedes solicitar que tu consulta sea corregida o eliminada, salvo la información que deba conservarse por razones comerciales o legales legítimas.` }
    ],
    back: "Volver al portafolio"
  }
} as const;

export default function PrivacyPage({ lang }: { lang: Locale }) {
  const t = content[lang];
  return (
    <main className="legal-page section-grid">
      <div className="shell legal-page-inner">
        <nav className="legal-nav" aria-label={lang === "en" ? "Privacy navigation" : "Navegación de privacidad"}>
          <a className="brand" href={t.home}>
            <span className="brand-glyph" aria-hidden="true"><i /><i /><i /></span>
            <span className="brand-label">MARLON<span>/</span>COREAS</span>
          </a>
          <a className="language-switch" href={t.alternate}>{t.alternateLabel}</a>
        </nav>
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
        <a className="button button-primary" href={t.home}>{t.back} ↗</a>
      </div>
    </main>
  );
}
