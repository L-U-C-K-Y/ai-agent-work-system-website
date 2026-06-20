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
import { Link } from "@/i18n/navigation";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

const useImagegenExperimentVisuals = true;

const pageCopy = {
  en: {
    heroTitle: "A shared workspace for teams and AI teammates.",
    heroDescription:
      "JobDone AI is a shared workspace where teams work with AI Coworkers and AI Automations to get recurring business work done, while people stay in control.",
    primaryCta: "See the platform",
    secondaryCta: "Explore use cases",
    heroAlt:
      "JobDone AI collaborative workspace showing channels, AI Coworkers, AI Automations, work cards, knowledge, records, and approvals",
    businessValue: [
      ["Coordinate shared work", "People and AI Coworkers collaborate in work rooms, turn conversations into durable work, and stay aligned across handoffs."],
      ["Delegate to AI Coworkers", "Named AI teammates use approved tools, knowledge, and structured records while their progress stays visible."],
      ["Trigger AI Automations", "Incoming signals from forms, email, or tools create work, gather context, update records, and route approvals."],
      ["Update knowledge and records", "Useful context and structured business data stay connected to the work instead of living only in messages."],
      ["Prove what happened", "Approvals, evidence, citations, AI activity, and record changes remain inspectable."],
    ],
    heroWorkspace: {
      liveLabel: "finance-workspace/live",
      channelsLabel: "Channels",
      coworkersLabel: "Coworkers",
      threadTitle: "# finance",
      threadDescription: "Human and AI coworking thread",
      activeLabel: "3 active",
      now: "now",
      workCardLabel: "Work card",
      approval: "approval",
      workCardTitle: "Atlas invoice -> inventory handoff",
      workCardDescription:
        "Source chat, invoice evidence, draft Asset records, and approval packet stay attached to the same work item.",
      workCardActions: ["Create work", "Open records", "View evidence"],
      contextGraph: "Context graph",
      automationRun: "Automation run",
      automationSteps: ["Search knowledge", "Draft records", "Request approval"],
      channels: ["# finance", "# inventory", "# approvals", "# ai-automations"],
    },
    coworkerStatuses: [
      ["Finance AI", "Responding", "green"],
      ["Inventory AI", "Drafting records", "cyan"],
      ["Controller", "Reviewing", "amber"],
    ],
    chatMessages: [
      ["Maya", "Can someone turn the Atlas invoice into work and check whether the laptop lines need inventory records?"],
      ["Finance AI", "I found the vendor, matched the PO, and created a work item. The hardware lines need an Inventory handoff."],
      ["Inventory AI", "I drafted five Asset records from the invoice lines. Missing serial numbers are flagged for human review."],
    ],
    knowledgeRecords: [
      ["Knowledge", "Laptop purchasing policy", "v4 cited"],
      ["Records", "Asset database", "5 drafts"],
      ["Records", "Vendor table", "matched"],
    ],
    coworkingEyebrow: "Coworking with context",
    coworkingTitle: "Chat, work cards, knowledge, and records stay connected.",
    coworkingDescription:
      "The conversation is not a dead end. Every message can become work, every work item can open the right data, and every agent action is visible to the people around it.",
    directContextLinks: "Direct context links",
    directContextItems: [
      ["@Finance AI", "responding in #finance"],
      ["Work JD-1842", "Atlas invoice handoff"],
      ["Knowledge citation", "Purchasing policy v4"],
      ["Record proposal", "Asset database / 5 drafts"],
    ],
    coworkingCards: [
      ["Channel message", "Ask, decide, and mention AI Coworkers in the same workspace where work is created."],
      ["Work card", "Turn the conversation into a tracked object with owner, status, evidence, and approvals."],
      ["Knowledge link", "Open the exact document or citation the agent used to make a recommendation."],
      ["Record link", "Jump straight into the database row, schema, or proposed record diff behind the work."],
    ],
    primitiveEyebrow: "How JobDone AI works",
    primitiveTitle: "The shared model for mixed human and AI teams.",
    systemPrimitives: [
      ["Channels", "A shared room for people and AI Coworkers to discuss work, attach evidence, and create durable work items."],
      ["Tracked work", "Messages become tracked work with an owner, status, context, and next steps."],
      ["AI Coworkers", "Named AI teammates appear in the workspace with roles, status, tools, memory, and visible progress."],
      ["AI Automations", "Incoming requests create work, use knowledge, update records, and keep the right approval checkpoints."],
      ["Knowledge", "Agents search approved documents with citations and bring the right context back into the thread."],
      ["Record databases", "Agents read, draft, and update governed operational databases instead of leaving data in chat."],
    ],
    flowEyebrow: "From request to completed work",
    flowTitle: "Work moves through one shared system.",
    flowLink: "Explore platform ->",
    collaborationFlow: [
      ["01", "Work arrives", "Email, forms, files, documents, APIs, and internal tools become structured work."],
      ["02", "AI Coworkers coordinate", "Specialized coworkers inspect context, update records, draft actions, and ask for help when needed."],
      ["03", "Humans decide", "People approve risky steps, resolve ambiguity, and keep accountability clear."],
      ["04", "Systems update", "Business tools, records, boards, and statistics move forward with evidence attached."],
    ],
    governance: {
      packetLabel: "Approval packet",
      review: "review",
      rows: [
        ["Agent proposal", "Post invoice and create five asset records"],
        ["Policy reason", "Spend limit requires controller approval"],
        ["Evidence", "Source email, vendor record, purchase order, asset table diff"],
      ],
      approve: "Approve",
      askChanges: "Ask for changes",
      eyebrow: "Control without slowing work",
      title: "Agents can move fast because the system knows when to stop.",
      description:
        "JobDone AI keeps people in the loop where judgment matters and lets agents handle the repeatable parts with context, permissions, and evidence built in.",
    },
    governanceItems: [
      ["Scoped tools", "Agents only use approved capabilities inside the workspace policy."],
      ["Traceable runs", "Requests, prompts, tool calls, approvals, and outputs stay linked to work."],
      ["Role-aware access", "Humans and agents operate inside workspace boundaries and permissions."],
      ["Operational metrics", "Leaders can see throughput, blocked work, approval load, and agent impact."],
    ],
    finalCta: {
      eyebrow: "Closed preview",
      title: "Put people, AI Coworkers, and AI Automations in the same work system.",
      description:
        "Request access to see how JobDone AI coordinates work rooms, knowledge, records, approvals, AI Coworkers, and AI Automations in one shared workspace.",
      button: "Request Access",
    },
  },
  de: {
    heroTitle: "Ein gemeinsamer Arbeitsbereich für Teams und AI-Teamkollegen.",
    heroDescription:
      "JobDone AI ist ein gemeinsamer Arbeitsbereich, in dem Teams mit AI Coworkern und AI-Automatisierungen wiederkehrende Arbeit erledigen, ohne Kontrolle und Überblick zu verlieren.",
    primaryCta: "Plattform ansehen",
    secondaryCta: "Anwendungsfälle erkunden",
    heroAlt:
      "JobDone AI gemeinsamer Arbeitsbereich mit Kanälen, AI Coworkern, AI-Automatisierungen, Work Cards, Wissen, Datensätzen und Freigaben",
    businessValue: [
      ["Gemeinsame Arbeit koordinieren", "Menschen und AI Coworker arbeiten in Arbeitsräumen zusammen, verwandeln Konversationen in dauerhafte Arbeit und bleiben über Übergaben hinweg abgestimmt."],
      ["An AI Coworker delegieren", "Benannte AI-Teamkollegen nutzen freigegebene Tools, Wissen und strukturierte Datensätze, während ihr Fortschritt sichtbar bleibt."],
      ["AI-Automatisierungen auslösen", "Eingehende Signale aus Formularen, E-Mails oder Tools erstellen Arbeit, sammeln Kontext, aktualisieren Datensätze und routen Freigaben."],
      ["Wissen und Datensätze aktualisieren", "Nützlicher Kontext und strukturierte Geschäftsdaten bleiben mit Arbeit verbunden, statt nur in Nachrichten zu liegen."],
      ["Nachweisen, was passiert ist", "Freigaben, Nachweise, Zitate, AI-Aktivität und Datensatzänderungen bleiben prüfbar."],
    ],
    heroWorkspace: {
      liveLabel: "finance-workspace/live",
      channelsLabel: "Channels",
      coworkersLabel: "Coworker",
      threadTitle: "# finance",
      threadDescription: "Menschlicher und KI-Coworking-Thread",
      activeLabel: "3 aktiv",
      now: "jetzt",
      workCardLabel: "Work Card",
      approval: "Freigabe",
      workCardTitle: "Atlas-Rechnung -> Inventory-Übergabe",
      workCardDescription:
        "Quellchat, Rechnungsnachweis, Asset-Datensatzentwürfe und Freigabepaket bleiben am selben Work Item verbunden.",
      workCardActions: ["Arbeit erstellen", "Datensätze öffnen", "Nachweise ansehen"],
      contextGraph: "Kontextgraph",
      automationRun: "Automatisierungslauf",
      automationSteps: ["Wissen suchen", "Datensätze entwerfen", "Freigabe anfragen"],
      channels: ["# finance", "# inventory", "# approvals", "# ai-automations"],
    },
    coworkerStatuses: [
      ["Finance AI", "Antwortet", "green"],
      ["Inventory AI", "Entwirft Datensätze", "cyan"],
      ["Controller", "Prüft", "amber"],
    ],
    chatMessages: [
      ["Maya", "Kann jemand die Atlas-Rechnung in Arbeit verwandeln und prüfen, ob die Laptop-Positionen Inventory-Datensätze brauchen?"],
      ["Finance AI", "Ich habe den Lieferanten gefunden, die Bestellung abgeglichen und ein Work Item erstellt. Die Hardwarepositionen brauchen eine Inventory-Übergabe."],
      ["Inventory AI", "Ich habe fünf Asset-Datensätze aus den Rechnungspositionen entworfen. Fehlende Seriennummern sind für menschliche Prüfung markiert."],
    ],
    knowledgeRecords: [
      ["Wissen", "Laptop-Einkaufsrichtlinie", "v4 zitiert"],
      ["Datensätze", "Asset-Datenbank", "5 Entwürfe"],
      ["Datensätze", "Lieferantentabelle", "abgeglichen"],
    ],
    coworkingEyebrow: "Coworking mit Kontext",
    coworkingTitle: "Chat, Work Cards, Wissen und Datensätze bleiben verbunden.",
    coworkingDescription:
      "Die Konversation ist keine Sackgasse. Jede Nachricht kann zu Arbeit werden, jedes Work Item kann die richtigen Daten öffnen, und jede Agentenaktion ist für die Menschen darum herum sichtbar.",
    directContextLinks: "Direkte Kontextlinks",
    directContextItems: [
      ["@Finance AI", "antwortet in #finance"],
      ["Work JD-1842", "Atlas-Rechnungsübergabe"],
      ["Wissenszitat", "Einkaufsrichtlinie v4"],
      ["Datensatzvorschlag", "Asset-Datenbank / 5 Entwürfe"],
    ],
    coworkingCards: [
      ["Channel-Nachricht", "Fragen, entscheiden und AI Coworker im selben Workspace erwähnen, in dem Arbeit entsteht."],
      ["Work Card", "Verwandle die Konversation in ein nachverfolgbares Objekt mit Owner, Status, Nachweisen und Freigaben."],
      ["Wissenslink", "Öffne genau das Dokument oder Zitat, das der Agent für eine Empfehlung genutzt hat."],
      ["Datensatzlink", "Springe direkt zur Datenbankzeile, zum Schema oder zum vorgeschlagenen Datensatz-Diff hinter der Arbeit."],
    ],
    primitiveEyebrow: "So funktioniert JobDone AI",
    primitiveTitle: "Das gemeinsame Modell für Teams aus Menschen und AI.",
    systemPrimitives: [
      ["Channels", "Ein gemeinsamer Raum, in dem Menschen und AI Coworker Arbeit besprechen, Nachweise anhängen und dauerhafte Work Items erstellen."],
      ["Nachverfolgbare Arbeit", "Nachrichten werden zu Arbeit mit Owner, Status, Kontext und nächsten Schritten."],
      ["AI Coworker", "Benannte AI-Teamkollegen erscheinen im Workspace mit Rollen, Status, Tools, Memory und sichtbarem Fortschritt."],
      ["AI-Automatisierungen", "Eingänge aus Formularen, E-Mails oder Tools erstellen Arbeit, nutzen Wissen, aktualisieren Datensätze und behalten die richtigen Freigabepunkte."],
      ["Wissen", "Agenten durchsuchen freigegebene Dokumente mit Zitaten und bringen den richtigen Kontext zurück in den Thread."],
      ["Datensatz-Datenbanken", "Agenten lesen, entwerfen und aktualisieren gesteuerte operative Datenbanken, statt Daten im Chat liegen zu lassen."],
    ],
    flowEyebrow: "Von der Anfrage zur erledigten Arbeit",
    flowTitle: "Arbeit bewegt sich durch ein gemeinsames System.",
    flowLink: "Plattform erkunden ->",
    collaborationFlow: [
      ["01", "Arbeit kommt an", "E-Mails, Formulare, Dateien, Dokumente, APIs und interne Tools werden zu strukturierter Arbeit."],
      ["02", "AI Coworker koordinieren", "Spezialisierte Coworker prüfen Kontext, aktualisieren Datensätze, entwerfen Aktionen und bitten bei Bedarf um Hilfe."],
      ["03", "Menschen entscheiden", "Menschen genehmigen riskante Schritte, lösen Unklarheiten und halten Verantwortlichkeit klar."],
      ["04", "Systeme aktualisieren", "Business-Tools, Datensätze, Boards und Statistiken bewegen sich mit verknüpften Nachweisen weiter."],
    ],
    governance: {
      packetLabel: "Freigabepaket",
      review: "Prüfung",
      rows: [
        ["Agentenvorschlag", "Rechnung buchen und fünf Asset-Datensätze erstellen"],
        ["Richtliniengrund", "Ausgabenlimit erfordert Controller-Freigabe"],
        ["Nachweis", "Quell-E-Mail, Lieferantendatensatz, Bestellung, Asset-Tabellen-Diff"],
      ],
      approve: "Freigeben",
      askChanges: "Änderungen anfragen",
      eyebrow: "Kontrolle ohne Arbeit zu bremsen",
      title: "Agenten können schnell arbeiten, weil das System weiß, wann es stoppen muss.",
      description:
        "JobDone AI hält Menschen dort eingebunden, wo Urteil zählt, und lässt Agenten die wiederholbaren Teile mit Kontext, Berechtigungen und Nachweisen erledigen.",
    },
    governanceItems: [
      ["Begrenzte Tools", "Agenten nutzen nur freigegebene Fähigkeiten innerhalb der Workspace-Richtlinie."],
      ["Nachvollziehbare Läufe", "Anfragen, Prompts, Tool Calls, Freigaben und Outputs bleiben mit Arbeit verknüpft."],
      ["Rollenbewusster Zugriff", "Menschen und Agenten arbeiten innerhalb von Workspace-Grenzen und Berechtigungen."],
      ["Operative Metriken", "Leitende sehen Durchsatz, blockierte Arbeit, Freigabelast und Agentenwirkung."],
    ],
    finalCta: {
      eyebrow: "Geschlossene Preview",
      title: "Bringe Menschen, AI Coworker und AI-Automatisierungen in dasselbe Arbeitssystem.",
      description:
        "Fordere Zugang an, um zu sehen, wie JobDone AI Arbeitsräume, Wissen, Datensätze, Freigaben, AI Coworker und AI-Automatisierungen an einem Ort koordiniert.",
      button: "Zugang anfragen",
    },
  },
} as const;

