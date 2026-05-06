import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceProposalSection } from "@/components/sections/ServiceProposalSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { Icon } from "@/components/ui/Icon";
import { IconSquare } from "@/components/ui/IconSquare";
import { digitalMarketingPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: digitalMarketingPage.meta.title,
  description: digitalMarketingPage.meta.description,
};

export default function DigitalMarketingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...digitalMarketingPage.hero} />

        <ServiceProposalSection
          paragraphs={digitalMarketingPage.overview}
          service="Digital Marketing Services"
        />

        {/* How Digital Marketing Attracts Growth */}
        <FeatureGrid
          eyebrow="What we offer"
          heading="How Does Digital Marketing Attract Growth?"
          subheading="A complete suite of digital marketing solutions tailored to your customer acquisition goals and revenue targets."
          items={digitalMarketingPage.features}
          cols={3}
        />

        {/* Outcomes band */}
        <section className="bg-ink-50 border-y border-ink-100">
          <div className="container-x py-20 md:py-24">
            <div className="mb-12 max-w-2xl">
              <span className="eyebrow">What you get</span>
              <h2 className="mt-3 text-3xl md:text-4xl">
                How we take your business to the next level
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {digitalMarketingPage.outcomes.map((o) => (
                <div
                  key={o.title}
                  className="group rounded-card border border-ink-100 bg-white p-6 transition hover:border-accent-500 hover:shadow-card"
                >
                  <IconSquare className="group-hover:bg-accent-500 group-hover:text-white">
                    <Icon name={o.icon} className="h-5 w-5" />
                  </IconSquare>
                  <h3 className="mt-4 text-base font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StatsRow stats={digitalMarketingPage.stats} />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
