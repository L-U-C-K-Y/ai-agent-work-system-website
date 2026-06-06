import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const pageCopy = {
  en: {
    metadataTitle: "AI Adoption",
    metadataDescription:
      "Move from disconnected AI experiments to integrated, accountable work systems with JobDone AI.",
    title: "Adopt AI agents where real work happens.",
    description:
      "JobDone AI helps teams move from disconnected AI experiments to governed workflows where people, AI Coworkers, and AI Automations coordinate inside one operating layer.",
    primaryCta: "Request access",
    secondaryCta: "Explore platform",
    heroVisual: {
      signal: "business signal",
      mapping: "workflow mapping",
      workspace: "JobDone AI workspace",
      coworker: "AI Coworkers",
      automation: "AI Automations",
      records: "knowledge + records",
      approvals: "approvals",
      evidence: "evidence",
    },
    journeyTitle: "From exploration to operating rhythm.",
    journeyDescription:
      "Adoption becomes practical when the path moves from business reality into a working system, not a separate AI side project.",
    journey: [
      {
        title: "Explore",
        description:
          "Map work, signals, knowledge, records, approvals, and team boundaries.",
      },
      {
        title: "Integrate",
        description:
          "Configure work rooms, inputs, AI Coworkers, AI Automations, knowledge, records, and approvals.",
      },
      {
        title: "Operate",
        description:
          "Run work with visible ownership, approval checkpoints, record updates, and evidence.",
      },
      {
        title: "Expand",
        description:
          "Turn the first workspace into repeatable patterns for more teams and workflows.",
      },
    ],
    phases: [
      {
        title: "Exploration",
        description:
          "We start with the work itself: where requests arrive, how decisions happen, which knowledge matters, which records change, and where people need control.",
        output: "Output: scoped AI work opportunities and a pilot path.",
        items: [
          "Workflow and business signal map",
          "Knowledge, records, and approval inventory",
          "Team boundaries and ownership model",
        ],
      },
      {
        title: "Integration",
        description:
          "The mapped workflow becomes a real JobDone AI workspace with communication rooms, flexible inputs, AI Coworkers, AI Automations, connected knowledge, records, and approvals.",
        output: "Output: first operating workspace on JobDone AI.",
        items: [
          "Work rooms and work card structure",
          "AI Coworker roles and AI Automation inputs",
          "Knowledge, records, and approval routing",
        ],
      },
      {
        title: "Operation",
        description:
          "Teams monitor work, evidence, approvals, record changes, and adoption patterns while the system becomes a repeatable way to run agent-assisted work.",
        output: "Output: expansion path across teams and workflows.",
        items: [
          "Runtime and evidence review",
          "Approval and record-change visibility",
          "Repeatable workspace patterns",
        ],
      },
    ],
    mapTitle: "Adoption work lands inside the platform.",
    mapDescription:
      "Exploration and integration connect directly to the operating layer that runs the work: shared rooms, AI Coworkers, AI Automations, knowledge, records, approvals, and audit evidence.",
    platformTitle: "Why the platform matters.",
    platformDescription:
      "AI adoption needs more than advice and isolated tools. It needs a place where agent work can be assigned, inspected, approved, and connected to the knowledge and structured records that already shape the business.",
    platformLinks: [
      ["AI Coworkers", { pathname: "/platform", hash: "ai-coworkers" }],
      ["AI Automations", { pathname: "/platform", hash: "ai-automations" }],
      ["Knowledge", { pathname: "/platform", hash: "knowledge" }],
      ["Records", { pathname: "/platform", hash: "records" }],
      ["Approvals", { pathname: "/platform", hash: "approvals" }],
      ["Audit and evidence", { pathname: "/platform", hash: "audit-evidence" }],
    ],
    handoffTitle: "From adoption plan to live work system.",
    handoffDescription:
      "The first scoped workflow does not stay in a deck. It becomes a workspace where people and AI agents coordinate, update knowledge and records, and keep the trail inspectable.",
    finalTitle: "Start with an AI adoption conversation.",
    finalDescription:
      "Bring the workflow, team, or business signal you want to make real. We will help shape the first path into JobDone AI.",
  },
  de: {
    metadataTitle: "AI Adoption",
    metadataDescription:
      "Von getrennten KI-Experimenten zu integrierten, verantwortlichen Arbeitssystemen mit JobDone AI.",
    title: "KI-Agenten dort einführen, wo echte Arbeit passiert.",
    description:
      "JobDone AI hilft Teams, von getrennten KI-Experimenten zu gesteuerten Workflows zu kommen, in denen Menschen, AI Coworker und AI Automatisierungen in einer operativen Ebene zusammenarbeiten.",
    primaryCta: "Zugang anfragen",
    secondaryCta: "Plattform erkunden",
    heroVisual: {
      signal: "Business-Signal",
      mapping: "Workflow-Mapping",
      workspace: "JobDone AI Workspace",
      coworker: "AI Coworker",
      automation: "AI Automatisierungen",
      records: "Wissen + Datensätze",
      approvals: "Freigaben",
      evidence: "Nachweise",
    },
    journeyTitle: "Von Exploration zu operativem Rhythmus.",
    journeyDescription:
      "AI Adoption wird praktisch, wenn der Weg aus der echten Business-Arbeit in ein funktionierendes System führt, nicht in ein separates KI-Nebenprojekt.",
    journey: [
      {
        title: "Explorieren",
        description:
          "Arbeit, Signale, Wissen, Datensätze, Freigaben und Teamgrenzen abbilden.",
      },
      {
        title: "Integrieren",
        description:
          "Arbeitsräume, Inputs, AI Coworker, AI Automatisierungen, Wissen, Datensätze und Freigaben konfigurieren.",
      },
      {
        title: "Betreiben",
        description:
          "Arbeit mit sichtbarer Verantwortung, Freigabepunkten, Datensatzupdates und Nachweisen ausführen.",
      },
      {
        title: "Erweitern",
        description:
          "Den ersten Workspace in wiederholbare Muster für weitere Teams und Workflows überführen.",
      },
    ],
    phases: [
      {
        title: "Exploration",
        description:
          "Wir starten mit der Arbeit selbst: wo Anfragen ankommen, wie Entscheidungen passieren, welches Wissen zählt, welche Datensätze sich ändern und wo Menschen Kontrolle brauchen.",
        output: "Output: abgegrenzte AI-Arbeitsmöglichkeiten und Pilotpfad.",
        items: [
          "Workflow- und Business-Signal-Map",
          "Inventar für Wissen, Datensätze und Freigaben",
          "Teamgrenzen und Verantwortungsmodell",
        ],
      },
      {
        title: "Integration",
        description:
          "Der abgebildete Workflow wird zu einem echten JobDone AI Workspace mit Kommunikationsräumen, flexiblen Inputs, AI Coworkern, AI Automatisierungen, verbundenem Wissen, Datensätzen und Freigaben.",
        output: "Output: erster operativer Workspace auf JobDone AI.",
        items: [
          "Arbeitsräume und Work-Card-Struktur",
          "Rollen für AI Coworker und Inputs für AI Automatisierungen",
          "Routing für Wissen, Datensätze und Freigaben",
        ],
      },
      {
        title: "Operation",
        description:
          "Teams beobachten Arbeit, Nachweise, Freigaben, Datensatzänderungen und Adoptionsmuster, während das System zu einer wiederholbaren Arbeitsweise mit AI Agenten wird.",
        output: "Output: Erweiterungspfad über Teams und Workflows.",
        items: [
          "Runtime- und Nachweisprüfung",
          "Sichtbarkeit für Freigaben und Datensatzänderungen",
          "Wiederholbare Workspace-Muster",
        ],
      },
    ],
    mapTitle: "Adoptionsarbeit landet direkt in der Plattform.",
    mapDescription:
      "Exploration und Integration verbinden sich mit der operativen Ebene, die Arbeit ausführt: gemeinsame Räume, AI Coworker, AI Automatisierungen, Wissen, Datensätze, Freigaben und Audit-Nachweise.",
    platformTitle: "Warum die Plattform wichtig ist.",
    platformDescription:
      "AI Adoption braucht mehr als Beratung und isolierte Tools. Sie braucht einen Ort, an dem Agentenarbeit zugewiesen, geprüft, freigegeben und mit dem Wissen sowie den strukturierten Datensätzen verbunden wird, die das Business bereits prägen.",
    platformLinks: [
      ["AI Coworker", { pathname: "/platform", hash: "ai-coworkers" }],
      ["AI Automatisierungen", { pathname: "/platform", hash: "ai-automations" }],
      ["Wissen", { pathname: "/platform", hash: "knowledge" }],
      ["Datensätze", { pathname: "/platform", hash: "records" }],
      ["Freigaben", { pathname: "/platform", hash: "approvals" }],
      ["Audit und Nachweise", { pathname: "/platform", hash: "audit-evidence" }],
    ],
    handoffTitle: "Vom Adoption-Plan zum Live-Arbeitssystem.",
    handoffDescription:
      "Der erste abgegrenzte Workflow bleibt nicht in einer Präsentation. Er wird zu einem Workspace, in dem Menschen und AI Agenten koordinieren, Wissen und Datensätze aktualisieren und die Spur prüfbar halten.",
    finalTitle: "Starte mit einem AI Adoption Gespräch.",
    finalDescription:
      "Bring den Workflow, das Team oder das Business-Signal mit, das real werden soll. Wir helfen dabei, den ersten Weg in JobDone AI zu formen.",
  },
} as const;

