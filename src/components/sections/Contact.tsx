"use client";

import { FormEvent, useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EMPRESA, SERVICIOS } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

const fieldClass =
  "mt-1.5 w-full border border-navy/15 bg-bone px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

export function Contact() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState<string>(SERVICIOS[0]?.titulo ?? "");
  const [medida, setMedida] = useState("");
  const [espesor, setEspesor] = useState("");
  const [material, setMaterial] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [mensaje, setMensaje] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const texto = [
      "Hola, quiero cotizar un trabajo en Aceros Marín.",
      `Nombre: ${nombre}`,
      `Servicio: ${servicio}`,
      medida ? `Medida: ${medida}` : "",
      espesor ? `Espesor: ${espesor}` : "",
      material ? `Material: ${material}` : "",
      cantidad ? `Cantidad: ${cantidad}` : "",
      mensaje ? `Detalle: ${mensaje}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="bg-bone">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:gap-10 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <SectionHeader
            eyebrow="CONTÁCTENOS"
            title="Hablemos por WhatsApp"
            description="WhatsApp 947 997 379 / 946 360 707. Fijo 01-5030519. Con medida, espesor y material te respondemos más rápido."
          />
          <ul className="mt-10 space-y-4">
            {EMPRESA.celulares.map((celular) => (
              <li
                key={celular.numero}
                className="flex items-start gap-4 border border-navy/10 bg-white p-4 transition-colors hover:border-signal/40"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-signal text-ink">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-mono text-[10px] tracking-[0.2em] text-steel">
                    {celular.etiqueta}
                  </span>
                  <a
                    href={whatsappLink(
                      "Hola, quiero información sobre un trabajo de taller.",
                      celular.wa,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-navy hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                  >
                    {celular.numero}
                  </a>
                </span>
              </li>
            ))}
            <li className="flex items-start gap-4 border border-navy/10 bg-white p-4 transition-colors hover:border-signal/40">
              <span className="flex h-11 w-11 items-center justify-center bg-navy text-signal">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block font-mono text-[10px] tracking-[0.2em] text-steel">
                  Fijo
                </span>
                <a
                  href={EMPRESA.telefonoFijoHref}
                  className="text-lg font-medium text-navy hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  {EMPRESA.telefonoFijo}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-4 border border-navy/10 bg-white p-4 transition-colors hover:border-signal/40">
              <span className="flex h-11 w-11 items-center justify-center bg-navy text-signal">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block font-mono text-[10px] tracking-[0.2em] text-steel">
                  Correo
                </span>
                <a
                  href={`mailto:${EMPRESA.emails.ventas}`}
                  className="break-all text-lg font-medium text-navy hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  {EMPRESA.emails.ventas}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-4 border border-navy/10 bg-white p-4 transition-colors hover:border-signal/40">
              <span className="flex h-11 w-11 items-center justify-center bg-navy text-signal">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm leading-relaxed text-ink/80">
                {EMPRESA.horario}
              </span>
            </li>
            <li className="flex items-start gap-4 border border-navy/10 bg-white p-4 transition-colors hover:border-signal/40">
              <span className="flex h-11 w-11 items-center justify-center bg-navy text-signal">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm leading-relaxed text-ink/80">
                {EMPRESA.direccion}
                <br />
                {EMPRESA.distrito}
                <br />
                Sucursal: {EMPRESA.sucursal}
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <Button
              href={EMPRESA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="navy"
              className="w-full sm:w-auto"
            >
              Abrir en Google Maps
            </Button>
          </div>
        </div>

        <div className="border border-navy/10 bg-white p-4 shadow-[0_16px_50px_rgba(16,36,62,0.08)] sm:p-8">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-signal" aria-hidden />
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-navy">
              Pedir cotización
            </h3>
          </div>
          <p className="mt-2 text-sm text-ink/65">
            Completa lo que tengas. El mensaje se abre en WhatsApp listo para
            enviar.
          </p>
          <form className="mt-7 space-y-4" onSubmit={onSubmit}>
            <label className="block text-sm">
              <span className="font-medium text-navy">Nombre *</span>
              <input
                required
                name="nombre"
                autoComplete="name"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-navy">Servicio *</span>
              <select
                required
                name="servicio"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className={fieldClass}
              >
                {SERVICIOS.map((item) => (
                  <option key={item.id} value={item.titulo}>
                    {item.titulo}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-medium text-navy">Medida</span>
                <input
                  name="medida"
                  placeholder="Ej: 1.20 x 2.40 m"
                  value={medida}
                  onChange={(e) => setMedida(e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-navy">Espesor</span>
                <input
                  name="espesor"
                  placeholder="Ej: 3 mm"
                  value={espesor}
                  onChange={(e) => setEspesor(e.target.value)}
                  className={fieldClass}
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-medium text-navy">Material</span>
                <input
                  name="material"
                  placeholder="Ej: LAC, galvanizado"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-navy">Cantidad</span>
                <input
                  name="cantidad"
                  placeholder="Ej: 4 piezas"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="font-medium text-navy">Detalle</span>
              <textarea
                name="mensaje"
                rows={3}
                placeholder="Plazo, forma o si tienes plano"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className={fieldClass}
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center bg-signal px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink shadow-[0_8px_24px_rgba(244,180,0,0.28)] hover:bg-signalDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:w-auto"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
