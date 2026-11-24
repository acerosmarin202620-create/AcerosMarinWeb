import Image from "next/image";
import { SERVICIOS, EMPRESA } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bone/70">
      <div className="hazard-stripe h-1.5 w-full" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={EMPRESA.logo}
              alt={EMPRESA.nombre}
              width={112}
              height={112}
              className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24"
            />
            <p className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-bone">
              {EMPRESA.nombre}
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {EMPRESA.slogan}. Bombeado, pestañado, corte y plegado.
          </p>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-signal">
            Servicios
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICIOS.map((servicio) => (
              <li key={servicio.id}>
                <a
                  href={`/#${servicio.id}`}
                  className="transition-colors hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  {servicio.titulo}
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
            <li>{EMPRESA.direccion}</li>
            <li>{EMPRESA.distrito}</li>
            <li>Sucursal: {EMPRESA.sucursal}</li>
            <li>{EMPRESA.horario}</li>
            <li>
              <a
                href={EMPRESA.telefonoFijoHref}
                className="transition-colors hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                Fijo {EMPRESA.telefonoFijo}
              </a>
            </li>
            {EMPRESA.celulares.map((celular) => (
              <li key={celular.numero}>
                <a
                  href={whatsappLink(
                    "Hola, quiero información sobre un proyecto.",
                    celular.wa,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-signal hover:text-signalDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  WhatsApp {celular.numero}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${EMPRESA.emails.ventas}`}
                className="break-all transition-colors hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              >
                {EMPRESA.emails.ventas}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 pb-24 text-xs text-bone/50 sm:px-6 md:pb-5">
          © {year} {EMPRESA.nombre} · {EMPRESA.distrito}
        </p>
      </div>
    </footer>
  );
}
