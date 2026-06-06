import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

type PrivacyPageProps = {
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
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Privacy");
  const richLinks = {
    contact: (chunks: ReactNode) => (
      <Link href="/contact" className={linkClass}>
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
          <Section title={t("sections.responsible.title")}>
            <p>{t("sections.responsible.paragraphs.0")}</p>
            <p>{t.rich("sections.responsible.paragraphs.1", richLinks)}</p>
          </Section>

          <Section title={t("sections.splitpop.title")}>
            <p>{t.rich("sections.splitpop.paragraphs.0", richLinks)}</p>
            <p>{t("sections.splitpop.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.collect.title")}>
            <p>{t("sections.collect.paragraph")}</p>
            <List items={t.raw("sections.collect.items") as string[]} />
          </Section>

          <Section title={t("sections.payments.title")}>
            <p>{t("sections.payments.paragraphs.0")}</p>
            <p>{t("sections.payments.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.use.title")}>
            <p>{t("sections.use.paragraph")}</p>
            <List items={t.raw("sections.use.items") as string[]} />
          </Section>

          <Section title={t("sections.bases.title")}>
            <p>{t("sections.bases.paragraphs.0")}</p>
            <p>{t("sections.bases.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.thirdParties.title")}>
            <p>{t("sections.thirdParties.paragraph")}</p>
            <List items={t.raw("sections.thirdParties.items") as string[]} />
            <p>{t("sections.thirdParties.after")}</p>
          </Section>

          <Section title={t("sections.sharing.title")}>
            <p>{t("sections.sharing.paragraphs.0")}</p>
            <p>{t("sections.sharing.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.retention.title")}>
            <p>{t("sections.retention.paragraphs.0")}</p>
            <p>{t("sections.retention.paragraphs.1")}</p>
          </Section>

          <Section title={t("sections.rights.title")}>
            <p>{t("sections.rights.paragraphs.0")}</p>
            <p>{t.rich("sections.rights.paragraphs.1", richLinks)}</p>
          </Section>

          <Section title={t("sections.security.title")}>
            <p>{t("sections.security.paragraphs.0")}</p>
          </Section>

          <Section title={t("sections.transfers.title")}>
            <p>{t("sections.transfers.paragraphs.0")}</p>
          </Section>

          <Section title={t("sections.children.title")}>
            <p>{t("sections.children.paragraphs.0")}</p>
          </Section>

          <Section title={t("sections.changes.title")}>
            <p>{t("sections.changes.paragraphs.0")}</p>
          </Section>
        </div>
      </Container>
    </main>
  );
}
