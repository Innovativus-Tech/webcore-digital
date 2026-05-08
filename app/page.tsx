/**
 * Homepage — fetches from Sanity when configured, falls back to static components.
 * ISR: revalidates every 60 seconds.
 */

import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { isSanityConfigured } from "@/lib/sanity.client";
import { getPageBySlug } from "@/lib/sanity.queries";

import { Hero } from "@/components/sections/Hero";
import { ResultsDrivenSection } from "@/components/sections/ResultsDrivenSection";
import { WhyChooseUsBento } from "@/components/sections/WhyChooseUsBento";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { ProcessStepper } from "@/components/sections/ProcessStepper";
import { CapabilityTabs } from "@/components/sections/CapabilityTabs";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABand } from "@/components/sections/CTABand";

export const revalidate = 60;

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
  return {
    title: "WebcoreDigital | #1 Digital Marketing Agency",
    description:
      "Results-driven digital marketing agency. SEO, PPC, social media, web design, content writing, and e-commerce marketing. Built on research, measured by outcomes.",
  };
}

export default async function HomePage() {
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

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <Hero />

        {/* Results Driven — intro + marketing card */}
        <ResultsDrivenSection />

        {/* Why Choose WebcoreDigital — 8-card grid */}
        <WhyChooseUsBento />

        {/* Infinite scrolling service tiles marquee */}
        <MarqueeStrip />

        {/* How Can We Take Your Business To The Next Level */}
        <ProcessStepper />

        {/* Outstanding Digital Experience — capability tabs */}
        <CapabilityTabs />

        {/* Our Partners — infinite scrolling logos */}
        <PartnerStrip />

        {/* Boost your conversion rate — stats */}
        <MetricsStrip />

        {/* Our Digital Marketing Services — 8-card grid */}
        <ServicesGrid />

        {/* CTA Band */}
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
