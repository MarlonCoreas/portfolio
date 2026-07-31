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
  linkedinUrl: "https://www.linkedin.com/in/marlon-salomon-coreas-villanueva-8b0416161"
};

export const copy = {
  en: {
    locale: "en_US",
    languageName: "English",
    alternatePath: "/es",
    alternateLabel: "ES",
    skip: "Skip to content",
    seo: {
      title: "Marlon Coreas | Websites & Software That Bring In Customers",
      description:
        "Business websites, custom web applications and desktop software, designed and built end to end — from the first idea to launch, in English and Spanish."
    },
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Let's talk"
    },
    hero: {
      status: "Available for new projects",
      eyebrow: "Marlon Coreas · Websites, web tools & software",
      titleStart: "Websites and software",
      titleAccent: "that earn their keep.",
      intro:
        "I work with businesses that want more than a template: a fast bilingual site that turns visitors into real inquiries, or custom software that takes the busywork out of the day. Strategy, design, development and launch stay under one roof — with support once you're live.",
      primary: "See real projects",
      secondary: "Request a quote",
      proofLabel: "What that looks like",
      proof: [
        { value: "03", label: "products live online" },
        { value: "EN / ES", label: "bilingual by default" },
        { value: "100%", label: "built to measure" }
      ],
      consoleEyebrow: "How it works",
      consoleTitle: "From idea to live",
      consoleLines: [
        { key: "01 · plan", value: "goals before pixels" },
        { key: "02 · build", value: "fast, clear, yours" },
        { key: "03 · launch", value: "live and supported" }
      ],
      shipping: "In the works",
      shippingValue: "A new product in active development"
    },
    work: {
      eyebrow: "Selected work",
      title: "Proof, not promises.",
      intro:
        "A Mac app on the App Store, a contractor's website that brings in jobs, a free tool people use before signing a loan — and the next idea already taking shape.",
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
          kind: "Client work · A website that brings in jobs",
          description:
            "A bilingual website that turns finished remodeling work into calls and quote requests, and puts the company in front of homeowners searching for a contractor across the greater DC area.",
          role: "Strategy · Design · Development · Google visibility",
          tags: ["English & Spanish", "Found on Google", "Built to convert"],
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
          tags: ["Free to use", "Works on any phone", "Español / English"],
          image: "/images/loanpilot.webp",
          alt: "The LoanPilot calculator showing a monthly payment estimate and yearly cost breakdown",
          theme: "teal",
          links: [{ label: "View live project", href: site.loanpilotUrl }]
        },
        {
          number: "04",
          title: "The next useful thing",
          kind: "Private product · In development",
          description:
            "A meaningful new product is currently being designed, tested and built. The details stay private for now; the work does not.",
          role: "Research · Product design · Engineering",
          tags: ["0 → 1", "In progress", "Details soon"],
          image: null,
          alt: "",
          theme: "violet",
          links: []
        }
      ]
    },
    services: {
      eyebrow: "What I can do for you",
      title: "From the first idea to a launched product.",
      intro:
        "You bring the business problem. Strategy, design, development and launch are handled as one piece of work — and you always know exactly who is responsible for the result.",
      items: [
        {
          number: "01",
          title: "Websites that sell",
          text: "Not a template with your logo dropped in: a site built around what your customers need to see before they call you, quick on any phone and easy to keep current.",
          skills: ["A clear message", "English & Spanish", "Ready to be found on Google"]
        },
        {
          number: "02",
          title: "Custom software",
          text: "Web platforms, client portals, quoting and booking systems, internal dashboards, integrations between the tools you already pay for — software shaped around how your business actually runs.",
          skills: ["Built around your process", "Less manual work", "Simple enough to actually use"]
        },
        {
          number: "03",
          title: "Products built from scratch",
          text: "The full journey for a new idea, including desktop software: research, design, development, publishing and everything the launch needs.",
          skills: ["Idea to launch", "Desktop and web", "App Store publishing"]
        }
      ]
    },
    approach: {
      eyebrow: "How I work",
      title: "Small details. Serious outcomes.",
      intro:
        "Good software is not just working software. It explains itself in seconds, feels considered at every edge, and is still easy to change a year later.",
      points: [
        { title: "We start with your goal", text: "Who the customer is, what has to happen, and what a successful result actually looks like." },
        { title: "You always know where things stand", text: "You talk to me directly, see progress as it happens, and get plain answers instead of jargon." },
        { title: "It ships ready", text: "Speed, mobile, search visibility and accessibility are part of the work, not an upsell after launch." }
      ]
    },
    about: {
      eyebrow: "About",
      title: "A technical partner, not another vendor.",
      text:
        "I design and develop digital products end to end. I've taken my own products from an empty file to the App Store, and I build the websites and software that businesses depend on to sell, quote and operate. You talk directly with whoever is building your project, and the scope and the price are agreed before anything starts.",
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
      ]
    },
    contact: {
      eyebrow: "Have a project in mind?",
      title: "Tell me what you need and I'll tell you how I'd build it.",
      text:
        "A few lines about your business, what you want to achieve and roughly when you need it. You get back an honest opinion, a plan and a price — no obligation.",
      button: "Request a quote",
      emailLabel: "Or write directly",
      subject: "Project inquiry"
    },
    footer: {
      tagline: "Websites, web applications and software for businesses that want to be taken seriously.",
      navigation: "Navigation",
      projects: "Live projects",
      connect: "Connect",
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
      title: "Marlon Coreas | Sitios web y software que traen clientes",
      description:
        "Sitios web para negocios, aplicaciones web a la medida y software de escritorio, diseñados y desarrollados de principio a fin — de la idea al lanzamiento, en español e inglés."
    },
    nav: {
      work: "Proyectos",
      services: "Servicios",
      about: "Acerca de mí",
      contact: "Hablemos"
    },
    hero: {
      status: "Disponible para nuevos proyectos",
      eyebrow: "Marlon Coreas · Sitios web, herramientas y software",
      titleStart: "Sitios y software",
      titleAccent: "que se pagan solos.",
      intro:
        "Trabajo con negocios que quieren algo más que una plantilla: un sitio bilingüe y rápido que convierta visitas en consultas reales, o software a la medida que quite el trabajo repetitivo del día. Estrategia, diseño, desarrollo y lanzamiento bajo un mismo responsable — con soporte una vez que estás en línea.",
      primary: "Ver proyectos reales",
      secondary: "Pedir una cotización",
      proofLabel: "Qué significa eso",
      proof: [
        { value: "03", label: "productos en línea" },
        { value: "EN / ES", label: "bilingüe siempre" },
        { value: "100%", label: "hecho a la medida" }
      ],
      consoleEyebrow: "Cómo funciona",
      consoleTitle: "De la idea a estar en línea",
      consoleLines: [
        { key: "01 · plan", value: "objetivos antes que diseño" },
        { key: "02 · desarrollo", value: "rápido, claro, tuyo" },
        { key: "03 · lanzamiento", value: "en línea y con soporte" }
      ],
      shipping: "En preparación",
      shippingValue: "Un nuevo producto tomando forma"
    },
    work: {
      eyebrow: "Proyectos seleccionados",
      title: "Evidencia, no promesas.",
      intro:
        "Una app de Mac en el App Store, el sitio de una empresa de remodelación que genera trabajos, una herramienta gratuita que la gente usa antes de firmar un préstamo — y la próxima idea que ya está tomando forma.",
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
          kind: "Trabajo para cliente · Un sitio que genera trabajos",
          description:
            "Un sitio bilingüe que convierte los proyectos terminados de una empresa de remodelación en llamadas y solicitudes de cotización, y la pone frente a los propietarios que buscan un contratista en el área de Washington.",
          role: "Estrategia · Diseño · Desarrollo · Visibilidad en Google",
          tags: ["Español e inglés", "Aparece en Google", "Pensado para convertir"],
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
          tags: ["Uso gratuito", "Funciona en cualquier teléfono", "Español / English"],
          image: "/images/loanpilot.webp",
          alt: "La calculadora de LoanPilot mostrando la cuota estimada y el desglose de costo por año",
          theme: "teal",
          links: [{ label: "Ver proyecto", href: site.loanpilotUrl }]
        },
        {
          number: "04",
          title: "La próxima idea útil",
          kind: "Producto privado · En desarrollo",
          description:
            "Un nuevo producto importante se encuentra en diseño, validación y construcción. Los detalles se mantienen privados por ahora; el trabajo no.",
          role: "Investigación · Diseño de producto · Ingeniería",
          tags: ["0 → 1", "En progreso", "Pronto"],
          image: null,
          alt: "",
          theme: "violet",
          links: []
        }
      ]
    },
    services: {
      eyebrow: "En qué te puedo ayudar",
      title: "De la primera idea hasta el producto lanzado.",
      intro:
        "Tú pones el problema del negocio. La estrategia, el diseño, el desarrollo y el lanzamiento se manejan como un solo trabajo — y siempre sabes exactamente quién responde por el resultado.",
      items: [
        {
          number: "01",
          title: "Sitios web que venden",
          text: "No una plantilla con tu logo encima: un sitio construido alrededor de lo que tu cliente necesita ver antes de llamarte, rápido en cualquier teléfono y fácil de mantener al día.",
          skills: ["Un mensaje claro", "Español e inglés", "Listo para aparecer en Google"]
        },
        {
          number: "02",
          title: "Software a la medida",
          text: "Plataformas web, portales para clientes, sistemas de cotización y reservas, paneles internos, integraciones entre las herramientas que ya pagas — software hecho a la forma en que opera tu negocio.",
          skills: ["Hecho para tu proceso", "Menos trabajo manual", "Simple de usar de verdad"]
        },
        {
          number: "03",
          title: "Productos desde cero",
          text: "El camino completo para una idea nueva, incluyendo software de escritorio: investigación, diseño, desarrollo, publicación y todo lo que exige un lanzamiento.",
          skills: ["De la idea al lanzamiento", "Escritorio y web", "Publicación en App Store"]
        }
      ]
    },
    approach: {
      eyebrow: "Cómo trabajo",
      title: "Detalles pequeños. Resultados serios.",
      intro:
        "El buen software no solo funciona. Se explica solo en segundos, se siente pensado en cada borde y sigue siendo fácil de cambiar un año después.",
      points: [
        { title: "Empezamos por tu objetivo", text: "Quién es el cliente, qué tiene que pasar y cómo se ve realmente un buen resultado." },
        { title: "Siempre sabes cómo va todo", text: "Hablas directo conmigo, ves el avance mientras ocurre y recibes respuestas claras, sin tecnicismos." },
        { title: "Se entrega listo", text: "Velocidad, móvil, visibilidad en buscadores y accesibilidad son parte del trabajo, no un extra que se cobra después." }
      ]
    },
    about: {
      eyebrow: "Acerca de mí",
      title: "Un socio técnico, no un proveedor más.",
      text:
        "Diseño y desarrollo productos digitales de principio a fin. He llevado mis propios productos desde un archivo vacío hasta el App Store, y construyo los sitios y el software con los que un negocio vende, cotiza y opera todos los días. Hablas directo con quien construye tu proyecto, y el alcance y el precio se acuerdan antes de empezar.",
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
      ]
    },
    contact: {
      eyebrow: "¿Tienes un proyecto en mente?",
      title: "Cuéntame qué necesitas y te digo cómo lo haría.",
      text:
        "Unas líneas sobre tu negocio, qué quieres lograr y para cuándo lo necesitas. Recibes una opinión honesta, un plan y un precio — sin compromiso.",
      button: "Pedir una cotización",
      emailLabel: "O escribe directamente",
      subject: "Consulta sobre proyecto"
    },
    footer: {
      tagline: "Sitios web, aplicaciones y software para negocios que quieren que los tomen en serio.",
      navigation: "Navegación",
      projects: "Proyectos en línea",
      connect: "Conecta",
      legal: "Diseñado y desarrollado por Marlon Coreas.",
      backToTop: "Volver arriba"
    }
  }
} as const;
