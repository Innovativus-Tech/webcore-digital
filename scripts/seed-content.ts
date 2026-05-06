/**
 * Seeds the PageContent table with all page content from the site.
 * Run:  npx tsx scripts/seed-content.ts
 */
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const pages = [
  {
    slug: "home",
    title: "Home — WebcoreDigital",
    body: `WebcoreDigital is the #1 Digital Marketing Agency — where strategy meets technology. We are a results-driven digital marketing agency. Why choose us: diverse clientele, deep expertise, flexible packages, research-driven process, honesty and ethics, customer-first priority. We take your business to the next level through: generating qualified leads, increasing traffic and visibility, improving branding, boosting sales and customer satisfaction. Outstanding digital experience: rich media, online marketing, analytics, keyword discovery and selection, conversion rate optimization. Proven results: 6x increase in search traffic, 47% increase in mobile visits, 45% increase in pageviews. Contact us to work with a results-driven digital marketing agency. Email: sales@webcoredigital.com Phone: (213) 260-3988.`,
  },
  {
    slug: "about-us",
    title: "About Us — WebcoreDigital",
    body: `WebcoreDigital is a leading digital marketing agency delivering top-notch digital marketing services to businesses across various industries. We were founded on a belief that digital marketing should be measured by business outcomes, not vanity metrics. Our team includes strategists, writers, analysts, and designers who work as an extension of your team. Every engagement starts with research into your market, competitors, and customers. We serve startups to enterprise clients with no cookie-cutter packages. Our values: research first, radical transparency, client-as-partner, outcome obsessed, continuous iteration, industry agnostic. Results: 6x average search traffic uplift, 47% mobile visit growth, 45% pageview increase.`,
  },
  {
    slug: "services",
    title: "Services — WebcoreDigital",
    body: `WebcoreDigital offers a full stack of digital marketing services. Service categories include: Digital Marketing (SEO, PPC, email, social), Web Design and Development (UI/UX, CRO, development), SEO Content Writing (blog, landing pages, copywriting), Search Engine Optimization (technical SEO, local SEO, link building), Graphic Design (branding, creatives, logos), and Chicago Digital Marketing (local SEO, HARO, link building). All services are built to generate measurable business growth.`,
  },
  {
    slug: "web-design-services",
    title: "Web Design Services — WebcoreDigital",
    body: `WebcoreDigital provides professional web design services focused on creating websites that convert visitors into customers. We are a one-stop solution for website needs — redesigning and building from scratch. Services include: custom UI/UX design, conversion rate optimization, fully responsive design, performance-first development, redesign and migration, CMS integration. Our process: Discovery (audit and requirements), Wireframing (structure and flows), Design (high-fidelity on-brand designs), Build and Launch (development, QA, handoff). Results: 3x average lead increase post-redesign, sub-2-second target load time, 100% mobile-responsive delivery.`,
  },
  {
    slug: "digital-marketing-services",
    title: "Digital Marketing Services — WebcoreDigital",
    body: `WebcoreDigital's digital marketing services encompass the digital world. We offer integrated digital marketing strategies tailored to your market, audience, and business goals. Services: Search Engine Optimisation, Pay-Per-Click (PPC) advertising, Social Media Marketing, Email and Lifecycle marketing, Content Marketing, Analytics and Reporting. Business outcomes: more qualified leads, higher traffic and visibility, stronger brand perception, increased sales and revenue. Results: 6x search traffic uplift, 47% mobile visits increase, 45% pageviews increase.`,
  },
  {
    slug: "seo-content-writing-services",
    title: "SEO Content Writing Services — WebcoreDigital",
    body: `WebcoreDigital provides professional SEO content writing services. Our writers conduct thorough research and analysis to produce SEO-friendly, 100% plagiarism-free content. Services include: keyword research and mapping, blog and article writing, landing page copy, plagiarism-free guarantee, brand voice alignment, multi-industry experience. Our content process: Research (keyword and competitor analysis), Brief (content brief with intent and structure), Write (expert writers produce original content), Review and Publish (editorial review, plagiarism check, delivery). Results: 100% plagiarism-free guarantee, 6x organic traffic growth for content clients, 48-hour typical turnaround.`,
  },
  {
    slug: "search-engine-optimization-seo-service",
    title: "SEO Service — WebcoreDigital",
    body: `WebcoreDigital's SEO services significantly improve marketing effectiveness. We specialise in multi-location and franchise SEO, creating location-specific content and campaigns. SEO capabilities: technical SEO (site architecture, Core Web Vitals, schema markup), on-page optimization, link building, local and multi-location SEO, keyword discovery, transparent reporting. SEO process: Audit (technical audit, competitor gap analysis), Strategy (prioritised roadmap), Execute (on-page, content, authority-building), Report (monthly reporting with revenue attribution). Results: 6x average search traffic increase, 45% organic pageview growth, Top 3 target rank for primary keywords.`,
  },
  {
    slug: "graphic-designing-services",
    title: "Graphic Design Services — WebcoreDigital",
    body: `WebcoreDigital offers creative, intuitive, and thought-provoking graphic design services that elevate brand identity. Our designers create visual systems that make your brand instantly recognisable and trusted. Design services include: logo and brand identity, marketing creatives (social graphics, display ads, email headers), web and UI graphics, infographics and data visualisation, print and collateral (brochures, pitch decks, business cards), brand guidelines. All designs are 100% custom — no templates. Results in stronger brand perception, better digital marketing performance, and consistent brand messaging across all channels.`,
  },
  {
    slug: "chicago-digital-marketing-agency",
    title: "Chicago Digital Marketing Agency — WebcoreDigital",
    body: `WebcoreDigital is a results-driven digital marketing agency serving Chicago businesses. We understand the Chicago market — its industries, competitive landscape, and consumers. Location-specific Chicago services: Chicago local SEO (GBP optimisation, citation building), HARO and link building (journalist pitching, backlink acquisition), local content marketing (Chicago-relevant content for neighbourhood-level queries), geo-targeted PPC (campaigns targeted to Chicago zip codes and suburbs), social media for Chicago businesses, local analytics and reporting. Services integrated to enhance brand awareness, earn relevant backlinks, and improve search performance. Results: 6x average traffic growth for local clients, Top 3 local pack target for primary keywords.`,
  },
  {
    slug: "careers",
    title: "Careers — WebcoreDigital",
    body: `WebcoreDigital is hiring talented digital marketers, designers, and developers. We are a team of strategists, creators, and analysts who love solving hard problems for ambitious clients. Company perks: flexible remote-friendly work, fast growth opportunities with real campaigns from day one, great collaborative low-ego culture, annual learning and certification budget. Current openings: Business Development Executive (BDE) - Full Time Sales, Performance Marketer - Full Time Marketing, Graphic Designer - Full Time Design, SEO Executive - Full Time SEO, Video Editor - Full Time Creative, Content Writer - Full Time Content.`,
  },
  {
    slug: "contact",
    title: "Contact Us — WebcoreDigital",
    body: `Contact WebcoreDigital to work with a results-driven digital marketing agency. Email: sales@webcoredigital.com Phone: (213) 260-3988 USA. We offer a free 30-minute strategy audit with no obligation. Reply within 1 business day. Services we can help with: Pay Per Click (PPC), eCommerce Optimization, Email Marketing, Content Creation, Social Media Marketing, Reputation Management, Amazon Marketing, App Development, Web Design, Content Writing, Search Engine Marketing, Graphic Design. Ready to take your business to the next level — get a free proposal.`,
  },
];

async function main() {
  for (const page of pages) {
    await prisma.pageContent.upsert({
      where: { slug: page.slug },
      update: { title: page.title, body: page.body },
      create: page,
    });
    console.log(`Seeded: ${page.slug}`);
  }
  console.log(`\nDone. ${pages.length} pages seeded.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
