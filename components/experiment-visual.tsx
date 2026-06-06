import Image from "next/image";

type ExperimentVisualProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  position?: "absolute" | "relative";
  priority?: boolean;
  variant?: "framed" | "blend";
  src: string;
};

export function ExperimentVisual({
  alt,
  className = "",
  imageClassName = "",
  position = "relative",
  priority = false,
  variant = "framed",
  src,
}: ExperimentVisualProps) {
  const isBlend = variant === "blend";

  return (
    <div
      className={`${position} overflow-hidden ${
        isBlend
          ? "bg-transparent"
          : "bg-transparent"
      } ${className}`}
    >
      <Image
        alt={alt}
        className={`h-full w-full object-cover ${imageClassName}`}
        height={1080}
        priority={priority}
        quality={95}
        src={src}
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
