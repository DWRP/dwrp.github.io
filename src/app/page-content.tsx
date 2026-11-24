"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import { useAppStore } from "@/store/app";
import { Locale } from "@/locales";
import { useClientLocale } from "@/hooks/useClientLocale";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

export default function PageContent() {
  const [locale, setLocale] = useClientLocale();
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null);
  const { theme, setActiveMenu, toggleTheme } = useAppStore();

  useEffect(() => {
    let cancelled = false;
    const loadMessages = async () => {
      const msgs = await import(`../../messages/${locale}.json`);
      if (!cancelled) setMessages(msgs.default);
    };
    loadMessages();
    return () => {
      cancelled = true;
    };
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    return () => setActiveMenu("");
  }, [setActiveMenu]);

  const changeLanguage = useCallback(
    (newLang: Locale) => {
      setLocale(newLang);
    },
    [setLocale]
  );

  if (!messages) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-background"
        role="status"
        aria-live="polite"
      >
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
          <p className="text-lg text-muted-foreground">
            <span className="sr-only">Loading</span>
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Header
          locale={locale}
          changeLanguage={changeLanguage}
          isDarkMode={theme === "dark"}
          toggleTheme={toggleTheme}
        />
        <Main />
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
