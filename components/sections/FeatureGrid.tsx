"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { FeatureItem } from "@/lib/pages-data";
import { Icon } from "@/components/ui/Icon";
import { IconSquare } from "@/components/ui/IconSquare";

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  items: FeatureItem[];
  cols?: 2 | 3 | 4;
  /** Dark background variant */
  dark?: boolean;
};

const colClass: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({ eyebrow, heading, subheading, items, cols = 3, dark = false }: Props) {
  const prefersReduced = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : 32, y: prefersReduced ? 12 : 0 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: i * 0.07,
      },
    }),
  };

  const sectionBg = dark ? "bg-brand-900" : "";
  const headingColor = dark ? "text-white" : "";
  const eyebrowColor = dark ? "text-accent-400" : "";
  const subColor = dark ? "text-brand-200" : "text-ink-500";
  const cardBg = dark
    ? "border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent-500/50"
    : "border-ink-100 bg-white hover:border-brand-500 hover:shadow-card";
  const titleColor = dark ? "text-white" : "";
  const bodyColor = dark ? "text-brand-200" : "text-ink-500";

  return (
    <section className={`${sectionBg} container-x py-20 md:py-24`}>
      {heading && (
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
          )}
          <h2 className={`mt-3 text-3xl md:text-4xl ${headingColor}`}>{heading}</h2>
          {subheading && (
            <p className={`mt-3 ${subColor}`}>{subheading}</p>
          )}
        </div>
      )}

      <div className={`grid grid-cols-1 gap-5 ${colClass[cols]}`}>
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`group rounded-card border p-6 transition-all duration-300 ${cardBg}`}
          >
            <IconSquare className={`transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white ${dark ? "bg-white/10 text-accent-400" : ""}`}>
              <Icon name={item.icon} className="h-5 w-5" />
            </IconSquare>
            <h3 className={`mt-4 text-base font-semibold ${titleColor}`}>{item.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${bodyColor}`}>{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
