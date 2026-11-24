import {
  generateBreadcrumbJsonLd,
  generatePersonJsonLd,
  generateWebsiteJsonLd,
} from "@/lib/metadata";
import { Locale } from "@/locales";

type JsonLdProps = {
  locale?: Locale;
};

export function JsonLd({ locale = "en" }: JsonLdProps) {
  const schemas = [
    generatePersonJsonLd(locale),
    generateBreadcrumbJsonLd(locale),
    generateWebsiteJsonLd(locale),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
