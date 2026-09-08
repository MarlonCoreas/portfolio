export type Locale = "en" | "es";

import { site } from "./config/site";
import { routePath } from "./config/routes";

export const copy = {
  en: {
    locale: "en_US",
    languageName: "English",
    alternatePath: routePath("home", "es"),
    alternateLabel: "ES",
    skip: "Skip to content",
    seo: {
      title: "Marlon Coreas | Websites & Custom Software for Service Businesses",
      description:
        "Bilingual websites and custom software for service businesses that need clearer inquiries and less manual work — planned, designed and built end to end.",
      // Structured-data only, never rendered. Mirrors about.availability.
      areaServed: [
        { type: "Country", name: "United States" },
        { type: "Country", name: "El Salvador" },
        { type: "Place", name: "Latin America" }
      ]
    },
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Let's talk"
    },
    hero: {
      status: "Available for new projects",
      role: "Independent designer & developer",
      titleStart: "Your business has a lot to offer.",
      titleAccent: "Let’s make it show.",
      intro:
        "I design and build bilingual websites and custom software. You work directly with me, from the first conversation to launch.",
      primary: "Explore my work",
      secondary: "Let’s talk",
      proofLabel: "Publicly verifiable",
      proof: [
        { value: "03", label: "working products online" },
        { value: "APP STORE", label: "one product published" },
        { value: "EN / ES", label: "delivered bilingually" }
      ]
    },
    work: {
      eyebrow: "Selected work",
      title: "Proof, not promises.",
      intro:
        "Three public projects you can open and use, plus the one I'm building now. Each finished project shows the problem, the work delivered and the evidence that can be checked today.",
      items: [
        {
          number: "01",
          title: "Peek Compress",
          kind: "My own product · Mac app on the App Store",
          description:
            "A Mac app that lets people open, browse, edit and compare compressed files without unpacking anything or filling their desktop with folders. I designed it, built it, published it and wrote the site that sells it.",
          role: "Product · Design · Development · Launch site",
          challenge: "Make archive work faster without creating temporary folders or changing a familiar Mac workflow.",
          delivered: "Native product experience, visual system, App Store release and its commercial website.",
          evidence: "Available publicly on the Mac App Store and its product site.",
          tags: ["Mac app", "On the App Store", "Own product"],
          image: "/images/peek-workspace.webp",
          imageHeight: 750,
          alt: "Peek Compress displaying the contents of an archive on macOS",
          theme: "sky",
          links: [
            { label: "View live project", href: site.peekUrl },
            { label: "App Store", href: site.peekAppStoreUrl }
          ]
        },
        {
          number: "02",
          title: "NC Home Remodeling",
          kind: "Client work · Bilingual service-business website",
          description:
            "A bilingual website that presents completed remodeling work, explains the services clearly and gives homeowners direct paths to call or request a quote.",
          role: "Strategy · Design · Development · Google visibility",
          challenge: "Turn a collection of finished projects into a credible sales presence for homeowners in the greater DC area.",
          delivered: "Positioning, bilingual content, project presentation, responsive build and search-ready technical foundations.",
          evidence: "The complete bilingual website and its quote paths are public. Lead-volume claims are intentionally omitted until client data is authorized.",
          tags: ["English & Spanish", "Public client work", "Clear quote paths"],
          image: "/images/nc-remodeling.webp",
          imageHeight: 800,
          alt: "Interior remodeling and custom cabinetry project featured on the NC Home Remodeling website",
          theme: "amber",
          links: [{ label: "View live project", href: site.remodelingUrl }]
        },
        {
          number: "03",
          title: "LoanPilot",
          kind: "My own product · Free bilingual web tool",
          description:
            "Seven free calculators for the money questions most Salvadorans have to take on trust: what a loan or a card paid at the minimum will really cost, what a severance settlement and a Christmas bonus should pay, how overtime is counted, and what payroll withholdings and the year-end tax balance come to. Built on the labor code and official rate tables, reconciled against the labor ministry's own settlement calculation, and nothing anyone types ever leaves their browser.",
          role: "Idea · Design · Development · Launch",
          challenge: "Turn scattered legal and financial rules into answers a person can trust, without requiring expertise, an account or any personal data.",
          delivered: "Calculators for loans, credit cards, severance, the Christmas bonus, overtime, payroll withholdings and the annual tax balance; yearly cost breakdowns, extra-payment scenarios, PDF and Excel export of the loan schedule, and shareable links that carry the figures.",
          evidence: "Free to open and test in Spanish or English; every official source is cited and dated on the page, the settlement figures are reconciled against the ministry's own calculation, the rule registry and the code are public on GitHub, and calculations remain in the browser.",
          // Only LoanPilot carries this fourth evidence row; the card renders it
          // when the project defines it.
          highlight: {
            label: "Judgment",
            text: "Salvadoran law does not always say one thing. Where a text and the ministry's own practice disagree, the site publishes both readings, says which one it applies and marks it as applied — never as correct.",
            link: {
              label: "Read the disputed rules",
              href: site.loanpilotRulesUrlEn
            }
          },
          tags: ["Free to use", "Seven calculators", "Open source"],
          image: "/images/loanpilot-seven-tools.webp",
          imageHeight: 884,
          alt: "The LoanPilot tool directory showing its seven calculators: loans, credit card, severance, Christmas bonus, overtime, payroll withholdings and annual tax",
          theme: "mint",
          links: [{ label: "View live project", href: site.loanpilotUrl }]
        },
        {
          number: "04",
          title: "Next product",
          kind: "My own product · Not announced yet",
          description:
            "A product of my own currently in build and test. There is nothing to open or verify here yet, and that is the point: this card is what an honest work-in-progress looks like next to three finished projects.",
          role: "Idea · Design · Development",
          challenge: "Still being sharpened against real use before anything is announced.",
          delivered: "In progress — research, prototypes and the first version that has to survive daily use.",
          evidence: "None yet, deliberately. It gets a link and the same problem, work and evidence breakdown as the projects above on the day it ships.",
          tags: ["In progress", "Own product", "Announced when it ships"],
          image: undefined,
          imageHeight: undefined,
          alt: "",
          theme: "violet",
          links: [] as { label: string; href: string }[]
        }
      ]
    },
    testimonials: {
      eyebrow: "In their words",
      title: "What clients say about working together.",
      items: [] as { quote: string; name: string; role: string; company: string; project?: string }[]
    },
    services: {
      eyebrow: "What I can do for you",
      title: "A better next step for your business.",
      intro:
        "A new website, a simpler workflow or your first product. We agree on scope, timing and price before getting started.",
      items: [
        {
          number: "01",
          title: "Business websites",
          text: "Help people understand your services, see your work and get in touch.",
          fit: "For businesses ready to improve their online presence.",
          skills: ["Clear content and design", "English & Spanish", "Mobile, accessibility and SEO"],
          priceFrom: "From US$2,000",
          path: routePath("websites", "en"),
          linkLabel: "See what’s included"
        },
        {
          number: "02",
          title: "Custom software",
          text: "Bring quoting, bookings and customer information into tools that fit your team.",
          fit: "For teams spending too much time on manual tasks.",
          skills: ["Tools built for your workflow", "Connected systems", "A working first release"],
          priceFrom: "From US$8,000",
          path: routePath("software", "en"),
          linkLabel: "Explore the options"
        },
        {
          number: "03",
          title: "Digital products",
          text: "Turn your idea into a first release people can actually use, on the web or desktop.",
          fit: "For founders ready to test a focused product idea.",
          skills: ["Prototype and product design", "Web or desktop development", "Launch preparation"],
          priceFrom: "From US$10,000",
          path: `${routePath("software", "en")}#products`,
          linkLabel: "See the product process"
        }
      ]
    },
    approach: {
      eyebrow: "How I work",
      title: "Small details. Serious outcomes.",
      intro:
        "Good software is not just working software. It explains itself in seconds, feels considered at every edge, and is still easy to change a year later.",
      points: [
        { title: "Fit before proposal", text: "A short conversation confirms the problem, decision maker, constraints and whether I am the right person to help." },
        { title: "Written scope before work", text: "You receive the deliverables, exclusions, schedule and fixed price or billing model before committing." },
        { title: "Visible progress", text: "You talk directly with me, review working increments and make decisions while changes are still inexpensive." },
        { title: "Launch with ownership", text: "Ownership, accounts, licenses and handover are written into the proposal. You receive the agreed access and assets on completion, and support is agreed, never assumed." }
      ],
      fitTitle: "A good project fit is clear on both sides.",
      goodTitle: "Usually a good fit",
      good: [
        "There is a real business or user problem to solve",
        "A decision maker can review progress and answer questions",
        "Quality and maintainability matter more than the cheapest possible build",
        "The first release can be focused around an essential outcome"
      ],
      notTitle: "Probably not a fit",
      not: [
        "Guaranteed rankings, sales or growth without evidence",
        "Copying another product without understanding the users",
        "An undefined feature list with a fixed deadline and no discovery",
        "Speculative work in exchange for future exposure or revenue share"
      ]
    },
    about: {
      eyebrow: "About",
      title: "The person behind your next project.",
      text:
        "I'm Marlon, an independent designer and developer based in El Salvador. I work with businesses in the US and Latin America, and build my own products too, including Peek Compress for Mac. We’ll talk directly, review progress together and take your project through to launch.",
      availability: "Working directly with you, in English or Spanish.",
      location: "Based in El Salvador · Working worldwide",
      personalRole: "Independent designer & developer",
      capabilitiesLabel: "Capabilities",
      capabilities: [
        "Websites and online stores",
        "Platforms and internal tools",
        "Booking and quoting systems",
        "Automation and integrations",
        "Web and desktop apps",
        "SEO and ongoing support"
      ],
      profileLinks: [
        { label: "GitHub", href: site.githubUrl },
        { label: "LinkedIn", href: site.linkedinUrl }
      ]
    },
    faq: {
      eyebrow: "Before we talk",
      title: "Straight answers to common questions.",
      items: [
        { question: "How much does a project cost?", answer: "It depends on the scope and risk. After an initial conversation, you receive a written proposal with deliverables, exclusions, schedule and price. You can optionally share a budget range to help me recommend a realistic path." },
        { question: "How long will it take?", answer: "A focused business website and a custom platform are different projects. I confirm the schedule only after understanding the content, integrations, feedback process and launch requirements." },
        { question: "Do you guarantee more leads or Google rankings?", answer: "No. I can build the message, user journey, performance and search foundations needed to compete, then measure what happens. No responsible developer can guarantee market behavior or rankings." },
        { question: "What happens after launch?", answer: "Every project includes a defined launch and handover. Ongoing support, maintenance or a next release can be agreed separately when it is useful." }
      ]
    },
    contact: {
      eyebrow: "Have a project in mind?",
      title: "Let’s bring your idea to life.",
      text:
        "Tell me what you have in mind or what you’d like to improve. You don’t need a finished brief. I’ll reply personally with a useful next step.",
      button: "Send my message",
      emailLabel: "Or write directly",
      subject: "Project inquiry",
      responseTime: "Usually replies within two business days.",
      fields: {
        optionalContext: "Add more context (optional)",
        notSpecified: "Not specified",
        name: "Your name",
        email: "Your email",
        company: "Company or current website",
        projectType: "What do you need?",
        projectOptions: [
          { value: "website", label: "Business website" },
          { value: "software", label: "Custom software or internal tool" },
          { value: "product", label: "New digital product" },
          { value: "unsure", label: "Not sure yet" }
        ],
        goal: "Tell me about your idea",
        goalPlaceholder: "What do you do, and what would you like to build or improve?",
        timeline: "When do you want to begin?",
        timelineOptions: [
          { value: "soon", label: "As soon as there is a good plan" },
          { value: "1-2-months", label: "Within 1–2 months" },
          { value: "3-6-months", label: "Within 3–6 months" },
          { value: "exploring", label: "I am still exploring" }
        ],
        budget: "Comfortable investment range",
        budgetOptions: [
          { value: "guidance", label: "I need guidance" },
          { value: "under-2k", label: "Under US$2,000" },
          { value: "2k-5k", label: "US$2,000–5,000" },
          { value: "5k-10k", label: "US$5,000–10,000" },
          { value: "10k-25k", label: "US$10,000–25,000" },
          { value: "25k-plus", label: "US$25,000+" }
        ],
        consent: "I agree that Marlon may use these details only to respond to this inquiry.",
        privacy: "Privacy",
        successKicker: "Message received",
        successTitle: "Your project is in the right place.",
        success: "A confirmation is on its way to your inbox. I will review the context personally and reply within two business days.",
        successPlain: "I will review the context personally and reply within two business days.",
        sending: "Sending…",
        successAction: "View the work",
        bookAction: "Book a 15-minute call",
        sendAnother: "Send another inquiry",
        errorKicker: "Delivery problem",
        errorTitle: "Your message was not sent.",
        error: "Please try again in a moment or email me directly. I will reply as soon as possible.",
        emailAction: "Email me directly"
      }
    },
    footer: {
      tagline: "Websites, web applications and software for businesses that want to be taken seriously.",
      navigation: "Navigation",
      projects: "Live projects",
      connect: "Connect",
      privacy: "Privacy",
      legal: "Designed and built by Marlon Coreas.",
      backToTop: "Back to top"
    }
  },
  es: {
    locale: "es_SV",
    languageName: "Español",
    alternatePath: routePath("home", "en"),
    alternateLabel: "EN",
    skip: "Saltar al contenido",
    seo: {
      title: "Marlon Coreas | Sitios web y software a medida para negocios",
      description:
        "Sitios web bilingües y software a medida para negocios de servicios que necesitan consultas más claras y menos trabajo manual.",
      areaServed: [
        { type: "Country", name: "Estados Unidos" },
        { type: "Country", name: "El Salvador" },
        { type: "Place", name: "América Latina" }
      ]
    },
    nav: {
      work: "Proyectos",
      services: "Servicios",
      about: "Acerca de mí",
      contact: "Hablemos"
    },
    hero: {
      status: "Disponible para nuevos proyectos",
      role: "Diseñador y desarrollador independiente",
      titleStart: "Tu negocio tiene mucho que ofrecer.",
      titleAccent: "Hagamos que se note.",
      intro:
        "Diseño y desarrollo sitios web bilingües y software a medida. Trabajas directamente conmigo, desde la primera conversación hasta el lanzamiento.",
      primary: "Ver mis proyectos",
      secondary: "Hablemos",
      proofLabel: "Comprobable públicamente",
      proof: [
        { value: "03", label: "productos funcionando" },
        { value: "APP STORE", label: "un producto publicado" },
        { value: "EN / ES", label: "entrega bilingüe" }
      ]
    },
    work: {
      eyebrow: "Proyectos seleccionados",
      title: "Evidencia, no promesas.",
      intro:
        "Tres proyectos públicos que puedes abrir y usar, más el que estoy construyendo ahora. Cada proyecto terminado muestra el problema, el trabajo entregado y la evidencia que se puede comprobar hoy.",
      items: [
        {
          number: "01",
          title: "Peek Compress",
          kind: "Producto propio · App de Mac en el App Store",
          description:
            "Una app de Mac para abrir, explorar, editar y comparar archivos comprimidos sin descomprimir nada ni llenar el escritorio de carpetas. La diseñé, la desarrollé, la publiqué y escribí el sitio que la vende.",
          role: "Producto · Diseño · Desarrollo · Web de lanzamiento",
          challenge: "Agilizar el trabajo con archivos comprimidos sin crear carpetas temporales ni romper un flujo familiar de Mac.",
          delivered: "Experiencia nativa, sistema visual, publicación en App Store y el sitio comercial del producto.",
          evidence: "Disponible públicamente en el Mac App Store y en su sitio oficial.",
          tags: ["App de Mac", "En el App Store", "Producto propio"],
          image: "/images/peek-workspace.webp",
          imageHeight: 750,
          alt: "Peek Compress mostrando el contenido de un archivo comprimido en macOS",
          theme: "sky",
          links: [
            { label: "Ver proyecto", href: site.peekUrl },
            { label: "App Store", href: site.peekAppStoreUrl }
          ]
        },
        {
          number: "02",
          title: "NC Home Remodeling",
          kind: "Trabajo para cliente · Sitio bilingüe para servicios",
          description:
            "Un sitio bilingüe que presenta los proyectos terminados, explica los servicios con claridad y ofrece rutas directas para llamar o solicitar una cotización.",
          role: "Estrategia · Diseño · Desarrollo · Visibilidad en Google",
          challenge: "Convertir una colección de trabajos terminados en una presencia comercial creíble para propietarios del área de Washington.",
          delivered: "Posicionamiento, contenido bilingüe, presentación de proyectos, desarrollo adaptable y fundamentos técnicos para buscadores.",
          evidence: "El sitio bilingüe y sus rutas de cotización son públicos. Se omiten cifras de contactos hasta contar con datos autorizados por el cliente.",
          tags: ["Español e inglés", "Trabajo público", "Rutas claras de cotización"],
          image: "/images/nc-remodeling.webp",
          imageHeight: 800,
          alt: "Proyecto de remodelación y gabinetes a medida presentado en el sitio de NC Home Remodeling",
          theme: "amber",
          links: [{ label: "Ver proyecto", href: site.remodelingUrl }]
        },
        {
          number: "03",
          title: "LoanPilot",
          kind: "Producto propio · Herramienta web gratuita y bilingüe",
          description:
            "Siete calculadoras gratuitas para las preguntas de dinero que en El Salvador casi siempre se aceptan de palabra: cuánto costará de verdad un préstamo o una tarjeta pagada con el mínimo, cuánto debería pagar un finiquito y un aguinaldo, cómo se cuentan las horas extra, y a cuánto llegan las retenciones y el saldo de renta del año. Hechas con el Código de Trabajo y las tablas oficiales, contrastadas contra el cálculo del propio ministerio, y nada de lo que se escribe sale del navegador.",
          role: "Idea · Diseño · Desarrollo · Lanzamiento",
          challenge: "Convertir reglas legales y financieras dispersas en respuestas confiables, sin exigir conocimientos, cuenta ni datos personales.",
          delivered: "Calculadoras de préstamos, tarjeta de crédito, finiquito, aguinaldo, horas extra, retenciones y renta anual; desgloses anuales, escenarios de abonos extra, exportación a PDF y Excel de la tabla del préstamo, y enlaces que llevan las cifras.",
          evidence: "Se puede abrir y probar gratis en español o inglés; cada fuente oficial está citada y fechada en la página, el finiquito se reconcilia contra la constancia del MTPS, el registro de reglas y el código están públicos en GitHub, y los cálculos permanecen en el navegador.",
          // Solo LoanPilot lleva esta cuarta fila de evidencia; la tarjeta la
          // muestra cuando el proyecto la define.
          highlight: {
            label: "Criterio",
            text: "La ley salvadoreña no siempre dice una sola cosa. Donde el texto y la práctica del ministerio no coinciden, el sitio publica las dos lecturas, dice cuál aplica y la marca como aplicada, nunca como correcta.",
            link: {
              label: "Ver las reglas en disputa",
              href: site.loanpilotRulesUrlEs
            }
          },
          tags: ["Uso gratuito", "Siete calculadoras", "Código abierto"],
          image: "/images/loanpilot-seven-tools.webp",
          imageHeight: 884,
          alt: "El directorio de herramientas de LoanPilot mostrando sus siete calculadoras: préstamos, tarjeta de crédito, finiquito, aguinaldo, horas extras, retenciones y renta anual",
          theme: "mint",
          links: [{ label: "Ver proyecto", href: site.loanpilotUrl }]
        },
        {
          number: "04",
          title: "Próximo producto",
          kind: "Producto propio · Aún sin anunciar",
          description:
            "Un producto propio que está en construcción y prueba. Todavía no hay nada que abrir ni comprobar, y ese es el punto: así se ve un trabajo en curso contado con honestidad junto a tres proyectos terminados.",
          role: "Idea · Diseño · Desarrollo",
          challenge: "Se sigue afinando contra el uso real antes de anunciar cualquier cosa.",
          delivered: "En curso: investigación, prototipos y la primera versión que tiene que aguantar el uso diario.",
          evidence: "Ninguna todavía, a propósito. El día que salga tendrá enlace y el mismo desglose de problema, trabajo y evidencia que los proyectos de arriba.",
          tags: ["En curso", "Producto propio", "Se anuncia cuando salga"],
          image: undefined,
          imageHeight: undefined,
          alt: "",
          theme: "violet",
          links: [] as { label: string; href: string }[]
        }
      ]
    },
    testimonials: {
      eyebrow: "En sus palabras",
      title: "Lo que dicen los clientes sobre trabajar juntos.",
      items: [] as { quote: string; name: string; role: string; company: string; project?: string }[]
    },
    services: {
      eyebrow: "En qué te puedo ayudar",
      title: "El siguiente paso para tu negocio.",
      intro:
        "Un nuevo sitio, un proceso más simple o tu primer producto. Acordamos alcance, plazo y precio antes de empezar.",
      items: [
        {
          number: "01",
          title: "Sitios para negocios",
          text: "Haz que tus clientes entiendan tus servicios, conozcan tu trabajo y sepan cómo contactarte.",
          fit: "Para negocios que quieren mejorar su presencia en línea.",
          skills: ["Contenido y diseño claros", "Español e inglés", "Móvil, accesibilidad y SEO"],
          priceFrom: "Desde US$2,000",
          path: routePath("websites", "es"),
          linkLabel: "Ver qué incluye"
        },
        {
          number: "02",
          title: "Software a la medida",
          text: "Conecta cotizaciones, reservas e información de clientes en herramientas que se adapten a tu equipo.",
          fit: "Para equipos que dedican demasiado tiempo a tareas manuales.",
          skills: ["Herramientas para tu proceso", "Sistemas conectados", "Una primera versión funcional"],
          priceFrom: "Desde US$8,000",
          path: routePath("software", "es"),
          linkLabel: "Ver las opciones"
        },
        {
          number: "03",
          title: "Productos digitales",
          text: "Convierte tu idea en una primera versión que las personas puedan usar, en la web o en el escritorio.",
          fit: "Para fundadores listos para probar una idea concreta.",
          skills: ["Prototipo y diseño de producto", "Desarrollo web o de escritorio", "Preparación del lanzamiento"],
          priceFrom: "Desde US$10,000",
          path: `${routePath("software", "es")}#productos`,
          linkLabel: "Ver el proceso de producto"
        }
      ]
    },
    approach: {
      eyebrow: "Cómo trabajo",
      title: "Detalles pequeños. Resultados serios.",
      intro:
        "El buen software no solo funciona. Se explica solo en segundos, se siente pensado en cada borde y sigue siendo fácil de cambiar un año después.",
      points: [
        { title: "Encaje antes de cotizar", text: "Una conversación breve confirma el problema, quién decide, las restricciones y si soy la persona adecuada para ayudar." },
        { title: "Alcance escrito antes de trabajar", text: "Recibes entregables, exclusiones, calendario y precio fijo o modalidad de cobro antes de comprometerte." },
        { title: "Progreso visible", text: "Hablas directo conmigo, revisas avances funcionando y decides cuando los cambios todavía cuestan poco." },
        { title: "Lanzamiento con propiedad clara", text: "La propiedad, las cuentas, licencias y la entrega se detallan en la propuesta. Recibes los accesos y activos acordados al terminar, y el soporte se acuerda, nunca se supone." }
      ],
      fitTitle: "Un buen proyecto es claro para ambas partes.",
      goodTitle: "Normalmente hay buen encaje",
      good: [
        "Existe un problema real del negocio o de sus usuarios",
        "Alguien con poder de decisión puede revisar y responder preguntas",
        "La calidad y el mantenimiento importan más que conseguir lo más barato",
        "La primera versión puede enfocarse en un resultado esencial"
      ],
      notTitle: "Probablemente no hay encaje",
      not: [
        "Garantías de posicionamiento, ventas o crecimiento sin evidencia",
        "Copiar otro producto sin entender a sus usuarios",
        "Una lista indefinida de funciones con fecha fija y sin descubrimiento",
        "Trabajo especulativo a cambio de exposición o ingresos futuros"
      ]
    },
    about: {
      eyebrow: "Acerca de mí",
      title: "La persona detrás de tu próximo proyecto.",
      text:
        "Soy Marlon, diseñador y desarrollador independiente en El Salvador. Trabajo con negocios de Estados Unidos y Latinoamérica, y también creo productos propios, como Peek Compress para Mac. Hablaremos directamente, revisaremos los avances juntos y llevaremos tu proyecto hasta el lanzamiento.",
      availability: "Trabajo directo contigo, en español o en inglés.",
      location: "Desde El Salvador · Para el mundo",
      personalRole: "Diseñador y desarrollador independiente",
      capabilitiesLabel: "Capacidades",
      capabilities: [
        "Sitios web y tiendas en línea",
        "Plataformas y herramientas internas",
        "Reservas y cotizaciones",
        "Automatizaciones e integraciones",
        "Apps web y de escritorio",
        "SEO y soporte continuo"
      ],
      profileLinks: [
        { label: "GitHub", href: site.githubUrl },
        { label: "LinkedIn", href: site.linkedinUrl }
      ]
    },
    faq: {
      eyebrow: "Antes de hablar",
      title: "Respuestas directas a preguntas comunes.",
      items: [
        { question: "¿Cuánto cuesta un proyecto?", answer: "Depende del alcance y el riesgo. Después de una conversación inicial recibes una propuesta escrita con entregables, exclusiones, calendario y precio. Puedes compartir un rango de inversión de forma opcional para que te recomiende un camino realista." },
        { question: "¿Cuánto tiempo toma?", answer: "Un sitio enfocado y una plataforma a medida son proyectos diferentes. Confirmo el calendario después de entender el contenido, las integraciones, el proceso de revisión y el lanzamiento." },
        { question: "¿Garantizas más clientes o posiciones en Google?", answer: "No. Puedo construir el mensaje, recorrido, rendimiento y fundamentos de búsqueda necesarios para competir y después medir lo que ocurre. Ningún desarrollador responsable puede garantizar el comportamiento del mercado o de un buscador." },
        { question: "¿Qué pasa después del lanzamiento?", answer: "Cada proyecto incluye un lanzamiento y entrega definidos. El soporte, mantenimiento o una siguiente versión se pueden acordar por separado cuando aporten valor." }
      ]
    },
    contact: {
      eyebrow: "¿Tienes un proyecto en mente?",
      title: "Hablemos de tu idea.",
      text:
        "Cuéntame qué tienes en mente o qué te gustaría mejorar. No necesitas tener todo definido. Te responderé personalmente con un siguiente paso útil.",
      button: "Enviar mensaje",
      emailLabel: "O escribe directamente",
      subject: "Consulta sobre proyecto",
      responseTime: "Normalmente respondo en dos días hábiles.",
      fields: {
        optionalContext: "Agregar contexto (opcional)",
        notSpecified: "Sin indicar",
        name: "Tu nombre",
        email: "Tu correo",
        company: "Empresa o sitio actual",
        projectType: "¿Qué necesitas?",
        projectOptions: [
          { value: "website", label: "Sitio web para un negocio" },
          { value: "software", label: "Software a medida o herramienta interna" },
          { value: "product", label: "Un nuevo producto digital" },
          { value: "unsure", label: "Todavía no estoy seguro" }
        ],
        goal: "Cuéntame tu idea",
        goalPlaceholder: "¿A qué te dedicas y qué te gustaría crear o mejorar?",
        timeline: "¿Cuándo quieres comenzar?",
        timelineOptions: [
          { value: "soon", label: "En cuanto exista un buen plan" },
          { value: "1-2-months", label: "Dentro de 1–2 meses" },
          { value: "3-6-months", label: "Dentro de 3–6 meses" },
          { value: "exploring", label: "Todavía estoy explorando" }
        ],
        budget: "Rango de inversión cómodo",
        budgetOptions: [
          { value: "guidance", label: "Necesito orientación" },
          { value: "under-2k", label: "Menos de US$2,000" },
          { value: "2k-5k", label: "US$2,000–5,000" },
          { value: "5k-10k", label: "US$5,000–10,000" },
          { value: "10k-25k", label: "US$10,000–25,000" },
          { value: "25k-plus", label: "US$25,000+" }
        ],
        consent: "Acepto que Marlon use estos datos únicamente para responder esta consulta.",
        privacy: "Privacidad",
        successKicker: "Mensaje recibido",
        successTitle: "Tu proyecto llegó al lugar correcto.",
        success: "Te llegará una confirmación al correo. Revisaré personalmente el contexto y responderé en un máximo de dos días hábiles.",
        successPlain: "Revisaré personalmente el contexto y responderé en un máximo de dos días hábiles.",
        sending: "Enviando…",
        successAction: "Ver los proyectos",
        bookAction: "Agendar una llamada de 15 minutos",
        sendAnother: "Enviar otra consulta",
        errorKicker: "Problema de entrega",
        errorTitle: "El mensaje no pudo enviarse.",
        error: "Intenta nuevamente en un momento o escríbeme directamente. Responderé lo antes posible.",
        emailAction: "Escribirme directamente"
      }
    },
    footer: {
      tagline: "Sitios web, aplicaciones y software para negocios que quieren que los tomen en serio.",
      navigation: "Navegación",
      projects: "Proyectos en línea",
      connect: "Conecta",
      privacy: "Privacidad",
      legal: "Diseñado y desarrollado por Marlon Coreas.",
      backToTop: "Volver arriba"
    }
  }
} as const;
