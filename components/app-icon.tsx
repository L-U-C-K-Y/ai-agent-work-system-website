type AppIconProps = {
  product: "file-to-markdown" | "splitpop";
  className?: string;
};

export function AppIcon({ product, className = "" }: AppIconProps) {
  if (product === "splitpop") {
    return (
      <div
        aria-hidden="true"
        className={`grid h-14 w-14 place-items-center rounded-lg bg-[var(--surface-strong)] text-3xl font-semibold text-[var(--accent-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ${className}`}
      >
        %
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative h-14 w-14 rounded-lg bg-[var(--surface)] shadow-[inset_0_0_0_1px_var(--border)] ${className}`}
    >
      <div className="absolute left-3 top-3 h-2 w-7 rounded-full bg-[var(--surface-strong)]" />
      <div className="absolute left-3 top-6 h-1.5 w-8 rounded-full bg-[var(--border)]" />
      <div className="absolute left-3 top-9 h-1.5 w-5 rounded-full bg-[var(--border)]" />
      <div className="absolute right-0 top-0 h-5 w-5 rounded-bl-lg rounded-tr-lg bg-[var(--soft)] shadow-[inset_1px_-1px_0_var(--border)]" />
    </div>
  );
}
