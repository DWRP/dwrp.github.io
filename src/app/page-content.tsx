"use client";

import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import { useAppStore } from "@/store/app";
import { Locale } from "@/locales";
import { useClientLocale } from "@/hooks/useClientLocale";
import { NextIntlClientProvider } from "next-intl";

export default function PageContent() {
  const [locale, setLocale] = useClientLocale();
  const [messages, setMessages] = useState<any>(null);
  const { theme, setTheme, setActiveMenu } = useAppStore();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  // Carregar mensagens dinamicamente
  useEffect(() => {
    const loadMessages = async () => {
      const msgs = await import(`../../messages/${locale}.json`);
      setMessages(msgs.default);
    };
    loadMessages();
  }, [locale]);

  const changeLanguage = useCallback(
    (newLang: Locale) => {
      setLocale(newLang);
    },
    [setLocale]
  );

  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, setTheme]);

  useEffect(() => {
    return () => setActiveMenu("");
  }, [setActiveMenu]);

  if (!messages) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
        <Head>
          <title>Douglas Pardim - Fullstack Developer</title>
        </Head>
        <Header
          changeLanguage={changeLanguage}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <Main />
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}

