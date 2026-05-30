import type { ReactNode } from "react";

import { ArrowRightIcon } from "@/components/icons";
import { Link } from "@/i18n/navigation";

type ButtonProps = {
  children: ReactNode;
  href:
    | string
    | {
        pathname: string;
        params?: Record<string, string>;
        query?: Record<string, string>;
      };
  variant?: "primary" | "secondary" | "plain";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]";
  const variants = {
    primary:
      "bg-[var(--accent-strong)] text-white hover:bg-[var(--charcoal)]",
    secondary:
      "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-white",
    plain:
      "px-0 text-[var(--foreground)] hover:text-[var(--accent-strong)]",
  };

  return (
    <Link
      className={`${base} ${variants[variant]} ${className}`}
      href={href as never}
    >
      <span>{children}</span>
      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
