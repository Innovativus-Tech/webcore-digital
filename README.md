# WebcoreDigital

> **Where strategy meets technology.**  
> A results-driven digital marketing agency website built on Next.js 14, Sanity CMS, and an AI-powered lead-capture chatbot.

---

## ✨ Features

- **Dynamic page rendering** — All pages are driven by Sanity CMS content with on-demand revalidation (ISR).
- **AI chatbot** — Conversational lead-capture assistant powered by OpenAI GPT-4o-mini with Pinecone vector search for context-aware responses.
- **Lead capture** — Chat leads are persisted to PostgreSQL via Prisma ORM.
- **Sanity Studio** — Embedded at `/studio` for content editors to manage pages, sections, and assets without leaving the site.
- **Rich section library** — 20+ modular page sections (Hero, Metrics, Process Stepper, Capabilities Tabs, Partner Strip, Testimonial, CTA, and more).
- **Framer Motion animations** — Smooth, scroll-triggered animations throughout.
- **Tailwind CSS** — Utility-first styling with a custom design system.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Framer Motion |
| CMS | Sanity v3 |
| AI / LLM | OpenAI (GPT-4o-mini + text-embedding-3-small) |
| Vector DB | Pinecone (serverless, cosine, dim=1536) |
| Database | PostgreSQL via Prisma ORM |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

---

## 📁 Project Structure

