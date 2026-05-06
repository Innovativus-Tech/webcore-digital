/**
 * GROQ queries for all data fetching needs.
 *
 * Design principles:
 * 1. Always project exactly the fields you need — never use `...` in production queries.
 * 2. Always filter `!(_id in path("drafts.**"))` when not in preview mode.
 * 3. Use cache tags that match the document _type so revalidation is surgical.
 * 4. Keep queries co-located with their TypeScript return types (see sanity.types.ts).
 */

import { sanityFetch } from "./sanity.client";
import type {
  SanityPage,
  SanityPageStub,
  SanitySiteSettings,
} from "./sanity.types";

// ─────────────────────────────────────────────────────────────────────────────
// Fragment helpers (reused projection strings)
// ─────────────────────────────────────────────────────────────────────────────

const CTA_PROJECTION = `{ label, href }`;

const SEO_PROJECTION = `seo {
  metaTitle,
  metaDescription,
  "ogImageUrl": ogImage.asset->url,
  noIndex
}`;

/**
 * Full sections projection — projects every known section type inline.
 * Each section carries its _type and _key so React can key and switch on them.
 */
const SECTIONS_PROJECTION = `sections[] {
  _type,
  _key,

  // heroSection
  _type == "heroSection" => {
    eyebrow, title, subtitle,
    primaryCta ${CTA_PROJECTION},
    secondaryCta ${CTA_PROJECTION},
    badgeItems
  },

  // pageHeroSection
  _type == "pageHeroSection" => {
    eyebrow, title, subtitle,
    primaryCta ${CTA_PROJECTION},
    secondaryCta ${CTA_PROJECTION},
    centered
  },

  // metricsSection
  _type == "metricsSection" => {
    items[] { _key, value, label, context }
  },

  // whyChooseUsSection
  _type == "whyChooseUsSection" => {
    eyebrow, heading, subheading,
    items[] { _key, icon, title, body, size }
  },

  // processSection
  _type == "processSection" => {
    eyebrow, title, subtitle,
    steps[] { _key, number, title, description, outcome }
  },

  // capabilitiesSection
  _type == "capabilitiesSection" => {
    title, subtitle,
    tabs[] { _key, id, label, description, bullets }
  },

  // servicesGridSection
  _type == "servicesGridSection" => {
    eyebrow, title, subtitle,
    items[] { _key, icon, title, summary, href }
  },

  // serviceCategoriesSection
  _type == "serviceCategoriesSection" => {
    eyebrow, heading, subheading,
    categories[] { _key, icon, title, summary, href, tags }
  },

  // featureGridSection
  _type == "featureGridSection" => {
    eyebrow, heading, subheading, cols,
    items[] { _key, icon, title, body }
  },

  // overviewSection
  _type == "overviewSection" => {
    eyebrow, heading, body,
    cta ${CTA_PROJECTION}
  },

  // outcomesSection
  _type == "outcomesSection" => {
    eyebrow, heading,
    items[] { _key, icon, title, body }
  },

  // statsSection
  _type == "statsSection" => {
    bg,
    stats[] { _key, value, label }
  },

  // partnersSection
  _type == "partnersSection" => {
    eyebrow,
    logos[] {
      _key, name, initials,
      "logoUrl": logo.asset->url
    }
  },

  // testimonialSection
  _type == "testimonialSection" => {
    quote, authorName, authorRole, authorCompany,
    "avatarUrl": authorAvatar.asset->url
  },

  // ctaSection
  _type == "ctaSection" => {
    title, subtitle,
    primaryCta ${CTA_PROJECTION},
    secondaryCta ${CTA_PROJECTION},
    reassurance
  },

  // richTextSection
  _type == "richTextSection" => {
    eyebrow, heading, content
  }
}`;

// ─────────────────────────────────────────────────────────────────────────────
// Queries
// ─────────────────────────────────────────────────────────────────────────────

/** Fetch a single page by its slug.current value. */
const PAGE_BY_SLUG_QUERY = `
  *[_type == "page" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    _type,
    _updatedAt,
    title,
    slug,
    pageType,
    summary,
    ${SECTIONS_PROJECTION},
    ${SEO_PROJECTION}
  }
`;

