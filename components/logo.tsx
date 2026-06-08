"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Link } from "@/i18n/navigation";

type LogoProps = {
  compact?: boolean;
  revealOnView?: boolean;
};

export function Logo({ compact = false, revealOnView = false }: LogoProps) {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    if (!revealOnView || hasRevealed) {
      return;
    }

    const node = logoRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.75 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasRevealed, revealOnView]);

  return (
    <Link
      className={`group/logo inline-flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
        hasRevealed ? "is-logo-revealed" : ""
      }`}
      href="/"
      ref={logoRef}
    >
      <span className="jobdone-logo-mark relative grid h-8 w-12 place-items-center overflow-visible">
        <span className="jobdone-logo-mark-aura absolute inset-0" />
        <span className="jobdone-logo-mark-edge absolute inset-x-0 inset-y-2" />
        <Image
          alt=""
          className="relative z-10 h-auto w-10"
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
