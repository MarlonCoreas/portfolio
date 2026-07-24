import type { ReactNode } from "react";
import type { Locale } from "../src/i18n";

type Props = {
  children: ReactNode;
  lang: Locale;
};

export default function SiteRoot({ children, lang }: Props) {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
