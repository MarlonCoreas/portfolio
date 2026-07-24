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
    }
  ];
}
