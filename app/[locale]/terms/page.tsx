import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

type TermsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-white/10 pt-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-sm leading-7 text-[#a4b3c6]">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const linkClass =
  "font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-white";

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Terms");
  const richLinks = {
    contact: (chunks: ReactNode) => (
      <Link href="/contact" className={linkClass}>
        {chunks}
      </Link>
    ),
    privacy: (chunks: ReactNode) => (
      <Link href="/privacy" className={linkClass}>
        {chunks}
      </Link>
    ),
  };

  return (
    <main className="bg-[#05080c] py-14 text-white md:py-20">
      <Container className="max-w-4xl">
        <Card className="border-white/10 bg-[#0b1117] text-white">
          <CardContent className="p-6 md:p-8">
            <Badge variant="outline" className="border-[var(--primary)]/35 font-mono uppercase tracking-[0.18em] text-[var(--primary)]">
              {t("lastUpdated", { date: t("updatedAt") })}
            </Badge>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#a4b3c6]">
              {t("intro")}
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 space-y-10">
          <Section title={t("sections.who.title")}>
            <p>{t("sections.who.paragraphs.0")}</p>
            <p>{t.rich("sections.who.paragraphs.1", richLinks)}</p>
          </Section>

          <Section title={t("sections.acceptance.title")}>
            <p>{t.rich("sections.acceptance.paragraphs.0", richLinks)}</p>
            <p>{t("sections.acceptance.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.splitpop.title")}>
            <p>{t.rich("sections.splitpop.paragraphs.0", richLinks)}</p>
            <p>{t("sections.splitpop.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.eligibility.title")}>
            <p>{t("sections.eligibility.paragraphs.0")}</p>
          </Section>

          <Section title={t("sections.responsibilities.title")}>
            <p>{t("sections.responsibilities.paragraph")}</p>
            <List items={t.raw("sections.responsibilities.items") as string[]} />
          </Section>

          <Section title={t("sections.prohibited.title")}>
            <p>{t("sections.prohibited.paragraph")}</p>
            <List items={t.raw("sections.prohibited.items") as string[]} />
          </Section>

          <Section title={t("sections.content.title")}>
            <p>{t("sections.content.paragraphs.0")}</p>
            <p>{t("sections.content.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.file.title")}>
            <p>{t("sections.file.paragraphs.0")}</p>
            <p>{t("sections.file.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.splitpopProduct.title")}>
            <p>{t("sections.splitpopProduct.paragraphs.0")}</p>
            <p>{t("sections.splitpopProduct.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.purchases.title")}>
            <p>{t("sections.purchases.paragraphs.0")}</p>
            <p>{t("sections.purchases.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.availability.title")}>
            <p>{t("sections.availability.paragraphs.0")}</p>
          </Section>

          <Section title={t("sections.warranties.title")}>
            <p>{t("sections.warranties.paragraphs.0")}</p>
            <p>{t("sections.warranties.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.liability.title")}>
            <p>{t("sections.liability.paragraphs.0")}</p>
            <p>{t("sections.liability.paragraphs.1")}</p>
            <p>{t("sections.liability.paragraphs.2")}</p>
          </Section>

          <Section title={t("sections.indemnity.title")}>
            <p>{t("sections.indemnity.paragraphs.0")}</p>
          </Section>

          <Section title={t("sections.termination.title")}>
            <p>{t("sections.termination.paragraphs.0")}</p>
            <p>{t("sections.termination.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.privacy.title")}>
            <p>{t.rich("sections.privacy.paragraphs.0", richLinks)}</p>
          </Section>

          <Section title={t("sections.law.title")}>
            <p>{t("sections.law.paragraphs.0")}</p>
          </Section>

          <Section title={t("sections.changes.title")}>
            <p>{t("sections.changes.paragraphs.0")}</p>
          </Section>
        </div>
      </Container>
    </main>
  );
}
