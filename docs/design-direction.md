# Dirección visual del portafolio

Referencia: [MacBook Pro — Apple España](https://www.apple.com/es/macbook-pro/), revisada el 6 de septiembre de 2026.

## Análisis de la referencia

La página organiza el relato alrededor del producto. Una imagen de gran tamaño domina la portada; el texto tiene una jerarquía muy marcada, con títulos breves, peso seminegrita y poco espaciado entre letras. Los márgenes amplios separan las ideas y las tarjetas agrupan información secundaria. La navegación se mantiene disponible al avanzar por la página y utiliza una superficie translúcida.

El negro y el grafito forman la base. El blanco y los grises construyen la jerarquía del texto; el azul identifica las acciones. En la portada aparece un degradado frío sobre el titular. Las imágenes aportan la mayor parte del color y del carácter del producto.

El movimiento ayuda a presentar el contenido por etapas: animación del producto en la portada, aparición de bloques durante el desplazamiento y galerías con controles. Esta implementación adapta ese ritmo al portafolio mediante transiciones ligeras, sin necesitar vídeos o modelos 3D de los proyectos.

## Aplicación

| Elemento | Decisión para el portafolio |
| --- | --- |
| Base | Negro `#000000`, grafito `#1d1d1f`, secciones claras `#f5f5f7`. |
| Texto | Blanco `#f5f5f7`, gris secundario `#b5b5ba`, gris de apoyo `#96969b`. |
| Acciones | Azul `#0071e3`; enlaces sobre oscuro `#2997ff`, sobre claro `#0066cc`. |
| Tipografía | Fuente del sistema, con prioridad a la tipografía nativa de Apple; titulares grandes, espaciado compacto y texto secundario legible. |
| Portada | Carrusel de Peek Compress, NC Home Remodeling y LoanPilot. Proyecto activo centrado, avances laterales, flechas, indicadores, teclado y arrastre horizontal en escritorio y móvil. Cada proyecto enlaza a su ficha. |
| Proyectos | Imagen panorámica, resumen visible, enlaces públicos y desglose bajo «Detrás del proyecto». |
| Servicios | Tarjetas blancas sobre fondo gris, más espacio y menos elementos ornamentales. |
| Movimiento | Entrada del texto de portada, aparición de secciones de 0,8–0,9 segundos y transiciones del carrusel de 650 ms. El carrusel avanza por interacción del visitante. |
| Iluminación | Halo que sigue al cursor en proyectos, servicios, testimonios y contacto. Azul sobre grafito y variaciones suaves de azul, índigo y cian sobre blanco. |
| Navegación | Barra translúcida persistente, contacto azul y navegación de secciones accesible también en móvil. |

Los colores, tamaños y tiempos son decisiones de adaptación; no se presentan como una extracción exacta de las hojas de estilo de Apple. Se conservan el contenido bilingüe, los proyectos, las páginas de servicios, los metadatos y el formulario existente.

## Accesibilidad y entrega

El contenido permanece visible sin JavaScript. Las apariciones se preparan únicamente para elementos inicialmente fuera de pantalla. Se respeta `prefers-reduced-motion`, incluso si cambia durante la visita; las transiciones se desactivan y la iluminación del cursor se omite. El halo tampoco se activa con interacción táctil. Los detalles de proyectos utilizan el control nativo `details`, accesible por teclado, y los campos conservan sus etiquetas con un foco visible más claro.

La entrega conserva la arquitectura vinext y la exportación existente para Hostinger. El formulario depende del servidor PHP y de la configuración SMTP de ese alojamiento; una migración a otro servicio requiere adaptar ese backend y queda fuera del cambio de diseño.

## Revisión visual posterior

La primera versión tenía dos regresiones de tamaño: las imágenes de la portada conservaban la altura del atributo HTML al reducir su ancho, y el contenido de los proyectos heredaba `min-height: 100%` dentro de una columna flex, comprimiendo sus imágenes hasta cero. Se corrigieron con alturas proporcionales y flujo normal para las tarjetas.

También se separaron las capturas de escritorio, se simplificó la portada móvil, se redujo el tamaño de su titular y se corrigió el desbordamiento del contacto en la cabecera de servicios a 320 píxeles.

Se revisó en navegador la portada y los proyectos en escritorio y móvil (320, 390, 782 y 1440 píxeles de ancho), la apertura de detalles y preguntas frecuentes mediante teclado, el foco del formulario y el cambio entre inglés y español. La comprobación del formulario cubre su interfaz y las restricciones de campos vacíos; no se enviaron consultas ni se probó el correo PHP/SMTP desde la vista local.

El carrusel y la iluminación se verificaron después de una carga limpia: avance circular, selección por indicadores, flechas de teclado, arrastre horizontal sin navegación accidental y seguimiento del cursor dentro de las tarjetas. Las imágenes mantienen su proporción y el contenido no genera desbordamiento horizontal en móvil.

## Identidad personal y contacto simplificado

La marca se unificó como «Marlon Coreas.» en portada, pie, servicios y privacidad. El punto azul continúa en la tarjeta tipográfica «mc.», que presenta a Marlon y menciona su afición por correr y hacer trekking. Se deja la fotografía para una elección posterior.

La portada ahora habla del negocio del visitante y explica el trabajo directo con Marlon. Los servicios muestran precios de partida al principio, textos más breves, destinatarios y entregables concretos. Las historias de los proyectos quedan pendientes; su contenido y el carrusel se conservan.

El formulario empieza con nombre, correo e idea, más el consentimiento. Empresa, tipo de proyecto, plazo y presupuesto están en un desplegable opcional nativo. PHP acepta su omisión y los identifica como «Sin indicar» / «Not specified» en los correos. Se mantienen las validaciones de los campos principales, las listas de valores admitidos y los controles contra spam.

Se verificaron por separado las reglas de validación de PHP con consultas mínimas, completas, valores opcionales vacíos, un presupuesto de la versión anterior y entradas inválidas; no se ejecutó el transporte de correo.
