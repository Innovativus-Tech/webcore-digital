import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { IconSquare } from "@/components/ui/IconSquare";

type Category = {
  icon: string;
  title: string;
  summary: string;
  href: string;
  tags?: string[];
};

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  categories: Category[];
};

export function ServiceCategoriesGrid({ eyebrow, heading, subheading, categories }: Props) {
  return (
    <section className="container-x py-20 md:py-24">
      <div className="mb-12 max-w-2xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="mt-3 text-3xl md:text-4xl">{heading}</h2>
        {subheading && <p className="mt-3 text-ink-500">{subheading}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group rounded-card border border-ink-100 bg-white p-7 transition hover:border-brand-500 hover:shadow-cardHover"
          >
            <IconSquare>
              <Icon name={cat.icon} className="h-5 w-5" />
            </IconSquare>
            <h3 className="mt-5 text-lg font-semibold">{cat.title}</h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">{cat.summary}</p>
            {cat.tags && cat.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
              Learn more{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
