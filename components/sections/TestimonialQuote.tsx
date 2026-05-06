import { Quote } from "lucide-react";
import { testimonial as staticTestimonial } from "@/lib/data";

type Props = {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  authorCompany?: string;
};

export function TestimonialQuote(props: Props = {}) {
  const quote = props.quote ?? staticTestimonial.quote;
  const authorName = props.authorName ?? staticTestimonial.author.name;
  const authorRole = props.authorRole ?? staticTestimonial.author.role;
  const authorCompany = props.authorCompany ?? staticTestimonial.author.company;

  return (
    <section className="container-x py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Quote className="mx-auto h-8 w-8 text-brand-500" />
        <blockquote className="mt-6 text-2xl md:text-3xl font-medium text-brand-900 leading-snug">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3 text-sm">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white font-semibold">
            {authorName.charAt(0)}
          </div>
          <div className="text-left">
            <div className="font-semibold text-brand-900">{authorName}</div>
            <div className="text-ink-500">
              {authorRole} · {authorCompany}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
