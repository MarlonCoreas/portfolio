# Estructura y mantenimiento

La aplicación conserva React, vinext, las rutas actuales y la exportación estática para Hostinger. El cambio separa configuración, contenido, presentación e interacciones. No hace falta instalar otra librería de componentes.

## Dónde cambiar cada cosa

| Cambio | Archivo o carpeta |
| --- | --- |
| Color principal, superficies, textos, bordes, degradados, tipografía y radios | `src/styles/tokens.css` |
| Nombre, dominio, correo, redes y enlaces de productos | `src/config/site.ts` |
| Páginas y sus equivalentes en español e inglés | `src/config/routes.json` |
| Enlaces que aparecen en navegación, redes y proyectos del footer | `src/config/navigation.ts` |
| Metadatos generales e iconos del sitio | `src/config/metadata.ts` |
| Textos de portada, formulario, navegación y footer | `src/i18n.ts` |
| Textos de servicios y privacidad | `src/content/services.ts`, `src/content/privacy.ts` |
| Cabecera, footer, marca y selector de idioma | `components/layout/` |
| Enlaces con aspecto de botón, flechas y encabezados de sección | `components/ui/` |
| Formulario y sus estados visibles | `components/portfolio/ContactSection.tsx` |
| Apariciones, iluminación, analítica y envío del formulario | `components/ClientEnhancements.tsx` |

## Layout compartido

```text
app/(english)/layout.tsx ─┐
                         ├─ SiteRoot
app/(spanish)/layout.tsx ─┘    ├─ enlace para saltar al contenido
                             ├─ SiteHeader
                             ├─ contenido de la página
                             ├─ SiteFooter
                             └─ ClientEnhancements
```

Cada página entrega un único `main` con `id="content"` y `tabIndex={-1}`. El layout aporta la cabecera y el footer automáticamente. Las páginas no deben volver a importar esos componentes ni registrar otra instancia de las interacciones globales.

El menú y el footer reutilizan la misma lista de navegación. Sus enlaces incluyen la ruta de la portada correspondiente al idioma, para funcionar desde servicios y privacidad. El selector de idioma resuelve la página equivalente utilizando el registro de rutas y funciona también en el HTML exportado. Las interacciones se limpian y vuelven a registrar cuando cambia la ruta.

## Sistema visual

`src/styles/index.css` es la única entrada de CSS. Importa la paleta y módulos por responsabilidad: base, elementos comunes, layout, portada, servicios, privacidad, contacto y movimiento.

Los módulos usan roles de color, nunca valores hexadecimales propios. Por ejemplo:

```css
.card {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
}
```

Para cambiar el acento de todo el sitio, modifica `--color-brand` en `tokens.css`. Los enlaces, botones, tonos claros, fondos con acento y halos derivan de ese valor. Los colores de éxito y error son independientes porque comunican estados. Para un ajuste específico, usa los roles correspondientes: `--color-header`, `--color-text-muted`, `--color-surface-light`, etc.

El orden de capas está declarado en `index.css`: `reset`, `base`, `components`, `utilities`. Cada módulo de página escribe **una sola regla por selector** dentro de `components`; sus ajustes por ancho viven en las `@media` de ese mismo archivo, no en una capa posterior. No añadas una capa nueva para corregir una regla existente: edita la regla. Los colores y dimensiones compartidas viven fuera de esas capas, en los tokens. Los módulos de movimiento mantienen el soporte de movimiento reducido y las restricciones para pantallas táctiles.

Los colores internos de capturas, fotografías, iconos de productos y otras imágenes son parte de esos archivos, no de la paleta de la interfaz.

## Componentes reutilizables

- `ActionLink` recibe `href`, `variant` (`primary`, `ghost` o `light`), `arrow` y atributos normales de enlace, incluidos los de seguimiento.
- `SectionHeading` recibe `id`, `eyebrow`, `title`, `intro` opcional y `wide`.
- `ArrowIcon` define la flecha en un único lugar.
- `BrandName`, `SiteHeader`, `SiteFooter` y `LanguageSwitch` forman el layout común.

Las piezas con comportamiento específico, como el formulario, tienen componentes propios. No se abstraen todos los `div` o párrafos: se comparten los elementos con una responsabilidad repetida y estable.

## Añadir una página

1. Registra su clave y rutas de ambos idiomas en `src/config/routes.json`.
2. Crea las entradas `page.tsx` dentro de los grupos de idioma existentes. El layout se hereda automáticamente.
3. Mantén sus textos en `src/content/` y su presentación en un componente de página. Usa `routeAlternates` para los metadatos y `routePath` para los enlaces.
4. Si debe figurar en el menú, actualiza la configuración y sus textos. El menú actual enlaza secciones de la portada mediante `homeSectionHref`.
5. Añade su prioridad al mapa tipado del sitemap. La exportación, los equivalentes de idioma y las reglas de rutas de Apache se obtienen del registro común.
6. Reutiliza los tokens y componentes existentes antes de crear variantes nuevas.

## Verificación y entrega

Usa Node.js 22.18 o posterior para los scripts que consumen la configuración TypeScript directamente.

```bash
npm run check
npm run export:hostinger
npm run test:export
```

`check` comprueba TypeScript, correspondencia de idiomas, destinos del menú y ausencia de paletas privadas o referencias de color inexistentes. `test:export` revisa cada página exportada: un único header/footer/main/h1, cabecera y footer idénticos por idioma, enlaces de secciones y traducciones, canonical y campos opcionales del formulario.

La exportación actualiza `dist/hostinger/` y `dist/hostinger.zip`. El fallback estático `public/404.html`, específico del alojamiento Apache, consume `public/404.css` y una copia de los tokens generada como `theme.css` durante la exportación. Esa copia es un artefacto: no se edita.

El backend PHP conserva su despliegue y validaciones. Probar la interfaz y el HTML exportado no implica enviar correos reales ni desplegar el sitio.
