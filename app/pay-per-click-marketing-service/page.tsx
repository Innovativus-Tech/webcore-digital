import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceProposalSection } from "@/components/sections/ServiceProposalSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { ppcPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: ppcPage.meta.title,
  description: ppcPage.meta.description,
};

export default function PayPerClickPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...ppcPage.hero} />

        <ServiceProposalSection
          paragraphs={ppcPage.overview}
          service="Pay Per Click Marketing"
        />

        {/* Challenge + What is PPC */}
        <section className="border-y border-ink-100 bg-ink-50">
          <div className="container-x py-20 md:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="eyebrow">The challenge</span>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                  Why PPC cuts through the noise
                </h2>
                <p className="mt-4 text-ink-500 leading-relaxed">{ppcPage.challenge}</p>
              </div>
              <div>
                <span className="eyebrow">{ppcPage.whatIsPpc.heading}</span>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                  You only pay when someone clicks
                </h2>
                <p className="mt-4 text-ink-500 leading-relaxed">{ppcPage.whatIsPpc.body}</p>
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid
          eyebrow="PPC ad types"
          heading="9 types of PPC ads we manage for you"
          subheading="From search and display to YouTube, Amazon, and Gmail — we match the right ad format to your audience and goals."
          items={ppcPage.adTypes}
          cols={3}
        />

        {/* How it works */}
        <section className="border-y border-ink-100 bg-ink-50">
          <div className="container-x py-20 md:py-24 max-w-3xl">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {ppcPage.howItWorks.heading}
            </h2>
            <p className="mt-6 text-ink-500 leading-relaxed text-lg">
              {ppcPage.howItWorks.body}
            </p>
          </div>
        </section>

        <StatsRow stats={ppcPage.stats} />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
