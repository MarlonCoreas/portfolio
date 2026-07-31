import "../../src/styles/global.css";
import type { ReactNode } from "react";
import SiteRoot from "../../components/SiteRoot";
import { copy, siteUrl } from "../../src/i18n";

const t = copy.es;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: t.seo.title,
  description: t.seo.description,
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es", "x-default": "/" }
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },
  openGraph: {
    type: "website",
    siteName: "Marlon Coreas — Portafolio",
    title: t.seo.title,
    description: t.seo.description,
    url: "/es",
    locale: t.locale,
    alternateLocale: ["en_US"],
    images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "Sitios y software que se pagan solos — Marlon Coreas" }]
  },
  twitter: {
    card: "summary_large_image",
    title: t.seo.title,
    description: t.seo.description,
    images: ["/social-card.png"]
  }
};

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <SiteRoot lang="es">{children}</SiteRoot>;
}
