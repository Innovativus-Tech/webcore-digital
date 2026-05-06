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
import { webDesignPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: webDesignPage.meta.title,
  description: webDesignPage.meta.description,
};

export default function WebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...webDesignPage.hero} />

        <ServiceProposalSection
          paragraphs={webDesignPage.overview}
          service="Web Design Services"
        />

        <FeatureGrid
          eyebrow="What are web design services?"
          heading="Everything your site needs to succeed"
          subheading="From corporate websites and eCommerce stores to landing pages and mobile-responsive designs — built to convert."
          items={webDesignPage.features}
          cols={3}
        />

        <InnerProcessStepper heading="How a project unfolds" steps={webDesignPage.process} />
        <StatsRow stats={webDesignPage.stats} />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
