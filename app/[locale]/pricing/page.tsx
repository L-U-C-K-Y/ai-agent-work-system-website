import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { ComponentPropsWithoutRef } from "react";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const pageCopy = {
  en: {
    metadataTitle: "Pricing",
    metadataDescription:
      "Pricing for JobDone AI is scoped around AI Coworkers, AI Automations, governed workspaces, usage, and support.",
    title: "Pricing shaped around accountable AI work.",
    description:
      "JobDone AI is scoped around the workspaces, AI Coworkers, AI Automations, governance, usage, and support your teams need.",
    primaryCta: "Request access",
    secondaryCta: "Explore platform",
    modelTitle: "Commercial scope follows the work system.",
    modelDescription:
      "Instead of public plan boxes, we shape the commercial model around the operating layer you want to build and the responsibility it needs to carry.",
    pillars: [
      {
        title: "AI Coworkers",
        description:
          "Named AI teammates with roles, memory, approved tools, visible progress, and review boundaries.",
      },
      {
        title: "AI Automations",
        description:
          "Flexible inputs that create work, use approved knowledge, update records, and route approvals.",
      },
      {
        title: "Knowledge + Records",
        description:
          "Connected source material and flexible structured databases attached to the work.",
      },
      {
        title: "Governance + Evidence",
        description:
          "Approval checkpoints, audit trails, and visible runtime state for accountable operation.",
      },
      {
        title: "Support + Integration",
        description:
          "Exploration, configuration, workspace rollout, and adoption support for real workflows.",
      },
    ],
    factorsTitle: "What shapes pricing.",
    factorsDescription:
      "The right package depends on how much real work JobDone AI should carry, how governed that work must be, and how your teams want to operate.",
    factors: [
      "Workspace scope and the number of operating rooms",
      "Expected AI Coworker and AI Automation activity",
      "Included model capacity for normal operation",
      "Optional customer-owned model access where appropriate",
      "Knowledge, record, approval, and evidence requirements",
      "Implementation and AI adoption support",
    ],
    usageTitle: "Usage without turning the page into a meter.",
    usageDescription:
      "Usage is discussed at a system level: included model capacity, expected AI Coworker and AI Automation activity, and optional customer-owned model access where it fits the operating model.",
    scopeLabels: {
      rooms: "workspaces",
      coworkers: "AI Coworkers",
      automations: "AI Automations",
      records: "records",
      evidence: "evidence",
    },
    comparisonTitle: "Built for commercial clarity before scale.",
    comparisonDescription:
      "Early scope should be understandable: what work runs, which AI roles act, what records change, where approvals stop the flow, and how evidence is retained.",
    finalTitle: "Start with the work system you want to run.",
    finalDescription:
      "Tell us which workflow, team, or business area you want JobDone AI to support. We will shape the right commercial path around it.",
  },
  de: {
    metadataTitle: "Preise",
    metadataDescription:
      "Preise für JobDone AI werden rund um AI Coworker, AI-Automatisierungen, gesteuerte Workspaces, Nutzung und Unterstützung scoped.",
    title: "Preise, passend zu verantwortbarer AI-Arbeit.",
    description:
      "JobDone AI wird nach den Workspaces, AI Coworkern, AI-Automatisierungen, Governance, Nutzung und Unterstützung scoped, die eure Teams brauchen.",
    primaryCta: "Zugang anfragen",
    secondaryCta: "Plattform erkunden",
    modelTitle: "Der kommerzielle Umfang folgt dem Arbeitssystem.",
    modelDescription:
      "Statt öffentliche Planboxen zu zeigen, formen wir das kommerzielle Modell um die operative Ebene, die ihr aufbauen wollt, und die Verantwortung, die sie tragen muss.",
    pillars: [
      {
        title: "AI Coworker",
        description:
          "Benannte AI-Teamkollegen mit Rollen, Memory, freigegebenen Tools, sichtbarem Fortschritt und Prüfgrenzen.",
      },
      {
        title: "AI-Automatisierungen",
        description:
          "Flexible Eingänge, die Arbeit erstellen, freigegebenes Wissen nutzen, Datensätze aktualisieren und Freigaben routen.",
      },
      {
        title: "Wissen + Datensätze",
        description:
          "Verbundene Quellen und flexible strukturierte Datenbanken, die an der Arbeit hängen.",
      },
      {
        title: "Governance + Nachweise",
        description:
          "Freigabepunkte, Audit-Spuren und sichtbarer Runtime-Status für verantwortbaren Betrieb.",
      },
      {
        title: "Support + Integration",
        description:
          "Exploration, Konfiguration, Workspace-Rollout und Adoption-Unterstützung für echte Workflows.",
      },
    ],
    factorsTitle: "Was den Preisrahmen prägt.",
    factorsDescription:
      "Das passende Paket hängt davon ab, wie viel echte Arbeit JobDone AI tragen soll, wie stark diese Arbeit gesteuert sein muss und wie eure Teams operieren wollen.",
    factors: [
      "Workspace-Umfang und Anzahl operativer Räume",
      "Erwartete Aktivität von AI Coworkern und AI-Automatisierungen",
      "Eingeschlossene Modellkapazität für den normalen Betrieb",
      "Optionale kundeneigene Modellzugänge, wo passend",
      "Anforderungen an Wissen, Datensätze, Freigaben und Nachweise",
      "Implementierungs- und AI-Adoption-Unterstützung",
    ],
    usageTitle: "Nutzung, ohne die Seite zu einem Zähler zu machen.",
    usageDescription:
      "Nutzung besprechen wir auf Systemebene: eingeschlossene Modellkapazität, erwartete Aktivität von AI Coworkern und AI-Automatisierungen sowie optionale kundeneigene Modellzugänge, wenn es zum Betriebsmodell passt.",
    scopeLabels: {
      rooms: "Workspaces",
      coworkers: "AI Coworker",
      automations: "AI-Automatisierungen",
      records: "Datensätze",
      evidence: "Nachweise",
    },
    comparisonTitle: "Gebaut für kommerzielle Klarheit vor Skalierung.",
    comparisonDescription:
      "Früher Umfang sollte verständlich sein: welche Arbeit läuft, welche AI-Rollen handeln, welche Datensätze sich ändern, wo Freigaben den Ablauf stoppen und wie Nachweise erhalten bleiben.",
    finalTitle: "Starte mit dem Arbeitssystem, das ihr betreiben wollt.",
    finalDescription:
      "Sag uns, welchen Workflow, welches Team oder welchen Geschäftsbereich JobDone AI unterstützen soll. Wir formen den passenden kommerziellen Weg darum.",
  },
} as const;

