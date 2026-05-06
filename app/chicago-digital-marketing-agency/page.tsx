import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { chicagoPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: chicagoPage.meta.title,
  description: chicagoPage.meta.description,
};

export default function ChicagoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...chicagoPage.hero} />
        <OverviewSection
          eyebrow="Chicago market expertise"
          heading="We know the Chicago market"
          body={chicagoPage.overview}
          cta={{ label: "Talk to our Chicago team", href: "/contact" }}
        />
        <FeatureGrid
          eyebrow="Local digital marketing"
          heading="Chicago-specific services"
          items={chicagoPage.features}
          cols={3}
        />
        <StatsRow stats={chicagoPage.stats} />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
