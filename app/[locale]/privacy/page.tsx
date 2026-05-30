import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { Container } from "@/components/container";
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
    <section className="border-t border-[var(--border)] pt-8">
      <h2 className="font-serif text-3xl text-[var(--foreground)]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-[var(--muted)]">
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
  "font-medium text-[var(--foreground)] underline decoration-[var(--border-strong)] underline-offset-4 transition hover:decoration-[var(--foreground)]";

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
    privacyLink: (chunks: ReactNode) => (
      <a href="https://www.splitpop.app/privacy" className={linkClass}>
        {chunks}
      </a>
    ),
    termsLink: (chunks: ReactNode) => (
      <a href="https://www.splitpop.app/terms" className={linkClass}>
        {chunks}
      </a>
    ),
  };

  return (
    <main className="py-14 md:py-20">
      <Container className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          {t("lastUpdated", { date: t("updatedAt") })}
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[var(--foreground)] md:text-7xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          {t("intro")}
        </p>

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
