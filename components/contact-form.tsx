"use client";

import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const topicValues = [
  "general",
  "closed-preview",
  "pilot",
  "strategic",
  "partnership",
] as const;

export function ContactForm() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const t = useTranslations("ContactForm");
  const topicLabels = t.raw("topics") as Record<string, string>;
  const initialTopic = searchParams.get("topic") ?? "general";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const defaultTopic = topicLabels[initialTopic] ? initialTopic : "general";
  const topicItems = topicValues.map((value) => ({
    label: topicLabels[value],
    value,
  }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const topic = String(form.get("topic") ?? "general");
    const message = String(form.get("message") ?? "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Accept-Language": locale,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, topic, message }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? t("error"));
      }

      event.currentTarget.reset();
      setStatus("sent");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : t("error"));
      setStatus("error");
    }
  }

  return (
    <form
      className="relative rounded-lg border border-white/10 bg-[#0b1117] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:p-8"
      onSubmit={handleSubmit}
    >
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel className="text-white" htmlFor="name">
              {t("labels.name")}
            </FieldLabel>
            <Input
              className="h-11 border-white/10 bg-[#05080c] text-white placeholder:text-[#66788f]"
              id="name"
              name="name"
              placeholder={t("placeholders.name")}
              required
              type="text"
            />
          </Field>
          <Field>
            <FieldLabel className="text-white" htmlFor="email">
              {t("labels.email")}
            </FieldLabel>
            <Input
              className="h-11 border-white/10 bg-[#05080c] text-white placeholder:text-[#66788f]"
              id="email"
              name="email"
              placeholder={t("placeholders.email")}
              required
              type="email"
            />
          </Field>
        </div>

        <Field>
          <FieldLabel className="text-white" htmlFor="topic">
            {t("labels.topic")}
          </FieldLabel>
          <Select defaultValue={defaultTopic} items={topicItems} name="topic">
            <SelectTrigger
              className="h-11 w-full border-white/10 bg-[#05080c] text-white"
              id="topic"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border border-white/10 bg-[#0b1117] text-white">
              <SelectGroup>
                {topicValues.map((value) => (
                  <SelectItem key={value} value={value}>
                    {topicLabels[value]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel className="text-white" htmlFor="message">
            {t("labels.message")}
          </FieldLabel>
          <Textarea
            className="min-h-40 resize-y border-white/10 bg-[#05080c] text-white placeholder:text-[#66788f]"
            id="message"
            name="message"
            placeholder={t("placeholders.message")}
            required
          />
        </Field>

        <Button
          disabled={status === "sending"}
          className="h-11 w-full rounded-md font-semibold hover:bg-white hover:text-[#071423]"
          type="submit"
        >
          {status === "sending" ? t("sending") : t("submit")}
        </Button>
        <FieldDescription className="text-[#91a2b8]">
          {t("note")}
        </FieldDescription>
      </FieldGroup>
      {status === "sent" && (
        <p className="mt-3 text-sm font-medium text-[#206ae9]">
          {t("sent")}
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm font-medium text-red-300">
          {errorMessage || t("error")}
        </p>
      )}
    </form>
  );
}
