import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ExperimentVisual } from "@/components/experiment-visual";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const useImagegenExperimentVisuals = true;

const pageCopy = {
  en: {
    metadataTitle: "Use cases",
    metadataDescription: "Department-specific use cases for human and AI agent teams.",
    eyebrow: "Use cases",
    title: "Work rooms for human and AI work.",
    description:
      "Each workspace gives a team one place to track work, involve AI Coworkers and AI Automations, and review important changes.",
    primaryCta: "View use cases",
    secondaryCta: "View platform",
    heroAlt:
      "Connected JobDone AI workspace rooms for finance, support, and product operations",
    roomsLabel: "Workspace rooms",
    live: "live",
    sectionEyebrow: "Start where work already lives",
    sectionTitle: "Department-specific rooms, one shared system.",
    matrixEyebrow: "use case flow",
    matrixTitle: "Each team starts with the same simple way to track work, involve AI, and review changes.",
    matrixDescription:
      "Teams can start with one department and keep the same model as more workflows move into the system.",
    workspaces: [
      ["Finance Ops", "#finance", "Invoices, approvals, vendor records, close tasks"],
      ["Inventory Ops", "#inventory", "Assets, replenishment, exceptions, handoffs"],
      ["People Ops", "#people", "Onboarding, policy requests, employee documents"],
      ["Support Ops", "#support", "Case triage, customer context, escalation paths"],
      ["Product Ops", "#product", "Feedback, bugs, releases, incidents, evidence"],
      ["Revenue Ops", "#revenue", "Research, CRM hygiene, follow-up prep"],
    ],
    coworkerCards: [
      ["Finance AI", "Reconciles invoices", "searching policy"],
      ["Inventory AI", "Maintains asset records", "drafting rows"],
      ["Approvals", "Routes decisions", "waiting review"],
    ],
    workspaceMatrix: [
      ["Channels", "Shared room", "human + AI conversation"],
      ["Work cards", "Tracked work", "owner, status, evidence"],
      ["Knowledge", "Trusted context", "approved citations"],
      ["Records", "Data layer", "drafts and updates"],
      ["Automations", "Process layer", "repeatable handoffs"],
      ["Approvals", "Human review", "approval and audit"],
    ],
  },
  de: {
    metadataTitle: "Anwendungsfälle",
    metadataDescription: "Abteilungsspezifische Anwendungsfälle für Teams aus Menschen und AI.",
    eyebrow: "Anwendungsfälle",
    title: "Arbeitsräume für menschliche und AI-Arbeit.",
    description:
      "Jeder Workspace gibt einem Team einen Ort, um Arbeit zu verfolgen, AI Coworker und AI-Automatisierungen einzubeziehen und wichtige Änderungen zu prüfen.",
    primaryCta: "Anwendungsfälle ansehen",
    secondaryCta: "Plattform ansehen",
    heroAlt:
      "Verbundene JobDone AI Workspace-Räume für Finance, Support und Product Operations",
    roomsLabel: "Workspace-Räume",
    live: "live",
    sectionEyebrow: "Dort starten, wo Arbeit bereits entsteht",
    sectionTitle: "Abteilungsspezifische Räume, ein gemeinsames System.",
    matrixEyebrow: "Anwendungsfall-Ablauf",
    matrixTitle: "Jedes Team startet mit derselben einfachen Art, Arbeit zu verfolgen, AI einzubeziehen und Änderungen zu prüfen.",
    matrixDescription:
      "Teams können mit einer Abteilung starten und dasselbe Modell beibehalten, wenn weitere Workflows ins System wechseln.",
    workspaces: [
      ["Finance Ops", "#finance", "Rechnungen, Freigaben, Lieferantendaten, Abschlussaufgaben"],
      ["Inventory Ops", "#inventory", "Assets, Nachbestellung, Ausnahmen, Übergaben"],
      ["People Ops", "#people", "Onboarding, Richtlinienanfragen, Mitarbeiterdokumente"],
      ["Support Ops", "#support", "Falltriage, Kundenkontext, Eskalationspfade"],
      ["Product Ops", "#product", "Feedback, Bugs, Releases, Vorfälle, Nachweise"],
      ["Revenue Ops", "#revenue", "Recherche, CRM-Pflege, Follow-up-Vorbereitung"],
    ],
    coworkerCards: [
      ["Finance AI", "Gleicht Rechnungen ab", "sucht Richtlinie"],
      ["Inventory AI", "Pflegt Asset-Datensätze", "entwirft Zeilen"],
      ["Freigaben", "Routet Entscheidungen", "wartet auf Prüfung"],
    ],
    workspaceMatrix: [
      ["Channels", "Gemeinsamer Raum", "Mensch + KI-Konversation"],
      ["Work Cards", "Nachverfolgbare Arbeit", "Owner, Status, Nachweis"],
      ["Wissen", "Verlässlicher Kontext", "freigegebene Zitate"],
      ["Datensätze", "Datenebene", "Entwürfe und Updates"],
      ["Automatisierungen", "Prozessebene", "wiederholbare Übergaben"],
      ["Freigaben", "Menschliche Prüfung", "Freigabe und Audit"],
    ],
  },
} as const;

