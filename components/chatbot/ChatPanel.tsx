"use client";
import { useRef, useEffect, useState, useId } from "react";
import { useChat } from "@ai-sdk/react";
import { X, Minus, Send, Calendar, Mail, Gauge, Loader2 } from "lucide-react";
import { chatbot } from "@/lib/data";
import { LeadCaptureCard } from "./LeadCaptureCard";
import { cn } from "@/lib/cn";

const quickIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Mail,
  Gauge,
};

function useSessionId() {
  const [sessionId] = useState(() => {
    if (typeof window === "undefined") return "";
    const stored = sessionStorage.getItem("wc-session-id");
    if (stored) return stored;
    const id = crypto.randomUUID();
    sessionStorage.setItem("wc-session-id", id);
    return id;
  });
  return sessionId;
}

export function ChatPanel({ onClose }: { onClose: () => void }) {
  const sessionId = useSessionId();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLead, setShowLead] = useState(false);
  const [leadDone, setLeadDone] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: "/api/chat",
    body: { sessionId },
    initialMessages: [
      { id: "greeting", role: "assistant", content: chatbot.greeting },
    ],
    onFinish() {
      const userCount = messages.filter((m) => m.role === "user").length;
      if (userCount >= 2 && !showLead && !leadDone) {
        setShowLead(true);
      }
    },
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, showLead, isLoading]);

  const sendExampleQuestion = (q: string) => {
    append({ role: "user", content: q });
  };

  const isFirstTurn = messages.length === 1 && messages[0].id === "greeting";

  return (
    <>
      {/* Mobile backdrop */}
      <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={onClose} aria-hidden />

      <div
        role="dialog"
        aria-label={chatbot.botName}
        className={cn(
          "fixed z-50 flex flex-col bg-white shadow-cardHover animate-slideUp",
          "inset-x-0 bottom-0 h-[92vh] rounded-t-2xl",
          "md:inset-auto md:bottom-24 md:right-6 md:h-[620px] md:w-[400px] md:rounded-card",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-ink-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 text-white font-bold select-none">
              W
            </span>
            <div>
              <div className="text-sm font-semibold text-brand-900">{chatbot.botName}</div>
              <div className="flex items-center gap-1.5 text-xs text-ink-500">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                Online · replies in seconds
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={onClose}
              aria-label="Minimize"
              className="hidden md:grid h-8 w-8 place-items-center rounded-lg text-ink-500 hover:bg-ink-50 focus-ring"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="grid h-8 w-8 place-items-center rounded-lg text-ink-500 hover:bg-ink-50 focus-ring"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap",
                m.role === "assistant"
                  ? "bg-ink-50 text-ink-900 border-l-2 border-brand-500"
                  : "ml-auto bg-brand-500 text-white",
              )}
            >
              {m.content}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 bg-ink-50 border-l-2 border-brand-500 rounded-2xl px-3.5 py-2.5 max-w-[85%]">
              <Loader2 className="h-4 w-4 animate-spin text-brand-500" />
              <span className="text-sm text-ink-500">Thinking…</span>
            </div>
          )}

          {isFirstTurn && (
            <div className="pt-2">
              <div className="font-mono text-[10px] uppercase tracking-widemono text-ink-500 mb-2">
                Try asking
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {chatbot.exampleQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendExampleQuestion(q)}
                    className="text-left rounded-lg border border-ink-100 bg-white px-3 py-2 text-xs text-ink-700 hover:border-brand-500 hover:text-brand-700 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showLead && !leadDone && (
            <LeadCaptureCard
              sessionId={sessionId}
              onDone={() => {
                setShowLead(false);
                setLeadDone(true);
              }}
            />
          )}
        </div>

        {/* Quick actions */}
        <div className="px-4 py-2 border-t border-ink-100 flex gap-2 overflow-x-auto flex-shrink-0">
          {chatbot.quickActions.map((a) => {
            const Ico = quickIcons[a.icon] ?? Calendar;
            return (
              <button
                key={a.action}
                onClick={() => setShowLead(true)}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-ink-100 px-3 py-1.5 text-xs text-ink-700 hover:border-brand-500 hover:text-brand-700 transition"
              >
                <Ico className="h-3.5 w-3.5" />
                {a.label}
              </button>
            );
          })}
        </div>

        {/* Input */}
        <form
          className="flex items-end gap-2 p-3 border-t border-ink-100 flex-shrink-0"
          onSubmit={handleSubmit}
        >
          <textarea
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
              }
            }}
            rows={1}
            placeholder="Ask anything…"
            className="flex-1 max-h-32 resize-none rounded-btn border border-ink-200 px-3 py-2 text-sm focus-ring"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send"
            className="grid h-10 w-10 place-items-center rounded-btn bg-brand-500 text-white hover:bg-brand-600 disabled:opacity-40 transition focus-ring flex-shrink-0"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
        <div className="text-center pb-2 text-[10px] text-ink-300 flex-shrink-0">
          Powered by WebcoreDigital
        </div>
      </div>
    </>
  );
}
