import { site } from "./site";
import type { HomeSection } from "./routes";

export const mainNavigation = ["work", "services", "about"] as const satisfies readonly HomeSection[];
export const projectLinks = [
  { label: "Peek Compress", href: site.peekUrl },
  { label: "NC Home Remodeling", href: site.remodelingUrl },
  { label: "LoanPilot", href: site.loanpilotUrl }
];
export const socialLinks = [
  { label: "GitHub", href: site.githubUrl },
  { label: "LinkedIn", href: site.linkedinUrl }
];
