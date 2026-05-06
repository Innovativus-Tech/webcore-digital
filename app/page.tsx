/**
 * Homepage — fetches from Sanity when configured, falls back to static components.
 *
 * The homepage slug in Sanity is "/" — the seed script stores it as slug.current = "/".
 * ISR: revalidates every 60 seconds.
 */

import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { isSanityConfigured } from "@/lib/sanity.client";
import { getPageBySlug } from "@/lib/sanity.queries";

// Static component imports (fallback when Sanity is not configured)
import { Hero } from "@/components/sections/Hero";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { WhyChooseUsBento } from "@/components/sections/WhyChooseUsBento";
import { ProcessStepper } from "@/components/sections/ProcessStepper";
import { CapabilityTabs } from "@/components/sections/CapabilityTabs";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { CTABand } from "@/components/sections/CTABand";

export const revalidate = 60;

// ── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  if (isSanityConfigured) {
    const page = await getPageBySlug("/");
    if (page) {
      return {
        title: page.seo?.metaTitle ?? page.title,
        description: page.seo?.metaDescription ?? page.summary,
      };
    }
  }

  // Fallback metadata
  return {
    title: "WebcoreDigital | Where strategy meets technology",
    description:
      "Results-driven digital marketing agency. SEO, paid media, content, and CRO. Built on research, measured by outcomes.",
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  // Try Sanity first
  if (isSanityConfigured) {
    const page = await getPageBySlug("/");
    if (page?.sections?.length) {
      return (
        <>
          <SiteHeader />
          <main>
            <SectionRenderer sections={page.sections} />
          </main>
          <SiteFooter />
          <ChatbotFAB />
        </>
      );
    }
  }

  // Fallback: render static components (no Sanity data needed)
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MetricsStrip />
        <WhyChooseUsBento />
        <ProcessStepper />
        <CapabilityTabs />
        <ServicesGrid />
        <MarqueeStrip />
        <PartnerStrip />
        <TestimonialQuote />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
