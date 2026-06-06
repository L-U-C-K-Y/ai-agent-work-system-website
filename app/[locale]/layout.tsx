import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import Image from "next/image";
import NextLink from "next/link";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense, type ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { locales, routing, type Locale } from "@/i18n/routing";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const fallbackNavigation = {
  en: {
    mainLabel: "Main navigation",
    items: [
      ["Home", "/"],
      ["Use cases", "/products"],
      ["Platform", "/platform"],
      ["AI Adoption", "/ai-adoption"],
      ["Company", "/contact"],
    ],
    cta: "Request Access",
  },
  de: {
    mainLabel: "Hauptnavigation",
    items: [
      ["Home", "/"],
      ["Anwendungsfälle", "/de/produkte"],
      ["Plattform", "/de/plattform"],
      ["AI Adoption", "/de/ki-einfuehrung"],
      ["Unternehmen", "/de/kontakt"],
    ],
    cta: "Zugang anfragen",
  },
} as const;

function HeaderFallback({ locale }: { locale: Locale }) {
  const copy = locale === "de" ? fallbackNavigation.de : fallbackNavigation.en;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05080c]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-4 px-5 md:px-6">
        <NextLink
          className="inline-flex shrink-0 items-center gap-2.5 rounded-sm"
          href="/"
        >
          <span className="relative grid h-8 w-12 place-items-center overflow-hidden text-white">
            <Image
              alt=""
              className="h-auto w-10"
              height={770}
              src="/images/jobdone-ai/jai-logo-white-transparent.svg"
              width={2042}
            />
          </span>
          <span className="whitespace-nowrap text-[1.12rem] font-black leading-none tracking-[-0.01em] text-white">
            JobDone <span className="text-[var(--primary)]">AI</span>
          </span>
        </NextLink>
        <nav
          aria-label={copy.mainLabel}
          className="hidden items-center gap-7 md:flex"
        >
          {copy.items.map(([label, href]) => (
            <NextLink
              className="rounded-sm text-sm font-medium text-[#9aabbf] transition hover:text-white"
              href={href}
              key={label}
            >
              {label}
            </NextLink>
          ))}
        </nav>
        <NextLink
          className="hidden min-h-10 items-center whitespace-nowrap rounded-md bg-[var(--primary)] px-4 text-sm font-semibold text-[var(--primary-foreground)] md:inline-flex"
          href={locale === "de" ? "/de/kontakt" : "/contact"}
        >
          {copy.cta}
        </NextLink>
        <div className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.03] md:hidden">
          <span className="h-0.5 w-4 rounded-full bg-white" />
        </div>
      </div>
    </header>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = hasLocale(routing.locales, locale)
    ? (locale as Locale)
    : routing.defaultLocale;
  const t = await getTranslations({ locale: safeLocale, namespace: "Site" });

  return {
    metadataBase: new URL("https://jobdone.ai"),
    title: {
      default: t("name"),
      template: `%s | ${t("name")}`,
    },
    description: t("description"),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon.ico",
    },
    openGraph: {
      title: t("name"),
      description: t("description"),
      siteName: t("name"),
      type: "website",
      locale: safeLocale,
      alternateLocale: safeLocale === "en" ? "de" : "en",
      images: [
        {
          url: "/images/jobdone-ai/website-concept.png",
          width: 1536,
          height: 1024,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("name"),
      description: t("description"),
      images: ["/images/jobdone-ai/website-concept.png"],
    },
  };
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

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<HeaderFallback locale={locale as Locale} />}>
            <SiteHeader />
          </Suspense>
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
