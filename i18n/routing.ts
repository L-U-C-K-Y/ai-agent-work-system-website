import { defineRouting } from "next-intl/routing";

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: true,
  pathnames: {
    "/": "/",
    "/products": {
      en: "/products",
      de: "/produkte",
    },
    "/products/[slug]": {
      en: "/products/[slug]",
      de: "/produkte/[slug]",
    },
    "/platform": {
      en: "/platform",
      de: "/plattform",
    },
    "/ai-adoption": {
      en: "/ai-adoption",
      de: "/ki-einfuehrung",
    },
    "/pricing": {
      en: "/pricing",
      de: "/preise",
    },
    "/contact": {
      en: "/contact",
      de: "/kontakt",
    },
    "/privacy": {
      en: "/privacy",
      de: "/datenschutz",
    },
    "/terms": {
      en: "/terms",
      de: "/agb",
    },
    "/imprint": {
      en: "/imprint",
      de: "/impressum",
    },
  },
});

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
