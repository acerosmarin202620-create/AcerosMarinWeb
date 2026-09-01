"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { SERVICIOS_PRINCIPALES } from "@/lib/constants";

export function ServicesShowcase() {
  const scroller = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("li");
    const amount = card ? card.getBoundingClientRect().width + 20 : 280;
    node.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <div className="bg-navy py-16 text-bone sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] text-signal">
              CATÁLOGO
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-tight sm:text-4xl">
              Nuestros principales servicios
            </h3>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Ver servicios anteriores"
              onClick={() => scrollByCard(-1)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-bone hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Ver más servicios"
              onClick={() => scrollByCard(1)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-bone hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <ul
          ref={scroller}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SERVICIOS_PRINCIPALES.map((item) => (
            <li
              key={item.id}
              className="w-[min(78vw,270px)] shrink-0 snap-start"
            >
              <a
                href={`/servicios/${item.divisionId}#${item.id}`}
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/10">
                  <Image
                    src={item.foto}
                    alt={item.titulo}
                    fill
                    sizes="270px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-80" />
                </div>
                <p className="mt-3 font-display text-sm uppercase tracking-wide text-bone group-hover:text-signal">
                  {item.titulo}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
