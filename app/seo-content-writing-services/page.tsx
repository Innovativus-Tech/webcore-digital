import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { OverviewSection } from "@/components/sections/OverviewSection";
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
        <OverviewSection
          eyebrow="Content that works"
          heading="Research before a single word is written"
          body={seoContentWritingPage.overview}
          cta={{ label: "Get a content quote", href: "/contact" }}
        />
        <FeatureGrid
          eyebrow="What we offer"
          heading="Full-service SEO content writing"
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
