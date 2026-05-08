"use client";
import { motion } from "framer-motion";
import { whyChooseUs as staticItems, resultsDriven as staticResultsDriven } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";

type WhyItem = {
  icon: string;
  title: string;
  body: string;
};

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  items?: WhyItem[];
  showIntro?: boolean;
};

export function WhyChooseUsBento(props: Props = {}) {
  const heading = props.heading ?? staticResultsDriven.whyHeading;
  const items = props.items ?? staticItems;
  const showIntro = props.showIntro ?? true;

  return (
    <section id="why" className="container-x py-20 md:py-28">
      {showIntro && (
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">{heading}</h2>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className="rounded-card border border-ink-100 bg-white overflow-hidden transition hover:border-brand-500 hover:shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
          >
            <div className="bg-brand-500 px-5 py-3 flex items-center gap-2">
              <Icon name={item.icon} className="h-4 w-4 text-white shrink-0" />
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            </div>
            <div className="p-5">
              <p className="text-sm text-ink-600 leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
