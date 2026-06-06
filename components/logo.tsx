import Image from "next/image";

import { Link } from "@/i18n/navigation";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      className="inline-flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      href="/"
    >
      <span className="relative grid h-8 w-12 place-items-center overflow-hidden">
        <Image
          alt=""
          className="h-auto w-10"
          height={770}
          priority
          src="/images/jobdone-ai/jai-logo-white-transparent.svg"
          width={2042}
        />
      </span>
      {!compact && (
        <span className="whitespace-nowrap text-[1.12rem] font-black leading-none tracking-[-0.01em] text-white">
          JobDone <span className="text-[#206ae9]">AI</span>
        </span>
      )}
    </Link>
  );
}
