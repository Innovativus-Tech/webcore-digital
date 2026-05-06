import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { careersPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: careersPage.meta.title,
  description: careersPage.meta.description,
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...careersPage.hero} />

        <FeatureGrid
          eyebrow="Why join us"
          heading="A place to do your best work"
          items={careersPage.perks}
          cols={4}
        />

        {/* Open roles */}
        <section id="openings" className="bg-ink-50 border-y border-ink-100">
          <div className="container-x py-20 md:py-24">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                We&apos;re hiring
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl">Current job openings</h2>
            </div>

            <div className="divide-y divide-ink-100 rounded-card border border-ink-100 bg-white overflow-hidden">
              {careersPage.openings.map((role) => (
                <div
                  key={role.title}
                  className="flex items-center justify-between gap-4 px-6 py-5 hover:bg-ink-50 transition group"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-600 flex-shrink-0 transition group-hover:bg-brand-500 group-hover:text-white">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-brand-900">{role.title}</div>
                      <div className="text-sm text-ink-500">
                        {role.department} · {role.type}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`/contact?role=${encodeURIComponent(role.title)}`}
                    className="flex-shrink-0 inline-flex h-9 items-center gap-1.5 rounded-btn bg-brand-500 px-4 text-sm font-medium text-white hover:bg-brand-600 transition"
                  >
                    Apply now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