type PricingCopy = (typeof pageCopy)[keyof typeof pageCopy];

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
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`rounded-lg border border-white/10 bg-[#08111b]/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_26px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function PricingScopeVisual({ copy }: { copy: PricingCopy }) {
  const labels = copy.scopeLabels;
  const nodes = [
    [labels.rooms, "left-[8%] top-[16%]"],
    [labels.coworkers, "right-[8%] top-[18%]"],
    [labels.automations, "left-[11%] bottom-[18%]"],
    [labels.records, "right-[12%] bottom-[17%]"],
    [labels.evidence, "left-1/2 top-[8%] -translate-x-1/2"],
  ] as const;

  return (
    <GlassPanel className="relative min-h-[26rem] overflow-hidden bg-[#03070b]/86 p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(32,106,233,0.22),transparent_42%),radial-gradient(circle_at_78%_18%,rgba(96,239,255,0.12),transparent_32%)]" />
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full opacity-70"
        viewBox="0 0 760 460"
      >
        <defs>
          <linearGradient id="pricing-line" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#206ae9" stopOpacity="0" />
            <stop offset="0.48" stopColor="#60efff" stopOpacity="0.74" />
            <stop offset="1" stopColor="#206ae9" stopOpacity="0" />
          </linearGradient>
          <filter id="pricing-glow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        {[
          "M120 100 C230 180 296 230 380 230",
          "M640 100 C530 180 464 230 380 230",
          "M140 360 C240 298 302 230 380 230",
          "M622 360 C520 300 460 230 380 230",
          "M380 58 L380 230",
        ].map((d) => (
          <path
            d={d}
            fill="none"
            key={d}
            stroke="url(#pricing-line)"
            strokeWidth="1.5"
          />
        ))}
        {[
          [380, 230],
          [120, 100],
          [640, 100],
          [140, 360],
          [622, 360],
          [380, 58],
        ].map(([cx, cy]) => (
          <circle
            cx={cx}
            cy={cy}
            fill="#60efff"
            fillOpacity="0.55"
            filter="url(#pricing-glow)"
            key={`${cx}-${cy}`}
            r="7"
          />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 z-10 w-[min(22rem,78vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#60efff]/20 bg-[#06111b]/90 p-5 text-center shadow-[0_0_80px_rgba(32,106,233,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#60efff]">
          JobDone AI
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white">
          {copy.modelTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-[18rem] text-sm leading-6 text-[#9aabbf]">
          {copy.modelDescription}
        </p>
      </div>
      {nodes.map(([label, position]) => (
        <div
          className={`absolute z-10 hidden rounded-xl border border-white/10 bg-[#071522]/88 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_54px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:block ${position}`}
          key={label}
        >
          <span className="mr-2 inline-block size-2 rounded-full bg-[#60efff] shadow-[0_0_18px_rgba(96,239,255,0.6)]" />
          {label}
        </div>
      ))}
    </GlassPanel>
  );
}

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);

  return (
    <main className="bg-[#05080c] text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-black">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_50%_0%,rgba(32,106,233,0.18),transparent_52%)]" />
        <Container className="relative grid min-h-[660px] items-center gap-10 py-20 md:py-28 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-4xl" data-reveal="rise">
            <h1 className="text-[clamp(3rem,8vw,6.8rem)] font-semibold leading-[0.94] tracking-tight">
              {copy.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#a4b3c6] md:text-xl md:leading-9">
              {copy.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">{copy.primaryCta}</Button>
              <Button
                className="!border-white/14 !bg-white/[0.025] !text-white hover:!border-[#206ae9]/40 hover:!bg-[#206ae9]/10"
                href="/platform"
                variant="secondary"
              >
                {copy.secondaryCta}
              </Button>
            </div>
          </div>
          <div data-reveal="scale">
            <PricingScopeVisual copy={copy} />
          </div>
        </Container>
      </section>

      <section className="bg-[#020508] py-16 md:py-24">
        <Container>
          <div className="max-w-3xl" data-reveal="rise">
            <h2 className="text-3xl font-medium leading-tight md:text-5xl">
              {copy.modelTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#9aabbf]">
              {copy.modelDescription}
            </p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {copy.pillars.map((pillar, index) => (
              <Card
                className="border-white/10 bg-white/[0.025]"
                data-reveal="rise"
                key={pillar.title}
              >
                <CardHeader className="pb-3">
                  <p className="font-mono text-xs text-[#60efff]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-[#9aabbf]">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#05090d] py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div data-reveal="rise">
            <h2 className="text-3xl font-medium leading-tight md:text-5xl">
              {copy.factorsTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#9aabbf]">
              {copy.factorsDescription}
            </p>
          </div>
          <GlassPanel className="p-4" data-reveal="scale">
            <div className="grid gap-3 sm:grid-cols-2">
              {copy.factors.map((factor, index) => (
                <div
                  className="rounded-lg border border-white/10 bg-[#050b12]/66 p-4"
                  key={factor}
                >
                  <p className="font-mono text-xs text-[#8fb5ff]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-base font-medium leading-6 text-white">
                    {factor}
                  </p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </Container>
      </section>

      <section className="bg-[#020508] py-16 md:py-24">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <GlassPanel className="relative min-h-[24rem] overflow-hidden p-5" data-reveal="scale">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(96,239,255,0.16),transparent_36%)]" />
            <div className="relative grid gap-3">
              {copy.pillars.slice(0, 4).map((pillar, index) => (
                <div
                  className="grid grid-cols-[3rem_1fr] gap-3 rounded-lg border border-white/10 bg-[#050b12]/70 p-3"
                  key={pillar.title}
                >
                  <span className="grid size-10 place-items-center rounded-md border border-[#206ae9]/35 bg-[#071522] font-mono text-xs text-[#8fb5ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-white">
                      {pillar.title}
                    </h3>
                    <div className="mt-3 h-2 max-w-[92%] rounded-full bg-[linear-gradient(90deg,rgba(32,106,233,0.68),rgba(96,239,255,0.12))]" />
                    <div className="mt-2 h-2 max-w-[64%] rounded-full bg-[linear-gradient(90deg,rgba(96,239,255,0.24),rgba(32,106,233,0.06))]" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
          <div data-reveal="rise">
            <h2 className="text-3xl font-medium leading-tight md:text-5xl">
              {copy.usageTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#9aabbf]">
              {copy.usageDescription}
            </p>
            <h3 className="mt-10 text-2xl font-medium text-white">
              {copy.comparisonTitle}
            </h3>
            <p className="mt-4 text-base leading-7 text-[#9aabbf]">
              {copy.comparisonDescription}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#020508] pb-16 md:pb-24">
        <Container>
          <div
            className="relative overflow-hidden rounded-lg border border-[#206ae9]/45 bg-[#071522] p-8 md:p-14"
            data-reveal="scale"
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.97),rgba(7,21,34,0.76),rgba(7,21,34,0.96)),url('/images/jobdone-ai/neon-abstract-glass-primitives.png')] bg-cover bg-center opacity-95" />
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
