import { defineField, defineType } from "sanity";

/**
 * ctaSection — dark full-width CTA band at the bottom of pages.
 * Maps to components/sections/CTABand.tsx
 */
export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA band",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subheading",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "cta",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "cta",
    }),
    defineField({
      name: "reassurance",
      title: "Reassurance line",
      type: "string",
      description: 'Small text below CTAs, e.g. "No obligation · Free audit".',
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: `CTA: ${title ?? ""}` };
    },
  },
});
