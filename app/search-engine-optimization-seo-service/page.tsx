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
        <OverviewSection
          eyebrow="Our SEO approach"
          heading="SEO that improves your marketing effectiveness"
          body={seoPage.overview}
          cta={{ label: "Get your SEO audit", href: "/contact" }}
        />
        <FeatureGrid
          eyebrow="SEO capabilities"
          heading="The full SEO stack"
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
