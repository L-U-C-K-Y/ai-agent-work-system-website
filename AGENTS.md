# AGENTS.md

Guidance for AI/LLM agents working on the JobDone AI public website.

## Project Context
- This repo is the public-facing website for **JobDone AI**, not the internal app platform.
- The service is in **closed preview**. Pages should feel like a live premium SaaS website, with `Request access` replacing signup.
- Primary pages are **Home** (`/`, `/de`) and **Platform** (`/platform`, `/de/plattform`).
- Use `PLATFORM_IMPLEMENTATION_PLAN.md` and the sibling app repo at `/Users/lucky/Developer/github/L-U-C-K-Y/ai-agent-work-system-app` for product truth when needed.

## Product Language
- Use **AI Coworkers** and **AI Automations** as first-class terms.
- AI Coworkers work with people in shared communication/work rooms, create and update work, save knowledge, and use structured records.
- AI Automations receive flexible inputs, create work, use knowledge, write structured record proposals, and route approvals.
- Do **not** mention Slack, Discord, OpenClaw, investors, or preview customers in public copy.
- Avoid making the product sound like generic chat plus automations. Emphasize accountable work, knowledge, records, approvals, and evidence.

## Content and Localization
- Keep English and German copy in sync for any public-facing change.
- Routes use `next-intl`; German localized routes include `/de/plattform`, `/de/kontakt`, `/de/datenschutz`, and `/de/agb`.
- Header/footer nav should stay simple: Home, Use cases, Platform, Company, Request Access.
- Footer Platform links should point to Platform anchors where possible:
  `#work`, `#ai-coworkers`, `#ai-automations`, `#knowledge`, `#records`, `#approvals`, `#audit-evidence`.

## Design Direction
- Maintain the premium dark visual system: true black/near-black backgrounds, JobDone blue/cyan accents, Manrope, glass/frosted panels, restrained borders, and generous breathing room.
- Prefer rich, code-native sections and existing generated assets over crowded dashboards.
- Do not add hero badges/pills above H1, fake metrics, heavy image borders, beige/purple-heavy palettes, or bright active nav states.
- Use the JobDone AI logo asset without a border or background. Current core assets live in `public/images/jobdone-ai/`.
- Reuse existing generated graphics unless a new asset is explicitly useful and approved.

## Engineering Notes
- Follow existing Next.js App Router, TypeScript, Tailwind, shadcn/Base UI, and `next-intl` patterns.
- Use `rg` for search. Use `apply_patch` for manual file edits.
- Do not overwrite user changes. Check `git status --short` before and after meaningful edits.
- Do not install system packages or use `brew`; ask the user first if a system install is required.
- Keep changes scoped. Avoid unrelated refactors, asset churn, or route/API changes unless requested.

## Verification
- Run `pnpm lint && pnpm build` before handoff for meaningful changes.
- For frontend changes, verify desktop and mobile for `/`, `/de`, `/platform`, and `/de/plattform`.
- Check for no horizontal overflow on mobile.
- Check that public copy contains intended terms and does not contain forbidden terms such as `Slack` or `OpenClaw`.
- Use the in-app Browser when available; otherwise use Playwright/CLI screenshots as a fallback.

## Git Workflow
- Commit and push regularly when a coherent change is complete.
- Use concise commit messages describing the user-facing change.
- Leave the working tree clean after committing unless the user asks to keep work in progress.
