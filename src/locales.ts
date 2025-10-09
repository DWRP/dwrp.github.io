export type Locale = (typeof locales)[number];

export const locales = ["en", "pt-BR", "es", "zh-CN"] as const;

export const defaultLocale = locales[0];
