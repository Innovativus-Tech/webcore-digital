"use client";
import { motion } from "framer-motion";
import { process } from "@/lib/data";

export function ProcessStepper() {
  return (
    <section id="process" className="bg-ink-50 border-y border-ink-100">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {process.eyebrow}
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl md:text-4xl lg:text-[44px] lg:leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          >
            {process.title}
          </motion.h2>
          <motion.p
            className="mt-4 text-ink-500"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.16 }}
          >
            {process.subtitle}
          </motion.p>
        </div>

        {/* Desktop: horizontal */}
        <div className="mt-14 hidden md:grid grid-cols-4 gap-6 relative">
          <div className="absolute left-0 right-0 top-5 h-px bg-ink-200" aria-hidden />
          {process.steps.map((s, i) => (
            <motion.div
              key={s.number}
              className="relative"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
            >
              <motion.div
                className="grid h-10 w-10 place-items-center rounded-full border border-brand-500 bg-white text-brand-600 font-semibold relative z-10"
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "backOut", delay: i * 0.12 + 0.1 }}
              >
                {s.number}
              </motion.div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{s.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 px-3 py-1 text-xs text-accent-600 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                {s.outcome}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical with rail */}
        <div className="mt-10 md:hidden relative pl-12">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-ink-200" aria-hidden />
          <div className="space-y-8">
            {process.steps.map((s, i) => (
              <motion.div
                key={s.number}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="absolute -left-12 grid h-10 w-10 place-items-center rounded-full border border-brand-500 bg-white text-brand-600 font-semibold">
                  {s.number}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-500">{s.description}</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 px-3 py-1 text-xs text-accent-600 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  {s.outcome}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
