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
| Portada | Titular, entrada breve, dos acciones y las tres pruebas verificables. Sin imagen ni carrusel: los proyectos se muestran una sola vez, en su propia sección. |
| Proyectos | Imagen panorámica, resumen visible, enlaces públicos y desglose bajo «Detrás del proyecto». Cada proyecto tiene su acento: azul, ámbar, menta y violeta. |
| Servicios | Tarjetas blancas sobre fondo gris, más espacio y menos elementos ornamentales. |
| Movimiento | Entrada del texto de portada y aparición de secciones de 0,8–0,9 segundos, escalonada 80 ms entre tarjetas hermanas. |
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

La iluminación se verificó después de una carga limpia: seguimiento del cursor dentro de las tarjetas. Las imágenes mantienen su proporción y el contenido no genera desbordamiento horizontal en móvil.

## Identidad personal y contacto simplificado

La marca se unificó como «Marlon Coreas.» en portada, pie, servicios y privacidad. El punto azul continúa en la tarjeta tipográfica «mc.», que presenta a Marlon y menciona su afición por correr y hacer trekking. Se deja la fotografía para una elección posterior.

La portada ahora habla del negocio del visitante y explica el trabajo directo con Marlon. Los servicios muestran precios de partida al principio, textos más breves, destinatarios y entregables concretos. Las historias de los proyectos quedan pendientes; su contenido se conserva.

El formulario empieza con nombre, correo e idea, más el consentimiento. Empresa, tipo de proyecto, plazo y presupuesto están en un desplegable opcional nativo. PHP acepta su omisión y los identifica como «Sin indicar» / «Not specified» en los correos. Se mantienen las validaciones de los campos principales, las listas de valores admitidos y los controles contra spam.

Se verificaron por separado las reglas de validación de PHP con consultas mínimas, completas, valores opcionales vacíos, un presupuesto de la versión anterior y entradas inválidas; no se ejecutó el transporte de correo.

## Depuración posterior

Se retiró lo que no aportaba: el carrusel de portada repetía las mismas tres
imágenes que la sección de proyectos dos pantallas más abajo; el tipo de
proyecto se imprimía dos veces por tarjeta (rótulo sobre la imagen y párrafo
debajo); el número de proyecto estaba en el marcado con `display: none` en todos
los anchos; y quedaban claves de texto, reglas de CSS y un subrayado verde de una
paleta anterior que ningún elemento usaba.

«Cómo trabajo» y «Un filtro útil» cerraban el mismo argumento, así que ahora son
una sola sección: los cuatro pasos y, debajo, las dos listas de encaje sobre la
misma superficie oscura. La pregunta de propiedad salió de las preguntas
frecuentes porque el paso «Lanzamiento con propiedad clara» ya la responde; su
detalle sobre la propuesta se trasladó a ese paso para no perderlo.

### Una sola capa por regla

`components`, `responsive` y `theme` contenían dos diseños superpuestos: 67 de
los 94 selectores de `theme` reescribían uno de `components`. El orden de capas
ganaba a la especificidad, así que reglas más específicas quedaban anuladas sin
aviso y nadie podía saber, leyendo una regla, si se aplicaba.

Se fusionaron en `components` borrando únicamente las declaraciones que una
regla posterior con el mismo selector y el mismo `@media` siempre anulaba, sin
reordenar nada. Las tres declaraciones que dependían del orden **entre archivos**
(el relleno vertical de `.contact`, la altura de línea de `.about-copy > p` y la
de `.contact-result h3`) se eliminaron porque tampoco se aplicaban nunca.

El resultado se comprobó comparando el estilo calculado de los 482 elementos de
la portada, propiedad por propiedad, a 1440, 820 y 400 píxeles: cero diferencias.
La única excepción es intencionada: el escalonado de 80 y 160 ms entre tarjetas
existía en el CSS pero la capa `theme` lo anulaba con un `transition` abreviado;
ahora sí se aplica.

### Un acento por proyecto

`theme-coral`, `theme-teal` y `theme-violet` no pintaban nada: el orden de capas
hacía que `.project-card` a secas ganara al modificador, y los dos primeros
tomaban prestados `--color-error` y `--color-success`, que significan un estado,
no una identidad.

Ahora son `theme-sky`, `theme-amber`, `theme-mint` y `theme-violet`, con cuatro
tokens propios en `tokens.css`. Se eligieron dentro de una banda estrecha de
contraste sobre `--color-surface` (6,7:1 a 7,3:1) para que ninguna tarjeta grite
más que las demás y para que las etiquetas pequeñas de «Detrás del proyecto»
superen 4,5:1. Los modificadores se declaran como `.project-card.theme-*`, junto
a la regla que fija el valor por defecto, para que dos clases ganen siempre al
selector de una sola y el acento no vuelva a depender del orden de importación.

El acento tiñe el borde al pasar el cursor, las etiquetas del desglose, el
enlace de evidencia y el hover de los enlaces del proyecto.

De la tarjeta «mc.» se quitó la línea sobre correr y hacer trekking.

### La tarjeta de identidad, con foto

Sin esa línea la tarjeta repetía cuatro datos que ya estaban a pocos píxeles:
la ubicación (en el párrafo contiguo), el monograma (la marca de la cabecera),
el nombre (cabecera, párrafo y pie) y el cargo (la misma cadena que el eyebrow
de la portada). Era un marco esperando la fotografía que este documento dejaba
pendiente.

Ahora la ocupa un retrato de medio cuerpo: `public/images/marlon-portrait.webp`,
recortado de un original de 3024×4032 a 900×1516 para servir el doble del hueco
en escritorio (413×695). El monograma desaparece porque la cara hace su trabajo.
Sobre la foto queda un degradado de dos tramos —fuerte arriba y abajo,
transparente en el centro— para que la ubicación y el nombre se lean sin tapar
el rostro.

La tarjeta cambia de proporción entre anchos, así que la foto se coloca con
`object-fit: cover` y `object-position: 50% 32%`, y en móvil la tarjeta fija
`aspect-ratio: 4 / 5` para que el recorte siga siendo un retrato y no una franja
del torso. Se comprobó a 1440 y 500 píxeles.
