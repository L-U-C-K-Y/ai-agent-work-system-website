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

const companySizeValues = [
  "not-specified",
  "1-10",
  "11-50",
  "51-200",
  "201-1000",
  "1000-plus",
] as const;

const industryValues = [
  "not-specified",
  "software",
  "finance",
  "operations",
  "healthcare",
  "manufacturing",
  "retail",
  "professional-services",
  "other",
] as const;

export function ContactForm() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const t = useTranslations("ContactForm");
  const topicLabels = t.raw("topics") as Record<string, string>;
  const companySizeLabels = t.raw("companySizes") as Record<string, string>;
  const industryLabels = t.raw("industries") as Record<string, string>;
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
  const companySizeItems = companySizeValues.map((value) => ({
    label: companySizeLabels[value],
    value,
  }));
  const industryItems = industryValues.map((value) => ({
    label: industryLabels[value],
    value,
  }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const website = String(form.get("website") ?? "");
    const companySize = String(form.get("companySize") ?? "not-specified");
    const industry = String(form.get("industry") ?? "not-specified");
    const topic = String(form.get("topic") ?? "general");
    const message = String(form.get("message") ?? "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Accept-Language": locale,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          website,
          companySize,
          industry,
          topic,
          message,
        }),
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
      className="relative self-start rounded-lg border border-white/10 bg-[#0b1117] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:sticky md:top-24 md:p-8"
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

        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel className="text-white" htmlFor="company">
              {t("labels.company")}
            </FieldLabel>
            <Input
              className="h-11 border-white/10 bg-[#05080c] text-white placeholder:text-[#66788f]"
              id="company"
              name="company"
              placeholder={t("placeholders.company")}
              required
              type="text"
            />
          </Field>
          <Field>
            <FieldLabel className="text-white" htmlFor="website">
              {t("labels.website")}
            </FieldLabel>
            <Input
              className="h-11 border-white/10 bg-[#05080c] text-white placeholder:text-[#66788f]"
              id="website"
              name="website"
              placeholder={t("placeholders.website")}
              type="url"
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

        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel className="text-white" htmlFor="companySize">
              {t("labels.companySize")}
            </FieldLabel>
            <Select
              defaultValue="not-specified"
              items={companySizeItems}
              name="companySize"
            >
              <SelectTrigger
                className="h-11 w-full border-white/10 bg-[#05080c] text-white"
                id="companySize"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border border-white/10 bg-[#0b1117] text-white">
                <SelectGroup>
                  {companySizeValues.map((value) => (
                    <SelectItem key={value} value={value}>
                      {companySizeLabels[value]}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel className="text-white" htmlFor="industry">
              {t("labels.industry")}
            </FieldLabel>
            <Select
              defaultValue="not-specified"
              items={industryItems}
              name="industry"
            >
              <SelectTrigger
                className="h-11 w-full border-white/10 bg-[#05080c] text-white"
                id="industry"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border border-white/10 bg-[#0b1117] text-white">
                <SelectGroup>
                  {industryValues.map((value) => (
                    <SelectItem key={value} value={value}>
                      {industryLabels[value]}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field>
          <FieldLabel className="text-white" htmlFor="message">
            {t("labels.message")}
          </FieldLabel>
          <Textarea
            className="min-h-32 resize-y border-white/10 bg-[#05080c] text-white placeholder:text-[#66788f]"
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
