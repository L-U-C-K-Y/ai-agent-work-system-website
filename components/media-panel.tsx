import Image from "next/image";
import type { ReactNode } from "react";

type MediaPanelProps = {
  image: string;
  alt: string;
  children: ReactNode;
  reverse?: boolean;
};

export function MediaPanel({
  image,
  alt,
  children,
  reverse = false,
}: MediaPanelProps) {
  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="relative min-h-[340px] overflow-hidden rounded-xl bg-[var(--soft)] md:min-h-[460px]">
        <Image
          alt={alt}
          className="object-cover"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          src={image}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
