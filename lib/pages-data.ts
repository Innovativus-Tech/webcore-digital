// Content map for all inner pages - sourced from webcoredigital.com

export type FeatureItem = { icon: string; title: string; body: string };
export type StatItem = { value: string; label: string };
export type ProcessStep = { number: number; title: string; description: string };

// ─── About Us ───────────────────────────────────────────────────────────────

export const aboutPage = {
  meta: {
    title: "About Us | WebcoreDigital",
    description:
      "Learn about WebcoreDigital, a leading digital marketing agency delivering top-notch services to businesses across industries.",
  },
  hero: {
    eyebrow: "Who we are",
    title: "Your results-driven digital marketing partner",
    subtitle:
      "WebcoreDigital is a leading digital marketing agency delivering top-notch digital marketing services to businesses across various industries. We combine strategy, technology, and creativity to grow brands that matter.",
    cta: { label: "Work with us", href: "/contact" },
  },
  story: {
    heading: "Built around your goals",
    paragraphs: [
      "WebcoreDigital was founded on a simple belief: digital marketing should be measured by business outcomes, not vanity metrics. We are a team of strategists, writers, analysts, and designers who work as an extension of your team.",
      "Every engagement starts with research into your market, your competitors, and your customers. That foundation lets us build campaigns that generate real leads, real traffic, and real revenue for businesses of all sizes.",
      "From startups finding their footing to established brands looking to scale, we adapt our approach to what your specific stage and goals demand. No cookie-cutter packages. No bloated retainers. Just focused, measurable digital marketing.",
    ],
  },
  values: [
    { icon: "FlaskConical", title: "Research first", body: "Every recommendation begins with data. No guessing." },
    { icon: "ShieldCheck", title: "Radical transparency", body: "Clear pricing, honest reporting, no vanity KPIs." },
    { icon: "Users", title: "Client-as-partner", body: "We work as an extension of your team, not a vendor." },
    { icon: "TrendingUp", title: "Outcome obsessed", body: "Traffic and rankings only matter if they drive revenue." },
    { icon: "Repeat2", title: "Continuous iteration", body: "We test, learn, and improve every single month." },
    { icon: "Globe", title: "Industry agnostic", body: "Experience across healthcare, retail, SaaS, local, and more." },
  ],
  stats: [
    { value: "6×", label: "average search traffic uplift" },
    { value: "+47%", label: "mobile visit growth" },
    { value: "+45%", label: "pageview increase" },
    { value: "100%", label: "clients receive custom strategy" },
  ],
};

// ─── Services Hub ────────────────────────────────────────────────────────────

export const servicesPage = {
  meta: {
    title: "Services | WebcoreDigital",
    description:
      "Explore the full range of digital marketing services from WebcoreDigital: SEO, web design, content, PPC, social media, and more.",
  },
  hero: {
    eyebrow: "What we do",
    title: "A full stack of digital marketing services",
    subtitle:
      "From search visibility to conversion design, every service we offer is built to generate measurable business growth.",
    cta: { label: "Get a free quote", href: "/contact" },
  },
  categories: [
    {
      icon: "Search",
      title: "Digital Marketing",
      summary:
        "Integrated strategies across SEO, PPC, email, and social, built around your customer acquisition goals.",
      href: "/digital-marketing-services",
      tags: ["SEO", "PPC", "Email", "Social"],
    },
    {
      icon: "MonitorSmartphone",
      title: "Web Design & Development",
      summary:
        "Professional, conversion-focused websites that elevate your online presence and turn visitors into customers.",
      href: "/web-design-services",
      tags: ["UI/UX Design", "CRO", "Dev"],
    },
    {
      icon: "PenLine",
      title: "SEO Content Writing",
      summary:
        "Research-driven, plagiarism-free content that ranks, educates, and supports your brand messaging.",
      href: "/seo-content-writing-services",
      tags: ["Blog", "Landing Pages", "Copywriting"],
    },
    {
      icon: "BarChart3",
      title: "Search Engine Optimization",
      summary:
        "Technical SEO, on-page optimisation, and link building, including multi-location and franchise SEO.",
      href: "/search-engine-optimization-seo-service",
      tags: ["Technical SEO", "Local SEO", "Link Building"],
    },
    {
      icon: "Palette",
      title: "Graphic Design",
      summary:
        "Creative, intuitive design work that elevates your brand identity and supports every marketing channel.",
      href: "/graphic-designing-services",
      tags: ["Branding", "Creatives", "Logos"],
    },
    {
      icon: "MapPin",
      title: "Chicago Digital Marketing",
      summary:
        "Location-specific campaigns built for Chicago businesses: HARO, local SEO, and targeted brand awareness.",
      href: "/chicago-digital-marketing-agency",
      tags: ["Local SEO", "HARO", "Chicago"],
    },
  ],
};

