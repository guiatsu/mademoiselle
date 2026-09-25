# Mademoiselle

Brazilian aesthetics clinic application. The initial release is a public marketing
site in pt-BR, with a shared Google Agenda view at `/agendar` and an `/admin`
informational placeholder. Scheduling requests are handled by WhatsApp; the app
does not yet implement authentication or administrative operations.

## Setup

Use Node.js 24 LTS (`nvm use`) and pnpm 10.6.2.

```bash
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000. All environment variables may remain empty to run and
build the marketing site. Fonts and images are local; no Google Fonts request is
needed during the build.

## Stack and structure

Next.js 16 App Router, React 19, strict TypeScript, Tailwind 4, shadcn/ui primitives
and Lucide. React Hook Form, Zod and its RHF resolver are installed for future forms.
Vitest and React Testing Library provide behavioral tests. No global query provider
is needed by this static site.

```text
src/
  app/
    (marketing)/       # Landing page at /
    (booking)/agendar/ # Google Agenda embed and WhatsApp contact
    (admin)/admin/     # Explicit placeholder, noindex
    globals.css        # Brand tokens and global accessibility defaults
    layout.tsx         # pt-BR and metadata
  components/
    layout/            # Navigation, header, footer
    ui/                # shadcn button and accordion
  features/marketing/
    assets/            # Eight original JPEGs
    components/        # Landing sections and carousel interaction
    content.ts         # Static treatments, values and FAQ
  db/                  # DataSource, shared options, CLI entry and tests
  lib/
    supabase/          # Browser, server and privileged clients
    env-schema.ts      # Zod schemas with redacted errors
    public-env.ts      # Explicit browser-safe environment mapping
  env.ts               # Server-only environment mapping
  test/                # React Testing Library setup
scripts/migrate.mjs    # TypeORM CLI runner
```

## Commands

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
pnpm test
pnpm test:watch
pnpm format
pnpm format:check
```

ESLint owns quality rules; Prettier owns formatting and Tailwind ordering. ESLint 9
and TypeScript 5.9 are retained for compatibility with Next's ESLint plugins and
the ts-node migration runner. Update them when their peer dependencies support it.

## Environment and Supabase

| Variable                        | Scope  | Used for                                             |
| ------------------------------- | ------ | ---------------------------------------------------- |
| `DATABASE_URL`                  | Server | TypeORM PostgreSQL connection                        |
| `NEXT_PUBLIC_SUPABASE_URL`      | Public | Supabase project URL                                 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public | Browser-safe Supabase publishable or legacy anon key |
| `SUPABASE_SERVICE_ROLE_KEY`     | Server | Explicit privileged Supabase operations              |

`NEXT_PUBLIC_SUPABASE_ANON_KEY` also accepts the new `sb_publishable_...` key format.
The Supabase CLI is optional; database schema changes remain managed by TypeORM.

Values are validated lazily when an integration is used. Invalid configuration
reports field names without echoing credentials. Never commit `.env.local`.
Mercado Pago and Resend are deferred; no credentials or SDKs are required yet.

Use TypeORM for application persistence and the Supabase SDK for Auth/Storage.
The admin client bypasses RLS and requires server-side authorization at every call
site. Direct browser database access must have deliberately designed RLS policies.
The server client currently requires writable cookies (Server Actions or Route
Handlers). Before adding authenticated Server Components, implement and test a
Supabase session-refresh proxy and server-side access checks. A noindex directive
is not access control.

## Database and migrations

`getDataSource()` in `src/db/data-source.ts` lazily initializes one server-only pool,
caches concurrent initialization on `globalThis`, and allows retries after failure.
The pool is limited to five connections per process, not five across a deployment.
Use the Node.js runtime, not Edge, for database consumers.

Use Supabase's direct connection or session pooler. Use verified TLS settings in
the PostgreSQL connection URL (with a trusted certificate as necessary); do not
disable certificate verification. The CLI reads `.env.local`/`.env` using Next's
loader. No connection or schema is created at build time.

There are deliberately no entities or migrations in this bootstrap: marketing data
is static and no persisted domain has been introduced. For the first schema change:

1. Create `src/db/entities/<name>.entity.ts` using TypeORM `EntitySchema` with explicit
   column types. This avoids relying on decorator metadata from Next's compiler.
2. Register the schema in `entities` in `src/db/options.ts`.
3. Generate a migration against a development database:

   ```bash
   pnpm db:migration:generate src/db/migrations/add-services
   ```

4. Review the SQL, explicitly import/register the migration in `migrations` in
   `src/db/options.ts`, and commit both files. Explicit registration works in both
   the CLI and bundled Next.js output.
5. Run and verify the migration against the intended database:

   ```bash
   pnpm db:migration:show
   pnpm db:migration:run
   pnpm db:migration:revert
   ```

`revert` undoes the latest migration; run it only when rollback is intended.
Migrations never run automatically, and `synchronize` is always false. Use the same
registries in runtime and CLI. The CLI uses ts-node, path alias support and the React
server condition to load server-only modules. Do not run the web app with this
condition globally.

Future entities use UUIDs and `timestamptz` for UTC instants. Store prices as canonical
decimal strings (`"150.00"`) backed by PostgreSQL `numeric`; use `150,00` only for
localized presentation. Scheduling must distinguish clinic-local business hours
from absolute timestamps and enforce overlap rules transactionally. Payment and
appointment states remain separate.

## Frontend migration

`../mademoiselle-aesthetics-landing-page` is the original TanStack Start/Vite visual
prototype and remains untouched. The new site preserves its eight images,
Cormorant Garamond/Manrope typography, ivory/champagne/taupe palette, hero, treatment
cards, about, values, FAQ, contact section and responsive navigation. Images now use
Next Image. Original color tokens are preserved. Focus states, reduced motion,
FAQ semantics and keyboard interactions have been improved. The treatment carousel
uses native horizontal scrolling with small client-side controls.

The old router, Vite/Lovable infrastructure, telemetry/error scripts, unused UI
library, global state/query dependencies and monolithic page were not copied.
Placeholder testimonials were omitted; unknown contact and professional details are
shown honestly as forthcoming. Contact details are centralized in
`src/features/marketing/contact-details.ts`, with WhatsApp and telephone links and
a lazy-loaded interactive Google Maps embed at the coordinates supplied by the
owner. The map requires access to Google; its external link is also available. No CMS, scheduling,
payments, login flow or speculative database tables were introduced.

## Before launch

- Supply clinic hours and professional credentials.
- Confirm rights and suitability of prototype images; the professional portrait is
  explicitly described as illustrative until real team information is supplied.
- Add only approved real testimonials.
- Configure the production domain, canonical URL, social sharing image and sitemap.
- Provision Supabase, test database connectivity and the first real migration.
- Implement auth/session refresh and authorization before building admin features.
- Run `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` for every change.

Persistent architectural instructions are in [AGENTS.md](AGENTS.md).

## Scheduling with Google Agenda

The desktop and mobile navigation link to `/agendar`, which embeds
the shared Google Agenda using a basic iframe. The page also provides a direct
Google Agenda link and WhatsApp support. No API key or additional SDK is required.
The calendar must allow public sharing and embedding for visitors to see its events.

Availability is managed in Google Agenda, while booking requests are confirmed by
the clinic over WhatsApp. This integration does not synchronize appointments with
the application's PostgreSQL database. Before launch, verify public visibility and
test the embedded calendar in a browser.
