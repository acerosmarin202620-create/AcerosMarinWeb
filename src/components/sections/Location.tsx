import { EMPRESA } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Location() {
  return (
    <section id="ubicacion" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="UBICACIÓN"
          title="Parque Industrial El Asesor"
          description={`${EMPRESA.direccion}. ${EMPRESA.distrito}. Sucursal: ${EMPRESA.sucursal}.`}
        />
        <a
          href={EMPRESA.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-10 block overflow-hidden border border-navy/10 shadow-[0_16px_50px_rgba(16,36,62,0.08)] transition-shadow hover:shadow-[0_20px_60px_rgba(16,36,62,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          aria-label="Abrir la ubicación de Aceros Marín en Google Maps"
        >
          <iframe
            title={`Mapa de ${EMPRESA.nombre} en ${EMPRESA.zona}`}
            src={EMPRESA.mapsEmbedSrc}
            className="pointer-events-none h-56 w-full grayscale transition duration-500 group-hover:grayscale-0 sm:h-80 lg:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span className="pointer-events-none absolute bottom-3 left-3 bg-signal px-3 py-2 font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-ink shadow-md sm:bottom-5 sm:left-5 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.18em]">
            Ver en Google Maps
          </span>
        </a>
      </div>
    </section>
  );
}
