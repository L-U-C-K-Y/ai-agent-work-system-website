export const siteConfig = {
  name: "Luckysoft",
  url: "https://luckysoft.app",
  email: "hello@luckysoft.app",
};

export const mainNavigation = [
  { key: "products", href: "/products" },
  { key: "vision", href: "/vision" },
  { key: "support", href: "/support" },
  { key: "contact", href: "/contact" },
] as const;

export const legalNavigation = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
] as const;
