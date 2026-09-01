import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DIVISIONES } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

type Division = (typeof DIVISIONES)[number];

export function DivisionPage({ division }: { division: Division }) {
  return (
    <article className="bg-bone">
      <div className="relative overflow-hidden bg-navy text-bone">
        <div className="absolute inset-0">
          <Image
            src={division.items[0].foto}
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-[11px] tracking-[0.28em] text-signal">
            DIVISIÓN
          </p>
          <h1 className="mt-3 max-w-4xl border-l-4 border-signal pl-5 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            {division.titulo}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-bone/85">
            {division.resumen}
          </p>
        </div>
        <div className="hazard-stripe relative h-2 w-full" aria-hidden />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {division.items.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="scroll-mt-28 flex flex-col overflow-hidden border border-navy/10 bg-white shadow-[0_12px_40px_rgba(16,36,62,0.06)]"
            >
              <div className="relative aspect-[4/3] bg-navy/10">
                <Image
                  src={item.foto}
                  alt={item.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-navy">
                  {item.titulo}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                  {item.descripcion}
                </p>
                <Button
                  href={whatsappLink(`Hola, quiero cotizar: ${item.titulo}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-start"
                >
                  Cotizar
                </Button>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href="/#servicios"
          className="mt-12 inline-flex font-display text-xs font-semibold uppercase tracking-[0.18em] text-steel hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
        >
          ← Volver a servicios
        </Link>
      </div>
    </article>
  );
}
