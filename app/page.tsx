import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { WhyChooseUsBento } from "@/components/sections/WhyChooseUsBento";
import { ProcessStepper } from "@/components/sections/ProcessStepper";
import { CapabilityTabs } from "@/components/sections/CapabilityTabs";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MetricsStrip />
        <WhyChooseUsBento />
        <ProcessStepper />
        <CapabilityTabs />
        <ServicesGrid />
        <MarqueeStrip />
        <PartnerStrip />
        <TestimonialQuote />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
