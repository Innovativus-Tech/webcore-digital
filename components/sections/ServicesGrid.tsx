"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { IconSquare } from "@/components/ui/IconSquare";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-ink-50 border-y border-ink-100">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] lg:leading-tight">{services.title}</h2>
          <p className="mt-4 text-ink-500">{services.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.items.map((s, i) => (
            <motion.a
              key={s.id}
              href="#contact"
              className="group rounded-card border border-ink-100 bg-white p-6 transition hover:border-brand-500 hover:shadow-cardHover focus-ring"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.07 }}
            >
              <IconSquare>
                <Icon name={s.icon} className="h-5 w-5" />
              </IconSquare>
              <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{s.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                Learn more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
