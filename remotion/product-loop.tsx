import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type ProductLoopVariant = "home" | "platform" | "adoption";

type ProductLoopProps = {
  variant: ProductLoopVariant;
};

type NodeItem = {
  label: string;
  x: number;
  y: number;
  tone: "blue" | "cyan" | "green";
};

type StepItem = {
  label: string;
  x: number;
  y: number;
};

const variantConfig = {
  home: {
    texture: "images/jobdone-ai/neon-home-edge-to-edge-black.png",
    eyebrow: "SHARED WORK SYSTEM",
    title: "One operating surface",
    subtitle: "People, AI Coworkers, AI Automations, work cards, knowledge, records, approvals, and evidence stay connected.",
    center: "Work card",
    centerDetail: "Atlas invoice -> inventory handoff",
    status: "coordinating",
    nodes: [
      { label: "work rooms", x: 23, y: 30, tone: "blue" },
      { label: "AI Coworkers", x: 74, y: 27, tone: "cyan" },
      { label: "AI Automations", x: 77, y: 68, tone: "blue" },
      { label: "knowledge", x: 22, y: 70, tone: "green" },
      { label: "records", x: 50, y: 82, tone: "blue" },
      { label: "approvals", x: 50, y: 17, tone: "cyan" },
    ],
    steps: [
      { label: "message routed", x: 13, y: 47 },
      { label: "context attached", x: 30, y: 47 },
      { label: "record drafted", x: 67, y: 47 },
      { label: "evidence saved", x: 84, y: 47 },
    ],
  },
  platform: {
    texture: "images/jobdone-ai/neon-work-card-graph.png",
    eyebrow: "ACCOUNTABLE WORK GRAPH",
    title: "Every agent action stays inspectable",
    subtitle: "Work, AI Coworkers, AI Automations, knowledge, records, approvals, and evidence remain in one traceable layer.",
    center: "Accountable work",
    centerDetail: "Policy, source, record, approval",
    status: "evidence trail live",
    nodes: [
      { label: "AI Coworkers", x: 27, y: 25, tone: "cyan" },
      { label: "AI Automations", x: 73, y: 25, tone: "blue" },
      { label: "knowledge", x: 22, y: 57, tone: "green" },
      { label: "records", x: 78, y: 57, tone: "blue" },
      { label: "approvals", x: 36, y: 79, tone: "cyan" },
      { label: "audit evidence", x: 64, y: 79, tone: "green" },
    ],
    steps: [
      { label: "source cited", x: 16, y: 42 },
      { label: "tool call logged", x: 32, y: 42 },
      { label: "record proposal", x: 68, y: 42 },
      { label: "approval checkpoint", x: 84, y: 42 },
    ],
  },
  adoption: {
    texture: "images/jobdone-ai/neon-ai-adoption-hero.png",
    eyebrow: "AI ADOPTION",
    title: "Explore, integrate, operate",
    subtitle: "Business signals become governed workflows that land inside JobDone AI as shared operating rooms.",
    center: "JobDone AI workspace",
    centerDetail: "Rooms, inputs, agents, records, approvals",
    status: "operating layer ready",
    nodes: [
      { label: "business signals", x: 20, y: 28, tone: "blue" },
      { label: "team boundaries", x: 50, y: 19, tone: "cyan" },
      { label: "knowledge", x: 80, y: 30, tone: "green" },
      { label: "AI Coworkers", x: 22, y: 70, tone: "cyan" },
      { label: "AI Automations", x: 78, y: 70, tone: "blue" },
      { label: "approval model", x: 50, y: 83, tone: "green" },
    ],
    steps: [
      { label: "explore", x: 20, y: 48 },
      { label: "integrate", x: 39, y: 48 },
      { label: "operate", x: 61, y: 48 },
      { label: "expand", x: 80, y: 48 },
    ],
  },
} as const satisfies Record<
  ProductLoopVariant,
  {
    texture: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    center: string;
    centerDetail: string;
    status: string;
    nodes: readonly NodeItem[];
    steps: readonly StepItem[];
  }
>;

