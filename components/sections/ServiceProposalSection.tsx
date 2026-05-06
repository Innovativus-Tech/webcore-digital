"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

function ProposalForm({ service }: { service: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, services: [service] }),
    }).catch(() => {});
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-accent-500/15">
          <Check className="h-8 w-8 text-accent-600" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-brand-900">Proposal request sent!</h3>
        <p className="mt-2 text-sm text-ink-500 max-w-sm">
          Our team will review your details and get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-ink-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="h-11 w-full rounded-btn border border-ink-200 px-3 text-sm focus-ring"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-ink-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="h-11 w-full rounded-btn border border-ink-200 px-3 text-sm focus-ring"
          />
        </div>
        <div className="space-y-1 sm:col-span-2">
          <label className="text-xs font-medium text-ink-700">Phone</label>
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="h-11 w-full rounded-btn border border-ink-200 px-3 text-sm focus-ring"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-ink-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full rounded-btn border border-ink-200 px-3 py-2.5 text-sm focus-ring resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 items-center gap-2 rounded-btn bg-brand-500 px-6 text-base font-medium text-white hover:bg-brand-600 disabled:opacity-50 transition focus-ring"
      >
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        Get Started
      </button>
    </form>
  );
}

interface Props {
  /** One or more paragraphs shown on the left side */
  paragraphs: string[];
  /** Service name sent with the lead (e.g. "SEO Service") */
  service: string;
}

export function ServiceProposalSection({ paragraphs, service }: Props) {
  return (
    <section className="container-x py-20 md:py-24">
      <div className="grid gap-14 lg:grid-cols-12">
        {/* Left — overview text */}
        <div className="lg:col-span-7 space-y-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="text-ink-600 leading-relaxed text-lg"
              {...fadeUp(i * 0.08)}
            >
              {p}
            </motion.p>
          ))}
          <motion.a
            href="/contact"
            {...fadeUp(paragraphs.length * 0.08 + 0.05)}
            className="inline-flex items-center gap-2 rounded-btn bg-brand-500 px-6 py-3 text-base font-semibold text-white hover:bg-brand-600 transition"
          >
            Get My Free Proposal <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Right — proposal form card */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <div className="rounded-card border border-ink-100 bg-white p-8 shadow-card sticky top-24">
            <h3 className="text-xl font-semibold text-brand-900 mb-1">Get My Free Proposal</h3>
            <p className="text-sm text-ink-500 mb-6">
              Fill in your details and we will reach out within 1 business day.
            </p>
            <ProposalForm service={service} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
