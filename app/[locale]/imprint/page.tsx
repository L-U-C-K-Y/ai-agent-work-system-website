import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

type ImprintPageProps = {
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

type DetailItem = {
  label: string;
  value: string;
};

function DetailList({ items }: { items: readonly DetailItem[] }) {
  return (
    <dl className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[minmax(10rem,0.45fr)_1fr]">
      {items.map((item) => (
        <div className="contents" key={item.label}>
          <dt className="font-mono text-xs uppercase tracking-[0.16em] text-[#7f90a6]">
            {item.label}
          </dt>
          <dd className="text-white">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

const linkClass =
  "font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-white";

export async function generateMetadata({
  params,
}: ImprintPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Imprint" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function ImprintPage({ params }: ImprintPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Imprint");
  const richLinks = {
    contact: (chunks: ReactNode) => (
      <Link href="/contact" className={linkClass}>
        {chunks}
      </Link>
    ),
    email: (chunks: ReactNode) => (
      <a className={linkClass} href={`mailto:${siteConfig.email}`}>
        {chunks}
      </a>
    ),
    registry: (chunks: ReactNode) => (
      <a
        className={linkClass}
        href="https://zg.chregister.ch/cr-portal/auszug/auszug.xhtml?uid=CHE-408.536.393"
        rel="noreferrer"
        target="_blank"
      >
        {chunks}
      </a>
    ),
  };

  return (
    <main className="bg-[#05080c] py-14 text-white md:py-20">
      <Container className="max-w-4xl">
        <Card className="border-white/10 bg-[#0b1117] text-white">
          <CardContent className="p-6 md:p-8">
            <Badge
              variant="outline"
              className="border-[var(--primary)]/35 font-mono uppercase tracking-[0.18em] text-[var(--primary)]"
            >
              {t("eyebrow")}
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
          <Section title={t("sections.provider.title")}>
            <p>{t("sections.provider.paragraphs.0")}</p>
            <DetailList
              items={t.raw("sections.provider.details") as DetailItem[]}
            />
          </Section>

          <Section title={t("sections.contact.title")}>
            <p>{t.rich("sections.contact.paragraphs.0", richLinks)}</p>
            <p>{t.rich("sections.contact.paragraphs.1", richLinks)}</p>
          </Section>

          <Section title={t("sections.responsible.title")}>
            <p>{t("sections.responsible.paragraphs.0")}</p>
          </Section>

          <Section title={t("sections.terms.title")}>
            <p>{t("sections.terms.paragraphs.0")}</p>
          </Section>
        </div>
      </Container>
    </main>
  );
}
