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
import { seoContentWritingPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: seoContentWritingPage.meta.title,
  description: seoContentWritingPage.meta.description,
};

export default function SeoContentWritingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...seoContentWritingPage.hero} />

        <ServiceProposalSection
          paragraphs={seoContentWritingPage.overview}
          service="SEO Content Writing"
        />

        <FeatureGrid
          eyebrow="What we offer"
          heading="Full-service SEO content writing"
          subheading="Research-driven content that ranks, educates, and converts — from blog posts to landing page copy."
          items={seoContentWritingPage.features}
          cols={3}
        />

        <InnerProcessStepper heading="Our content process" steps={seoContentWritingPage.process} />
        <StatsRow stats={seoContentWritingPage.stats} />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
