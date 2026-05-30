import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Container } from "@/components/container";
import { PrincipleGrid } from "@/components/principle-grid";
import { ProductRow } from "@/components/product-row";
import { SectionHeading } from "@/components/section-heading";
import { getLocalizedProducts } from "@/lib/products";

type ProductsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProductsPage" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ProductsPage");
  const productsT = await getTranslations("Products");
  const publicProducts = getLocalizedProducts(productsT);

  return (
    <main>
      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="font-serif text-6xl leading-[0.98] text-[var(--foreground)] md:text-7xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              {t("heroDescription")}
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-xl bg-[var(--soft)] md:min-h-[460px]">
            <Image
              alt={t("heroAlt")}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              src="/images/backgrounds/products-hero.webp"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--soft)] py-16 md:py-24">
        <Container>
          <div className="space-y-6">
            {publicProducts.map((product) => (
              <ProductRow key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            align="center"
            description={t("principlesDescription")}
            title={t("principlesTitle")}
          />
          <div className="mt-10">
            <PrincipleGrid />
          </div>
        </Container>
      </section>
    </main>
  );
}
