import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceProposalSection } from "@/components/sections/ServiceProposalSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { InnerProcessStepper } from "@/components/sections/InnerProcessStepper";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { seoPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: seoPage.meta.title,
  description: seoPage.meta.description,
};

export default function SeoServicePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...seoPage.hero} />

        <ServiceProposalSection
          paragraphs={seoPage.overview}
          service="SEO Service"
        />

        <FeatureGrid
          eyebrow="SEO capabilities"
          heading="What Makes SEO Worth Investing?"
          subheading="A comprehensive range of SEO strategies to improve your rankings, traffic, and revenue across every channel."
          items={seoPage.features}
          cols={3}
        />

        <InnerProcessStepper heading="How we run an SEO campaign" steps={seoPage.process} />
        <StatsRow stats={seoPage.stats} />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
