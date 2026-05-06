"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/lib/data";

const TILES = [...services.items, ...services.items, ...services.items];

function Tile({ icon, title, summary }: { icon: string; title: string; summary: string }) {
  return (
    <div className="flex-shrink-0 w-72 rounded-card border border-ink-100 bg-white p-5 shadow-sm mx-3 hover:border-brand-400 hover:shadow-cardHover transition-all duration-300 group">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h3 className="font-semibold text-brand-900 text-sm leading-snug">{title}</h3>
      </div>
      <p className="mt-3 text-xs text-ink-500 leading-relaxed line-clamp-2">{summary}</p>
    </div>
  );
}

export function MarqueeStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="py-16 md:py-20 overflow-hidden bg-gradient-to-b from-ink-50/60 to-white border-y border-ink-100">
      <div className="container-x mb-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="eyebrow">Our capabilities</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-brand-900">
              Services that move your business forward
            </h2>
          </div>
        </div>
      </div>

      {/* Row 1 — scrolls right to left with scroll parallax */}
      <div className="relative mb-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <motion.div className="flex" style={{ x: x1 }}>
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {TILES.map((s, i) => (
              <Tile key={`r1-${i}`} icon={s.icon} title={s.title} summary={s.summary} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Row 2 — scrolls left to right (reverse) with scroll parallax */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <motion.div className="flex" style={{ x: x2 }}>
          <motion.div
            className="flex"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {[...TILES].reverse().map((s, i) => (
              <Tile key={`r2-${i}`} icon={s.icon} title={s.title} summary={s.summary} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
