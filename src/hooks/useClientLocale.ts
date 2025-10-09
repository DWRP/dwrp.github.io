"use client";

import { useState, useEffect } from "react";
import { Locale } from "@/locales";

const LOCALE_STORAGE_KEY = "preferred-locale";

export function useClientLocale(): [Locale, (locale: Locale) => void] {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Tentar pegar do localStorage primeiro
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale;
    
    if (stored && (stored === "en" || stored === "pt-BR" || stored === "es" || stored === "zh-CN")) {
      setLocaleState(stored);
    } else {
      // Detectar do navegador
      const browserLang = navigator.language;
      let detectedLocale: Locale = "en"; // default
      
      if (browserLang.startsWith("pt")) {
        detectedLocale = "pt-BR";
      } else if (browserLang.startsWith("es")) {
        detectedLocale = "es";
      } else if (browserLang.startsWith("zh")) {
        detectedLocale = "zh-CN";
      }
      
      setLocaleState(detectedLocale);
      localStorage.setItem(LOCALE_STORAGE_KEY, detectedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  };

  return [locale, setLocale];
}

