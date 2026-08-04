import { siteUrl } from "../src/i18n";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: `${siteUrl}/`, es: `${siteUrl}/es` } }
    },
    {
      url: `${siteUrl}/es`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${siteUrl}/`, es: `${siteUrl}/es` } }
    },
    {
      url: `${siteUrl}/services/websites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { en: `${siteUrl}/services/websites`, es: `${siteUrl}/es/servicios/sitios-web` } }
    },
    {
      url: `${siteUrl}/es/servicios/sitios-web`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { en: `${siteUrl}/services/websites`, es: `${siteUrl}/es/servicios/sitios-web` } }
    },
    {
      url: `${siteUrl}/services/custom-software`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { en: `${siteUrl}/services/custom-software`, es: `${siteUrl}/es/servicios/software-a-la-medida` } }
    },
    {
      url: `${siteUrl}/es/servicios/software-a-la-medida`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { en: `${siteUrl}/services/custom-software`, es: `${siteUrl}/es/servicios/software-a-la-medida` } }
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
      alternates: { languages: { en: `${siteUrl}/privacy`, es: `${siteUrl}/es/privacidad` } }
    },
    {
      url: `${siteUrl}/es/privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
      alternates: { languages: { en: `${siteUrl}/privacy`, es: `${siteUrl}/es/privacidad` } }
    }
  ];
}
