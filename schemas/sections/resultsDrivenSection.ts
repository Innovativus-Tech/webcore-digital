import { defineField, defineType } from "sanity";

/**
 * resultsDrivenSection — two-column section used on the homepage.
 * Left: heading + body paragraph.
 * Right: dark stats card showing 3 key metrics (hard-coded in component,
 *        so only heading/body are CMS-editable).
 * Maps to components/sections/ResultsDrivenSection.tsx
 */
export const resultsDrivenSection = defineType({
  name: "resultsDrivenSection",
  title: "Results-driven section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description:
        'Falls back to the static default ("Results Driven Digital Marketing Agency") if left blank.',
    }),
    defineField({
      name: "body",
      title: "Body paragraph",
      type: "text",
      rows: 4,
      description: "Paragraph shown beneath the heading. Falls back to static copy if left blank.",
    }),
  ],
  preview: {
    select: { heading: "heading" },
    prepare({ heading }) {
      return { title: `Results-driven: ${heading ?? "(default copy)"}` };
    },
  },
});
