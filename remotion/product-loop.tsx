import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { ReactNode } from "react";

export type ProductLoopVariant = "home" | "platform" | "adoption";

type ProductLoopProps = {
  variant: ProductLoopVariant;
};

type Tone = "blue" | "cyan" | "green" | "amber";

const textureByVariant = {
  home: "images/jobdone-ai/neon-home-edge-to-edge-black.png",
  platform: "images/jobdone-ai/neon-work-card-graph.png",
  adoption: "images/jobdone-ai/neon-ai-adoption-hero.png",
} as const satisfies Record<ProductLoopVariant, string>;

function ease(
  frame: number,
  input: [number, number],
  output: [number, number],
) {
  return interpolate(frame, input, output, {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function wave(frame: number, offset = 0, duration = 300) {
  return 0.5 + Math.sin(((frame + offset) / duration) * Math.PI * 2) * 0.5;
}

function toneColor(tone: Tone) {
  if (tone === "cyan") {
    return "#60efff";
  }

  if (tone === "green") {
    return "#4ade80";
  }

  if (tone === "amber") {
    return "#facc15";
  }

  return "#206ae9";
}

function appearStyle(frame: number, start: number, end: number, y = 18) {
  const visible = ease(frame, [start, end], [0, 1]);

  return {
    opacity: visible,
    transform: `translateY(${(1 - visible) * y}px) scale(${0.98 + visible * 0.02})`,
  };
}

function SceneBase({
  children,
  eyebrow,
  frame,
  variant,
}: {
  children: ReactNode;
  eyebrow: string;
  frame: number;
  variant: ProductLoopVariant;
}) {
  const { durationInFrames } = useVideoConfig();
  const cycle = frame / durationInFrames;
  const glow = 0.78 + wave(frame, 0, durationInFrames) * 0.16;
  const endFade = ease(frame, [durationInFrames - 18, durationInFrames - 1], [0, 0.22]);

  return (
    <AbsoluteFill
      style={{
        background: "#020508",
        color: "white",
        fontFamily:
          "Manrope, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile(textureByVariant[variant])}
        style={{
          height: "100%",
          inset: 0,
          objectFit: "cover",
          opacity: 0.13,
          position: "absolute",
          transform: `scale(${1.04 + cycle * 0.02})`,
          width: "100%",
        }}
      />
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(32,106,233,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(32,106,233,0.08) 1px, transparent 1px)",
          backgroundPosition: `${-cycle * 56}px ${-cycle * 32}px`,
          backgroundSize: "72px 72px",
          inset: 0,
          opacity: 0.34,
          position: "absolute",
        }}
      />
      <div
        style={{
          background:
            "radial-gradient(circle at 66% 48%, rgba(32,106,233,0.32), transparent 36%), radial-gradient(circle at 35% 60%, rgba(96,239,255,0.14), transparent 30%), linear-gradient(90deg, #020508 0%, rgba(2,5,8,0.88) 30%, rgba(2,5,8,0.82) 72%, #020508 100%)",
          inset: 0,
          opacity: glow,
          position: "absolute",
        }}
      />
      <div
        style={{
          alignItems: "center",
          background: "rgba(4,10,17,0.58)",
          border: "1px solid rgba(96,239,255,0.16)",
          borderRadius: 999,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
          display: "inline-flex",
          gap: 12,
          left: 92,
          padding: "12px 18px",
          position: "absolute",
          top: 74,
          ...appearStyle(frame, 0, 36),
        }}
      >
        <span
          style={{
            background: "#60efff",
            borderRadius: 999,
            boxShadow: "0 0 22px rgba(96,239,255,0.6)",
            height: 8,
            width: 8,
          }}
        />
        <div
          style={{
            color: "#60efff",
            fontFamily: "monospace",
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 7,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>
      </div>
      {children}
      <div
        style={{
          background:
            "linear-gradient(90deg, #020508 0%, transparent 15%, transparent 84%, #020508 100%), linear-gradient(180deg, #020508 0%, transparent 15%, transparent 82%, #020508 100%)",
          inset: 0,
          pointerEvents: "none",
          position: "absolute",
        }}
      />
      <div
        style={{
          background: "#020508",
          inset: 0,
          opacity: endFade,
          pointerEvents: "none",
          position: "absolute",
        }}
      />
    </AbsoluteFill>
  );
}

function GlassPanel({
  children,
  frame,
  height,
  left,
  start,
  top,
  width,
}: {
  children: ReactNode;
  frame: number;
  height: number;
  left: number;
  start: number;
  top: number;
  width: number;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(8,18,31,0.88), rgba(4,9,15,0.76))",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 28,
        boxShadow:
          "0 40px 120px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.08)",
        height,
        left,
        overflow: "hidden",
        padding: 28,
        position: "absolute",
        top,
        width,
        ...appearStyle(frame, start, start + 34),
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <>
      <div
        style={{
          color: "#60efff",
          fontFamily: "monospace",
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: 5,
          textTransform: "uppercase",
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          color: "rgba(235,244,255,0.96)",
          fontSize: 28,
          fontWeight: 800,
          marginTop: 12,
        }}
      >
        {title}
      </div>
    </>
  );
}

function MessageBubble({
  author,
  frame,
  start,
  text,
  tone,
}: {
  author: string;
  frame: number;
  start: number;
  text: string;
  tone: Tone;
}) {
  const color = toneColor(tone);

  return (
    <div
      style={{
        background: "rgba(4,10,17,0.72)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderLeft: `3px solid ${color}`,
        borderRadius: 18,
        boxShadow: `0 0 28px color-mix(in srgb, ${color} 12%, transparent)`,
        marginTop: 18,
        padding: "16px 18px",
        ...appearStyle(frame, start, start + 24),
      }}
    >
      <div
        style={{
          alignItems: "center",
          color: "rgba(231,242,255,0.96)",
          display: "flex",
          fontSize: 18,
          fontWeight: 800,
          gap: 10,
        }}
      >
        <span
          style={{
            background: color,
            borderRadius: 999,
            boxShadow: `0 0 18px ${color}`,
            height: 9,
            width: 9,
          }}
        />
        {author}
      </div>
      <div
        style={{
          color: "rgba(164,179,198,0.96)",
          fontSize: 20,
          lineHeight: 1.35,
          marginTop: 9,
        }}
      >
        {text}
      </div>
    </div>
  );
}

function MiniPill({
  label,
  tone = "blue",
}: {
  label: string;
  tone?: Tone;
}) {
  const color = toneColor(tone);

  return (
    <div
      style={{
        alignItems: "center",
        background: "rgba(5,13,23,0.78)",
        border: `1px solid color-mix(in srgb, ${color} 36%, transparent)`,
        borderRadius: 999,
        color: "rgba(231,242,255,0.94)",
        display: "inline-flex",
        fontSize: 16,
        fontWeight: 700,
        gap: 9,
        padding: "9px 12px",
      }}
    >
      <span
        style={{
          background: color,
          borderRadius: 999,
          boxShadow: `0 0 16px ${color}`,
          height: 7,
          width: 7,
        }}
      />
      {label}
    </div>
  );
}

function WorkCard({
  frame,
  start,
  subtitle,
  title,
}: {
  frame: number;
  start: number;
  subtitle: string;
  title: string;
}) {
  const scan = ((frame - start + 300) % 180) / 180;

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(12,24,38,0.94), rgba(5,12,22,0.9))",
        border: "1px solid rgba(96,239,255,0.28)",
        borderRadius: 26,
        boxShadow:
          "0 28px 110px rgba(0,0,0,0.4), 0 0 80px rgba(32,106,233,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
        overflow: "hidden",
        padding: 28,
        position: "relative",
        ...appearStyle(frame, start, start + 30),
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(96,239,255,0.22), transparent)",
          filter: "blur(12px)",
          height: 100,
          left: `${scan * 100 - 24}%`,
          position: "absolute",
          top: -24,
          transform: "rotate(18deg)",
          width: 110,
        }}
      />
      <SectionTitle kicker="work card" title={title} />
      <div
        style={{
          color: "rgba(164,179,198,0.96)",
          fontSize: 22,
          lineHeight: 1.35,
          marginTop: 16,
        }}
      >
        {subtitle}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
        <MiniPill label="PO matched" tone="green" />
        <MiniPill label="policy cited" tone="cyan" />
        <MiniPill label="owner visible" tone="blue" />
      </div>
    </div>
  );
}

