import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { graphicDesignPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: graphicDesignPage.meta.title,
  description: graphicDesignPage.meta.description,
};

export default function GraphicDesignPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...graphicDesignPage.hero} />
        <OverviewSection
          eyebrow="Design with purpose"
          heading="Design that communicates, not just decorates"
          body={graphicDesignPage.overview}
          cta={{ label: "Start a design project", href: "/contact" }}
        />
        <FeatureGrid
          eyebrow="Design services"
          heading="Creative capabilities across every format"
          items={graphicDesignPage.features}
          cols={3}
        />
        <StatsRow stats={graphicDesignPage.stats} />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
