import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ExperimentVisual } from "@/components/experiment-visual";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const pageCopy = {
  en: {
    metadataTitle: "Platform",
    metadataDescription:
      "The inspectable operating layer for human and AI agent work.",
    title: "The platform where AI agents become accountable coworkers.",
    description:
      "Connect work, knowledge, records, approvals, and automations in one inspectable operating layer.",
    primaryCta: "Explore the platform",
    secondaryCta: "Request access",
    heroAlt:
      "JobDone AI work graph connecting work cards, AI coworkers, automations, knowledge, records, approvals, and audit evidence",
    layerKicker: "The platform layer",
    layerTitle: "One operating layer for human and agent teams.",
    layerDescription:
      "Every conversation, work card, automation, record change, approval, and evidence trail resolves into one graph.",
    layers: [
      ["Work", "Conversations turn into rich work cards with context, owners, status, and next steps."],
      ["AI coworkers", "Named AI teammates operate with roles, memory, tools, and visible runtime state."],
      ["Automations", "Repeatable handoffs run in the background with checkpoints that keep people in control."],
      ["Knowledge", "Approved documents, citations, and context packages stay attached to each action."],
      ["Records", "Governed databases are read, drafted, updated, and traced back to the work."],
      ["Approvals", "Policy checks and human decisions sit directly inside the workflow."],
      ["Audit and evidence", "Inputs, outputs, approvals, attachments, and system events remain inspectable."],
    ],
    runtimeKicker: "Runtime + evidence",
    runtimeTitle: "Every run leaves a trail people can inspect.",
    runtimeDescription:
      "Agent work is not a hidden script. Messages, tool calls, citations, proposals, approvals, and completed automations stay visible beside the work they affected.",
    runtimeStatus: "Live trace",
    runtimeItems: [
      ["09:41:02", "Message received", "Maya asked about the Atlas invoice and inventory handoff."],
      ["09:41:08", "Agent action", "Finance AI searched policy and vendor records."],
      ["09:41:21", "Record proposal", "Inventory AI drafted five asset records from invoice lines."],
      ["09:41:34", "Approval checkpoint", "Controller review required before records update."],
      ["09:42:11", "Automation completed", "Assets staged and linked to the work card."],
    ],
    finalTitle: "A platform for work that has to stay accountable.",
    finalDescription:
      "JobDone AI gives people and agents one shared place to coordinate, decide, update records, and prove what happened.",
    finalCta: "Request access",
  },
  de: {
    metadataTitle: "Plattform",
    metadataDescription:
      "Die inspizierbare operative Ebene für Arbeit von Menschen und KI-Agenten.",
    title: "Die Plattform, auf der KI-Agenten zu verantwortlichen Coworkern werden.",
    description:
      "Verbinde Arbeit, Wissen, Datensätze, Freigaben und Automatisierungen in einer inspizierbaren operativen Ebene.",
    primaryCta: "Plattform erkunden",
    secondaryCta: "Zugang anfragen",
    heroAlt:
      "JobDone AI Work Graph verbindet Work Cards, AI Coworker, Automatisierungen, Wissen, Datensätze, Freigaben und Audit-Nachweise",
    layerKicker: "Die Plattformebene",
    layerTitle: "Eine operative Ebene für Menschen- und Agententeams.",
    layerDescription:
      "Jede Konversation, Work Card, Automatisierung, Datensatzänderung, Freigabe und Nachweisspur löst sich in einem Graphen auf.",
    layers: [
      ["Arbeit", "Konversationen werden zu Rich Work Cards mit Kontext, Ownern, Status und nächsten Schritten."],
      ["AI Coworker", "Benannte KI-Teamkollegen arbeiten mit Rollen, Memory, Tools und sichtbarem Runtime-Status."],
      ["Automatisierungen", "Wiederholbare Übergaben laufen im Hintergrund mit Prüfpunkten, die Menschen in Kontrolle halten."],
      ["Wissen", "Freigegebene Dokumente, Zitate und Kontextpakete bleiben mit jeder Aktion verbunden."],
      ["Datensätze", "Gesteuerte Datenbanken werden gelesen, entworfen, aktualisiert und zur Arbeit zurückverfolgt."],
      ["Freigaben", "Policy Checks und menschliche Entscheidungen sitzen direkt im Workflow."],
      ["Audit und Nachweise", "Inputs, Outputs, Freigaben, Anhänge und Systemereignisse bleiben inspizierbar."],
    ],
    runtimeKicker: "Runtime + Nachweise",
    runtimeTitle: "Jeder Lauf hinterlässt eine Spur, die Menschen prüfen können.",
    runtimeDescription:
      "Agentenarbeit ist kein verborgenes Skript. Nachrichten, Tool Calls, Zitate, Vorschläge, Freigaben und abgeschlossene Automatisierungen bleiben neben der betroffenen Arbeit sichtbar.",
    runtimeStatus: "Live Trace",
    runtimeItems: [
      ["09:41:02", "Nachricht erhalten", "Maya fragt nach Atlas-Rechnung und Inventory-Übergabe."],
      ["09:41:08", "Agentenaktion", "Finance AI durchsucht Richtlinien und Lieferantendatensätze."],
      ["09:41:21", "Datensatzvorschlag", "Inventory AI entwirft fünf Asset-Datensätze aus Rechnungspositionen."],
      ["09:41:34", "Freigabeprüfung", "Controller-Prüfung vor Datensatzupdate erforderlich."],
      ["09:42:11", "Automatisierung abgeschlossen", "Assets vorbereitet und mit der Work Card verbunden."],
    ],
    finalTitle: "Eine Plattform für Arbeit, die nachvollziehbar bleiben muss.",
    finalDescription:
      "JobDone AI gibt Menschen und Agenten einen gemeinsamen Ort, um zu koordinieren, zu entscheiden, Datensätze zu aktualisieren und nachzuweisen, was passiert ist.",
    finalCta: "Zugang anfragen",
  },
} as const;