/** Fetch slug + pageType for every published page — used in generateStaticParams. */
const ALL_PAGE_SLUGS_QUERY = `
  *[_type == "page" && defined(slug.current) && !(_id in path("drafts.**"))] {
    _id,
    title,
    slug,
    pageType
  }
`;

/** Fetch all pages whose pageType is "service". */
const ALL_SERVICE_PAGES_QUERY = `
  *[_type == "page" && pageType == "service" && !(_id in path("drafts.**"))] | order(title asc) {
    _id,
    title,
    slug,
    pageType,
    summary
  }
`;

/** Fetch all pages whose pageType is "location". */
const ALL_LOCATION_PAGES_QUERY = `
  *[_type == "page" && pageType == "location" && !(_id in path("drafts.**"))] | order(title asc) {
    _id,
    title,
    slug,
    pageType,
    summary
  }
`;

/** Fetch global site settings (singleton). */
const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    _id,
    siteName,
    tagline,
    contactEmail,
    contactPhone,
    contactAddress,
    primaryCtaLabel,
    primaryCtaHref,
    navItems[] {
      label, href,
      megaMenu[] {
        category,
        items[] { label, href }
      }
    },
    footerTagline,
    footerColumns[] {
      title,
      links[] { label, href }
    },
    copyrightText,
    chatbotName,
    chatbotGreeting,
    chatbotExampleQuestions
  }
`;

/**
 * Fetch all published pages with their full content — used by the
 * RAG ingestion pipeline to build the Pinecone vector store.
 */
const ALL_PAGES_FOR_RAG_QUERY = `
  *[_type == "page" && !(_id in path("drafts.**"))] | order(pageType asc) {
    _id,
    title,
    "slug": slug.current,
    pageType,
    summary,
    ${SECTIONS_PROJECTION}
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Typed fetcher functions
// ─────────────────────────────────────────────────────────────────────────────

export async function getPageBySlug(slug: string): Promise<SanityPage | null> {
  return sanityFetch<SanityPage | null>({
    query: PAGE_BY_SLUG_QUERY,
    params: { slug },
    tags: ["page"],
    revalidate: 60,
  });
}

export async function getAllPageSlugs(): Promise<SanityPageStub[]> {
  return sanityFetch<SanityPageStub[]>({
    query: ALL_PAGE_SLUGS_QUERY,
    tags: ["page"],
    // Slugs rarely change — longer cache is fine
    revalidate: 3600,
  });
}

export async function getAllServicePages(): Promise<SanityPageStub[]> {
  return sanityFetch<SanityPageStub[]>({
    query: ALL_SERVICE_PAGES_QUERY,
    tags: ["page"],
    revalidate: 3600,
  });
}

export async function getAllLocationPages(): Promise<SanityPageStub[]> {
  return sanityFetch<SanityPageStub[]>({
    query: ALL_LOCATION_PAGES_QUERY,
    tags: ["page"],
    revalidate: 3600,
  });
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return sanityFetch<SanitySiteSettings | null>({
    query: SITE_SETTINGS_QUERY,
    tags: ["siteSettings"],
    // Site settings rarely change — 1hr cache
    revalidate: 3600,
  });
}

/**
 * Used exclusively by the RAG ingestion script (scripts/ingest.ts).
 * Returns all pages with full section content for chunking + embedding.
 */
export async function getAllPagesForRag() {
  return sanityFetch<
    Array<{
      _id: string;
      title: string;
      slug: string;
      pageType: string;
      summary?: string;
      sections: SanityPage["sections"];
    }>
  >({
    query: ALL_PAGES_FOR_RAG_QUERY,
    tags: ["page"],
    // Bypass cache for ingestion jobs — always fresh
    revalidate: false,
  });
}

// Re-export raw query strings for use in generateMetadata or other places
// that build their own fetch calls with custom options.
export {
  PAGE_BY_SLUG_QUERY,
  ALL_PAGE_SLUGS_QUERY,
  ALL_SERVICE_PAGES_QUERY,
  SITE_SETTINGS_QUERY,
  ALL_PAGES_FOR_RAG_QUERY,
};
