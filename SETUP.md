# Click & Cast Inc — Setup Guide

## 1. Install dependencies

```bash
npm install
cp .env.example .env.local
```

## 2. Supabase (contact form leads)

1. Create a free project at https://supabase.com
2. In the SQL editor, run:

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  service text,
  message text not null,
  created_at timestamptz default now()
);
-- Only allow inserts from the service role (server-side only)
alter table leads enable row level security;
create policy "service role only" on leads for insert using (false);
```

3. Copy your **Project URL**, **anon key**, and **service_role key** from
   Settings → API into `.env.local`.

## 3. Sanity CMS

```bash
npx sanity@latest init --env
```

- Choose "Create new project"
- Dataset: `production`
- Copy the **project ID** to `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`

To open the CMS studio locally:
```bash
npx sanity dev
```

Schemas are in `sanity/schemas/` — add portfolio items and team members there.

## 4. Cloudinary (media)

1. Sign up free at https://cloudinary.com
2. Copy your **Cloud Name** to `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

## 5. WhatsApp quick-connect

Update these two numbers in `.env.local` (no + sign, e.g. `14161234567`):
```
NEXT_PUBLIC_WHATSAPP_MANAGER=...
NEXT_PUBLIC_WHATSAPP_PRODUCTION=...
```

Also update the hardcoded fallbacks in:
- `src/components/sections/CTA.tsx`
- `src/app/contact/page.tsx`

## 6. Swap in real content

| What | Where |
|------|-------|
| Logo | Add `public/logo.svg` and update `Navbar.tsx` |
| Showreel video | Add to `public/` and reference in `Hero.tsx` |
| Portfolio photos | Upload via Sanity Studio |
| Social URLs | `src/components/layout/Footer.tsx` |
| Team info | Via Sanity Studio |

## 7. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add all `.env.local` values as **Environment Variables** in the Vercel dashboard.

---

## Dev

```bash
npm run dev      # http://localhost:3000
npm run build    # production build check
npm run lint     # linter
```
