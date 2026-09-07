import { routeAlternates } from "../../../src/config/routes";
import PrivacyPage from "../../../components/PrivacyPage";

export const metadata = {
  title: "Privacy | Marlon Coreas",
  description: "How project inquiry information is used on marloncoreas.com.",
  alternates: routeAlternates("privacy", "en")
};

export default function EnglishPrivacyPage() {
  return <PrivacyPage lang="en" />;
}
