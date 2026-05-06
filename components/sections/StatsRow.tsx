import type { StatItem } from "@/lib/pages-data";

export function StatsRow({ stats, bg = "light" }: { stats: StatItem[]; bg?: "light" | "dark" }) {
  const isDark = bg === "dark";
  return (
    <div className={`${isDark ? "bg-brand-900 text-white" : "bg-ink-50 border-y border-ink-100"}`}>
      <div className="container-x">
        <div className={`grid grid-cols-1 divide-y sm:grid-cols-${stats.length} sm:divide-x sm:divide-y-0 ${isDark ? "divide-white/10" : "divide-ink-100"}`}>
          {stats.map((s) => (
            <div key={s.label} className="py-10 sm:px-8 text-center">
              <div className={`text-4xl font-semibold tracking-tightish ${isDark ? "text-white" : "text-brand-900"}`}>
                {s.value}
              </div>
              <div className={`mt-2 font-mono text-[11px] uppercase tracking-widemono ${isDark ? "text-white/60" : "text-ink-500"}`}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
