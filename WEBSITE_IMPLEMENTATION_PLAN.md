# Luckysoft Website Implementation Plan

## Goal

Build a polished, static-first Luckysoft website in the existing Next.js App Router repo. The site should feel calm, crafted, and product-clear: warm editorial visuals, restrained UI, and direct explanations of the public Luckysoft apps.

Mac Control is not public yet. It must not appear in the public navigation, sitemap, product overview, or homepage product grid for the first launch. The code can be structured so Mac Control can be added later without a redesign, but the first public build should only expose File to Markdown and Splitpop.

## Current Repo

- Framework: Next.js 16 App Router.
- React: 19.
- Styling: Tailwind CSS v4 via `@import "tailwindcss"` in `app/globals.css`.
- Current app files:
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/globals.css`
- No component library.
- No shadcn setup.
- No CMS.
- Reference assets are in `references/`.

## Launch Sitemap

```txt
/
/products
/products/file-to-markdown
/products/splitpop
/vision
/support
/contact
/privacy
/terms
```

## Future Sitemap Additions

Add these only when Mac Control is ready to be public:

```txt
/products/mac-control
/support/mac-control
```

Optional future pages:

```txt
/changelog
/press
/about
```

## Navigation

Desktop header:

```txt
Luckysoft
Products
Vision
Support
Contact
```

Primary header CTA:

```txt
Get in touch
```

Avoid `Get Lucky` for launch unless the brand intentionally wants a playful tone in the primary CTA. It looks nice in the concepts, but `Get in touch` is clearer and safer for a first public site.

Mobile header:

- Logo left.
- Menu button right.
- Full-height or top-sheet menu with the same nav items.
- CTA appears as the final menu item.

## Product Visibility Rules

Create a single product data source so public visibility is controlled in one place.

Suggested file:

```txt
lib/products.ts
```

Suggested product fields:

```ts
type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  status: "public" | "private" | "coming-soon";
  platforms: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  features: string[];
  useCases: string[];
  supportTopics: string[];
  accent: "stone" | "olive" | "sand" | "charcoal";
};
```

Launch product data:

- File to Markdown: `status: "public"`
- Splitpop: `status: "public"`
- Mac Control: either omit entirely for launch or include as `status: "private"` and filter it out everywhere public.

Public pages must only render products where `status === "public"`.

## Content Architecture

### Home `/`

Purpose: introduce Luckysoft and route visitors to public products.

Sections:

1. Hero
   - H1: `Thoughtful apps that make every day feel effortless.`
   - Body: `Beautifully crafted utilities for Mac and mobile, designed to remove friction from the small workflows you repeat every day.`
   - Primary CTA: `Explore our apps` -> `/products`
   - Secondary CTA: `Contact us` -> `/contact`
   - Image: `laptop-vase-still-life-hero.png`

2. Public product preview
   - Heading: `Simple tools. Carefully made.`
   - Product cards for File to Markdown and Splitpop only.
   - Each card includes name, tagline, short summary, 3 feature bullets, and `Learn more`.

3. Philosophy band
   - Heading: `Built for calm, useful work.`
   - Four principles:
     - `Made with care`
     - `Privacy first`
     - `Lightweight`
     - `For real people`
   - Keep copy short and specific.

4. Visual interlude
   - Use a wide atmospheric image, likely `coastal-zen-garden-reference.png` or `wide-coastal-garden-bridge-reference.png`.
   - Pair with short copy about reducing daily friction.

5. Final CTA
   - Heading: `Have a workflow that should feel lighter?`
   - CTA: `Start a conversation` -> `/contact`

### Products `/products`

Purpose: overview of public Luckysoft apps.

Sections:

1. Page hero
   - H1: `Our Products`
   - Body: `Thoughtful apps, beautifully crafted for focused everyday work.`
   - Visual: `ceramic-vase-tabletop-reference.png` or a cropped tabletop image.

2. Product list
   - Two large product rows/cards:
     - File to Markdown
     - Splitpop
   - Do not include Mac Control.
   - Each item has:
     - app icon placeholder or simple product mark
     - tagline
     - short description
     - feature list
     - `View details` link

3. Shared values strip
   - Same four principles as homepage, but more compact.

### File to Markdown `/products/file-to-markdown`

Purpose: explain the utility and drive download/purchase/action.

Sections:

1. Hero
   - H1: `File to Markdown`
   - Subheading: `Turn structured files into clean Markdown.`
   - Body: `Convert common file formats into readable Markdown you can use in docs, prompts, notes, and publishing workflows.`
   - Primary CTA: exact destination TBD, placeholder href should be easy to replace.
   - Secondary CTA: `Get support` -> `/support`

2. File format strip
   - Include supported formats only if verified. If not verified, use generic copy:
     - `Documents`
     - `Spreadsheets`
     - `Text files`
     - `Images with text`

3. Feature cards
   - Clean conversion
   - Preserved structure
   - Fast local workflow
   - Automation-friendly output

4. How it works
   - Step 1: Add your file.
   - Step 2: Review the conversion.
   - Step 3: Copy or save Markdown.

5. CTA
   - `Turn your files into clean Markdown.`

### Splitpop `/products/splitpop`

Purpose: explain bill splitting and drive app store installs.

Sections:

1. Hero
   - H1: `Splitpop`
   - Subheading: `Split bills without the awkward math.`
   - Body: `A simple mobile app for splitting shared expenses, tracking who owes what, and settling up clearly.`
   - Primary CTA: App Store link, if available.
   - Secondary CTA: Google Play link, if available.
   - If app links are not ready, use `Contact us` or `Coming soon` style CTA, but do not fake store links.

2. Core workflow
   - Add a bill.
   - Invite people.
   - Split items.
   - Settle clearly.

3. Feature cards
   - Item-level splitting
   - Shared groups
   - Clear balances
   - Simple settlement

4. Screens section
   - Use app screenshots if available later.
   - Until real screenshots exist, use a tasteful UI mockup only if it is clearly derived from approved assets.

5. CTA
   - `Ready to split smarter?`

### Vision `/vision`

Purpose: explain how Luckysoft thinks about software.

Sections:

1. Hero
   - H1: `Our Vision`
   - Body: `We believe good software should feel invisible at the right moments: clear, respectful, and quietly useful.`
   - Image: `golden-tree-landscape-reference.png`

2. Principles
   - Clarity in every detail
   - Privacy by default
   - Utility over noise
   - Built to last

3. Editorial section
   - Pair one wide coastal or interior image with short founder/company philosophy copy.

4. CTA
   - `Building something with care? Let us know.`

### Support `/support`

Purpose: support entry point for public products only.

Sections:

1. Hero
   - H1: `Help Center`
   - Body: `Find answers, guides, and support for Luckysoft apps.`
   - Search input can be visual-only for launch if search is not implemented.

2. Product support cards
   - File to Markdown
   - Splitpop
   - Do not include Mac Control.

3. Quick actions
   - Report a bug -> `/contact?topic=bug`
   - Request a feature -> `/contact?topic=feature`
   - Billing question -> `/contact?topic=billing`
   - Contact support -> `/contact`

4. FAQ
   - Keep generic until real support content exists.

### Contact `/contact`

Purpose: lightweight contact path.

Sections:

1. Hero
   - H1: `Let's work together.`
   - Body: `Whether you have an idea, need support, or want to build something thoughtful, we would love to hear from you.`

