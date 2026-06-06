# JobDone AI Website

Public marketing website for JobDone AI, "The AI Agent Work System".

## Stack

- Next.js App Router
- TypeScript
- next-intl for English and German routes
- Tailwind CSS v4
- shadcn/Base UI components

## Development

```bash
pnpm install
pnpm dev
```

The local development server normally runs at `http://localhost:3005` in this workspace.

## Verification

```bash
pnpm lint
pnpm build
```

Before launch, check these public routes in English and German:

- `/`
- `/de`
- `/platform`
- `/de/plattform`
- `/products`
- `/de/produkte`
- `/contact`
- `/de/kontakt`
- `/privacy`
- `/de/datenschutz`
- `/terms`
- `/de/agb`

## Contact Email

The contact form sends through Resend from `app/api/contact/route.ts`.

Required production environment variables:

```bash
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=hello@jobdone.ai
```

`CONTACT_FROM_EMAIL` must use a sender/domain configured in Resend.
