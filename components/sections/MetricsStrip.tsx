import { metrics } from "@/lib/data";

export function MetricsStrip() {
  return (
    <section id="metrics" className="border-y border-ink-100 bg-white">
      <div className="container-x grid grid-cols-1 divide-y divide-ink-100 md:grid-cols-3 md:divide-x md:divide-y-0">
        {metrics.map((m) => (
          <div key={m.label} className="group py-10 md:py-14 md:px-10 first:md:pl-0 last:md:pr-0 transition">
            <div className="text-5xl md:text-6xl font-semibold tracking-tightish text-brand-900 transition group-hover:text-accent-600">
              {m.value}
            </div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-widemono text-ink-500">
              {m.label}
            </div>
            <div className="mt-2 text-sm text-ink-700 max-w-xs">{m.context}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
