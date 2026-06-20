import type { Metadata } from "next";
import Image from "next/image";
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
      "JobDone AI helps teams move from disconnected AI experiments to shared workflows where people, AI Coworkers, and AI Automations work together with clear review points.",
    heroAlt:
      "JobDone AI workspace connecting business signals, AI Coworkers, AI Automations, knowledge, records, approvals, and evidence",
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
    journeyTitle: "From exploration to everyday work.",
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
          "Set up work rooms, incoming requests, AI Coworkers, AI Automations, knowledge, records, and approvals.",
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
          "The mapped workflow becomes a real JobDone AI workspace with communication rooms, flexible entry points, AI Coworkers, AI Automations, connected knowledge, records, and approvals.",
        output: "Output: first live workspace on JobDone AI.",
        items: [
          "Work rooms and work card structure",
          "AI Coworker roles and AI Automation entry points",
          "Knowledge, records, and approval routing",
        ],
      },
      {
        title: "Operation",
        description:
          "Teams monitor work, evidence, approvals, record changes, and adoption patterns while the system becomes a repeatable way to run agent-assisted work.",
        output: "Output: expansion path across teams and workflows.",
        items: [
          "Activity and evidence review",
          "Approval and record-change visibility",
          "Repeatable workspace patterns",
        ],
      },
    ],
    mapTitle: "Adoption work lands inside the platform.",
    mapDescription:
      "Exploration and integration connect directly to the workspace where people and AI do the work: shared rooms, AI Coworkers, AI Automations, knowledge, records, approvals, and audit evidence.",
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
      "Von getrennten AI-Experimenten zu integrierten, verantwortlichen Arbeitssystemen mit JobDone AI.",
    title: "AI dort einführen, wo echte Arbeit passiert.",
    description:
      "JobDone AI hilft Teams, von getrennten AI-Experimenten zu gemeinsamen Workflows zu kommen, in denen Menschen, AI Coworker und AI-Automatisierungen mit klaren Prüfpunkten zusammenarbeiten.",
    heroAlt:
      "JobDone AI Arbeitsbereich verbindet Business-Signale, AI Coworker, AI-Automatisierungen, Wissen, Datensätze, Freigaben und Nachweise",
    primaryCta: "Zugang anfragen",
    secondaryCta: "Plattform erkunden",
    heroVisual: {
      signal: "Business-Signal",
      mapping: "Workflow-Mapping",
      workspace: "JobDone AI Workspace",
      coworker: "AI Coworker",
      automation: "AI-Automatisierungen",
      records: "Wissen + Datensätze",
      approvals: "Freigaben",
      evidence: "Nachweise",
    },
    journeyTitle: "Von Exploration zu operativem Rhythmus.",
    journeyDescription:
      "AI Adoption wird praktisch, wenn der Weg aus der echten Business-Arbeit in ein funktionierendes System führt, nicht in ein separates AI-Nebenprojekt.",
    journey: [
      {
        title: "Explorieren",
        description:
          "Arbeit, Signale, Wissen, Datensätze, Freigaben und Teamgrenzen abbilden.",
      },
      {
        title: "Integrieren",
        description:
          "Arbeitsräume, eingehende Anfragen, AI Coworker, AI-Automatisierungen, Wissen, Datensätze und Freigaben einrichten.",
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
          "Der abgebildete Workflow wird zu einem echten JobDone AI Workspace mit Kommunikationsräumen, flexiblen Eingängen, AI Coworkern, AI-Automatisierungen, verbundenem Wissen, Datensätzen und Freigaben.",
        output: "Output: erster operativer Workspace auf JobDone AI.",
        items: [
          "Arbeitsräume und Work-Card-Struktur",
          "Rollen für AI Coworker und Eingänge für AI-Automatisierungen",
          "Routing für Wissen, Datensätze und Freigaben",
        ],
      },
      {
        title: "Operation",
        description:
          "Teams beobachten Arbeit, Nachweise, Freigaben, Datensatzänderungen und Adoptionsmuster, während das System zu einer wiederholbaren Arbeitsweise mit AI-Teamkollegen wird.",
        output: "Output: Erweiterungspfad über Teams und Workflows.",
        items: [
          "Aktivitäts- und Nachweisprüfung",
          "Sichtbarkeit für Freigaben und Datensatzänderungen",
          "Wiederholbare Workspace-Muster",
        ],
      },
    ],
    mapTitle: "Adoptionsarbeit landet direkt in der Plattform.",
    mapDescription:
      "Exploration und Integration verbinden sich direkt mit dem Arbeitsbereich, in dem Menschen und AI arbeiten: gemeinsame Räume, AI Coworker, AI-Automatisierungen, Wissen, Datensätze, Freigaben und Audit-Nachweise.",
    platformTitle: "Warum die Plattform wichtig ist.",
    platformDescription:
      "AI Adoption braucht mehr als Beratung und isolierte Tools. Sie braucht einen Ort, an dem Agentenarbeit zugewiesen, geprüft, freigegeben und mit dem Wissen sowie den strukturierten Datensätzen verbunden wird, die das Business bereits prägen.",
    platformLinks: [
      ["AI Coworker", { pathname: "/platform", hash: "ai-coworkers" }],
      ["AI-Automatisierungen", { pathname: "/platform", hash: "ai-automations" }],
      ["Wissen", { pathname: "/platform", hash: "knowledge" }],
      ["Datensätze", { pathname: "/platform", hash: "records" }],
      ["Freigaben", { pathname: "/platform", hash: "approvals" }],
      ["Audit und Nachweise", { pathname: "/platform", hash: "audit-evidence" }],
    ],
    handoffTitle: "Vom Adoption-Plan zum Live-Arbeitssystem.",
    handoffDescription:
      "Der erste abgegrenzte Workflow bleibt nicht in einer Präsentation. Er wird zu einem Workspace, in dem Menschen und AI-Teamkollegen koordinieren, Wissen und Datensätze aktualisieren und die Spur prüfbar halten.",
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

