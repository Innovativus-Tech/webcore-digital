import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { socialMediaPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: socialMediaPage.meta.title,
  description: socialMediaPage.meta.description,
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...socialMediaPage.hero} />
        <OverviewSection
          eyebrow="What we do"
          heading="Expert social media marketing tailored to your brand"
          body={socialMediaPage.overview}
          cta={{ label: "Get My Free Proposal", href: "/contact" }}
        />
        <FeatureGrid
          eyebrow="Benefits"
          heading="Why social media marketing matters for your business"
          items={socialMediaPage.features}
          cols={3}
        />

        {/* Platforms section */}
        <section className="bg-ink-50 border-y border-ink-100">
          <div className="container-x py-20 md:py-24">
            <div className="mb-12 max-w-2xl">
              <span className="eyebrow">Platforms</span>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Social platforms we manage for you
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {socialMediaPage.platforms.map((p) => (
                <div
                  key={p.name}
                  className="rounded-card border border-ink-100 bg-white p-6 hover:border-accent-500 hover:shadow-card transition"
                >
                  <h3 className="text-base font-semibold text-ink-900">{p.name}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StatsRow stats={socialMediaPage.stats} />
        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
