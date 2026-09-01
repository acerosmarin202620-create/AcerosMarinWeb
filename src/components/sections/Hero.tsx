"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CARRUSEL, EMPRESA } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = CARRUSEL[index] ?? CARRUSEL[0];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % CARRUSEL.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  const goTo = (next: number) => {
    setIndex((next + CARRUSEL.length) % CARRUSEL.length);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[86vh] overflow-hidden bg-navy text-bone"
    >
      <div className="absolute inset-0">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.28em] text-signal">
          {EMPRESA.razonSocial} · Metalmecánica · {EMPRESA.distrito}
        </p>
        <h1 className="mt-5 max-w-3xl border-l-4 border-signal pl-5 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:pl-7 sm:text-7xl">
          Estructuras
          <br />
          metálicas
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/85 sm:text-lg">
          Profesionales con amplia experiencia en el diseño, fabricación y
          montaje de estructuras metálicas. Fabricamos, desarrollamos proyectos
          y habilitamos material.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button
            href={whatsappLink(
              "Hola, quiero cotizar un proyecto de estructura metálica.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotiza tu proyecto
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/#servicios" variant="outline">
            Ver servicios
          </Button>
        </div>
        <div className="mt-12 flex items-center gap-3">
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={() => goTo(index - 1)}
            className="flex h-12 w-12 items-center justify-center border border-white/25 bg-navy/40 text-bone backdrop-blur-sm hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div
            className="flex gap-1"
            role="tablist"
            aria-label="Imágenes de inicio"
          >
            {CARRUSEL.map((item, i) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ver imagen ${i + 1}`}
                onClick={() => setIndex(i)}
                className="flex h-12 w-10 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                <span
                  className={`block h-1 w-full ${
                    i === index ? "bg-signal" : "bg-white/30"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={() => goTo(index + 1)}
            className="flex h-12 w-12 items-center justify-center border border-white/25 bg-navy/40 text-bone backdrop-blur-sm hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="hazard-stripe relative z-10 h-2.5 w-full" aria-hidden />
    </section>
  );
}
