import { Clock, Ruler, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CAPACIDAD, COMO_COTIZAR, EMPRESA } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function Workshop() {
  return (
    <section id="cotizar" className="bg-navy text-bone">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          tone="dark"
          eyebrow="CÓMO TRABAJAMOS"
          title="Cotiza con datos claros"
          description="Mientras más precisa la consulta, más rápido te confirmamos si lo podemos hacer en taller y en qué plazo."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-3">
          {CAPACIDAD.map((item) => (
            <li
              key={item.titulo}
              className="border border-white/15 bg-white/5 p-6 transition-colors hover:border-signal/50"
            >
              <p className="font-mono text-[11px] tracking-[0.22em] text-signal">
                {item.titulo}
              </p>
              <p className="mt-2 font-display text-xl uppercase tracking-tight sm:text-2xl">
                {item.dato}
              </p>
            </li>
          ))}
        </ul>

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {COMO_COTIZAR.map((paso, index) => (
            <li
              key={paso}
              className="flex gap-4 border border-white/10 bg-navy/40 p-5"
            >
              <span className="font-mono text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-bone/85">{paso}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-3 text-sm text-bone/75 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <p className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-signal" aria-hidden />
            {EMPRESA.horario}
          </p>
          <p className="inline-flex items-center gap-2">
            <Ruler className="h-4 w-4 text-signal" aria-hidden />
            {EMPRESA.zona}
          </p>
        </div>

        <Button
          href={whatsappLink(
            "Hola, quiero cotizar. Servicio:\nMedida:\nEspesor:\nMaterial:\nCantidad:",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full sm:w-auto"
        >
          <MessageCircle className="h-4 w-4" />
          Empezar cotización
        </Button>
      </div>
    </section>
  );
}