2. Contact form
   - Name
   - Email
   - Topic
   - Message
   - Submit button

3. Topic cards
   - Product support
   - Partnerships
   - Design or development
   - General inquiries

Implementation note:

- If no backend/form provider is configured yet, the form should either use a mailto fallback or be implemented as a static UI with a clear follow-up plan. Do not silently pretend submission works.

### Privacy `/privacy`

Purpose: legal page.

Initial implementation can be a styled static page with placeholder-ready sections:

- Overview
- Data we collect
- How we use data
- Third-party services
- Contact

The final copy should be reviewed before launch.

### Terms `/terms`

Purpose: legal page.

Initial implementation can be a styled static page with placeholder-ready sections:

- Acceptance
- Products and services
- Purchases
- Limitations
- Contact

The final copy should be reviewed before launch.

## Visual Direction

Use the existing references as a moodboard, not an exact build spec. The generated page concepts are useful, but the implementation should tighten copy, remove fake metrics, and avoid generated UI artifacts.

Design character:

- Calm, warm, editorial.
- Product company, not loud SaaS.
- Tactile images with quiet software UI.
- Spacious sections and strong typography.
- Few components, repeated with discipline.

Avoid:

- Fake metrics.
- Fake testimonials.
- Overly beige one-note pages.
- Oversized pill labels.
- Decorative dashboard chrome.
- Generic gradient backgrounds.
- Nested cards.
- Mac Control references before public launch.

