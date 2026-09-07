import { routeAlternates } from "../../../../../src/config/routes";
import ServiceLandingPage from "../../../../../components/ServiceLandingPage";

export const metadata = {
  title: "Software a la medida y desarrollo de productos | Marlon Coreas",
  description: "Software a medida, herramientas internas y primeras versiones enfocadas alrededor de un proceso real y un alcance escrito.",
  alternates: routeAlternates("software", "es")
};

export default function SoftwareAMedidaPage() {
  return <ServiceLandingPage lang="es" service="software" />;
}
