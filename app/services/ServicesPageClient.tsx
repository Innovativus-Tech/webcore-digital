"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { Icon } from "@/components/ui/Icon";
import { servicesPage } from "@/lib/pages-data";

export function ServicesPageClient() {
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
            {servicesPage.categories.map((cat, i) => (
              <motion.div
                key={cat.href}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link
                  href={cat.href}
                  className="group flex h-full flex-col rounded-card border border-ink-100 bg-white p-7 transition-all duration-300 hover:border-brand-500 hover:shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon name={cat.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-1 text-lg font-semibold leading-snug">{cat.title}</h3>
                  </div>

                  <p className="mt-4 flex-1 text-sm text-ink-500 leading-relaxed">
                    {cat.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
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
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
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
