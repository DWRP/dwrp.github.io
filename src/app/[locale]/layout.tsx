import { Outfit, Source_Sans_3 } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ActiveNavProvider } from "@/components/providers/ActiveNavProvider";
import {
  ThemeProvider,
  themeBootScript,
} from "@/components/providers/ThemeProvider";
import { generateSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";
import { routing, type AppLocale } from "@/i18n/routing";
import "../../styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  return generateSeoMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const typedLocale = locale as AppLocale;

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${sourceSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href={`${siteConfig.url}/${locale}/`} />
        <meta name="theme-color" content="#0f766e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <JsonLd locale={typedLocale} />
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <ActiveNavProvider>{children}</ActiveNavProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
