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
    metadataTitle: "Platform",
    metadataDescription: "The collaborative operating layer for humans and AI agents.",
    eyebrow: "Platform",
    title: "The work graph behind every agent action.",
    description:
      "JobDone AI connects coworking, work objects, AI runtime, governed knowledge, record databases, approvals, and evidence into one operating layer.",
    primaryCta: "See it in motion",
    secondaryCta: "Request access",
    heroAlt:
      "JobDone AI technical work card graph connecting message, AI coworker, knowledge, records, approval, and automation modules",
    whyEyebrow: "Why it matters",
    whyTitle: "Agents are coworkers, not disconnected scripts.",
    primitivesEyebrow: "Connected primitives",
    primitivesTitle: "The system is inspectable like infrastructure.",
    runtimeEyebrow: "Agent runtime",
    runtimeTitle: "Every run leaves evidence people can inspect.",
    runtimeDescription:
      "Agents do not disappear into a black box. Their inputs, tools, citations, proposals, approvals, and outputs remain visible in the workspace.",
    runtimeTraceTitle: "Runtime trace",
    runtimeTraceDescription: "Every agent action stays attached to the work graph.",
    live: "live",
    graphObject: "graph object",
    graphTitle:
      "One object links the conversation, decision, data, and audit trail.",
    graphDescription:
      "The work graph makes agent collaboration visible as a concrete system of channels, data, approvals, and evidence.",
    whyCards: [
      ["Visible", "People see what agents are doing, what they need, and what they changed."],
      ["Contextual", "Knowledge citations and database rows are directly attached to the work."],
      ["Governed", "Tools, records, approvals, and audit define what agents can do."],
    ],
    layers: [
      ["Collaboration", "Channels, messages, mentions, threads, pins, attachments"],
      ["Work engine", "Work cards, boards, status, owners, priorities, SLAs"],
      ["AI coworkers", "Agent identity, runtime sessions, skills, tools, memory"],
      ["Knowledge", "Approved documents, search, fetch, citations, review state"],
      ["Records", "Databases, schemas, search, record proposals, approved updates"],
      ["Governance", "Approvals, scoped permissions, evidence, audit, metrics"],
    ],
    runtimeEvents: [
      ["message.created", "Finance channel", "human request captured"],
      ["agent.run", "Finance AI", "policy + vendor context fetched"],
      ["record.proposal", "Asset database", "5 draft rows linked"],
      ["approval.waiting", "Controller", "human checkpoint required"],
    ],
    graphNodes: [
      ["Channel", "#finance"],
      ["Work card", "JD-1842"],
      ["Knowledge", "policy v4"],
      ["Records", "5 drafts"],
      ["Approval", "controller"],
    ],
  },
  de: {
    metadataTitle: "Plattform",
    metadataDescription: "Die kollaborative operative Ebene für Menschen und KI-Agenten.",
    eyebrow: "Plattform",
    title: "Der Work Graph hinter jeder Agentenaktion.",
    description:
      "JobDone AI verbindet Coworking, Arbeitsobjekte, KI-Runtime, gesteuertes Wissen, Datensatz-Datenbanken, Freigaben und Nachweise in einer operativen Ebene.",
    primaryCta: "In Aktion sehen",
    secondaryCta: "Zugang anfragen",
    heroAlt:
      "Technischer JobDone AI Work-Card-Graph mit Nachricht, AI Coworker, Wissen, Datensätzen, Freigabe und Automatisierungsmodulen",
    whyEyebrow: "Warum es zählt",
    whyTitle: "Agenten sind Coworker, keine losgelösten Skripte.",
    primitivesEyebrow: "Verbundene Bausteine",
    primitivesTitle: "Das System ist inspizierbar wie Infrastruktur.",
    runtimeEyebrow: "Agent Runtime",
    runtimeTitle: "Jeder Lauf hinterlässt Nachweise, die Menschen prüfen können.",
    runtimeDescription:
      "Agenten verschwinden nicht in einer Black Box. Ihre Inputs, Tools, Zitate, Vorschläge, Freigaben und Outputs bleiben im Workspace sichtbar.",
    runtimeTraceTitle: "Runtime Trace",
    runtimeTraceDescription: "Jede Agentenaktion bleibt mit dem Work Graph verbunden.",
    live: "live",
    graphObject: "Graph-Objekt",
    graphTitle:
      "Ein Objekt verbindet Konversation, Entscheidung, Daten und Audit-Trail.",
    graphDescription:
      "Der Work Graph macht Agentenkollaboration als konkretes System aus Channels, Daten, Freigaben und Nachweisen sichtbar.",
    whyCards: [
      ["Sichtbar", "Menschen sehen, was Agenten tun, was sie brauchen und was sie geändert haben."],
      ["Kontextuell", "Wissenszitate und Datenbankzeilen sind direkt mit der Arbeit verbunden."],
      ["Gesteuert", "Tools, Datensätze, Freigaben und Audit definieren, was Agenten tun können."],
    ],
    layers: [
      ["Kollaboration", "Channels, Nachrichten, Mentions, Threads, Pins, Anhänge"],
      ["Work Engine", "Work Cards, Boards, Status, Owner, Prioritäten, SLAs"],
      ["AI Coworker", "Agentenidentität, Runtime-Sessions, Skills, Tools, Memory"],
      ["Wissen", "Freigegebene Dokumente, Suche, Abruf, Zitate, Review-Status"],
      ["Datensätze", "Datenbanken, Schemas, Suche, Datensatzvorschläge, freigegebene Updates"],
      ["Governance", "Freigaben, begrenzte Berechtigungen, Nachweise, Audit, Metriken"],
    ],
    runtimeEvents: [
      ["message.created", "Finance Channel", "menschliche Anfrage erfasst"],
      ["agent.run", "Finance AI", "Richtlinien- und Lieferantenkontext abgerufen"],
      ["record.proposal", "Asset-Datenbank", "5 Entwurfszeilen verknüpft"],
      ["approval.waiting", "Controller", "menschlicher Prüfpunkt erforderlich"],
    ],
    graphNodes: [
      ["Channel", "#finance"],
      ["Work Card", "JD-1842"],
      ["Wissen", "Richtlinie v4"],
      ["Datensätze", "5 Entwürfe"],
      ["Freigabe", "Controller"],
    ],
  },
} as const;

