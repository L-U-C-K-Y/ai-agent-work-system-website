import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import { getLocalizedProduct, publicProductSlugs } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const accentClasses = {
  green: "bg-[#206ae9] text-white",
  cyan: "bg-[#5ee7ff] text-white",
  amber: "bg-[#ffd166] text-[#181106]",
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

function WorkspaceSystemGraphic({
  product,
  t,
}: {
  product: NonNullable<ReturnType<typeof getLocalizedProduct>>;
  t: Awaited<ReturnType<typeof getTranslations>>;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d141b]/88 p-4 shadow-[0_0_80px_rgba(32,106,233,0.08)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#206ae9]" />
        </div>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#8ea0b5]">
          #{product.slug} / live
        </span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[0.55fr_1fr_0.7fr]">
        <div className="space-y-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[#8ea0b5]">
              {t("graphic.channel")}
            </p>
            <p className="mt-3 text-sm font-semibold text-white">
              {product.name}
            </p>
            <p className="mt-1 font-mono text-xs text-[#9aabbf]">
              #{product.slug}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[#8ea0b5]">
              {t("graphic.aiCoworkers")}
            </p>
            {product.platforms.map((platform) => (
              <div
                className="mt-3 flex items-center justify-between rounded-md bg-[#05080c] px-3 py-2"
                key={platform}
              >
                <span className="text-xs font-semibold text-white">
                  {platform}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#206ae9]" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-lg border border-white/10 bg-[#05080c] p-4">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[#206ae9]">
              {t("graphic.workThread")}
            </p>
            <div className="mt-4 space-y-3">
              {product.workflow.slice(0, 3).map((step, index) => (
                <div className="flex gap-3" key={step}>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-md text-xs font-bold ${
                      index === 1
                        ? accentClasses[product.accent]
                        : "bg-white/[0.06] text-[#9aabbf]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{step}</p>
                    <p className="mt-1 text-xs leading-5 text-[#8ea0b5]">
                      {t("graphic.workThreadCopy")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#206ae9]/25 bg-[#206ae9]/10 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[#206ae9]">
                  {t("graphic.richWorkCard")}
                </p>
                <h2 className="mt-2 text-base font-semibold text-white">
                  {product.tagline}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#b7c4d3]">
                  {product.summary}
                </p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[0.62rem] font-bold ${accentClasses[product.accent]}`}
              >
                {t("graphic.routed")}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {[
            [t("graphic.knowledge"), product.useCases[0]],
            [t("graphic.records"), product.useCases[1]],
            [t("graphic.automation"), product.useCases[2]],
          ].map(([label, value]) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
              key={label}
            >
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[#5ee7ff]">
                {label}
              </p>
              <p className="mt-2 text-sm leading-5 text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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

  return (
    <main className="bg-[#05080c] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-16 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(32,106,233,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(32,106,233,0.055)_1px,transparent_1px)] bg-[size:54px_54px]" />
        <div className="absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[#206ae9]/10 blur-3xl" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-[#206ae9]">
              {product.platforms.join(" / ")}
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#b7c4d3]">
              {product.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={product.primaryCtaHref}>{product.primaryCta}</Button>
              <Button href={product.secondaryCtaHref} variant="secondary">
                {product.secondaryCta}
              </Button>
            </div>
          </div>
          <WorkspaceSystemGraphic product={product} t={t} />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-[#5ee7ff]">
              {t("capabilitiesEyebrow")}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.03em] text-white md:text-5xl">
              {t("capabilitiesTitle")}
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {product.features.map((feature) => (
              <div
                className="rounded-lg border border-white/10 bg-[#0d141b] p-5"
                key={feature}
              >
                <h3 className="text-base font-semibold text-white">{feature}</h3>
                <p className="mt-3 text-sm leading-6 text-[#8ea0b5]">
                  {t("capabilityCopy")}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#080d12] py-16 md:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-[#206ae9]">
                {t("workflowEyebrow")}
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.03em] text-white md:text-5xl">
                {t("workflowTitle")}
              </h2>
            </div>
            <Link
              className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#206ae9] hover:text-white"
              href="/vision"
            >
              {t("platformLink")} -&gt;
            </Link>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {product.workflow.map((step, index) => (
              <div
                className="rounded-lg border border-white/10 bg-[#0d141b] p-5"
                key={step}
              >
                <span className="font-mono text-xs font-semibold text-[#206ae9]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-lg font-semibold text-white">{step}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="rounded-xl border border-[#206ae9]/20 bg-[#206ae9]/[0.04] p-6 md:p-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-[#206ae9]">
            {t("ctaEyebrow")}
          </p>
          <div className="mt-5 grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.03em] text-white md:text-5xl">
                {t("ctaTitle")}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#b7c4d3]">
                {t("ctaCopy")}
              </p>
            </div>
            <Button href={product.primaryCtaHref}>{product.primaryCta}</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
