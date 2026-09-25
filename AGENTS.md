# AGENTS.md

## Project

Mademoiselle is a Brazilian aesthetics clinic application built with Next.js.

The application will support a public marketing website and progressively add:

- appointment scheduling
- availability
- professionals
- customers
- services
- payments
- administration

User-facing content is written in Brazilian Portuguese (`pt-BR`).

Source code and technical identifiers must use English.

---

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- TypeORM
- Supabase PostgreSQL
- Supabase Auth
- Supabase Storage
- Zod
- React Hook Form
- TanStack Query when justified
- Vitest
- React Testing Library
- ESLint
- Prettier

Package manager: `pnpm`.

---

## General Principles

Prefer simple, explicit code over clever abstractions.

Follow existing project patterns before introducing new ones.

Do not introduce a new library, architectural layer or state-management solution without a concrete reason.

Do not create abstractions for hypothetical future reuse.

Keep business rules independent from presentation components.

Critical rules must be enforced server-side and, when appropriate, at the database level.

---

## Next.js

Use Server Components by default.

Only use `"use client"` when client execution is required.

Keep client boundaries as small as possible.

Do not make an entire page a Client Component because one child requires interactivity.

Use Server Actions for UI-oriented mutations when appropriate.

Use Route Handlers for:

- webhooks
- external APIs
- callbacks
- machine-to-machine endpoints

Do not access the database from Client Components.

---

## Project Organization

Domain-specific code belongs under:

`src/features/<feature>`

Example:

```text
features/
  appointments/
    components/
    schemas/
    server/
    types.ts
```

Shared UI primitives belong in:

`src/components/ui`

Shared layout components belong in:

`src/components/layout`

Database infrastructure belongs in:

`src/db`

Supabase clients belong in:

`src/lib/supabase`

Do not put domain-specific behavior inside `components/ui`.

Promote code to shared modules only after genuine reuse exists.

Do not create empty directories or abstractions only to match an architectural diagram.

---

## TypeScript

TypeScript strict mode must stay enabled.

Do not use `any` unless absolutely unavoidable.

Prefer `unknown` for unknown external data.

Avoid unsafe type assertions.

Do not use `@ts-ignore`.

If an exception is genuinely necessary, explain it with a comment.

Prefer inferred types internally and explicit types at important boundaries.

Do not duplicate domain models unnecessarily.

---

## Validation

Treat all external input as untrusted.

Validate boundaries with Zod, including:

- forms
- route handlers
- server actions
- URL parameters when necessary
- webhook payloads
- external API responses when relevant

Frontend validation improves UX.

Server validation provides correctness.

Never rely exclusively on frontend validation.

---

## Database

Supabase provides the PostgreSQL database.

TypeORM is the primary ORM for application-controlled database operations.

Database access must execute server-side.

Use migrations for schema changes.

Commit migrations to Git.

Never rely on `synchronize: true` in production.

Use UUID identifiers unless another identifier is clearly more appropriate.

At PostgreSQL level, use `timestamptz` for absolute timestamps.

Store absolute timestamps in UTC.

Scheduling must remain timezone-aware.

Never use floating-point numbers for money.

Store monetary values as canonical decimal strings (e.g. "150.00"), backed by PostgreSQL numeric.

Important invariants should use database constraints where practical.

---

## TypeORM

Use TypeORM in Data Mapper style.

Maintain a dedicated `DataSource`, normally under:

`src/db/data-source.ts`

Keep TypeORM initialization server-only.

Use a safe cached/singleton initialization strategy suitable for Next.js development and hot reloads.

Avoid creating a new connection pool on every module reload or request.

Entities belong under:

`src/db/entities`

Migrations belong under:

`src/db/migrations`

Entity files should generally follow the naming pattern:

`appointment.entity.ts`

Keep entities focused on persistence structure:

- columns
- indexes
- relationships
- database metadata

Do not place application business logic inside TypeORM entities.

Business rules belong in feature/domain server code.

Use repositories obtained from the configured DataSource.

