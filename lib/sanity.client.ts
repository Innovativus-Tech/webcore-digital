import { createClient } from "next-sanity";

/**
 * Sanity client — used for all server-side data fetching.
 *
 * IMPORTANT: Never import this file in a "use client" component.
 * The read token (SANITY_API_READ_TOKEN) must stay on the server only.
 *
 * For browser-safe operations (e.g. live previews), use a separate
 * token-less client instance.
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable.\n" +
      "Add it to .env.local — see .env.example for the full list of required vars."
  );
}

/**
 * Primary server-side client with read token.
 * useCdn: true in production for fast cached responses.
 * useCdn: false required when token is set (CDN doesn't support auth).
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // CDN is disabled when a token is present; Sanity requires this.
  useCdn: process.env.SANITY_API_READ_TOKEN ? false : process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN,
  // Ensures we always get published content (not drafts) unless in preview
  perspective: "published",
});

/**
 * Token-less browser-safe client for public reads without auth.
 * Used by the embedded Studio and any client component that needs
 * a client reference (e.g. SanityLive, useClient).
 */
export const publicSanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

/**
 * Generic typed fetch helper that wraps sanityClient.fetch with:
 *  - Next.js `revalidate` for ISR
 *  - Optional cache tags for on-demand revalidation
 *  - TypeScript generic for the return value
 *
 * Usage:
 *   const page = await sanityFetch<SanityPage>({
 *     query: PAGE_BY_SLUG_QUERY,
 *     params: { slug: "about-us" },
 *     tags: ["page"],
 *   });
 */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  /** Seconds until ISR revalidates. Pass `false` to opt out. */
  revalidate?: number | false;
  /** Cache tags for on-demand revalidation via Route Handlers. */
  tags?: string[];
}): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    next: {
      revalidate,
      tags: tags.length > 0 ? tags : undefined,
    },
  });
}