// ─── Web Design Services ─────────────────────────────────────────────────────

export const webDesignPage = {
  meta: {
    title: "Web Design Services | WebcoreDigital",
    description:
      "Professional, conversion-focused web design services that transform your online presence and turn visitors into customers.",
  },
  hero: {
    eyebrow: "Web Design Services",
    title: "Websites that convert visitors into customers",
    subtitle:
      "We design and develop professional, fast, conversion-focused websites that elevate your brand's online presence, built to generate leads and drive sales, not just look good.",
    cta: { label: "Start your project", href: "/contact" },
  },
  overview:
    "WebcoreDigital is your one-stop solution for all website needs. From redesigning existing sites to building from scratch, we provide answers to both simple and complex web requirements. Our designs are not just aesthetically striking; they are engineered around user behaviour and conversion principles.",
  features: [
    { icon: "Sparkles", title: "Custom UI/UX Design", body: "Tailored interfaces that reflect your brand and guide users toward the actions that matter most to your business." },
    { icon: "Gauge", title: "Conversion Rate Optimisation", body: "Every layout, CTA placement, and page flow is designed to maximise lead generation and sales." },
    { icon: "Smartphone", title: "Fully Responsive", body: "Flawless experiences on mobile, tablet, and desktop. No compromises." },
    { icon: "Zap", title: "Performance-First Build", body: "Fast-loading, Core Web Vitals-optimised sites that rank well and keep users engaged." },
    { icon: "RefreshCw", title: "Redesign & Migration", body: "Refreshing outdated sites while preserving SEO equity and improving the user journey." },
    { icon: "LayoutDashboard", title: "CMS Integration", body: "Easy-to-manage content powered by headless CMS platforms so your team stays in control." },
  ],
  process: [
    { number: 1, title: "Discovery", description: "We audit your current site and map your business goals to design requirements." },
    { number: 2, title: "Wireframing", description: "Structural layouts and user flows before a single pixel of design is committed." },
    { number: 3, title: "Design", description: "High-fidelity, on-brand designs built for real user behaviour." },
    { number: 4, title: "Build & Launch", description: "Pixel-perfect development, QA, and a smooth handoff to your team." },
  ],
  stats: [
    { value: "3×", label: "average lead increase post-redesign" },
    { value: "<2s", label: "target page load time" },
    { value: "100%", label: "mobile-responsive delivery" },
  ],
};

// ─── Digital Marketing Services ──────────────────────────────────────────────

