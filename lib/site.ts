export const siteConfig = {
  name: "JobDone AI",
  url: "https://jobdone.ai",
  email: "hello@jobdone.ai",
};

export const mainNavigation = [
  { key: "aiDesks", href: "/products" },
  { key: "platform", href: "/vision" },
  { key: "solutions", href: "/support" },
  { key: "governance", href: "/vision" },
  { key: "resources", href: "/support" },
  { key: "company", href: "/contact" },
] as const;

export const legalNavigation = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
] as const;
