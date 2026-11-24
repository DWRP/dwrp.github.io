import { routing, type AppLocale } from "@/i18n/routing";

export type Locale = AppLocale;

export const locales = routing.locales;

export const defaultLocale = routing.defaultLocale;