export const digitalMarketingPage = {
  meta: {
    title: "Digital Marketing Services | WebcoreDigital",
    description:
      "Integrated digital marketing strategies tailored to grow your traffic, leads, and ROI, built by WebcoreDigital.",
  },
  hero: {
    eyebrow: "Digital Marketing Services",
    title: "Integrated digital marketing that drives measurable growth",
    subtitle:
      "Customized digital marketing solutions based on deep research, designed to generate qualified leads, increase traffic and visibility, improve branding, and boost sales.",
    cta: { label: "Get your free audit", href: "/contact" },
  },
  overview:
    "WebcoreDigital's services encompass the digital world that goes beyond time and space. We offer a wide range of digital marketing solutions, each one tailored to the specific needs of your market, audience, and business goals. Our integrated approach means all channels work together, not in silos.",
  features: [
    { icon: "Search", title: "Search Engine Optimisation", body: "Technical, on-page, and off-page SEO to rank for the queries that drive revenue." },
    { icon: "Target", title: "Pay-Per-Click (PPC)", body: "Profitable Google, Bing, and social ad campaigns with rigorous bid management." },
    { icon: "MessageCircle", title: "Social Media Marketing", body: "Audience-building and demand generation on the platforms your customers use most." },
    { icon: "Mail", title: "Email & Lifecycle", body: "Automated journeys that nurture leads and turn one-time buyers into loyal customers." },
    { icon: "PenLine", title: "Content Marketing", body: "Editorial strategy and production that builds authority and earns trust at every funnel stage." },
    { icon: "BarChart3", title: "Analytics & Reporting", body: "Honest dashboards and attribution modelling so you know exactly what is working." },
  ],
  outcomes: [
    { icon: "TrendingUp", title: "More qualified leads", body: "Campaigns tuned to attract buyers, not just visitors." },
    { icon: "Eye", title: "Higher traffic & visibility", body: "Dominate the search results and social feeds that matter in your industry." },
    { icon: "Star", title: "Stronger brand perception", body: "Consistent messaging across channels that builds trust at scale." },
    { icon: "DollarSign", title: "Increased sales", body: "Revenue-focused KPIs, not just clicks and impressions." },
  ],
  stats: [
    { value: "6×", label: "search traffic uplift" },
    { value: "+47%", label: "mobile visits" },
    { value: "+45%", label: "pageviews" },
  ],
};

// ─── SEO Content Writing ──────────────────────────────────────────────────────

export const seoContentWritingPage = {
  meta: {
    title: "SEO Content Writing Services | WebcoreDigital",
    description:
      "Professional SEO content writing: in-depth research, plagiarism-free, optimised for rankings and brand messaging.",
  },
  hero: {
    eyebrow: "SEO Content Writing",
    title: "Content that ranks, resonates, and converts",
    subtitle:
      "Our SEO content writers combine deep keyword research with compelling storytelling to produce content that earns top rankings and drives real business outcomes.",
    cta: { label: "Get a content quote", href: "/contact" },
  },
  overview:
    "Great content is the foundation of every successful digital marketing campaign. Our professional writers conduct thorough research and analysis before writing a single word, producing SEO-friendly, 100% plagiarism-free content that both search engines and your audience will value.",
  features: [
    { icon: "Search", title: "Keyword Research & Mapping", body: "Intent-driven keyword strategy mapped to your funnel stages before writing begins." },
    { icon: "FileText", title: "Blog & Article Writing", body: "Long-form content that builds topical authority and earns consistent organic traffic." },
    { icon: "LayoutTemplate", title: "Landing Page Copy", body: "Conversion-focused copy for product and service pages optimised for both rankings and sales." },
    { icon: "ShieldCheck", title: "100% Plagiarism-Free", body: "Every piece is original, verified, and crafted specifically for your brand." },
    { icon: "Edit3", title: "Brand Voice Alignment", body: "We write to match your tone, terminology, and audience, consistently across all content." },
    { icon: "Globe", title: "Multi-Industry Experience", body: "Experience across healthcare, retail, SaaS, legal, local business, and more." },
  ],
  process: [
    { number: 1, title: "Research", description: "Keyword and competitor research to identify the best opportunities." },
    { number: 2, title: "Brief", description: "Detailed content brief covering intent, structure, and brand voice." },
    { number: 3, title: "Write", description: "Expert writers produce original, optimised content." },
    { number: 4, title: "Review & Publish", description: "Editorial review, plagiarism check, and delivery." },
  ],
  stats: [
    { value: "100%", label: "plagiarism-free guarantee" },
    { value: "6×", label: "average organic traffic growth for content clients" },
    { value: "48hr", label: "typical turnaround for standard articles" },
  ],
};

// ─── SEO Service ─────────────────────────────────────────────────────────────

