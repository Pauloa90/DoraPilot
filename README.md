# DoraPilot

Marketing site (and upcoming product) for **DORA compliance tooling** — helping small ICT vendors and SME EU financial entities respond to Article 30 questionnaires and generate Register of Information files in xBRL-CSV.

> Regulation reference: [EU 2022/2554 — Digital Operational Resilience Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554).

## Tech stack

- **Next.js** 16.2.6 (App Router, Turbopack)
- **React** 19.2.4
- **Tailwind CSS** 4 (CSS variables + `@theme inline`)
- **TypeScript** 5
- **lucide-react** for icons
- **Supabase** (planned, stubbed) for auth + persistence

## Repository layout

```
.
├── app/                  # App Router routes
│   ├── api/waitlist/     # Waitlist signup endpoint
│   ├── blog/             # 4 articles + index
│   ├── legal/            # Privacy, Terms, DPA, Sub-processors
│   ├── login/            # Login page (disabled until auth ships)
│   ├── layout.tsx
│   └── page.tsx          # Landing
├── components/           # Shared React components
├── lib/                  # Utilities (Supabase stub)
├── public/               # Static assets
└── netlify.toml          # Deploy config
```

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deployment

Auto-deployed to **Netlify** on push to `main`. Primary domain: **dorapilot.com**.

## Status

Pre-launch. Marketing site complete; product (auth, dashboard, questionnaire engine, RoI generator) under development. See `AGENTS.md` for in-repo notes.
