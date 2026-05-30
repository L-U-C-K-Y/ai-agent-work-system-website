"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { getPathname, Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { mainNavigation } from "@/lib/site";

function toInternalPathname(pathname: string) {
  const unprefixed =
    pathname === "/de" || pathname === "/en"
      ? "/"
      : pathname.startsWith("/de/") || pathname.startsWith("/en/")
        ? pathname.slice(3)
        : pathname;

  if (unprefixed === "/produkte") {
    return "/products";
  }

  if (unprefixed.startsWith("/produkte/")) {
    return `/products/${unprefixed.slice("/produkte/".length)}`;
  }

  if (unprefixed === "/kontakt") {
    return "/contact";
  }

  if (unprefixed === "/datenschutz") {
    return "/privacy";
  }

  if (unprefixed === "/agb") {
    return "/terms";
  }

  return unprefixed;
}

function getLocalizedHref(targetLocale: Locale, internalPathname: string) {
  if (internalPathname === "/") {
    return getPathname({ href: "/", locale: targetLocale });
  }

  if (internalPathname === "/products") {
    return getPathname({ href: "/products", locale: targetLocale });
  }

  if (internalPathname.startsWith("/products/")) {
    return getPathname({
      href: {
        pathname: "/products/[slug]",
        params: { slug: internalPathname.slice("/products/".length) },
      },
      locale: targetLocale,
    });
  }

  if (
    internalPathname === "/vision" ||
    internalPathname === "/support" ||
    internalPathname === "/contact" ||
    internalPathname === "/privacy" ||
    internalPathname === "/terms"
  ) {
    return getPathname({ href: internalPathname, locale: targetLocale });
  }

  return getPathname({ href: "/", locale: targetLocale });
}

function rememberLocale(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

function LanguageSwitcher({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("Navigation");
  const internalPathname = toInternalPathname(pathname);
  const query = searchParams.toString();

  return (
    <div
      aria-label={t("languageLabel")}
      className={`inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface)] p-1 ${className}`}
    >
      {(["en", "de"] as const).map((targetLocale) => {
        const localizedPathname = getLocalizedHref(targetLocale, internalPathname);
        const href = query ? `${localizedPathname}?${query}` : localizedPathname;

        return (
          <a
            aria-current={locale === targetLocale ? "true" : undefined}
            className="rounded-sm px-2.5 py-1.5 text-xs font-semibold text-[var(--muted)] transition hover:text-[var(--foreground)] aria-[current=true]:bg-white aria-[current=true]:text-[var(--foreground)]"
            href={href}
            key={targetLocale}
            onClick={() => {
              rememberLocale(targetLocale);
              onNavigate?.();
            }}
          >
            {targetLocale === "en" ? t("english") : t("german")}
          </a>
        );
      })}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");
  const internalPathname = toInternalPathname(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_srgb,var(--border)_72%,transparent)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1180px] items-center justify-between gap-4 px-5 md:px-6">
        <Logo />
        <nav
          aria-label={t("mainLabel")}
          className="hidden items-center gap-8 md:flex"
        >
          {mainNavigation.map((item) => {
            const active = internalPathname.startsWith(item.href);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className="rounded-sm text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] aria-[current=page]:text-[var(--foreground)]"
                href={item.href}
                key={item.href}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Link
            className="inline-flex min-h-10 items-center rounded-md bg-[var(--accent-strong)] px-4 text-sm font-medium text-white transition hover:bg-[var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            href="/contact"
          >
            {t("getInTouch")}
          </Link>
        </div>
        <button
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          className="inline-grid h-10 w-10 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      {isOpen && (
        <div
          className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-5 md:hidden"
          id="mobile-menu"
        >
          <nav aria-label={t("mobileLabel")} className="grid gap-2">
            {mainNavigation.map((item) => (
              <Link
                className="rounded-md px-3 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--soft)]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              className="mt-2 rounded-md bg-[var(--accent-strong)] px-3 py-3 text-center text-base font-medium text-white"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              {t("getInTouch")}
            </Link>
            <LanguageSwitcher className="mt-3 justify-self-start" onNavigate={() => setIsOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}
