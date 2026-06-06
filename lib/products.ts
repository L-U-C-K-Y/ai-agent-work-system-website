export type ProductStatus = "public" | "private" | "coming-soon";
export type ProductSlug =
  | "finance"
  | "inventory"
  | "hr"
  | "support"
  | "product"
  | "revenue";

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
  workflow: string[];
};

export type Product = ProductCopy & {
  slug: ProductSlug;
  status: ProductStatus;
  primaryCtaHref: { pathname: "/contact"; query: { topic: ProductSlug } };
  secondaryCtaHref: string;
  accent: "green" | "cyan" | "amber";
};

type RawTranslator = {
  raw: (key: string) => unknown;
};

export const productSlugs = [
  "finance",
  "inventory",
  "hr",
  "support",
  "product",
  "revenue",
] as const;

const productStructure: Record<
  ProductSlug,
  Omit<Product, keyof ProductCopy | "slug">
> = {
  finance: {
    status: "public",
    primaryCtaHref: {
      pathname: "/contact",
      query: { topic: "finance" },
    },
    secondaryCtaHref: "/products",
    accent: "green",
  },
  inventory: {
    status: "public",
    primaryCtaHref: {
      pathname: "/contact",
      query: { topic: "inventory" },
    },
    secondaryCtaHref: "/products",
    accent: "cyan",
  },
  hr: {
    status: "public",
    primaryCtaHref: {
      pathname: "/contact",
      query: { topic: "hr" },
    },
    secondaryCtaHref: "/products",
    accent: "amber",
  },
  support: {
    status: "public",
    primaryCtaHref: {
      pathname: "/contact",
      query: { topic: "support" },
    },
    secondaryCtaHref: "/products",
    accent: "cyan",
  },
  product: {
    status: "public",
    primaryCtaHref: {
      pathname: "/contact",
      query: { topic: "product" },
    },
    secondaryCtaHref: "/products",
    accent: "green",
  },
  revenue: {
    status: "public",
    primaryCtaHref: {
      pathname: "/contact",
      query: { topic: "revenue" },
    },
    secondaryCtaHref: "/products",
    accent: "amber",
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
