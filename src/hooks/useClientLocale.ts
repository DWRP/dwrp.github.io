"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Locale } from "@/locales";

const LOCALE_STORAGE_KEY = "preferred-locale";
const LOCALE_EVENT = "preferred-locale-change";
const SUPPORTED_LOCALES: Locale[] = ["en", "pt-BR", "es", "zh-CN"];

function isLocale(value: string | null): value is Locale {
  return value !== null && (SUPPORTED_LOCALES as string[]).includes(value);
}

function detectBrowserLocale(): Locale {
  const browserLang = navigator.language;

  if (browserLang.startsWith("pt")) return "pt-BR";
  if (browserLang.startsWith("es")) return "es";
  if (browserLang.startsWith("zh")) return "zh-CN";
  return "en";
}

function getLocaleSnapshot(): Locale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (isLocale(stored)) return stored;
  return detectBrowserLocale();
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(LOCALE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(LOCALE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function useClientLocale(): [Locale, (locale: Locale) => void] {
  const locale = useSyncExternalStore(
    subscribe,
    getLocaleSnapshot,
    () => "en" as Locale
  );

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    window.dispatchEvent(new Event(LOCALE_EVENT));
  }, []);

  return [locale, setLocale];
}
