import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { MediaPanel } from "@/components/media-panel";
import { PrincipleGrid } from "@/components/principle-grid";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { getLocalizedProducts } from "@/lib/products";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

function HomeHeroImage({ alt }: { alt: string }) {
  return (
    <Image
      alt={alt}
      className="h-full w-full object-cover"
      height={941}
      priority
      sizes="(min-width: 768px) 55vw, 100vw"
      src="/images/backgrounds/home-hero-garden-bridge.webp"
      width={1672}
    />
  );
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Home");
  const productsT = await getTranslations("Products");
  const publicProducts = getLocalizedProducts(productsT);

  return (
    <main>
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-8 py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:py-16">
          <div className="relative z-10 max-w-2xl">
            <h1 className="font-serif text-[3.35rem] leading-[0.96] text-[var(--foreground)] sm:text-7xl lg:text-8xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
              {t("heroDescription")}
            </p>
            <div className="mt-7 flex gap-3">
              <Button href="/products">{t("exploreApps")}</Button>
              <Button href="/contact" variant="secondary">
                {t("contactUs")}
              </Button>
            </div>
          </div>
          <div className="relative aspect-[1672/941] overflow-hidden rounded-xl bg-[var(--soft)]">
            <HomeHeroImage alt={t("heroAlt")} />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--soft)] py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              description={t("productsDescription")}
              title={t("productsTitle")}
            />
            <Button className="md:mb-1" href="/products" variant="plain">
              {t("viewAllApps")}
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {publicProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
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

      <section className="bg-[var(--soft)] py-16 md:py-24">
        <Container>
          <MediaPanel
            alt={t("interludeAlt")}
            image="/images/backgrounds/home-interlude.webp"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
              {t("interludeEyebrow")}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[var(--foreground)] md:text-5xl">
              {t("interludeTitle")}
            </h2>
            <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg">
              {t("interludeCopy")}
            </p>
          </MediaPanel>
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
              <Button
                className="!bg-white !text-[var(--charcoal)] hover:!bg-[var(--soft)]"
                href="/contact"
              >
                {t("ctaButton")}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
