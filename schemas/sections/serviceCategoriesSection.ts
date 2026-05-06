import { defineField, defineType } from "sanity";

/**
 * serviceCategoriesSection — card grid for the Services hub page.
 * Maps to components used in app/services/page.tsx
 */
export const serviceCategoriesSection = defineType({
  name: "serviceCategoriesSection",
  title: "Service categories (hub)",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
      initialValue: "All services",
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
      name: "categories",
      title: "Service category cards",
      type: "array",
      validation: (r) => r.required().min(1),
      of: [
        {
          type: "object",
          name: "serviceCategory",
          fields: [
            defineField({
              name: "icon",
              title: "Lucide icon name",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "title",
              title: "Category title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "summary",
              title: "Summary",
              type: "text",
              rows: 2,
              validation: (r) => r.required(),
            }),
            defineField({
              name: "href",
              title: "Link URL",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "tags",
              title: "Tags",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "href" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { heading: "heading" },
    prepare({ heading }) {
      return { title: `Service categories: ${heading ?? ""}` };
    },
  },
});
