import { useTranslations } from "next-intl";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="grid min-h-[70vh] place-items-center bg-[#05080c] py-16 text-white">
      <Container className="max-w-3xl text-center">
        <Card className="border-white/10 bg-[#0b1117] text-white">
          <CardContent className="p-8 md:p-12">
            <Badge variant="outline" className="border-[var(--primary)]/35 font-mono uppercase tracking-[0.18em] text-[var(--primary)]">
              404
            </Badge>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              {t("title")}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#a4b3c6]">
              {t("description")}
            </p>
            <div className="mt-8">
              <Button href="/">{t("button")}</Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}
