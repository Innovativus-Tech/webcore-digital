import { defineField, defineType } from "sanity";

/**
 * whyChooseUsSection — flat 4-column grid of up to 8 reason cards.
 * Each card has a coloured header strip with icon + title, and a body paragraph.
 * Maps to components/sections/WhyChooseUsBento.tsx
 */
export const whyChooseUsSection = defineType({
  name: "whyChooseUsSection",
  title: "Why choose us (4-col grid)",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
      initialValue: "Why choose us",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "items",
      title: "Reason cards",
      description: "Up to 8 cards. Displayed in a responsive 1 → 2 → 4 column grid.",
      type: "array",
      validation: (r) => r.required().min(1).max(8),
      of: [
        {
          type: "object",
          name: "whyItem",
          fields: [
            defineField({
              name: "icon",
              title: "Lucide icon name",
              type: "string",
              description: 'Must match a valid Lucide icon name, e.g. "Users", "ShieldCheck".',
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
            select: { title: "title", subtitle: "icon" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { heading: "heading" },
    prepare({ heading }) {
      return { title: `Why choose us: ${heading ?? ""}` };
    },
  },
});
