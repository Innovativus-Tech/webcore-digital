import { defineField, defineType } from "sanity";

/**
 * outcomesSection — 4-column "what you get" outcome cards.
 * Used on the Digital Marketing Services page.
 * Maps to the inline outcomes band in app/digital-marketing-services/page.tsx
 */
export const outcomesSection = defineType({
  name: "outcomesSection",
  title: "Outcomes band",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
      initialValue: "What you get",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "items",
      title: "Outcome cards",
      type: "array",
      validation: (r) => r.required().min(1),
      of: [
        {
          type: "object",
          name: "outcomeItem",
          fields: [
            defineField({
              name: "icon",
              title: "Lucide icon name",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "body",
              title: "Body",
              type: "text",
              rows: 2,
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { heading: "heading" },
    prepare({ heading }) {
      return { title: `Outcomes: ${heading ?? ""}` };
    },
  },
});
