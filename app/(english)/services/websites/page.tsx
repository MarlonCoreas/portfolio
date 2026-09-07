import { routeAlternates } from "../../../../src/config/routes";
import ServiceLandingPage from "../../../../components/ServiceLandingPage";

export const metadata = {
  title: "Bilingual Business Websites | Marlon Coreas",
  description: "Clear, accessible English and Spanish websites for service businesses, built around trust, useful inquiries and measurable next steps.",
  alternates: routeAlternates("websites", "en")
};

export default function WebsitesPage() {
  return <ServiceLandingPage lang="en" service="websites" />;
}