type HomeCopy = (typeof pageCopy)[keyof typeof pageCopy];

function getCopy(locale: string) {
  return locale === "de" ? pageCopy.de : pageCopy.en;
}

function StatusDot({ tone = "green" }: { tone?: "green" | "cyan" | "amber" }) {
  const color = {
    green: "bg-[#206ae9] shadow-[0_0_18px_rgba(32,106,233,0.65)]",
    cyan: "bg-[#60efff] shadow-[0_0_18px_rgba(96,239,255,0.55)]",
    amber: "bg-[#ffd166] shadow-[0_0_18px_rgba(255,209,102,0.45)]",
  };

  return <span className={`size-2 rounded-full ${color[tone]}`} />;
}

function HeroWorkspace({ copy }: { copy: HomeCopy }) {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(32,106,233,0.22),transparent_34%),radial-gradient(circle_at_80%_50%,rgba(96,239,255,0.18),transparent_32%)] blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b1117]/92 shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="size-2.5 rounded-full bg-[#ffd166]" />
            <span className="size-2.5 rounded-full bg-[#206ae9]" />
          </div>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[#8ea0b5]">
            {copy.heroWorkspace.liveLabel}
          </p>
        </div>

        <div className="grid min-h-[560px] gap-0 lg:grid-cols-[0.28fr_1fr_0.38fr]">
          <aside className="border-b border-white/10 bg-[#06090d] p-3 lg:border-b-0 lg:border-r">
            <p className="mb-3 px-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#7f91a8]">
              {copy.heroWorkspace.channelsLabel}
            </p>
            <div className="grid gap-1">
              {copy.heroWorkspace.channels.map(
                (channel, index) => (
                  <div
                    className={`rounded-md px-2.5 py-2 text-xs font-semibold ${
                      index === 0
                        ? "bg-[#206ae9] text-white"
                        : "text-[#8ea0b5] hover:bg-white/[0.04]"
                    }`}
                    key={channel}
                  >
                    {channel}
                  </div>
                ),
              )}
            </div>
            <p className="mb-3 mt-6 px-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#7f91a8]">
              {copy.heroWorkspace.coworkersLabel}
            </p>
            <div className="grid gap-2">
              {copy.coworkerStatuses.map(([name, status, tone]) => (
                <div className="rounded-md border border-white/8 bg-white/[0.03] p-2.5" key={name}>
                  <div className="flex items-center gap-2">
                    <StatusDot tone={tone as "green" | "cyan" | "amber"} />
                    <p className="text-xs font-semibold text-white">{name}</p>
                  </div>
                  <p className="mt-1 text-[0.66rem] text-[#7f91a8]">{status}</p>
                </div>
              ))}
            </div>
          </aside>

          <section className="bg-[#0b1117] p-4">
            <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-3">
              <div>
                <p className="text-sm font-semibold text-white">{copy.heroWorkspace.threadTitle}</p>
                <p className="mt-1 text-[0.7rem] text-[#7f91a8]">
                  {copy.heroWorkspace.threadDescription}
                </p>
              </div>
              <span className="rounded-full border border-[#206ae9]/30 bg-[#206ae9]/10 px-2 py-1 text-[0.66rem] font-semibold text-[#c8d8ff]">
                {copy.heroWorkspace.activeLabel}
              </span>
            </div>

            <div className="grid gap-3">
              {copy.chatMessages.map(([sender, body], index) => (
                <div className="flex gap-3" key={sender}>
                  <div
                    className={`grid size-8 shrink-0 place-items-center rounded-md font-mono text-[0.65rem] font-black ${
                      index === 0
                        ? "bg-white/10 text-white"
                        : index === 1
                          ? "bg-[#206ae9] text-white"
                          : "bg-[#60efff] text-white"
                    }`}
                  >
                    {sender
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div className="min-w-0 flex-1 rounded-md border border-white/8 bg-white/[0.035] p-3">
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold text-white">{sender}</p>
                      <p className="font-mono text-[0.62rem] text-[#64758c]">{copy.heroWorkspace.now}</p>
                    </div>
                    <p className="text-xs leading-5 text-[#aab8c9]">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-md border border-[#206ae9]/25 bg-[#206ae9]/8 p-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold text-white">{copy.heroWorkspace.workCardLabel}</p>
                <span className="rounded-full bg-[#ffd166]/14 px-2 py-1 text-[0.65rem] font-semibold text-[#ffd166]">
                  {copy.heroWorkspace.approval}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white">
                {copy.heroWorkspace.workCardTitle}
              </h3>
              <p className="mt-2 text-xs leading-5 text-[#aab8c9]">
                {copy.heroWorkspace.workCardDescription}
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {copy.heroWorkspace.workCardActions.map((item) => (
                  <span
                    className="rounded-md border border-white/10 bg-[#05080c] px-3 py-2 text-center text-[0.68rem] font-semibold text-[#d7ffe9]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <aside className="border-t border-white/10 bg-[#06090d] p-4 lg:border-l lg:border-t-0">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#7f91a8]">
              {copy.heroWorkspace.contextGraph}
            </p>
            <div className="mt-3 grid gap-2">
              {copy.knowledgeRecords.map(([type, title, meta], index) => (
                <div
                  className="rounded-md border border-white/8 bg-white/[0.035] p-3"
                  key={title}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#7f91a8]">
                      {type}
                    </p>
                    <StatusDot tone={index === 0 ? "green" : "cyan"} />
                  </div>
                  <h3 className="mt-2 text-xs font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-[0.68rem] text-[#91a2b8]">{meta}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-white/8 bg-white/[0.03] p-3">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[#206ae9]">
                {copy.heroWorkspace.automationRun}
              </p>
              <div className="mt-3 space-y-3">
                {copy.heroWorkspace.automationSteps.map(
                  (item, index) => (
                    <div className="flex items-center gap-2" key={item}>
                      <StatusDot tone={index === 2 ? "amber" : "green"} />
                      <p className="text-xs text-[#d7ffe9]">{item}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function PrimitiveGrid({ copy }: { copy: HomeCopy }) {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[#080d12] py-20 md:py-24">
      <div className="absolute inset-0 opacity-45">
        <ExperimentVisual
          alt=""
          className="h-full rounded-none border-0 opacity-70 shadow-none"
          src="/images/jobdone-ai/neon-abstract-glass-primitives.png"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#080d12_0%,rgba(8,13,18,0.86)_34%,rgba(8,13,18,0.62)_100%)]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div data-reveal="rise">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#206ae9]">
              {copy.primitiveEyebrow}
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.primitiveTitle}
            </h2>
          </div>
          <div
            className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2"
            data-reveal-stagger
          >
            {copy.systemPrimitives.map(([title, description]) => (
              <article className="bg-[#0b1117] p-6" data-reveal="rise" key={title}>
                <div className="mb-8 h-px w-full bg-[linear-gradient(90deg,#206ae9,transparent)]" />
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#91a2b8]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CoworkingSection({ copy }: { copy: HomeCopy }) {
  return (
    <section className="bg-[#05080c] py-20 md:py-24">
      <Container>
        <div className="mb-10 max-w-3xl" data-reveal="rise">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#60efff]">
            {copy.coworkingEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {copy.coworkingTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#9aabbf]">
            {copy.coworkingDescription}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-white/10 bg-[#0b1117] p-4">
            <div className="grid gap-3 md:grid-cols-2" data-reveal-stagger>
              {copy.coworkingCards.map(([title, description], index) => (
                <Card
                  className="relative min-h-40 overflow-hidden border-white/10 bg-white/[0.035] py-0"
                  data-reveal="rise"
                  key={title}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#60efff,transparent)]" />
                  <CardHeader className="p-5 pb-0">
                    <Badge className="grid size-9 rounded-md p-0 font-mono text-xs font-black">
                      {index + 1}
                    </Badge>
                    <CardTitle className="mt-8 text-lg font-semibold text-white">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <CardDescription className="text-sm leading-6 text-[#91a2b8]">
                      {description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#0b1117] p-4" data-reveal="scale">
            <div className="rounded-md border border-[#206ae9]/20 bg-[#206ae9]/8 p-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#c8d8ff]">
                {copy.directContextLinks}
              </p>
              <div className="mt-5 grid gap-3">
                {copy.directContextItems.map(([label, detail], index) => (
                  <div className="flex items-center gap-3 rounded-md border border-white/10 bg-[#05080c] p-3" key={label}>
                    <StatusDot tone={index === 2 ? "green" : index === 3 ? "cyan" : "amber"} />
                    <div>
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="mt-1 text-xs text-[#8ea0b5]">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CollaborationFlow({ copy }: { copy: HomeCopy }) {
  return (
    <section className="bg-[#05080c] py-20 md:py-24">
      <Container>
        <div
          className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          data-reveal="rise"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#60efff]">
              {copy.flowEyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.flowTitle}
            </h2>
          </div>
          <Link
            className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#206ae9] hover:text-white"
            href="/platform"
          >
            {copy.flowLink}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4" data-reveal-stagger>
          {copy.collaborationFlow.map(([step, title, description]) => (
            <article
              className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b1117] p-6"
              data-reveal="rise"
              key={title}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#206ae9,transparent)]" />
              <p className="font-mono text-xs text-[#206ae9]">{step}</p>
              <h3 className="mt-10 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#91a2b8]">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BusinessValueBand({ copy }: { copy: HomeCopy }) {
  return (
    <section className="relative z-10 -mt-12 bg-transparent pb-20">
      <Container>
        <div
          className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:grid-cols-2 lg:grid-cols-5"
          data-reveal="scale"
        >
          {copy.businessValue.map(([title, description], index) => (
            <article
              className="relative bg-[linear-gradient(180deg,rgba(13,24,37,0.9),rgba(8,13,18,0.92))] p-6 md:p-8"
              key={title}
            >
              <div className="mb-6 grid size-14 place-items-center rounded-lg border border-[#2f6fff]/25 bg-[#206ae9]/10 font-mono text-sm text-[#8fb5ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#9aabbf]">
                {description}
              </p>
              <span className="mt-5 block h-px w-24 bg-[linear-gradient(90deg,#206ae9,transparent)]" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ControlsSection({ copy }: { copy: HomeCopy }) {
  return (
    <section className="bg-[#080d12] py-20 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div
            className="rounded-lg border border-white/10 bg-[#0b1117] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.26)]"
            data-reveal="scale"
          >
            <div className="rounded-md border border-white/10 bg-[#05080c] p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8ea0b5]">
                  {copy.governance.packetLabel}
                </p>
                <span className="rounded-full border border-[#ffd166]/30 bg-[#ffd166]/10 px-2 py-1 text-[0.66rem] font-semibold text-[#ffd166]">
                  {copy.governance.review}
                </span>
              </div>
              {copy.governance.rows.map(([label, value]) => (
                <div
                  className="grid gap-1 border-t border-white/8 py-4 first:border-t-0 first:pt-0"
                  key={label}
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#7f91a8]">
                    {label}
                  </p>
                  <p className="text-sm leading-6 text-white">{value}</p>
                </div>
              ))}
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <button
                  className="min-h-11 rounded-md bg-[#206ae9] px-4 text-sm font-semibold text-white"
                  type="button"
                >
                  {copy.governance.approve}
                </button>
                <button
                  className="min-h-11 rounded-md border border-white/12 bg-white/[0.03] px-4 text-sm font-semibold text-white"
                  type="button"
                >
                  {copy.governance.askChanges}
                </button>
              </div>
            </div>
          </div>
          <div data-reveal="rise">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#206ae9]">
              {copy.governance.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.governance.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#9aabbf]">
              {copy.governance.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.governanceItems.map(([title, description]) => (
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4" key={title}>
                  <StatusDot tone="green" />
                  <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#91a2b8]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCta({ copy }: { copy: HomeCopy }) {
  return (
    <section className="bg-[#05080c] pb-10">
      <Container>
        <div
          className="relative overflow-hidden rounded-lg border border-[#206ae9]/20 bg-[linear-gradient(135deg,rgba(32,106,233,0.16),rgba(8,13,18,0.82)_36%,rgba(5,8,12,0.94))] p-8 md:p-12"
          data-reveal="scale"
        >
          <div className="absolute inset-y-0 right-0 hidden w-[58%] bg-[url('/images/jobdone-ai/neon-abstract-glass-primitives.png')] bg-cover bg-center opacity-34 md:block" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1117_0%,rgba(11,17,23,0.9)_33%,rgba(11,17,23,0.35)_70%,transparent_100%)]" />
          <div className="relative max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#206ae9]">
              {copy.finalCta.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.finalCta.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#9aabbf]">
              {copy.finalCta.description}
            </p>
            <div className="mt-7">
              <Button href="/contact">{copy.finalCta.button}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);

  return (
    <main className="bg-[#05080c] text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-[#030609]">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,#05080c)]" />
        <Container className="relative pb-28 pt-20 md:pb-36 md:pt-28">
          <div className="relative z-10 grid min-w-0 gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
            <div className="min-w-0">
              <h1
                className="max-w-full text-[clamp(2.3rem,9.5vw,4.5rem)] font-semibold leading-[0.97] tracking-tight text-white md:max-w-3xl md:text-7xl"
                data-reveal="rise"
              >
                {copy.heroTitle}
              </h1>
              <p
                className="reveal-delay-1 mt-7 max-w-full text-base leading-7 text-[#a4b3c6] md:max-w-2xl md:text-lg md:leading-8"
                data-reveal="rise"
              >
                {copy.heroDescription}
              </p>
              <div
                className="reveal-delay-2 mt-9 flex flex-col gap-3 sm:flex-row"
                data-reveal="rise"
              >
                <Button href="/platform">{copy.primaryCta}</Button>
                <Button className="!border-white/14 !bg-white/[0.025] !text-white hover:!border-[#206ae9]/40 hover:!bg-[#206ae9]/10" href="/products" variant="secondary">
                  {copy.secondaryCta}
                </Button>
              </div>
            </div>
            <div className="reveal-delay-2 relative min-w-0" data-reveal="scale">
              {useImagegenExperimentVisuals ? (
                <ExperimentVisual
                  alt={copy.heroAlt}
                  className="aspect-[16/9] lg:-mr-[18vw] lg:w-[calc(100%+18vw)]"
                  imageClassName="object-contain"
                  priority
                  src="/images/jobdone-ai/neon-home-edge-to-edge-black.png"
                  variant="blend"
                />
              ) : (
                <HeroWorkspace copy={copy} />
              )}
            </div>
          </div>
        </Container>
      </section>

      <BusinessValueBand copy={copy} />
      <CoworkingSection copy={copy} />
      <PrimitiveGrid copy={copy} />
      <CollaborationFlow copy={copy} />
      <ControlsSection copy={copy} />
      <FinalCta copy={copy} />
    </main>
  );
}
