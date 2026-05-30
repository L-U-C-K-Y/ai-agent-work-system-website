export type ProductStatus = "public" | "private" | "coming-soon";
export type ProductSlug = "file-to-markdown" | "splitpop";

export type ProductCopy = {
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  platforms: string[];
  primaryCta: string;
  secondaryCta: string;
  features: string[];
  useCases: string[];
  supportTopics: string[];
};

export type Product = ProductCopy & {
  slug: ProductSlug;
  status: ProductStatus;
  primaryCtaHref: { pathname: "/contact"; query: { topic: ProductSlug } };
  secondaryCtaHref: string;
  accent: "stone" | "olive" | "sand" | "charcoal";
  heroImage: string;
};

type RawTranslator = {
  raw: (key: string) => unknown;
};

export const productSlugs = ["file-to-markdown", "splitpop"] as const;

const productStructure: Record<
  ProductSlug,
  Omit<Product, keyof ProductCopy | "slug">
> = {
  "file-to-markdown": {
    status: "public",
    primaryCtaHref: {
      pathname: "/contact",
      query: { topic: "file-to-markdown" },
    },
    secondaryCtaHref: "/support",
    accent: "olive",
    heroImage: "/images/backgrounds/file-markdown-hero.webp",
  },
  splitpop: {
    status: "public",
    primaryCtaHref: {
      pathname: "/contact",
      query: { topic: "splitpop" },
    },
    secondaryCtaHref: "/support",
    accent: "sand",
    heroImage: "/images/backgrounds/splitpop-hero.webp",
  },
};

export function getLocalizedProducts(t: RawTranslator): Product[] {
  return productSlugs.map((slug) => ({
    slug,
    ...productStructure[slug],
    ...(t.raw(`items.${slug}`) as ProductCopy),
  }));
}

export function getLocalizedProduct(t: RawTranslator, slug: string) {
  return getLocalizedProducts(t).find((product) => product.slug === slug);
}

export const publicProductSlugs = productSlugs.filter(
  (slug) => productStructure[slug].status === "public",
);
