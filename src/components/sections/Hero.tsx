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
      className="relative min-h-[100svh] overflow-hidden bg-navy text-bone md:min-h-[80vh] lg:min-h-[86vh]"
    >
      <div className="absolute inset-0">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 md:min-h-[80vh] lg:min-h-[86vh] lg:py-24">
        <p className="max-w-[22rem] font-mono text-[10px] leading-relaxed tracking-[0.16em] text-signal sm:max-w-none sm:text-[11px] sm:tracking-[0.28em]">
          {EMPRESA.razonSocial} · {EMPRESA.slogan} · {EMPRESA.distrito}
        </p>
        <h1 className="mt-4 max-w-3xl border-l-4 border-signal pl-4 font-display text-[2.25rem] font-semibold uppercase leading-[0.95] tracking-tight sm:mt-5 sm:pl-7 sm:text-5xl md:text-6xl xl:text-7xl">
          Corte, doblez
          <br />
          y rolado
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-bone/85 sm:mt-6 sm:text-base lg:text-lg">
          Bombeado y pestañado de tapas, rolado de cono, guillotina y plegadora
          de 6 metros. Taller en Ate. Cotiza por WhatsApp.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap">
          <Button
            href={whatsappLink(
              "Hola, quiero cotizar un proyecto de estructura metálica.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Cotiza tu proyecto
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/#servicios" variant="outline" className="w-full sm:w-auto">
            Ver servicios
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-2 sm:mt-12 sm:gap-3">
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={() => goTo(index - 1)}
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 bg-navy/40 text-bone backdrop-blur-sm hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div
            className="flex min-w-0 flex-1 gap-1 sm:flex-none"
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
                className="flex h-11 min-w-0 flex-1 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:h-12 sm:w-10 sm:flex-none"
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
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 bg-navy/40 text-bone backdrop-blur-sm hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="hazard-stripe relative z-10 h-2.5 w-full" aria-hidden />
    </section>
  );
}
