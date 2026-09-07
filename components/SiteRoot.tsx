import "../src/styles/index.css";
import SiteHeader from "./layout/SiteHeader";
import SiteFooter from "./layout/SiteFooter";
import ClientEnhancements from "./ClientEnhancements";
import type { ReactNode } from "react";
import { copy, type Locale } from "../src/i18n";

type Props = {
  children: ReactNode;
  lang: Locale;
};

export default function SiteRoot({ children, lang }: Props) {
  return (
    <html lang={lang}>
      <body>
        <a className="skip-link" href="#content">{copy[lang].skip}</a>
        <SiteHeader lang={lang} />
        {children}
        <SiteFooter lang={lang} />
        <ClientEnhancements analyticsId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
