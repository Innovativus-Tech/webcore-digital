import { Icon } from "@/components/ui/Icon";
import { IconSquare } from "@/components/ui/IconSquare";

type OutcomeItem = {
  icon: string;
  title: string;
  body: string;
};

type Props = {
  eyebrow?: string;
  heading: string;
  items: OutcomeItem[];
};

export function OutcomesGrid({ eyebrow, heading, items }: Props) {
  return (
    <section className="bg-ink-50 border-y border-ink-100">
      <div className="container-x py-20 md:py-24">
        <div className="mb-12 max-w-2xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-3 text-3xl md:text-4xl">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((o) => (
            <div
              key={o.title}
              className="group rounded-card border border-ink-100 bg-white p-6 transition hover:border-accent-500 hover:shadow-card"
            >
              <IconSquare className="group-hover:bg-accent-500 group-hover:text-white">
                <Icon name={o.icon} className="h-5 w-5" />
              </IconSquare>
              <h3 className="mt-4 text-base font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
