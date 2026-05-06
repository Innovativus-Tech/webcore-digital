import { defineField, defineType } from "sanity";

/**
 * Reusable CTA object — label + internal or external href.
 * Used inside heroSection, ctaSection, pageHeroSection, overviewSection, etc.
 */
export const ctaObject = defineType({
  name: "cta",
  title: "Call to action",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Button label",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "href",
      title: "URL / path",
      type: "string",
      description: 'Use a relative path for internal links (e.g. "/contact").',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "href" },
  },
});