## Design Tokens

Define tokens in `app/globals.css` using CSS custom properties and Tailwind theme variables.

Suggested palette:

```css
--background: #fbfaf7;
--foreground: #25211c;
--muted: #746b5f;
--soft: #f1ede6;
--surface: #fffdf9;
--surface-strong: #ebe4d9;
--border: #ded5c8;
--accent: #887662;
--accent-strong: #665645;
--olive: #69705a;
--charcoal: #25211c;
```

Use one additional cool neutral sparingly for balance:

```css
--cool-muted: #6f7776;
```

Radii:

```css
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
```

Use `12px` only for large media frames. Keep buttons and cards at `8px` or less unless there is a clear reason.

Spacing:

- Page max width: `1180px`.
- Standard section padding desktop: `96px 24px`.
- Compact section padding desktop: `64px 24px`.
- Mobile section padding: `56px 20px`.
- Header height: roughly `72px`.

Typography:

- Use a serif display face for headings if we add web fonts.
- Use a clean sans face for body/UI.
- If avoiding font dependencies initially:
  - Heading fallback: `Georgia, "Times New Roman", serif`
  - Body fallback: `Arial, Helvetica, sans-serif`

Suggested scale:

- Hero H1 desktop: `clamp(3.25rem, 7vw, 6.75rem)` only on homepage.
- Page H1 desktop: `clamp(2.75rem, 5vw, 5rem)`.
- Section heading: `clamp(2rem, 3.5vw, 3.5rem)`.
- Body large: `1.125rem`, line-height `1.7`.
- Body: `1rem`, line-height `1.65`.
- Small UI: `0.875rem`, line-height `1.4`.

Do not use viewport-width font sizing directly. Use `clamp()` with rem bounds.

## Asset Plan

Keep `references/` as source/reference assets. Create optimized production assets under:

```txt
public/images/brand/
public/images/backgrounds/
public/images/products/
```

Recommended source-to-production mapping:

```txt
references/luckysoft-logo-mark-clover.png
  -> public/images/brand/luckysoft-mark.png

references/laptop-vase-still-life-hero.png
  -> public/images/backgrounds/home-hero-desktop.webp
  -> public/images/backgrounds/home-hero-mobile.webp

references/ceramic-vase-tabletop-reference.png
  -> public/images/backgrounds/products-hero.webp

references/golden-tree-landscape-reference.png
  -> public/images/backgrounds/vision-hero.webp

references/coastal-zen-garden-reference.png
  -> public/images/backgrounds/home-interlude.webp

references/tabletop-vase-notebook-reference.png
  -> public/images/backgrounds/contact-cta.webp
```

Use ImageMagick for derivatives once implementation starts.

Example commands:

```sh
magick references/laptop-vase-still-life-hero.png \
  -resize 2400x1350^ -gravity center -extent 2400x1350 \
  -quality 86 public/images/backgrounds/home-hero-desktop.webp

magick references/laptop-vase-still-life-hero.png \
  -resize 1200x1500^ -gravity center -extent 1200x1500 \
  -quality 86 public/images/backgrounds/home-hero-mobile.webp
```

Before final implementation, inspect each generated crop visually.

## Component Plan

Create these components:

```txt
components/site-header.tsx
components/site-footer.tsx
components/logo.tsx
components/container.tsx
components/section-heading.tsx
components/button.tsx
components/product-card.tsx
components/product-row.tsx
components/principle-grid.tsx
components/media-panel.tsx
components/contact-form.tsx
```

Keep components small and presentational. Store product/page content in data files rather than hardcoding repeated product text in multiple pages.

Suggested data files:

```txt
lib/products.ts
lib/navigation.ts
lib/site.ts
```

## Route/File Plan

Create route files:

```txt
app/page.tsx
app/products/page.tsx
app/products/[slug]/page.tsx
app/vision/page.tsx
app/support/page.tsx
app/contact/page.tsx
app/privacy/page.tsx
app/terms/page.tsx
app/not-found.tsx
```

Update:

```txt
app/layout.tsx
app/globals.css
next.config.ts
```

`app/products/[slug]/page.tsx` behavior:

- Generate static params from public products only.
- If a product exists but is not public, return `notFound()`.
- Unknown slugs return `notFound()`.

