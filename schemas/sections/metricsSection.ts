import { defineField, defineType } from "sanity";

/**
 * metricsSection — horizontal strip of 3 headline stats.
 * Maps to components/sections/MetricsStrip.tsx
 */
export const metricsSection = defineType({
  name: "metricsSection",
  title: "Metrics strip",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Metrics",
      type: "array",
      validation: (r) => r.required().min(1),
      of: [
        {
          type: "object",
          name: "metricItem",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              description: 'e.g. "6×" or "+47%".',
              validation: (r) => r.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "Short uppercase label, e.g. SEARCH TRAFFIC.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "context",
              title: "Context line",
              type: "string",
              description: "One-liner below label, e.g. Average organic uplift across SEO clients.",
            }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { items: "items" },
    prepare({ items }) {
      const count = Array.isArray(items) ? items.length : 0;
      return { title: `Metrics strip (${count} items)` };
    },
  },
});
