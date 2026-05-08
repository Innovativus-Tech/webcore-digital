import { defineField, defineType } from "sanity";

/**
 * serviceProposalSection — two-column layout used on all service pages.
 * Left: heading + paragraphs + CTA link.
 * Right: sticky proposal / lead-capture form.
 * Maps to components/sections/ServiceProposalSection.tsx
 */
export const serviceProposalSection = defineType({
  name: "serviceProposalSection",
  title: "Service proposal (overview + form)",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Optional heading displayed above the paragraphs.",
    }),
    defineField({
      name: "paragraphs",
      title: "Overview paragraphs",
      description: "Each item is rendered as a separate paragraph on the left side.",
      type: "array",
      of: [{ type: "text" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "service",
      title: "Service identifier",
      type: "string",
      description:
        'Human-readable service name sent with the lead form (e.g. "SEO Service", "PPC Marketing"). Required.',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { heading: "heading", service: "service" },
    prepare({ heading, service }) {
      return {
        title: `Service Proposal: ${service ?? ""}`,
        subtitle: heading ?? "No heading",
      };
    },
  },
});
