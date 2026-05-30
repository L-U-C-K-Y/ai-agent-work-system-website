import Image from "next/image";

import { Link } from "@/i18n/navigation";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      className="inline-flex items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      href="/"
    >
      <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)]">
        <Image
          alt=""
          className="h-[18px] w-[18px]"
          height={48}
          priority
          src="/images/brand/luckysoft-mark.png"
          width={48}
        />
      </span>
      {!compact && (
        <span className="font-serif text-[1.15rem] leading-none text-[var(--foreground)]">
          Luckysoft
        </span>
      )}
    </Link>
  );
}
