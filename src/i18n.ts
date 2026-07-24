export type Locale = "en" | "es";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mscoreas-portfolio.mcoreas279.chatgpt.site";

export const site = {
  name: "Marlon Coreas",
  email: "support@peekcompress.com",
  peekUrl: "https://peekcompress.com/",
  peekAppStoreUrl: "https://apps.apple.com/app/6768755084",
  remodelingUrl: "https://homeremodelingnc.com/",
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
      title: "Marlon Coreas | Software Engineer & Product Builder",
      description:
        "Independent software engineer building native products and high-performance web experiences. Creator of Peek Compress and developer of bilingual client websites."
    },
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Let's talk"
    },
    hero: {
      status: "Available for select projects",
      eyebrow: "Marlon Coreas · Independent software engineer",
      titleStart: "I build software",
      titleAccent: "that feels inevitable.",
      intro:
        "From native desktop products to conversion-focused websites, I turn complex ideas into clear, fast, and carefully engineered experiences.",
      primary: "Explore selected work",
      secondary: "Start a project",
      proofLabel: "Selected signals",
      proof: [
        { value: "02", label: "public launches" },
        { value: "30+", label: "archive formats" },
        { value: "EN / ES", label: "bilingual delivery" }
      ],
      consoleEyebrow: "Product system",
      consoleTitle: "Built end to end",
      consoleLines: [
        { key: "product", value: "strategy → ship" },
        { key: "experience", value: "useful → memorable" },
        { key: "quality", value: "fast → resilient" }
      ],
      shipping: "Shipping now",
      shippingValue: "A new product in active development"
    },
    work: {
      eyebrow: "Selected work",
      title: "Proof, not promises.",
      intro:
        "A native macOS product, a client growth platform, and the next idea currently taking shape.",
      viewProject: "View live project",
      visitAppStore: "App Store",
      items: [
        {
          number: "01",
          title: "Peek Compress",
          kind: "Owned product · Native macOS",
          description:
            "A local-first archive workspace that lets Mac users browse, edit, compare, and extract ZIP, RAR, 7Z, TAR, and 30+ formats without the usual folder clutter.",
          role: "Product direction · macOS development · Launch website",
          tags: ["Native macOS", "Local-first", "30+ formats"],
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
          kind: "Client work · Growth website",
          description:
            "A bilingual, search-ready website that turns a contractor’s craftsmanship into a clear digital sales experience for homeowners across the greater DMV area.",
          role: "Digital strategy · UX/UI · Frontend development",
          tags: ["Astro", "EN / ES", "Local SEO"],
          image: "/images/nc-remodeling.webp",
          alt: "Interior remodeling and custom cabinetry project featured on the NC Home Remodeling website",
          theme: "coral",
          links: [{ label: "View live project", href: site.remodelingUrl }]
        },
        {
          number: "03",
          title: "The next useful thing",
          kind: "Private product · In development",
          description:
            "A meaningful new product is currently being designed, tested, and built. The details stay private for now; the work does not.",
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
      eyebrow: "What I do",
      title: "One partner from rough idea to polished release.",
      intro:
        "I combine product judgment with hands-on engineering, so decisions stay connected from the first sketch to production.",
      items: [
        {
          number: "01",
          title: "Product engineering",
          text: "Native desktop software and focused digital products built around real workflows—not feature lists.",
          skills: ["Product architecture", "Native experiences", "Interaction design"]
        },
        {
          number: "02",
          title: "High-performance web",
          text: "Distinctive websites that load quickly, communicate clearly, and give search engines the right context.",
          skills: ["Astro & TypeScript", "Responsive UI", "Technical SEO"]
        },
        {
          number: "03",
          title: "Launch systems",
          text: "The details around the product: bilingual content, structured data, deployment, and a maintainable foundation.",
          skills: ["Internationalization", "Accessibility", "Release readiness"]
        }
      ]
    },
    approach: {
      eyebrow: "Working style",
      title: "Small details. Serious outcomes.",
      intro:
        "Good software is not just functional. It feels considered at every edge, communicates its value quickly, and remains easy to evolve after launch.",
      points: [
        { title: "Start with the problem", text: "Clarify the user, the constraint, and what success actually means." },
        { title: "Make the complex legible", text: "Turn deep functionality into an interface that feels calm and obvious." },
        { title: "Ship with discipline", text: "Performance, accessibility, SEO, and maintainability are part of the product." }
      ]
    },
    about: {
      eyebrow: "About",
      title: "Engineering with a product point of view.",
      text:
        "I’m an independent developer who likes hard product problems, quiet interfaces, and software that earns a place in someone’s daily routine. I can own the full journey or join a team where thoughtful execution matters.",
      availability: "Available for remote product work, select freelance projects, and the right full-time opportunity.",
      stackLabel: "Current toolkit",
      stack: ["Native macOS", "Astro", "TypeScript", "JavaScript", "HTML / CSS", "SEO", "i18n"]
    },
    contact: {
      eyebrow: "Have a useful problem?",
      title: "Let’s build something worth keeping.",
      text:
        "Tell me what you’re trying to launch, improve, or untangle. A short note about the product, timeline, and goals is enough to start.",
      button: "Start the conversation",
      emailLabel: "Or write directly",
      subject: "Project inquiry"
    },
    footer: {
      tagline: "Independent software engineer building native products and high-performance web experiences.",
      navigation: "Navigation",
      projects: "Live projects",
      connect: "Connect",
      legal: "Built with vinext. Designed to be fast, accessible, and bilingual.",
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
      title: "Marlon Coreas | Desarrollador de Software y Producto",
      description:
        "Desarrollador de software independiente especializado en productos nativos y experiencias web de alto rendimiento. Creador de Peek Compress y sitios bilingües para clientes."
    },
    nav: {
      work: "Proyectos",
      services: "Servicios",
      about: "Acerca de mí",
      contact: "Hablemos"
    },
    hero: {
      status: "Disponible para proyectos seleccionados",
      eyebrow: "Marlon Coreas · Desarrollador de software independiente",
      titleStart: "Creo software",
      titleAccent: "que se siente inevitable.",
      intro:
        "Desde productos nativos de escritorio hasta sitios orientados a conversión, convierto ideas complejas en experiencias claras, rápidas y cuidadosamente desarrolladas.",
      primary: "Explorar proyectos",
      secondary: "Iniciar un proyecto",
      proofLabel: "Señales concretas",
      proof: [
        { value: "02", label: "lanzamientos públicos" },
        { value: "30+", label: "formatos soportados" },
        { value: "EN / ES", label: "entrega bilingüe" }
      ],
      consoleEyebrow: "Sistema de producto",
      consoleTitle: "Creado de principio a fin",
      consoleLines: [
        { key: "producto", value: "estrategia → lanzamiento" },
        { key: "experiencia", value: "útil → memorable" },
        { key: "calidad", value: "rápido → resiliente" }
      ],
      shipping: "En desarrollo",
      shippingValue: "Un nuevo producto tomando forma"
    },
    work: {
      eyebrow: "Proyectos seleccionados",
      title: "Evidencia, no promesas.",
      intro:
        "Un producto nativo para macOS, una plataforma de crecimiento para un cliente y la próxima idea que ya está tomando forma.",
      viewProject: "Ver proyecto",
      visitAppStore: "App Store",
      items: [
        {
          number: "01",
          title: "Peek Compress",
          kind: "Producto propio · macOS nativo",
          description:
            "Un workspace local para explorar, editar, comparar y extraer ZIP, RAR, 7Z, TAR y más de 30 formatos en Mac sin llenar el equipo de carpetas temporales.",
          role: "Dirección de producto · Desarrollo macOS · Web de lanzamiento",
          tags: ["macOS nativo", "Local-first", "30+ formatos"],
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
          kind: "Trabajo para cliente · Web de crecimiento",
          description:
            "Un sitio bilingüe y preparado para buscadores que convierte el trabajo de una empresa de remodelación en una experiencia de venta clara para propietarios del área metropolitana de Washington.",
          role: "Estrategia digital · UX/UI · Desarrollo frontend",
          tags: ["Astro", "EN / ES", "SEO local"],
          image: "/images/nc-remodeling.webp",
          alt: "Proyecto de remodelación y gabinetes a medida presentado en el sitio de NC Home Remodeling",
          theme: "coral",
          links: [{ label: "Ver proyecto", href: site.remodelingUrl }]
        },
        {
          number: "03",
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
      eyebrow: "Lo que hago",
      title: "Un solo aliado desde la idea inicial hasta un lanzamiento pulido.",
      intro:
        "Combino criterio de producto con ingeniería práctica para mantener conectadas las decisiones desde el primer boceto hasta producción.",
      items: [
        {
          number: "01",
          title: "Ingeniería de producto",
          text: "Software nativo de escritorio y productos digitales enfocados en flujos reales, no en listas de funciones.",
          skills: ["Arquitectura de producto", "Experiencias nativas", "Diseño de interacción"]
        },
        {
          number: "02",
          title: "Web de alto rendimiento",
          text: "Sitios distintivos que cargan rápido, comunican con claridad y dan a los buscadores el contexto correcto.",
          skills: ["Astro y TypeScript", "UI responsive", "SEO técnico"]
        },
        {
          number: "03",
          title: "Sistemas de lanzamiento",
          text: "Todo alrededor del producto: contenido bilingüe, datos estructurados, despliegue y bases mantenibles.",
          skills: ["Internacionalización", "Accesibilidad", "Preparación de release"]
        }
      ]
    },
    approach: {
      eyebrow: "Forma de trabajo",
      title: "Detalles pequeños. Resultados serios.",
      intro:
        "El buen software no solo funciona. Se siente pensado en cada borde, comunica rápido su valor y sigue siendo fácil de evolucionar después del lanzamiento.",
      points: [
        { title: "Comenzar por el problema", text: "Aclarar el usuario, las restricciones y qué significa realmente tener éxito." },
        { title: "Hacer legible lo complejo", text: "Convertir funcionalidad profunda en una interfaz tranquila y evidente." },
        { title: "Lanzar con disciplina", text: "Rendimiento, accesibilidad, SEO y mantenibilidad forman parte del producto." }
      ]
    },
    about: {
      eyebrow: "Acerca de mí",
      title: "Ingeniería con una perspectiva de producto.",
      text:
        "Soy un desarrollador independiente al que le gustan los problemas difíciles de producto, las interfaces serenas y el software que gana un lugar en la rutina diaria. Puedo liderar todo el recorrido o sumarme a un equipo donde la ejecución cuidadosa importe.",
      availability: "Disponible para trabajo remoto de producto, proyectos freelance seleccionados y la oportunidad laboral adecuada.",
      stackLabel: "Herramientas actuales",
      stack: ["macOS nativo", "Astro", "TypeScript", "JavaScript", "HTML / CSS", "SEO", "i18n"]
    },
    contact: {
      eyebrow: "¿Tienes un problema útil?",
      title: "Construyamos algo que valga la pena conservar.",
      text:
        "Cuéntame qué quieres lanzar, mejorar o simplificar. Una nota breve sobre el producto, tiempos y objetivos es suficiente para comenzar.",
      button: "Iniciar conversación",
      emailLabel: "O escribe directamente",
      subject: "Consulta sobre proyecto"
    },
    footer: {
      tagline: "Desarrollador de software independiente creando productos nativos y experiencias web de alto rendimiento.",
      navigation: "Navegación",
      projects: "Proyectos en línea",
      connect: "Conecta",
      legal: "Creado con vinext. Diseñado para ser rápido, accesible y bilingüe.",
      backToTop: "Volver arriba"
    }
  }
} as const;
