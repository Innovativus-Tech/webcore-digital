import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  centered?: boolean;
};

export function PageHero({ eyebrow, title, subtitle, cta, secondaryCta, centered }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[360px] w-[360px] rounded-full bg-accent-500/15 blur-3xl" />
      </div>

      <div className={`container-x relative py-20 md:py-28 ${centered ? "text-center" : "max-w-3xl"}`}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widemono text-white/80">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl lg:leading-tight">
          {title}
        </h1>
        <p className={`mt-5 text-lg text-white/70 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {subtitle}
        </p>
        {(cta || secondaryCta) && (
          <div className={`mt-8 flex flex-col sm:flex-row gap-3 ${centered ? "justify-center" : ""}`}>
            {cta && (
              <Button href={cta.href} variant="onDark" size="lg">
                {cta.label} <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                size="lg"
                className="bg-transparent text-white border border-white/30 hover:bg-white/10"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
