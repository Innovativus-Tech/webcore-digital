// ── Objects (shared) ──────────────────────────────────────────────────────────
import { ctaObject } from "./objects/cta";
import { seoFields } from "./objects/seoFields";

// ── Section blocks ─────────────────────────────────────────────────────────────
import { heroSection } from "./sections/heroSection";
import { pageHeroSection } from "./sections/pageHeroSection";
import { metricsSection } from "./sections/metricsSection";
import { whyChooseUsSection } from "./sections/whyChooseUsSection";
import { processSection } from "./sections/processSection";
import { capabilitiesSection } from "./sections/capabilitiesSection";
import { servicesGridSection } from "./sections/servicesGridSection";
import { serviceCategoriesSection } from "./sections/serviceCategoriesSection";
import { featureGridSection } from "./sections/featureGridSection";
import { overviewSection } from "./sections/overviewSection";
import { outcomesSection } from "./sections/outcomesSection";
import { statsSection } from "./sections/statsSection";
import { partnersSection } from "./sections/partnersSection";
import { testimonialSection } from "./sections/testimonialSection";
import { ctaSection } from "./sections/ctaSection";
import { richTextSection } from "./sections/richTextSection";

// ── Documents ─────────────────────────────────────────────────────────────────
import { pageDocument } from "./documents/page";
import { siteSettingsDocument } from "./documents/siteSettings";

/**
 * All schema types exported to sanity.config.ts.
 *
 * Order matters for the Studio sidebar — documents first, then sections, then objects.
 */
export const schemaTypes = [
  // Documents
  pageDocument,
  siteSettingsDocument,

  // Section blocks (registered so they can be used in page.sections array)
  heroSection,
  pageHeroSection,
  metricsSection,
  whyChooseUsSection,
  processSection,
  capabilitiesSection,
  servicesGridSection,
  serviceCategoriesSection,
  featureGridSection,
  overviewSection,
  outcomesSection,
  statsSection,
  partnersSection,
  testimonialSection,
  ctaSection,
  richTextSection,

  // Shared objects
  ctaObject,
  seoFields,
];
