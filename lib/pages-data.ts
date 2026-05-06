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
    { icon: "Sparkles", title: "Excellence", body: "We innovate and push boundaries in every strategy we execute." },
    { icon: "Users", title: "Collaboration", body: "We work closely with clients to understand goals and develop customized solutions." },
    { icon: "ShieldCheck", title: "Integrity", body: "Transparency and ethical standards form the foundation of every client relationship." },
    { icon: "Lightbulb", title: "Innovation", body: "We stay current with digital trends and leverage cutting-edge tools for your campaigns." },
    { icon: "TrendingUp", title: "Results-oriented", body: "We focus on tangible outcomes, measuring success through data-driven performance metrics." },
    { icon: "BarChart3", title: "Data-driven approach", body: "Insights from extensive research and performance metrics inform every decision we make." },
    { icon: "Heart", title: "Long-term relationship", body: "We build lasting partnerships based on mutual trust, respect, and shared success." },
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

// ─── Pay Per Click Marketing ──────────────────────────────────────────────────

export const ppcPage = {
  meta: {
    title: "Pay Per Click Marketing Service | WebcoreDigital",
    description:
      "Drive immediate traffic and fast ROI with WebcoreDigital's expert PPC management across Google, social media, YouTube, Amazon, and more.",
  },
  hero: {
    eyebrow: "Pay Per Click Marketing Service",
    title: "Profitable PPC Campaigns That Deliver Immediate Results",
    subtitle:
      "Pay-per-click advertising gives you an immediate campaign boost and a fast return on investment. Maintain full control of your paid search and acquire positive business outcomes with targeted PPC services.",
    cta: { label: "Get My Free Proposal", href: "/contact" },
  },
  overview:
    "WebcoreDigital is a digital marketing agency focused on the needs of its clients. The digital landscape keeps growing, and figuring out advertising avenues while maximising all possible conversion paths is the key motive behind every business expansion. With pay-per-click advertising, you only pay when a user clicks your ad — giving you full control over your budget and a clear line of sight from spend to revenue.",
  challenge:
    "Many business websites stay invisible to their target audience despite having good advertising techniques. Online companies face increased competition, changing customer demands, high digital ad expenditure, and varying market standards. PPC cuts through this noise by putting your brand directly in front of people who are actively searching for what you offer.",
  whatIsPpc: {
    heading: "What is Pay Per Click?",
    body: "Pay-per-click marketing is a paid search platform used to build brand awareness, promote brand offerings, and run advertising campaigns across a brand's business ventures. With PPC, advertisers only pay each time a user clicks the ad. PPC goes beyond Google search results pages (SERPs) and the Display Network — social media sites such as YouTube, Facebook, Pinterest, and LinkedIn also use pay-per-click advertising. PPC allows marketers to place ads strategically on different online platforms to make their products and services visible to their target audience.",
  },
  adTypes: [
    {
      icon: "Search",
      title: "Search Ads",
      body: "The most trending form of PPC. Search ads appear to audiences already looking for your industry or brand offerings online — suitable for both short-sale and long-sale cycles to acquire high-quality leads.",
    },
    {
      icon: "Monitor",
      title: "Display Ads",
      body: "Display advertising reaches more than 90% of online users. Ads appear on Google's partner websites, targeting people who have already visited industry-related sites, using photos and text to capture attention.",
    },
    {
      icon: "MessageCircle",
      title: "Social Ads",
      body: "The fastest-growing sector of PPC. Social ads appear on Facebook, LinkedIn, and Twitter, programmed to reach a highly targeted audience — ideal for brands with an active social media presence.",
    },
    {
      icon: "RefreshCw",
      title: "Remarketing Ads",
      body: "One of the best methods to reach high-converting customers. Remarketing ads remind previous visitors about your brand, bringing them back to convert — comparatively cheaper due to less competition and highly targeted segments.",
    },
    {
      icon: "ShoppingCart",
      title: "Google Shopping Ads",
      body: "Shopping ads appear above or beside Google search results, showing your product and price before a user clicks anyone else. Ideal for eCommerce businesses targeting customers with clear buying intent.",
    },
    {
      icon: "Video",
      title: "In-stream Ads",
      body: "Also called YouTube ads, in-stream ads appear on YouTube search results, YouTube videos, and the Display Network. Facebook in-stream ads let you place advertisements in natural breaks within video content.",
    },
    {
      icon: "Mail",
      title: "Gmail Sponsored Promotions",
      body: "An effective way to generate direct leads by reaching interested prospects right in their inboxes. GSPs include a click-to-call feature so audiences can make direct calls and convert at any point in the sales cycle.",
    },
    {
      icon: "MapPin",
      title: "Local Services Ads",
      body: "Local service ads follow a pay-per-lead model — you only pay for clicks that turn into leads. Applicable for HVAC companies, electricians, plumbers, locksmiths, and similar local service providers.",
    },
    {
      icon: "Package",
      title: "Amazon PPC Ads",
      body: "Amazon PPC allows sellers to create brand awareness, boost sales, and place sponsored ads. Our PPC experts organise Amazon PPC campaigns to increase profit margins and grow your marketplace presence.",
    },
  ],
  howItWorks: {
    heading: "How Does Pay Per Click Marketing Work?",
    body: "PPC advertising is a keyword-based marketing tactic. PPC campaign management assigns value to different search terms based on their search volume, difficulty, and competition level. The more advertisers competing for a keyword, the higher the cost. Google PPC and other PPC ads go through an ad auction — an automated process that determines the relevance and validity of advertisements. A good Quality Score boosts ad position and lowers cost per click (CPC). PPC ads must be relevant to the target demographics and include valuable keywords to receive high click-through rates (CTRs) and drive more conversions.",
  },
  stats: [
    { value: "90%+", label: "of online users reached via display ads" },
    { value: "Fast", label: "return on investment vs organic channels" },
    { value: "9", label: "PPC ad types managed by WebcoreDigital" },
  ],
};

