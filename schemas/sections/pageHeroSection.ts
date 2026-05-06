import { defineField, defineType } from "sanity";

/**
 * pageHeroSection — dark branded hero used on all inner pages.
 * Maps to components/sections/PageHero.tsx
 */
export const pageHeroSection = defineType({
  name: "pageHeroSection",
  title: "Page hero (inner pages)",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
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
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "cta",
    }),
    defineField({
      name: "centered",
      title: "Centre-align text",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow" },
    prepare({ title, subtitle }) {
      return { title: `Page Hero: ${title ?? ""}`, subtitle };
    },
  },
});