Use QueryBuilder when a query genuinely benefits from it.

Do not create custom repository classes for every entity by default.

Do not introduce generic abstractions such as `BaseRepository` unless a real repeated use case exists.

Do not use Active Record style unless the existing architecture provides a strong reason.

For schema changes:

1. update the relevant entity;
2. generate or write the migration;
3. review the generated SQL;
4. commit the migration;
5. ensure the app still typechecks and builds.

Never modify a database schema manually when the change should be represented by a migration.

---

## Supabase

Supabase may provide:

- PostgreSQL
- Auth
- Storage
- Realtime
- RLS

The public Supabase browser key is not a secret.

The service-role key is a secret and must **never** reach the browser.

Direct browser-side database access is allowed only when intentionally designed around RLS.

Critical business operations must execute server-side.

Examples include:

- booking creation
- availability confirmation
- calendar blocking
- payment operations
- administrative mutations

TypeORM should connect directly to the Supabase PostgreSQL database for server-controlled persistence.

Supabase SDK should be used when Supabase-specific capabilities provide value, especially Auth and Storage.

Do not use the Supabase SDK and TypeORM interchangeably without a clear reason.

Choose the appropriate access path deliberately.

---

## Scheduling

Availability displayed by the frontend is not proof that a slot can still be booked.

Appointment creation must revalidate availability server-side.

Eventually, appointment overlap must be protected against race conditions using transactional/database-level guarantees.

Do not solve concurrency exclusively with frontend state.

Scheduling code must distinguish:

- recurring local business hours
- blocked local periods
- absolute appointment timestamps
- the clinic's configured timezone

Do not treat plain `"14:30"` strings as absolute timestamps.

---

## Payments

Appointment status and payment status are separate concepts.

Never use client-provided payment state as authoritative.

Payment confirmation will eventually come from the payment provider/server webhook.

Private payment credentials must stay server-side.

Money is stored as canonical decimal strings.

---

## React Components

Keep components focused.

Do not mix all of the following in one component unless the code is genuinely trivial:

- data access
- business rules
- validation
- mutations
- formatting
- large UI trees

Extract code by responsibility, not arbitrary file size.

Avoid meaningless micro-components.

---

## Server and Client Boundaries

Database code must never be imported into Client Components.

Server-only modules should be explicitly protected when appropriate.

Do not leak:

- `DATABASE_URL`
- database entities that pull in server-only infrastructure
- Supabase service-role credentials
- payment credentials

into client bundles.

Client Components may receive serializable data from Server Components.

Push interactive boundaries downward instead of placing `"use client"` at page/layout level unnecessarily.

---

## shadcn/ui

shadcn components under:

`src/components/ui`

are UI primitives.

Prefer composition over modifying primitives.

Application-specific components belong in their feature directories.

Do not make the application look like a generic shadcn demo.

Preserve the Mademoiselle brand identity through tokens, typography, spacing and composition.

---

## Styling

Use Tailwind by default.

Avoid inline styles unless dynamic runtime values genuinely require them.

Avoid arbitrary Tailwind values when a reusable design token would be more appropriate.

Use CSS variables for brand tokens.

The Mademoiselle visual language uses:

- warm ivory
- champagne gold
- taupe
- subtle borders
- elegant serif typography
- clean sans-serif body typography
- restrained shadows
- generous whitespace

Do not transform the public site into a generic SaaS aesthetic.

---

## Naming

Code identifiers must use English.

User-facing copy uses Brazilian Portuguese.

Components:

`PascalCase`

Functions and variables:

`camelCase`

Files:

`kebab-case`

Examples:

```text
appointment-form.tsx
appointment-card.tsx
get-available-slots.ts
appointment.entity.ts
```

Use the `@/` import alias.

Avoid deeply nested relative imports.

Do not prefix interfaces with `I`.

Avoid Hungarian notation.

---

## ESLint

ESLint owns code-quality rules.

Keep the configuration aligned with:

- Next.js
- React
- TypeScript

