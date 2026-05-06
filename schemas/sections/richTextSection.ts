import { defineField, defineType } from "sanity";

/**
 * richTextSection — generic Portable Text block for flexible long-form content.
 * Useful for blog posts, terms, or any freeform section editors need.
 */
export const richTextSection = defineType({
  name: "richTextSection",
  title: "Rich text",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "string",
                    title: "URL",
                    validation: (r) => r.required(),
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "eyebrow" },
    prepare({ title, subtitle }) {
      return { title: `Rich text: ${title ?? subtitle ?? ""}` };
    },
  },
});
