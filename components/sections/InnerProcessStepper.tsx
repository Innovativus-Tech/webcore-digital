import type { ProcessStep } from "@/lib/pages-data";

export function InnerProcessStepper({
  heading,
  steps,
}: {
  heading?: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="bg-ink-50 border-y border-ink-100">
      <div className="container-x py-20 md:py-24">
        {heading && <h2 className="mb-12 text-3xl md:text-4xl max-w-2xl">{heading}</h2>}

        {/* Desktop */}
        <div className="hidden md:grid gap-6 relative" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
          <div className="absolute left-0 right-0 top-5 h-px bg-ink-200" aria-hidden />
          {steps.map((s) => (
            <div key={s.number} className="relative">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-brand-500 bg-white font-semibold text-brand-600 relative z-10">
                {s.number}
              </div>
              <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden relative pl-12">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-ink-200" aria-hidden />
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.number} className="relative">
                <div className="absolute -left-12 grid h-10 w-10 place-items-center rounded-full border border-brand-500 bg-white font-semibold text-brand-600">
                  {s.number}
                </div>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-500">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
