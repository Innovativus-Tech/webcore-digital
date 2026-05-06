import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-medium transition focus-ring select-none";
const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};
const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-[0_1px_0_rgba(255,255,255,.15)_inset] hover:-translate-y-px active:translate-y-0",
  secondary:
    "bg-white text-brand-900 border border-ink-200 hover:border-brand-500 hover:text-brand-600",
  ghost: "bg-transparent text-brand-600 hover:text-brand-700",
  onDark:
    "bg-white text-brand-900 hover:bg-ink-50 active:bg-ink-100",
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "ref">;

export function Button({ href, variant = "primary", size = "md", className, children, ...rest }: Props) {
  const cls = cn(base, sizes[size], variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
