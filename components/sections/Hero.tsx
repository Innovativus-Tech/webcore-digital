"use client";
import { ArrowRight, Sparkles, TrendingUp, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { hero } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand-100 blur-3xl opacity-60" />
        <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <motion.span className="eyebrow" {...fadeUp(0)}>
            <Sparkles className="h-3.5 w-3.5" /> {hero.eyebrow}
          </motion.span>
          <motion.h1
            className="mt-5 text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.05] font-semibold"
            {...fadeUp(0.1)}
          >
            {hero.title}
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg text-ink-500" {...fadeUp(0.2)}>
            {hero.subtitle}
          </motion.p>
          <motion.div className="mt-8 flex flex-col sm:flex-row gap-3" {...fadeUp(0.3)}>
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
          <motion.div className="mt-8 flex items-center gap-6 text-sm text-ink-500" {...fadeUp(0.38)}>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-500" /> Free 30-min audit
            </span>
            <span>No obligation</span>
          </motion.div>
        </div>

        {/* dashboard-style mock */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative mx-auto w-full max-w-md rounded-card border border-ink-100 bg-white p-5 shadow-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widemono text-ink-500">
                <BarChart3 className="h-3.5 w-3.5" /> Growth dashboard
              </div>
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-ink-200" />
                <span className="h-2 w-2 rounded-full bg-ink-200" />
                <span className="h-2 w-2 rounded-full bg-accent-500" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { k: "Traffic", v: "6×" },
                { k: "Leads", v: "+128%" },
                { k: "ROAS", v: "4.2" },
              ].map((m) => (
                <div key={m.k} className="rounded-lg border border-ink-100 p-3">
                  <div className="text-[10px] font-mono uppercase tracking-widemono text-ink-500">
                    {m.k}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-brand-900">{m.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 h-32 rounded-lg bg-gradient-to-b from-brand-50 to-white p-3">
              <svg viewBox="0 0 300 100" className="h-full w-full">
                <polyline
                  fill="none"
                  stroke="#0B5FFF"
                  strokeWidth="2.5"
                  points="0,80 30,72 60,68 90,55 120,58 150,40 180,44 210,28 240,30 270,18 300,12"
                />
                <polyline
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                  points="0,90 30,86 60,80 90,76 120,70 150,62 180,55 210,48 240,42 270,36 300,30"
                />
              </svg>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent-500/10 p-3 text-sm">
              <TrendingUp className="h-4 w-4 text-accent-600" />
              <span className="text-ink-700">
                <span className="font-semibold text-accent-600">+47%</span> mobile visits this quarter
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
