import { useTranslations } from "next-intl";

import { AppIcon } from "@/components/app-icon";
import { Button } from "@/components/button";
import type { Product } from "@/lib/products";

type ProductRowProps = {
  product: Product;
};

export function ProductRow({ product }: ProductRowProps) {
  const t = useTranslations("ProductsPage");

  return (
    <article className="grid gap-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 md:grid-cols-[1.05fr_0.95fr] md:p-8">
      <div className="flex flex-col justify-between">
        <div>
          <AppIcon product={product.slug} />
          <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-[var(--foreground)]">
            {product.name}
          </h2>
          <p className="mt-3 text-base font-medium text-[var(--accent-strong)]">
            {product.tagline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
            {product.description}
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={{
              pathname: "/products/[slug]",
              params: { slug: product.slug },
            }}
          >
            {t("viewDetails")}
          </Button>
          <Button href={product.primaryCtaHref} variant="secondary">
            {product.primaryCta}
          </Button>
        </div>
      </div>
      <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-[var(--soft)] p-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(32,106,233,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(32,106,233,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="relative grid gap-3">
          {product.workflow.slice(0, 3).map((step, index) => (
            <div
              className="rounded-md border border-white/10 bg-[#05080c]/80 p-3"
              key={step}
            >
              <p className="font-mono text-xs text-[var(--primary)]">
                0{index + 1}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
