import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ExperimentVisual } from "@/components/experiment-visual";
import { ProductVideoVisual } from "@/components/product-video-visual";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const pageCopy = {
  en: {
    metadataTitle: "Platform",
    metadataDescription:
      "A workspace where people can see, review, and guide AI-assisted work.",
    title:
      "The platform where AI Coworkers and AI Automations do accountable work.",
    description:
      "Messages, tasks, company knowledge, approvals, and record updates stay connected in one place.",
    primaryCta: "Explore the platform",
    secondaryCta: "Request access",
    heroAlt:
      "JobDone AI platform connecting work cards, AI Coworkers, AI Automations, knowledge, records, approvals, and audit evidence",
    sharedWorkTitle: "Shared rooms for the work people and AI do together.",
    sharedWorkDescription:
      "People and AI Coworkers coordinate in communication rooms built for durable work, not scattered follow-up. Messages become work cards, context stays attached, and every action can open the knowledge or records behind it.",
    sharedWorkCards: [
      ["Work channels", "Coordinate people and AI Coworkers in persistent rooms with threads, mentions, attachments, and linked work."],
      ["Work cards", "Turn messages into tracked work with owners, status, context, approvals, and next actions."],
      ["Direct context", "Open the source document, database record, proposed diff, or approval packet from the work itself."],
    ],
    architectureTitle: "Everything needed to move work from request to completion.",
    architectureDescription:
      "Messages, tasks, company knowledge, approvals, and record updates stay connected in one place.",
    knowledgeRecordsTitle:
      "Knowledge and records become the memory of the work system.",
    knowledgeRecordsDescription:
      "AI Coworkers and AI Automations can use approved source material, then save useful context and structured data back into governed systems of record.",
    visualLabels: {
      room: "work room",
      financeRoom: "# finance",
      message: "message",
      handoff: "Atlas invoice handoff",
      workCard: "work card",
      createRecords: "Create asset records",
      knowledge: "knowledge",
      record: "record",
      approval: "approval",
      evidence: "evidence",
      traceAttached: "Evidence attached",
      role: "role",
      tools: "tools",
      memory: "memory",
      status: "status",
      visible: "visible",
      email: "email",
      form: "form",
      file: "file",
      api: "API",
      receive: "receive",
      create: "create",
      search: "search",
      draft: "draft",
      review: "review",
      coworker: "AI Coworker",
      automation: "AI Automation",
      input: "input",
      runtime: "activity",
      accountable: "Accountable work object",
      objectDetail: "context, owner, status, sources, approvals, output",
      policy: "Policy v4",
      vendor: "Vendor terms",
      sop: "Inventory SOP",
      assets: "Asset database",
      vendorTable: "Vendor table",
      approvalLog: "Approval log",
      saved: "saved",
      proposed: "proposed",
      cited: "cited",
      routed: "routed",
    },
    platformSections: [
      {
        id: "work",
        title: "Work",
        description:
          "Work carries context from the first conversation to completion.",
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
          "Incoming business signals become work with checkpoints and traceable outcomes.",
        items: ["Receive email, forms, files, document drops, APIs, and integration events", "Create work and route it to people or AI Coworkers", "Use knowledge, update structured records, and request approvals"],
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
          "Every request, action, citation, approval, and output leaves an inspectable trail.",
        items: ["AI activity stays visible beside the work", "Record changes and knowledge sources remain traceable", "Teams can prove what happened without reconstructing it later"],
      },
    ],
    coworkerTitle: "AI Coworkers act like visible teammates, not hidden scripts.",
    coworkerDescription:
      "They join the same work rooms as people, understand assigned roles, use approved tools, create work, save knowledge, and operate against structured records with their progress visible.",
    automationTitle: "AI Automations turn incoming requests into governed work.",
    automationDescription:
      "They listen for business signals, prepare work, gather approved knowledge, write structured record proposals, and stop for approval where policy or risk requires it.",
    runtimeKicker: "Activity + evidence",
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
      "Ein Arbeitsbereich, in dem Menschen AI-gestützte Arbeit sehen, prüfen und steuern können.",
    title:
      "Die Plattform, auf der AI Coworker und AI-Automatisierungen verantwortliche Arbeit erledigen.",
    description:
      "Nachrichten, Aufgaben, Unternehmenswissen, Freigaben und Datensatzänderungen bleiben an einem Ort verbunden.",
    primaryCta: "Plattform erkunden",
    secondaryCta: "Zugang anfragen",
    heroAlt:
      "JobDone AI Plattform verbindet Work Cards, AI Coworker, AI-Automatisierungen, Wissen, Datensätze, Freigaben und Audit-Nachweise",
    sharedWorkTitle:
      "Gemeinsame Räume für die Arbeit, die Menschen und AI erledigen.",
    sharedWorkDescription:
      "Menschen und AI Coworker koordinieren sich in Kommunikationsräumen, die für dauerhafte Arbeit gebaut sind. Nachrichten werden zu Work Cards, Kontext bleibt verbunden, und jede Aktion kann das Wissen oder die Datensätze dahinter öffnen.",
    sharedWorkCards: [
      ["Arbeitsräume", "Koordiniere Menschen und AI Coworker in dauerhaften Räumen mit Threads, Erwähnungen, Anhängen und verknüpfter Arbeit."],
      ["Work Cards", "Verwandle Nachrichten in nachverfolgbare Arbeit mit Owner, Status, Kontext, Freigaben und nächsten Aktionen."],
      ["Direkter Kontext", "Öffne Quelldokumente, Datensätze, vorgeschlagene Diffs oder Freigabepakete direkt aus der Arbeit."],
    ],
    architectureTitle: "Alles, was Arbeit von der Anfrage bis zum Abschluss braucht.",
    architectureDescription:
      "Nachrichten, Aufgaben, Unternehmenswissen, Freigaben und Datensatzänderungen bleiben an einem Ort verbunden.",
    knowledgeRecordsTitle:
      "Wissen und Datensätze werden zum Gedächtnis des Arbeitssystems.",
    knowledgeRecordsDescription:
      "AI Coworker und AI-Automatisierungen können freigegebene Quellen nutzen und nützlichen Kontext sowie strukturierte Daten in gesteuerte Systeme zurückspeichern.",
    visualLabels: {
      room: "Arbeitsraum",
      financeRoom: "# finance",
      message: "Nachricht",
      handoff: "Atlas-Rechnungsübergabe",
      workCard: "Work Card",
      createRecords: "Asset-Datensätze erstellen",
      knowledge: "Wissen",
      record: "Datensatz",
      approval: "Freigabe",
      evidence: "Nachweis",
      traceAttached: "Nachweis verbunden",
      role: "Rolle",
      tools: "Tools",
      memory: "Memory",
      status: "Status",
      visible: "sichtbar",
      email: "E-Mail",
      form: "Formular",
      file: "Datei",
      api: "API",
      receive: "Empfangen",
      create: "Erstellen",
      search: "Suchen",
      draft: "Entwerfen",
      review: "Prüfen",
      coworker: "AI Coworker",
      automation: "AI-Automatisierung",
      input: "Eingang",
      runtime: "Aktivität",
      accountable: "Verantwortliches Arbeitsobjekt",
      objectDetail: "Kontext, Owner, Status, Quellen, Freigaben, Output",
      policy: "Richtlinie v4",
      vendor: "Lieferantenbedingungen",
      sop: "Inventory SOP",
      assets: "Asset-Datenbank",
      vendorTable: "Lieferantentabelle",
      approvalLog: "Freigabeprotokoll",
      saved: "gespeichert",
      proposed: "vorgeschlagen",
      cited: "zitiert",
      routed: "geroutet",
    },
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
        title: "AI-Automatisierungen",
        description:
          "Eingehende Geschäftssignale werden zu Arbeit mit Prüfpunkten und nachvollziehbaren Ergebnissen.",
        items: ["Empfangen E-Mails, Formulare, Dateien, Dokumentenablagen, APIs und Integrationsereignisse", "Erstellen Arbeit und routen sie an Menschen oder AI Coworker", "Nutzen Wissen, aktualisieren strukturierte Datensätze und fragen Freigaben an"],
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
        items: ["Schema-gestützte Datensätze modellieren Business-Objekte hinter der Arbeit", "AI Coworker und AI-Automatisierungen können Änderungen entwerfen", "Menschen können Diffs prüfen, bevor wichtige Updates landen"],
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
          "Jede Anfrage, jede Aktion, jedes Zitat, jede Freigabe und jeder Output hinterlässt eine inspizierbare Spur.",
        items: ["AI-Aktivität bleibt neben der Arbeit sichtbar", "Datensatzänderungen und Wissensquellen bleiben nachvollziehbar", "Teams können belegen, was passiert ist, ohne es später zu rekonstruieren"],
      },
    ],
    coworkerTitle:
      "AI Coworker handeln wie sichtbare Teamkollegen, nicht wie versteckte Skripte.",
    coworkerDescription:
      "Sie arbeiten in denselben Räumen wie Menschen, verstehen zugewiesene Rollen, nutzen freigegebene Tools, erstellen Arbeit, speichern Wissen und handeln mit strukturierten Datensätzen bei sichtbarem Fortschritt.",
    automationTitle: "AI-Automatisierungen verwandeln Eingänge in gesteuerte Arbeit.",
    automationDescription:
      "Sie hören auf Geschäftssignale, bereiten Arbeit vor, sammeln freigegebenes Wissen, schreiben strukturierte Datensatzvorschläge und stoppen dort für Freigaben, wo Richtlinie oder Risiko es erfordern.",
    runtimeKicker: "Aktivität + Nachweise",
    runtimeTitle: "Jeder Lauf hinterlässt eine Spur, die Menschen prüfen können.",
    runtimeDescription:
      "Agentenarbeit ist keine Black Box. Nachrichten, Tool Calls, Zitate, Vorschläge, Freigaben und abgeschlossene AI-Automatisierungen bleiben neben der betroffenen Arbeit sichtbar.",
    runtimeStatus: "Live-Nachweis",
    runtimeItems: [
      ["09:41:02", "Nachricht erhalten", "Maya fragt nach Atlas-Rechnung und Inventory-Übergabe."],
      ["09:41:08", "AI Coworker Aktion", "Finance AI durchsucht Richtlinien, Lieferantendatensätze und den offenen Arbeitsraum."],
      ["09:41:21", "Datensatzvorschlag", "Inventory AI entwirft fünf Asset-Datensätze aus Rechnungspositionen."],
      ["09:41:34", "Freigabeprüfung", "Controller-Prüfung vor Datensatzupdate erforderlich."],
      ["09:42:11", "AI-Automatisierung abgeschlossen", "Assets vorbereitet, Nachweise verbunden und Work Card aktualisiert."],
    ],
    finalTitle: "Eine Plattform für Arbeit, die nachvollziehbar bleiben muss.",
    finalDescription:
      "JobDone AI gibt Menschen, AI Coworkern und AI-Automatisierungen einen gemeinsamen Ort, um zu koordinieren, zu entscheiden, Datensätze zu aktualisieren und nachzuweisen, was passiert ist.",
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

