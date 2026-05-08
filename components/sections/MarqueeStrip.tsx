"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { InfiniteTileMarquee } from "@/components/motion/InfiniteTileMarquee";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/lib/data";

function ServiceTile({ icon, title, summary }: { icon: string; title: string; summary: string }) {
  return (
    <div className="w-72 rounded-card border border-ink-100 bg-white p-5 shadow-sm hover:border-brand-400 hover:shadow-card transition-all duration-300 group">
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

  // Subtle parallax nudge on scroll
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const tiles = services.items.map((s) => (
    <ServiceTile key={s.id} icon={s.icon} title={s.title} summary={s.summary} />
  ));

  return (
    <section
      ref={ref}
      className="overflow-hidden py-16 md:py-20 bg-gradient-to-b from-ink-50/60 to-white border-y border-ink-100"
    >
      <div className="container-x mb-10">
        <span className="eyebrow">Our capabilities</span>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-brand-900">
          Services that move your business forward
        </h2>
      </div>

      {/* Row 1 — left scroll with parallax */}
      <motion.div style={{ x: x1 }} className="mb-4">
        <InfiniteTileMarquee duration={36} direction="left" gap={12}>
          {tiles}
        </InfiniteTileMarquee>
      </motion.div>

      {/* Row 2 — right scroll with parallax */}
      <motion.div style={{ x: x2 }}>
        <InfiniteTileMarquee duration={44} direction="right" gap={12}>
          {[...tiles].reverse()}
        </InfiniteTileMarquee>
      </motion.div>
    </section>
  );
}
