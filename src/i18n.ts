export type Locale = "en" | "es";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://marloncoreas.com";

export const site = {
  name: "Marlon Coreas",
  email: "hello@marloncoreas.com",
  peekUrl: "https://peekcompress.com/",
  peekAppStoreUrl: "https://apps.apple.com/app/6768755084",
  remodelingUrl: "https://homeremodelingnc.com/",
  loanpilotUrl: "https://loanpilot.marloncoreas.com/",
  githubUrl: "https://github.com/MarlonCoreas",
  linkedinUrl: "https://www.linkedin.com/in/marlon-salomon-coreas-villanueva-8b0416161",
  // Scheduling link shown after a successful inquiry. Leave empty to hide the
  // button entirely; set the same URL in the mailer config to include it in the
  // confirmation email.
  bookingUrl: "https://cal.com/mcoreas/15min"
};

export const copy = {
  en: {
    locale: "en_US",
    languageName: "English",
    alternatePath: "/es",
    alternateLabel: "ES",
    skip: "Skip to content",
    seo: {
      title: "Marlon Coreas | Websites & Custom Software for Service Businesses",
      description:
        "Bilingual websites and custom software for service businesses that need clearer inquiries and less manual work — planned, designed and built end to end."
    },
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Let's talk"
    },
    hero: {
      status: "Available for new projects",
      eyebrow: "Marlon Coreas · Independent product designer & developer",
      titleStart: "More useful inquiries.",
      titleAccent: "Less manual work.",
      intro:
        "I plan, design and build bilingual websites and custom software for service businesses. Before promising an outcome, we define the problem, the scope, the timeline and what success should look like.",
      primary: "See the evidence",
      secondary: "Tell me the problem",
      proofLabel: "Publicly verifiable",
      proof: [
        { value: "03", label: "working products online" },
        { value: "APP STORE", label: "one product published" },
        { value: "EN / ES", label: "delivered bilingually" }
      ],
      consoleEyebrow: "How it works",
      consoleTitle: "From idea to live",
      consoleLines: [
        { key: "01 · plan", value: "goals before pixels" },
        { key: "02 · build", value: "fast, clear, yours" },
        { key: "03 · launch", value: "live and supported" }
      ],
      shipping: "Working principle",
      shippingValue: "Scope, price and ownership agreed first"
    },
    work: {
      eyebrow: "Selected work",
      title: "Proof, not promises.",
      intro:
        "Three public projects you can open and use. Each one shows the problem, the work delivered and the evidence that can be checked today.",
      viewProject: "View live project",
      visitAppStore: "App Store",
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
          alt: "Peek Compress displaying the contents of an archive on macOS",
          theme: "lime",
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
          alt: "Interior remodeling and custom cabinetry project featured on the NC Home Remodeling website",
          theme: "coral",
          links: [{ label: "View live project", href: site.remodelingUrl }]
        },
        {
          number: "03",
          title: "LoanPilot",
          kind: "My own product · Free web tool",
          description:
            "A free calculator that shows what a loan will really cost before signing, and how much you save by paying extra against the balance. Built around Salvadoran lending rules, works on any phone, and nothing anyone types ever leaves their browser.",
          role: "Idea · Design · Development · Launch",
          challenge: "Explain the real cost of a loan without requiring financial expertise or collecting sensitive information.",
          delivered: "Bilingual calculator, yearly breakdowns, extra-payment scenarios and a privacy-first browser-only calculation model.",
          evidence: "Free to open and test on any modern phone or computer; calculations remain in the browser.",
          tags: ["Free to use", "Works on any phone", "Español / English"],
          image: "/images/loanpilot.webp",
          alt: "The LoanPilot calculator showing a monthly payment estimate and yearly cost breakdown",
          theme: "teal",
          links: [{ label: "View live project", href: site.loanpilotUrl }]
        }
      ]
    },
    services: {
      eyebrow: "What I can do for you",
      title: "Choose the problem, not a list of technologies.",
      intro:
        "These are the three situations where I can be most useful. Every engagement begins with a written scope, timeline and price before development starts.",
      items: [
        {
          number: "01",
          title: "A website that earns trust",
          text: "For service businesses whose current site is unclear, dated or difficult to find. The work starts with what a customer must understand before making contact.",
          fit: "Best fit: established service businesses with real work, a clear offer and someone ready to answer inquiries.",
          skills: ["Positioning and content", "English & Spanish", "Mobile, accessibility and search foundations"],
          path: "/services/websites",
          linkLabel: "Explore business websites"
        },
        {
          number: "02",
          title: "Custom software",
          text: "Web platforms, client portals, quoting and booking systems, internal dashboards, integrations between the tools you already pay for — software shaped around how your business actually runs.",
          fit: "Best fit: a repeated process is costing time, creating errors or forcing the team to work across disconnected tools.",
          skills: ["Process discovery", "A focused first release", "Support after launch"],
          path: "/services/custom-software",
          linkLabel: "Explore custom software"
        },
        {
          number: "03",
          title: "Products built from scratch",
          text: "For founders who need to turn a specific, testable idea into a first useful release — including web and desktop software.",
          fit: "Best fit: the user, problem and first essential workflow can be described without relying on a long feature list.",
          skills: ["Research and product scope", "Desktop and web", "Launch and App Store experience"],
          path: "/services/custom-software#products",
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
        { title: "Launch with ownership", text: "Access, documentation and next steps are handed over clearly. Support is agreed, never assumed." }
      ]
    },
    about: {
      eyebrow: "About",
      title: "A technical partner, not another vendor.",
      text:
        "I'm Marlon Coreas, an independent designer and developer based in El Salvador. I've taken my own products from an empty file to the Mac App Store and I work directly with businesses in the US and Latin America. There is no handoff to an anonymous delivery team: the person in the first conversation is the person responsible for the work.",
      availability: "Taking on new client projects — working remotely with businesses across the US and Latin America.",
      capabilitiesLabel: "Capabilities",
      capabilities: [
        "Business websites",
        "Web platforms and portals",
        "Custom web applications",
        "Online stores",
        "Booking and quoting systems",
        "Internal dashboards and tools",
        "Automation and integrations",
        "Desktop apps",
        "English and Spanish",
        "Google visibility",
        "Ongoing support and evolution"
      ],
      profileLinks: [
        { label: "GitHub", href: site.githubUrl },
        { label: "LinkedIn", href: site.linkedinUrl }
      ]
    },
    fit: {
      eyebrow: "A useful filter",
      title: "A good project fit is clear on both sides.",
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
    faq: {
      eyebrow: "Before we talk",
      title: "Straight answers to common questions.",
      items: [
        { question: "How much does a project cost?", answer: "It depends on the scope and risk. After an initial conversation, you receive a written proposal with deliverables, exclusions, schedule and price. The inquiry form asks for a budget range so I can recommend a realistic path." },
        { question: "How long will it take?", answer: "A focused business website and a custom platform are different projects. I confirm the schedule only after understanding the content, integrations, feedback process and launch requirements." },
        { question: "Do you guarantee more leads or Google rankings?", answer: "No. I can build the message, user journey, performance and search foundations needed to compete, then measure what happens. No responsible developer can guarantee market behavior or rankings." },
        { question: "Who owns the finished work?", answer: "Ownership, accounts, licenses and handover are written into the proposal. You receive the agreed access and assets when the project obligations are complete." },
        { question: "What happens after launch?", answer: "Every project includes a defined launch and handover. Ongoing support, maintenance or a next release can be agreed separately when it is useful." }
      ]
    },
    contact: {
      eyebrow: "Have a project in mind?",
      title: "Tell me the problem. I'll tell you honestly if I can help.",
      text:
        "Share the context, desired outcome, timing and a comfortable investment range. I will reply personally with the next useful step — even when that means recommending a smaller solution or a different specialist.",
      button: "Send project details",
      emailLabel: "Or write directly",
      subject: "Project inquiry",
      responseTime: "Usually replies within two business days.",
      fields: {
        name: "Your name",
        email: "Work email",
        company: "Company or current website",
        projectType: "What do you need?",
        projectOptions: [
          { value: "website", label: "Business website" },
          { value: "software", label: "Custom software or internal tool" },
          { value: "product", label: "New digital product" },
          { value: "unsure", label: "Not sure yet" }
        ],
        goal: "What problem should this solve?",
        goalPlaceholder: "A few useful details about the current situation, who it affects and what should improve.",
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
    alternatePath: "/",
    alternateLabel: "EN",
    skip: "Saltar al contenido",
    seo: {
      title: "Marlon Coreas | Sitios web y software a medida para negocios",
      description:
        "Sitios web bilingües y software a medida para negocios de servicios que necesitan consultas más claras y menos trabajo manual."
    },
    nav: {
      work: "Proyectos",
      services: "Servicios",
      about: "Acerca de mí",
      contact: "Hablemos"
    },
    hero: {
      status: "Disponible para nuevos proyectos",
      eyebrow: "Marlon Coreas · Diseñador de producto y desarrollador independiente",
      titleStart: "Consultas más útiles.",
      titleAccent: "Menos trabajo manual.",
      intro:
        "Planifico, diseño y desarrollo sitios bilingües y software a medida para negocios de servicios. Antes de prometer un resultado, definimos el problema, el alcance, el plazo y cómo debería verse el éxito.",
      primary: "Ver la evidencia",
      secondary: "Contarme el problema",
      proofLabel: "Comprobable públicamente",
      proof: [
        { value: "03", label: "productos funcionando" },
        { value: "APP STORE", label: "un producto publicado" },
        { value: "EN / ES", label: "entrega bilingüe" }
      ],
      consoleEyebrow: "Cómo funciona",
      consoleTitle: "De la idea a estar en línea",
      consoleLines: [
        { key: "01 · plan", value: "objetivos antes que diseño" },
        { key: "02 · desarrollo", value: "rápido, claro, tuyo" },
        { key: "03 · lanzamiento", value: "en línea y con soporte" }
      ],
      shipping: "Principio de trabajo",
      shippingValue: "Alcance, precio y propiedad se acuerdan primero"
    },
    work: {
      eyebrow: "Proyectos seleccionados",
      title: "Evidencia, no promesas.",
      intro:
        "Tres proyectos públicos que puedes abrir y usar. Cada uno muestra el problema, el trabajo entregado y la evidencia que se puede comprobar hoy.",
      viewProject: "Ver proyecto",
      visitAppStore: "App Store",
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
          alt: "Peek Compress mostrando el contenido de un archivo comprimido en macOS",
          theme: "lime",
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
          alt: "Proyecto de remodelación y gabinetes a medida presentado en el sitio de NC Home Remodeling",
          theme: "coral",
          links: [{ label: "Ver proyecto", href: site.remodelingUrl }]
        },
        {
          number: "03",
          title: "LoanPilot",
          kind: "Producto propio · Herramienta web gratuita",
          description:
            "Una calculadora gratuita que muestra cuánto costará realmente un préstamo antes de firmarlo, y cuánto se ahorra abonando a capital. Hecha con la normativa salvadoreña, funciona en cualquier teléfono y nada de lo que se escribe sale del navegador.",
          role: "Idea · Diseño · Desarrollo · Lanzamiento",
          challenge: "Explicar el costo real de un préstamo sin exigir conocimientos financieros ni recopilar información sensible.",
          delivered: "Calculadora bilingüe, desgloses anuales, escenarios de abonos extra y cálculos privados dentro del navegador.",
          evidence: "Se puede abrir y probar gratis en teléfonos y computadoras modernas; los cálculos permanecen en el navegador.",
          tags: ["Uso gratuito", "Funciona en cualquier teléfono", "Español / English"],
          image: "/images/loanpilot.webp",
          alt: "La calculadora de LoanPilot mostrando la cuota estimada y el desglose de costo por año",
          theme: "teal",
          links: [{ label: "Ver proyecto", href: site.loanpilotUrl }]
        }
      ]
    },
    services: {
      eyebrow: "En qué te puedo ayudar",
      title: "Elige el problema, no una lista de tecnologías.",
      intro:
        "Estas son las tres situaciones donde puedo ser más útil. Todo proyecto empieza con un alcance, plazo y precio por escrito antes de desarrollar.",
      items: [
        {
          number: "01",
          title: "Un sitio que gana confianza",
          text: "Para negocios de servicios cuyo sitio actual es confuso, anticuado o difícil de encontrar. El trabajo comienza con lo que un cliente debe entender antes de contactarte.",
          fit: "Mejor encaje: negocios de servicios establecidos, con trabajo real, una oferta clara y alguien listo para responder consultas.",
          skills: ["Posicionamiento y contenido", "Español e inglés", "Móvil, accesibilidad y fundamentos SEO"],
          path: "/es/servicios/sitios-web",
          linkLabel: "Explorar sitios para negocios"
        },
        {
          number: "02",
          title: "Software a la medida",
          text: "Plataformas web, portales para clientes, sistemas de cotización y reservas, paneles internos, integraciones entre las herramientas que ya pagas — software hecho a la forma en que opera tu negocio.",
          fit: "Mejor encaje: un proceso repetitivo consume tiempo, crea errores o obliga al equipo a trabajar entre herramientas desconectadas.",
          skills: ["Descubrimiento del proceso", "Una primera versión enfocada", "Soporte después del lanzamiento"],
          path: "/es/servicios/software-a-la-medida",
          linkLabel: "Explorar software a medida"
        },
        {
          number: "03",
          title: "Productos desde cero",
          text: "Para fundadores que necesitan convertir una idea específica y comprobable en una primera versión útil, incluyendo software web y de escritorio.",
          fit: "Mejor encaje: el usuario, el problema y el primer flujo esencial pueden explicarse sin depender de una lista interminable de funciones.",
          skills: ["Investigación y alcance", "Escritorio y web", "Lanzamiento y experiencia en App Store"],
          path: "/es/servicios/software-a-la-medida#productos",
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
        { title: "Lanzamiento con propiedad clara", text: "Accesos, documentación y próximos pasos se entregan con claridad. El soporte se acuerda, nunca se supone." }
      ]
    },
    about: {
      eyebrow: "Acerca de mí",
      title: "Un socio técnico, no un proveedor más.",
      text:
        "Soy Marlon Coreas, diseñador y desarrollador independiente en El Salvador. He llevado productos propios desde un archivo vacío hasta el Mac App Store y trabajo directamente con negocios de Estados Unidos y Latinoamérica. No hay un traspaso a un equipo anónimo: la persona de la primera conversación es la responsable del trabajo.",
      availability: "Tomando nuevos proyectos de clientes — trabajo remoto con negocios en Estados Unidos y América Latina.",
      capabilitiesLabel: "Capacidades",
      capabilities: [
        "Sitios web para negocios",
        "Plataformas y portales web",
        "Aplicaciones web a la medida",
        "Tiendas en línea",
        "Sistemas de reservas y cotización",
        "Paneles y herramientas internas",
        "Automatizaciones e integraciones",
        "Apps de escritorio",
        "Español e inglés",
        "Visibilidad en Google",
        "Soporte y evolución continua"
      ],
      profileLinks: [
        { label: "GitHub", href: site.githubUrl },
        { label: "LinkedIn", href: site.linkedinUrl }
      ]
    },
    fit: {
      eyebrow: "Un filtro útil",
      title: "Un buen proyecto es claro para ambas partes.",
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
    faq: {
      eyebrow: "Antes de hablar",
      title: "Respuestas directas a preguntas comunes.",
      items: [
        { question: "¿Cuánto cuesta un proyecto?", answer: "Depende del alcance y el riesgo. Después de una conversación inicial recibes una propuesta escrita con entregables, exclusiones, calendario y precio. El formulario pide un rango de inversión para recomendar un camino realista." },
        { question: "¿Cuánto tiempo toma?", answer: "Un sitio enfocado y una plataforma a medida son proyectos diferentes. Confirmo el calendario después de entender el contenido, las integraciones, el proceso de revisión y el lanzamiento." },
        { question: "¿Garantizas más clientes o posiciones en Google?", answer: "No. Puedo construir el mensaje, recorrido, rendimiento y fundamentos de búsqueda necesarios para competir y después medir lo que ocurre. Ningún desarrollador responsable puede garantizar el comportamiento del mercado o de un buscador." },
        { question: "¿Quién es dueño del trabajo terminado?", answer: "La propiedad, las cuentas, licencias y entrega se detallan en la propuesta. Recibes los accesos y activos acordados cuando se cumplen las obligaciones del proyecto." },
        { question: "¿Qué pasa después del lanzamiento?", answer: "Cada proyecto incluye un lanzamiento y entrega definidos. El soporte, mantenimiento o una siguiente versión se pueden acordar por separado cuando aporten valor." }
      ]
    },
    contact: {
      eyebrow: "¿Tienes un proyecto en mente?",
      title: "Cuéntame el problema. Te diré honestamente si puedo ayudar.",
      text:
        "Comparte el contexto, el resultado esperado, el plazo y un rango de inversión cómodo. Responderé personalmente con el siguiente paso útil, aunque eso signifique recomendar una solución más pequeña u otro especialista.",
      button: "Enviar detalles del proyecto",
      emailLabel: "O escribe directamente",
      subject: "Consulta sobre proyecto",
      responseTime: "Normalmente respondo en dos días hábiles.",
      fields: {
        name: "Tu nombre",
        email: "Correo de trabajo",
        company: "Empresa o sitio actual",
        projectType: "¿Qué necesitas?",
        projectOptions: [
          { value: "website", label: "Sitio web para un negocio" },
          { value: "software", label: "Software a medida o herramienta interna" },
          { value: "product", label: "Un nuevo producto digital" },
          { value: "unsure", label: "Todavía no estoy seguro" }
        ],
        goal: "¿Qué problema debería resolver?",
        goalPlaceholder: "Algunos detalles útiles sobre la situación actual, a quién afecta y qué debería mejorar.",
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
