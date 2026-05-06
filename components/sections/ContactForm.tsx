"use client";
import { useState } from "react";
import { Check, Loader2, Mail, Phone } from "lucide-react";
import { site } from "@/lib/data";

export function ContactForm({ services }: { services: string[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", website: "", message: "" });

  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // POST to /api/lead - reuse the lead endpoint
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, services: selected }),
    }).catch(() => {});
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-accent-500/15">
          <Check className="h-8 w-8 text-accent-600" />
        </div>
        <h3 className="mt-4 text-2xl font-semibold">Message sent!</h3>
        <p className="mt-2 text-ink-500 max-w-sm">
          Our team will review your details and get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {(["name", "email", "phone", "company", "website"] as const).map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
            required={field === "name" || field === "email"}
            className="h-11 w-full rounded-btn border border-ink-200 px-3 text-sm focus-ring"
          />
        ))}
      </div>

      <div>
        <div className="mb-3 text-sm font-medium text-ink-700">
          What can we do for you? <span className="text-ink-400">(select all that apply)</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {services.map((s) => (
            <label
              key={s}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                selected.includes(s)
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-ink-200 hover:border-brand-300"
              }`}
            >
              <input
                type="checkbox"
                checked={selected.includes(s)}
                onChange={() => toggle(s)}
                className="sr-only"
              />
              <span
                className={`h-4 w-4 rounded border flex-shrink-0 ${
                  selected.includes(s) ? "bg-brand-500 border-brand-500" : "border-ink-300"
                } grid place-items-center`}
              >
                {selected.includes(s) && <Check className="h-3 w-3 text-white" />}
              </span>
              {s}
            </label>
          ))}
        </div>
      </div>

      <textarea
        placeholder="Tell us about your project…"
        rows={4}
        value={form.message}
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        className="w-full rounded-btn border border-ink-200 px-3 py-2 text-sm focus-ring resize-none"
      />

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 items-center gap-2 rounded-btn bg-brand-500 px-6 text-base font-medium text-white hover:bg-brand-600 disabled:opacity-50 transition focus-ring"
      >
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Send message
      </button>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <div className="font-mono text-[11px] uppercase tracking-widemono text-ink-500 mb-3">
          Get in touch
        </div>
        <div className="space-y-3">
          <a
            href={`mailto:${site.contact.email}`}
            className="flex items-center gap-3 text-ink-700 hover:text-brand-600 transition"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
              <Mail className="h-4 w-4" />
            </span>
            {site.contact.email}
          </a>
          <a
            href={`tel:${site.contact.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-3 text-ink-700 hover:text-brand-600 transition"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
              <Phone className="h-4 w-4" />
            </span>
            {site.contact.phone}
          </a>
        </div>
      </div>

      <div className="rounded-card border border-ink-100 bg-ink-50 p-5 space-y-2">
        <div className="font-semibold text-brand-900">Free 30-min strategy audit</div>
        <p className="text-sm text-ink-500">
          No obligation. We&apos;ll review your current digital presence and share 3–5 specific opportunities to grow.
        </p>
        <div className="text-sm text-accent-600 font-medium">Reply within 1 business day</div>
      </div>
    </div>
  );
}
