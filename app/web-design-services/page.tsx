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
        <OverviewSection
          eyebrow="What we deliver"
          heading="More than a beautiful website"
          body={webDesignPage.overview}
          cta={{ label: "Start your project", href: "/contact" }}
        />
        <FeatureGrid
          eyebrow="Our web design capabilities"
          heading="Everything your site needs to succeed"
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
