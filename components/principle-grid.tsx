import { useTranslations } from "next-intl";

type Principle = {
  title: string;
  copy: string;
};

export function PrincipleGrid() {
  const t = useTranslations("Principles");
  const principles = t.raw("items") as Principle[];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {principles.map((principle) => (
        <div
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
          key={principle.title}
        >
          <h3 className="text-base font-semibold text-[var(--foreground)]">
            {principle.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            {principle.copy}
          </p>
        </div>
      ))}
    </div>
  );
}
