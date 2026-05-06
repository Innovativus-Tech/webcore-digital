import { defineField, defineType } from "sanity";

/**
 * SEO metadata object — embedded in every page document.
 */
export const seoFields = defineType({
  name: "seoFields",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description:
        "Overrides the page title in <title> and OG tags. Keep under 60 chars.",
      validation: (r) => r.max(60).warning("Over 60 characters — will be truncated in SERPs."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      description: "Keep under 160 chars for best SERP display.",
      validation: (r) => r.max(160).warning("Over 160 characters — will be truncated in SERPs."),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph image",
      type: "image",
      description: "Recommended: 1200×630px. Used for social sharing previews.",
      options: { hotspot: true },
    }),
    defineField({
      name: "noIndex",
      title: "Hide from search engines",
      type: "boolean",
      description: "Sets noindex, nofollow. Use for draft or thin pages.",
      initialValue: false,
    }),
  ],
});
