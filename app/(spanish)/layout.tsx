import type { ReactNode } from "react";
import SiteRoot from "../../components/SiteRoot";
import { siteMetadata } from "../../src/config/metadata";

export const metadata = siteMetadata("es");

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <SiteRoot lang="es">{children}</SiteRoot>;
}
