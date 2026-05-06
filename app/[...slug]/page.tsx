/**
 * Dynamic catch-all route for Sanity-driven pages.
 *
 * Handles all slugs except:
 *  - "/" (homepage — handled by app/page.tsx)
 *  - "/studio" (Sanity Studio — handled by app/studio/[[...tool]]/page.tsx)
 *  - Routes with their own dedicated page.tsx (about-us, contact, careers, etc.)
 *
 * When Sanity is configured: fetches page data from Sanity and renders via SectionRenderer.
 * When Sanity is NOT configured: returns 404 (the static routes still work independently).
 *
 * ISR: revalidates every 60 seconds.
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { isSanityConfigured } from "@/lib/sanity.client";
import { getPageBySlug, getAllPageSlugs } from "@/lib/sanity.queries";

export const revalidate = 60;

// ── Generate static params ──────────────────────────────────────────────────

/**
 * Pre-render all Sanity pages at build time.
 * The slug is stored as an array to match the [...slug] catch-all pattern.
 *
 * Example: slug.current = "web-design-services" → params: { slug: ["web-design-services"] }
 */
export async function generateStaticParams() {
  if (!isSanityConfigured) return [];

  const pages = await getAllPageSlugs();

  return pages
    .filter((p) => {
      const s = p.slug?.current;
      // Skip homepage (handled by app/page.tsx) and any empty slugs
      return s && s !== "/";
    })
    .map((p) => ({
      slug: p.slug.current.split("/").filter(Boolean),
    }));
}

// ── Generate metadata ───────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  if (!isSanityConfigured) return {};

  const slugStr = params.slug.join("/");
  const page = await getPageBySlug(slugStr);

  if (!page) return {};

  return {
    title: page.seo?.metaTitle ?? page.title,
    description: page.seo?.metaDescription ?? page.summary,
    ...(page.seo?.noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}

// ── Page component ──────────────────────────────────────────────────────────

export default async function DynamicPage({
  params,
}: {
  params: { slug: string[] };
}) {
  if (!isSanityConfigured) {
    notFound();
  }

  const slugStr = params.slug.join("/");
  const page = await getPageBySlug(slugStr);

  if (!page) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main>
        <SectionRenderer sections={page.sections} />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
