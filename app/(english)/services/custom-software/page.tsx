import { routeAlternates } from "../../../../src/config/routes";
import ServiceLandingPage from "../../../../components/ServiceLandingPage";

export const metadata = {
  title: "Custom Software & Product Development | Marlon Coreas",
  description: "Focused custom software, internal tools and first product releases shaped around a real workflow and a written scope.",
  alternates: routeAlternates("software", "en")
};

export default function CustomSoftwarePage() {
  return <ServiceLandingPage lang="en" service="software" />;
}
