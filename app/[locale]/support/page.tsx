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
    metadataDescription: "A collaborative work story for humans and AI agents.",
    eyebrow: "Use case",
    title: "From channel message to approved business outcome.",
    description:
      "A single request can wake the right AI coworkers, create structured work, search knowledge, draft database records, and route decisions to people.",
    primaryCta: "Explore workspaces",
    secondaryCta: "Request access",
    heroAlt:
      "JobDone AI command console showing channels, AI coworkers, automations, records, knowledge citations, and approvals",
    traceTitle: "Outcome trace",
    traceDescription: "The whole path stays inspectable from request to approval.",
    approved: "approved",
    patternsEyebrow: "Operating patterns",
    patternsTitle: "Repeatable workflows become reusable system behavior.",
    steps: [
      ["Message", "A teammate asks the Finance AI to process an invoice and check hardware lines."],
      ["Work card", "The message becomes a tracked work item with source, owner, priority, and evidence."],
      ["Knowledge", "The agent cites purchasing policy and validates the approval threshold."],
      ["Records", "Inventory AI drafts asset rows in the governed Asset database."],
      ["Approval", "A human reviews the packet before the record and finance updates are applied."],
    ],
    traceRows: [
      ["source", "channel message", "Maya asks Finance AI to process invoice"],
      ["context", "knowledge search", "purchasing policy threshold matched"],
      ["handoff", "inventory workspace", "hardware lines routed to Inventory AI"],
      ["proposal", "record database", "asset rows drafted with missing fields"],
      ["decision", "approval packet", "controller review required"],
    ],
    stages: [
      ["Before", "Requests, evidence, and updates are split across chat, files, spreadsheets, and tools."],
      ["During", "Humans and AI coworkers share one thread, one work item, and one approval packet."],
      ["After", "Records, actions, comments, and audit history stay connected to the completed work."],
    ],
    operatingPatterns: [
      ["Triage", "Route ambiguous requests to the right workspace and AI coworker."],
      ["Grounding", "Search approved knowledge and attach citations to the work."],
      ["Record work", "Draft database changes without applying risky updates silently."],
      ["Review gates", "Stop at approval thresholds and keep people accountable."],
    ],
  },
  de: {
    metadataTitle: "Anwendungsfälle",
    metadataDescription: "Eine kollaborative Arbeitsgeschichte für Menschen und KI-Agenten.",
    eyebrow: "Anwendungsfall",
    title: "Von der Channel-Nachricht zum freigegebenen Geschäftsergebnis.",
    description:
      "Eine einzelne Anfrage kann die richtigen AI Coworker aktivieren, strukturierte Arbeit erstellen, Wissen durchsuchen, Datenbankeinträge entwerfen und Entscheidungen an Menschen routen.",
    primaryCta: "Workspaces erkunden",
    secondaryCta: "Zugang anfragen",
    heroAlt:
      "JobDone AI Command Console mit Channels, AI Coworkern, Automatisierungen, Datensätzen, Wissenszitaten und Freigaben",
    traceTitle: "Outcome Trace",
    traceDescription: "Der gesamte Pfad bleibt von der Anfrage bis zur Freigabe inspizierbar.",
    approved: "freigegeben",
    patternsEyebrow: "Operative Muster",
    patternsTitle: "Wiederholbare Workflows werden zu wiederverwendbarem Systemverhalten.",
    steps: [
      ["Nachricht", "Ein Teammitglied bittet Finance AI, eine Rechnung zu verarbeiten und Hardwarepositionen zu prüfen."],
      ["Work Card", "Die Nachricht wird zu einem nachverfolgbaren Work Item mit Quelle, Owner, Priorität und Nachweisen."],
      ["Wissen", "Der Agent zitiert die Einkaufsrichtlinie und validiert die Freigabeschwelle."],
      ["Datensätze", "Inventory AI entwirft Asset-Zeilen in der gesteuerten Asset-Datenbank."],
      ["Freigabe", "Ein Mensch prüft das Paket, bevor Datensatz- und Finance-Updates angewendet werden."],
    ],
    traceRows: [
      ["quelle", "Channel-Nachricht", "Maya bittet Finance AI, die Rechnung zu verarbeiten"],
      ["kontext", "Wissenssuche", "Einkaufsrichtlinie und Schwelle erkannt"],
      ["übergabe", "Inventory Workspace", "Hardwarepositionen an Inventory AI geroutet"],
      ["vorschlag", "Datensatz-Datenbank", "Asset-Zeilen mit fehlenden Feldern entworfen"],
      ["entscheidung", "Freigabepaket", "Controller-Prüfung erforderlich"],
    ],
    stages: [
      ["Vorher", "Anfragen, Nachweise und Updates sind über Chat, Dateien, Tabellen und Tools verteilt."],
      ["Während", "Menschen und AI Coworker teilen einen Thread, ein Work Item und ein Freigabepaket."],
      ["Danach", "Datensätze, Aktionen, Kommentare und Audit-Historie bleiben mit der abgeschlossenen Arbeit verbunden."],
    ],
    operatingPatterns: [
      ["Triage", "Leite unklare Anfragen an den richtigen Workspace und AI Coworker weiter."],
      ["Grounding", "Durchsuche freigegebenes Wissen und verknüpfe Zitate mit der Arbeit."],
      ["Datensatzarbeit", "Entwirf Datenbankänderungen, ohne riskante Updates still anzuwenden."],
      ["Review Gates", "Halte bei Freigabeschwellen an und erhalte menschliche Verantwortlichkeit."],
    ],
  },
} as const;

