# Full Vercel Migration Plan

## Architecture
- **Frontend**: TanStack Start (React) → Vercel (SSR via Nitro preset "vercel")
- **Backend**: Express.js → Vercel Serverless Functions (api/ directory)
- **Database**: MySQL → PostgreSQL (Vercel Postgres / Neon)

## Steps
1. Create root-level `api/` directory with Express.js as Vercel Function
2. Migrate MySQL → PostgreSQL queries
3. Update `vite.config.ts` for Vercel Nitro preset
4. Update frontend API base URL to relative `/api`
5. Create `vercel.json` configuration
6. Set up environment variables
7. Build & deploy test