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
      title: "Digital Marketing Services",
      summary:
        "Integrated strategies across SEO, PPC, email, social, content, ORM, video, and CRO — all tailored to your customer acquisition goals.",
      href: "/digital-marketing-services",
      tags: ["SEO", "PPC", "Email", "Social"],
    },
    {
      icon: "Target",
      title: "Pay Per Click Marketing",
      summary:
        "Profitable PPC campaigns across Search, Display, Social, Remarketing, Google Shopping, YouTube, Gmail, Local Services, and Amazon Ads.",
      href: "/pay-per-click-marketing-service",
      tags: ["Google Ads", "Amazon PPC", "Social Ads"],
    },
    {
      icon: "MessageCircle",
      title: "Social Media Marketing",
      summary:
        "Build brand awareness and drive revenue across Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest, and Snapchat.",
      href: "/social-media-marketing-service",
      tags: ["Facebook", "Instagram", "LinkedIn"],
    },
    {
      icon: "BarChart3",
      title: "Search Engine Optimization",
      summary:
        "Technical SEO, on-page optimisation, link building, local SEO, Amazon SEO, Shopify SEO, and franchise SEO.",
      href: "/search-engine-optimization-seo-service",
      tags: ["Technical SEO", "Local SEO", "Link Building"],
    },
    {
      icon: "PenLine",
      title: "SEO Content Writing",
      summary:
        "Research-driven, plagiarism-free content that ranks, educates, and converts — from blog posts to landing page copy.",
      href: "/seo-content-writing-services",
      tags: ["Blog", "Landing Pages", "Copywriting"],
    },
    {
      icon: "MonitorSmartphone",
      title: "Web Design & Development",
      summary:
        "Custom corporate, eCommerce, and mobile-responsive websites built to convert visitors into customers.",
      href: "/web-design-services",
      tags: ["UI/UX Design", "CRO", "eCommerce"],
    },
    {
      icon: "Palette",
      title: "Graphic Designing Services",
      summary:
        "Logos, branding, social media graphics, motion graphics, marketing materials, and presentations — all 100% custom.",
      href: "/graphic-designing-services",
      tags: ["Branding", "Logo Design", "Motion Graphics"],
    },
    {
      icon: "ShoppingCart",
      title: "E-commerce Marketing",
      summary:
        "Multi-channel e-commerce marketing — SEO, PPC, email, content, CRO, and link building to grow your online store's revenue.",
      href: "/ecommerce-marketing-agency",
      tags: ["eCommerce SEO", "PPC", "CRO"],
    },
    {
      icon: "MapPin",
      title: "Chicago Digital Marketing",
      summary:
        "Location-specific campaigns for Chicago businesses: local SEO, HARO link building, geo-targeted PPC, and local content.",
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
      "Web design services for creating custom websites to boost sales. WebcoreDigital builds corporate, eCommerce, mobile-friendly, and personalised websites.",
  },
  hero: {
    eyebrow: "Web Design Services",
    title: "Web Design Services For Creating Custom Websites To Boost Sales",
    subtitle:
      "You need a website that serves as a digital representation of your business organisation. Our important ingredients for a top-notch, precise, and distinctive website design are originality, dedication, and client happiness.",
    cta: { label: "Get My Free Proposal", href: "/contact" },
  },
  overview:
    "A web design agency can provide you with a one-of-a-kind website design appropriate for your business or personal website. WebcoreDigital provides the best website design services to meet the needs of many niche markets, including corporations, medium-sized and large organisations, professions, eCommerce platforms, and many more. We consider everything — including the navigation and colour style — to create a design that complements your brand and offers your customers a pleasurable browsing experience.",
  features: [
    { icon: "Building2", title: "Corporate Website Design", body: "We help you build a reputation for your brand. A stylish and informative website customised to your needs and business niche, geared to the objectives that your brand represents." },
    { icon: "ShoppingCart", title: "eCommerce Websites", body: "Visually appealing web design with multiple categories applicable to your business and straightforward call-to-action buttons to make the site easier to use and increase conversions." },
    { icon: "Fingerprint", title: "Personalised Website", body: "As an experienced website design company, we guarantee to create a website that instils confidence in your targeted audience about your ability to give service." },
    { icon: "LayoutTemplate", title: "Page Layout Design", body: "The first thing a potential buyer sees is your landing page. We create landing pages that awe the viewer and emphasise your company's goals and results to keep them engaged." },
    { icon: "Smartphone", title: "Mobile-Friendly Web Design", body: "Invest in responsive web design that provides your customers with a flexible, fluid experience across all devices — mobile, tablet, and desktop." },
    { icon: "PenLine", title: "Wireframing", body: "Our knowledgeable professionals demonstrate the fundamental structure and components of your website across various web pages, giving you a clear feel of how people will perceive your site." },
    { icon: "Palette", title: "Graphic Design", body: "We design specialised blog pages and visual elements for your website to present material specific to your sector in an engaging and brand-consistent way." },
    { icon: "Fingerprint", title: "Logo Design", body: "Your brand will be identified by your logo — it should be exceptional and exalted. We edit existing logos or develop magnificent, one-of-a-kind logos tailored to your brand identity." },
  ],
  process: [
    { number: 1, title: "Discovery", description: "We audit your current site and map your business goals to design requirements." },
    { number: 2, title: "Wireframing", description: "Structural layouts and user flows before a single pixel of design is committed." },
    { number: 3, title: "Design", description: "High-fidelity, on-brand designs built for real user behaviour." },
    { number: 4, title: "Build & Launch", description: "Pixel-perfect development, QA, and a smooth handoff to your team." },
  ],
  stats: [
    { value: "3×", label: "average lead increase post-redesign" },
    { value: "<1wk", label: "turnaround for simple websites" },
    { value: "100%", label: "mobile-responsive delivery" },
  ],
};

