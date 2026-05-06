import { Button } from "@/components/ui/Button";

type Props = {
  eyebrow?: string;
  heading: string;
  body: string | string[];
  cta?: { label: string; href: string };
};

export function OverviewSection({ eyebrow, heading, body, cta }: Props) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <section className="container-x py-20 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-3 text-3xl md:text-4xl">{heading}</h2>
          {cta && (
            <div className="mt-8">
              <Button href={cta.href}>{cta.label}</Button>
            </div>
          )}
        </div>
        <div className="md:col-span-7 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-ink-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
