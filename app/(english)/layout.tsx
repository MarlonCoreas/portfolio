import "../../src/styles/global.css";
import type { ReactNode } from "react";
import SiteRoot from "../../components/SiteRoot";
import { copy, siteUrl } from "../../src/i18n";

const t = copy.en;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: t.seo.title,
  description: t.seo.description,
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
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
    siteName: "Marlon Coreas — Portfolio",
    title: t.seo.title,
    description: t.seo.description,
    url: "/",
    locale: t.locale,
    alternateLocale: ["es_SV"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "More useful inquiries. Less manual work. — Marlon Coreas" }]
  },
  twitter: {
    card: "summary_large_image",
    title: t.seo.title,
    description: t.seo.description,
    images: ["/og.png"]
  }
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteRoot lang="en">{children}</SiteRoot>;
}
