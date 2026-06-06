import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

const topicLabels: Record<string, string> = {
  general: "General inquiry",
  "closed-preview": "Request access",
  pilot: "Pilot conversation",
  strategic: "Strategic discussion",
  partnership: "Strategic partnership",
};

const apiMessages = {
  en: {
    invalidBody: "Invalid request body.",
    required: "Name, email, and message are required.",
    invalidEmail: "Enter a valid email address.",
    notConfigured: "Email delivery is not configured yet.",
    providerError: "Could not send email.",
  },
  de: {
    invalidBody: "Ungültiger Anfrageinhalt.",
    required: "Name, E-Mail und Nachricht sind erforderlich.",
    invalidEmail: "Gib eine gültige E-Mail-Adresse ein.",
    notConfigured: "Der E-Mail-Versand ist noch nicht konfiguriert.",
    providerError: "E-Mail konnte nicht gesendet werden.",
  },
} as const;

function getApiMessages(request: Request) {
  const language = request.headers.get("accept-language") ?? "";

  return language.toLowerCase().startsWith("de")
    ? apiMessages.de
    : apiMessages.en;
}

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function renderTextEmail({
  name,
  email,
  topic,
  message,
}: {
  name: string;
  email: string;
  topic: string;
  message: string;
}) {
  return [
    "New JobDone AI website request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${topic}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  const messages = getApiMessages(request);

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: messages.invalidBody },
      { status: 400 },
    );
  }

  const name = cleanText(payload.name, 160);
  const email = cleanText(payload.email, 254);
  const topicKey = cleanText(payload.topic, 80);
  const message = cleanText(payload.message, 5000);
  const topic = topicLabels[topicKey] ?? topicLabels.general;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: messages.required },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: messages.invalidEmail },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  if (!apiKey || !from || !to) {
    console.error(
      "Contact email is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
    );

    return NextResponse.json(
      {
        error: messages.notConfigured,
      },
      { status: 503 },
    );
  }

  const subject = `JobDone AI: ${topic}`;
  const text = renderTextEmail({ name, email, topic, message });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    let detail: string = messages.providerError;

    try {
      const body = (await response.json()) as { message?: string; error?: string };
      detail = body.message ?? body.error ?? detail;
    } catch {
      // Keep the generic message if the provider response is not JSON.
    }

    return NextResponse.json({ error: detail }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
