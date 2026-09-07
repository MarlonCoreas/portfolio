import type { ReactNode } from "react";
import SiteRoot from "../../components/SiteRoot";
import { siteMetadata } from "../../src/config/metadata";

export const metadata = siteMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteRoot lang="en">{children}</SiteRoot>;
}
