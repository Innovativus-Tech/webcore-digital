import { defineField, defineType } from "sanity";

/**
 * statsSection — horizontal strip of KPI stats (light or dark bg).
 * Maps to components/sections/StatsRow.tsx
 */
export const statsSection = defineType({
  name: "statsSection",
  title: "Stats row",
  type: "object",
  fields: [
    defineField({
      name: "bg",
      title: "Background",
      type: "string",
      options: {
        list: [
          { title: "Light (grey)", value: "light" },
          { title: "Dark (brand navy)", value: "dark" },
        ],
        layout: "radio",
      },
      initialValue: "light",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      validation: (r) => r.required().min(1).max(6),
      of: [
        {
          type: "object",
          name: "statItem",
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
              validation: (r) => r.required(),
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
    select: { stats: "stats", bg: "bg" },
    prepare({ stats, bg }) {
      const count = Array.isArray(stats) ? stats.length : 0;
      return { title: `Stats row (${count} items, ${bg ?? "light"})` };
    },
  },
});