function MiniNode({
  label,
  value,
  tone = "blue",
}: {
  label: string;
  value: string;
  tone?: "blue" | "cyan" | "green" | "amber";
}) {
  const dot = {
    blue: "bg-[#206ae9] shadow-[0_0_18px_rgba(32,106,233,0.55)]",
    cyan: "bg-[#60efff] shadow-[0_0_18px_rgba(96,239,255,0.45)]",
    green: "bg-[#21d07a] shadow-[0_0_18px_rgba(33,208,122,0.42)]",
    amber: "bg-[#ffd166] shadow-[0_0_18px_rgba(255,209,102,0.36)]",
  };

  return (
    <div className="rounded-md border border-white/10 bg-[#071019]/88 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="flex items-center gap-2">
        <span className={`size-2 rounded-full ${dot[tone]}`} />
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#7f91a8]">
          {label}
        </p>
      </div>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function WorkRoomVisual({ copy }: { copy: PlatformCopy }) {
  const labels = copy.visualLabels;

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(11,22,35,0.86),rgba(4,7,11,0.94))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_28%,rgba(32,106,233,0.2),transparent_38%)]" />
      <div className="relative grid min-h-[420px] gap-4 md:grid-cols-[0.78fr_1fr_0.78fr]">
        <div className="grid content-start gap-3">
          <div className="rounded-md border border-white/10 bg-black/28 p-3">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[#60efff]">
              {labels.room}
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {labels.financeRoom}
            </p>
          </div>
          <MiniNode label={labels.coworker} value="Finance AI" tone="blue" />
          <MiniNode label={labels.coworker} value="Inventory AI" tone="cyan" />
          <MiniNode label={labels.approval} value="Controller" tone="amber" />
        </div>
        <div className="relative flex flex-col justify-center gap-3">
          <span className="absolute left-1/2 top-10 h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,#206ae9,transparent)]" />
          {[labels.message, labels.workCard, labels.runtime].map((label, index) => (
            <div
              className="relative z-10 rounded-lg border border-[#206ae9]/24 bg-[#081522]/88 p-4"
              key={label}
            >
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-[#8fb5ff]">
                {label}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {index === 0
                  ? labels.handoff
                  : index === 1
                    ? labels.createRecords
                    : labels.traceAttached}
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-[#206ae9]"
                  style={{ width: `${54 + index * 18}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="grid content-center gap-3">
          <MiniNode label={labels.knowledge} value={labels.cited} tone="green" />
          <MiniNode label={labels.record} value={labels.proposed} tone="cyan" />
          <MiniNode label={labels.evidence} value={labels.saved} tone="blue" />
        </div>
      </div>
    </div>
  );
}

function PlatformGraphVisual({ copy }: { copy: PlatformCopy }) {
  const labels = copy.visualLabels;
  const nodes = [
    [labels.room, copy.platformSections[0].title, "left-[8%] top-[18%]", "blue"],
    [labels.coworker, copy.platformSections[1].title, "right-[9%] top-[17%]", "cyan"],
    [labels.automation, copy.platformSections[2].title, "left-[9%] bottom-[20%]", "green"],
    [labels.knowledge, copy.platformSections[3].title, "right-[7%] bottom-[23%]", "blue"],
    [labels.record, copy.platformSections[4].title, "left-[38%] bottom-[7%]", "cyan"],
    [labels.approval, copy.platformSections[5].title, "left-[39%] top-[6%]", "amber"],
  ] as const;

  return (
    <div className="relative mx-auto mt-12 aspect-[16/8.2] w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(32,106,233,0.2),rgba(5,8,12,0.94)_48%,rgba(3,6,9,0.98))]">
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full opacity-70"
        viewBox="0 0 1000 512"
      >
        <defs>
          <linearGradient id="platform-line" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#206ae9" stopOpacity="0" />
            <stop offset="0.5" stopColor="#206ae9" stopOpacity="0.72" />
            <stop offset="1" stopColor="#60efff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M500 256 C300 120 210 106 115 124",
          "M500 256 C700 120 790 104 890 126",
          "M500 256 C300 386 210 406 116 394",
          "M500 256 C704 386 798 398 900 382",
          "M500 256 C486 150 486 86 500 48",
          "M500 256 C498 344 498 424 500 468",
        ].map((d) => (
          <path d={d} fill="none" key={d} stroke="url(#platform-line)" strokeWidth="2" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 z-10 w-[min(19rem,48vw)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#60efff]/28 bg-[#07111b]/92 p-5 text-center shadow-[0_0_54px_rgba(32,106,233,0.22)]">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#60efff]">
          {labels.workCard}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">
          {labels.accountable}
        </h3>
        <p className="mt-3 text-xs leading-5 text-[#9aabbf]">
          {labels.objectDetail}
        </p>
      </div>
      {nodes.map(([label, value, position, tone]) => (
        <div
          className={`absolute z-10 hidden w-40 rounded-lg border border-white/10 bg-[#081019]/88 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:block ${position}`}
          key={`${label}-${value}`}
        >
          <MiniNode label={label} tone={tone} value={value} />
        </div>
      ))}
    </div>
  );
}

function DeepDiveVisual({
  copy,
  variant,
}: {
  copy: PlatformCopy;
  variant: "coworker" | "automation";
}) {
  const labels = copy.visualLabels;
  const isCoworker = variant === "coworker";

  if (isCoworker) {
    const outputs = [
      [labels.workCard, labels.create, "blue"],
      [labels.knowledge, labels.saved, "green"],
      [labels.record, labels.proposed, "cyan"],
      [labels.evidence, labels.visible, "amber"],
    ] as const;

    return (
      <div
        className="relative grid overflow-hidden rounded-lg border border-white/10 bg-[#05080c]/72 p-4 md:min-h-[29rem] md:items-center"
        data-platform-visual="ai-coworkers"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(32,106,233,0.2),transparent_42%)]" />
        <div className="relative grid gap-4 md:grid-cols-[0.78fr_1fr_0.82fr] md:items-center">
          <div className="grid gap-2">
            <div className="rounded-md border border-white/10 bg-black/24 p-3">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#60efff]">
                {labels.room}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {labels.financeRoom}
              </p>
            </div>
            {["Maya", "Controller", "Finance AI"].map((name, index) => (
              <div
                className="flex items-center gap-2 rounded-md border border-white/10 bg-[#071019]/82 p-2.5"
                key={name}
              >
                <span
                  className={`grid size-7 shrink-0 place-items-center rounded-md text-[0.6rem] font-black text-white ${
                    index === 2 ? "bg-[#206ae9]" : "bg-white/10"
                  }`}
                >
                  {name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <span className="truncate text-xs font-semibold text-[#d7e7ff]">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="relative rounded-xl border border-[#60efff]/24 bg-[#081522]/92 p-4 shadow-[0_0_46px_rgba(32,106,233,0.22)]">
            <div className="absolute -left-5 top-1/2 hidden h-px w-5 bg-[#206ae9] md:block" />
            <div className="absolute -right-5 top-1/2 hidden h-px w-5 bg-[#206ae9] md:block" />
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#60efff]">
              {labels.coworker}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">Finance AI</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                [labels.role, "Finance"],
                [labels.tools, "5"],
                [labels.memory, labels.cited],
                [labels.status, labels.visible],
              ].map(([label, value]) => (
                <div
                  className="rounded-md border border-white/10 bg-black/22 p-2.5"
                  key={label}
                >
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[#7f91a8]">
                    {label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            {outputs.map(([label, value, tone]) => (
              <MiniNode
                key={label}
                label={label}
                tone={tone}
                value={value}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const adapters = [labels.email, labels.form, labels.file, labels.api];
  const stages = [
    [labels.receive, labels.routed],
    [labels.create, labels.workCard],
    [labels.search, labels.knowledge],
    [labels.draft, labels.record],
    [labels.review, labels.approval],
  ];

  return (
    <div
      className="relative grid overflow-hidden rounded-lg border border-white/10 bg-[#05080c]/72 p-4 md:min-h-[29rem] md:items-center"
      data-platform-visual="ai-automations"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_35%,rgba(96,239,255,0.14),transparent_36%)]" />
      <div className="relative grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
        <div className="grid content-center gap-2">
          {adapters.map((adapter, index) => (
            <div
              className="flex items-center justify-between gap-3 rounded-md border border-[#206ae9]/20 bg-[#071019]/88 p-3"
              key={adapter}
            >
              <span className="text-sm font-semibold text-white">{adapter}</span>
              <span className="font-mono text-[0.62rem] text-[#8fb5ff]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        <div className="relative rounded-xl border border-[#206ae9]/24 bg-[#081522]/88 p-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#60efff]">
            {labels.automation}
          </p>
          <div className="mt-5 grid gap-3">
            {stages.map(([stage, value], index) => (
              <div className="relative grid grid-cols-[2rem_1fr] gap-3" key={stage}>
                <span className="relative z-10 grid size-8 place-items-center rounded-full border border-[#2f6fff]/42 bg-[#091522] font-mono text-[0.62rem] text-[#8fb5ff]">
                  {index + 1}
                </span>
                {index < stages.length - 1 ? (
                  <span className="absolute bottom-[-0.85rem] left-4 top-8 w-px bg-[linear-gradient(180deg,#206ae9,transparent)]" />
                ) : null}
                <div className="rounded-md border border-white/10 bg-black/22 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{stage}</p>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[#8ea0b5]">
                      {value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <MiniNode label={labels.record} value={labels.proposed} tone="cyan" />
            <MiniNode label={labels.approval} value={labels.review} tone="amber" />
            <MiniNode label={labels.evidence} value={labels.saved} tone="green" />
          </div>
        </div>
      </div>
    </div>
  );
}

function KnowledgeRecordVisual({ copy }: { copy: PlatformCopy }) {
  const labels = copy.visualLabels;

  return (
    <div className="rounded-lg border border-white/10 bg-[#071019]/82 p-4 shadow-[0_26px_80px_rgba(0,0,0,0.28)]">
      <div className="grid gap-3 md:grid-cols-[1fr_0.45fr_1fr] md:items-center">
        <div className="grid gap-3">
          <MiniNode label={labels.knowledge} value={labels.policy} tone="green" />
          <MiniNode label={labels.knowledge} value={labels.vendor} tone="green" />
          <MiniNode label={labels.knowledge} value={labels.sop} tone="green" />
        </div>
        <div className="grid place-items-center gap-2 py-2">
          <span className="h-16 w-px bg-[linear-gradient(180deg,transparent,#60efff,transparent)] md:h-px md:w-full" />
          <div className="rounded-full border border-[#60efff]/30 bg-[#60efff]/10 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[#c7fbff]">
            {labels.workCard}
          </div>
          <span className="h-16 w-px bg-[linear-gradient(180deg,transparent,#206ae9,transparent)] md:h-px md:w-full" />
        </div>
        <div className="grid gap-3">
          <MiniNode label={labels.record} value={labels.assets} tone="cyan" />
          <MiniNode label={labels.record} value={labels.vendorTable} tone="blue" />
          <MiniNode label={labels.record} value={labels.approvalLog} tone="amber" />
        </div>
      </div>
    </div>
  );
}

function SharedWorkSection({ copy }: { copy: PlatformCopy }) {
  return (
    <section
      className="relative overflow-hidden border-b border-white/8 bg-[#05080c] py-20 md:py-24"
      id="work"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div data-reveal="rise">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {copy.sharedWorkTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#9aabbf]">
            {copy.sharedWorkDescription}
          </p>
          <div className="mt-8 grid gap-3" data-reveal-stagger>
            {copy.sharedWorkCards.map(([title, description], index) => (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4"
                data-reveal="rise"
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
        <div className="relative min-w-0" data-reveal="scale">
          <WorkRoomVisual copy={copy} />
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
        <div className="mx-auto max-w-3xl text-center" data-reveal="rise">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {copy.architectureTitle}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#9aabbf]">
            {copy.architectureDescription}
          </p>
        </div>
        <div data-reveal="scale">
          <PlatformGraphVisual copy={copy} />
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-7" data-reveal-stagger>
          {copy.platformSections.map((section, index) => (
            <article
              className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(13,24,37,0.82),rgba(6,10,15,0.92))] p-5 lg:col-span-1"
              data-reveal="rise"
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
              data-reveal="rise"
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
                <DeepDiveVisual
                  copy={copy}
                  variant={
                    section.id === "ai-coworkers" ? "coworker" : "automation"
                  }
                />
                <p className="mt-6 text-base leading-7 text-[#a4b3c6]">
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
        <div data-reveal="rise">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            {copy.knowledgeRecordsTitle}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#9aabbf]">
            {copy.knowledgeRecordsDescription}
          </p>
        </div>
        <div className="grid gap-4" data-reveal-stagger>
          <div data-reveal="scale">
          <KnowledgeRecordVisual copy={copy} />
          </div>
          {sections.map((section) => (
            <article
              className="rounded-lg border border-white/10 bg-[#0b1117]/86 p-5 backdrop-blur-md"
              data-reveal="rise"
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

function ActivityEvidencePanel({ copy }: { copy: PlatformCopy }) {
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
        <div data-reveal="rise">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            {copy.runtimeTitle}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#9aabbf]">
            {copy.runtimeDescription}
          </p>
          <div className="mt-8 grid gap-3" data-reveal-stagger>
            {sections.map((section) => (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4"
                data-reveal="rise"
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
        <div data-reveal="scale">
          <ActivityEvidencePanel copy={copy} />
        </div>
      </Container>
    </section>
  );
}

function FinalCta({ copy }: { copy: PlatformCopy }) {
  return (
    <section className="bg-[#030609] pb-16 md:pb-20">
      <Container>
        <div
          className="relative overflow-hidden rounded-lg border border-[#206ae9]/24 bg-[linear-gradient(135deg,rgba(32,106,233,0.22),rgba(8,13,18,0.82)_34%,rgba(5,8,12,0.94))] p-8 md:p-12"
          data-reveal="scale"
        >
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
      <section className="relative overflow-hidden border-b border-white/8 bg-black">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,#05080c)]" />
        <Container className="relative min-w-0 py-16 md:min-h-[720px] md:py-20">
          <h1
            className="relative z-10 max-w-full text-[clamp(2.25rem,8.6vw,4.25rem)] font-semibold leading-[0.98] tracking-tight md:text-7xl lg:max-w-[62%]"
            data-reveal="rise"
          >
            {copy.title}
          </h1>
          <div className="relative z-10 mt-10 grid min-w-0 gap-8 lg:mt-12 lg:grid-cols-[minmax(23rem,0.36fr)_minmax(0,1.64fr)] lg:items-center">
            <div className="min-w-0">
              <p
                className="reveal-delay-1 max-w-full text-[0.94rem] leading-7 text-[#a4b3c6] md:text-[0.96rem] md:leading-7 lg:max-w-[25rem]"
                data-reveal="rise"
              >
                {copy.description}
              </p>
              <div
                className="reveal-delay-2 mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col"
                data-reveal="rise"
              >
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
            <div className="reveal-delay-2 min-w-0" data-reveal="scale">
              <ProductVideoVisual
                alt={copy.heroAlt}
                className="aspect-[16/9] min-w-0 border-0 bg-black shadow-[0_0_110px_80px_#000] lg:-mr-[20vw] lg:w-[calc(100%+20vw)]"
                fallbackSrc="/videos/jobdone-ai/platform-graph-poster.jpg"
                imageClassName="object-contain"
                posterSrc="/videos/jobdone-ai/platform-graph-poster.jpg"
                priority
                videoSrc="/videos/jobdone-ai/platform-graph.mp4"
                variant="blend"
              />
            </div>
          </div>
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