function clamp(value: number, input: [number, number], output: [number, number]) {
  return interpolate(value, input, output, {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function loopPulse(frame: number, offset: number, intensity = 1) {
  const phase = ((frame + offset) / 240) * Math.PI * 2;
  return (0.5 + Math.sin(phase) * 0.5) * intensity;
}

function toneColor(tone: NodeItem["tone"]) {
  if (tone === "cyan") {
    return "#60efff";
  }

  if (tone === "green") {
    return "#4ade80";
  }

  return "#206ae9";
}

function ConnectorLines({
  nodes,
  frame,
}: {
  nodes: readonly NodeItem[];
  frame: number;
}) {
  const progress = clamp(frame, [18, 90], [0, 1]);

  return (
    <svg
      aria-hidden="true"
      style={{
        height: "100%",
        inset: 0,
        opacity: 0.84,
        position: "absolute",
        width: "100%",
      }}
      viewBox="0 0 100 100"
    >
      <defs>
        <radialGradient id="lineGlow">
          <stop offset="0%" stopColor="#60efff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#206ae9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
          <stop stopColor="#206ae9" stopOpacity="0" />
          <stop offset="0.5" stopColor="#60efff" stopOpacity="0.78" />
          <stop offset="1" stopColor="#206ae9" stopOpacity="0" />
        </linearGradient>
      </defs>
      {nodes.map((node, index) => {
        const opacity = clamp(progress, [index / nodes.length, 1], [0, 1]);
        const pulse = loopPulse(frame, index * 14, 1);

        return (
          <g key={node.label} opacity={opacity}>
            <path
              d={`M 50 50 C ${50 + (node.x - 50) * 0.34} ${50} ${node.x} ${
                50 + (node.y - 50) * 0.34
              } ${node.x} ${node.y}`}
              fill="none"
              stroke="url(#lineGradient)"
              strokeDasharray={`${20 + progress * 72} 120`}
              strokeLinecap="round"
              strokeWidth="0.18"
            />
            <circle
              cx={50 + (node.x - 50) * (0.2 + progress * 0.74)}
              cy={50 + (node.y - 50) * (0.2 + progress * 0.74)}
              fill="url(#lineGlow)"
              opacity={0.28 + pulse * 0.52}
              r={1.1 + pulse * 0.9}
            />
          </g>
        );
      })}
    </svg>
  );
}

function WorkNode({
  item,
  index,
  frame,
}: {
  item: NodeItem;
  index: number;
  frame: number;
}) {
  const appear = clamp(frame, [24 + index * 8, 70 + index * 8], [0, 1]);
  const color = toneColor(item.tone);
  const pulse = loopPulse(frame, index * 19, 1);

  return (
    <div
      style={{
        alignItems: "center",
        background:
          "linear-gradient(180deg, rgba(8,18,31,0.92), rgba(6,12,20,0.72))",
        border: `1px solid color-mix(in srgb, ${color} 38%, transparent)`,
        borderRadius: 18,
        boxShadow: `0 0 ${18 + pulse * 24}px color-mix(in srgb, ${color} ${
          18 + pulse * 14
        }%, transparent), inset 0 1px 0 rgba(255,255,255,0.08)`,
        color: "rgba(231,242,255,0.94)",
        display: "flex",
        gap: 12,
        left: `${item.x}%`,
        opacity: appear,
        padding: "15px 18px",
        position: "absolute",
        top: `${item.y}%`,
        transform: `translate(-50%, -50%) translateY(${(1 - appear) * 18}px)`,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          background: color,
          borderRadius: 999,
          boxShadow: `0 0 22px ${color}`,
          height: 10,
          width: 10,
        }}
      />
      <span style={{ fontSize: 22, fontWeight: 700 }}>{item.label}</span>
    </div>
  );
}

function CenterCard({
  config,
  frame,
}: {
  config: (typeof variantConfig)[ProductLoopVariant];
  frame: number;
}) {
  const appear = clamp(frame, [10, 56], [0, 1]);
  const scan = ((frame % 180) / 180) * 100;

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(12,24,38,0.94), rgba(4,9,15,0.88))",
        border: "1px solid rgba(96,239,255,0.26)",
        borderRadius: 28,
        boxShadow:
          "0 32px 120px rgba(0,0,0,0.42), 0 0 80px rgba(32,106,233,0.22), inset 0 1px 0 rgba(255,255,255,0.1)",
        color: "white",
        height: 260,
        left: "50%",
        opacity: appear,
        overflow: "hidden",
        padding: 30,
        position: "absolute",
        top: "50%",
        transform: `translate(-50%, -50%) scale(${0.96 + appear * 0.04})`,
        width: 470,
      }}
    >
      <div
        style={{
          background: `linear-gradient(90deg, transparent, rgba(96,239,255,0.2), transparent)`,
          filter: "blur(10px)",
          height: 90,
          left: `${scan - 25}%`,
          opacity: 0.72,
          position: "absolute",
          top: 0,
          transform: "rotate(18deg)",
          width: 90,
        }}
      />
      <div
        style={{
          color: "#60efff",
          fontFamily: "monospace",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: 5,
          textTransform: "uppercase",
        }}
      >
        {config.eyebrow}
      </div>
      <div style={{ fontSize: 44, fontWeight: 800, marginTop: 22 }}>
        {config.center}
      </div>
      <div
        style={{
          color: "rgba(164,179,198,0.96)",
          fontSize: 23,
          lineHeight: 1.38,
          marginTop: 18,
        }}
      >
        {config.centerDetail}
      </div>
      <div
        style={{
          alignItems: "center",
          bottom: 24,
          color: "rgba(164,179,198,0.94)",
          display: "flex",
          fontSize: 18,
          gap: 10,
          left: 30,
          position: "absolute",
        }}
      >
        <span
          style={{
            background: "#4ade80",
            borderRadius: 999,
            boxShadow: "0 0 18px rgba(74,222,128,0.7)",
            height: 8,
            width: 8,
          }}
        />
        {config.status}
      </div>
    </div>
  );
}

