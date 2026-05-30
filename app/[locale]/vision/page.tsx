import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { MediaPanel } from "@/components/media-panel";
import { SectionHeading } from "@/components/section-heading";

type VisionPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type Principle = {
  title: string;
  copy: string;
};

export async function generateMetadata({
  params,
}: VisionPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Vision" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function VisionPage({ params }: VisionPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Vision");
  const principles = t.raw("principles") as Principle[];

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
              src="/images/backgrounds/vision-hero.webp"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--soft)] py-16 md:py-24">
        <Container>
          <SectionHeading
            description={t("philosophyDescription")}
            title={t("philosophyTitle")}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <article
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6"
                key={principle.title}
              >
                <h2 className="font-serif text-2xl text-[var(--foreground)]">
                  {principle.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  {principle.copy}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <MediaPanel
            alt={t("panelAlt")}
            image="/images/backgrounds/contact-cta.webp"
            reverse
          >
            <h2 className="font-serif text-4xl leading-[1.05] text-[var(--foreground)] md:text-5xl">
              {t("panelTitle")}
            </h2>
            <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg">
              {t("panelCopy")}
            </p>
            <div className="mt-8">
              <Button href="/contact">{t("panelButton")}</Button>
            </div>
          </MediaPanel>
        </Container>
      </section>
    </main>
  );
}
