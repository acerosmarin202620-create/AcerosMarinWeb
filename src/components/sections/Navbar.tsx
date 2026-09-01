"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { EMPRESA, NAV_LINKS } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 shadow-[0_8px_30px_rgba(10,10,11,0.25)] backdrop-blur-md">
      <div className="hazard-stripe h-1 w-full" aria-hidden />
      <a
        href="/#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6"
        aria-label="Principal"
      >
        <a
          href="/#inicio"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
        >
          <span className="flex h-10 w-10 items-center justify-center bg-signal font-display text-sm font-bold text-ink">
            AM
          </span>
          <span className="font-display text-base font-semibold uppercase tracking-[0.14em] text-bone sm:text-lg">
            {EMPRESA.nombre}
          </span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[11px] uppercase tracking-[0.2em] text-bone/75 transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button
            href={whatsappLink("Hola, quiero información sobre un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex !px-5 !py-2.5"
          >
            WhatsApp
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-bone lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open ? (
        <div
          id="menu-movil"
          className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-white/10 py-3.5 font-display text-sm uppercase tracking-[0.16em] text-bone"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
