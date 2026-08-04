import PrivacyPage from "../../../components/PrivacyPage";

export const metadata = {
  title: "Privacy | Marlon Coreas",
  description: "How project inquiry information is used on marloncoreas.com.",
  alternates: { canonical: "/privacy", languages: { en: "/privacy", es: "/es/privacidad" } }
};

export default function EnglishPrivacyPage() {
  return <PrivacyPage lang="en" />;
}
