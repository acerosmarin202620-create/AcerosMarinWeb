import { DIVISIONES, EMPRESA } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bone/70">
      <div className="hazard-stripe h-1.5 w-full" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-signal font-display text-sm font-bold text-ink">
              AM
            </span>
            <p className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-bone">
              {EMPRESA.nombre}
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Fabricamos, desarrollamos proyectos de estructura metálica y
            habilitamos material.
          </p>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-signal">
            Divisiones
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {DIVISIONES.map((division) => (
              <li key={division.id}>
                <a
                  href={`/servicios/${division.id}`}
                  className="transition-colors hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  {division.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-signal">
            Contacto
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              {EMPRESA.direccion}, {EMPRESA.distrito}
            </li>
            <li>
              <a
                href={whatsappLink("Hola, quiero información sobre un proyecto.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal hover:text-signalDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                WhatsApp {EMPRESA.celulares[0].numero}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-bone/50 sm:px-6">
          © {year} {EMPRESA.nombre} · {EMPRESA.distrito}
        </p>
      </div>
    </footer>
  );
}
