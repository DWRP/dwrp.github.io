import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { locales } from "@/locales";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${baseUrl}/${locale}/`])
  );

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}/`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1.0 : 0.9,
    alternates: {
      languages,
    },
  }));
}