// ─── Digital Marketing Services ──────────────────────────────────────────────

export const digitalMarketingPage = {
  meta: {
    title: "Digital Marketing Services | WebcoreDigital",
    description:
      "Integrated digital marketing strategies tailored to grow your traffic, leads, and ROI. WebcoreDigital serves Chicago, Los Angeles, Miami, Arizona, and more.",
  },
  hero: {
    eyebrow: "Digital Marketing Services",
    title: "Integrated digital marketing that drives measurable growth",
    subtitle:
      "When seeking a product or service, over 75% of customers first research online. WebcoreDigital creates targeted campaigns that generate measurable outcomes and bring in high-quality leads for your business.",
    cta: { label: "Get My Free Proposal", href: "/contact" },
  },
  overview:
    "Webcore Digital is a digital marketing business that focuses on the needs of its clients and strives to fulfill all of their requirements. Because of our adaptability and faith in our marketing ability, we are convinced that we can bring in customers for you. We are not static — we believe in changing strategies as per requirements and circumstances. You can rely on Webcore Digital to modify the internet marketing services they provide to fulfill criteria unique to your business. We become an essential member of your organization rather than merely functioning as an agency. We also provide our professional digital marketing services in Chicago, Los Angeles, Miami, Arizona, and many more locations.",
  features: [
    { icon: "BarChart3", title: "Franchise SEO", body: "Reach more customers and improve your business reputation with location-specific content, geo-modified service pages, and consistent brand management across all your franchise locations." },
    { icon: "Search", title: "Search Engine Optimisation", body: "Thorough keyword research, on-page and off-page optimisation, and Google Search Console tracking to increase your organic rankings and drive high-quality traffic and leads." },
    { icon: "MessageCircle", title: "Social Media Marketing", body: "Social media plans that keep your audience interested, using data and analytics for brand management and paid advertising strategies tailored to your goals." },
    { icon: "MonitorSmartphone", title: "Web Design", body: "Niche-specific websites built by WordPress experts with in-depth sector research, accessible design, and ongoing maintenance to attract your ideal customers." },
    { icon: "Target", title: "PPC Management", body: "Data-driven pay-per-click campaigns with expert bid optimisation, custom ad creation, ROI tracking, and seasonal trend strategies to maximise leads and visitors." },
    { icon: "PenLine", title: "Content Writing", body: "SEO-driven content that follows Google's guidelines, with attention-grabbing headlines, high-performing keywords, and graphics that make reading simple and enjoyable." },
    { icon: "Video", title: "Video Production", body: "Full-service video marketing from location scouting and scriptwriting to motion graphics and editing — powerful storytelling that takes your brand to the next level." },
    { icon: "ShieldCheck", title: "Online Reputation Management", body: "Improve your ratings, monitor reviews, post responses, and streamline operations with cutting-edge ORM tools to get more positive reviews." },
    { icon: "ShoppingCart", title: "eCommerce Marketing", body: "eCommerce SEO and PPC solutions to capture top-of-funnel traffic, drive product reviews, optimise product pages, and adjust marketing to customer needs." },
    { icon: "Mail", title: "Email Marketing", body: "Personalised email newsletters that avoid spam folders, build your customer database, and include powerful content that increases the likelihood of customer action." },
    { icon: "TrendingUp", title: "Conversion Rate Optimisation", body: "Optimise your website for mobile and voice search, create uncluttered landing pages, add verified payment methods, and simplify navigation to increase purchases." },
    { icon: "Globe", title: "Web Hosting", body: "Network monitoring, system backup and restoration, malware scanning, WordPress speed optimisation, unlimited bandwidth, DDoS protection, and a free SSL certificate." },
    { icon: "Layers", title: "Web Design & Development", body: "Custom-built, SEO-optimised, mobile-responsive websites with visual hierarchy, clear CTAs, easy-to-fill form fields, and persona-based content to drive conversions." },
    { icon: "Link", title: "Link Building", body: "High-authority backlink generation through sponsored ads, sponsorships, collaborations, data-driven infographics, and guest blogging to increase sales and build trust." },
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
      "Boost your online presence with WebcoreDigital's SEO content writing: keyword research, plagiarism-free writing, and content optimised to rank and convert.",
  },
  hero: {
    eyebrow: "SEO Content Writing Services",
    title: "Boosting Online Presence and Driving Results",
    subtitle:
      "A strong online presence is crucial for organisations to thrive in today's digital world. Businesses need high-quality content optimised for search engines — this is where our SEO content writing services come into play.",
    cta: { label: "Get My Free Proposal", href: "/contact" },
  },
  overview:
    "SEO content writing involves creating valuable, relevant, and optimised content that ranks well in search engine results pages (SERPs). It is a strategic approach that combines the art of writing with the science of search engine algorithms. SEO content not only attracts search engine traffic but also engages and converts visitors into customers.",
  features: [
    { icon: "Eye", title: "Enhanced Visibility", body: "With billions of websites competing for attention, appearing on the first page of search results is vital. Our SEO content ensures your website ranks higher, driving organic traffic and increasing online visibility." },
    { icon: "Target", title: "Targeted Traffic", body: "By incorporating relevant keywords and phrases, our SEO writers attract highly targeted traffic — people actively searching for the products or services you offer, increasing the chances of conversion." },
    { icon: "Users", title: "User Experience", body: "Our SEO content not only caters to search engines but also delivers a seamless user experience. Engaging, easy-to-read content keeps visitors on your website longer, reducing bounce rates and increasing conversions." },
    { icon: "ShieldCheck", title: "Credibility and Authority", body: "Well-crafted, informative, and authoritative content positions your business as an industry expert, building trust with your audience and establishing credibility that leads to an increased brand reputation." },
    { icon: "TrendingUp", title: "Improved Search Engine Rankings", body: "We optimise your website's content with relevant keywords, meta tags, headings, and on-page elements to improve visibility on SERPs, leading to higher organic traffic and better search rankings." },
    { icon: "Star", title: "Competitive Advantage", body: "In today's digital landscape, competition is fierce. Our SEO content writing gives you a competitive advantage by optimising your website to stand out from competitors and capture a larger share of your target market." },
  ],
  process: [
    { number: 1, title: "Research", description: "Keyword and competitor research to identify the best opportunities for your industry." },
    { number: 2, title: "Brief", description: "Detailed content brief covering intent, structure, and brand voice." },
    { number: 3, title: "Write", description: "Expert writers produce original, optimised, and engaging content." },
    { number: 4, title: "Review & Publish", description: "Editorial review, plagiarism check, on-page optimisation, and delivery." },
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
    title: "Search Engine Optimization (SEO) Service | WebcoreDigital",
    description:
      "Need more traffic and leads? WebcoreDigital provides comprehensive SEO services: technical SEO, local SEO, link building, Amazon SEO, Shopify SEO, and more.",
  },
  hero: {
    eyebrow: "Search Engine Optimization (SEO) Service",
    title: "Rank higher, get more traffic, and grow your leads",
    subtitle:
      "SEO is the key to ranking at the top of search results. WebcoreDigital can provide you with the best SEO strategies — and SEO is always working for your business, even when you're not.",
    cta: { label: "Get My Free Proposal", href: "/contact" },
  },
  overview:
    "Need help ranking your website or need more traffic and leads? We at WebcoreDigital can help you with the problem and get you to the top. A lot of times, organisations know they want to rank at the top but are unaware of how. Well, SEO is the key. SEO should be thought of as a worker: you can't stop working on SEO. It is always working for your business, even when you're not there — customers find their way to your website and learn what your business has to offer.",
  features: [
    { icon: "Link", title: "Link Building", body: "Backlinks are an important aspect of moving up in search results. We work with a team dedicated to link building with connections to high-quality, niche-relevant websites." },
    { icon: "Search", title: "Keyword Research & Strategy", body: "We analyse your current ranking keywords, take your keyword wishlist into account, and conduct additional research to build a list that makes the most sense for your site and industry." },
    { icon: "Code", title: "Technical SEO", body: "Improving back-end elements like page load speed makes it easier for search engines to index your content, improving rankings and user satisfaction." },
    { icon: "BarChart3", title: "Franchise SEO", body: "We publish location-specific content, use Nextdoor ads, and create unique web designs to give your franchise a bigger impact and bring in more leads and revenue." },
    { icon: "Globe", title: "Off-Page SEO", body: "Off-page optimisation builds trust and exposure through social media marketing, link building, and influencer outreach to earn qualified links and positive reviews." },
    { icon: "FileText", title: "On-Page SEO", body: "Original keyword-rich content, optimised headlines and HTML tags, and high-resolution images — all aligned with search engine best practices to boost credibility." },
    { icon: "MapPin", title: "Local SEO", body: "64% of customers search for local businesses online. We optimise your Google Business Profile so you attract customers in your area who are ready to buy." },
    { icon: "Package", title: "Amazon SEO", body: "Make your business stand out on Amazon. We optimise product listings and use goal-oriented Amazon Marketing Services (AMS) solutions to get your products in front of the right buyers." },
    { icon: "ShoppingCart", title: "Shopify SEO", body: "Shopify SEO analysis, web design, paid advertising, and review response publications to give your customers a better overall Shopify experience." },
    { icon: "MonitorSmartphone", title: "eCommerce SEO", body: "Personalised brand experiences, targeted email marketing campaigns, mobile and voice search readiness, and Walmart Marketplace integration to increase sales around the clock." },
    { icon: "TrendingUp", title: "Conversion Rate Optimisation", body: "We combine PPC with SEO, analyse websites, optimise landing pages, and run A/B testing to maximise customer lifetime value and grow online sales." },
    { icon: "PenLine", title: "Content Writing", body: "Our writers produce SEO-optimised blog posts and service and product page updates. Search engines favour websites that regularly publish fresh, valuable content." },
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
      "Welcome to the world of graphic design solutions. WebcoreDigital creates logos, social media visuals, web designs, motion graphics, and marketing materials.",
  },
  hero: {
    eyebrow: "Graphic Designing Services",
    title: "Where imagination and practicality create compelling visual narratives",
    subtitle:
      "In the current digital age, establishing a powerful visual presence is crucial. With billions of people using the internet worldwide, the future of business is online — and having the best first impression makes all the difference.",
    cta: { label: "Get My Free Proposal", href: "/contact" },
  },
  overview:
    "At Webcore Digital, we are passionate about using graphic design's attractive abilities to assist you in captivating your audience and achieving your objectives. We provide specialised solutions catered to your unique requirements — whether you are a startup in need of a brand identity or an established business wanting to update your visual presence. Our professional team has a thorough grasp of design trends and can turn your notions into aesthetically appealing works of art.",
  whyChoose: [
    { icon: "Sparkles", title: "Customised Solutions", body: "Every business is different, therefore every client has different design needs. We develop designs in line with your objectives that appeal to your target audience." },
    { icon: "Users", title: "Teamwork and Collaboration", body: "We respect your feedback and think that teamwork leads to the best ideas. Our designers are superb listeners who take time to comprehend your objectives, target market, and tastes." },
    { icon: "Star", title: "Professional Group", body: "Our outstanding team of graphic design professionals have a thorough grasp of design trends and concepts, turning your ideas into aesthetically appealing works of art." },
    { icon: "Clock", title: "Seamless and On-Schedule Delivery", body: "We respect your time and are aware of the significance of meeting deadlines. From early concept talks through final delivery, you can count on a smooth and quick design process." },
  ],
  features: [
    { icon: "Fingerprint", title: "Logo Designing Services", body: "A logo is your brand's most important visual identity component. We create distinctive logos that represent your company message and set you apart from competitors." },
    { icon: "MonitorSmartphone", title: "Website Designing Services", body: "SEO-friendly, aesthetically attractive website designs that create a great first impression and turn visitors into customers." },
    { icon: "MessageCircle", title: "Social Media Graphics", body: "Eye-catching social media visuals designed to increase brand awareness, drive engagement, and grow your audience across all platforms." },
    { icon: "Palette", title: "Branding Design Services", body: "Develop customer loyalty and brand repute with unified branding — from colour palettes and typography to complete visual identity systems." },
    { icon: "Layers", title: "Marketing Material Design", body: "Flyers, brochures, business cards, and banners — professional print and digital marketing materials that leave a lasting impression." },
    { icon: "Video", title: "Motion Graphics Services", body: "Brand-consistent animated graphics for video, web, and social media that communicate complex ideas in a visually engaging way." },
    { icon: "LayoutTemplate", title: "Landing Page Design", body: "Conversion-focused UI/UX designs for landing pages that emphasise your company's goals and drive visitors toward taking action." },
    { icon: "FileImage", title: "Illustrations Design", body: "Customised illustrations aligned with your brand identity, helping you express complicated ideas in a visually appealing and simple-to-understand way." },
    { icon: "Presentation", title: "Presentation Design", body: "PowerPoint and pitch deck designs that leave an impact on your audience and communicate your ideas with professionalism and clarity." },
    { icon: "Repeat2", title: "Ad Original Designing", body: "Dynamic and motion ad concepts for digital advertising campaigns that capture attention and drive clicks across all online platforms." },
  ],
  stats: [
    { value: "100%", label: "custom designs, no templates" },
    { value: "On-time", label: "delivery on every project" },
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
