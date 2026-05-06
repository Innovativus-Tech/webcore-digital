import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { Icon } from "@/components/ui/Icon";
import { IconSquare } from "@/components/ui/IconSquare";
import { servicesPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero {...servicesPage.hero} />

        <section className="container-x py-20 md:py-24">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">All services</span>
            <h2 className="mt-3 text-3xl md:text-4xl">How can we help you?</h2>
            <p className="mt-3 text-ink-500">
              Be a leader in your industry with a dynamic digital marketing platform. Pick a
              service category below to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesPage.categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group rounded-card border border-ink-100 bg-white p-7 transition hover:border-brand-500 hover:shadow-cardHover"
              >
                <IconSquare>
                  <Icon name={cat.icon} className="h-5 w-5" />
                </IconSquare>
                <h3 className="mt-5 text-lg font-semibold">{cat.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{cat.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <CTABand />
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
