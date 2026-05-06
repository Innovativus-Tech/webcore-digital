import { defineField, defineType } from "sanity";

/**
 * testimonialSection — single large pull-quote with author credit.
 * Maps to components/sections/TestimonialQuote.tsx
 */
export const testimonialSection = defineType({
  name: "testimonialSection",
  title: "Testimonial quote",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "authorName",
      title: "Author name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "authorRole",
      title: "Author role / title",
      type: "string",
    }),
    defineField({
      name: "authorCompany",
      title: "Author company",
      type: "string",
    }),
    defineField({
      name: "authorAvatar",
      title: "Author photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "authorName", subtitle: "authorCompany" },
    prepare({ title, subtitle }) {
      return { title: `Testimonial: ${title ?? ""}`, subtitle };
    },
  },
});
