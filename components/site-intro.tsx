"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTRO_STORAGE_KEY = "jobdone-ai-site-intro-seen";

export function SiteIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "true") {
      return;
    }

    window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");

    const showFrame = window.requestAnimationFrame(() => setVisible(true));
    const doneTimer = window.setTimeout(() => setVisible(false), 1720);

    return () => {
      window.cancelAnimationFrame(showFrame);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="jobdone-site-intro fixed inset-0 z-[80] grid place-items-center bg-[#05080c]"
    >
      <div className="grid justify-items-center">
        <div className="jobdone-site-intro-logo-shell relative flex h-24 w-56 items-center justify-center overflow-visible md:h-28 md:w-64">
          <span className="jobdone-site-intro-edge absolute inset-x-3 inset-y-5" />
          <span className="jobdone-site-intro-aura absolute inset-0" />
          <Image
            alt=""
            className="jobdone-site-intro-logo relative z-10 h-auto w-full object-contain"
            height={770}
            priority
            src="/images/jobdone-ai/jai-logo-white-transparent.svg"
            width={2042}
          />
        </div>
      </div>
    </div>
  );
}
