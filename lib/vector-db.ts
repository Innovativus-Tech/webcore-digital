import { Pinecone } from "@pinecone-database/pinecone";

let _client: Pinecone | null = null;

function getPineconeClient(): Pinecone {
  if (!_client) {
    if (!process.env.PINECONE_API_KEY) {
      throw new Error("PINECONE_API_KEY is not set");
    }
    _client = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  }
  return _client;
}

export function getIndex() {
  const indexName = process.env.PINECONE_INDEX;
  if (!indexName) throw new Error("PINECONE_INDEX is not set");
  return getPineconeClient().index(indexName);
}

export type VectorMatch = {
  id: string;
  score: number;
  metadata: { slug: string; title: string; chunk: string };
};

export async function querySimilar(
  embedding: number[],
  topK = 4,
): Promise<VectorMatch[]> {
  const index = getIndex();
  const result = await index.query({
    vector: embedding,
    topK,
    includeMetadata: true,
  });
  return (result.matches ?? []) as unknown as VectorMatch[];
}
