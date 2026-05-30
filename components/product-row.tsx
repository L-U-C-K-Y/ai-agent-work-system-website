import Image from "next/image";
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
          <AppIcon product={product.slug as "file-to-markdown" | "splitpop"} />
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
      <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-[var(--soft)]">
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="(min-width: 768px) 45vw, 90vw"
          src={product.heroImage}
        />
      </div>
    </article>
  );
}