## SEO Plan

Global metadata in `app/layout.tsx`:

- Site title template: `%s | Luckysoft`
- Default title: `Luckysoft`
- Description: `Thoughtful apps for calmer everyday workflows.`
- Open Graph site name: `Luckysoft`

Per-page metadata:

- Home: `Luckysoft`
- Products: `Products`
- File to Markdown: `File to Markdown`
- Splitpop: `Splitpop`
- Vision: `Vision`
- Support: `Support`
- Contact: `Contact`
- Privacy: `Privacy Policy`
- Terms: `Terms of Service`

Create:

```txt
app/sitemap.ts
app/robots.ts
```

The generated sitemap must exclude Mac Control until public.

## Accessibility Requirements

- Header nav must be keyboard accessible.
- Mobile menu must be operable by keyboard.
- Images need useful alt text unless decorative.
- CTA buttons must have visible focus states.
- Text contrast must pass WCAG AA.
- Form labels must be visible or programmatically associated.
- Do not rely on color alone for product/status meaning.
- Respect `prefers-reduced-motion`.

## Responsive Requirements

Desktop:

- Header uses horizontal nav.
- Hero should show image and text in a refined editorial composition.
- Product cards can be 2-column where appropriate.

Tablet:

- Preserve image quality and avoid cramped text.
- Product rows can become stacked cards.

Mobile:

- Hero text should appear before image unless the image crop remains highly legible.
- Header collapses to menu.
- Product cards stack vertically.
- No horizontal overflow.
- Buttons can stack when needed.

## Interaction Requirements

Launch interactions:

- Mobile nav open/close.
- Product links.
- Contact form topic selection.
- Contact form either:
  - uses a real endpoint, or
  - uses a clear mailto fallback, or
  - is explicitly marked for backend integration before launch.

Do not ship a submit button that appears to send data but does nothing.

## Implementation Phases

### Phase 1: Foundation

1. Move/copy selected production images from `references/` to `public/images/...`.
2. Generate desktop/mobile optimized crops with ImageMagick.
3. Define global CSS tokens and base typography.
4. Update metadata in `app/layout.tsx`.
5. Add product/navigation/site data files.

### Phase 2: Shared Layout

1. Build logo component.
2. Build site header.
3. Build mobile menu.
4. Build footer.
5. Build container, button, section heading, and media primitives.

### Phase 3: Core Pages

1. Build homepage.
2. Build products overview.
3. Build dynamic product detail route for public products.
4. Verify Mac Control is not linked or generated.

### Phase 4: Support and Contact

1. Build support hub for public products.
2. Build contact page and form behavior.
3. Add topic query param support if useful:
   - `/contact?topic=bug`
   - `/contact?topic=feature`
   - `/contact?topic=billing`

### Phase 5: Legal and System Pages

1. Build privacy page.
2. Build terms page.
3. Build not-found page.
4. Add sitemap and robots.

### Phase 6: QA

1. Run lint.
2. Run build.
3. Start local dev server.
4. Inspect with Browser plugin.
5. Verify desktop and mobile screenshots.
6. Check all routes in the launch sitemap.
7. Confirm Mac Control is absent from:
   - nav
   - homepage
   - `/products`
   - sitemap
   - support
   - footer
8. Check image crops and loading.
9. Check no fake links or fake form submission.

## Build Commands

Use the existing package manager and scripts:

```sh
pnpm lint
pnpm build
pnpm dev
```

No Homebrew/system installs should be performed by Codex. If another system dependency is needed later, ask first.

## Launch Acceptance Criteria

- The launch sitemap routes all render successfully.
- Mac Control is fully hidden from public pages.
- The homepage clearly explains Luckysoft and points to public products.
- Product pages are specific enough to understand each app without fake claims.
- Images are optimized and visually inspected.
- Mobile layout has no overflow or clipped text.
- Header/footer links work.
- Sitemap excludes private/future products.
- Contact form behavior is honest and testable.
- `pnpm lint` passes.
- `pnpm build` passes.

## Open Decisions Before Build

1. Final CTA language: `Get in touch` vs `Start a conversation`.
2. Whether to add web fonts for the final brand feel.
3. Real external URLs for File to Markdown and Splitpop.
4. Contact form backend or mailto fallback.
5. Final legal copy for privacy and terms.
6. Whether public product pages should show pricing, downloads, or only product information.
