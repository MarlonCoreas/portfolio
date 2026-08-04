import ServiceLandingPage from "../../../../../components/ServiceLandingPage";

export const metadata = {
  title: "Software a la medida y desarrollo de productos | Marlon Coreas",
  description: "Software a medida, herramientas internas y primeras versiones enfocadas alrededor de un proceso real y un alcance escrito.",
  alternates: {
    canonical: "/es/servicios/software-a-la-medida",
    languages: { en: "/services/custom-software", es: "/es/servicios/software-a-la-medida" }
  }
};

export default function SoftwareAMedidaPage() {
  return <ServiceLandingPage lang="es" service="software" />;
}