type AdoptionCopy = (typeof pageCopy)[keyof typeof pageCopy];

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

function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-white/10 bg-[#08111b]/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_26px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function HeroAdoptionVisual({ copy }: { copy: AdoptionCopy }) {
  const labels = copy.heroVisual;
  const sideNodes = [
    labels.signal,
    labels.coworker,
    labels.automation,
    labels.records,
    labels.approvals,
    labels.evidence,
  ];

  return (
    <GlassPanel className="relative min-h-[25rem] overflow-hidden p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(32,106,233,0.28),transparent_36%),linear-gradient(180deg,rgba(8,17,27,0.2),rgba(1,3,5,0.66))]" />
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full opacity-70"
        viewBox="0 0 760 480"
      >
        <defs>
          <linearGradient id="adoption-hero-line" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#206ae9" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60efff" stopOpacity="0.8" />
            <stop offset="1" stopColor="#206ae9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M92 130 C235 128 273 240 380 240 C487 240 526 128 668 130"
          fill="none"
          stroke="url(#adoption-hero-line)"
          strokeWidth="2"
        />
        <path
          d="M92 350 C235 352 273 240 380 240 C487 240 526 352 668 350"
          fill="none"
          stroke="url(#adoption-hero-line)"
          strokeWidth="2"
        />
        <path
          d="M380 60 C380 168 380 196 380 240 C380 284 380 314 380 420"
          fill="none"
          stroke="url(#adoption-hero-line)"
          strokeWidth="2"
        />
      </svg>
      <div className="relative grid min-h-[22rem] place-items-center">
        <div className="w-full max-w-sm rounded-xl border border-[#60efff]/24 bg-[#05080c]/86 p-5 text-center shadow-[0_0_70px_rgba(32,106,233,0.25)]">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#60efff]">
            {labels.mapping}
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white">
            {labels.workspace}
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {[labels.coworker, labels.automation, labels.records, labels.approvals].map(
              (label) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-[#d7e7ff]"
                  key={label}
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
        {sideNodes.map((label, index) => {
          const positions = [
            "left-2 top-7",
            "right-4 top-8",
            "left-4 bottom-8",
            "right-3 bottom-8",
            "left-[38%] top-1",
            "left-[38%] bottom-1",
          ];

          return (
            <div
              className={`absolute hidden min-w-32 rounded-lg border border-white/10 bg-[#071019]/88 p-3 text-xs font-semibold text-white md:block ${positions[index]}`}
              key={`${label}-${index}`}
            >
              <span className="mb-2 block size-1.5 rounded-full bg-[#60efff] shadow-[0_0_16px_rgba(96,239,255,0.65)]" />
              {label}
            </div>
          );
        })}
      </div>
    </GlassPanel>
  );
}

function JourneyTimeline({ copy }: { copy: AdoptionCopy }) {
  return (
    <div className="relative mt-10 grid gap-3 md:grid-cols-4">
      <div className="absolute left-0 right-0 top-8 hidden h-px bg-[linear-gradient(90deg,transparent,#206ae9,transparent)] md:block" />
      {copy.journey.map((item, index) => (
        <div className="relative" key={item.title}>
          <div className="relative z-10 mb-4 grid size-16 place-items-center rounded-xl border border-[#206ae9]/32 bg-[#081522] shadow-[0_0_34px_rgba(32,106,233,0.18)]">
            <span className="font-mono text-sm text-[#8fb5ff]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <Card className="h-full border-white/10 bg-white/[0.025]">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-[#9aabbf]">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

function WorkflowMapVisual({ copy }: { copy: AdoptionCopy }) {
  const labels = copy.heroVisual;
  const nodes = [
    [labels.signal, "left-[5%] top-[12%]"],
    [labels.coworker, "right-[7%] top-[14%]"],
    [labels.records, "left-[8%] bottom-[15%]"],
    [labels.automation, "right-[8%] bottom-[15%]"],
    [labels.approvals, "left-[38%] top-[5%]"],
    [labels.evidence, "left-[40%] bottom-[5%]"],
  ] as const;

  return (
    <GlassPanel className="relative min-h-[28rem] overflow-hidden p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(32,106,233,0.22),transparent_42%)]" />
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full opacity-60"
        viewBox="0 0 760 500"
      >
        <defs>
          <linearGradient id="workflow-map-line" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#206ae9" stopOpacity="0" />
            <stop offset="0.5" stopColor="#206ae9" stopOpacity="0.85" />
            <stop offset="1" stopColor="#60efff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M96 92 C260 168 300 250 380 250",
          "M664 98 C500 168 460 250 380 250",
          "M112 405 C260 330 300 250 380 250",
          "M650 405 C500 330 460 250 380 250",
          "M380 58 L380 442",
        ].map((d) => (
          <path
            d={d}
            fill="none"
            key={d}
            stroke="url(#workflow-map-line)"
            strokeWidth="2"
          />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 z-10 w-[min(20rem,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#60efff]/26 bg-[#05080c]/90 p-5 text-center shadow-[0_0_70px_rgba(32,106,233,0.24)]">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#60efff]">
          {labels.mapping}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          {labels.workspace}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#9aabbf]">
          {copy.mapDescription}
        </p>
      </div>
      {nodes.map(([label, position]) => (
        <div
          className={`absolute z-10 hidden rounded-lg border border-white/10 bg-[#081019]/88 px-4 py-3 text-sm font-semibold text-white md:block ${position}`}
          key={label}
        >
          <span className="mr-2 inline-block size-2 rounded-full bg-[#206ae9] shadow-[0_0_18px_rgba(32,106,233,0.6)]" />
          {label}
        </div>
      ))}
    </GlassPanel>
  );
}

function HandoffVisual({ copy }: { copy: AdoptionCopy }) {
  const lanes = [
    copy.journey[0].title,
    copy.journey[1].title,
    copy.heroVisual.workspace,
    copy.heroVisual.evidence,
  ];

  return (
    <GlassPanel className="relative overflow-hidden p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(96,239,255,0.14),transparent_36%)]" />
      <div className="relative grid gap-3 md:grid-cols-4">
        {lanes.map((lane, index) => (
          <div className="relative rounded-lg border border-white/10 bg-[#05080c]/58 p-4" key={lane}>
            {index < lanes.length - 1 ? (
              <span className="absolute right-[-0.45rem] top-1/2 hidden size-3 -translate-y-1/2 rotate-45 border-r border-t border-[#206ae9]/70 md:block" />
            ) : null}
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#8fb5ff]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-base font-semibold text-white">{lane}</h3>
            <div className="mt-5 space-y-2">
              {[0, 1, 2].map((row) => (
                <div
                  className="h-2 rounded-full bg-[linear-gradient(90deg,rgba(32,106,233,0.55),rgba(96,239,255,0.08))]"
                  key={row}
                  style={{ width: `${92 - row * 16}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}

export default async function AIAdoptionPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);

  return (
    <main className="text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#020508] py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(32,106,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(32,106,233,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(32,106,233,0.18),transparent_55%)]" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-normal text-white md:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#a8b7c9] md:text-xl">
              {copy.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">{copy.primaryCta}</Button>
              <Button href="/platform" variant="secondary">
                {copy.secondaryCta}
              </Button>
            </div>
          </div>
          <HeroAdoptionVisual copy={copy} />
        </Container>
      </section>

      <section className="bg-[#020508] py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium leading-tight md:text-5xl">
              {copy.journeyTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#9aabbf]">
              {copy.journeyDescription}
            </p>
          </div>
          <JourneyTimeline copy={copy} />
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#05090d] py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-4">
            {copy.phases.map((phase, index) => (
              <Card className="border-white/10 bg-[#08111b]/72" key={phase.title}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md border border-[#206ae9]/35 bg-[#206ae9]/12 font-mono text-xs text-[#8fb5ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <CardTitle>{phase.title}</CardTitle>
                      <p className="mt-3 text-sm leading-6 text-[#9aabbf]">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="rounded-md border border-[#206ae9]/24 bg-[#071522]/72 px-3 py-2 text-sm font-medium text-[#d7e7ff]">
                    {phase.output}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#9aabbf]">
                    {phase.items.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#60efff]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <div className="mb-6 max-w-2xl">
              <h2 className="text-3xl font-medium leading-tight md:text-5xl">
                {copy.mapTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#9aabbf]">
                {copy.mapDescription}
              </p>
            </div>
            <WorkflowMapVisual copy={copy} />
          </div>
        </Container>
      </section>

      <section className="bg-[#020508] py-16 md:py-24">
        <Container className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-medium leading-tight md:text-5xl">
              {copy.platformTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#9aabbf]">
              {copy.platformDescription}
            </p>
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {copy.platformLinks.map(([label, href]) => (
                <Button className="justify-between" href={href} key={label} variant="secondary">
                  {label}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-medium text-white">
              {copy.handoffTitle}
            </h3>
            <p className="mb-6 text-base leading-7 text-[#9aabbf]">
              {copy.handoffDescription}
            </p>
            <HandoffVisual copy={copy} />
          </div>
        </Container>
      </section>

      <section className="bg-[#020508] pb-16 md:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-[#206ae9]/45 bg-[#071522] p-8 md:p-14">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.95),rgba(7,21,34,0.72),rgba(7,21,34,0.96)),url('/images/jobdone-ai/neon-abstract-glass-primitives.png')] bg-cover bg-center opacity-90" />
            <div className="relative max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight md:text-5xl">
                {copy.finalTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#b4c5da]">
                {copy.finalDescription}
              </p>
              <div className="mt-8">
                <Button href="/contact">{copy.primaryCta}</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
