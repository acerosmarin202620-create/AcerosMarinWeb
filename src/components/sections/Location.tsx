import { EMPRESA } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Location() {
  return (
    <section id="ubicacion" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeader
          eyebrow="UBICACIÓN"
          title="Visítanos al taller"
          description={`${EMPRESA.direccion}, ${EMPRESA.distrito}`}
        />
        <a
          href={EMPRESA.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-10 block overflow-hidden border border-navy/10 shadow-[0_16px_50px_rgba(16,36,62,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          aria-label="Abrir la ubicación de Aceros Marín en Google Maps"
        >
          <iframe
            title={`Mapa de ${EMPRESA.nombre} en Lima`}
            src={EMPRESA.mapsEmbedSrc}
            className="pointer-events-none h-80 w-full grayscale transition duration-500 group-hover:grayscale-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span className="pointer-events-none absolute bottom-5 left-5 bg-signal px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-md">
            Ver en Google Maps
          </span>
        </a>
      </div>
    </section>
  );
}
