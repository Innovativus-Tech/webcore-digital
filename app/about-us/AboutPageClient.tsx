"use client";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceProposalSection } from "@/components/sections/ServiceProposalSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { aboutPage } from "@/lib/pages-data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

export function AboutPageClient() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...aboutPage.hero} />

        {/* Welcome to Webcore Digital — text left, proposal form right */}
        <ServiceProposalSection
          paragraphs={aboutPage.welcome.paragraphs}
          service="About Us"
          heading={aboutPage.welcome.heading}
        />

        {/* Agency band */}
        <section className="bg-brand-900 text-white">
          <div className="container-x py-20 md:py-24">
            <div className="max-w-3xl">
              <motion.span
                className="text-sm font-semibold uppercase tracking-widest text-accent-400"
                {...fadeUp(0)}
              >
                {aboutPage.agencyBand.eyebrow}
              </motion.span>
              <motion.h2
                className="mt-3 text-4xl font-bold md:text-5xl"
                {...fadeUp(0.08)}
              >
                {aboutPage.agencyBand.heading}
              </motion.h2>
              <motion.p
                className="mt-5 text-lg text-brand-200 leading-relaxed"
                {...fadeUp(0.16)}
              >
                {aboutPage.agencyBand.tagline}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Values intro */}
        <section className="container-x py-16 md:py-20">
          <div className="max-w-3xl">
            <motion.span className="eyebrow" {...fadeUp(0)}>
              Our Values
            </motion.span>
            <motion.p
              className="mt-4 text-ink-600 leading-relaxed text-lg"
              {...fadeUp(0.08)}
            >
              {aboutPage.valuesIntro}
            </motion.p>
          </div>
        </section>

        {/* Looking for Professional Growth? */}
        <section className="bg-ink-50 border-y border-ink-100">
          <div className="container-x py-20 md:py-24">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <motion.h2
                  className="text-3xl font-semibold md:text-4xl"
                  {...fadeUp(0)}
                >
                  {aboutPage.growth.heading}
                </motion.h2>
              </div>
              <div className="lg:col-span-8 space-y-5">
                {aboutPage.growth.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    className="text-ink-600 leading-relaxed"
                    {...fadeUp(i * 0.07)}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values icon grid */}
        <FeatureGrid
          eyebrow="Our principles"
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
