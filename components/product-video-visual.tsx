import Image from "next/image";

type ProductVideoVisualProps = {
  alt: string;
  className?: string;
  fallbackSrc: string;
  imageClassName?: string;
  posterSrc: string;
  priority?: boolean;
  videoSrc: string;
  variant?: "blend" | "plain";
};

export function ProductVideoVisual({
  alt,
  className = "",
  fallbackSrc,
  imageClassName = "",
  posterSrc,
  priority = false,
  videoSrc,
  variant = "blend",
}: ProductVideoVisualProps) {
  const isBlend = variant === "blend";

  return (
    <div className={`relative overflow-hidden bg-transparent ${className}`}>
      <video
        aria-hidden="true"
        autoPlay
        className={`absolute inset-0 h-full w-full object-cover motion-reduce:hidden ${imageClassName}`}
        loop
        muted
        playsInline
        poster={posterSrc}
        preload={priority ? "auto" : "none"}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Image
        alt={alt}
        className={`h-full w-full object-cover motion-safe:opacity-0 ${imageClassName}`}
        height={1080}
        priority={priority}
        src={fallbackSrc}
        width={1920}
      />
      {isBlend ? (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#05080c] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#05080c] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#05080c] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05080c] to-transparent" />
        </>
      ) : null}
    </div>
  );
}
