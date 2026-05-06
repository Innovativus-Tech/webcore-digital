/**
 * Sanity webhook handler for on-demand revalidation.
 *
 * When content is published in Sanity, a webhook POST to /api/revalidate
 * triggers Next.js to purge the relevant cache tags immediately —
 * no waiting for the ISR timer.
 *
 * Setup in Sanity:
 *   1. Go to sanity.io/manage → API → Webhooks → Create webhook
 *   2. URL: https://your-domain.com/api/revalidate
 *   3. Trigger on: Create, Update, Delete
 *   4. Filter: _type == "page" || _type == "siteSettings"
 *   5. Secret: set the same value as SANITY_REVALIDATE_SECRET in .env.local
 */

import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Optional: verify webhook secret
    const secret = req.headers.get("x-sanity-secret");
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const type: string = body?._type;

    if (!type) {
      return NextResponse.json({ message: "Missing _type" }, { status: 400 });
    }

    // Revalidate the appropriate cache tag
    if (type === "page") {
      revalidateTag("page");
    } else if (type === "siteSettings") {
      revalidateTag("siteSettings");
    } else {
      // Revalidate all known tags for unknown types
      revalidateTag("page");
      revalidateTag("siteSettings");
    }

    return NextResponse.json({
      revalidated: true,
      type,
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    );
  }
}
