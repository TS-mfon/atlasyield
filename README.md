# AtlasYield

AtlasYield is a Mantle-native treasury mandate OS for allocating capital across `USDY`, `mETH`, `cmETH`, `USDe`, `fBTC`, and approved liquidity routes.

## Apps

- `apps/api`: VPS-hosted API
- `apps/worker`: VPS-hosted background processor
- `apps/web`: Vercel-hosted frontend

## Core workflow

1. Define a treasury mandate
2. Generate policy-compliant allocation proposals
3. Review risk and concentration drift
4. Persist approvals and decisions on-chain
5. Execute and monitor rebalances from the admin console

## Local development

1. Run the shared infrastructure in `../shared-infra`
2. Create a PostgreSQL database named `atlasyield`
3. Apply `apps/api/db/schema.sql`
4. Apply `apps/api/db/seed.sql`
5. Install dependencies with `npm install`
6. Start each app:
   - `npm run dev:api`
   - `npm run dev:worker`
   - `npm run dev:web`

## Production notes

- API and worker are VPS-ready through Docker
- frontend remains Vercel-oriented
- PostgreSQL is the source of truth for mandates, proposals, approvals, and admin audit logs
- smart contract registry skeletons live in `contracts/`
