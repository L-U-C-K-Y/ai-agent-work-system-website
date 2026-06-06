import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { Logo } from "@/components/logo";
import { Link } from "@/i18n/navigation";
import { legalNavigation } from "@/lib/site";

type LinkHref = ComponentProps<typeof Link>["href"];

const workspaceLinks = [
  ["finance", { pathname: "/products/[slug]", params: { slug: "finance" } }],
  [
    "inventory",
    { pathname: "/products/[slug]", params: { slug: "inventory" } },
  ],
  ["hr", { pathname: "/products/[slug]", params: { slug: "hr" } }],
  ["support", { pathname: "/products/[slug]", params: { slug: "support" } }],
  ["product", { pathname: "/products/[slug]", params: { slug: "product" } }],
  ["revenue", { pathname: "/products/[slug]", params: { slug: "revenue" } }],
] as const satisfies readonly (readonly [string, LinkHref])[];

const platformLinks = [
  ["work", "/platform"],
  ["aiCoworkers", "/platform"],
  ["automations", "/platform"],
  ["knowledge", "/platform"],
  ["records", "/platform"],
  ["approvals", "/platform"],
  ["auditEvidence", "/platform"],
] as const satisfies readonly (readonly [string, LinkHref])[];

export function SiteFooter() {
  const footer = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080d12]">
      <div className="mx-auto grid w-full max-w-[1280px] gap-4 px-5 py-4 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-6">
        <div>
          <Logo />
          <p className="mt-2 max-w-sm text-[0.68rem] leading-4 text-[#9aabbf]">
            {footer("tagline")}
          </p>
        </div>
        <nav aria-label={footer("solutions")}>
          <h2 className="text-xs font-semibold text-white">
            {footer("solutions")}
          </h2>
          <ul className="mt-2 flex flex-col gap-1.5 text-[0.68rem] leading-4 text-[#8ea0b5]">
            {workspaceLinks.map(([label, href]) => (
              <li key={label}>
                <Link className="hover:text-white" href={href}>
                  {footer(`links.workspace.${label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={footer("platform")}>
          <h2 className="text-xs font-semibold text-white">
            {footer("platform")}
          </h2>
          <ul className="mt-2 flex flex-col gap-1.5 text-[0.68rem] leading-4 text-[#8ea0b5]">
            {platformLinks.map(([label, href]) => (
              <li key={label}>
                <Link className="hover:text-white" href={href}>
                  {footer(`links.platform.${label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={footer("company")}>
          <h2 className="text-xs font-semibold text-white">
            {footer("company")}
          </h2>
          <ul className="mt-2 flex flex-col gap-1.5 text-[0.68rem] leading-4 text-[#8ea0b5]">
            <li>
              <Link className="hover:text-white" href="/contact">
                {footer("contact")}
              </Link>
            </li>
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {footer(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 border-t border-white/10 px-5 py-3 text-[0.68rem] text-[#8ea0b5] md:px-6">
        <p>{footer("rights", { year })}</p>
        <p>{footer("madeWithCare")}</p>
      </div>
    </footer>
  );
}
