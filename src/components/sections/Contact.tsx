"use client";

import { FormEvent, useState } from "react";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EMPRESA } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

const fieldClass =
  "mt-1.5 w-full border border-navy/15 bg-bone px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

export function Contact() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const texto = [
      "Hola, quiero que me contacten.",
      `Nombre: ${nombre} ${apellido}`.trim(),
      email ? `Email: ${email}` : "",
      mensaje ? `Consulta: ${mensaje}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="bg-bone">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="CONTÁCTENOS"
            title={EMPRESA.razonSocial}
            description="Profesionales capacitados en metalmecánica. Escríbenos y te contactamos a la brevedad."
          />
          <ul className="mt-10 space-y-4">
            {EMPRESA.celulares.map((celular) => (
              <li
                key={celular.numero}
                className="flex items-start gap-4 border border-navy/10 bg-white p-4"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-signal text-ink">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-mono text-[10px] tracking-[0.2em] text-steel">
                    {celular.etiqueta}
                  </span>
                  <a
                    href={whatsappLink("Hola, quiero información sobre un proyecto.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-navy hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                  >
                    {celular.numero}
                  </a>
                </span>
              </li>
            ))}
            <li className="flex items-start gap-4 border border-navy/10 bg-white p-4">
              <span className="flex h-11 w-11 items-center justify-center bg-navy text-signal">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm leading-relaxed text-ink/80">
                {EMPRESA.direccion}
                <br />
                {EMPRESA.distrito}
              </span>
            </li>
            {EMPRESA.telefonoFijo &&
            !EMPRESA.telefonoFijo.includes("pendiente") ? (
              <li className="text-sm text-ink/80">
                Telf: {EMPRESA.telefonoFijo}
              </li>
            ) : null}
          </ul>
          <div className="mt-8">
            <Button
              href={EMPRESA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="navy"
            >
              Abrir en Google Maps
            </Button>
          </div>
        </div>

        <div className="border border-navy/10 bg-white p-6 shadow-[0_16px_50px_rgba(16,36,62,0.08)] sm:p-8">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-signal" aria-hidden />
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-navy">
              Para más información, escriba aquí
            </h3>
          </div>
          <p className="mt-2 text-sm text-ink/65">
            Llene sus datos y envíenos; lo contactamos por WhatsApp.
          </p>
          <form className="mt-7 space-y-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-medium text-navy">Nombres *</span>
                <input
                  required
                  name="nombre"
                  autoComplete="given-name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-navy">Apellidos</span>
                <input
                  name="apellido"
                  autoComplete="family-name"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="font-medium text-navy">Email *</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-navy">
                Coméntenos su inquietud
              </span>
              <textarea
                name="mensaje"
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className={fieldClass}
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center bg-signal px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink shadow-[0_8px_24px_rgba(244,180,0,0.28)] hover:bg-signalDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:w-auto"
            >
              Concertar cita ahora
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
