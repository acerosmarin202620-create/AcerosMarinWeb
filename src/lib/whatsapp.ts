import { EMPRESA } from "./constants";

export function whatsappLink(
  mensaje: string,
  numero: string = EMPRESA.whatsapp,
): string {
  if (!numero) return "/#contacto";
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