type VisionCopy = (typeof pageCopy)[keyof typeof pageCopy];

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

function ArchitectureGraphic({ copy }: { copy: VisionCopy }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0b1117] p-4">
      <div className="grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10">
        {copy.layers.map(([title, description], index) => (
          <div
            className="grid gap-3 bg-[#05080c] p-4 md:grid-cols-[0.32fr_1fr_0.18fr] md:items-center"
            key={title}
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#206ae9]">
              {title}
            </p>
            <p className="text-sm leading-6 text-[#a4b3c6]">{description}</p>
            <div className="hidden h-px bg-[linear-gradient(90deg,#60efff,transparent)] md:block" />
            {index < copy.layers.length - 1 && (
              <span className="mx-auto hidden h-5 w-px bg-[#206ae9]/40 md:col-start-2 md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RuntimeTraceGraphic({ copy }: { copy: VisionCopy }) {
  return (
    <Card className="border-white/10 bg-[#0b1117] py-0 text-white">
      <CardHeader className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--primary)]">
              {copy.runtimeTraceTitle}
            </CardTitle>
            <CardDescription className="mt-2 text-[#8ea0b5]">
              {copy.runtimeTraceDescription}
            </CardDescription>
          </div>
          <Badge variant="outline" className="border-[var(--primary)]/35 text-[var(--primary)]">
            {copy.live}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 p-4">
        {copy.runtimeEvents.map(([event, source, detail], index) => (
          <div
            className="grid gap-3 rounded-md border border-white/10 bg-[#05080c] p-3 md:grid-cols-[0.16fr_0.34fr_1fr]"
            key={event}
          >
            <span className="font-mono text-xs text-[var(--primary)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-[#60efff]">{event}</span>
            <span className="text-sm text-[#a4b3c6]">
              <strong className="font-semibold text-white">{source}</strong> · {detail}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function WorkGraphPanel({ copy }: { copy: VisionCopy }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
      <Card className="border-white/10 bg-[#0b1117] py-0 text-white">
        <CardHeader className="p-5">
          <Badge className="w-fit font-mono uppercase tracking-[0.18em]">
            {copy.graphObject}
          </Badge>
          <CardTitle className="mt-4 text-2xl font-semibold">
            {copy.graphTitle}
          </CardTitle>
          <CardDescription className="text-[#91a2b8]">
            {copy.graphDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-5 pb-5">
          <div className="rounded-md border border-white/10 bg-[#05080c] p-4 font-mono text-xs leading-6 text-[#8ea0b5]">
            <p className="text-[var(--primary)]">work_card JD-1842</p>
            <p>{`{`}</p>
            <p className="pl-4">{'channel: "#finance",'}</p>
            <p className="pl-4">{'agent: "Finance AI",'}</p>
            <p className="pl-4">{'knowledge: ["purchasing-policy:v4"],'}</p>
            <p className="pl-4">{'records: ["asset-db:draft-rows"],'}</p>
            <p className="pl-4">{'approval: "controller.required"'}</p>
            <p>{`}`}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="border-white/10 bg-[#0b1117] py-0 text-white">
        <CardContent className="p-5">
          <div className="grid gap-3">
            {copy.graphNodes.map(([label, value], index) => (
              <div
                className="relative rounded-lg border border-white/10 bg-[#05080c] p-4"
                key={label}
              >
                {index > 0 && (
                  <span className="absolute -top-3 left-8 h-3 w-px bg-[var(--primary)]/50" />
                )}
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--primary)]">
                  {label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default async function VisionPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);

  return (
    <main className="bg-[#05080c] text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-[#030609] py-20 md:py-28">
        <Container className="relative grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
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
              <Button href="/support">{copy.primaryCta}</Button>
              <Button className="!border-white/14 !bg-white/[0.03] !text-white hover:!border-[#206ae9]/40 hover:!bg-[#206ae9]/10" href="/contact" variant="secondary">
                {copy.secondaryCta}
              </Button>
            </div>
          </div>
          {useImagegenExperimentVisuals ? (
            <ExperimentVisual
              alt={copy.heroAlt}
              className="aspect-[16/9] lg:-mr-[18vw] lg:w-[calc(100%+18vw)]"
              priority
              src="/images/jobdone-ai/experiments/neon-work-card-graph.png"
            />
          ) : (
            <ArchitectureGraphic copy={copy} />
          )}
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#60efff]">
              {copy.whyEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {copy.whyTitle}
            </h2>
          </div>
          <div className="grid gap-4">
            {copy.whyCards.map(([title, description]) => (
              <Card className="border-white/10 bg-[#0b1117] text-white" key={title}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{title}</CardTitle>
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
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--primary)]">
              {copy.primitivesEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {copy.primitivesTitle}
            </h2>
          </div>
          <WorkGraphPanel copy={copy} />
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#60efff]">
              {copy.runtimeEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {copy.runtimeTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#91a2b8]">
              {copy.runtimeDescription}
            </p>
          </div>
          <RuntimeTraceGraphic copy={copy} />
        </Container>
      </section>
    </main>
  );
}
