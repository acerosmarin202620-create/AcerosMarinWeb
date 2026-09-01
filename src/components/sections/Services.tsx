import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DIVISIONES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";

export function Services() {
  return (
    <section id="servicios" className="bg-bone">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeader
          eyebrow="SERVICIOS"
          title="Cuatro divisiones, un solo proyecto"
          description="Fabricamos, desarrollamos proyectos de estructura metálica y habilitamos material."
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {DIVISIONES.map((division, index) => (
            <li key={division.id}>
              <Link
                href={`/servicios/${division.id}`}
                className="group flex h-full flex-col overflow-hidden border border-navy/10 bg-white shadow-[0_12px_40px_rgba(16,36,62,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-signal hover:shadow-[0_18px_50px_rgba(16,36,62,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-navy/10">
                  <Image
                    src={division.items[0].foto}
                    alt={division.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-navy/90 px-3 py-1 font-mono text-[10px] tracking-[0.22em] text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-navy">
                    {division.titulo}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                    {division.resumen}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-steel group-hover:text-navy">
                    Leer más
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ServicesShowcase />
    </section>
  );
}
