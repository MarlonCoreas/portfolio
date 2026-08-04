import PrivacyPage from "../../../../components/PrivacyPage";

export const metadata = {
  title: "Privacidad | Marlon Coreas",
  description: "Cómo se utiliza la información de consultas de proyectos en marloncoreas.com.",
  alternates: { canonical: "/es/privacidad", languages: { en: "/privacy", es: "/es/privacidad" } }
};

export default function SpanishPrivacyPage() {
  return <PrivacyPage lang="es" />;
}
