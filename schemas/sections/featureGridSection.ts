import { defineField, defineType } from "sanity";

/**
 * featureGridSection — icon + title + body cards in 2/3/4 columns.
 * Maps to components/sections/FeatureGrid.tsx
 * Used on all inner service pages.
 */
export const featureGridSection = defineType({
  name: "featureGridSection",
  title: "Feature grid",
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
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "cols",
      title: "Columns",
      type: "number",
      options: {
        list: [
          { title: "2 columns", value: 2 },
          { title: "3 columns", value: 3 },
          { title: "4 columns", value: 4 },
        ],
        layout: "radio",
      },
      initialValue: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "items",
      title: "Feature cards",
      type: "array",
      validation: (r) => r.required().min(1),
      of: [
        {
          type: "object",
          name: "featureItem",
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
              rows: 3,
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
    select: { heading: "heading", eyebrow: "eyebrow" },
    prepare({ heading, eyebrow }) {
      return { title: `Features: ${heading ?? eyebrow ?? ""}` };
    },
  },
});
