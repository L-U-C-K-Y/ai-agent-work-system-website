export const siteConfig = {
  name: "JobDone AI",
  url: "https://jobdone.ai",
  email: "hello@jobdone.ai",
};

export const mainNavigation = [
  { key: "home", href: "/" },
  { key: "solutions", href: "/products" },
  { key: "platform", href: "/platform" },
  { key: "aiAdoption", href: "/ai-adoption" },
  { key: "company", href: "/contact" },
] as const;

export const legalNavigation = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
] as const;
