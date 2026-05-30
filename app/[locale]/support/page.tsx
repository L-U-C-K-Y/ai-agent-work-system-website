import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AppIcon } from "@/components/app-icon";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Link } from "@/i18n/navigation";
import { getLocalizedProducts, type ProductSlug } from "@/lib/products";

type SupportPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type QuickAction = {
  label: string;
  topic: string;
};

type NextStep = {
  title: string;
  copy: string;
};

type ProductSupport = {
  description: string;
  actions: string[];
};

export async function generateMetadata({
  params,
}: SupportPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Support" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function SupportPage({ params }: SupportPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Support");
  const productsT = await getTranslations("Products");
  const publicProducts = getLocalizedProducts(productsT);
  const quickActions = t.raw("quickActions") as QuickAction[];
  const nextSteps = t.raw("nextSteps") as NextStep[];

  return (
    <main>
      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <h1 className="break-words font-serif text-6xl leading-[0.98] text-[var(--foreground)] md:text-7xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              {t("heroDescription")}
            </p>
            <Link
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent-strong)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              href={{ pathname: "/contact", query: { topic: "support" } }}
            >
              {t("heroButton")}
            </Link>
          </div>
          <div className="relative aspect-[1672/941] overflow-hidden rounded-xl bg-[var(--soft)]">
            <Image
              alt={t("heroAlt")}
              className="h-full w-full object-cover"
              height={941}
              priority
              sizes="(min-width: 768px) 55vw, 100vw"
              src="/images/backgrounds/support-hero-patio.webp"
              width={1672}
            />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--soft)] py-16 md:py-24">
        <Container>
          <SectionHeading
            description={t("productsDescription")}
            title={t("productsTitle")}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {publicProducts.map((product) => {
              const support = t.raw(
                `productCards.${product.slug}`,
              ) as ProductSupport;

              return (
                <article
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6"
                  key={product.slug}
                >
                  <AppIcon product={product.slug as ProductSlug} />
                  <h2 className="mt-6 font-serif text-3xl text-[var(--foreground)]">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {support.description}
                  </p>
                  <div className="mt-6 grid gap-3">
                    {support.actions.map((action) => (
                      <Link
                        className="flex items-center justify-between rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                        href={{
                          pathname: "/contact",
                          query: { topic: product.slug },
                        }}
                        key={action}
                      >
                        <span>{action}</span>
                        <span aria-hidden="true">-&gt;</span>
                      </Link>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            align="center"
            description={t("pathsDescription")}
            title={t("pathsTitle")}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action) => (
              <Link
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-white"
                href={{
                  pathname: "/contact",
                  query: { topic: action.topic },
                }}
                key={action.topic}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--soft)] py-16 md:py-24">
        <Container>
          <SectionHeading
            align="center"
            description={t("nextDescription")}
            title={t("nextTitle")}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <article
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6"
                key={step.title}
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--surface-strong)] text-sm font-semibold text-[var(--accent-strong)]">
                  {index + 1}
                </div>
                <h2 className="mt-5 text-base font-semibold text-[var(--foreground)]">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="rounded-xl bg-[var(--charcoal)] p-7 text-white md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
                  {t("ctaTitle")}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
                  {t("ctaCopy")}
                </p>
              </div>
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-[var(--charcoal)] transition hover:bg-[var(--soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={{ pathname: "/contact", query: { topic: "support" } }}
              >
                {t("ctaButton")}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
