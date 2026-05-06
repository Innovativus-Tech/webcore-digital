import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/schemas";

export default defineConfig({
  // Must match the Next.js route where the Studio is mounted
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool(),
    // visionTool lets editors run GROQ queries live in the Studio
    visionTool({
      defaultApiVersion:
        process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
