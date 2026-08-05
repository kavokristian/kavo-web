"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#fordeler", label: "Fordeler" },
  { href: "#tjenester", label: "Tjenester" },
  { href: "#slik-fungerer-det", label: "Slik fungerer det" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <a
          href="#"
          className="text-[1.125rem] font-semibold tracking-tight text-foreground"
          aria-label="Kavo – hjem"
        >
          Kavo
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.9375rem] text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#kontakt"
            className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-[0.875rem] font-medium text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book samtale
          </a>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Lukk" : "Meny"}</span>
          <span
            className={`absolute h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-[3.5px]"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-[3.5px]"
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/60 bg-white/95 px-5 pb-6 pt-2 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-[1.0625rem] text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-3 flex h-12 items-center justify-center rounded-full bg-foreground text-[0.9375rem] font-medium text-white"
          >
            Book samtale
          </a>
        </div>
      </div>
    </header>
  );
}
