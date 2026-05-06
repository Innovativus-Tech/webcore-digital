"use client";
import Link from "next/link";
import { footer, site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink-100 bg-ink-50">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-semibold text-brand-900">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-white text-sm font-bold">W</span>
              <span>{site.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-500">
              A results-driven digital marketing agency built around your customer. Strategy, execution, and measurement.
            </p>
            <form className="mt-6 flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="h-10 flex-1 rounded-btn border border-ink-200 bg-white px-3 text-sm focus-ring"
              />
              <button className="h-10 rounded-btn bg-brand-900 px-4 text-sm font-medium text-white hover:bg-brand-700 transition">
                Subscribe
              </button>
            </form>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-500">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-ink-700 hover:text-brand-600 transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-ink-100 pt-6 text-xs text-ink-500 md:flex-row md:items-center">
          <span>{footer.legal.copyright}</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand-600">Privacy</Link>
            <Link href="#" className="hover:text-brand-600">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
