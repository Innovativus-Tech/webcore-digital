import { defineField, defineType } from "sanity";

/**
 * heroSection — full homepage hero with dashboard mockup panel.
 * Maps to components/sections/Hero.tsx
 */
export const heroSection = defineType({
  name: "heroSection",
  title: "Hero (homepage)",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
      description: 'Small badge text above the headline, e.g. "#1 Digital Marketing Agency".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Headline",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "cta",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "cta",
    }),
    defineField({
      name: "badgeItems",
      title: "Trust badge items",
      type: "array",
      description: 'Small text badges below CTAs, e.g. "Free 30-min audit", "No obligation".',
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow" },
    prepare({ title, subtitle }) {
      return { title: `Hero: ${title ?? ""}`, subtitle };
    },
  },
});
