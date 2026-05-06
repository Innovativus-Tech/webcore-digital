import { defineField, defineType } from "sanity";

/**
 * processSection — numbered horizontal/vertical stepper.
 * Maps to components/sections/ProcessStepper.tsx
 */
export const processSection = defineType({
  name: "processSection",
  title: "Process stepper",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
      initialValue: "Our approach",
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
      name: "steps",
      title: "Steps",
      type: "array",
      validation: (r) => r.required().min(2).max(6),
      of: [
        {
          type: "object",
          name: "processStep",
          fields: [
            defineField({
              name: "number",
              title: "Step number",
              type: "number",
              validation: (r) => r.required().integer().min(1),
            }),
            defineField({
              name: "title",
              title: "Step title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
              validation: (r) => r.required(),
            }),
            defineField({
              name: "outcome",
              title: "Outcome badge",
              type: "string",
              description: 'Short outcome shown as a badge, e.g. "Clear opportunity map".',
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "number" },
            prepare({ title, subtitle }) {
              return { title: `${subtitle}. ${title}` };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: `Process: ${title ?? ""}` };
    },
  },
});