function StepRail({
  steps,
  frame,
}: {
  steps: readonly StepItem[];
  frame: number;
}) {
  return (
    <div
      style={{
        bottom: 80,
        display: "flex",
        gap: 22,
        left: "50%",
        position: "absolute",
        transform: "translateX(-50%)",
      }}
    >
      {steps.map((step, index) => {
        const appear = clamp(frame, [72 + index * 14, 112 + index * 14], [0, 1]);

        return (
          <div
            key={step.label}
            style={{
              background: "rgba(5,10,17,0.72)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              color: "rgba(231,242,255,0.9)",
              fontSize: 18,
              opacity: appear,
              padding: "13px 16px",
              transform: `translateY(${(1 - appear) * 16}px)`,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                color: "#60efff",
                fontFamily: "monospace",
                fontSize: 14,
                marginRight: 10,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {step.label}
          </div>
        );
      })}
    </div>
  );
}

function HeaderCopy({
  config,
  frame,
}: {
  config: (typeof variantConfig)[ProductLoopVariant];
  frame: number;
}) {
  const appear = clamp(frame, [0, 46], [0, 1]);

  return (
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
        opacity: appear,
        padding: "12px 18px",
        position: "absolute",
        top: 74,
        transform: `translateY(${(1 - appear) * 18}px)`,
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
        {config.eyebrow}
      </div>
    </div>
  );
}

function GridBackdrop({ frame }: { frame: number }) {
  const drift = (frame / 240) * 72;

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(32,106,233,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(32,106,233,0.09) 1px, transparent 1px)",
        backgroundPosition: `${-drift}px ${-drift * 0.6}px`,
        backgroundSize: "72px 72px",
        inset: 0,
        opacity: 0.38,
        position: "absolute",
      }}
    />
  );
}

export function ProductLoop({ variant }: ProductLoopProps) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const config = variantConfig[variant];
  const cycle = frame / durationInFrames;
  const breathing = 0.86 + Math.sin(cycle * Math.PI * 2) * 0.08;

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
        src={staticFile(config.texture)}
        style={{
          height: "100%",
          inset: 0,
          objectFit: "cover",
          opacity: 0.18,
          position: "absolute",
          transform: `scale(${1.04 + cycle * 0.025})`,
          width: "100%",
        }}
      />
      <GridBackdrop frame={frame} />
      <div
        style={{
          background:
            "radial-gradient(circle at 62% 52%, rgba(32,106,233,0.32), transparent 36%), radial-gradient(circle at 44% 48%, rgba(96,239,255,0.13), transparent 28%), linear-gradient(90deg, #020508 0%, rgba(2,5,8,0.82) 28%, rgba(2,5,8,0.8) 74%, #020508 100%)",
          inset: 0,
          opacity: breathing,
          position: "absolute",
        }}
      />
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 38,
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.06), 0 60px 160px rgba(0,0,0,0.36)",
          inset: 54,
          position: "absolute",
        }}
      />
      <ConnectorLines frame={frame} nodes={config.nodes} />
      {config.nodes.map((node, index) => (
        <WorkNode frame={frame} index={index} item={node} key={node.label} />
      ))}
      <CenterCard config={config} frame={frame} />
      <StepRail frame={frame} steps={config.steps} />
      <HeaderCopy config={config} frame={frame} />
      <div
        style={{
          background:
            "linear-gradient(90deg, #020508 0%, transparent 14%, transparent 84%, #020508 100%), linear-gradient(180deg, #020508 0%, transparent 15%, transparent 78%, #020508 100%)",
          inset: 0,
          pointerEvents: "none",
          position: "absolute",
        }}
      />
    </AbsoluteFill>
  );
}
