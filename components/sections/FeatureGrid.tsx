import type { FeatureItem } from "@/lib/pages-data";
import { Icon } from "@/components/ui/Icon";
import { IconSquare } from "@/components/ui/IconSquare";

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  items: FeatureItem[];
  cols?: 2 | 3 | 4;
};

const colClass: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({ eyebrow, heading, subheading, items, cols = 3 }: Props) {
  return (
    <section className="container-x py-20 md:py-24">
      {heading && (
        <div className="mb-12 max-w-2xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-3 text-3xl md:text-4xl">{heading}</h2>
          {subheading && <p className="mt-3 text-ink-500">{subheading}</p>}
        </div>
      )}

      <div className={`grid grid-cols-1 gap-4 ${colClass[cols]}`}>
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-card border border-ink-100 bg-white p-6 transition hover:border-brand-500 hover:shadow-card"
          >
            <IconSquare>
              <Icon name={item.icon} className="h-5 w-5" />
            </IconSquare>
            <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
