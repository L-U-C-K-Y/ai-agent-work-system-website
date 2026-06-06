import type { ReactNode } from "react";

import { ArrowRightIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

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
  const uiVariant =
    variant === "primary" ? "default" : variant === "secondary" ? "outline" : "link";

  return (
    <Link
      className={cn(
        buttonVariants({ variant: uiVariant, size: "lg" }),
        "group min-h-11 rounded-md px-5 py-3 font-semibold",
        variant === "primary" && "shadow-[0_0_30px_rgba(32,106,233,0.2)]",
        variant === "secondary" && "bg-[var(--surface)] text-[var(--foreground)]",
        variant === "plain" && "min-h-0 px-0 py-0",
        className,
      )}
      href={href as never}
    >
      <span>{children}</span>
      <ArrowRightIcon
        className="transition-transform group-hover:translate-x-0.5"
        data-icon="inline-end"
      />
    </Link>
  );
}
