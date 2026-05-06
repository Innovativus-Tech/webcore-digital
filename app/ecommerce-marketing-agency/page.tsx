import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { EcommerceBody } from "@/components/sections/EcommerceBody";
import { ecommercePage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: ecommercePage.meta.title,
  description: ecommercePage.meta.description,
};

export default function EcommerceMarketingAgencyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...ecommercePage.hero} />
        <EcommerceBody />
        <StatsRow stats={ecommercePage.stats} />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
