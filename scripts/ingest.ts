/**
 * Ingestion job: reads PageContent from Postgres, chunks the body,
 * generates embeddings via OpenAI, and upserts into Pinecone.
 *
 * Run:  npx tsx scripts/ingest.ts
 *       (DATABASE_URL, OPENAI_API_KEY, PINECONE_API_KEY, PINECONE_INDEX must be set)
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
import { chunkText } from "../lib/embeddings";

const prisma = new PrismaClient();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

const BATCH_SIZE = 100;

async function embedBatch(texts: string[]): Promise<number[][]> {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: texts.map((t) => t.replace(/\n/g, " ")),
  });
  return res.data.map((d) => d.embedding);
}

async function main() {
  const indexName = process.env.PINECONE_INDEX;
  if (!indexName) throw new Error("PINECONE_INDEX is not set");
  const index = pinecone.index(indexName);

  const pages = await prisma.pageContent.findMany();
  console.log(`Found ${pages.length} PageContent record(s)`);

  const vectors: {
    id: string;
    values: number[];
    metadata: { slug: string; title: string; chunk: string };
  }[] = [];

  for (const page of pages) {
    const chunks = chunkText(page.body);
    console.log(`  "${page.slug}" → ${chunks.length} chunk(s)`);

    const embeddings = await embedBatch(chunks);

    for (let i = 0; i < chunks.length; i++) {
      vectors.push({
        id: `${page.slug}::${i}`,
        values: embeddings[i],
        metadata: { slug: page.slug, title: page.title, chunk: chunks[i] },
      });
    }
  }

  // Upsert in batches to stay within Pinecone limits
  for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
    const batch = vectors.slice(i, i + BATCH_SIZE);
    await index.upsert(batch);
    console.log(`Upserted vectors ${i + 1}–${i + batch.length}`);
  }

  console.log(`\nDone. ${vectors.length} vector(s) in Pinecone index "${indexName}".`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