Linting should catch meaningful issues such as:

- unused imports
- invalid hook usage
- unsafe TypeScript patterns where practical

Do not disable rules simply to make CI pass.

If a rule must be disabled locally, document why.

---

## Prettier

Prettier owns formatting.

Use `prettier-plugin-tailwindcss` for Tailwind class ordering.

ESLint and Prettier must not enforce conflicting formatting rules.

Do not manually reorder Tailwind classes that Prettier can handle.

---

## Security

Never commit secrets.

Never expose:

- `DATABASE_URL`
- Supabase service-role key
- payment access tokens
- email provider API keys

Only variables explicitly intended for the browser may use `NEXT_PUBLIC_*`.

Do not log sensitive personal, authentication or payment information.

Treat customer information as private application data.

---

## Errors

Do not silently swallow errors.

Client-facing errors must be useful and, when shown to end users, written in Brazilian Portuguese.

Do not leak:

- stack traces
- SQL
- connection strings
- internal IDs unnecessarily
- secrets

Server logs may include diagnostic details as long as they do not expose secrets or sensitive customer data.

---

## Tests

Prioritize tests around meaningful behavior.

Especially important future targets:

- slot availability
- appointment overlap
- appointment state transitions
- cancellation rules
- pricing
- payment state transitions

Do not create meaningless tests to increase coverage.

Use:

- Vitest
- React Testing Library

Use Playwright later when end-to-end booking flows justify it.

---

## Environment Variables

When introducing a new environment variable:

1. determine whether it is server-only or browser-safe;
2. add it to the typed environment schema;
3. add a placeholder to `.env.example`;
4. never commit the real value.

Future private integration credentials must remain server-only.

---

## Migrations

Every persisted schema change must be represented by a TypeORM migration.

Migration files must be reviewed before committing.

Common commands should be exposed through package scripts when possible:

```bash
pnpm db:migration:generate
pnpm db:migration:run
pnpm db:migration:revert
```

Do not enable automatic schema synchronization as a substitute for migrations.

---

## Before Finishing Any Task

Run:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

For tasks that alter the database schema, also verify the relevant TypeORM migration.

Fix failures rather than disabling rules.

If one of these commands cannot be run, explicitly report why.

---

## Agent Behavior

Before changing architecture:

1. inspect the existing implementation;
2. identify the established project pattern;
3. reuse that pattern when reasonable.

Do not refactor unrelated code while completing a focused task.

Do not introduce a dependency if the existing stack can solve the problem cleanly.

Do not replace working project conventions based solely on personal preference.

When changing database schemas, include the corresponding TypeORM migration.

When introducing an environment variable, update `.env.example`.

When adding a new architectural convention, update this file if future agents need to know about it.

Prefer the simplest solution that fits the current requirements while keeping the application maintainable.

The repository `mademoiselle-aesthetics-landing-page` is a visual/frontend reference, not the architectural source of truth for this application.

## Bootstrap implementation conventions

- Run Node.js 24 LTS (`.nvmrc`) and pnpm 10.6.2.
- Marketing content and local image assets live in `src/features/marketing`.
- Fonts are self-hosted through Fontsource packages; builds do not fetch Google Fonts.
- Use EntitySchema for future TypeORM entities with explicit column types, so Next.js
  and the migration CLI share the same persistence metadata without decorator transforms.
- Register each entity and migration explicitly in `src/db/options.ts`. Runtime glob
  discovery is unreliable in bundled Next.js output.
- Application code calls `getDataSource()`; the CLI uses `cli-data-source.ts`.
  Neither automatic synchronization nor automatic migrations are enabled.
- The migration runner uses the React server condition to load `server-only` modules.
- Supabase server client currently targets Server Actions/Route Handlers with writable
  cookies. Add and test a session-refresh proxy before implementing SSR authentication.
- `/admin` is a public informational placeholder, not an authenticated admin area.
- Keep prices as canonical decimal strings such as `"150.00"`; format commas only for display.
