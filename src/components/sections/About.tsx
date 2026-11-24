import { EMPRESA } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

const INCLUYE = [
  "Corte, doblez y rolado",
  "Bombeado y pestañado de tapas (0.5 mm a 25 mm, Ø 6 m)",
  "Rolado de cono y de planchas",
  "Guillotina de 6 metros",
  "Plegadora de 6 metros (2 mm a 19 mm)",
];

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-steel text-bone">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-navy/30 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          tone="dark"
          eyebrow="SOBRE NOSOTROS"
          title={EMPRESA.razonSocial}
        />
        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="space-y-4 text-base leading-relaxed text-bone/88">
            <p>
              En {EMPRESA.razonSocial} hacemos corte, doblez y rolado. Atendemos
              piezas y planchas según la medida de cada proyecto.
            </p>
            <p>
              Ofrecemos bombeado y pestañado de tapas para tanques (0.5 mm a 25
              mm de espesor, diámetros de 6 metros), rolado de cono y de
              planchas, guillotina y plegadora de 6 metros.
            </p>
            <p>
              El taller está en el Parque Industrial El Asesor, Ate. Coordinamos
              por WhatsApp y te confirmamos alcance, medida y plazo.
            </p>
          </div>
          <div className="border border-white/15 bg-navy/35 p-6 backdrop-blur-sm sm:p-8">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-signal">
              Lo que hacemos ahora
            </p>
            <ul className="mt-5 space-y-3">
              {INCLUYE.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-white/10 pb-3 text-sm last:border-0 last:pb-0"
                >
                  <span className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
