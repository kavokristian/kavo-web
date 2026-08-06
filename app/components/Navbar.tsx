"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/hvem-er-kavo", label: "Bak Kavo" },
  { href: "/#tjenester", label: "Hva får du?" },
  { href: "/#pris", label: "Pris" },
  { href: "/slik-fungerer-det", label: "Slik fungerer det" },
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
        <Link
          href="/"
          className="text-[1.375rem] font-semibold tracking-tight text-foreground sm:text-[1.5rem]"
          aria-label="Kavo - hjem"
        >
          Kavo
        </Link>

        <ul className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.9375rem] text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

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
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-[1.0625rem] text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
