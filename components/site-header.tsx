"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import type { ComponentProps } from "react";

import { MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button as UiButton } from "@/components/ui/button";
import { getPathname, Link, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type LinkHref = ComponentProps<typeof Link>["href"];
type MegaMenuLink = readonly [string, LinkHref, string];
type MegaMenuLinkConfig = readonly [string, LinkHref];

const navLinkClassName =
  "h-9 px-2.5 text-sm font-medium text-[#9aabbf] hover:bg-white/[0.025] hover:text-white focus:!bg-white/[0.025] focus-visible:!bg-white/[0.025] focus-visible:!ring-1 focus-visible:!ring-white/12 aria-[current=page]:text-white";

const navTriggerClassName =
  "bg-transparent text-[#9aabbf] hover:bg-white/[0.025] hover:text-white data-active:bg-white/[0.025] data-active:text-white data-open:bg-white/[0.025] data-open:text-white data-popup-open:bg-white/[0.025] data-popup-open:text-white data-popup-open:hover:bg-white/[0.035]";

const useCaseLinks = [
  [
    "finance",
    { pathname: "/products/[slug]", params: { slug: "finance" } },
  ],
  [
    "inventory",
    { pathname: "/products/[slug]", params: { slug: "inventory" } },
  ],
  [
    "people",
    { pathname: "/products/[slug]", params: { slug: "hr" } },
  ],
  [
    "support",
    { pathname: "/products/[slug]", params: { slug: "support" } },
  ],
  [
    "product",
    { pathname: "/products/[slug]", params: { slug: "product" } },
  ],
  [
    "revenue",
    { pathname: "/products/[slug]", params: { slug: "revenue" } },
  ],
] as const satisfies readonly MegaMenuLinkConfig[];

const companyLinks = [
  ["contact", "/contact"],
  ["privacy", "/privacy"],
  ["terms", "/terms"],
  ["imprint", "/imprint"],
] as const satisfies readonly MegaMenuLinkConfig[];

const heroVideoByRoute = {
  "/": "/videos/jobdone-ai/home-hero.mp4",
  "/platform": "/videos/jobdone-ai/platform-graph.mp4",
  "/ai-adoption": "/videos/jobdone-ai/ai-adoption-journey.mp4",
} as const;

const warmedVideoSources = new Set<string>();

function warmVideoSource(src: string) {
  if (warmedVideoSources.has(src) || typeof document === "undefined") {
    return;
  }

  warmedVideoSources.add(src);

  const link = document.createElement("link");
  link.as = "video";
  link.href = src;
  link.rel = "preload";
  link.type = "video/mp4";
  document.head.appendChild(link);

  const video = document.createElement("video");
  video.muted = true;
  video.preload = "auto";
  video.src = src;
  video.load();
}

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

  if (unprefixed === "/plattform") {
    return "/platform";
  }

  if (unprefixed === "/ki-einfuehrung") {
    return "/ai-adoption";
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

  if (unprefixed === "/impressum") {
    return "/imprint";
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
    internalPathname === "/platform" ||
    internalPathname === "/ai-adoption" ||
    internalPathname === "/contact" ||
    internalPathname === "/privacy" ||
    internalPathname === "/terms" ||
    internalPathname === "/imprint"
  ) {
    return getPathname({ href: internalPathname, locale: targetLocale });
  }

  return getPathname({ href: "/", locale: targetLocale });
}

function rememberLocale(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("Navigation");
  const internalPathname = toInternalPathname(pathname);
  const query = searchParams.toString();

  return (
    <div
      aria-label={t("languageLabel")}
      className={`inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] p-1 ${className}`}
    >
      {(["en", "de"] as const).map((targetLocale) => {
        const localizedPathname = getLocalizedHref(targetLocale, internalPathname);
        const href = query ? `${localizedPathname}?${query}` : localizedPathname;

        return (
          <a
            aria-current={locale === targetLocale ? "true" : undefined}
            className="rounded-md px-2.5 py-1.5 text-xs font-semibold text-[#8ea0b5] transition hover:text-white aria-[current=true]:bg-white/10 aria-[current=true]:text-white"
            href={href}
            key={targetLocale}
            onClick={() => rememberLocale(targetLocale)}
          >
            {targetLocale === "en" ? t("english") : t("german")}
          </a>
        );
      })}
    </div>
  );
}

function MegaLink({
  href,
  title,
  description,
}: {
  href: LinkHref;
  title: string;
  description: string;
}) {
  return (
    <NavigationMenuLink
      className="group grid gap-1 rounded-lg border border-white/10 bg-[#081019] p-3 text-left hover:border-[var(--primary)]/50 hover:bg-[#0c1724] focus:bg-[#0c1724]"
      render={<Link href={href} />}
    >
      <span className="text-sm font-semibold text-white">{title}</span>
      <span className="text-xs leading-5 text-[#8ea0b5]">{description}</span>
    </NavigationMenuLink>
  );
}

function MegaMenuPanel({
  eyebrow,
  title,
  links,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  links: readonly MegaMenuLink[];
  ctaLabel: string;
  ctaHref: LinkHref;
}) {
  return (
    <NavigationMenuContent className="w-[760px] p-0">
      <div className="grid grid-cols-[0.92fr_1.08fr] overflow-hidden rounded-lg border border-white/10 bg-[#05080c] shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div className="relative overflow-hidden border-r border-white/10 bg-[#030609] p-5">
          <Image
            alt=""
            className="absolute inset-x-0 bottom-0 h-full w-full object-cover opacity-60"
            height={720}
            src="/images/jobdone-ai/neon-workspace-rooms.png"
            width={1200}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,9,0.52),#030609_78%)]" />
          <div className="relative">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--primary)]">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-xl font-semibold leading-tight text-white">
              {title}
            </h2>
            <div className="mt-20 rounded-md border border-white/10 bg-black/35 p-3 text-[0.68rem] leading-5 text-[#8ea0b5] backdrop-blur-md">
              <p className="font-semibold text-[var(--chart-2)]">
                Work stays visible
              </p>
              <p>AI actions are reviewable</p>
              <p>Approvals stay attached</p>
            </div>
          </div>
        </div>
        <div className="grid gap-2 p-3">
          {links.map(([label, href, description]) => (
            <MegaLink
              description={description}
              href={href}
              key={label}
              title={label}
            />
          ))}
          <NavigationMenuLink
            className="mt-1 rounded-lg border border-[var(--primary)]/35 bg-[var(--primary)]/10 p-3 text-sm font-semibold text-white hover:bg-[var(--primary)]/18 focus:bg-[var(--primary)]/18"
            render={<Link href={ctaHref} />}
          >
            {ctaLabel}
          </NavigationMenuLink>
        </div>
      </div>
    </NavigationMenuContent>
  );
}