type SupportCopy = (typeof pageCopy)[keyof typeof pageCopy];

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

function UseCaseBoard({ copy }: { copy: SupportCopy }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0b1117] p-4">
      <div className="grid gap-3 lg:grid-cols-5">
        {copy.steps.map(([title, description], index) => (
          <Card className="border-white/10 bg-[#05080c] text-white" key={title}>
            <CardHeader>
              <Badge variant="outline" className="w-fit border-[var(--primary)]/30 font-mono text-[var(--primary)]">
                {String(index + 1).padStart(2, "0")}
              </Badge>
              <CardTitle className="mt-6 text-lg font-semibold">{title}</CardTitle>
              <CardDescription className="text-xs leading-5 text-[#91a2b8]">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TraceConsole({ copy }: { copy: SupportCopy }) {
  return (
    <Card className="border-white/10 bg-[#0b1117] py-0 text-white">
      <CardHeader className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--primary)]">
              {copy.traceTitle}
            </CardTitle>
            <CardDescription className="mt-2 text-[#8ea0b5]">
              {copy.traceDescription}
            </CardDescription>
          </div>
          <Badge>{copy.approved}</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2 p-4">
        {copy.traceRows.map(([kind, label, detail]) => (
          <div
            className="grid gap-2 rounded-md border border-white/10 bg-[#05080c] p-3 md:grid-cols-[0.22fr_0.26fr_1fr]"
            key={label}
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#60efff]">
              {kind}
            </p>
            <p className="text-sm font-semibold text-white">{label}</p>
            <p className="text-sm leading-6 text-[#91a2b8]">{detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default async function SupportPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);

  return (
    <main className="bg-[#05080c] text-white">
      <section className="relative overflow-hidden border-b border-white/8 py-20 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(96,239,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(96,239,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <Container className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#60efff]">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a4b3c6]">
            {copy.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/products">{copy.primaryCta}</Button>
            <Button className="!border-white/14 !bg-white/[0.03] !text-white hover:!border-[#206ae9]/40 hover:!bg-[#206ae9]/10" href="/contact" variant="secondary">
              {copy.secondaryCta}
            </Button>
          </div>
          <div className="mt-12">
            {useImagegenExperimentVisuals ? (
              <ExperimentVisual
                alt={copy.heroAlt}
                className="aspect-[16/9] lg:-mx-[8vw] lg:w-[calc(100%+16vw)]"
                priority
                src="/images/jobdone-ai/neon-hero-command-console.png"
              />
            ) : (
              <UseCaseBoard copy={copy} />
            )}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid gap-4 md:grid-cols-3">
          {copy.stages.map(([title, description]) => (
            <Card className="border-white/10 bg-[#0b1117] text-white" key={title}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
                <CardDescription className="text-sm leading-6 text-[#91a2b8]">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#080d12] py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--primary)]">
              {copy.patternsEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {copy.patternsTitle}
            </h2>
            <div className="mt-8 grid gap-3">
              {copy.operatingPatterns.map(([title, description]) => (
                <Card className="border-white/10 bg-[#0b1117] text-white" key={title}>
                  <CardHeader>
                    <CardTitle className="text-base font-semibold">{title}</CardTitle>
                    <CardDescription className="text-sm leading-6 text-[#91a2b8]">
                      {description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <TraceConsole copy={copy} />
        </Container>
      </section>
    </main>
  );
}
