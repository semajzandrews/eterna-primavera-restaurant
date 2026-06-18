"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#herencia", es: "Herencia" },
  { href: "#mesa", es: "La Mesa" },
  { href: "#menu", es: "Menú" },
  { href: "#panaderia", es: "Panadería" },
  { href: "#visita", es: "Visítanos" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[var(--oxblood-3)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,155,59,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="huipil-thread huipil-thread--thin" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        {/* Wordmark */}
        <a href="#top" className="group flex flex-col leading-none">
          <span
            className="text-[1.18rem] sm:text-[1.4rem] tracking-tight text-[var(--bone)]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Eterna Primavera
          </span>
          <span className="mt-0.5 text-[0.52rem] sm:text-[0.6rem] uppercase tracking-[0.34em] text-[var(--gold-2)]">
            100% Guatemalteco
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[0.82rem] uppercase tracking-[0.16em] text-[var(--masa)]/85 transition-colors hover:text-[var(--gold-2)]"
              >
                {l.es}
              </a>
            </li>
          ))}
        </ul>

        {/* Call CTA — full on desktop, icon pill on mobile */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+19732802521"
            className="hidden items-center gap-2 rounded-full border border-[var(--gold)]/60 bg-[var(--oxblood)]/30 px-4 py-2 text-[0.78rem] uppercase tracking-[0.14em] text-[var(--bone)] transition-all hover:bg-[var(--oxblood)] sm:flex"
          >
            <PhoneIcon />
            (973) 280-2521
          </a>
          <a
            href="tel:+19732802521"
            aria-label="Llamar al restaurante"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[var(--gold)]/60 bg-[var(--oxblood)] text-[var(--bone)] sm:hidden"
          >
            <PhoneIcon />
          </a>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((o) => !o)}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--bone)] md:hidden"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--gold)]/25 bg-[var(--oxblood-3)]/98 px-6 pb-5 pt-2 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[1.05rem] tracking-wide text-[var(--masa)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {l.es}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3h3l1.5 4.5L8.8 9.3a12 12 0 0 0 5.9 5.9l1.8-2.2L21 14.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
