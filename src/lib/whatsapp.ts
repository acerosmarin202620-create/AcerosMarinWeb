import { EMPRESA } from "./constants";

export function whatsappLink(
  mensaje: string,
  numero: string = EMPRESA.whatsapp,
): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
