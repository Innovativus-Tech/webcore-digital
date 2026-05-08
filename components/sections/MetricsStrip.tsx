import { metrics as staticMetrics } from "@/lib/data";

type MetricItem = { value: string; label: string; context?: string };

type Props = {
  items?: MetricItem[];
};

export function MetricsStrip({ items }: Props = {}) {
  const data = items ?? staticMetrics;
  return (
    <section id="metrics" className="container-x py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left — heading */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold md:text-4xl">
            Boost your <span className="text-accent-600">conversion rate</span>
          </h2>
          <a
            href="/contact"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-btn bg-brand-500 px-6 text-sm font-semibold text-white hover:bg-brand-600 transition"
          >
            Book a free consultation
          </a>
        </div>

        {/* Right — stats */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-3 gap-6">
            {data.map((m, i) => {
              const colors = ["text-brand-600", "text-accent-600", "text-purple-600"];
              return (
                <div key={m.label} className="text-center">
                  <div className={`text-5xl font-bold md:text-6xl ${colors[i % colors.length]}`}>
                    {m.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-ink-700">{m.context ?? m.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