type PlatformCopy = (typeof pageCopy)[keyof typeof pageCopy];

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

function PlatformLayerRail({ copy }: { copy: PlatformCopy }) {
  return (
    <div className="grid gap-3">
      {copy.layers.map(([title, description], index) => (
        <article
          className="group relative overflow-hidden rounded-lg border border-[#1d3659] bg-[linear-gradient(180deg,rgba(20,37,58,0.74),rgba(7,13,20,0.86))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          key={title}
        >
          <div className="absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(circle_at_100%_50%,rgba(32,106,233,0.18),transparent_52%)] opacity-80" />
          <div className="relative grid gap-3">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-md border border-[#2d66d5]/40 bg-[#206ae9]/12 font-mono text-xs text-[#8fb5ff]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="text-sm leading-6 text-[#a4b3c6]">{description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function RuntimeEvidencePanel({ copy }: { copy: PlatformCopy }) {
  return (
    <Card className="border-white/10 bg-[linear-gradient(180deg,rgba(12,22,34,0.9),rgba(5,8,12,0.92))] py-0 text-white shadow-[0_28px_90px_rgba(0,0,0,0.3)]">
      <CardHeader className="border-b border-white/10 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--primary)]">
              {copy.runtimeKicker}
            </p>
            <CardTitle className="mt-3 text-xl font-semibold">
              {copy.runtimeStatus}
            </CardTitle>
          </div>
          <Badge
            className="border-[#21d07a]/25 bg-[#21d07a]/10 text-[#9ff5bd]"
            variant="outline"
          >
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <div className="relative grid gap-4">
          <span className="absolute bottom-4 left-[4.35rem] top-4 w-px bg-[linear-gradient(180deg,transparent,#206ae9,transparent)]" />
          {copy.runtimeItems.map(([time, title, detail], index) => (
            <article
              className="relative grid grid-cols-[3.8rem_2rem_1fr] gap-3"
              key={`${time}-${title}`}
            >
              <time className="pt-3 font-mono text-xs text-[#8ea0b5]">
                {time}
              </time>
              <span className="relative z-10 mt-2 grid size-8 place-items-center rounded-full border border-[#2f6fff]/45 bg-[#091522] font-mono text-[0.62rem] text-[#8fb5ff] shadow-[0_0_28px_rgba(32,106,233,0.28)]">
                {index + 1}
              </span>
              <div className="rounded-lg border border-white/10 bg-[#081019]/86 p-4">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#9aabbf]">{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default async function PlatformPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);

  return (
    <main className="bg-[#030609] text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-[#030609]">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,#05080c)]" />
        <Container className="relative grid min-w-0 gap-12 py-16 md:min-h-[620px] md:py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative z-10 min-w-0">
            <h1 className="max-w-full text-[clamp(2.3rem,9.5vw,3.75rem)] font-semibold leading-[0.98] tracking-tight md:max-w-3xl md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-full text-base leading-7 text-[#a4b3c6] md:max-w-xl md:text-lg md:leading-8">
              {copy.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#platform-layer">{copy.primaryCta}</Button>
              <Button
                className="!border-white/14 !bg-white/[0.025] !text-white hover:!border-[#206ae9]/40 hover:!bg-[#206ae9]/10"
                href="/contact"
                variant="secondary"
              >
                {copy.secondaryCta}
              </Button>
            </div>
          </div>
          <ExperimentVisual
            alt={copy.heroAlt}
            className="aspect-[16/9] min-w-0 lg:-mr-[16vw] lg:w-[calc(100%+16vw)]"
            imageClassName="object-contain"
            priority
            src="/images/jobdone-ai/neon-work-card-graph.png"
            variant="blend"
          />
        </Container>
      </section>

      <section
        className="relative overflow-hidden border-b border-white/8 bg-[#05080c] py-20 md:py-24"
        id="platform-layer"
      >
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_50%_100%,rgba(32,106,233,0.18),transparent_60%)]" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--primary)]">
              {copy.layerKicker}
            </p>
            <h2 className="mt-5 max-w-full text-[clamp(2.15rem,9vw,3.75rem)] font-semibold leading-tight tracking-tight md:max-w-3xl md:text-6xl">
              {copy.layerTitle}
            </h2>
            <p className="mt-5 max-w-full text-base leading-7 text-[#9aabbf] md:max-w-2xl">
              {copy.layerDescription}
            </p>
            <div className="mt-10">
              <PlatformLayerRail copy={copy} />
            </div>
          </div>
          <RuntimeEvidencePanel copy={copy} />
        </Container>
      </section>

      <section className="bg-[#030609] py-16 md:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-[#206ae9]/20 bg-[linear-gradient(135deg,rgba(32,106,233,0.16),rgba(8,13,18,0.82)_36%,rgba(5,8,12,0.94))] p-8 md:p-12">
            <div className="absolute inset-y-0 right-0 hidden w-[58%] bg-[url('/images/jobdone-ai/neon-abstract-glass-primitives.png')] bg-cover bg-center opacity-34 md:block" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1117_0%,rgba(11,17,23,0.9)_33%,rgba(11,17,23,0.35)_70%,transparent_100%)]" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                {copy.finalTitle}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#9aabbf]">
                {copy.finalDescription}
              </p>
              <div className="mt-8">
                <Button href="/contact">{copy.finalCta}</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
