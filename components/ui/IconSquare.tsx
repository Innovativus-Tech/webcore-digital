import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function IconSquare({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
