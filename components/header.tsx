"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { cta, nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 md:h-24 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src="/logo.jpg"
            alt="SD Social"
            width={160}
            height={160}
            className="size-16 shrink-0 object-cover md:size-20"
          />
          <span className="min-w-0">
            <span className="block font-serif text-lg leading-none font-bold whitespace-nowrap">{site.brand}</span>
            <span className="mt-1 hidden text-[10px] tracking-[0.16em] text-ink-soft sm:block">
              {site.lockup}
              <span aria-hidden> · </span>
              <bdi dir="ltr">{site.handle}</bdi>
            </span>
            <span className="mt-1 block text-[10px] text-ink-soft sm:hidden">
              <bdi dir="ltr">{site.handle}</bdi>
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="ראשי">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <WhatsAppLink className="px-4 py-2.5">{cta.availability}</WhatsAppLink>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="grid size-11 place-items-center border border-ink/10"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "סגירת תפריט" : "פתיחת תפריט"}</span>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-ink/10 bg-cream px-5 py-6 lg:hidden"
          aria-label="נייד"
        >
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block font-serif text-2xl"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppLink className="mt-6 w-full">{cta.availability}</WhatsAppLink>
        </nav>
      ) : null}
    </header>
  );
}
