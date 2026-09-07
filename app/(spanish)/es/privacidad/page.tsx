import { routeAlternates } from "../../../../src/config/routes";
import PrivacyPage from "../../../../components/PrivacyPage";

export const metadata = {
  title: "Privacidad | Marlon Coreas",
  description: "Cómo se utiliza la información de consultas de proyectos en marloncoreas.com.",
  alternates: routeAlternates("privacy", "es")
};

export default function SpanishPrivacyPage() {
  return <PrivacyPage lang="es" />;
}