function CompanyMenuPanel({
  links,
}: {
  links: readonly MegaMenuLink[];
}) {
  return (
    <NavigationMenuContent className="w-[300px] p-0">
      <div className="grid gap-2 overflow-hidden rounded-lg border border-white/10 bg-[#05080c] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        {links.map(([label, href, description]) => (
          <MegaLink
            description={description}
            href={href}
            key={label}
            title={label}
          />
        ))}
      </div>
    </NavigationMenuContent>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navigation");
  const mega = useTranslations("MegaMenu");
  const internalPathname = toInternalPathname(pathname);
  const getMegaLinks = (
    section: "useCases" | "company",
    links: readonly MegaMenuLinkConfig[],
  ) =>
    links.map(
      ([key, href]) =>
        [
          mega(`${section}.links.${key}.title`),
          href,
          mega(`${section}.links.${key}.description`),
        ] as const,
    ) satisfies readonly MegaMenuLink[];
  const warmHeroRoute = (href: keyof typeof heroVideoByRoute) => {
    router.prefetch(href);
    warmVideoSource(heroVideoByRoute[href]);
  };
  const warmHeroRouteFromTarget = (target: EventTarget | null) => {
    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest("a");
    if (!link) {
      return;
    }

    const route = toInternalPathname(link.pathname);
    if (route in heroVideoByRoute) {
      warmHeroRoute(route as keyof typeof heroVideoByRoute);
    }
  };
  const heroWarmHandlers = (href: keyof typeof heroVideoByRoute) => ({
    onFocus: () => warmHeroRoute(href),
    onMouseEnter: () => warmHeroRoute(href),
    onMouseMove: () => warmHeroRoute(href),
    onPointerEnter: () => warmHeroRoute(href),
    onPointerMove: () => warmHeroRoute(href),
    onTouchStart: () => warmHeroRoute(href),
  });

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#05080c]/88 backdrop-blur-xl"
      onFocusCapture={(event) => warmHeroRouteFromTarget(event.target)}
      onMouseOver={(event) => warmHeroRouteFromTarget(event.target)}
      onMouseMove={(event) => warmHeroRouteFromTarget(event.target)}
      onPointerOver={(event) => warmHeroRouteFromTarget(event.target)}
      onPointerMove={(event) => warmHeroRouteFromTarget(event.target)}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-4 px-5 md:px-6">
        <Logo />

        <NavigationMenu className="hidden flex-none md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                aria-current={internalPathname === "/" ? "page" : undefined}
                className={navLinkClassName}
                render={<Link href="/" prefetch {...heroWarmHandlers("/")} />}
              >
                {t("home")}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navTriggerClassName}>
                {t("solutions")}
              </NavigationMenuTrigger>
              <MegaMenuPanel
                eyebrow={mega("useCases.eyebrow")}
                links={getMegaLinks("useCases", useCaseLinks)}
                title={mega("useCases.title")}
                ctaHref="/products"
                ctaLabel={mega("useCases.viewAll")}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                aria-current={
                  internalPathname === "/platform" ? "page" : undefined
                }
                className={navLinkClassName}
                render={
                  <Link
                    href="/platform"
                    prefetch
                    {...heroWarmHandlers("/platform")}
                  />
                }
              >
                {t("platform")}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                aria-current={
                  internalPathname === "/ai-adoption" ? "page" : undefined
                }
                className={navLinkClassName}
                render={
                  <Link
                    href="/ai-adoption"
                    prefetch
                    {...heroWarmHandlers("/ai-adoption")}
                  />
                }
              >
                {t("aiAdoption")}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navTriggerClassName}>
                {t("company")}
              </NavigationMenuTrigger>
              <CompanyMenuPanel links={getMegaLinks("company", companyLinks)} />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <UiButton
            className="h-10 rounded-md px-4 font-semibold shadow-[0_0_24px_rgba(32,106,233,0.22)] hover:bg-white hover:text-[#071423]"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            {t("getInTouch")}
          </UiButton>
        </div>

        <Sheet>
          <SheetTrigger
            aria-label={t("openMenu")}
            className="inline-grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-white md:hidden"
          >
            <MenuIcon className="size-5" />
          </SheetTrigger>
          <SheetContent
            className="max-h-dvh w-[88vw] gap-0 border-l border-white/10 bg-[#05080c] text-white"
            side="right"
          >
            <SheetHeader className="shrink-0 border-b border-white/10 pb-5 pr-12">
              <SheetTitle className="text-white">JobDone AI</SheetTitle>
              <SheetDescription>
                {t("mobileDescription")}
              </SheetDescription>
            </SheetHeader>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
              <nav className="flex flex-col gap-2" aria-label={t("mobileLabel")}>
                <Link
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-medium text-white"
                  href="/"
                  prefetch
                  {...heroWarmHandlers("/")}
                >
                  {t("home")}
                </Link>
                <Link
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-medium text-white"
                  href="/ai-adoption"
                  prefetch
                  {...heroWarmHandlers("/ai-adoption")}
                >
                  {t("aiAdoption")}
                </Link>
                <Link
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-medium text-white"
                  href="/contact"
                >
                  {t("contact")}
                </Link>
                <details className="group rounded-lg border border-white/10 bg-white/[0.025]">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
                    <span>{t("solutions")}</span>
                    <span className="text-[#8ea0b5] transition-transform group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <div className="grid gap-1 border-t border-white/10 p-2">
                    <Link
                      className="rounded-md px-3 py-2 text-sm font-medium text-[#c8d8ff] hover:bg-white/[0.04] hover:text-white"
                      href="/products"
                    >
                      {mega("useCases.viewAll")}
                    </Link>
                    {useCaseLinks.map(([key, href]) => (
                      <Link
                        className="rounded-md px-3 py-2 text-sm font-medium text-[#9aabbf] hover:bg-white/[0.04] hover:text-white"
                        href={href}
                        key={key}
                      >
                        {mega(`useCases.links.${key}.title`)}
                      </Link>
                    ))}
                  </div>
                </details>
                <Link
                  className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-3 text-sm font-medium text-white"
                  href="/platform"
                  prefetch
                  {...heroWarmHandlers("/platform")}
                >
                  {t("platform")}
                </Link>
                <details className="group rounded-lg border border-white/10 bg-white/[0.025]">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
                    <span>{t("company")}</span>
                    <span className="text-[#8ea0b5] transition-transform group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <div className="grid gap-1 border-t border-white/10 p-2">
                    {companyLinks.map(([key, href]) => (
                      <Link
                        className="rounded-md px-3 py-2 text-sm font-medium text-[#9aabbf] hover:bg-white/[0.04] hover:text-white"
                        href={href}
                        key={key}
                      >
                        {mega(`company.links.${key}.title`)}
                      </Link>
                    ))}
                  </div>
                </details>
              </nav>
            </div>
            <Separator className="shrink-0 bg-white/10" />
            <div className="shrink-0 bg-[#05080c] px-4 py-4">
              <LanguageSwitcher />
              <UiButton
                className="mt-4 h-10 w-full rounded-md font-semibold"
                nativeButton={false}
                render={<Link href="/contact" />}
              >
                {t("getInTouch")}
              </UiButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
