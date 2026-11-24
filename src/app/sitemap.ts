import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          "pt-BR": baseUrl,
          es: baseUrl,
          "zh-CN": baseUrl,
        },
      },
    },
  ];
}
