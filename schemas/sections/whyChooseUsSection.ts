import { defineField, defineType } from "sanity";

/**
 * whyChooseUsSection — bento-grid of 6 value propositions.
 * Maps to components/sections/WhyChooseUsBento.tsx
 */
export const whyChooseUsSection = defineType({
  name: "whyChooseUsSection",
  title: "Why choose us (bento)",
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
      type: "array",
      validation: (r) => r.required().min(1),
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
            defineField({
              name: "size",
              title: "Card size",
              type: "string",
              options: {
                list: [
                  { title: "Small (2 cols)", value: "sm" },
                  { title: "Medium (2 cols)", value: "md" },
                  { title: "Large (3 cols)", value: "lg" },
                ],
                layout: "radio",
              },
              initialValue: "md",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "size" },
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
