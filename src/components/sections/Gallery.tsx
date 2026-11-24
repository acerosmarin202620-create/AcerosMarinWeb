"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { GALERIA } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Gallery() {
  const [abierta, setAbierta] = useState<number | null>(null);
  const actual = abierta !== null ? GALERIA[abierta] : null;

  useEffect(() => {
    if (abierta === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAbierta(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierta]);

  return (
    <section id="galeria" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="GALERÍA DE FOTOS"
          title="Trabajos en taller"
          description="Haz clic en una foto para verla completa."
        />
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3">
          {GALERIA.map((foto, index) => (
            <li key={foto.src}>
              <button
                type="button"
                onClick={() => setAbierta(index)}
                className="block w-full border border-navy/10 bg-zinc-100 text-left transition-all duration-300 hover:border-signal hover:shadow-[0_12px_32px_rgba(16,36,62,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                <div className="flex min-h-[200px] items-center justify-center p-3 sm:min-h-[240px]">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    width={800}
                    height={600}
                    className="h-auto max-h-[280px] w-full object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <p className="px-3 pb-3 text-center text-sm text-ink/70">
                  {foto.alt}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {actual ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 pb-24 sm:pb-4"
          role="dialog"
          aria-modal="true"
          aria-label={actual.alt}
          onClick={() => setAbierta(null)}
        >
          <button
            type="button"
            aria-label="Cerrar imagen"
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center bg-signal text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone sm:right-4 sm:top-4"
            onClick={() => setAbierta(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="max-h-[85vh] max-w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={actual.src}
              alt={actual.alt}
              width={1400}
              height={1000}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
