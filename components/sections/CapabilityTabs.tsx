"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { capabilities as staticCapabilities } from "@/lib/data";
import { cn } from "@/lib/cn";

type Tab = {
  id: string;
  label: string;
  description: string;
  bullets?: string[];
};

type Props = {
  title?: string;
  subtitle?: string;
  tabs?: Tab[];
};

export function CapabilityTabs(props: Props = {}) {
  const title = props.title ?? staticCapabilities.title;
  const subtitle = props.subtitle ?? staticCapabilities.subtitle;
  const tabs = props.tabs ?? staticCapabilities.tabs;

  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  if (!tab) return null;

  return (
    <section className="container-x py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="eyebrow">Capabilities</span>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] lg:leading-tight">{title}</h2>
        <p className="mt-4 text-ink-500">{subtitle}</p>
      </div>

      {/* Tabs row (desktop) */}
      <div className="mt-12 hidden md:block">
        <div className="flex flex-wrap gap-2 border-b border-ink-100" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === active}
              onClick={() => setActive(t.id)}
              className={cn(
                "relative px-4 py-3 text-sm font-medium transition focus-ring rounded-t-md",
                t.id === active ? "text-brand-900" : "text-ink-500 hover:text-brand-900",
              )}
            >
              {t.label}
              {t.id === active && (
                <span className="absolute left-2 right-2 -bottom-px h-0.5 bg-brand-500" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-10 pt-10">
          <div className="col-span-7">
            <h3 className="text-2xl font-semibold">{tab.label}</h3>
            <p className="mt-3 text-ink-500 leading-relaxed">{tab.description}</p>
            {tab.bullets && (
              <ul className="mt-6 space-y-3">
                {tab.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent-500/15 text-accent-600">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-ink-700">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-span-5">
            <div className="rounded-card border border-ink-100 bg-gradient-to-br from-brand-50 to-white p-6 h-full min-h-[260px] grid place-items-center">
              <div className="text-center">
                <div className="font-mono text-[11px] uppercase tracking-widemono text-brand-500">
                  {tab.label}
                </div>
                <div className="mt-3 text-3xl font-semibold text-brand-900">{tab.bullets?.length ?? 0} core capabilities</div>
                <div className="mt-2 text-sm text-ink-500">Tailored to your goals</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="mt-10 md:hidden space-y-3">
        {tabs.map((t) => (
          <details key={t.id} className="group rounded-card border border-ink-100 bg-white p-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-semibold">
              {t.label}
              <span className="text-brand-500 transition group-open:rotate-45 text-xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-sm text-ink-500">{t.description}</p>
            {t.bullets && (
              <ul className="mt-3 space-y-2">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
                    <Check className="h-4 w-4 text-accent-600 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
