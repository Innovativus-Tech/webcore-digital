/**
 * TypeScript interfaces for all Sanity document and section types.
 *
 * These are hand-written to stay in sync with schemas/.
 * They are used to type GROQ query results in sanity.queries.ts
 * and to type component props in Next.js pages.
 *
 * Convention: prefixed with "Sanity" to distinguish from UI prop types.
 */

// ── Primitives ────────────────────────────────────────────────────────────────

export interface SanityCta {
  label: string;
  href: string;
}

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  alt?: string;
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface SanityBlock {
  _type: "block";
  _key: string;
  style: string;
  children: Array<{ _type: string; _key: string; text: string; marks: string[] }>;
  markDefs: Array<{ _type: string; _key: string; href?: string; blank?: boolean }>;
}

export interface SanityPortableText extends Array<SanityBlock> {}

// ── SEO ───────────────────────────────────────────────────────────────────────

export interface SanitySeoFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
}

// ── Section block types ───────────────────────────────────────────────────────

export interface SanityHeroSection {
  _type: "heroSection";
  _key: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: SanityCta;
  secondaryCta?: SanityCta;
  badgeItems?: string[];
}

export interface SanityPageHeroSection {
  _type: "pageHeroSection";
  _key: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta?: SanityCta;
  secondaryCta?: SanityCta;
  centered?: boolean;
}

export interface SanityMetricItem {
  _key: string;
  value: string;
  label: string;
  context?: string;
}

export interface SanityMetricsSection {
  _type: "metricsSection";
  _key: string;
  items: SanityMetricItem[];
}

export interface SanityWhyItem {
  _key: string;
  icon: string;
  title: string;
  body: string;
}

export interface SanityWhyChooseUsSection {
  _type: "whyChooseUsSection";
  _key: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: SanityWhyItem[];
}

export interface SanityProcessStep {
  _key: string;
  number: number;
  title: string;
  description: string;
  outcome?: string;
}

export interface SanityProcessSection {
  _type: "processSection";
  _key: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: SanityProcessStep[];
}

export interface SanityCapabilityTab {
  _key: string;
  id: string;
  label: string;
  description: string;
  bullets?: string[];
}

export interface SanityCapabilitiesSection {
  _type: "capabilitiesSection";
  _key: string;
  title: string;
  subtitle?: string;
  tabs: SanityCapabilityTab[];
}

export interface SanityServiceItem {
  _key: string;
  icon: string;
  title: string;
  summary: string;
  href?: string;
}

export interface SanityServicesGridSection {
  _type: "servicesGridSection";
  _key: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: SanityServiceItem[];
}

export interface SanityServiceCategory {
  _key: string;
  icon: string;
  title: string;
  summary: string;
  href: string;
  tags?: string[];
}

export interface SanityServiceCategoriesSection {
  _type: "serviceCategoriesSection";
  _key: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  categories: SanityServiceCategory[];
}

export interface SanityFeatureItem {
  _key: string;
  icon: string;
  title: string;
  body: string;
}

export interface SanityFeatureGridSection {
  _type: "featureGridSection";
  _key: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  cols: 2 | 3 | 4;
  items: SanityFeatureItem[];
}

export interface SanityOverviewSection {
  _type: "overviewSection";
  _key: string;
  eyebrow?: string;
  heading: string;
  body: string[];
  cta?: SanityCta;
}

export interface SanityOutcomeItem {
  _key: string;
  icon: string;
  title: string;
  body: string;
}

export interface SanityOutcomesSection {
  _type: "outcomesSection";
  _key: string;
  eyebrow?: string;
  heading: string;
  items: SanityOutcomeItem[];
}

export interface SanityStatItem {
  _key: string;
  value: string;
  label: string;
}

export interface SanityStatsSection {
  _type: "statsSection";
  _key: string;
  bg: "light" | "dark";
  stats: SanityStatItem[];
}

export interface SanityPartnerLogo {
  _key: string;
  name: string;
  initials: string;
  logo?: SanityImage;
}

export interface SanityPartnersSection {
  _type: "partnersSection";
  _key: string;
  logos: SanityPartnerLogo[];
}

export interface SanityTestimonialSection {
  _type: "testimonialSection";
  _key: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  authorCompany?: string;
  authorAvatar?: SanityImage;
}

export interface SanityCtaSection {
  _type: "ctaSection";
  _key: string;
  title: string;
  subtitle?: string;
  primaryCta: SanityCta;
  secondaryCta?: SanityCta;
  reassurance?: string;
}

export interface SanityRichTextSection {
  _type: "richTextSection";
  _key: string;
  eyebrow?: string;
  heading?: string;
  content: SanityPortableText;
}

export interface SanityResultsDrivenSection {
  _type: "resultsDrivenSection";
  _key: string;
  heading?: string;
  body?: string;
}

export interface SanityServiceProposalSection {
  _type: "serviceProposalSection";
  _key: string;
  heading?: string;
  paragraphs: string[];
  service: string;
}

// ── Union of all section types ────────────────────────────────────────────────

export type SanitySection =
  | SanityHeroSection
  | SanityPageHeroSection
  | SanityResultsDrivenSection
  | SanityServiceProposalSection
  | SanityMetricsSection
  | SanityWhyChooseUsSection
  | SanityProcessSection
  | SanityCapabilitiesSection
  | SanityServicesGridSection
  | SanityServiceCategoriesSection
  | SanityFeatureGridSection
  | SanityOverviewSection
  | SanityOutcomesSection
  | SanityStatsSection
  | SanityPartnersSection
  | SanityTestimonialSection
  | SanityCtaSection
  | SanityRichTextSection;

// ── Page document ─────────────────────────────────────────────────────────────

export type PageType =
  | "home"
  | "service"
  | "location"
  | "about"
  | "careers"
  | "contact"
  | "servicesHub"
  | "ecommerce";

export interface SanityPage {
  _id: string;
  _type: "page";
  _updatedAt: string;
  title: string;
  slug: SanitySlug;
  pageType: PageType;
  summary?: string;
  sections: SanitySection[];
  seo?: SanitySeoFields;
}

// Lightweight version for listing / generateStaticParams
export interface SanityPageStub {
  _id: string;
  title: string;
  slug: SanitySlug;
  pageType: PageType;
}

// ── Site settings ─────────────────────────────────────────────────────────────

export interface SanityMegaMenuLink {
  label: string;
  href: string;
}

export interface SanityMegaMenuGroup {
  category: string;
  items: SanityMegaMenuLink[];
}

export interface SanityNavItem {
  label: string;
  href: string;
  megaMenu?: SanityMegaMenuGroup[];
}

export interface SanityFooterLink {
  label: string;
  href: string;
}

export interface SanityFooterColumn {
  title: string;
  links: SanityFooterLink[];
}

export interface SanitySiteSettings {
  _id: string;
  siteName: string;
  tagline?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  navItems?: SanityNavItem[];
  footerTagline?: string;
  footerColumns?: SanityFooterColumn[];
  copyrightText?: string;
  chatbotName?: string;
  chatbotGreeting?: string;
  chatbotExampleQuestions?: string[];
}
