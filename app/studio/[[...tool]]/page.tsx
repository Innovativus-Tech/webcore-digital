/**
 * Embedded Sanity Studio
 *
 * Mounted at /studio — the [[...tool]] catch-all lets Sanity's own
 * client-side routing (Structure, Vision, etc.) work inside Next.js.
 *
 * Access control: add Next.js middleware (e.g. Clerk or NextAuth) to
 * protect the /studio path in production.
 */
import { Studio } from "./Studio";

// Re-exports the correct <head> metadata and viewport settings Sanity needs.
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
