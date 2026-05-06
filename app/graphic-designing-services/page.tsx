import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { Icon } from "@/components/ui/Icon";
import { IconSquare } from "@/components/ui/IconSquare";
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
          eyebrow="Our expertise"
          heading="Creative design solutions that captivate your audience"
          body={graphicDesignPage.overview}
          cta={{ label: "Get My Free Proposal", href: "/contact" }}
        />

        {/* Why WebCore Digital */}
        <section className="bg-ink-50 border-y border-ink-100">
          <div className="container-x py-20 md:py-24">
            <div className="mb-12 max-w-2xl">
              <span className="eyebrow">Why WebCore Digital?</span>
              <h2 className="mt-3 text-3xl md:text-4xl">
                A design partner that listens, then delivers
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {graphicDesignPage.whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-card border border-ink-100 bg-white p-6 hover:border-accent-500 hover:shadow-card transition"
                >
                  <IconSquare>
                    <Icon name={item.icon} className="h-5 w-5" />
                  </IconSquare>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FeatureGrid
          eyebrow="Design services"
          heading="Creative capabilities across every format"
          subheading="From logos and branding to motion graphics and presentations — every design asset crafted with purpose."
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
