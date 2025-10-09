import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dwrp.github.io";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}`,
          "pt-BR": `${baseUrl}`,
        },
      },
    },
  ];
}
