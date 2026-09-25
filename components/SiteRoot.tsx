import type { ReactNode } from "react";
import type { Locale } from "../src/i18n";

type Props = {
  children: ReactNode;
  lang: Locale;
};

export default function SiteRoot({ children, lang }: Props) {
  return (
    <html lang={lang}>
      <head>
        {/* The display serif sets the hero headline, so fetch it before the
            stylesheet discovers it and the headline reflows on swap. Body text
            stays on the system face so the largest paint on a phone never
            waits for a font. */}
        <link rel="preload" href="/fonts/instrument-serif.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="frame-lines" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        {children}
      </body>
    </html>
  );
}
