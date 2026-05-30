import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { getLocalizedProduct, publicProductSlugs } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return publicProductSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const productsT = await getTranslations({ locale, namespace: "Products" });
  const product = getLocalizedProduct(productsT, slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const productsT = await getTranslations("Products");
  const t = await getTranslations("ProductDetail");
  const product = getLocalizedProduct(productsT, slug);

  if (!product) {
    notFound();
  }

  const isSplitpop = product.slug === "splitpop";
  const workflow = t.raw(isSplitpop ? "splitpopWorkflow" : "fileWorkflow") as string[];

  return (
    <main>
      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
              {product.platforms.join(" / ")}
            </p>
            <h1 className="mt-4 font-serif text-6xl leading-[0.98] text-[var(--foreground)] md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-5 text-xl leading-8 text-[var(--accent-strong)]">
              {product.tagline}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
              {product.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={product.primaryCtaHref}>{product.primaryCta}</Button>
              <Button href={product.secondaryCtaHref} variant="secondary">
                {product.secondaryCta}
              </Button>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-xl bg-[var(--soft)] md:min-h-[560px]">
            <Image
              alt=""
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 55vw, 100vw"
              src={product.heroImage}
            />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--soft)] py-16 md:py-24">
        <Container>
          <SectionHeading
            description={
              isSplitpop
                ? t("splitpopSectionDescription")
                : t("fileSectionDescription")
            }
            title={isSplitpop ? t("splitpopSectionTitle") : t("fileSectionTitle")}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {product.features.map((feature) => (
              <div
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
                key={feature}
              >
                <h2 className="text-base font-semibold text-[var(--foreground)]">
                  {feature}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {isSplitpop ? t("splitpopFeatureCopy") : t("fileFeatureCopy")}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            align="center"
            description={t("workflowDescription")}
            title={t("workflowTitle")}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {workflow.map((step, index) => (
              <div
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
                key={step}
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--surface-strong)] text-sm font-semibold text-[var(--accent-strong)]">
                  {index + 1}
                </div>
                <h2 className="mt-5 text-base font-semibold text-[var(--foreground)]">
                  {step}
                </h2>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--charcoal)] py-16 text-white md:py-20">
        <Container className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
              {isSplitpop ? t("splitpopCtaTitle") : t("fileCtaTitle")}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
              {t("ctaCopy")}
            </p>
          </div>
          <Button
            className="!bg-white !text-[var(--charcoal)] hover:!bg-[var(--soft)]"
            href={product.primaryCtaHref}
          >
            {product.primaryCta}
          </Button>
        </Container>
      </section>
    </main>
  );
}
