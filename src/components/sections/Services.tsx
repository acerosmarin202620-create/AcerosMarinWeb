"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICIOS } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

type Servicio = (typeof SERVICIOS)[number];

export function Services() {
  return (
    <section id="servicios" className="bg-bone">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="SERVICIOS"
          title="Servicios de taller"
          description="Bombeado, pestañado, rolado, corte en guillotina y plegado. Si hay varias fotos, cambian solas cada 5 segundos."
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {SERVICIOS.map((servicio, index) => (
            <ServiceCard
              key={servicio.id}
              servicio={servicio}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({
  servicio,
  index,
}: {
  servicio: Servicio;
  index: number;
}) {
  const fotos = servicio.fotos;
  const varias = fotos.length > 1;
  const [actual, setActual] = useState(0);
  const foto = fotos[actual] ?? fotos[0];

  useEffect(() => {
    if (!varias) return;
    const id = window.setInterval(() => {
      setActual((current) => (current + 1) % fotos.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [varias, fotos.length]);

  return (
    <li
      id={servicio.id}
      className="flex scroll-mt-28 flex-col border border-navy/10 bg-white shadow-[0_12px_40px_rgba(16,36,62,0.06)] transition-shadow duration-300 hover:border-signal/50 hover:shadow-[0_16px_48px_rgba(16,36,62,0.12)]"
    >
      <div className="relative flex min-h-[200px] items-center justify-center bg-zinc-100 p-3 sm:min-h-[260px]">
        <span className="absolute left-3 top-3 z-10 bg-navy px-2.5 py-1 font-mono text-[10px] tracking-[0.22em] text-signal">
          {String(index + 1).padStart(2, "0")}
        </span>
        {foto ? (
          <Image
            key={foto.src}
            src={foto.src}
            alt={foto.alt}
            width={640}
            height={480}
            className="h-auto max-h-[220px] w-full object-contain sm:max-h-[280px]"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : null}
        {varias ? (
          <span className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {fotos.map((item, i) => (
              <span
                key={item.src}
                className={`block h-1.5 w-4 ${
                  i === actual ? "bg-signal" : "bg-navy/30"
                }`}
              />
            ))}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-navy sm:text-xl">
          {servicio.titulo}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
          {servicio.descripcion}
        </p>
        <Button
          href={whatsappLink(`Hola, quiero cotizar: ${servicio.titulo}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full sm:w-auto sm:self-start"
        >
          Cotizar
        </Button>
      </div>
    </li>
  );
}
