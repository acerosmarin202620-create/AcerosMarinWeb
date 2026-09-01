import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(
        "Hola, quiero cotizar un proyecto de estructura metálica.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-signal text-ink shadow-[0_10px_30px_rgba(244,180,0,0.45)] transition-transform hover:scale-105 hover:bg-signalDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
