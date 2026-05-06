"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/data";
import { cn } from "@/lib/cn";

type MegaMenuGroup = { category: string; items: { label: string; href: string }[] };
type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
  megaMenu?: MegaMenuGroup[];
};

function DesktopNavItem({ item }: { item: NavItem }) {
  if (!item.children && !item.megaMenu) {
    return (
      <Link href={item.href} className="text-sm text-ink-700 hover:text-brand-900 transition">
        {item.label}
      </Link>
    );
  }

  if (item.megaMenu) {
    return (
      <div className="group relative">
        <button className="inline-flex items-center gap-1 text-sm text-ink-700 hover:text-brand-900 transition">
          {item.label}
          <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
        </button>
        <div className="invisible absolute left-1/2 -translate-x-1/2 top-full z-50 mt-2 w-[680px] rounded-card border border-ink-100 bg-white p-6 opacity-0 shadow-cardHover transition-all group-hover:visible group-hover:opacity-100">
          <div className="grid grid-cols-4 gap-6">
            {item.megaMenu.map((group) => (
              <div key={group.category}>
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                  {group.category}
                </div>
                <ul className="space-y-1">
                  {group.items.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="block rounded-lg px-2 py-1.5 text-sm text-ink-700 hover:bg-ink-50 hover:text-brand-600 transition"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-ink-100 pt-4">
            <Link
              href={item.href}
              className="text-xs font-medium text-brand-600 hover:text-brand-700 transition"
            >
              View all services →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 text-sm text-ink-700 hover:text-brand-900 transition">
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 rounded-card border border-ink-100 bg-white p-1.5 opacity-0 shadow-cardHover transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
        {item.children!.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-ink-50 hover:text-brand-600 transition"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors",
        scrolled ? "bg-white/90 backdrop-blur border-b border-ink-100" : "bg-white border-b border-ink-100",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-brand-900">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-white text-sm font-bold">
            W
          </span>
          <span>{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {(site.nav as NavItem[]).map((item) => (
            <DesktopNavItem key={item.href} item={item} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={site.primaryCta.href} size="md">
            {site.primaryCta.label}
          </Button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 focus-ring"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile full-screen sheet */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto animate-slideUp">
          <div className="container-x flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-brand-900" onClick={() => setOpen(false)}>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-white text-sm font-bold">W</span>
              <span>{site.name}</span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 focus-ring"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="container-x flex flex-col gap-1 pt-2 pb-8">
            {(site.nav as NavItem[]).map((item) => {
              const hasChildren = item.children || item.megaMenu;
              const flatChildren = item.megaMenu
                ? item.megaMenu.flatMap((g) => g.items)
                : item.children ?? [];

              return (
                <div key={item.href}>
                  {hasChildren ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileExpanded((p) => (p === item.label ? null : item.label))
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-lg font-medium text-brand-900 hover:bg-ink-50"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition",
                            mobileExpanded === item.label && "rotate-180",
                          )}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-ink-100 pl-4">
                          {flatChildren.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-base text-ink-700 hover:bg-ink-50 hover:text-brand-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-600 hover:bg-ink-50"
                          >
                            View all services →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-lg font-medium text-brand-900 hover:bg-ink-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
            <div className="mt-6">
              <Button href={site.primaryCta.href} size="lg" className="w-full" onClick={() => setOpen(false)}>
                {site.primaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
