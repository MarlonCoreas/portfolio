import { routeAlternates } from "../../../../../src/config/routes";
import ServiceLandingPage from "../../../../../components/ServiceLandingPage";

export const metadata = {
  title: "Sitios web bilingües para negocios | Marlon Coreas",
  description: "Sitios claros y accesibles en español e inglés para negocios de servicios, construidos alrededor de confianza y consultas útiles.",
  alternates: routeAlternates("websites", "es")
};

export default function SitiosWebPage() {
  return <ServiceLandingPage lang="es" service="websites" />;
}
