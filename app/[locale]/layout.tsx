import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense, type ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { locales, routing, type Locale } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
    metadataBase: new URL("https://luckysoft.app"),
    title: {
      default: t("name"),
      template: `%s | ${t("name")}`,
    },
    description: t("description"),
    alternates: {
      languages: {
        en: "/",
        de: "/de",
      },
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
          url: "/images/backgrounds/home-hero-garden-bridge.webp",
          width: 1672,
          height: 941,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("name"),
      description: t("description"),
      images: ["/images/backgrounds/home-hero-garden-bridge.webp"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <Suspense
            fallback={
              <div className="h-[72px] border-b border-[color-mix(in_srgb,var(--border)_72%,transparent)] bg-[var(--background)]" />
            }
          >
            <SiteHeader />
          </Suspense>
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
