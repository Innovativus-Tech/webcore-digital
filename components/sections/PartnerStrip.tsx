"use client";
import { InfiniteTileMarquee } from "@/components/motion/InfiniteTileMarquee";
import { partners as staticPartners } from "@/lib/data";

type Logo = { name: string; initials: string };

function PartnerBadge({ name, initials }: Logo) {
  return (
    <div
      title={name}
      className="flex h-20 w-48 items-center justify-center gap-3 rounded-card border border-ink-100 bg-white px-6 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:border-brand-400 hover:shadow-card"
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-700 text-sm font-bold flex-shrink-0">
        {initials}
      </span>
      <span className="text-sm font-semibold text-ink-700">{name}</span>
    </div>
  );
}

type Props = {
  logos?: Logo[];
};

export function PartnerStrip({ logos }: Props = {}) {
  const data = logos ?? staticPartners.logos;

  const tiles = data.map((l) => <PartnerBadge key={l.name} {...l} />);

  return (
    <section className="overflow-hidden bg-ink-50 border-y border-ink-100 py-16 md:py-20">
      <div className="container-x mb-10 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">
          OUR <span className="text-accent-600">PARTNERS</span>
        </h2>
        <p className="mt-2 text-sm text-ink-500">Certified and recognised by the world's leading platforms</p>
      </div>

      <InfiniteTileMarquee
        duration={20}
        direction="left"
        gap={16}
        fadeColor="from-ink-50"
      >
        {tiles}
      </InfiniteTileMarquee>
    </section>
  );
}