function RecordProposal({
  frame,
  start,
}: {
  frame: number;
  start: number;
}) {
  const rows = ["Laptop Pro 14", "Docking station", "Security key"];

  return (
    <div
      style={{
        background: "rgba(5,12,22,0.84)",
        border: "1px solid rgba(96,239,255,0.18)",
        borderRadius: 22,
        padding: 20,
        ...appearStyle(frame, start, start + 28),
      }}
    >
      <SectionTitle kicker="records" title="Asset records drafted" />
      <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
        {rows.map((row, index) => (
          <div
            key={row}
            style={{
              alignItems: "center",
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              color: "rgba(231,242,255,0.95)",
              display: "grid",
              fontSize: 16,
              gridTemplateColumns: "1fr auto",
              padding: "12px 14px",
              ...appearStyle(frame, start + 12 + index * 6, start + 28 + index * 6, 10),
            }}
          >
            <span>{row}</span>
            <span style={{ color: "#60efff", fontFamily: "monospace" }}>
              draft
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApprovalEvidence({
  frame,
  start,
}: {
  frame: number;
  start: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        ...appearStyle(frame, start, start + 28),
      }}
    >
      <div
        style={{
          background: "rgba(7,19,31,0.9)",
          border: "1px solid rgba(250,204,21,0.32)",
          borderRadius: 18,
          color: "rgba(231,242,255,0.94)",
          padding: 18,
        }}
      >
        <MiniPill label="approval requested" tone="amber" />
        <div style={{ fontSize: 19, fontWeight: 800, marginTop: 13 }}>
          Controller review before records update
        </div>
      </div>
      <div
        style={{
          background: "rgba(5,12,22,0.86)",
          border: "1px solid rgba(74,222,128,0.24)",
          borderRadius: 18,
          color: "rgba(164,179,198,0.96)",
          fontSize: 17,
          padding: 18,
        }}
      >
        <MiniPill label="evidence saved" tone="green" />
        <div style={{ marginTop: 12 }}>
          Message, source, draft records, approval checkpoint
        </div>
      </div>
    </div>
  );
}

function RuntimeSteps({
  frame,
  items,
  start,
  title = "Runtime",
}: {
  frame: number;
  items: readonly { label: string; tone: Tone; value: string }[];
  start: number;
  title?: string;
}) {
  return (
    <div
      style={{
        background: "rgba(5,12,22,0.86)",
        border: "1px solid rgba(96,239,255,0.18)",
        borderRadius: 22,
        padding: 20,
        ...appearStyle(frame, start, start + 28),
      }}
    >
      <SectionTitle kicker="working" title={title} />
      <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
        {items.map((item, index) => {
          const color = toneColor(item.tone);

          return (
            <div
              key={item.label}
              style={{
                alignItems: "center",
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 15,
                color: "rgba(231,242,255,0.96)",
                display: "grid",
                fontSize: 16,
                gap: 14,
                gridTemplateColumns: "auto 1fr auto",
                padding: "12px 14px",
                ...appearStyle(frame, start + 12 + index * 13, start + 28 + index * 13, 8),
              }}
            >
              <span
                style={{
                  background: color,
                  borderRadius: 999,
                  boxShadow: `0 0 18px ${color}`,
                  height: 8,
                  width: 8,
                }}
              />
              <span>{item.label}</span>
              <span
                style={{
                  color: "rgba(164,179,198,0.96)",
                  fontFamily: "monospace",
                  fontSize: 13,
                }}
              >
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function KnowledgeUpdate({
  frame,
  start,
}: {
  frame: number;
  start: number;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(6,22,20,0.86), rgba(4,10,17,0.82))",
        border: "1px solid rgba(74,222,128,0.22)",
        borderRadius: 22,
        padding: 20,
        ...appearStyle(frame, start, start + 28),
      }}
    >
      <SectionTitle kicker="knowledge" title="Context saved" />
      <div
        style={{
          color: "rgba(164,179,198,0.96)",
          fontSize: 17,
          lineHeight: 1.35,
          marginTop: 14,
        }}
      >
        Vendor match, PO rule, and inventory handoff notes are attached to the work.
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
        <MiniPill label="source cited" tone="green" />
        <MiniPill label="note saved" tone="cyan" />
      </div>
    </div>
  );
}

function FlowSvg({
  frame,
  paths,
}: {
  frame: number;
  paths: readonly string[];
}) {
  const progress = ease(frame, [24, 238], [0, 1]);

  return (
    <svg
      aria-hidden="true"
      style={{ inset: 0, opacity: 0.9, position: "absolute" }}
      viewBox="0 0 1920 1080"
    >
      <defs>
        <linearGradient id="flowLine" x1="0" x2="1" y1="0" y2="0">
          <stop stopColor="#206ae9" stopOpacity="0" />
          <stop offset="0.5" stopColor="#60efff" stopOpacity="0.82" />
          <stop offset="1" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
      </defs>
      {paths.map((path, index) => {
        const opacity = ease(progress, [index / paths.length, 1], [0, 1]);
        return (
          <path
            d={path}
            fill="none"
            key={path}
            opacity={opacity}
            stroke="url(#flowLine)"
            strokeDasharray={`${120 + progress * 460} 700`}
            strokeLinecap="round"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
}

function HomeStory({ frame }: { frame: number }) {
  return (
    <SceneBase eyebrow="shared operating surface" frame={frame} variant="home">
      <FlowSvg
        frame={frame}
        paths={[
          "M 610 360 C 760 300 850 300 980 330",
          "M 1010 500 C 1120 560 1210 610 1325 690",
          "M 1040 470 C 1250 470 1400 445 1580 390",
          "M 1240 770 C 1110 835 960 835 820 760",
          "M 1510 520 C 1380 570 1270 610 1160 680",
        ]}
      />
      <GlassPanel frame={frame} height={650} left={100} start={8} top={175} width={560}>
        <SectionTitle kicker="finance room" title="Request becomes work" />
        <MessageBubble
          author="Maya"
          frame={frame}
          start={18}
          text="Atlas invoice needs an inventory handoff."
          tone="blue"
        />
        <MessageBubble
          author="Finance AI"
          frame={frame}
          start={54}
          text="Vendor matched. PO found. Policy cited."
          tone="cyan"
        />
        <MessageBubble
          author="Inventory AI"
          frame={frame}
          start={148}
          text="Five asset records drafted for review."
          tone="green"
        />
        <MessageBubble
          author="JobDone AI"
          frame={frame}
          start={226}
          text="Approval, records, and evidence are linked."
          tone="amber"
        />
      </GlassPanel>
      <div style={{ left: 760, position: "absolute", top: 205, width: 530 }}>
        <WorkCard
          frame={frame}
          start={42}
          subtitle="Invoice -> PO match -> inventory handoff"
          title="Atlas invoice"
        />
      </div>
      <div style={{ left: 1345, position: "absolute", top: 182, width: 455 }}>
        <RuntimeSteps
          frame={frame}
          items={[
            { label: "input received", tone: "blue", value: "message" },
            { label: "skill used", tone: "cyan", value: "invoice match" },
            { label: "knowledge read", tone: "green", value: "policy 2.3" },
            { label: "handoff prepared", tone: "amber", value: "inventory" },
          ]}
          start={70}
          title="Finance AI"
        />
      </div>
      <div style={{ left: 760, position: "absolute", top: 590, width: 420 }}>
        <KnowledgeUpdate frame={frame} start={130} />
      </div>
      <div style={{ left: 1230, position: "absolute", top: 565, width: 430 }}>
        <RecordProposal frame={frame} start={166} />
      </div>
      <div style={{ left: 1290, position: "absolute", top: 775, width: 465 }}>
        <ApprovalEvidence frame={frame} start={218} />
      </div>
    </SceneBase>
  );
}

function LayerCard({
  body,
  frame,
  start,
  title,
  tone,
  x,
  y,
}: {
  body: string;
  frame: number;
  start: number;
  title: string;
  tone: Tone;
  x: number;
  y: number;
}) {
  const color = toneColor(tone);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, rgba(9,20,33,0.92), rgba(4,9,15,0.8))",
        border: `1px solid color-mix(in srgb, ${color} 34%, transparent)`,
        borderRadius: 22,
        boxShadow: `0 0 46px color-mix(in srgb, ${color} 12%, transparent), inset 0 1px 0 rgba(255,255,255,0.08)`,
        left: x,
        padding: 19,
        position: "absolute",
        top: y,
        width: 315,
        ...appearStyle(frame, start, start + 28),
      }}
    >
      <MiniPill label={title} tone={tone} />
      <div
        style={{
          color: "rgba(164,179,198,0.96)",
          fontSize: 17,
          lineHeight: 1.35,
          marginTop: 13,
        }}
      >
        {body}
      </div>
    </div>
  );
}

function PlatformStory({ frame }: { frame: number }) {
  return (
    <SceneBase eyebrow="accountable work graph" frame={frame} variant="platform">
      <FlowSvg
        frame={frame}
        paths={[
          "M 470 260 C 710 260 780 390 920 435",
          "M 1510 270 C 1260 285 1190 395 1040 438",
          "M 390 600 C 640 575 765 530 920 510",
          "M 1530 610 C 1290 590 1190 540 1045 510",
          "M 560 820 C 750 720 840 650 940 575",
          "M 1350 825 C 1180 730 1110 650 1025 575",
        ]}
      />
      <div style={{ left: 705, position: "absolute", top: 330, width: 510 }}>
        <WorkCard
          frame={frame}
          start={18}
          subtitle="Every message, source, draft, and approval stays attached."
          title="Inventory handoff"
        />
      </div>
      <LayerCard
        body="People ask and decide in the same room where work is created."
        frame={frame}
        start={36}
        title="work room"
        tone="blue"
        x={150}
        y={210}
      />
      <LayerCard
        body="Finance AI and Inventory AI act with roles, tools, and visible state."
        frame={frame}
        start={66}
        title="AI Coworkers"
        tone="cyan"
        x={1455}
        y={220}
      />
      <LayerCard
        body="Input lanes receive documents, create work, and route checkpoints."
        frame={frame}
        start={96}
        title="AI Automations"
        tone="blue"
        x={1480}
        y={570}
      />
      <LayerCard
        body="Approved source material is cited, saved, and reused."
        frame={frame}
        start={126}
        title="knowledge"
        tone="green"
        x={135}
        y={565}
      />
      <LayerCard
        body="Structured proposals are drafted before the database updates."
        frame={frame}
        start={156}
        title="records"
        tone="cyan"
        x={385}
        y={795}
      />
      <LayerCard
        body="Risky changes pause for human review."
        frame={frame}
        start={186}
        title="approvals"
        tone="amber"
        x={1220}
        y={805}
      />
      <div style={{ left: 730, position: "absolute", top: 610, width: 470 }}>
        <RuntimeSteps
          frame={frame}
          items={[
            { label: "message received", tone: "blue", value: "09:41:08" },
            { label: "skill run", tone: "cyan", value: "invoice parser" },
            { label: "knowledge updated", tone: "green", value: "handoff note" },
            { label: "record created", tone: "cyan", value: "asset draft" },
            { label: "approval routed", tone: "amber", value: "controller" },
            { label: "evidence saved", tone: "green", value: "complete" },
          ]}
          start={188}
          title="Audit evidence"
        />
      </div>
    </SceneBase>
  );
}

function JourneyColumn({
  frame,
  items,
  start,
  step,
  title,
  x,
}: {
  frame: number;
  items: readonly string[];
  start: number;
  step: string;
  title: string;
  x: number;
}) {
  return (
    <GlassPanel frame={frame} height={530} left={x} start={start} top={260} width={430}>
      <SectionTitle kicker={step} title={title} />
      <div style={{ display: "grid", gap: 13, marginTop: 28 }}>
        {items.map((item, index) => (
          <div
            key={item}
            style={{
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 16,
              color: "rgba(231,242,255,0.94)",
              fontSize: 18,
              padding: "15px 16px",
              ...appearStyle(frame, start + 16 + index * 10, start + 34 + index * 10, 10),
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}

function AdoptionStory({ frame }: { frame: number }) {
  return (
    <SceneBase eyebrow="AI adoption" frame={frame} variant="adoption">
      <div
        style={{
          color: "rgba(235,244,255,0.96)",
          fontSize: 48,
          fontWeight: 800,
          left: 100,
          position: "absolute",
          top: 145,
          ...appearStyle(frame, 8, 38),
        }}
      >
        From workflow map to operating layer
      </div>
      <FlowSvg
        frame={frame}
        paths={[
          "M 520 525 C 650 525 735 525 825 525",
          "M 950 525 C 1070 525 1135 525 1245 525",
          "M 1375 525 C 1495 525 1570 525 1700 525",
        ]}
      />
      <JourneyColumn
        frame={frame}
        items={["Invoice inbox", "ERP records", "Approval boundary", "Knowledge gaps"]}
        start={28}
        step="01"
        title="Explore"
        x={100}
      />
      <JourneyColumn
        frame={frame}
        items={["Work room", "Finance AI skill", "Inventory schema", "Automation trigger"]}
        start={88}
        step="02"
        title="Integrate"
        x={745}
      />
      <JourneyColumn
        frame={frame}
        items={["Work created", "Knowledge updated", "Records drafted", "Evidence retained"]}
        start={148}
        step="03"
        title="Operate"
        x={1390}
      />
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(180deg, rgba(12,24,38,0.94), rgba(4,9,15,0.88))",
          border: "1px solid rgba(96,239,255,0.24)",
          borderRadius: 26,
          bottom: 82,
          boxShadow:
            "0 24px 90px rgba(0,0,0,0.34), 0 0 72px rgba(32,106,233,0.22)",
          display: "flex",
          gap: 16,
          left: 420,
          padding: "18px 22px",
          position: "absolute",
          transformOrigin: "center",
          ...appearStyle(frame, 220, 252, 18),
        }}
      >
        <MiniPill label="input received" tone="blue" />
        <MiniPill label="skill used" tone="cyan" />
        <MiniPill label="knowledge saved" tone="green" />
        <MiniPill label="record created" tone="cyan" />
        <MiniPill label="approval + evidence" tone="amber" />
      </div>
    </SceneBase>
  );
}

export function ProductLoop({ variant }: ProductLoopProps) {
  const frame = useCurrentFrame();

  if (variant === "platform") {
    return <PlatformStory frame={frame} />;
  }

  if (variant === "adoption") {
    return <AdoptionStory frame={frame} />;
  }

  return <HomeStory frame={frame} />;
}
