import { site, type Locale } from "../src/i18n";
import ClientEnhancements from "./ClientEnhancements";

type ServiceKind = "websites" | "software";

type Props = {
  lang: Locale;
  service: ServiceKind;
};

const content = {
  en: {
    home: "/",
    homeLabel: "Back to portfolio",
    contactLabel: "Discuss a project",
    alternateLabel: "ES",
    services: {
      websites: {
        alternatePath: "/es/servicios/sitios-web",
        eyebrow: "Business websites",
        title: "A clear sales presence for a real service business.",
        intro: "For companies whose reputation is stronger than their current website. The goal is not to add decoration; it is to help the right customer understand the offer, trust the business and know what to do next.",
        proof: ["Bilingual English and Spanish", "Built for mobile and accessibility", "Search-ready technical foundation"],
        problemTitle: "This is useful when",
        problems: [
          "Customers repeatedly ask questions the website should answer",
          "Finished work and expertise are difficult to evaluate online",
          "The site is slow, dated, hard to update or weak on mobile",
          "English and Spanish visitors receive an inconsistent experience"
        ],
        deliverTitle: "What the engagement can include",
        deliverables: [
          { title: "Positioning and structure", text: "Clarify the audience, offer, proof and action each page needs to support." },
          { title: "Content and bilingual experience", text: "Write or refine practical content in English and Spanish without literal, awkward translation." },
          { title: "Design and development", text: "Create a responsive, accessible interface and a maintainable production build." },
          { title: "Launch foundations", text: "Set up metadata, structured content, sitemap, analytics events and a clear handover." }
        ],
        evidenceTitle: "What I will and will not promise",
        evidence: "I can improve the message, contact path, performance and technical search foundations, then help measure what happens. I will not guarantee rankings, leads or revenue that depend on the market, the offer and how inquiries are handled.",
        nextTitle: "A useful first conversation",
        nextText: "Send the current website, the services that matter most and what a qualified inquiry looks like. I will reply with the first practical question or tell you if a smaller solution is enough."
      },
      software: {
        alternatePath: "/es/servicios/software-a-la-medida",
        eyebrow: "Custom software and new products",
        title: "Software shaped around the work, not the other way around.",
        intro: "For teams losing time to repeated manual steps, disconnected tools or a product idea that needs a focused first release. We begin by understanding the workflow before discussing features.",
        proof: ["Direct work with the builder", "Focused first release", "Web and desktop experience"],
        problemTitle: "This is useful when",
        problems: [
          "The same information is copied between spreadsheets, email and paid tools",
          "Quoting, booking, reporting or client follow-up depends on fragile manual steps",
          "An off-the-shelf product forces the team into the wrong process",
          "A new product needs evidence before a large feature investment"
        ],
        deliverTitle: "What the engagement can include",
        deliverables: [
          { title: "Workflow discovery", text: "Map users, decisions, exceptions, existing tools and the cost of the current process." },
          { title: "Product scope", text: "Define the smallest release that solves an essential problem and what is deliberately left out." },
          { title: "Design and engineering", text: "Build a usable, maintainable web or desktop experience with visible review points." },
          { title: "Launch and evolution", text: "Prepare access, documentation, deployment and the evidence needed to decide what comes next." }
        ],
        evidenceTitle: "What I will and will not promise",
        evidence: "I can make the workflow explicit, reduce unnecessary steps and build the agreed product. I will not pretend that more features guarantee adoption. Product decisions should follow observed use and business evidence.",
        nextTitle: "A useful first conversation",
        nextText: "Describe the current process, who performs it, where it breaks and what a better day would look like. A feature list is optional; the problem is more valuable."
      }
    }
  },
  es: {
    home: "/es",
    homeLabel: "Volver al portafolio",
    contactLabel: "Hablar de un proyecto",
    alternateLabel: "EN",
    services: {
      websites: {
        alternatePath: "/services/websites",
        eyebrow: "Sitios web para negocios",
        title: "Una presencia comercial clara para un negocio real.",
        intro: "Para empresas cuya reputación es mejor que su sitio actual. El objetivo no es agregar decoración: es ayudar al cliente correcto a entender la oferta, confiar en el negocio y saber qué hacer después.",
        proof: ["Inglés y español", "Pensado para móvil y accesibilidad", "Base técnica preparada para buscadores"],
        problemTitle: "Es útil cuando",
        problems: [
          "Los clientes hacen preguntas que el sitio debería responder",
          "Es difícil evaluar en línea el trabajo terminado y la experiencia",
          "El sitio es lento, anticuado, difícil de actualizar o funciona mal en móvil",
          "Los visitantes en español e inglés reciben experiencias inconsistentes"
        ],
        deliverTitle: "Qué puede incluir el proyecto",
        deliverables: [
          { title: "Posicionamiento y estructura", text: "Aclarar la audiencia, la oferta, la evidencia y la acción que cada página debe apoyar." },
          { title: "Contenido y experiencia bilingüe", text: "Escribir o mejorar contenido práctico en español e inglés sin traducciones literales incómodas." },
          { title: "Diseño y desarrollo", text: "Crear una interfaz adaptable y accesible, con una implementación fácil de mantener." },
          { title: "Fundamentos de lanzamiento", text: "Preparar metadatos, contenido estructurado, sitemap, eventos de analítica y una entrega clara." }
        ],
        evidenceTitle: "Lo que prometo y lo que no",
        evidence: "Puedo mejorar el mensaje, la ruta de contacto, el rendimiento y los fundamentos técnicos de búsqueda, y después ayudar a medir lo que ocurre. No garantizaré posiciones, consultas o ingresos que dependen del mercado, la oferta y cómo se atienden los contactos.",
        nextTitle: "Una primera conversación útil",
        nextText: "Envía el sitio actual, los servicios más importantes y cómo se ve una consulta calificada. Responderé con la primera pregunta práctica o te diré si una solución más pequeña es suficiente."
      },
      software: {
        alternatePath: "/services/custom-software",
        eyebrow: "Software a medida y productos nuevos",
        title: "Software adaptado al trabajo, no al revés.",
        intro: "Para equipos que pierden tiempo en pasos manuales, herramientas desconectadas o una idea que necesita una primera versión enfocada. Comenzamos entendiendo el flujo antes de hablar de funciones.",
        proof: ["Trabajo directo con quien desarrolla", "Primera versión enfocada", "Experiencia web y de escritorio"],
        problemTitle: "Es útil cuando",
        problems: [
          "La misma información se copia entre hojas de cálculo, correos y herramientas pagadas",
          "Cotizar, reservar, reportar o dar seguimiento depende de pasos manuales frágiles",
          "Un producto genérico obliga al equipo a usar un proceso incorrecto",
          "Un producto nuevo necesita evidencia antes de invertir en muchas funciones"
        ],
        deliverTitle: "Qué puede incluir el proyecto",
        deliverables: [
          { title: "Descubrimiento del flujo", text: "Mapear usuarios, decisiones, excepciones, herramientas existentes y el costo del proceso actual." },
          { title: "Alcance de producto", text: "Definir la versión más pequeña que resuelve el problema esencial y qué queda fuera intencionalmente." },
          { title: "Diseño e ingeniería", text: "Construir una experiencia web o de escritorio fácil de usar y mantener, con revisiones visibles." },
          { title: "Lanzamiento y evolución", text: "Preparar accesos, documentación, despliegue y la evidencia necesaria para decidir el siguiente paso." }
        ],
        evidenceTitle: "Lo que prometo y lo que no",
        evidence: "Puedo hacer explícito el proceso, reducir pasos innecesarios y construir el producto acordado. No fingiré que agregar más funciones garantiza adopción. Las decisiones deben seguir el uso observado y la evidencia del negocio.",
        nextTitle: "Una primera conversación útil",
        nextText: "Describe el proceso actual, quién lo realiza, dónde falla y cómo se vería un día mejor. La lista de funciones es opcional; el problema es más valioso."
      }
    }
  }
} as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function ServiceLandingPage({ lang, service }: Props) {
  const locale = content[lang];
  const t = locale.services[service];
  const contactPath = `${locale.home}#contact`;

  return (
    <>
      <header className="service-page-header">
        <div className="shell service-page-nav">
          <a className="brand" href={locale.home} aria-label={locale.homeLabel}>
            <span className="brand-glyph" aria-hidden="true"><i /><i /><i /></span>
            <span className="brand-label">MARLON<span>/</span>COREAS</span>
          </a>
          <div>
            <a className="language-switch" href={t.alternatePath}>{locale.alternateLabel}</a>
            <a className="header-cta" href={contactPath} data-track="service_page_contact">
              <span>{locale.contactLabel}</span><span className="icon"><Arrow /></span>
            </a>
          </div>
        </div>
      </header>

      <main className="service-page">
        <section className="service-page-hero section-grid">
          <div className="shell">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="service-page-intro">{t.intro}</p>
            <div className="service-page-actions">
              <a className="button button-primary" href={contactPath}>{locale.contactLabel} <Arrow /></a>
              <a className="button button-ghost" href={locale.home}>{locale.homeLabel}</a>
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

        <section className="service-page-section service-page-light section-grid" id={service === "software" ? "products" : undefined}>
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
            <a className="button button-light" href={contactPath}>{locale.contactLabel} <Arrow /></a>
          </div>
        </section>
      </main>
      <ClientEnhancements analyticsId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
    </>
  );
}