// ─── Social Media Marketing ───────────────────────────────────────────────────

export const socialMediaPage = {
  meta: {
    title: "Social Media Marketing Service | WebcoreDigital",
    description:
      "Build brand awareness, drive revenue, and reach 4.57 billion social media users with WebcoreDigital's expert social media marketing services.",
  },
  hero: {
    eyebrow: "Social Media Marketing Service",
    title: "Build Your Brand's Social Presence and Drive Revenue",
    subtitle:
      "Social media channels have become the most important source of news and information in today's world. With 4.57 billion global users, the opportunity to build your brand and drive revenue is enormous.",
    cta: { label: "Get My Free Proposal", href: "/contact" },
  },
  overview:
    "Social media marketing is the utilisation of platforms such as Facebook, Instagram, Twitter, and LinkedIn to establish brand recognition and connect with your audience. It is one of the most critical components of success on an online platform, helping boost brand awareness, drive revenue, and turn customers into brand advocates. WebcoreDigital provides expert social media strategies that are properly laid down, data-driven, and tailored to your industry.",
  features: [
    { icon: "Eye", title: "Better Online Exposure", body: "Platforms like Facebook, Instagram, LinkedIn, and Twitter increase brand exposure and grow client interest organically and through paid campaigns." },
    { icon: "TrendingUp", title: "High Search Rankings", body: "The more people share your content across social media channels, the more traffic is sent to your website, improving your overall search rankings." },
    { icon: "Target", title: "Specific Audience Targeting", body: "Identify your ideal customers by age, location, and online activities, ensuring your message reaches the right people at the right time." },
    { icon: "Users", title: "Improved Customer Reach", body: "54% of online users use social media for product research, and 49% depend on influencer recommendations — we put you in front of both audiences." },
    { icon: "ShieldCheck", title: "Complete Brand Control", body: "You have complete control over your branding, budget, and social media content marketing strategy with full monthly campaign reporting." },
    { icon: "Heart", title: "Enhanced Customer Trust", body: "We help you build thought leadership for your brand and create deep, meaningful connections with your audience that convert to long-term loyalty." },
    { icon: "DollarSign", title: "Increased Profitability", body: "Social media is a cost-effective way to reach your ideal clients and drive measurable revenue without spending a huge amount of money." },
    { icon: "MessageCircle", title: "Multiple Marketing Options", body: "We manage campaigns across Facebook, Instagram, Twitter, LinkedIn, Pinterest, YouTube, Snapchat, WhatsApp, and more." },
  ],
  platforms: [
    { name: "Facebook", body: "The most popular form of online marketing. We develop targeted ad campaigns and engaging content strategies to grow your Facebook presence." },
    { name: "Instagram", body: "Data-tracking tools help measure analytics, identify target audiences, and create content that resonates with your followers." },
    { name: "Twitter", body: "We measure analytics, identify target audiences, and craft timely content strategies that build brand awareness on Twitter." },
    { name: "LinkedIn", body: "We establish a professional reputation and implement the right LinkedIn strategy to generate B2B leads and build industry authority." },
    { name: "YouTube", body: "We improve video quality, develop suitable marketing content, and help customers learn about your target audiences through YouTube." },
    { name: "Pinterest", body: "Each pin is categorised properly with text overlays and keyword-optimised descriptions to drive traffic and product discovery." },
  ],
  stats: [
    { value: "4.57B", label: "global social media users" },
    { value: "54%", label: "of users research products on social media" },
    { value: "49%", label: "of consumers trust influencer recommendations" },
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
