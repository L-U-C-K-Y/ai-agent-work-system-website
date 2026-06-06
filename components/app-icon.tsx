import type { ProductSlug } from "@/lib/products";

type AppIconProps = {
  product: ProductSlug;
  className?: string;
};

export function AppIcon({ product, className = "" }: AppIconProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative size-14 overflow-hidden rounded-lg border border-white/10 bg-[var(--surface)] shadow-[0_0_24px_rgba(32,106,233,0.14)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(32,106,233,0.45),transparent_36%)]" />
      <div className="absolute left-3 top-3 size-2 rounded-sm bg-[var(--chart-2)]" />
      <div className="absolute bottom-3 right-3 size-2 rounded-sm bg-[var(--primary)]" />
      <div className="absolute left-3 top-7 h-1.5 w-8 rounded-full bg-white/15" />
      <span className="absolute bottom-2.5 left-3 font-mono text-[0.6rem] font-black uppercase text-white">
        {product.slice(0, 2)}
      </span>
    </div>
  );
}
