import { partners } from "@/lib/data";

function LogoBadge({ initials, name }: { initials: string; name: string }) {
  return (
    <div
      title={name}
      className="flex h-12 min-w-[120px] items-center justify-center gap-2 rounded-lg border border-ink-100 bg-white px-5 grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100 hover:border-brand-500"
    >
      <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-50 text-brand-700 text-xs font-bold">
        {initials}
      </span>
      <span className="text-sm font-semibold text-ink-700">{name}</span>
    </div>
  );
}

export function PartnerStrip() {
  return (
    <section className="container-x py-16 md:py-20">
      <div className="text-center">
        <span className="eyebrow">{partners.eyebrow}</span>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {partners.logos.map((l) => (
          <LogoBadge key={l.name} initials={l.initials} name={l.name} />
        ))}
      </div>
    </section>
  );
}
