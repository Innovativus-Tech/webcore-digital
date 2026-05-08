/**
 * seed-sanity.ts
 *
 * Populates a fresh Sanity dataset from the existing static content in
 * lib/data.ts and lib/pages-data.ts.
 *
 * Run once after setting NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN:
 *   npx tsx scripts/seed-sanity.ts
 *
 * Requirements:
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID  (your Sanity project ID)
 *   - NEXT_PUBLIC_SANITY_DATASET     (default: "production")
 *   - SANITY_API_WRITE_TOKEN         (Editor or Admin token — NOT the Viewer token)
 *
 * The write token is different from the read token. Create it at:
 *   https://sanity.io/manage → API → Tokens → Add API token (Editor role)
 *
 * IMPORTANT: This token should NEVER be committed or used in Next.js runtime code.
 * It is only used by this one-off seed script.
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@sanity/client";

// ─── Sanity write client ──────────────────────────────────────────────────────

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "\n❌  Missing env vars.\n" +
      "    Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local\n" +
      "    (SANITY_API_WRITE_TOKEN needs Editor or Admin role — not the Viewer token)\n"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function key(prefix: string, index: number) {
  return `${prefix}${index}`;
}

// ─── Site settings document ───────────────────────────────────────────────────

const siteSettingsDoc = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteName: "WebcoreDigital",
  tagline: "Where strategy meets technology",
  contactEmail: "sales@webcoredigital.com",
  contactPhone: "(213) 260-3988",
  contactAddress: "USA",
  primaryCtaLabel: "Get a free quote",
  primaryCtaHref: "/contact",
  navItems: [
    { _key: "nav0", label: "About Us", href: "/about-us" },
    {
      _key: "nav1",
      label: "Services",
      href: "/services",
      megaMenu: [
        {
          _key: "mg0",
          category: "Digital Marketing",
          items: [
            { _key: "mg0i0", label: "Digital Marketing Services", href: "/digital-marketing-services" },
            { _key: "mg0i1", label: "Pay Per Click Marketing Service", href: "/pay-per-click-marketing-service" },
            { _key: "mg0i2", label: "Search Engine Optimization (SEO) Service", href: "/search-engine-optimization-seo-service" },
            { _key: "mg0i3", label: "SEO Content Writing Services", href: "/seo-content-writing-services" },
          ],
        },
        {
          _key: "mg1",
          category: "E-commerce Marketing & Management",
          items: [
            { _key: "mg1i0", label: "E-commerce Marketing Agency", href: "/ecommerce-marketing-agency" },
          ],
        },
        {
          _key: "mg2",
          category: "Web & Graphics Design",
          items: [
            { _key: "mg2i0", label: "Graphic Designing Services", href: "/graphic-designing-services" },
            { _key: "mg2i1", label: "Web Design Services", href: "/web-design-services" },
          ],
        },
        {
          _key: "mg3",
          category: "Social Media Marketing",
          items: [
            { _key: "mg3i0", label: "Social Media Marketing Service", href: "/social-media-marketing-service" },
          ],
        },
      ],
    },
    { _key: "nav2", label: "Careers", href: "/careers" },
    { _key: "nav3", label: "Contact", href: "/contact" },
  ],
  footerTagline:
    "A results-driven digital marketing agency built around your customer. Strategy, execution, and measurement.",
  footerColumns: [
    {
      _key: "fc0",
      title: "Company",
      links: [
        { _key: "fc0l0", label: "About Us", href: "/about-us" },
        { _key: "fc0l1", label: "Careers", href: "/careers" },
        { _key: "fc0l2", label: "Contact", href: "/contact" },
      ],
    },
    {
      _key: "fc1",
      title: "Services",
      links: [
        { _key: "fc1l0", label: "Digital Marketing", href: "/digital-marketing-services" },
        { _key: "fc1l1", label: "Web Design", href: "/web-design-services" },
        { _key: "fc1l2", label: "SEO Services", href: "/search-engine-optimization-seo-service" },
        { _key: "fc1l3", label: "Graphic Design", href: "/graphic-designing-services" },
      ],
    },
    {
      _key: "fc2",
      title: "More Services",
      links: [
        { _key: "fc2l0", label: "SEO Content Writing", href: "/seo-content-writing-services" },
        { _key: "fc2l1", label: "E-commerce Marketing", href: "/ecommerce-marketing-agency" },
        { _key: "fc2l2", label: "Social Media Marketing", href: "/social-media-marketing-service" },
        { _key: "fc2l3", label: "Pay Per Click (PPC)", href: "/pay-per-click-marketing-service" },
      ],
    },
    {
      _key: "fc3",
      title: "Get in touch",
      links: [
        { _key: "fc3l0", label: "sales@webcoredigital.com", href: "mailto:sales@webcoredigital.com" },
        { _key: "fc3l1", label: "(213) 260-3988", href: "tel:+12132603988" },
      ],
    },
  ],
  copyrightText: "© {{year}} WebcoreDigital. All rights reserved.",
  chatbotName: "WebcoreDigital Assistant",
  chatbotGreeting:
    "Hi! I'm the WebcoreDigital assistant. Ask me about our services, process, or how we'd help your business grow.",
  chatbotExampleQuestions: [
    "What services do you offer?",
    "Can you help with SEO for my clinic?",
    "How do you measure results?",
    "What does a typical engagement look like?",
  ],
};

// ─── Page documents ───────────────────────────────────────────────────────────

const pages = [
  // ── Homepage ──────────────────────────────────────────────────────────────
  {
    _id: "page-home",
    _type: "page",
    title: "Home",
    slug: { _type: "slug", current: "/" },
    pageType: "home",
    summary:
      "WebcoreDigital is a results-driven digital marketing agency specialising in SEO, PPC, web design, content, and analytics.",
    seo: {
      metaTitle: "WebcoreDigital | Where strategy meets technology",
      metaDescription:
        "Results-driven digital marketing agency. SEO, paid media, content, and CRO. Built on research, measured by outcomes.",
    },
    sections: [
      {
        _type: "heroSection",
        _key: "s-hero",
        eyebrow: "#1 Digital Marketing Agency",
        title: "Where strategy meets technology",
        subtitle:
          "Results-driven digital marketing built on research, executed with rigor, and measured by outcomes.",
        primaryCta: { label: "Get a free audit", href: "/contact" },
        secondaryCta: { label: "See our services", href: "/services" },
        badgeItems: ["Free 30-min audit", "No obligation"],
      },
      {
        _type: "metricsSection",
        _key: "s-metrics",
        items: [
          { _key: "m0", value: "6×", label: "SEARCH TRAFFIC", context: "Average organic uplift across SEO clients" },
          { _key: "m1", value: "+47%", label: "MOBILE VISITS", context: "Growth after performance & UX optimisation" },
          { _key: "m2", value: "+45%", label: "PAGEVIEWS", context: "Increase from content + on-page strategy" },
        ],
      },
      {
        _type: "whyChooseUsSection",
        _key: "s-why",
        eyebrow: "Why choose us",
        heading: "Why choose WebcoreDigital for your Digital Marketing Agency?",
        items: [
          { _key: "w0", icon: "Users", title: "Diverse Clientele", body: "WebcoreDigital has worked with clients belonging to all industries, be it local businesses or large brands. We provide customer satisfaction and we have happy customers." },
          { _key: "w1", icon: "Sparkles", title: "Our Knowledge", body: "The strategies that we use are proven to work for the varying needs of the clients. This has been possible due to our experience in the fields and services that we offer. Our professionals are highly experienced." },
          { _key: "w2", icon: "Layers", title: "Flexible Packages", body: "WebcoreDigital offers digital marketing packages that meet prices of all levels and suit the varying needs of consumers. Our professionals help in deciding which package is appropriate to suit your needs." },
          { _key: "w3", icon: "Search", title: "Effective Process", body: "We use a holistic approach in deciding and determining, based on research, what exactly the business needs and what marketing campaigns and strategies should be applied to meet the consumer's interests." },
          { _key: "w4", icon: "ShieldCheck", title: "Honesty and Ethics Involved", body: "Our team members believe in honesty and integrity and we respect our clients and try to fulfill all responsibilities to provide customer satisfaction. We identify your requirements and craft a customized solution." },
          { _key: "w5", icon: "TrendingUp", title: "Proven Results", body: "WebcoreDigital takes an effort in hearing the problems and requirements of the clients and their business goals, then builds a customized service package. With our campaigns, we have experienced huge growth in revenue and traffic." },
          { _key: "w6", icon: "Heart", title: "Priority to Customers", body: "Our consumer-centric goal makes it very important for us to give our full focus to the needs of our clients. The results are satisfied clients who feel confident about trusting us and we get better results." },
          { _key: "w7", icon: "BarChart3", title: "Excellence Track Record", body: "Using dashboards, bids, ads, metadata, and analytics we keep track of your performance in the digital world. We find ways to improve your position in the digital world with advanced technology." },
        ],
      },
      {
        _type: "processSection",
        _key: "s-process",
        eyebrow: "Our approach",
        title: "How we take your business to the next level",
        subtitle:
          "Customized digital marketing solutions built on research, designed to generate qualified leads, grow visibility, sharpen your brand, and lift revenue.",
        steps: [
          { _key: "p0", number: 1, title: "Research", description: "Audience, competitor, and channel deep-dive to find your real growth levers.", outcome: "Clear opportunity map" },
          { _key: "p1", number: 2, title: "Strategy", description: "A focused plan tied to business goals, not a checklist of tactics.", outcome: "Qualified-lead playbook" },
          { _key: "p2", number: 3, title: "Execute", description: "Hands-on delivery across SEO, paid, content, and conversion experiences.", outcome: "Traffic, visibility & branding" },
          { _key: "p3", number: 4, title: "Measure", description: "Continuous analytics, honest reporting, and iterative optimisation.", outcome: "Sales & customer satisfaction" },
        ],
      },
      {
        _type: "servicesGridSection",
        _key: "s-services",
        eyebrow: "Services",
        title: "Our digital marketing services",
        subtitle: "A full stack of capabilities. Pick a package or compose your own.",
        items: [
          { _key: "sv0", icon: "Search", title: "Search Engine Optimisation", summary: "Rank for the queries that matter and grow durable organic traffic." },
          { _key: "sv1", icon: "Target", title: "Pay-Per-Click", summary: "Profitable paid campaigns across Google, Bing, and social networks." },
          { _key: "sv2", icon: "MessageCircle", title: "Social Media Marketing", summary: "Build audience and demand on the platforms your customers actually use." },
          { _key: "sv3", icon: "PenLine", title: "Content Marketing", summary: "Editorial that ranks, educates, and earns trust at every funnel stage." },
          { _key: "sv4", icon: "Mail", title: "Email & Lifecycle", summary: "Automated journeys that turn one-time buyers into repeat customers." },
          { _key: "sv5", icon: "MonitorSmartphone", title: "Web Design & CRO", summary: "Fast, conversion-focused websites engineered to ship results." },
          { _key: "sv6", icon: "Palette", title: "Branding", summary: "Sharper positioning and identity systems that scale across channels." },
          { _key: "sv7", icon: "BarChart3", title: "Analytics & Reporting", summary: "Clean tracking, honest dashboards, and decisions you can defend." },
        ],
      },
      {
        _type: "partnersSection",
        _key: "s-partners",
        logos: [
          { _key: "lg0", name: "Shopify", initials: "SF" },
          { _key: "lg1", name: "Google", initials: "GG" },
          { _key: "lg2", name: "Meta", initials: "MT" },
          { _key: "lg3", name: "Microsoft", initials: "MS" },
        ],
      },
      {
        _type: "testimonialSection",
        _key: "s-testimonial",
        quote:
          "WebcoreDigital didn't just grow our traffic; they grew our pipeline. Their research-first approach changed how we think about marketing.",
        authorName: "Priya Shah",
        authorRole: "Head of Growth",
        authorCompany: "Northwind Health",
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle:
          "Contact us to work with a results-driven digital marketing agency that puts your customers first.",
        primaryCta: { label: "Contact us", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── About ─────────────────────────────────────────────────────────────────
  {
    _id: "page-about",
    _type: "page",
    title: "About Us",
    slug: { _type: "slug", current: "about-us" },
    pageType: "about",
    summary:
      "WebcoreDigital is a leading digital marketing agency delivering top-notch services to businesses across various industries, combining strategy, technology, and creativity.",
    seo: {
      metaTitle: "About Us | WebcoreDigital",
      metaDescription:
        "Learn about WebcoreDigital, a leading digital marketing agency delivering top-notch services to businesses across industries.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "Who we are",
        title: "Your results-driven digital marketing partner",
        subtitle:
          "WebcoreDigital is a leading digital marketing agency delivering top-notch digital marketing services to businesses across various industries.",
        primaryCta: { label: "Work with us", href: "/contact" },
      },
      {
        _type: "overviewSection",
        _key: "s-overview",
        eyebrow: "Our story",
        heading: "Built around your goals",
        body: [
          "WebcoreDigital was founded on a simple belief: digital marketing should be measured by business outcomes, not vanity metrics. We are a team of strategists, writers, analysts, and designers who work as an extension of your team.",
          "Every engagement starts with research into your market, your competitors, and your customers. That foundation lets us build campaigns that generate real leads, real traffic, and real revenue for businesses of all sizes.",
          "From startups finding their footing to established brands looking to scale, we adapt our approach to what your specific stage and goals demand. No cookie-cutter packages. No bloated retainers. Just focused, measurable digital marketing.",
        ],
        cta: { label: "Work with us", href: "/contact" },
      },
      {
        _type: "featureGridSection",
        _key: "s-values",
        eyebrow: "Our values",
        heading: "What drives us",
        cols: 3,
        items: [
          { _key: "v0", icon: "Sparkles", title: "Excellence", body: "We innovate and push boundaries in every strategy we execute." },
          { _key: "v1", icon: "Users", title: "Collaboration", body: "We work closely with clients to understand goals and develop customised solutions." },
          { _key: "v2", icon: "ShieldCheck", title: "Integrity", body: "Transparency and ethical standards form the foundation of every client relationship." },
          { _key: "v3", icon: "Lightbulb", title: "Innovation", body: "We stay current with digital trends and leverage cutting-edge tools for your campaigns." },
          { _key: "v4", icon: "TrendingUp", title: "Results-oriented", body: "We focus on tangible outcomes, measuring success through data-driven performance metrics." },
          { _key: "v5", icon: "BarChart3", title: "Data-driven approach", body: "Insights from extensive research and performance metrics inform every decision we make." },
          { _key: "v6", icon: "Heart", title: "Long-term relationship", body: "We build lasting partnerships based on mutual trust, respect, and shared success." },
        ],
      },
      {
        _type: "statsSection",
        _key: "s-stats",
        bg: "dark",
        stats: [
          { _key: "st0", value: "6×", label: "average search traffic uplift" },
          { _key: "st1", value: "+47%", label: "mobile visit growth" },
          { _key: "st2", value: "+45%", label: "pageview increase" },
          { _key: "st3", value: "100%", label: "clients receive custom strategy" },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle: "Contact us to work with a results-driven digital marketing agency.",
        primaryCta: { label: "Contact us", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── Services Hub ──────────────────────────────────────────────────────────
  {
    _id: "page-services",
    _type: "page",
    title: "Services",
    slug: { _type: "slug", current: "services" },
    pageType: "servicesHub",
    summary:
      "Full range of digital marketing services from WebcoreDigital: SEO, web design, content writing, graphic design, social media marketing, and e-commerce marketing.",
    seo: {
      metaTitle: "Services | WebcoreDigital",
      metaDescription:
        "Explore the full range of digital marketing services from WebcoreDigital: SEO, web design, content, PPC, social media, and more.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "What we do",
        title: "A full stack of digital marketing services",
        subtitle:
          "From search visibility to conversion design, every service we offer is built to generate measurable business growth.",
        primaryCta: { label: "Get a free quote", href: "/contact" },
      },
      {
        _type: "serviceCategoriesSection",
        _key: "s-categories",
        eyebrow: "All services",
        heading: "How can we help you?",
        subheading:
          "Be a leader in your industry with a dynamic digital marketing platform. Pick a service category below to learn more.",
        categories: [
          { _key: "c0", icon: "BarChart3", title: "Digital Marketing", summary: "Integrated digital marketing strategies across SEO, PPC, email, social, content, and CRO — all tailored to your customer acquisition goals.", href: "/digital-marketing-services", tags: ["SEO", "PPC", "Email", "Social"] },
          { _key: "c1", icon: "Search", title: "Search Engine Optimisation", summary: "Comprehensive SEO services: technical SEO, local SEO, on-page and off-page optimisation, link building, Amazon SEO, Shopify SEO, and franchise SEO.", href: "/search-engine-optimization-seo-service", tags: ["Technical SEO", "Local SEO", "Link Building"] },
          { _key: "c2", icon: "Target", title: "Pay Per Click Marketing", summary: "Profitable PPC campaigns across Search, Display, Social, Remarketing, Google Shopping, YouTube, Gmail, Local Services, and Amazon Ads.", href: "/pay-per-click-marketing-service", tags: ["Google Ads", "Shopping", "Remarketing"] },
          { _key: "c3", icon: "MessageCircle", title: "Social Media Marketing", summary: "Build brand awareness and drive revenue across Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest, and Snapchat with data-driven social strategies.", href: "/social-media-marketing-service", tags: ["Facebook", "Instagram", "LinkedIn"] },
          { _key: "c4", icon: "PenLine", title: "SEO Content Writing", summary: "Research-driven, plagiarism-free content that ranks well in search engines, educates your audience, and converts visitors into customers.", href: "/seo-content-writing-services", tags: ["Blog", "Landing Pages", "Copywriting"] },
          { _key: "c5", icon: "MonitorSmartphone", title: "Web Design & Development", summary: "Custom corporate, eCommerce, and mobile-responsive websites built to convert visitors into customers, with SEO-friendly architecture from the ground up.", href: "/web-design-services", tags: ["UI/UX Design", "CRO", "Dev"] },
          { _key: "c6", icon: "Palette", title: "Graphic Designing", summary: "Logos, branding, social media graphics, motion graphics, marketing materials, and presentations — 100% custom designs tailored to your brand identity.", href: "/graphic-designing-services", tags: ["Branding", "Logos", "Motion"] },
          { _key: "c7", icon: "ShoppingCart", title: "E-commerce Marketing", summary: "Multi-channel e-commerce marketing — SEO, PPC, email, content, CRO, and link building to grow your online store's revenue and customer base.", href: "/ecommerce-marketing-agency", tags: ["PPC", "Email", "CRO", "SEO"] },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle: "Contact us to work with a results-driven digital marketing agency.",
        primaryCta: { label: "Contact us", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── Digital Marketing Services ────────────────────────────────────────────
  {
    _id: "page-digital-marketing",
    _type: "page",
    title: "Digital Marketing Services",
    slug: { _type: "slug", current: "digital-marketing-services" },
    pageType: "service",
    summary:
      "Integrated digital marketing strategies tailored to grow traffic, leads, and ROI: SEO, PPC, social media, email, content, and analytics.",
    seo: {
      metaTitle: "Digital Marketing Services | WebcoreDigital",
      metaDescription:
        "Integrated digital marketing strategies tailored to grow your traffic, leads, and ROI, built by WebcoreDigital.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "Digital Marketing Services",
        title: "Integrated digital marketing that drives measurable growth",
        subtitle:
          "Customized digital marketing solutions based on deep research, designed to generate qualified leads, increase traffic and visibility, improve branding, and boost sales.",
        primaryCta: { label: "Get your free audit", href: "/contact" },
      },
      {
        _type: "overviewSection",
        _key: "s-overview",
        eyebrow: "Our approach",
        heading: "Strategy before tactics",
        body: [
          "WebcoreDigital's services encompass the digital world that goes beyond time and space. We offer a wide range of digital marketing solutions, each one tailored to the specific needs of your market, audience, and business goals. Our integrated approach means all channels work together, not in silos.",
        ],
        cta: { label: "Get your free audit", href: "/contact" },
      },
      {
        _type: "featureGridSection",
        _key: "s-features",
        eyebrow: "Services",
        heading: "The full channel stack",
        cols: 3,
        items: [
          { _key: "f0", icon: "Search", title: "Search Engine Optimisation", body: "Technical, on-page, and off-page SEO to rank for the queries that drive revenue." },
          { _key: "f1", icon: "Target", title: "Pay-Per-Click (PPC)", body: "Profitable Google, Bing, and social ad campaigns with rigorous bid management." },
          { _key: "f2", icon: "MessageCircle", title: "Social Media Marketing", body: "Audience-building and demand generation on the platforms your customers use most." },
          { _key: "f3", icon: "Mail", title: "Email & Lifecycle", body: "Automated journeys that nurture leads and turn one-time buyers into loyal customers." },
          { _key: "f4", icon: "PenLine", title: "Content Marketing", body: "Editorial strategy and production that builds authority and earns trust at every funnel stage." },
          { _key: "f5", icon: "BarChart3", title: "Analytics & Reporting", body: "Honest dashboards and attribution modelling so you know exactly what is working." },
        ],
      },
      {
        _type: "outcomesSection",
        _key: "s-outcomes",
        eyebrow: "What you get",
        heading: "How we take your business to the next level",
        items: [
          { _key: "o0", icon: "TrendingUp", title: "More qualified leads", body: "Campaigns tuned to attract buyers, not just visitors." },
          { _key: "o1", icon: "Eye", title: "Higher traffic & visibility", body: "Dominate the search results and social feeds that matter in your industry." },
          { _key: "o2", icon: "Star", title: "Stronger brand perception", body: "Consistent messaging across channels that builds trust at scale." },
          { _key: "o3", icon: "DollarSign", title: "Increased sales", body: "Revenue-focused KPIs, not just clicks and impressions." },
        ],
      },
      {
        _type: "statsSection",
        _key: "s-stats",
        bg: "light",
        stats: [
          { _key: "st0", value: "6×", label: "search traffic uplift" },
          { _key: "st1", value: "+47%", label: "mobile visits" },
          { _key: "st2", value: "+45%", label: "pageviews" },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle: "Contact us to work with a results-driven digital marketing agency.",
        primaryCta: { label: "Contact us", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── Web Design Services ───────────────────────────────────────────────────
  {
    _id: "page-web-design",
    _type: "page",
    title: "Web Design Services",
    slug: { _type: "slug", current: "web-design-services" },
    pageType: "service",
    summary:
      "Professional, conversion-focused web design services that transform your online presence and turn visitors into customers.",
    seo: {
      metaTitle: "Web Design Services | WebcoreDigital",
      metaDescription:
        "Professional, conversion-focused web design services that transform your online presence and turn visitors into customers.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "Web Design Services",
        title: "Websites that convert visitors into customers",
        subtitle:
          "We design and develop professional, fast, conversion-focused websites that elevate your brand's online presence, built to generate leads and drive sales, not just look good.",
        primaryCta: { label: "Start your project", href: "/contact" },
      },
      {
        _type: "overviewSection",
        _key: "s-overview",
        eyebrow: "Our approach",
        heading: "Built to perform, not just impress",
        body: [
          "WebcoreDigital is your one-stop solution for all website needs. From redesigning existing sites to building from scratch, we provide answers to both simple and complex web requirements. Our designs are not just aesthetically striking; they are engineered around user behaviour and conversion principles.",
        ],
        cta: { label: "Start your project", href: "/contact" },
      },
      {
        _type: "featureGridSection",
        _key: "s-features",
        eyebrow: "Services",
        heading: "What's included",
        cols: 3,
        items: [
          { _key: "f0", icon: "Sparkles", title: "Custom UI/UX Design", body: "Tailored interfaces that reflect your brand and guide users toward the actions that matter most to your business." },
          { _key: "f1", icon: "Gauge", title: "Conversion Rate Optimisation", body: "Every layout, CTA placement, and page flow is designed to maximise lead generation and sales." },
          { _key: "f2", icon: "Smartphone", title: "Fully Responsive", body: "Flawless experiences on mobile, tablet, and desktop. No compromises." },
          { _key: "f3", icon: "Zap", title: "Performance-First Build", body: "Fast-loading, Core Web Vitals-optimised sites that rank well and keep users engaged." },
          { _key: "f4", icon: "RefreshCw", title: "Redesign & Migration", body: "Refreshing outdated sites while preserving SEO equity and improving the user journey." },
          { _key: "f5", icon: "LayoutDashboard", title: "CMS Integration", body: "Easy-to-manage content powered by headless CMS platforms so your team stays in control." },
        ],
      },
      {
        _type: "processSection",
        _key: "s-process",
        eyebrow: "Our process",
        title: "How we build your site",
        steps: [
          { _key: "p0", number: 1, title: "Discovery", description: "We audit your current site and map your business goals to design requirements.", outcome: "Design brief" },
          { _key: "p1", number: 2, title: "Wireframing", description: "Structural layouts and user flows before a single pixel of design is committed.", outcome: "Wireframes" },
          { _key: "p2", number: 3, title: "Design", description: "High-fidelity, on-brand designs built for real user behaviour.", outcome: "Final designs" },
          { _key: "p3", number: 4, title: "Build & Launch", description: "Pixel-perfect development, QA, and a smooth handoff to your team.", outcome: "Live site" },
        ],
      },
      {
        _type: "statsSection",
        _key: "s-stats",
        bg: "light",
        stats: [
          { _key: "st0", value: "3×", label: "average lead increase post-redesign" },
          { _key: "st1", value: "<2s", label: "target page load time" },
          { _key: "st2", value: "100%", label: "mobile-responsive delivery" },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle: "Contact us to work with a results-driven digital marketing agency.",
        primaryCta: { label: "Start your project", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── SEO Service ───────────────────────────────────────────────────────────
  {
    _id: "page-seo",
    _type: "page",
    title: "Search Engine Optimization (SEO) Services",
    slug: { _type: "slug", current: "search-engine-optimization-seo-service" },
    pageType: "service",
    summary:
      "Comprehensive SEO services including technical SEO, multi-location SEO, on-page optimisation, and link building to grow search visibility.",
    seo: {
      metaTitle: "Search Engine Optimization (SEO) Services | WebcoreDigital",
      metaDescription:
        "Comprehensive SEO services including technical SEO, multi-location SEO, and link building to grow your search visibility.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "Search Engine Optimisation",
        title: "Dominate search results: locally and nationally",
        subtitle:
          "From technical foundations to authoritative link profiles, our SEO service is built to improve your marketing effectiveness and drive sustained organic growth.",
        primaryCta: { label: "Get your SEO audit", href: "/contact" },
      },
      {
        _type: "overviewSection",
        _key: "s-overview",
        eyebrow: "Our approach",
        heading: "SEO built on foundations that last",
        body: [
          "Using WebcoreDigital's SEO services can significantly improve your marketing effectiveness. We specialise in multi-location and franchise SEO, creating location-specific content and campaigns that boost search performance, local visibility, and presence for each market you serve.",
        ],
        cta: { label: "Get your SEO audit", href: "/contact" },
      },
      {
        _type: "featureGridSection",
        _key: "s-features",
        eyebrow: "Services",
        heading: "What's included",
        cols: 3,
        items: [
          { _key: "f0", icon: "Code", title: "Technical SEO", body: "Site architecture, crawlability, Core Web Vitals, schema markup: the invisible foundation every campaign needs." },
          { _key: "f1", icon: "FileText", title: "On-Page Optimisation", body: "Title tags, meta descriptions, content structure, and internal linking built for targeted keywords." },
          { _key: "f2", icon: "Link", title: "Link Building", body: "White-hat link acquisition strategies to build domain authority and outrank competitors." },
          { _key: "f3", icon: "MapPin", title: "Local & Multi-Location SEO", body: "Location-specific content and GBP optimisation for businesses serving multiple areas." },
          { _key: "f4", icon: "Search", title: "Keyword Discovery", body: "Intent-mapped research to find the queries that actually drive revenue, not just traffic." },
          { _key: "f5", icon: "BarChart3", title: "Transparent Reporting", body: "Monthly reports that connect SEO activity to business outcomes: rankings, traffic, and leads." },
        ],
      },
      {
        _type: "statsSection",
        _key: "s-stats",
        bg: "light",
        stats: [
          { _key: "st0", value: "6×", label: "average search traffic increase" },
          { _key: "st1", value: "+45%", label: "organic pageview growth" },
          { _key: "st2", value: "Top 3", label: "target rank for primary keywords" },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle: "Contact us to work with a results-driven digital marketing agency.",
        primaryCta: { label: "Get your SEO audit", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── SEO Content Writing ───────────────────────────────────────────────────
  {
    _id: "page-seo-content",
    _type: "page",
    title: "SEO Content Writing Services",
    slug: { _type: "slug", current: "seo-content-writing-services" },
    pageType: "service",
    summary:
      "Professional SEO content writing: in-depth research, plagiarism-free, optimised for rankings and brand messaging.",
    seo: {
      metaTitle: "SEO Content Writing Services | WebcoreDigital",
      metaDescription:
        "Professional SEO content writing: in-depth research, plagiarism-free, optimised for rankings and brand messaging.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "SEO Content Writing",
        title: "Content that ranks, resonates, and converts",
        subtitle:
          "Our SEO content writers combine deep keyword research with compelling storytelling to produce content that earns top rankings and drives real business outcomes.",
        primaryCta: { label: "Get a content quote", href: "/contact" },
      },
      {
        _type: "featureGridSection",
        _key: "s-features",
        eyebrow: "Services",
        heading: "What's included",
        cols: 3,
        items: [
          { _key: "f0", icon: "Search", title: "Keyword Research & Mapping", body: "Intent-driven keyword strategy mapped to your funnel stages before writing begins." },
          { _key: "f1", icon: "FileText", title: "Blog & Article Writing", body: "Long-form content that builds topical authority and earns consistent organic traffic." },
          { _key: "f2", icon: "LayoutTemplate", title: "Landing Page Copy", body: "Conversion-focused copy for product and service pages optimised for both rankings and sales." },
          { _key: "f3", icon: "ShieldCheck", title: "100% Plagiarism-Free", body: "Every piece is original, verified, and crafted specifically for your brand." },
          { _key: "f4", icon: "Edit3", title: "Brand Voice Alignment", body: "We write to match your tone, terminology, and audience, consistently across all content." },
          { _key: "f5", icon: "Globe", title: "Multi-Industry Experience", body: "Experience across healthcare, retail, SaaS, legal, local business, and more." },
        ],
      },
      {
        _type: "statsSection",
        _key: "s-stats",
        bg: "light",
        stats: [
          { _key: "st0", value: "100%", label: "plagiarism-free guarantee" },
          { _key: "st1", value: "6×", label: "average organic traffic growth for content clients" },
          { _key: "st2", value: "48hr", label: "typical turnaround for standard articles" },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle: "Contact us to work with a results-driven digital marketing agency.",
        primaryCta: { label: "Get a content quote", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── Graphic Design ────────────────────────────────────────────────────────
  {
    _id: "page-graphic-design",
    _type: "page",
    title: "Graphic Designing Services",
    slug: { _type: "slug", current: "graphic-designing-services" },
    pageType: "service",
    summary:
      "Creative, intuitive graphic design services: logo design, branding, marketing creatives, infographics, and brand guidelines.",
    seo: {
      metaTitle: "Graphic Designing Services | WebcoreDigital",
      metaDescription:
        "Creative, intuitive graphic design services that elevate brand identity and support every digital marketing channel.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "Graphic Design Services",
        title: "Design that elevates your brand and drives results",
        subtitle:
          "Creative, intuitive, and thought-provoking design work built to strengthen your brand identity and make every marketing asset work harder.",
        primaryCta: { label: "Start a design project", href: "/contact" },
      },
      {
        _type: "featureGridSection",
        _key: "s-features",
        eyebrow: "Services",
        heading: "What's included",
        cols: 3,
        items: [
          { _key: "f0", icon: "Fingerprint", title: "Logo & Brand Identity", body: "Distinctive marks and identity systems that communicate your values at a glance." },
          { _key: "f1", icon: "Layers", title: "Marketing Creatives", body: "Social graphics, display ads, email headers, and campaign assets, all on-brand." },
          { _key: "f2", icon: "Image", title: "Web & UI Graphics", body: "Icons, illustrations, and interface assets designed to enhance user experience." },
          { _key: "f3", icon: "FileImage", title: "Infographics & Data Viz", body: "Complex information made simple, designed to engage and earn shares." },
          { _key: "f4", icon: "Printer", title: "Print & Collateral", body: "Brochures, pitch decks, business cards, and event materials." },
          { _key: "f5", icon: "Repeat2", title: "Brand Guidelines", body: "Comprehensive brand style guides to keep every touchpoint consistent." },
        ],
      },
      {
        _type: "statsSection",
        _key: "s-stats",
        bg: "light",
        stats: [
          { _key: "st0", value: "Creative", label: "intuitive and thought-provoking design" },
          { _key: "st1", value: "100%", label: "custom, no templates" },
          { _key: "st2", value: "Multi", label: "channel-ready assets" },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle: "Contact us to work with a results-driven digital marketing agency.",
        primaryCta: { label: "Start a design project", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── Pay Per Click Marketing ───────────────────────────────────────────────
  {
    _id: "page-ppc",
    _type: "page",
    title: "Pay Per Click Marketing Service",
    slug: { _type: "slug", current: "pay-per-click-marketing-service" },
    pageType: "service",
    summary:
      "Drive immediate traffic and fast ROI with WebcoreDigital's expert PPC management across Search, Display, Social, Remarketing, Shopping, YouTube, Gmail, Local Services, and Amazon ads.",
    seo: {
      metaTitle: "Pay Per Click Marketing Service | WebcoreDigital",
      metaDescription:
        "Drive immediate traffic and fast ROI with WebcoreDigital's expert PPC management across Google, social media, YouTube, Amazon, and more.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "Pay Per Click Marketing Service",
        title: "Profitable PPC Campaigns That Deliver Immediate Results",
        subtitle:
          "Pay-per-click advertising gives you an immediate campaign boost and a fast return on investment. Maintain full control of your paid search and acquire positive business outcomes with targeted PPC services.",
        primaryCta: { label: "Get My Free Proposal", href: "/contact" },
      },
      {
        _type: "overviewSection",
        _key: "s-overview",
        eyebrow: "About PPC",
        heading: "Immediate visibility. Full budget control. Measurable ROI.",
        body: [
          "WebcoreDigital is a digital marketing agency focused on the needs of its clients. The digital landscape keeps growing, and figuring out advertising avenues while maximising all possible conversion paths is the key motive behind every business expansion.",
          "Many business websites stay invisible to their target audience despite having good advertising techniques due to increased competition, changing customer demands, and high digital ad expenditure. Pay-per-click advertising cuts through this noise by putting your brand directly in front of people actively searching for what you offer.",
        ],
        cta: { label: "Get My Free Proposal", href: "/contact" },
      },
      {
        _type: "featureGridSection",
        _key: "s-ad-types",
        eyebrow: "PPC ad types",
        heading: "9 types of PPC ads we manage for you",
        subheading: "From search and display to YouTube, Amazon, and Gmail — we match the right ad format to your audience and goals.",
        cols: 3,
        items: [
          { _key: "a0", icon: "Search", title: "Search Ads", body: "The most trending form of PPC. Appear to audiences already searching for your industry or brand offerings — suitable for both short-sale and long-sale cycles." },
          { _key: "a1", icon: "Monitor", title: "Display Ads", body: "Reach more than 90% of online users via Google's partner websites, targeting people who have already visited industry-related sites." },
          { _key: "a2", icon: "MessageCircle", title: "Social Ads", body: "The fastest-growing PPC sector. Ads appear on Facebook, LinkedIn, and Twitter, programmed to reach a highly targeted audience." },
          { _key: "a3", icon: "RefreshCw", title: "Remarketing Ads", body: "Reach high-converting customers by reminding previous visitors about your brand. Comparatively cheaper due to less competition and highly targeted segments." },
          { _key: "a4", icon: "ShoppingCart", title: "Google Shopping Ads", body: "Appear above or beside Google search results, showing your product and price before a user clicks anyone else. Ideal for eCommerce with clear buying intent." },
          { _key: "a5", icon: "Video", title: "In-stream Ads", body: "YouTube ads appearing on YouTube search results and videos, plus Facebook in-stream ads placed in natural breaks within video content." },
          { _key: "a6", icon: "Mail", title: "Gmail Sponsored Promotions", body: "Generate direct leads by reaching interested prospects right in their inboxes. Includes click-to-call so audiences can convert at any point in the sales cycle." },
          { _key: "a7", icon: "MapPin", title: "Local Services Ads", body: "Pay-per-lead model for HVAC companies, electricians, plumbers, locksmiths, and local service providers — you only pay for clicks that become leads." },
          { _key: "a8", icon: "Package", title: "Amazon PPC Ads", body: "Allow Amazon sellers to create brand awareness, boost sales, and place sponsored ads. Our experts organise campaigns to increase profit margins." },
        ],
      },
      {
        _type: "statsSection",
        _key: "s-stats",
        bg: "dark",
        stats: [
          { _key: "st0", value: "90%+", label: "of online users reached via display ads" },
          { _key: "st1", value: "Fast", label: "return on investment vs organic channels" },
          { _key: "st2", value: "9", label: "PPC ad types managed by WebcoreDigital" },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to launch profitable PPC campaigns?",
        subtitle: "Contact us to work with a results-driven digital marketing agency.",
        primaryCta: { label: "Get My Free Proposal", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── Social Media Marketing ────────────────────────────────────────────────
  {
    _id: "page-social-media",
    _type: "page",
    title: "Social Media Marketing Service",
    slug: { _type: "slug", current: "social-media-marketing-service" },
    pageType: "service",
    summary:
      "Build brand awareness and drive revenue across Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest, and Snapchat with expert social media marketing from WebcoreDigital.",
    seo: {
      metaTitle: "Social Media Marketing Service | WebcoreDigital",
      metaDescription:
        "Build brand awareness, drive revenue, and reach 4.57 billion social media users with WebcoreDigital's expert social media marketing services.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "Social Media Marketing Service",
        title: "Build Your Brand's Social Presence and Drive Revenue",
        subtitle:
          "Social media channels have become the most important source of news and information in today's world. With 4.57 billion global users, the opportunity to build your brand and drive revenue is enormous.",
        primaryCta: { label: "Get My Free Proposal", href: "/contact" },
      },
      {
        _type: "overviewSection",
        _key: "s-overview",
        eyebrow: "What we do",
        heading: "Expert social media marketing tailored to your brand",
        body: [
          "Social media marketing is the utilisation of platforms such as Facebook, Instagram, Twitter, and LinkedIn to establish brand recognition and connect with your audience. It is one of the most critical components of success on an online platform, helping boost brand awareness, drive revenue, and turn customers into brand advocates.",
          "WebcoreDigital provides expert social media strategies that are properly laid down, data-driven, and tailored to your industry. Whether you own a startup, an enterprise, or a multi-location company, we have the right strategy for you.",
        ],
        cta: { label: "Get My Free Proposal", href: "/contact" },
      },
      {
        _type: "featureGridSection",
        _key: "s-benefits",
        eyebrow: "Benefits",
        heading: "Why social media marketing matters for your business",
        cols: 3,
        items: [
          { _key: "b0", icon: "Eye", title: "Better Online Exposure", body: "Platforms like Facebook, Instagram, LinkedIn, and Twitter increase brand exposure and grow client interest organically and through paid campaigns." },
          { _key: "b1", icon: "TrendingUp", title: "High Search Rankings", body: "The more people share your content across social media channels, the more traffic is sent to your website, improving your overall search rankings." },
          { _key: "b2", icon: "Target", title: "Specific Audience Targeting", body: "Identify your ideal customers by age, location, and online activities, ensuring your message reaches the right people at the right time." },
          { _key: "b3", icon: "Users", title: "Improved Customer Reach", body: "54% of online users use social media for product research, and 49% depend on influencer recommendations — we put you in front of both audiences." },
          { _key: "b4", icon: "ShieldCheck", title: "Complete Brand Control", body: "You have complete control over your branding, budget, and social media content marketing strategy with full monthly campaign reporting." },
          { _key: "b5", icon: "DollarSign", title: "Increased Profitability", body: "Social media is a cost-effective way to reach your ideal clients and drive measurable revenue without spending a huge amount of money." },
        ],
      },
      {
        _type: "statsSection",
        _key: "s-stats",
        bg: "dark",
        stats: [
          { _key: "st0", value: "4.57B", label: "global social media users" },
          { _key: "st1", value: "54%", label: "of users research products on social media" },
          { _key: "st2", value: "49%", label: "of consumers trust influencer recommendations" },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle: "Contact us to work with a results-driven social media marketing agency.",
        primaryCta: { label: "Get My Free Proposal", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },

  // ── E-commerce Marketing Agency ───────────────────────────────────────────
  {
    _id: "page-ecommerce",
    _type: "page",
    title: "E-commerce Marketing Agency",
    slug: { _type: "slug", current: "ecommerce-marketing-agency" },
    pageType: "ecommerce",
    summary:
      "WebcoreDigital helps online stores grow profitability with multi-channel e-commerce marketing: SEO, PPC, email, content, CRO, and link building.",
    seo: {
      metaTitle: "E-commerce Marketing Agency | WebcoreDigital",
      metaDescription:
        "WebcoreDigital helps online stores grow profitability with multi-channel e-commerce marketing: SEO, PPC, email, content, CRO, and link building.",
    },
    sections: [
      {
        _type: "pageHeroSection",
        _key: "s-hero",
        eyebrow: "E-commerce Marketing Agency",
        title: "Increase the Profitability Of Your Online Store",
        subtitle:
          "Give potential customers a step-by-step e-commerce experience, then use multi-channel marketing to turn visitors into loyal buyers.",
        primaryCta: { label: "Get My Free Proposal", href: "/contact" },
      },
      {
        _type: "featureGridSection",
        _key: "s-features",
        eyebrow: "What we offer",
        heading: "E-commerce Services Provided by WebcoreDigital",
        cols: 3,
        items: [
          { _key: "f0", icon: "Search", title: "E-commerce SEO Services", body: "We optimise your e-commerce site for both search engines and users through technical SEO, keyword analysis, mapping, and targeting to drive organic traffic that converts." },
          { _key: "f1", icon: "Target", title: "Paid Advertising", body: "We strategically create PPC and social media ad campaigns using thorough planning and analytics to achieve the greatest results, increasing lead generation and promoting sales." },
          { _key: "f2", icon: "Mail", title: "Email Marketing Services", body: "By creating and distributing relevant messages for each stage of the consumer buying cycle, we convert prospects into paying clients through drip campaigns, cart recovery, and monthly emails." },
          { _key: "f3", icon: "PenLine", title: "Content Marketing Services", body: "As a multichannel marketing agency, we write content for your blogs, advertising campaigns, and social media postings to deliver relevant, valuable, and engaging content." },
          { _key: "f4", icon: "TrendingUp", title: "Conversion Rate Improvement", body: "We continuously evaluate landing pages, category pages, and product pages to raise your conversion rate by at least 30% in three months." },
          { _key: "f5", icon: "Link", title: "Link Building", body: "We use PR expertise and copywriting approaches to create and attract external links to your e-commerce site, improving search engine rankings and domain authority." },
        ],
      },
      {
        _type: "statsSection",
        _key: "s-stats",
        bg: "light",
        stats: [
          { _key: "st0", value: "+30%", label: "minimum conversion rate improvement in 3 months" },
          { _key: "st1", value: "6×", label: "average organic traffic growth" },
          { _key: "st2", value: "Multi", label: "channel integrated approach" },
        ],
      },
      {
        _type: "ctaSection",
        _key: "s-cta",
        title: "Ready to take your business to the next level?",
        subtitle: "Contact us to work with a results-driven digital marketing agency.",
        primaryCta: { label: "Get My Free Proposal", href: "/contact" },
        secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
        reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
      },
    ],
  },
];

// ─── Run seeding ──────────────────────────────────────────────────────────────

async function seed() {
  console.log(`\n🌱  Seeding Sanity dataset "${dataset}" on project "${projectId}"...\n`);

  const transaction = client.transaction();

  // Site settings (createOrReplace so re-running is safe)
  transaction.createOrReplace(siteSettingsDoc);
  console.log("  ✓  siteSettings");

  for (const page of pages) {
    transaction.createOrReplace(page as any);
    console.log(`  ✓  ${page.pageType.padEnd(14)} → /${page.slug.current}`);
  }

  await transaction.commit({ visibility: "async" });

  console.log(`\n✅  Done! ${pages.length + 1} documents created/updated.\n`);
  console.log("   Open your Studio at http://localhost:3000/studio to review them.\n");
}

seed().catch((err) => {
  console.error("\n❌  Seed failed:", err.message);
  process.exit(1);
});
