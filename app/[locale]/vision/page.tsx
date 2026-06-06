import { redirect } from "next/navigation";

import { getPathname } from "@/i18n/navigation";
import { isLocale, type Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LegacyVisionRedirect({ params }: PageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "en";

  redirect(getPathname({ href: "/platform", locale: safeLocale }));
}
