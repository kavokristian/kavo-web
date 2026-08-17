import type { MetadataRoute } from "next";

const baseUrl = "https://www.kavo.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/dette-er-inkludert`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hvem-er-kavo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bestill-demo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
