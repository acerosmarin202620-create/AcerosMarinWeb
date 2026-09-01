import Image from "next/image";
import { GALERIA } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Gallery() {
  return (
    <section id="galeria" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeader
          eyebrow="GALERÍA DE FOTOS"
          title="Trabajos en taller y obra"
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALERIA.map((foto, index) => (
            <li
              key={foto.src}
              className={`group relative overflow-hidden bg-navy/10 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${index === 0 ? "aspect-[4/3] md:h-full md:aspect-auto" : "aspect-[4/3]"}`}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/25" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
