import { Metadata } from "next";
import { Locale } from "@/locales";

interface SeoMessages {
  title: string;
  titleTemplate: string;
  description: string;
  author: string;
  siteName: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type: string;
    locale: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    creator: string;
    site: string;
  };
}

const SITE_URL = "https://dwrp.github.io";
const DEFAULT_IMAGES = [
  `${SITE_URL}/cover.jpeg`,
  `${SITE_URL}/cover2.jpeg`,
];

/**
 * Gets SEO messages from translation files
 * Note: Using direct import instead of getTranslations() for better SSG compatibility
 */
async function getSeoMessages(locale: Locale): Promise<SeoMessages> {
  // Dynamically import messages based on locale for SSG compatibility
  const messages = await import(`../../messages/${locale}.json`);
  return messages.default.Index.seo;
}

/**
 * Generates complete metadata for SEO based on locale
 */
export async function generateSeoMetadata(
  locale: Locale = "en"
): Promise<Metadata> {
  // Get translations from JSON files (SSG-compatible)
  const seo = await getSeoMessages(locale);

  const metadata: Metadata = {
    title: {
      default: seo.title,
      template: seo.titleTemplate,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: seo.author }],
    creator: seo.author,
    publisher: seo.author,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "/",
      languages: {
        "en": "/",
        "pt-BR": "/",
        "es": "/",
        "zh-CN": "/",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: seo.openGraph.locale,
      alternateLocale: locale === "en" 
        ? ["pt_BR", "es_ES", "zh_CN"] 
        : locale === "pt-BR" 
        ? ["en_US", "es_ES", "zh_CN"]
        : locale === "es"
        ? ["en_US", "pt_BR", "zh_CN"]
        : ["en_US", "pt_BR", "es_ES"],
      url: SITE_URL,
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      siteName: seo.openGraph.siteName,
      images: DEFAULT_IMAGES.map((url) => ({
        url,
        width: 1200,
        height: 630,
        alt: seo.title,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitter.title,
      description: seo.twitter.description,
      creator: seo.twitter.creator,
      site: seo.twitter.site,
      images: DEFAULT_IMAGES,
    },
  };

  return metadata;
}

/**
 * Generates JSON-LD structured data for Person schema
 */
export function generatePersonJsonLd(locale: Locale = "en") {
  const isPortuguese = locale === "pt-BR";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Douglas Pardim",
    givenName: "Douglas",
    familyName: "Pardim",
    jobTitle: isPortuguese
      ? "Desenvolvedor Fullstack Sênior"
      : "Senior Fullstack Developer",
    description: isPortuguese
      ? "Desenvolvedor Fullstack especializado em React, React Native e Node.js com mais de 5 anos de experiência."
      : "Senior Fullstack Developer specialized in React, React Native, and Node.js with over 5 years of experience.",
    url: SITE_URL,
    image: DEFAULT_IMAGES[0],
    email: "mailto:douglas.skd@gmail.com",
    telephone: "+55-27-99695-0412",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Serra",
      addressRegion: "ES",
      addressCountry: "BR",
    },
    sameAs: [
      "https://github.com/dwrp",
      "https://linkedin.com/in/douglas-pardim",
      "https://twitter.com", // Replace with actual Twitter if available
    ],
    knowsAbout: [
      "React",
      "React Native",
      "Node.js",
      "Next.js",
      "NestJS",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "PostgreSQL",
      "MongoDB",
      "Express.js",
      "Redux",
      "GraphQL",
      "REST API",
      "Git",
      "Scrum",
      "Agile Development",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Estácio",
        course: isPortuguese ? "Ciências da Computação" : "Computer Science",
      },
      {
        "@type": "EducationalOrganization",
        name: "IFES",
        course: isPortuguese ? "Informática" : "Informatics",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Globalsys",
      address: {
        "@type": "PostalAddress",
        addressRegion: "ES",
        addressCountry: "BR",
      },
    },
  };
}

/**
 * Generates breadcrumb JSON-LD structured data
 */
export function generateBreadcrumbJsonLd(locale: Locale = "en") {
  const isPortuguese = locale === "pt-BR";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isPortuguese ? "Início" : "Home",
        item: SITE_URL,
      },
    ],
  };
}

/**
 * Generates WebSite JSON-LD structured data
 */
export function generateWebsiteJsonLd(locale: Locale = "en") {
  const isPortuguese = locale === "pt-BR";

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Douglas Pardim",
    description: isPortuguese
      ? "Portfolio e informações profissionais de Douglas Pardim, Desenvolvedor Fullstack"
      : "Portfolio and professional information of Douglas Pardim, Fullstack Developer",
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: "Douglas Pardim",
    },
    inLanguage: locale === "en" ? "en-US" : "pt-BR",
    copyrightYear: 2025,
    copyrightHolder: {
      "@type": "Person",
      name: "Douglas Pardim",
    },
  };
}

