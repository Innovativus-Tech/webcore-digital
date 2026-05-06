export const site = {
  name: "WebcoreDigital",
  tagline: "Where strategy meets technology",
  contact: {
    email: "sales@webcoredigital.com",
    phone: "(213) 260-3988",
    address: "USA",
  },
  nav: [
    { label: "About Us", href: "/about-us" },
    {
      label: "Services",
      href: "/services",
      megaMenu: [
        {
          category: "Digital Marketing",
          items: [
            { label: "Digital Marketing Services", href: "/digital-marketing-services" },
            { label: "Pay Per Click Marketing Service", href: "/pay-per-click-marketing-service" },
            { label: "Search Engine Optimization (SEO) Service", href: "/search-engine-optimization-seo-service" },
            { label: "SEO Content Writing Services", href: "/seo-content-writing-services" },
          ],
        },
        {
          category: "E-commerce Marketing & Management",
          items: [
            { label: "E-commerce Marketing Agency", href: "/ecommerce-marketing-agency" },
          ],
        },
        {
          category: "Web & Graphics Design",
          items: [
            { label: "Graphic Designing Services", href: "/graphic-designing-services" },
            { label: "Web Design Services", href: "/web-design-services" },
          ],
        },
        {
          category: "Social Media Marketing",
          items: [
            { label: "Social Media Marketing Service", href: "/social-media-marketing-service" },
          ],
        },
      ],
    },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: { label: "Get a free quote", href: "/contact" },
};

export const hero = {
  eyebrow: "#1 Digital Marketing Agency",
  title: "Where strategy meets technology",
  subtitle:
    "Results-driven digital marketing built on research, executed with rigor, and measured by outcomes.",
  primaryCta: { label: "Get a free audit", href: "/contact" },
  secondaryCta: { label: "See our services", href: "/services" },
};

export const metrics = [
  { value: "6×", label: "SEARCH TRAFFIC", context: "Average organic uplift across SEO clients" },
  { value: "+47%", label: "MOBILE VISITS", context: "Growth after performance & UX optimization" },
  { value: "+45%", label: "PAGEVIEWS", context: "Increase from content + on-page strategy" },
];

export const whyChooseUs = [
  {
    id: "clientele",
    title: "Diverse clientele",
    body: "From startups to enterprise, we adapt our playbooks to your market, not the other way around.",
    icon: "Users",
    size: "md",
  },
  {
    id: "expertise",
    title: "Deep expertise",
    body: "Years of hands-on experience across SEO, paid media, content, and analytics.",
    icon: "Sparkles",
    size: "lg",
  },
  {
    id: "packages",
    title: "Flexible packages",
    body: "Pay for what you need. Scale up or down as your goals evolve.",
    icon: "Layers",
    size: "sm",
  },
  {
    id: "process",
    title: "Research-driven process",
    body: "Every recommendation is backed by data: audience, competitor, and channel research come first.",
    icon: "Search",
    size: "md",
  },
  {
    id: "ethics",
    title: "Honesty & ethics",
    body: "Transparent reporting, clear pricing, no vanity metrics. We tell you what's working and what isn't.",
    icon: "ShieldCheck",
    size: "sm",
  },
  {
    id: "customer",
    title: "Customer-first priority",
    body: "Your goals drive the roadmap. We treat your business as if it were our own.",
    icon: "Heart",
    size: "md",
  },
] as const;

export const process = {
  eyebrow: "Our approach",
  title: "How we take your business to the next level",
  subtitle:
    "Customized digital marketing solutions built on research, designed to generate qualified leads, grow visibility, sharpen your brand, and lift revenue.",
  steps: [
    {
      number: 1,
      title: "Research",
      description: "Audience, competitor, and channel deep-dive to find your real growth levers.",
      outcome: "Clear opportunity map",
    },
    {
      number: 2,
      title: "Strategy",
      description: "A focused plan tied to business goals, not a checklist of tactics.",
      outcome: "Qualified-lead playbook",
    },
    {
      number: 3,
      title: "Execute",
      description: "Hands-on delivery across SEO, paid, content, and conversion experiences.",
      outcome: "Traffic, visibility & branding",
    },
    {
      number: 4,
      title: "Measure",
      description: "Continuous analytics, honest reporting, and iterative optimization.",
      outcome: "Sales & customer satisfaction",
    },
  ],
};

export const capabilities = {
  title: "An outstanding digital experience",
  subtitle:
    "Capabilities that turn attention into action, engineered around your customer's journey.",
  tabs: [
    {
      id: "rich-media",
      label: "Rich Media",
      description:
        "Engaging creative: video, motion, and interactive assets that get your message across in seconds.",
      bullets: ["Video & motion production", "Interactive landing experiences", "On-brand creative systems"],
    },
    {
      id: "online-marketing",
      label: "Online Marketing",
      description:
        "Multi-channel campaigns that work together: search, social, display, and email pulling in one direction.",
      bullets: ["Search & paid media", "Social & influencer", "Lifecycle email"],
    },
    {
      id: "analytics",
      label: "Analytics",
      description:
        "Measurement you can trust. Clean tracking, honest dashboards, and decisions backed by data.",
      bullets: ["GA4 & server-side tracking", "Custom dashboards", "Attribution modeling"],
    },
    {
      id: "keywords",
      label: "Keyword Discovery",
      description:
        "Find the queries that actually drive revenue, not just traffic, and own them on the SERP.",
      bullets: ["Intent-mapped research", "Competitor gap analysis", "Topical authority planning"],
    },
    {
      id: "cro",
      label: "Conversion Rate Optimization",
      description:
        "Turn more of your existing visitors into customers with structured experimentation.",
      bullets: ["UX & funnel audits", "A/B testing roadmap", "Landing page optimization"],
    },
  ],
};

export const services = {
  title: "Our digital marketing services",
  subtitle: "A full stack of capabilities. Pick a package or compose your own.",
  items: [
    { id: "seo", icon: "Search", title: "Search Engine Optimization", summary: "Rank for the queries that matter and grow durable organic traffic.", href: "/search-engine-optimization-seo-service" },
    { id: "ppc", icon: "Target", title: "Pay-Per-Click", summary: "Profitable paid campaigns across Google, Bing, and social networks.", href: "/digital-marketing-services" },
    { id: "social", icon: "MessageCircle", title: "Social Media Marketing", summary: "Build audience and demand on the platforms your customers actually use.", href: "/social-media-marketing-service" },
    { id: "content", icon: "PenLine", title: "SEO Content Writing", summary: "Research-driven, plagiarism-free content that ranks and converts.", href: "/seo-content-writing-services" },
    { id: "email", icon: "Mail", title: "Email Marketing", summary: "Personalised campaigns that convert prospects and recover abandoned carts.", href: "/digital-marketing-services" },
    { id: "web", icon: "MonitorSmartphone", title: "Web Design & Development", summary: "Fast, conversion-focused websites engineered to generate leads.", href: "/web-design-services" },
    { id: "graphic", icon: "Palette", title: "Graphic Designing", summary: "Logos, creatives, and brand systems that make every asset work harder.", href: "/graphic-designing-services" },
    { id: "ecommerce", icon: "ShoppingCart", title: "E-commerce Marketing", summary: "Multi-channel strategies to grow your online store's revenue.", href: "/ecommerce-marketing-agency" },
    { id: "orm", icon: "ShieldCheck", title: "Online Reputation Management", summary: "Monitor, improve, and protect your brand's online reputation.", href: "/digital-marketing-services" },
    { id: "video", icon: "Video", title: "Video Production", summary: "Full-service video marketing from script to motion graphics.", href: "/digital-marketing-services" },
    { id: "cro", icon: "TrendingUp", title: "Conversion Rate Optimization", summary: "Turn more visitors into customers through structured experimentation.", href: "/digital-marketing-services" },
  ],
};

export const partners = {
  eyebrow: "Certified partners",
  logos: [
    { name: "Shopify", initials: "SF" },
    { name: "Google", initials: "GG" },
    { name: "Meta", initials: "MT" },
    { name: "Microsoft", initials: "MS" },
  ],
};

export const testimonial = {
  quote:
    "WebcoreDigital didn't just grow our traffic; they grew our pipeline. Their research-first approach changed how we think about marketing.",
  author: { name: "Priya Shah", role: "Head of Growth", company: "Northwind Health" },
};

export const cta = {
  title: "Ready to take your business to the next level?",
  subtitle:
    "Contact us to work with a results-driven digital marketing agency that puts your customers first.",
  primaryCta: { label: "Contact us", href: "/contact" },
  secondaryCta: { label: "Book a 30-min audit", href: "/contact" },
  reassurance: "No obligation · Free 30-min audit · Reply within 1 business day",
};

export const footer = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Digital Marketing", href: "/digital-marketing-services" },
        { label: "Web Design", href: "/web-design-services" },
        { label: "SEO Services", href: "/search-engine-optimization-seo-service" },
        { label: "Graphic Design", href: "/graphic-designing-services" },
      ],
    },
    {
      title: "More Services",
      links: [
        { label: "SEO Content Writing", href: "/seo-content-writing-services" },
        { label: "E-commerce Marketing", href: "/ecommerce-marketing-agency" },
        { label: "Social Media Marketing", href: "/social-media-marketing-service" },
        { label: "Chicago Agency", href: "/chicago-digital-marketing-agency" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { label: "sales@webcoredigital.com", href: "mailto:sales@webcoredigital.com" },
        { label: "(213) 260-3988", href: "tel:+12132603988" },
      ],
    },
  ],
  legal: { copyright: `© ${new Date().getFullYear()} WebcoreDigital. All rights reserved.` },
};

export const chatbot = {
  botName: "WebcoreDigital Assistant",
  greeting:
    "Hi! I'm the WebcoreDigital assistant. Ask me about our services, process, or how we'd help your business grow.",
  exampleQuestions: [
    "What services do you offer?",
    "Can you help with SEO for my clinic?",
    "How do you measure results?",
    "What does a typical engagement look like?",
  ],
  quickActions: [
    { icon: "Calendar", label: "Book a call", action: "book" },
    { icon: "Mail", label: "Email us", action: "email" },
    { icon: "Gauge", label: "Free audit", action: "audit" },
  ],
  consentText: "We'll only use this to follow up. No spam.",
};
