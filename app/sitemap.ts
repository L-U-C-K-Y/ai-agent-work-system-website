import type { MetadataRoute } from "next";

import { publicProductSlugs } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const localizedRoutes = [
  { en: "", de: "/de" },
  { en: "/products", de: "/de/produkte" },
  { en: "/platform", de: "/de/plattform" },
  { en: "/ai-adoption", de: "/de/ki-einfuehrung" },
  { en: "/contact", de: "/de/kontakt" },
  { en: "/privacy", de: "/de/datenschutz" },
  { en: "/terms", de: "/de/agb" },
  { en: "/imprint", de: "/de/impressum" },
  ...publicProductSlugs.map((slug) => ({
    en: `/products/${slug}`,
    de: `/de/produkte/${slug}`,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return localizedRoutes.flatMap((route) => {
    const languages = {
      en: `${siteConfig.url}${route.en}`,
      de: `${siteConfig.url}${route.de}`,
    };

    return [
      {
        url: languages.en,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: route.en === "" ? 1 : 0.7,
        alternates: {
          languages,
        },
      },
      {
        url: languages.de,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: route.en === "" ? 1 : 0.7,
        alternates: {
          languages,
        },
      },
    ];
  });
}
