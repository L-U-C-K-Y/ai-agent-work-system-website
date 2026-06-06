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
      "The inspectable operating layer for AI Coworkers, AI Automations, and human work.",
    title:
      "The platform where AI Coworkers and AI Automations do accountable work.",
    description:
      "Coordinate shared work channels, rich work cards, knowledge, records, approvals, and evidence in one inspectable operating layer.",
    primaryCta: "Explore the platform",
    secondaryCta: "Request access",
    heroAlt:
      "JobDone AI work graph connecting work cards, AI Coworkers, AI Automations, knowledge, records, approvals, and audit evidence",
    sharedWorkTitle: "Shared rooms for the work people and AI do together.",
    sharedWorkDescription:
      "People and AI Coworkers coordinate in communication rooms built for durable work, not scattered follow-up. Messages become work cards, context stays attached, and every action can open the knowledge or records behind it.",
    sharedWorkCards: [
      ["Work channels", "Coordinate people and AI Coworkers in persistent rooms with threads, mentions, attachments, and linked work."],
      ["Rich work cards", "Turn messages into tracked objects with owners, status, priority, evidence, approvals, and next actions."],
      ["Direct context", "Open the source document, database record, proposed diff, or approval packet from the work itself."],
    ],
    architectureTitle: "One platform layer, seven connected primitives.",
    architectureDescription:
      "The system joins communication, autonomous action, workflow inputs, governed knowledge, structured records, approvals, and evidence.",
    platformSections: [
      {
        id: "work",
        title: "Work",
        description:
          "Work is the durable object that carries context from conversation to completion.",
        items: ["Messages become scoped work cards", "Owners, status, priority, and evidence stay visible", "Work links directly to records, knowledge, approvals, and runs"],
      },
      {
        id: "ai-coworkers",
        title: "AI Coworkers",
        description:
          "Named AI teammates participate in work rooms with roles, tools, memory, and visible progress.",
        items: ["Create and update work autonomously within boundaries", "Save knowledge and cite approved source material", "Read, draft, and update structured business records"],
      },
      {
        id: "ai-automations",
        title: "AI Automations",
        description:
          "Input-driven workflow lanes turn business signals into work with checkpoints and traceable outcomes.",
        items: ["Receive email, forms, files, document drops, APIs, and integration inputs", "Create work and route it to people or AI Coworkers", "Use knowledge, update structured records, and request approvals"],
      },
      {
        id: "knowledge",
        title: "Knowledge",
        description:
          "Approved source material stays available to the work system instead of disappearing into disconnected documents.",
        items: ["Policies, SOPs, templates, and files are searchable", "Citations remain attached to recommendations", "New useful context can be saved back from work"],
      },
      {
        id: "records",
        title: "Records",
        description:
          "Flexible structured databases let agent work move beyond chat into governed operational data.",
        items: ["Schema-backed records model the business objects behind work", "AI Coworkers and AI Automations can draft changes", "Humans can inspect diffs before important updates land"],
      },
      {
        id: "approvals",
        title: "Approvals",
        description:
          "Human decisions sit inside the flow where judgment, risk, or policy requires them.",
        items: ["Approval packets include proposal, reason, evidence, and record impact", "Risky steps pause instead of silently executing", "Decisions stay linked to the work and downstream changes"],
      },
      {
        id: "audit-evidence",
        title: "Audit and evidence",
        description:
          "Every input, action, citation, approval, and output leaves an inspectable trail.",
        items: ["Runtime events stay visible beside the work", "Record changes and knowledge sources remain traceable", "Teams can prove what happened without reconstructing it later"],
      },
    ],
    coworkerTitle: "AI Coworkers act like visible teammates, not hidden scripts.",
    coworkerDescription:
      "They join the same work rooms as people, understand assigned roles, use approved tools, create work, save knowledge, and operate against structured records with their progress visible.",
    automationTitle: "AI Automations turn inputs into governed work.",
    automationDescription:
      "They listen to flexible business inputs, prepare work, gather approved knowledge, write structured record proposals, and stop for approval where policy or risk requires it.",
    runtimeKicker: "Runtime + evidence",
    runtimeTitle: "Every run leaves a trail people can inspect.",
    runtimeDescription:
      "Agent work is not a black box. Messages, tool calls, citations, proposals, approvals, and completed AI Automations stay visible beside the work they affected.",
    runtimeStatus: "Live trace",
    runtimeItems: [
      ["09:41:02", "Message received", "Maya asked about the Atlas invoice and inventory handoff."],
      ["09:41:08", "AI Coworker action", "Finance AI searched policy, vendor records, and the open work room."],
      ["09:41:21", "Record proposal", "Inventory AI drafted five asset records from invoice lines."],
      ["09:41:34", "Approval checkpoint", "Controller review required before records update."],
      ["09:42:11", "AI Automation completed", "Assets staged, evidence attached, and the work card updated."],
    ],
    finalTitle: "A platform for work that has to stay accountable.",
    finalDescription:
      "JobDone AI gives people, AI Coworkers, and AI Automations one shared place to coordinate, decide, update records, and prove what happened.",
    finalCta: "Request access",
  },
  de: {
    metadataTitle: "Plattform",
    metadataDescription:
      "Die inspizierbare operative Ebene für AI Coworker, AI Automatisierungen und menschliche Arbeit.",
    title:
      "Die Plattform, auf der AI Coworker und AI Automatisierungen verantwortliche Arbeit erledigen.",
    description:
      "Koordiniere gemeinsame Arbeitsräume, Rich Work Cards, Wissen, Datensätze, Freigaben und Nachweise in einer inspizierbaren operativen Ebene.",
    primaryCta: "Plattform erkunden",
    secondaryCta: "Zugang anfragen",
    heroAlt:
      "JobDone AI Work Graph verbindet Work Cards, AI Coworker, AI Automatisierungen, Wissen, Datensätze, Freigaben und Audit-Nachweise",
    sharedWorkTitle:
      "Gemeinsame Räume für die Arbeit, die Menschen und AI erledigen.",
    sharedWorkDescription:
      "Menschen und AI Coworker koordinieren sich in Kommunikationsräumen, die für dauerhafte Arbeit gebaut sind. Nachrichten werden zu Work Cards, Kontext bleibt verbunden, und jede Aktion kann das Wissen oder die Datensätze dahinter öffnen.",
    sharedWorkCards: [
      ["Arbeitsräume", "Koordiniere Menschen und AI Coworker in dauerhaften Räumen mit Threads, Erwähnungen, Anhängen und verknüpfter Arbeit."],
      ["Rich Work Cards", "Verwandle Nachrichten in nachverfolgbare Objekte mit Ownern, Status, Priorität, Nachweisen, Freigaben und nächsten Aktionen."],
      ["Direkter Kontext", "Öffne Quelldokumente, Datensätze, vorgeschlagene Diffs oder Freigabepakete direkt aus der Arbeit."],
    ],
    architectureTitle: "Eine Plattformebene, sieben verbundene Bausteine.",
    architectureDescription:
      "Das System verbindet Kommunikation, autonomes Handeln, Workflow-Inputs, gesteuertes Wissen, strukturierte Datensätze, Freigaben und Nachweise.",
    platformSections: [
      {
        id: "work",
        title: "Arbeit",
        description:
          "Arbeit ist das dauerhafte Objekt, das Kontext von der Konversation bis zum Abschluss trägt.",
        items: ["Nachrichten werden zu abgegrenzten Work Cards", "Owner, Status, Priorität und Nachweise bleiben sichtbar", "Arbeit verweist direkt auf Datensätze, Wissen, Freigaben und Läufe"],
      },
      {
        id: "ai-coworkers",
        title: "AI Coworker",
        description:
          "Benannte AI-Teamkollegen nehmen mit Rollen, Tools, Memory und sichtbarem Fortschritt an Arbeitsräumen teil.",
        items: ["Erstellen und aktualisieren Arbeit autonom innerhalb klarer Grenzen", "Speichern Wissen und zitieren freigegebene Quellen", "Lesen, entwerfen und aktualisieren strukturierte Geschäftsdaten"],
      },
      {
        id: "ai-automations",
        title: "AI Automatisierungen",
        description:
          "Input-getriebene Workflow-Lanes verwandeln Geschäftssignale in Arbeit mit Prüfpunkten und nachvollziehbaren Ergebnissen.",
        items: ["Empfangen E-Mails, Formulare, Dateien, Dokumentenablagen, APIs und Integrations-Inputs", "Erstellen Arbeit und routen sie an Menschen oder AI Coworker", "Nutzen Wissen, aktualisieren strukturierte Datensätze und fragen Freigaben an"],
      },
      {
        id: "knowledge",
        title: "Wissen",
        description:
          "Freigegebene Quellen bleiben dem Arbeitssystem verfügbar, statt in getrennten Dokumenten zu verschwinden.",
        items: ["Richtlinien, SOPs, Templates und Dateien sind durchsuchbar", "Zitate bleiben mit Empfehlungen verbunden", "Nützlicher neuer Kontext kann aus der Arbeit zurückgespeichert werden"],
      },
      {
        id: "records",
        title: "Datensätze",
        description:
          "Flexible strukturierte Datenbanken bringen Agentenarbeit über Chat hinaus in gesteuerte operative Daten.",
        items: ["Schema-gestützte Datensätze modellieren Business-Objekte hinter der Arbeit", "AI Coworker und AI Automatisierungen können Änderungen entwerfen", "Menschen können Diffs prüfen, bevor wichtige Updates landen"],
      },
      {
        id: "approvals",
        title: "Freigaben",
        description:
          "Menschliche Entscheidungen sitzen dort im Flow, wo Urteil, Risiko oder Richtlinien es erfordern.",
        items: ["Freigabepakete enthalten Vorschlag, Grund, Nachweis und Datensatzwirkung", "Risikoreiche Schritte pausieren, statt still auszuführen", "Entscheidungen bleiben mit Arbeit und Folgeänderungen verbunden"],
      },
      {
        id: "audit-evidence",
        title: "Audit und Nachweise",
        description:
          "Jeder Input, jede Aktion, jedes Zitat, jede Freigabe und jeder Output hinterlässt eine inspizierbare Spur.",
        items: ["Runtime-Ereignisse bleiben neben der Arbeit sichtbar", "Datensatzänderungen und Wissensquellen bleiben nachvollziehbar", "Teams können belegen, was passiert ist, ohne es später zu rekonstruieren"],
      },
    ],
    coworkerTitle:
      "AI Coworker handeln wie sichtbare Teamkollegen, nicht wie versteckte Skripte.",
    coworkerDescription:
      "Sie arbeiten in denselben Räumen wie Menschen, verstehen zugewiesene Rollen, nutzen freigegebene Tools, erstellen Arbeit, speichern Wissen und handeln mit strukturierten Datensätzen bei sichtbarem Fortschritt.",
    automationTitle: "AI Automatisierungen verwandeln Inputs in gesteuerte Arbeit.",
    automationDescription:
      "Sie hören auf flexible Geschäftsinputs, bereiten Arbeit vor, sammeln freigegebenes Wissen, schreiben strukturierte Datensatzvorschläge und stoppen dort für Freigaben, wo Richtlinie oder Risiko es erfordern.",
    runtimeKicker: "Runtime + Nachweise",
    runtimeTitle: "Jeder Lauf hinterlässt eine Spur, die Menschen prüfen können.",
    runtimeDescription:
      "Agentenarbeit ist keine Black Box. Nachrichten, Tool Calls, Zitate, Vorschläge, Freigaben und abgeschlossene AI Automatisierungen bleiben neben der betroffenen Arbeit sichtbar.",
    runtimeStatus: "Live Trace",
    runtimeItems: [
      ["09:41:02", "Nachricht erhalten", "Maya fragt nach Atlas-Rechnung und Inventory-Übergabe."],
      ["09:41:08", "AI Coworker Aktion", "Finance AI durchsucht Richtlinien, Lieferantendatensätze und den offenen Arbeitsraum."],
      ["09:41:21", "Datensatzvorschlag", "Inventory AI entwirft fünf Asset-Datensätze aus Rechnungspositionen."],
      ["09:41:34", "Freigabeprüfung", "Controller-Prüfung vor Datensatzupdate erforderlich."],
      ["09:42:11", "AI Automatisierung abgeschlossen", "Assets vorbereitet, Nachweise verbunden und Work Card aktualisiert."],
    ],
    finalTitle: "Eine Plattform für Arbeit, die nachvollziehbar bleiben muss.",
    finalDescription:
      "JobDone AI gibt Menschen, AI Coworkern und AI Automatisierungen einen gemeinsamen Ort, um zu koordinieren, zu entscheiden, Datensätze zu aktualisieren und nachzuweisen, was passiert ist.",
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

function SharedWorkSection({ copy }: { copy: PlatformCopy }) {
  return (
    <section
      className="relative overflow-hidden border-b border-white/8 bg-[#05080c] py-20 md:py-24"
      id="work"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {copy.sharedWorkTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#9aabbf]">
            {copy.sharedWorkDescription}
          </p>
          <div className="mt-8 grid gap-3">
            {copy.sharedWorkCards.map(([title, description], index) => (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4"
                key={title}
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md border border-[#2f6fff]/35 bg-[#206ae9]/10 font-mono text-xs text-[#8fb5ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#9aabbf]">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="relative min-w-0">
          <ExperimentVisual
            alt=""
            className="aspect-[16/10] border-0 shadow-none"
            imageClassName="object-contain"
            src="/images/jobdone-ai/neon-workspace-rooms.png"
            variant="blend"
          />
        </div>
      </Container>
    </section>
  );
}

function PlatformArchitecture({ copy }: { copy: PlatformCopy }) {
  return (
    <section className="relative overflow-hidden bg-[#030609] py-20 md:py-24">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_50%_0%,rgba(32,106,233,0.18),transparent_62%)]" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {copy.architectureTitle}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#9aabbf]">
            {copy.architectureDescription}
          </p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-7">
          {copy.platformSections.map((section, index) => (
            <article
              className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(13,24,37,0.82),rgba(6,10,15,0.92))] p-5 lg:col-span-1"
              id={section.id}
              key={section.id}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#206ae9,transparent)]" />
              <p className="font-mono text-xs text-[#60efff]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-7 text-xl font-semibold text-white">
                {section.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#9aabbf]">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DeepDiveSection({ copy }: { copy: PlatformCopy }) {
  const [coworkers, automations] = copy.platformSections.slice(1, 3);
  const cards = [
    {
      title: copy.coworkerTitle,
      description: copy.coworkerDescription,
      section: coworkers,
    },
    {
      title: copy.automationTitle,
      description: copy.automationDescription,
      section: automations,
    },
  ];

  return (
    <section className="border-y border-white/8 bg-[#080d12] py-20 md:py-24">
      <Container>
        <div className="grid gap-4 lg:grid-cols-2">
          {cards.map(({ title, description, section }) => (
            <Card
              className="relative overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(12,22,34,0.92),rgba(5,8,12,0.94))] py-0 text-white"
              key={section.id}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#60efff,transparent)]" />
              <CardHeader className="p-6 md:p-8">
                <Badge
                  className="w-fit border-[#206ae9]/35 bg-[#206ae9]/10 font-mono text-[#c8d8ff]"
                  variant="outline"
                >
                  {section.title}
                </Badge>
                <CardTitle className="mt-8 text-2xl font-semibold tracking-tight md:text-4xl">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 md:p-8 md:pt-0">
                <p className="text-base leading-7 text-[#a4b3c6]">
                  {description}
                </p>
                <div className="mt-8 grid gap-3">
                  {section.items.map((item) => (
                    <div
                      className="rounded-md border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-[#d7e7ff]"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function KnowledgeRecordsSection({ copy }: { copy: PlatformCopy }) {
  const sections = copy.platformSections.slice(3, 5);

  return (
    <section className="relative overflow-hidden bg-[#05080c] py-20 md:py-24">
      <div className="absolute inset-0 opacity-55">
        <ExperimentVisual
          alt=""
          className="h-full rounded-none border-0 opacity-70 shadow-none"
          src="/images/jobdone-ai/neon-abstract-glass-primitives.png"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#05080c_0%,rgba(5,8,12,0.88)_44%,rgba(5,8,12,0.54)_100%)]" />
      <Container className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Knowledge and records become the memory of the work system.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#9aabbf]">
            AI Coworkers and AI Automations can use approved source material,
            then save useful context and structured data back into governed
            systems of record.
          </p>
        </div>
        <div className="grid gap-4">
          {sections.map((section) => (
            <article
              className="rounded-lg border border-white/10 bg-[#0b1117]/86 p-5 backdrop-blur-md"
              key={section.id}
            >
              <h3 className="text-xl font-semibold text-white">
                {section.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#9aabbf]">
                {section.description}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {section.items.map((item) => (
                  <span
                    className="rounded-md border border-[#206ae9]/20 bg-[#206ae9]/8 p-3 text-xs leading-5 text-[#c8d8ff]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RuntimeEvidencePanel({ copy }: { copy: PlatformCopy }) {
  return (
    <Card
      className="border-white/10 bg-[linear-gradient(180deg,rgba(12,22,34,0.9),rgba(5,8,12,0.92))] py-0 text-white shadow-[0_28px_90px_rgba(0,0,0,0.3)]"
      id="audit-evidence"
    >
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
                <p className="mt-1 text-sm leading-6 text-[#9aabbf]">
                  {detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function GovernanceEvidenceSection({ copy }: { copy: PlatformCopy }) {
  const sections = copy.platformSections.slice(5, 7);

  return (
    <section className="bg-[#030609] py-20 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            {copy.runtimeTitle}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#9aabbf]">
            {copy.runtimeDescription}
          </p>
          <div className="mt-8 grid gap-3">
            {sections.map((section) => (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4"
                id={section.id}
                key={section.id}
              >
                <h3 className="text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#9aabbf]">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </div>
        <RuntimeEvidencePanel copy={copy} />
      </Container>
    </section>
  );
}

function FinalCta({ copy }: { copy: PlatformCopy }) {
  return (
    <section className="bg-[#030609] pb-16 md:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-[#206ae9]/24 bg-[linear-gradient(135deg,rgba(32,106,233,0.22),rgba(8,13,18,0.82)_34%,rgba(5,8,12,0.94))] p-8 md:p-12">
          <div className="absolute inset-y-0 right-0 hidden w-[60%] bg-[url('/images/jobdone-ai/neon-abstract-glass-primitives.png')] bg-cover bg-center opacity-45 md:block" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1117_0%,rgba(11,17,23,0.88)_34%,rgba(11,17,23,0.28)_76%,transparent_100%)]" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {copy.finalTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#a4b3c6]">
              {copy.finalDescription}
            </p>
            <div className="mt-8">
              <Button href="/contact">{copy.finalCta}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
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
        <Container className="relative grid min-w-0 gap-12 py-16 md:min-h-[680px] md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative z-10 min-w-0">
            <h1 className="max-w-full text-[clamp(2.25rem,8.6vw,4.25rem)] font-semibold leading-[0.98] tracking-tight md:max-w-3xl md:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-full text-base leading-7 text-[#a4b3c6] md:max-w-xl md:text-lg md:leading-8">
              {copy.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#work">{copy.primaryCta}</Button>
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
            className="aspect-[16/9] min-w-0 border-0 shadow-none lg:-mr-[18vw] lg:w-[calc(100%+18vw)]"
            imageClassName="object-contain"
            priority
            src="/images/jobdone-ai/neon-work-card-graph.png"
            variant="blend"
          />
        </Container>
      </section>

      <SharedWorkSection copy={copy} />
      <PlatformArchitecture copy={copy} />
      <DeepDiveSection copy={copy} />
      <KnowledgeRecordsSection copy={copy} />
      <GovernanceEvidenceSection copy={copy} />
      <FinalCta copy={copy} />
    </main>
  );
}
