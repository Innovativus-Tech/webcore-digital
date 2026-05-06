import { defineField, defineType } from "sanity";

/**
 * overviewSection — two-column intro with heading left, paragraphs right.
 * Maps to components/sections/OverviewSection.tsx
 */
export const overviewSection = defineType({
  name: "overviewSection",
  title: "Overview section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "Body paragraphs",
      description: "Each item is a separate paragraph.",
      type: "array",
      of: [{ type: "text" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "cta",
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "eyebrow" },
    prepare({ title, subtitle }) {
      return { title: `Overview: ${title ?? ""}`, subtitle };
    },
  },
});
