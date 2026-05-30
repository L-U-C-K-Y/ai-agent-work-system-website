import { useTranslations } from "next-intl";

import { AppIcon } from "@/components/app-icon";
import { ArrowRightIcon } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("ProductsPage");

  return (
    <Link
      className="group flex h-full flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      href={{ pathname: "/products/[slug]", params: { slug: product.slug } }}
    >
      <AppIcon product={product.slug as "file-to-markdown" | "splitpop"} />
      <div className="mt-8">
        <h3 className="font-serif text-2xl leading-tight text-[var(--foreground)]">
          {product.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-[var(--accent-strong)]">
          {product.tagline}
        </p>
        <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
          {product.summary}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
        {t("learnMore")}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
