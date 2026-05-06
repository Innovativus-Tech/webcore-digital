import { Quote } from "lucide-react";
import { testimonial } from "@/lib/data";

export function TestimonialQuote() {
  return (
    <section className="container-x py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Quote className="mx-auto h-8 w-8 text-brand-500" />
        <blockquote className="mt-6 text-2xl md:text-3xl font-medium text-brand-900 leading-snug">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3 text-sm">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white font-semibold">
            {testimonial.author.name.charAt(0)}
          </div>
          <div className="text-left">
            <div className="font-semibold text-brand-900">{testimonial.author.name}</div>
            <div className="text-ink-500">
              {testimonial.author.role} · {testimonial.author.company}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
