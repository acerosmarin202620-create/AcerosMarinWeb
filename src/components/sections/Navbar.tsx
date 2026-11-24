"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { EMPRESA, NAV_LINKS } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<(typeof NAV_LINKS)[number]["id"]>(
    "inicio",
  );

  useEffect(() => {
    const onScroll = () => {
      const offset = 130;
      let current: (typeof NAV_LINKS)[number]["id"] = NAV_LINKS[0].id;
      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.id);
        if (!section) continue;
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = link.id;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeLabel =
    NAV_LINKS.find((link) => link.id === activeId)?.label ?? "Inicio";

  const linkClass = (id: string, mobile = false) => {
    const isActive = id === activeId;
    if (mobile) {
      return `block border-b border-white/10 py-3.5 font-display text-sm uppercase tracking-[0.16em] ${
        isActive ? "text-signal" : "text-bone"
      }`;
    }
    return `relative pb-1 font-display text-[10px] uppercase tracking-[0.16em] transition-colors xl:text-[11px] xl:tracking-[0.18em] ${
      isActive ? "text-signal" : "text-bone/75 hover:text-signal"
    }`;
  };

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
        className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2 sm:gap-4 sm:px-6 sm:py-2.5"
        aria-label="Principal"
      >
        <a
          href="/#inicio"
          className="flex min-w-0 items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:gap-3"
        >
          <Image
            src={EMPRESA.logo}
            alt={EMPRESA.nombre}
            width={96}
            height={96}
            priority
            className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]"
          />
          <span className="truncate font-display text-sm font-semibold uppercase tracking-[0.1em] text-bone sm:text-base sm:tracking-[0.14em]">
            {EMPRESA.nombre}
          </span>
        </a>
        <ul className="hidden items-center gap-3 lg:flex xl:gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={link.id === activeId ? "location" : undefined}
                className={`${linkClass(link.id)} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal`}
              >
                {link.label}
                {link.id === activeId ? (
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-signal"
                    aria-hidden
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            href={whatsappLink("Hola, quiero información sobre un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden !px-5 !py-2.5 xl:inline-flex"
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
      <p className="border-t border-white/10 bg-navy px-4 py-1.5 text-center font-display text-[10px] uppercase tracking-[0.22em] text-signal lg:hidden">
        Estás en: {activeLabel}
      </p>
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
                  aria-current={link.id === activeId ? "location" : undefined}
                  className={linkClass(link.id, true)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 md:hidden">
              <Button
                href={whatsappLink(
                  "Hola, quiero información sobre un proyecto.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
