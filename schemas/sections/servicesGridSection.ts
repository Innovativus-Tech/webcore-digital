import { defineField, defineType } from "sanity";

/**
 * servicesGridSection — 4-column icon grid of services on the homepage.
 * Maps to components/sections/ServicesGrid.tsx
 */
export const servicesGridSection = defineType({
  name: "servicesGridSection",
  title: "Services grid",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
      initialValue: "Services",
    }),
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
      name: "items",
      title: "Service cards",
      type: "array",
      validation: (r) => r.required().min(1),
      of: [
        {
          type: "object",
          name: "serviceItem",
          fields: [
            defineField({
              name: "icon",
              title: "Lucide icon name",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "title",
              title: "Service title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "summary",
              title: "One-line summary",
              type: "text",
              rows: 2,
              validation: (r) => r.required(),
            }),
            defineField({
              name: "href",
              title: "Link URL",
              type: "string",
              description: "Optional — links the card to a service page.",
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
    select: { title: "title" },
    prepare({ title }) {
      return { title: `Services grid: ${title ?? ""}` };
    },
  },
});
