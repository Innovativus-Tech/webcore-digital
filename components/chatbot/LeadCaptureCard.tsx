"use client";
import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { chatbot } from "@/lib/data";

type Step = 0 | 1 | 2;

export function LeadCaptureCard({
  sessionId,
  onDone,
}: {
  sessionId?: string;
  onDone: () => void;
}) {
  const [step, setStep] = useState<Step>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    if (!name.trim() || !emailValid || !company.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, sessionId }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Submission failed. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-card border border-accent-500/30 bg-accent-500/5 p-4 animate-slideUp">
        <div className="flex items-center gap-2 text-accent-600 font-semibold text-sm">
          <Check className="h-4 w-4" /> You&apos;re all set
        </div>
        <p className="mt-2 text-sm text-ink-700">
          Thanks {name || "there"}, our team will reach out within 1 business day
          with a tailored proposal.
        </p>
        <button
          onClick={onDone}
          className="mt-3 text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          Continue chatting →
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-card border border-ink-100 bg-white p-4 shadow-card animate-slideUp">
      <div className="text-sm font-semibold text-brand-900">Want a tailored proposal?</div>
      <p className="mt-1 text-xs text-ink-500">Share a few details and we&apos;ll do the rest.</p>

      <div className="mt-4 space-y-3">
        <input
          autoFocus
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => name.trim() && step < 1 && setStep(1)}
          className="w-full rounded-btn border border-ink-200 px-3 py-2 text-sm focus-ring"
        />

        {step >= 1 && (
          <div className="animate-slideUp">
            <input
              placeholder="Work email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => emailValid && step < 2 && setStep(2)}
              className="w-full rounded-btn border border-ink-200 px-3 py-2 text-sm focus-ring"
            />
          </div>
        )}

        {step >= 2 && (
          <div className="animate-slideUp">
            <input
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-btn border border-ink-200 px-3 py-2 text-sm focus-ring"
            />
          </div>
        )}
      </div>

      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}

      <p className="mt-3 text-[11px] text-ink-500">{chatbot.consentText}</p>

      <div className="mt-3 flex gap-2">
        <button
          disabled={!name.trim() || !emailValid || !company.trim() || submitting}
          onClick={handleSubmit}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-btn bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-40 transition focus-ring"
        >
          {submitting && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
          Send to our team
        </button>
        <button
          onClick={onDone}
          className="rounded-btn px-3 py-2 text-sm text-ink-500 hover:text-ink-900"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
