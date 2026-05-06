"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cta as staticCta } from "@/lib/data";

type Props = {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  reassurance?: string;
};

export function CTABand(props: Props = {}) {
  const title = props.title ?? staticCta.title;
  const subtitle = props.subtitle ?? staticCta.subtitle;
  const primaryCta = props.primaryCta ?? staticCta.primaryCta;
  const secondaryCta = props.secondaryCta ?? staticCta.secondaryCta;
  const reassurance = props.reassurance ?? staticCta.reassurance;

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-900 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 -right-20 h-[420px] w-[420px] rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full bg-accent-500/20 blur-3xl" />
      </div>

      <div className="container-x relative py-20 md:py-24">
        <div className="max-w-3xl">
          <motion.h2
            className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="border-b-4 border-accent-500 pb-1">
              {title.split(" ").slice(-2).join(" ")}
            </span>
          </motion.h2>
          <motion.p
            className="mt-5 text-lg text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          >
            <Button href={primaryCta.href} variant="onDark" size="lg">
              {primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                size="lg"
                className="bg-transparent text-white border border-white/30 hover:bg-white/10"
              >
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
          {reassurance && (
            <motion.p
              className="mt-6 text-sm text-white/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {reassurance}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
