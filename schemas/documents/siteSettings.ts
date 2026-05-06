import { defineField, defineType } from "sanity";

/**
 * siteSettings — singleton document for global site config.
 *
 * There should only ever be ONE document of this type.
 * Fetched once at build time and cached; changes trigger revalidation.
 *
 * Contains: site name, contact details, primary nav, footer columns, chatbot config.
 */
export const siteSettingsDocument = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",

  // Prevent editors from creating multiple copies
  // @ts-expect-error - Valid in sanity v3 runtime but types might complain
  __experimental_actions: ["update", "publish"],

  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "nav", title: "Navigation" },
    { name: "footer", title: "Footer" },
    { name: "chatbot", title: "Chatbot" },
  ],

  fields: [
    // ── Identity ─────────────────────────────────────────────────────────────
    defineField({
      name: "siteName",
      title: "Site name",
      type: "string",
      group: "identity",
      validation: (r) => r.required(),
      initialValue: "WebcoreDigital",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "identity",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "string",
      group: "identity",
      validation: (r) => r.email(),
    }),
    defineField({
      name: "contactPhone",
      title: "Contact phone",
      type: "string",
      group: "identity",
    }),
    defineField({
      name: "contactAddress",
      title: "Contact address",
      type: "string",
      group: "identity",
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA label",
      type: "string",
      group: "identity",
      initialValue: "Get a free quote",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA URL",
      type: "string",
      group: "identity",
      initialValue: "/contact",
    }),

    // ── Navigation ────────────────────────────────────────────────────────────
    defineField({
      name: "navItems",
      title: "Navigation items",
      type: "array",
      group: "nav",
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            defineField({ name: "label", type: "string", title: "Label", validation: (r) => r.required() }),
            defineField({ name: "href", type: "string", title: "URL", validation: (r) => r.required() }),
            defineField({
              name: "megaMenu",
              title: "Mega-menu groups",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "megaMenuGroup",
                  fields: [
                    defineField({ name: "category", type: "string", title: "Category heading", validation: (r) => r.required() }),
                    defineField({
                      name: "items",
                      title: "Links",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          name: "megaMenuLink",
                          fields: [
                            defineField({ name: "label", type: "string", title: "Label", validation: (r) => r.required() }),
                            defineField({ name: "href", type: "string", title: "URL", validation: (r) => r.required() }),
                          ],
                          preview: { select: { title: "label", subtitle: "href" } },
                        },
                      ],
                    }),
                  ],
                  preview: { select: { title: "category" } },
                },
              ],
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),

    // ── Footer ────────────────────────────────────────────────────────────────
    defineField({
      name: "footerTagline",
      title: "Footer tagline",
      type: "text",
      rows: 2,
      group: "footer",
    }),
    defineField({
      name: "footerColumns",
      title: "Footer link columns",
      type: "array",
      group: "footer",
      of: [
        {
          type: "object",
          name: "footerColumn",
          fields: [
            defineField({ name: "title", type: "string", title: "Column title", validation: (r) => r.required() }),
            defineField({
              name: "links",
              type: "array",
              title: "Links",
              of: [
                {
                  type: "object",
                  name: "footerLink",
                  fields: [
                    defineField({ name: "label", type: "string", title: "Label", validation: (r) => r.required() }),
                    defineField({ name: "href", type: "string", title: "URL", validation: (r) => r.required() }),
                  ],
                  preview: { select: { title: "label", subtitle: "href" } },
                },
              ],
            }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright text",
      type: "string",
      group: "footer",
      description: 'Use {{year}} as a placeholder for the current year, e.g. "© {{year}} WebcoreDigital".',
      initialValue: "© {{year}} WebcoreDigital. All rights reserved.",
    }),

    // ── Chatbot ────────────────────────────────────────────────────────────────
    defineField({
      name: "chatbotName",
      title: "Chatbot name",
      type: "string",
      group: "chatbot",
      initialValue: "WebcoreDigital Assistant",
    }),
    defineField({
      name: "chatbotGreeting",
      title: "Chatbot greeting",
      type: "text",
      rows: 2,
      group: "chatbot",
    }),
    defineField({
      name: "chatbotExampleQuestions",
      title: "Example questions",
      type: "array",
      group: "chatbot",
      of: [{ type: "string" }],
    }),
  ],

  preview: {
    select: { title: "siteName", subtitle: "tagline" },
  },
});
