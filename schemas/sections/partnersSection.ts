import { defineField, defineType } from "sanity";

/**
 * partnersSection — scrolling logo strip.
 * Maps to components/sections/PartnerStrip.tsx
 */
export const partnersSection = defineType({
  name: "partnersSection",
  title: "Partners / logo strip",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
      initialValue: "Trusted by teams at",
    }),
    defineField({
      name: "logos",
      title: "Partner logos",
      type: "array",
      validation: (r) => r.required().min(1),
      of: [
        {
          type: "object",
          name: "partnerLogo",
          fields: [
            defineField({
              name: "name",
              title: "Company name",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "initials",
              title: "Initials (fallback)",
              type: "string",
              description: "2-3 char initials shown if no logo image is provided.",
              validation: (r) => r.required().max(3),
            }),
            defineField({
              name: "logo",
              title: "Logo image",
              type: "image",
              description: "Optional. Upload SVG or PNG with transparent background.",
              options: { hotspot: false },
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "initials" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { logos: "logos" },
    prepare({ logos }) {
      const count = Array.isArray(logos) ? logos.length : 0;
      return { title: `Partners strip (${count} logos)` };
    },
  },
});
