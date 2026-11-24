import { Metadata } from "next";
import { Locale, locales } from "@/locales";
import { siteConfig } from "@/lib/siteConfig";

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

const SITE_URL = siteConfig.url;
const DEFAULT_IMAGES = [siteConfig.images.cover, siteConfig.images.coverAlt];

const localeCopy: Record<
  Locale,
  {
    jobTitle: string;
    description: string;
    home: string;
    websiteDescription: string;
    computerScience: string;
    informatics: string;
    inLanguage: string;
  }
> = {
  en: {
    jobTitle: "Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer specialized in React, React Native, and Node.js with over 5 years of experience.",
    home: "Home",
    websiteDescription:
      "Portfolio and professional information of Douglas Pardim, Fullstack Developer",
    computerScience: "Computer Science",
    informatics: "Informatics",
    inLanguage: "en-US",
  },
  "pt-BR": {
    jobTitle: "Desenvolvedor Fullstack Sênior",
    description:
      "Desenvolvedor Fullstack especializado em React, React Native e Node.js com mais de 5 anos de experiência.",
    home: "Início",
    websiteDescription:
      "Portfolio e informações profissionais de Douglas Pardim, Desenvolvedor Fullstack",
    computerScience: "Ciências da Computação",
    informatics: "Informática",
    inLanguage: "pt-BR",
  },
  es: {
    jobTitle: "Desarrollador Fullstack Sénior",
    description:
      "Desarrollador Fullstack especializado en React, React Native y Node.js con más de 5 años de experiencia.",
    home: "Inicio",
    websiteDescription:
      "Portafolio e información profesional de Douglas Pardim, Desarrollador Fullstack",
    computerScience: "Ciencias de la Computación",
    informatics: "Informática",
    inLanguage: "es-ES",
  },
  "zh-CN": {
    jobTitle: "高级全栈开发工程师",
    description:
      "专注于 React、React Native 和 Node.js 的高级全栈开发工程师，拥有超过 5 年经验。",
    home: "首页",
    websiteDescription: "Douglas Pardim 的作品集与职业信息，全栈开发工程师",
    computerScience: "计算机科学",
    informatics: "信息技术",
    inLanguage: "zh-CN",
  },
};

function localePath(locale: Locale) {
  return `/${locale}/`;
}

function localeUrl(locale: Locale) {
  return `${SITE_URL}${localePath(locale)}`;
}

function languageAlternates() {
  return Object.fromEntries(
    locales.map((locale) => [locale, localePath(locale)])
  ) as Record<Locale, string>;
}

async function getSeoMessages(locale: Locale): Promise<SeoMessages> {
  const messages = await import(`../../messages/${locale}.json`);
  return messages.default.Index.seo;
}

export async function generateSeoMetadata(
  locale: Locale = "en"
): Promise<Metadata> {
  const seo = await getSeoMessages(locale);
  const url = localeUrl(locale);

  return {
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
      canonical: localePath(locale),
      languages: languageAlternates(),
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
      alternateLocale:
        locale === "en"
          ? ["pt_BR", "es_ES", "zh_CN"]
          : locale === "pt-BR"
            ? ["en_US", "es_ES", "zh_CN"]
            : locale === "es"
              ? ["en_US", "pt_BR", "zh_CN"]
              : ["en_US", "pt_BR", "es_ES"],
      url,
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      siteName: seo.openGraph.siteName,
      images: DEFAULT_IMAGES.map((imageUrl) => ({
        url: imageUrl,
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
}

export function generatePersonJsonLd(locale: Locale = "en") {
  const copy = localeCopy[locale];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    givenName: "Douglas",
    familyName: "Pardim",
    jobTitle: copy.jobTitle,
    description: copy.description,
    url: localeUrl(locale),
    image: DEFAULT_IMAGES[0],
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.locality,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
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
        course: copy.computerScience,
      },
      {
        "@type": "EducationalOrganization",
        name: "IFES",
        course: copy.informatics,
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

export function generateBreadcrumbJsonLd(locale: Locale = "en") {
  const copy = localeCopy[locale];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.home,
        item: localeUrl(locale),
      },
    ],
  };
}

export function generateWebsiteJsonLd(locale: Locale = "en") {
  const copy = localeCopy[locale];

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: copy.websiteDescription,
    url: localeUrl(locale),
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    inLanguage: copy.inLanguage,
    copyrightYear: 2026,
    copyrightHolder: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}