export const seoPage = {
  meta: {
    title: "Search Engine Optimization (SEO) Services | WebcoreDigital",
    description:
      "Comprehensive SEO services including technical SEO, multi-location SEO, and link building to grow your search visibility.",
  },
  hero: {
    eyebrow: "Search Engine Optimization",
    title: "Dominate search results: locally and nationally",
    subtitle:
      "From technical foundations to authoritative link profiles, our SEO service is built to improve your marketing effectiveness and drive sustained organic growth.",
    cta: { label: "Get your SEO audit", href: "/contact" },
  },
  overview:
    "Using WebcoreDigital's SEO services can significantly improve your marketing effectiveness. We specialise in multi-location and franchise SEO, creating location-specific content and campaigns that boost search performance, local visibility, and presence for each market you serve.",
  features: [
    { icon: "Code", title: "Technical SEO", body: "Site architecture, crawlability, Core Web Vitals, schema markup: the invisible foundation every campaign needs." },
    { icon: "FileText", title: "On-Page Optimisation", body: "Title tags, meta descriptions, content structure, and internal linking built for targeted keywords." },
    { icon: "Link", title: "Link Building", body: "White-hat link acquisition strategies to build domain authority and outrank competitors." },
    { icon: "MapPin", title: "Local & Multi-Location SEO", body: "Location-specific content and GBP optimisation for businesses serving multiple areas." },
    { icon: "Search", title: "Keyword Discovery", body: "Intent-mapped research to find the queries that actually drive revenue, not just traffic." },
    { icon: "BarChart3", title: "Transparent Reporting", body: "Monthly reports that connect SEO activity to business outcomes: rankings, traffic, and leads." },
  ],
  process: [
    { number: 1, title: "Audit", description: "Technical audit, competitor gap analysis, and keyword opportunity mapping." },
    { number: 2, title: "Strategy", description: "Prioritised roadmap aligned to your goals and competitive landscape." },
    { number: 3, title: "Execute", description: "On-page fixes, content production, and authority-building campaigns." },
    { number: 4, title: "Report", description: "Monthly reporting with clear attribution from rankings to revenue." },
  ],
  stats: [
    { value: "6×", label: "average search traffic increase" },
    { value: "+45%", label: "organic pageview growth" },
    { value: "Top 3", label: "target rank for primary keywords" },
  ],
};

// ─── Graphic Design ───────────────────────────────────────────────────────────

export const graphicDesignPage = {
  meta: {
    title: "Graphic Designing Services | WebcoreDigital",
    description:
      "Creative, intuitive graphic design services that elevate brand identity and support every digital marketing channel.",
  },
  hero: {
    eyebrow: "Graphic Design Services",
    title: "Design that elevates your brand and drives results",
    subtitle:
      "Creative, intuitive, and thought-provoking design work built to strengthen your brand identity and make every marketing asset work harder.",
    cta: { label: "Start a design project", href: "/contact" },
  },
  overview:
    "Good design is not decoration; it is communication. Our graphic design team creates visual systems that make your brand instantly recognisable and trusted. From logo design to marketing creatives, every asset is crafted with purpose and built to perform across every digital channel.",
  features: [
    { icon: "Fingerprint", title: "Logo & Brand Identity", body: "Distinctive marks and identity systems that communicate your values at a glance." },
    { icon: "Layers", title: "Marketing Creatives", body: "Social graphics, display ads, email headers, and campaign assets, all on-brand." },
    { icon: "Image", title: "Web & UI Graphics", body: "Icons, illustrations, and interface assets designed to enhance user experience." },
    { icon: "FileImage", title: "Infographics & Data Viz", body: "Complex information made simple, designed to engage and earn shares." },
    { icon: "Printer", title: "Print & Collateral", body: "Brochures, pitch decks, business cards, and event materials." },
    { icon: "Repeat2", title: "Brand Guidelines", body: "Comprehensive brand style guides to keep every touchpoint consistent." },
  ],
  stats: [
    { value: "Creative", label: "intuitive and thought-provoking design" },
    { value: "100%", label: "custom, no templates" },
    { value: "Multi", label: "channel-ready assets" },
  ],
};

// ─── Chicago Location Page ────────────────────────────────────────────────────

