"use client";
import { useEffect, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { ChatPanel } from "./ChatPanel";
import { cn } from "@/lib/cn";

export function ChatbotFAB() {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("wc-teaser-dismissed");
    if (dismissed) {
      setTeaserDismissed(true);
      return;
    }
    const t = setTimeout(() => setShowTeaser(true), 8000);
    return () => clearTimeout(t);
  }, []);

  const dismissTeaser = () => {
    setShowTeaser(false);
    setTeaserDismissed(true);
    sessionStorage.setItem("wc-teaser-dismissed", "1");
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-end gap-2">
        {showTeaser && !open && !teaserDismissed && (
          <div className="hidden sm:flex items-center gap-2 rounded-full bg-white border border-ink-100 shadow-card pl-4 pr-2 py-2 animate-slideUp">
            <span className="text-sm text-ink-700">Ask our marketing assistant →</span>
            <button
              onClick={dismissTeaser}
              aria-label="Dismiss"
              className="grid h-6 w-6 place-items-center rounded-full text-ink-500 hover:bg-ink-50"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        <button
          aria-label={open ? "Close marketing assistant" : "Open marketing assistant"}
          onClick={() => {
            setOpen((v) => !v);
            dismissTeaser();
          }}
          className={cn(
            "relative grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-white shadow-fab transition focus-ring",
            "hover:scale-105 active:scale-95",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          {!open && !teaserDismissed && (
            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-accent-500 ring-2 ring-brand-500" />
          )}
        </button>
      </div>

      {open && <ChatPanel onClose={() => setOpen(false)} />}
    </>
  );
}
