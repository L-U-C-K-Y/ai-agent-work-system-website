import { useTranslations } from "next-intl";

import { Logo } from "@/components/logo";
import { Link } from "@/i18n/navigation";
import { legalNavigation, mainNavigation } from "@/lib/site";

export function SiteFooter() {
  const nav = useTranslations("Navigation");
  const footer = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--soft)]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 py-10 md:grid-cols-[1.1fr_1fr_1fr] md:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
            {footer("tagline")}
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold text-[var(--foreground)]">
            {footer("explore")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-[var(--foreground)]" href={item.href}>
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal navigation">
          <h2 className="text-sm font-semibold text-[var(--foreground)]">
            {footer("company")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-[var(--foreground)]" href={item.href}>
                  {footer(item.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-[var(--foreground)]" href="/contact">
                {footer("contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 border-t border-[var(--border)] px-5 py-5 text-xs text-[var(--muted)] md:px-6">
        <p>{footer("rights", { year })}</p>
        <p>{footer("madeWithCare")}</p>
      </div>
    </footer>
  );
}
