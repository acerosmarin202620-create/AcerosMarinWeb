import { EMPRESA } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

const INCLUYE = [
  "Ingeniería de detalle",
  "Fabricación y montaje de estructuras metálicas",
  "Carpintería metálica y de acero inoxidable",
  "Corte y doblez de precisión",
  "Rolado de planchas y perfiles",
  "Corte por láser y soluciones personalizadas",
];

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-steel text-bone">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-navy/30 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeader
          tone="dark"
          eyebrow="SOBRE NOSOTROS"
          title={EMPRESA.razonSocial}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-base leading-relaxed text-bone/88">
          <p>
            Con más de 17 años de experiencia en el sector metalmecánico, en{" "}
            {EMPRESA.razonSocial} nos especializamos en el desarrollo y
            ejecución de proyectos integrales de estructuras metálicas. Contamos
            con un equipo altamente calificado de técnicos, supervisores e
            ingenieros, comprometidos con la calidad, la seguridad y la
            eficiencia en cada etapa del proceso.
          </p>
          <p>
            La empresa se ha formado por profesionales altamente capacitados en
            metalmecánica. Los fundadores tienen más de 10 años en el rubro,
            participando en obras de estructuras metálicas livianas, semipesadas
            y pesadas, coberturas, carpintería metálica, acero inoxidable,
            servicios de corte y doblez, conformado y rolado de metales.
          </p>
          <p>
            Trabajamos con tecnología de vanguardia y un enfoque orientado a
            resultados, garantizando soluciones duraderas, funcionales y a la
            medida de cada proyecto.
          </p>
          </div>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-signal">
            Nuestros servicios incluyen
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
    </section>
  );
}
