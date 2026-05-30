import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Contact");
  const topics = t.raw("topics") as string[];

  return (
    <main>
      <section className="py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="break-words font-serif text-5xl leading-[0.98] text-[var(--foreground)] sm:text-6xl md:text-7xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              {t("heroDescription")}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {topics.map((topic) => (
                <div
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-sm font-medium text-[var(--foreground)]"
                  key={topic}
                >
                  {topic}
                </div>
              ))}
            </div>
            <div className="mt-8 aspect-[1672/941] overflow-hidden rounded-xl bg-[var(--soft)]">
              <Image
                alt={t("heroAlt")}
                className="h-full w-full object-cover"
                height={941}
                priority
                sizes="(min-width: 768px) 36vw, 100vw"
                src="/images/backgrounds/contact-hero-terrace.webp"
                width={1672}
              />
            </div>
          </div>
          <Suspense fallback={<div className="min-h-[520px]" />}>
            <ContactForm />
          </Suspense>
        </Container>
      </section>
    </main>
  );
}
