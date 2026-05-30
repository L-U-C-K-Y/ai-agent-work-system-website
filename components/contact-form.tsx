"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

import { siteConfig } from "@/lib/site";

const topicValues = [
  "general",
  "support",
  "bug",
  "feature",
  "billing",
  "file-to-markdown",
  "splitpop",
] as const;

export function ContactForm() {
  const searchParams = useSearchParams();
  const t = useTranslations("ContactForm");
  const topicLabels = t.raw("topics") as Record<string, string>;
  const initialTopic = searchParams.get("topic") ?? "general";
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const defaultTopic = topicLabels[initialTopic] ? initialTopic : "general";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const topic = String(form.get("topic") ?? "general");
    const message = String(form.get("message") ?? "");
    const topicLabel = topicLabels[topic] ?? topicLabels.general;
    const subject = encodeURIComponent(t("subject", { topic: topicLabel }));
    const body = encodeURIComponent(
      t("body", { name, email, topic: topicLabel, message }),
    );

    setStatus("ready");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
          {t("labels.name")}
          <input
            className="min-h-11 rounded-md border border-[var(--border)] bg-white px-3 text-base text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_20%,transparent)]"
            name="name"
            placeholder={t("placeholders.name")}
            required
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
          {t("labels.email")}
          <input
            className="min-h-11 rounded-md border border-[var(--border)] bg-white px-3 text-base text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_20%,transparent)]"
            name="email"
            placeholder={t("placeholders.email")}
            required
            type="email"
          />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-[var(--foreground)]">
        {t("labels.topic")}
        <select
          className="min-h-11 rounded-md border border-[var(--border)] bg-white px-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_20%,transparent)]"
          defaultValue={defaultTopic}
          name="topic"
        >
          {topicValues.map((value) => (
            <option key={value} value={value}>
              {topicLabels[value]}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-5 grid gap-2 text-sm font-medium text-[var(--foreground)]">
        {t("labels.message")}
        <textarea
          className="min-h-40 resize-y rounded-md border border-[var(--border)] bg-white px-3 py-3 text-base text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_20%,transparent)]"
          name="message"
          placeholder={t("placeholders.message")}
          required
        />
      </label>
      <button
        className="mt-6 min-h-11 w-full rounded-md bg-[var(--accent-strong)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        type="submit"
      >
        {t("submit")}
      </button>
      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
        {t("note")}
      </p>
      {status === "ready" && (
        <p className="mt-3 text-sm font-medium text-[var(--olive)]">
          {t("ready")}
        </p>
      )}
    </form>
  );
}