function HeroAdoptionVisual({ alt }: { alt: string }) {
  return (
    <div className="relative mt-4 min-h-[18rem] overflow-hidden lg:mt-0 lg:-mr-14 lg:min-h-[34rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_50%,rgba(32,106,233,0.18),transparent_42%)]" />
      <Image
        alt={alt}
        className="absolute inset-0 size-full object-cover object-[62%_58%] opacity-95 [mask-image:linear-gradient(90deg,transparent_0%,black_16%,black_88%,transparent_100%)] lg:object-center"
        height={1024}
        priority
        src="/images/jobdone-ai/neon-ai-adoption-hero.png"
        width={1792}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#020508_0%,transparent_18%,transparent_82%,#020508_100%),linear-gradient(180deg,#020508_0%,transparent_18%,transparent_78%,#020508_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,#020508)]" />
      <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,#020508,transparent)]" />
      <div className="absolute right-[16%] top-[45%] hidden size-2 rounded-full bg-[#60efff] shadow-[0_0_32px_10px_rgba(96,239,255,0.22)] md:block" />
    </div>
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
    [labels.signal, "left-[7%] top-[18%]", "bg-[#071522]/88"],
    [labels.coworker, "right-[8%] top-[18%]", "bg-[#061b28]/88"],
    [labels.records, "left-[9%] bottom-[18%]", "bg-[#071522]/88"],
    [labels.automation, "right-[8%] bottom-[18%]", "bg-[#061b28]/88"],
    [labels.approvals, "left-[41%] top-[7%]", "bg-[#0a1825]/88"],
    [labels.evidence, "left-[42%] bottom-[7%]", "bg-[#0a1825]/88"],
  ] as const;

  return (
    <GlassPanel className="relative min-h-[28rem] overflow-hidden border-white/8 bg-[#03070b]/82 p-5">
      <Image
        alt=""
        className="absolute inset-0 size-full object-cover opacity-16"
        height={887}
        src="/images/jobdone-ai/neon-ai-adoption-hero.png"
        width={1774}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(32,106,233,0.2),transparent_38%),linear-gradient(180deg,rgba(3,7,11,0.52),rgba(3,7,11,0.94))]" />
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full opacity-75"
        viewBox="0 0 760 500"
      >
        <defs>
          <linearGradient id="workflow-map-line" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#206ae9" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60efff" stopOpacity="0.76" />
            <stop offset="1" stopColor="#60efff" stopOpacity="0" />
          </linearGradient>
          <filter id="workflow-glow">
            <feGaussianBlur stdDeviation="4" />
          </filter>
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
            strokeWidth="1.6"
          />
        ))}
        {[
          [380, 250],
          [96, 92],
          [664, 98],
          [112, 405],
          [650, 405],
          [380, 58],
          [380, 442],
        ].map(([cx, cy]) => (
          <circle
            cx={cx}
            cy={cy}
            fill="#60efff"
            fillOpacity="0.55"
            filter="url(#workflow-glow)"
            key={`${cx}-${cy}`}
            r="7"
          />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 z-10 w-[min(21rem,74vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#60efff]/22 bg-[#06111b]/88 p-5 text-center shadow-[0_0_70px_rgba(32,106,233,0.26),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
        <div className="mx-auto mb-4 grid size-12 place-items-center rounded-xl border border-[#206ae9]/40 bg-[#206ae9]/14 shadow-[0_0_36px_rgba(32,106,233,0.28)]">
          <span className="size-2 rounded-full bg-[#60efff] shadow-[0_0_18px_rgba(96,239,255,0.9)]" />
        </div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#60efff]">
          {labels.mapping}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          {labels.workspace}
        </h3>
        <p className="mx-auto mt-3 max-w-[17rem] text-sm leading-6 text-[#9aabbf]">
          {copy.mapDescription}
        </p>
      </div>
      {nodes.map(([label, position, tone]) => (
        <div
          className={`absolute z-10 hidden rounded-xl border border-white/10 ${tone} px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_54px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:block ${position}`}
          key={label}
        >
          <span className="mr-2 inline-block size-2 rounded-full bg-[#60efff] shadow-[0_0_18px_rgba(96,239,255,0.6)]" />
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
          <HeroAdoptionVisual alt={copy.heroAlt} />
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
        <Container className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr]">
          <GlassPanel className="relative self-start overflow-hidden p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(32,106,233,0.18),transparent_34%)]" />
            <span className="absolute bottom-8 left-9 top-8 hidden w-px bg-[linear-gradient(180deg,#206ae9,rgba(96,239,255,0.22),transparent)] md:block" />
            <div className="relative grid gap-3">
            {copy.phases.map((phase, index) => (
              <div
                className="relative grid grid-cols-[3rem_1fr] gap-3 rounded-lg border border-white/10 bg-[#050b12]/66 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                key={phase.title}
              >
                <span className="relative z-10 grid size-10 place-items-center rounded-md border border-[#206ae9]/35 bg-[#071522] font-mono text-xs text-[#8fb5ff] shadow-[0_0_24px_rgba(32,106,233,0.16)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                <div className="min-w-0">
                  <h3 className="text-base font-medium text-white">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#9aabbf]">
                    {phase.output}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {phase.items.map((item) => (
                      <li
                        className="rounded-full border border-[#206ae9]/24 bg-[#071522]/72 px-2.5 py-1 text-[0.72rem] leading-5 text-[#a8b7c9]"
                        key={item}
                      >
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            </div>
          </GlassPanel>
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
