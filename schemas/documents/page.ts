import { defineField, defineType } from "sanity";

/**
 * page — the primary content document for every route on the site.
 *
 * Sections are stored as a polymorphic array using Sanity's block pattern.
 * Each block has a `_type` discriminator so both the Studio and Next.js
 * can handle them correctly.
 *
 * All published pages are ingested by the RAG pipeline via:
 *   *[_type == "page" && !(_id in path("drafts.**"))]
 */
export const pageDocument = defineType({
  name: "page",
  title: "Page",
  type: "document",

  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    // ── Identity ────────────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      group: "content",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description:
        'URL path for this page. Use "/" for the homepage. No leading slash needed for all others.',
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "pageType",
      title: "Page type",
      type: "string",
      group: "content",
      description: "Used to route the page to the correct template in Next.js.",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Service", value: "service" },
          { title: "Location", value: "location" },
          { title: "About", value: "about" },
          { title: "Careers", value: "careers" },
          { title: "Contact", value: "contact" },
          { title: "Services hub", value: "servicesHub" },
          { title: "E-commerce", value: "ecommerce" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      title: "Page summary",
      type: "text",
      rows: 3,
      group: "content",
      description:
        "1-3 sentence description of this page. Used by the RAG chatbot as context.",
    }),

    // ── Sections array ───────────────────────────────────────────────────────
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      group: "content",
      of: [
        { type: "heroSection" },
        { type: "pageHeroSection" },
        { type: "metricsSection" },
        { type: "whyChooseUsSection" },
        { type: "processSection" },
        { type: "capabilitiesSection" },
        { type: "servicesGridSection" },
        { type: "serviceCategoriesSection" },
        { type: "featureGridSection" },
        { type: "overviewSection" },
        { type: "outcomesSection" },
        { type: "statsSection" },
        { type: "partnersSection" },
        { type: "testimonialSection" },
        { type: "ctaSection" },
        { type: "richTextSection" },
      ],
    }),

    // ── SEO ──────────────────────────────────────────────────────────────────
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoFields",
      group: "seo",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      pageType: "pageType",
    },
    prepare({ title, subtitle, pageType }) {
      const icons: Record<string, string> = {
        home: "🏠",
        service: "⚙️",
        location: "📍",
        about: "👥",
        careers: "💼",
        contact: "✉️",
        servicesHub: "🗂️",
        ecommerce: "🛒",
      };
      const icon = icons[pageType] ?? "📄";
      return {
        title: `${icon} ${title ?? "Untitled"}`,
        subtitle: subtitle ? `/${subtitle}` : "No slug",
      };
    },
  },

  orderings: [
    {
      title: "Page type",
      name: "pageTypeAsc",
      by: [{ field: "pageType", direction: "asc" }],
    },
    {
      title: "Title A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
