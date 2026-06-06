import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

function RequestPipelineGraphic({
  copy,
}: {
  copy: {
    title: string;
    description: string;
    badge: string;
    metrics: [string, string][];
    steps: [string, string, string][];
    consoleLines: string[];
  };
}) {
  return (
    <Card className="mt-8 overflow-hidden border-white/10 bg-[#07101a]/82 text-white shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl">
      <CardHeader className="border-b border-white/10 bg-[radial-gradient(circle_at_10%_0%,rgba(32,106,233,0.24),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle className="text-base">{copy.title}</CardTitle>
            <p className="mt-2 max-w-md text-xs leading-5 text-[#93a4b8]">
              {copy.description}
            </p>
          </div>
          <Badge
            className="border-[#206ae9]/35 bg-[#206ae9]/12 text-[#78a7ff]"
            variant="outline"
          >
            {copy.badge}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid border-b border-white/10 sm:grid-cols-3">
          {copy.metrics.map(([label, value]) => (
            <div
              className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r last:sm:border-r-0"
              key={label}
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#5c7088]">
                {label}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
        <div className="relative p-4">
          <div className="absolute bottom-8 left-8 top-8 w-px bg-gradient-to-b from-[#206ae9] via-[#46e6b3] to-transparent" />
          <div className="space-y-3">
            {copy.steps.map(([step, label, description]) => (
              <div
                className="relative grid gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 pl-12 sm:grid-cols-[5.5rem_1fr]"
                key={step}
              >
                <div className="absolute left-[1.08rem] top-5 grid size-6 place-items-center rounded-full border border-[#206ae9]/50 bg-[#07101a] font-mono text-[0.62rem] text-[#9fc0ff] shadow-[0_0_24px_rgba(32,106,233,0.32)]">
                  {step}
                </div>
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="text-sm leading-6 text-[#93a4b8]">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-white/10 bg-black/25 p-4 font-mono text-[0.68rem] leading-5 text-[#93a4b8]">
            <p className="text-[#46e6b3]">jobdone.request.prepare()</p>
            {copy.consoleLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Contact");
  const topics = t.raw("topics") as string[];
  const requestPipeline = t.raw("requestPipeline") as {
    title: string;
    description: string;
    badge: string;
    metrics: [string, string][];
    steps: [string, string, string][];
    consoleLines: string[];
  };

  return (
    <main className="bg-[#05080c] text-white">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(32,106,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(32,106,233,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <Container className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#206ae9]">
              {t("eyebrow")}
            </p>
            <h1 className="mt-5 break-words text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#a4b3c6]">
              {t("heroDescription")}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {topics.map((topic) => (
                <Card
                  className="border-white/10 bg-[#0b1117]/82 text-white shadow-none"
                  key={topic}
                >
                  <CardContent className="flex min-h-20 items-end p-4">
                    <p className="text-sm font-medium leading-5">{topic}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-[#206ae9]/20 bg-[#206ae9]/8 p-5">
              <p className="text-sm font-semibold text-white">
                {t("closedPreviewTitle")}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#a4b3c6]">
                {t("closedPreviewCopy")}
              </p>
            </div>
            <RequestPipelineGraphic copy={requestPipeline} />
          </div>
          <Suspense fallback={<div className="min-h-[520px]" />}>
            <ContactForm />
          </Suspense>
        </Container>
      </section>
    </main>
  );
}
