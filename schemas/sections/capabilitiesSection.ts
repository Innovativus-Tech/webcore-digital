import { defineField, defineType } from "sanity";

/**
 * capabilitiesSection — tabbed capability showcase.
 * Maps to components/sections/CapabilityTabs.tsx
 */
export const capabilitiesSection = defineType({
  name: "capabilitiesSection",
  title: "Capabilities (tabs)",
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
      name: "tabs",
      title: "Tabs",
      type: "array",
      validation: (r) => r.required().min(2),
      of: [
        {
          type: "object",
          name: "capabilityTab",
          fields: [
            defineField({
              name: "id",
              title: "Tab ID (slug-style)",
              type: "string",
              description: "Unique internal ID, e.g. rich-media. No spaces.",
              validation: (r) =>
                r
                  .required()
                  .regex(/^[a-z0-9-]+$/, { name: "slug", invert: false })
                  .error("Use lowercase letters, numbers and hyphens only."),
            }),
            defineField({
              name: "label",
              title: "Tab label",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "description",
              title: "Tab description",
              type: "text",
              rows: 3,
              validation: (r) => r.required(),
            }),
            defineField({
              name: "bullets",
              title: "Bullet points",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: { title: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: `Capabilities: ${title ?? ""}` };
    },
  },
});
