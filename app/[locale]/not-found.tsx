import { useTranslations } from "next-intl";

import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="grid min-h-[60vh] place-items-center py-16">
      <Container className="text-center">
        <h1 className="font-serif text-5xl leading-[1.02] text-[var(--foreground)] md:text-7xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
          {t("description")}
        </p>
        <div className="mt-8">
          <Button href="/">{t("button")}</Button>
        </div>
      </Container>
    </main>
  );
}