export const chicagoPage = {
  meta: {
    title: "Chicago Digital Marketing Agency | WebcoreDigital",
    description:
      "WebcoreDigital is a results-driven digital marketing agency serving Chicago businesses: local SEO, HARO, link building, and more.",
  },
  hero: {
    eyebrow: "Chicago Digital Marketing Agency",
    title: "Grow your Chicago business with data-driven marketing",
    subtitle:
      "WebcoreDigital helps Chicago-based businesses and brands targeting the Chicago market to dominate local search, build authority, and generate qualified leads.",
    cta: { label: "Talk to our Chicago team", href: "/contact" },
  },
  overview:
    "We understand the Chicago market: its industries, its competitive landscape, and its consumers. Our location-specific campaigns combine local SEO, HARO-driven link building, and targeted content to enhance brand awareness, earn relevant backlinks, and improve search performance across every Chicago neighbourhood and suburb.",
  features: [
    { icon: "MapPin", title: "Chicago Local SEO", body: "GBP optimisation, location-specific content, and citation building to dominate local search results." },
    { icon: "Link", title: "HARO & Link Building", body: "Earn authoritative backlinks through journalist pitching and strategic link acquisition to boost domain authority." },
    { icon: "Newspaper", title: "Local Content Marketing", body: "Chicago-relevant content that resonates with your local audience and ranks for neighbourhood-level queries." },
    { icon: "Target", title: "Geo-Targeted PPC", body: "Paid campaigns precisely targeted to Chicago zip codes, neighbourhoods, and surrounding suburbs." },
    { icon: "Users", title: "Social Media for Chicago", body: "Community-focused social strategies that build local brand awareness and customer loyalty." },
    { icon: "BarChart3", title: "Local Analytics", body: "Tracking and reporting focused on Chicago-market KPIs: local pack rankings, calls, and directions." },
  ],
  stats: [
    { value: "Local", label: "Chicago market expertise" },
    { value: "6×", label: "average traffic growth for local clients" },
    { value: "Top 3", label: "local pack target for primary keywords" },
  ],
};

// ─── E-commerce Marketing Agency ─────────────────────────────────────────────

export const ecommercePage = {
  meta: {
    title: "E-commerce Marketing Agency | WebcoreDigital",
    description:
      "WebcoreDigital helps online stores grow profitability with multi-channel e-commerce marketing: SEO, PPC, email, content, CRO, and link building.",
  },
  hero: {
    eyebrow: "E-commerce Marketing Agency",
    title: "Increase the Profitability Of Your Online Store",
    subtitle:
      "Give potential customers a step-by-step e-commerce experience, then use multi-channel marketing to turn visitors into loyal buyers.",
    cta: { label: "Get My Free Proposal", href: "/contact" },
  },
  overview: [
    "Give potential customers a step-by-step e-commerce experience, and then use mind-blowing multi-channel e-commerce marketing to persuade them to buy your goods or services. To draw in a larger audience, we start by producing content at the top of the funnel. We develop content that satisfies particular customer demands and nourishes them throughout their purchasing journey as visitors become more interested and begin returning to your e-commerce website.",
    "Prepare to raise brand awareness, spark interest, enhance website traffic, tempt with product visibility, offer incentives to increase click-through rates, and eventually benefit from high conversion rates with the aid of the top e-commerce marketing specialists. With the use of this marketing strategy, businesses can increase sales by turning one-time visitors into loyal followers.",
  ],
  globalSection: {
    heading: "How E-commerce Helps You Drive Globally",
    body: [
      "Nowadays, buyers use their smartphones in every pocket to conduct online local research before making a purchase. Retailers are increasingly introducing the option of online product sales to attract a sizable consumer base that prefers to shop online.",
      "The establishment of an e-commerce website requires investment, and our team has experience building websites that will quickly pay for themselves. Our e-commerce engineers are skilled at meticulously constructing every element of e-commerce websites to increase conversion rates.",
    ],
  },
  servicesIntro:
    "We are skilled in every aspect of e-commerce. We are experts in the art and science of promoting, marketing and maximising your online store. You provide us with as much information as you can about your operations and business objectives. We bring all of our knowledge of technology, marketing, and e-commerce revenue-generating strategies. Together, we develop an online plan that will increase your store's market share, customer base, and overall growth.",
  features: [
    {
      icon: "Search",
      title: "E-commerce SEO Services",
      body: "We optimise your e-commerce site for both search engines and users. We analyse technical SEO factors, conduct extensive keyword analysis, mapping, and targeting to drive organic traffic that converts.",
    },
    {
      icon: "Target",
      title: "Paid Advertising",
      body: "We strategically create PPC and social media ad campaigns using thorough planning and analytics to achieve the greatest results, increasing lead generation and promoting sales through audience research and user targeting.",
    },
    {
      icon: "Mail",
      title: "Email Marketing Services",
      body: "By creating and distributing relevant messages for each stage of the consumer buying cycle, we convert prospects into paying clients through drip campaigns, cart recovery campaigns, and monthly email campaigns.",
    },
    {
      icon: "PenLine",
      title: "Content Marketing Services",
      body: "As a multichannel marketing agency, we write content for your blogs, advertising campaigns, and social media postings to deliver relevant, valuable, and engaging content essential for SEO and brand messaging.",
    },
    {
      icon: "TrendingUp",
      title: "Conversion Rate Improvement",
      body: "We continuously evaluate landing pages, category pages, and product pages to raise your conversion rate by at least 30% in three months. Our CRO method is fine-tuned to drive product sales as the primary KPI.",
    },
    {
      icon: "Link",
      title: "Link Building",
      body: "We use PR expertise and copywriting approaches to create and attract external links to your e-commerce site. A strong link profile improves your search engine rankings and domain authority.",
    },
  ],
  stats: [
    { value: "+30%", label: "minimum conversion rate improvement in 3 months" },
    { value: "6×", label: "average organic traffic growth" },
    { value: "Multi", label: "channel integrated approach" },
  ],
};

