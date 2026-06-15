import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
      style={{ background: "#25D366", color: "#FFFFFF" }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