```
webcore-main/
├── app/                        # Next.js App Router
│   ├── [...]slug/              # Catch-all dynamic route for CMS-driven pages
│   ├── about-us/
│   ├── careers/
│   ├── contact/
│   ├── services/               # Services overview + individual service pages
│   ├── studio/                 # Embedded Sanity Studio
│   ├── api/
│   │   ├── chat/               # AI chatbot streaming API route
│   │   ├── lead/               # Lead capture API route
│   │   └── revalidate/         # Sanity webhook ISR revalidation
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── sections/               # 20+ modular page sections
│   ├── chatbot/                # Chatbot UI components
│   ├── layout/                 # Header, Footer, Nav
│   ├── motion/                 # Framer Motion wrappers & marquees
│   └── ui/                     # Base UI primitives
├── lib/
│   ├── sanity.client.ts        # Sanity client setup
│   ├── sanity.queries.ts       # GROQ queries
│   ├── sanity.types.ts         # TypeScript types for Sanity content
│   ├── pages-data.ts           # Static fallback / seed data
│   ├── data.ts                 # Shared content data
│   ├── embeddings.ts           # OpenAI embedding helpers
│   ├── vector-db.ts            # Pinecone upsert/query helpers
│   └── prisma.ts               # Prisma client singleton
├── schemas/                    # Sanity schema definitions
│   ├── documents/
│   ├── sections/
│   └── objects/
├── prisma/
│   └── schema.prisma           # Database schema (Lead, ChatLog)
├── scripts/
│   ├── seed-sanity.ts          # Seeds all CMS content
│   ├── seed-content.ts         # Supplementary content seed
│   └── ingest.ts               # Embeds content into Pinecone
├── .env.example                # Environment variable template
├── next.config.mjs
├── sanity.config.ts
└── tailwind.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- PostgreSQL database (local or hosted, e.g. Supabase, Neon)
- Sanity account — [sanity.io](https://sanity.io)
- OpenAI API key — [platform.openai.com](https://platform.openai.com)
- Pinecone account — [pinecone.io](https://pinecone.io)

### 1. Clone & Install

```bash
git clone https://github.com/Innovativus-Tech/webcore-digital.git
cd webcore-digital
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Fill in all values in `.env.local` (see [Environment Variables](#-environment-variables) below).

### 3. Set Up the Database

```bash
npx prisma migrate dev --name init
```

### 4. Seed Sanity CMS Content *(optional but recommended)*

```bash
npx tsx scripts/seed-sanity.ts
```

### 5. Ingest Content into Pinecone *(for AI chatbot)*

```bash
npx tsx scripts/ingest.ts
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio).

---

## 🔑 Environment Variables

Copy `.env.example` to `.env.local` and populate the following:

```env
# PostgreSQL
DATABASE_URL="postgresql://user:password@host:port/database"

# OpenAI — embeddings (text-embedding-3-small) + chat (gpt-4o-mini)
OPENAI_API_KEY="sk-..."

# Pinecone — serverless index, dimension=1536, metric=cosine
PINECONE_API_KEY="..."
PINECONE_INDEX="..."

# Sanity — public (safe to expose to browser)
NEXT_PUBLIC_SANITY_PROJECT_ID="..."
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"

# Sanity — private (server-side only)
SANITY_API_READ_TOKEN="..."

# Sanity — write token (used by seed script only)
SANITY_API_WRITE_TOKEN="..."

# Optional: webhook secret for on-demand ISR revalidation
SANITY_REVALIDATE_SECRET=""
```

> **Note:** Never commit `.env.local` to version control. Only `.env.example` should be committed.

---

## 📝 Sanity CMS

The site content is fully managed via Sanity CMS. The Studio is embedded at `/studio`.

### Setting Up Sanity

1. Create a Sanity project: `npx sanity init --bare`
2. Copy your **Project ID** into `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. Generate a **Viewer** token at [sanity.io/manage](https://sanity.io/manage) → API → Tokens, and set `SANITY_API_READ_TOKEN`.
4. Generate an **Editor** token for seeding, and set `SANITY_API_WRITE_TOKEN`.

### On-Demand Revalidation

Configure a Sanity webhook pointing to `https://your-domain.com/api/revalidate` with the secret set in `SANITY_REVALIDATE_SECRET`. Published content changes will immediately revalidate cached pages.

---

## 🤖 AI Chatbot

The chatbot is a streaming conversational assistant that:

1. Accepts a user message via `/api/chat`.
2. Embeds the message using `text-embedding-3-small`.
3. Queries Pinecone for the top-K relevant context chunks from the ingested site content.
4. Streams a response from GPT-4o-mini with the retrieved context injected into the system prompt.
5. Persists the conversation turn to PostgreSQL via the `ChatLog` model.

When a user submits their contact details, the `/api/lead` route saves them as a `Lead` record.

### Re-ingesting Content

Whenever site content changes significantly, re-run the ingest script to keep the vector index current:

```bash
npx tsx scripts/ingest.ts
```

---

## 🗄️ Database Schema

Two models are managed by Prisma:

```prisma
model Lead {
  id        String   @id @default(cuid())
  sessionId String?
  name      String
  email     String
  company   String
  createdAt DateTime @default(now())
}

model ChatLog {
  id        String   @id @default(cuid())
  sessionId String
  role      String   // "user" | "assistant"
  content   String
  createdAt DateTime @default(now())
}
```

Run migrations with:

```bash
npx prisma migrate dev
```

Explore the database with Prisma Studio:

```bash
npx prisma studio
```

---

## 🧩 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx prisma migrate dev` | Apply database migrations |
| `npx prisma studio` | Open Prisma DB GUI |
| `npx tsx scripts/seed-sanity.ts` | Seed all CMS content |
| `npx tsx scripts/ingest.ts` | Embed content into Pinecone |

---

## ☁️ Deployment

This project is a standard Next.js application and can be deployed to any platform that supports Node.js.

**Recommended platforms:**
- [Vercel](https://vercel.com) — zero-config Next.js deployment
- [Coolify](https://coolify.io) — self-hosted alternative

### Key Deployment Notes

- Set all environment variables from `.env.example` in your hosting platform's dashboard.
- Run `npx prisma migrate deploy` as part of your build/release command (not `migrate dev`).
- Ensure your database is accessible from the deployment environment.
- Add your production domain to Sanity's CORS origins at [sanity.io/manage](https://sanity.io/manage).

---

## 📄 License

Private repository — © Innovativus Tech. All rights reserved.
