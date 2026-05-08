"use client";
import { motion } from "framer-motion";
import { BarChart2, TrendingUp } from "lucide-react";
import { resultsDriven as staticData } from "@/lib/data";

type Props = {
  heading?: string;
  body?: string;
};

export function ResultsDrivenSection(props: Props = {}) {
  const heading = props.heading ?? staticData.heading;
  const body = props.body ?? staticData.body;

  return (
    <section className="container-x py-20 md:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left — text */}
        <div className="lg:col-span-7">
          <motion.h2
            className="text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="mt-5 text-ink-600 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {body}
          </motion.p>
        </div>

        {/* Right — visual card (replaces marketing strategy image) */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
        >
          <div className="rounded-card border border-ink-100 bg-brand-900 p-8 text-white shadow-card">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <BarChart2 className="h-5 w-5 text-accent-400" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Marketing Strategy
              </span>
            </div>
            <p className="mt-5 text-brand-200 text-sm leading-relaxed">
              WHAT YOUR MARKETING STRATEGY?
            </p>
            <div className="mt-6 space-y-3">
              {[
                { label: "Organic Search Growth", value: "6×" },
                { label: "Mobile Visit Increase", value: "+47%" },
                { label: "Pageview Growth", value: "+45%" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3">
                  <span className="text-sm text-brand-200">{stat.label}</span>
                  <span className="text-base font-bold text-white flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-accent-400" />
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