type ProductsCopy = (typeof pageCopy)[keyof typeof pageCopy];

function getCopy(locale: string) {
  return locale === "de" ? pageCopy.de : pageCopy.en;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
  };
}

function MiniWorkspaceGraphic({ copy }: { copy: ProductsCopy }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0b1117] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
      <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-3">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8ea0b5]">
          {copy.roomsLabel}
        </p>
        <Badge className="rounded-full font-mono text-[0.65rem]">
          {copy.live}
        </Badge>
      </div>
      <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-2">
          {copy.workspaces.slice(0, 4).map(([name, channel], index) => (
            <div
              className={`rounded-md border border-white/8 p-3 ${
                index === 0 ? "bg-[#206ae9] text-white" : "bg-white/[0.035] text-white"
              }`}
              key={name}
            >
              <p className="text-sm font-semibold">{name}</p>
              <p className="mt-1 font-mono text-[0.68rem] opacity-70">{channel}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3">
          {copy.coworkerCards.map(([name, role, status], index) => (
            <Card className="border-white/10 bg-[#05080c] py-0 text-white" key={name}>
              <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">{name}</h3>
                  <p className="mt-1 text-xs text-[#91a2b8]">{role}</p>
                </div>
                <span
                  className={`size-2 rounded-full ${
                    index === 2 ? "bg-[#ffd166]" : index === 1 ? "bg-[#60efff]" : "bg-[#206ae9]"
                  }`}
                />
              </div>
              <p className="mt-4 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[0.68rem] text-[#d7ffe9]">
                {status}
              </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkspaceMatrix({ copy }: { copy: ProductsCopy }) {
  return (
    <Card className="border-white/10 bg-[#0b1117] py-0 text-white">
      <CardHeader className="border-b border-white/10 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge variant="outline" className="border-[var(--primary)]/35 font-mono text-[var(--primary)]">
              {copy.matrixEyebrow}
            </Badge>
            <CardTitle className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {copy.matrixTitle}
            </CardTitle>
          </div>
          <CardDescription className="max-w-sm text-sm leading-6 text-[#91a2b8]">
            {copy.matrixDescription}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-px bg-white/10 p-0 md:grid-cols-3">
        {copy.workspaceMatrix.map(([title, type, description]) => (
          <div className="bg-[#0b1117] p-5" key={title}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--primary)]">
              {type}
            </p>
            <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#91a2b8]">{description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default async function ProductsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);

  return (
    <main className="bg-[#05080c] text-white">
      <section className="relative overflow-hidden border-b border-white/8 py-20 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(32,106,233,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(32,106,233,0.055)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#206ae9]">
              {copy.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#a4b3c6]">
              {copy.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#use-cases">{copy.primaryCta}</Button>
              <Button className="!border-white/14 !bg-white/[0.03] !text-white hover:!border-[#206ae9]/40 hover:!bg-[#206ae9]/10" href="/platform" variant="secondary">
                {copy.secondaryCta}
              </Button>
            </div>
          </div>
          {useImagegenExperimentVisuals ? (
            <ExperimentVisual
              alt={copy.heroAlt}
              className="aspect-[16/9] lg:-mr-[16vw] lg:w-[calc(100%+16vw)]"
              priority
              src="/images/jobdone-ai/neon-workspace-rooms.png"
            />
          ) : (
            <MiniWorkspaceGraphic copy={copy} />
          )}
        </Container>
      </section>

      <section className="py-20 md:py-24" id="use-cases">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#60efff]">
              {copy.sectionEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {copy.sectionTitle}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.workspaces.map(([name, channel, description]) => (
              <Card className="border-white/10 bg-[#0b1117] text-white" key={name}>
                <CardHeader>
                  <Badge variant="outline" className="w-fit border-[var(--primary)]/30 font-mono text-[var(--primary)]">
                    {channel}
                  </Badge>
                  <CardTitle className="mt-8 text-xl font-semibold">{name}</CardTitle>
                  <CardDescription className="text-sm leading-6 text-[#91a2b8]">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#080d12] py-20 md:py-24">
        <Container>
          <WorkspaceMatrix copy={copy} />
        </Container>
      </section>
    </main>
  );
}
