"use client";
import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { IconSquare } from "@/components/ui/IconSquare";
import { cn } from "@/lib/cn";

const sizeClasses: Record<string, string> = {
  sm: "md:col-span-2",
  md: "md:col-span-2",
  lg: "md:col-span-3",
};

export function WhyChooseUsBento() {
  return (
    <section id="why" className="container-x py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="eyebrow">Why choose us</span>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] lg:leading-tight">
          Built for results and the relationships behind them.
        </h2>
        <p className="mt-4 text-ink-500">
          Six things that shape every engagement. Not slogans; how we operate.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
        {whyChooseUs.map((item, i) => (
          <motion.div
            key={item.id}
            className={cn(
              "group rounded-card border border-ink-100 bg-white p-7 transition hover:border-brand-500 hover:shadow-card",
              sizeClasses[item.size],
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
          >
            <IconSquare>
              <Icon name={item.icon} className="h-5 w-5" />
            </IconSquare>
            <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
