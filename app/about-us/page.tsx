import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { aboutPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...aboutPage.hero} />

        {/* Story */}
        <section className="container-x py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="eyebrow">Our story</span>
              <h2 className="mt-3 text-3xl md:text-4xl">{aboutPage.story.heading}</h2>
            </div>
            <div className="md:col-span-7 space-y-5">
              {aboutPage.story.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsRow stats={aboutPage.stats} />

        {/* Values */}
        <FeatureGrid
          eyebrow="Our values"
          heading="Seven principles behind every engagement"
          items={aboutPage.values}
          cols={3}
        />

        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