// ─── Careers ──────────────────────────────────────────────────────────────────

export const careersPage = {
  meta: {
    title: "Careers | WebcoreDigital",
    description: "Join the WebcoreDigital team. We're hiring talented digital marketers, designers, and developers.",
  },
  hero: {
    eyebrow: "Join our team",
    title: "Build your career at WebcoreDigital",
    subtitle:
      "We're a team of strategists, creators, and analysts who love solving hard problems for ambitious clients. If that sounds like you, we'd love to talk.",
    cta: { label: "See open roles", href: "#openings" },
  },
  perks: [
    { icon: "Laptop", title: "Flexible work", body: "Remote-friendly with flexible hours. We care about output, not clock-watching." },
    { icon: "TrendingUp", title: "Fast growth", body: "Work on real campaigns for real clients from day one. No busy work." },
    { icon: "Users", title: "Great team", body: "Collaborative, low-ego culture where your ideas are heard and acted on." },
    { icon: "GraduationCap", title: "Learning budget", body: "Annual learning & certification budget to keep your skills sharp." },
  ],
  openings: [
    { title: "Business Development Executive (BDE)", type: "Full Time", department: "Sales" },
    { title: "Performance Marketer", type: "Full Time", department: "Marketing" },
    { title: "Graphic Designer", type: "Full Time", department: "Design" },
    { title: "SEO Executive", type: "Full Time", department: "SEO" },
    { title: "Video Editor", type: "Full Time", department: "Creative" },
    { title: "Content Writer", type: "Full Time", department: "Content" },
  ],
};

// ─── Contact Page ─────────────────────────────────────────────────────────────

export const contactPage = {
  meta: {
    title: "Contact Us | WebcoreDigital",
    description:
      "Get in touch with WebcoreDigital. Book a free 30-min strategy audit or send us your project details.",
  },
  hero: {
    eyebrow: "Let's talk",
    title: "Ready to take your business to the next level?",
    subtitle:
      "Contact us to work with a results-driven digital marketing agency. No obligation, just a straight conversation about your goals.",
  },
  services: [
    "Pay Per Click (PPC)",
    "eCommerce Optimization",
    "Email Marketing",
    "Content Creation",
    "Social Media Marketing",
    "Reputation Management",
    "Amazon Marketing",
    "App Development",
    "Web Design",
    "Content Writing",
    "Search Engine Marketing",
    "Graphic Design",
  ],
};
