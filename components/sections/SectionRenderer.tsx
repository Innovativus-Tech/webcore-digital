/**
 * SectionRenderer — the bridge between Sanity section data and React components.
 *
 * Receives a SanitySection[] array from a Sanity page document and renders
 * the correct component for each section based on its _type discriminator.
 *
 * This is a server component — client interactivity is handled by the
 * individual section components (which are marked "use client" where needed).
 */

import type { SanitySection } from "@/lib/sanity.types";

import { Hero } from "./Hero";
import { PageHero } from "./PageHero";
import { ResultsDrivenSection } from "./ResultsDrivenSection";
import { ServiceProposalSection } from "./ServiceProposalSection";
import { MetricsStrip } from "./MetricsStrip";
import { WhyChooseUsBento } from "./WhyChooseUsBento";
import { ProcessStepper } from "./ProcessStepper";
import { CapabilityTabs } from "./CapabilityTabs";
import { ServicesGrid } from "./ServicesGrid";
import { ServiceCategoriesGrid } from "./ServiceCategoriesGrid";
import { FeatureGrid } from "./FeatureGrid";
import { OverviewSection } from "./OverviewSection";
import { OutcomesGrid } from "./OutcomesGrid";
import { StatsRow } from "./StatsRow";
import { PartnerStrip } from "./PartnerStrip";
import { TestimonialQuote } from "./TestimonialQuote";
import { CTABand } from "./CTABand";

function renderSection(section: SanitySection) {
  switch (section._type) {
    case "heroSection":
      return (
        <Hero
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
          primaryCta={section.primaryCta}
          secondaryCta={section.secondaryCta}
          badgeItems={section.badgeItems}
        />
      );

    case "pageHeroSection":
      return (
        <PageHero
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
          cta={section.primaryCta}
          secondaryCta={section.secondaryCta}
          centered={section.centered}
        />
      );

    case "resultsDrivenSection":
      return (
        <ResultsDrivenSection
          heading={section.heading}
          body={section.body}
        />
      );

    case "serviceProposalSection":
      return (
        <ServiceProposalSection
          heading={section.heading}
          paragraphs={section.paragraphs}
          service={section.service}
        />
      );

    case "metricsSection":
      return <MetricsStrip items={section.items} />;

    case "whyChooseUsSection":
      return (
        <WhyChooseUsBento
          eyebrow={section.eyebrow}
          heading={section.heading}
          subheading={section.subheading}
          items={section.items}
        />
      );

    case "processSection":
      return (
        <ProcessStepper
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
          steps={section.steps}
        />
      );

    case "capabilitiesSection":
      return (
        <CapabilityTabs
          title={section.title}
          subtitle={section.subtitle}
          tabs={section.tabs}
        />
      );

    case "servicesGridSection":
      return (
        <ServicesGrid
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
          items={section.items}
        />
      );

    case "serviceCategoriesSection":
      return (
        <ServiceCategoriesGrid
          eyebrow={section.eyebrow}
          heading={section.heading}
          subheading={section.subheading}
          categories={section.categories}
        />
      );

    case "featureGridSection":
      return (
        <FeatureGrid
          eyebrow={section.eyebrow}
          heading={section.heading}
          subheading={section.subheading}
          items={section.items}
          cols={section.cols}
        />
      );

    case "overviewSection":
      return (
        <OverviewSection
          eyebrow={section.eyebrow}
          heading={section.heading}
          body={section.body}
          cta={section.cta}
        />
      );

    case "outcomesSection":
      return (
        <OutcomesGrid
          eyebrow={section.eyebrow}
          heading={section.heading}
          items={section.items}
        />
      );

    case "statsSection":
      return <StatsRow stats={section.stats} bg={section.bg} />;

    case "partnersSection":
      return (
        <PartnerStrip
          logos={section.logos}
        />
      );

    case "testimonialSection":
      return (
        <TestimonialQuote
          quote={section.quote}
          authorName={section.authorName}
          authorRole={section.authorRole}
          authorCompany={section.authorCompany}
        />
      );

    case "ctaSection":
      return (
        <CTABand
          title={section.title}
          subtitle={section.subtitle}
          primaryCta={section.primaryCta}
          secondaryCta={section.secondaryCta}
          reassurance={section.reassurance}
        />
      );

    case "richTextSection":
      // Basic rich text rendering — can be enhanced later with @portabletext/react
      return (
        <section className="container-x py-20 md:py-24">
          <div className="mx-auto max-w-3xl">
            {section.eyebrow && <span className="eyebrow">{section.eyebrow}</span>}
            {section.heading && (
              <h2 className="mt-3 text-3xl md:text-4xl">{section.heading}</h2>
            )}
            <div className="mt-6 prose prose-ink max-w-none">
              {section.content?.map((block) => (
                <p key={block._key}>
                  {block.children?.map((child) => child.text).join("")}
                </p>
              ))}
            </div>
          </div>
        </section>
      );

    default: {
      // Unknown section type — log in dev, skip in production
      if (process.env.NODE_ENV === "development") {
        console.warn(`[SectionRenderer] Unknown section type: ${(section as any)._type}`);
      }
      return null;
    }
  }
}

export function SectionRenderer({ sections }: { sections: SanitySection[] }) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section) => (
        <div key={section._key}>
          {renderSection(section)}
        </div>
      ))}
    </>
  );
}
