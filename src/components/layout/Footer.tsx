import Image from "next/image";
import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import {
  WHATSAPP_LINK,
  PHONE_DISPLAY,
  PHONE_HREF,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  SITE_NAME,
  SITE_FULL_NAME,
  ADDRESS,
  BUSINESS_HOURS,
  COLORS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer style={{ background: COLORS.primary }} className="text-white py-14">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 flex-shrink-0">
              <Image
                src="/images/brand/icon.webp"
                alt="IIREB"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 18 }}>
              {SITE_NAME}
            </span>
          </div>
          <p style={{ color: "#E5E7EB", fontSize: 14, lineHeight: 1.8 }}>
            {SITE_FULL_NAME} — Cuidado integrado com fisioterapia, massoterapia, auriculoterapia e fotobiomodulação.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, marginBottom: 16, color: "#F9FAFB" }}>
            Contato
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 transition-colors hover:text-blue-400"
              style={{ color: "#E5E7EB", fontSize: 14 }}
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-green-400"
              style={{ color: "#E5E7EB", fontSize: 14 }}
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              WhatsApp: {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-pink-400"
              style={{ color: "#E5E7EB", fontSize: 14 }}
            >
              <Instagram className="w-4 h-4 flex-shrink-0" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, marginBottom: 16, color: "#F9FAFB" }}>
            Localização
          </h4>
            <div className="flex items-start gap-3" style={{ color: "#E5E7EB", fontSize: 14 }}>
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div>{ADDRESS}</div>
          </div>
          <div className="mt-5 p-3 rounded-xl" style={{ background: "#1F2937" }}>
            <p style={{ color: "#6B7280", fontSize: 13 }}>Horário de atendimento</p>
            {BUSINESS_HOURS.map((h) => (
              <p key={h.days} style={{ color: "#D1D5DB", fontSize: 13, marginTop: 4 }}>
                {h.days}: {h.hours}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left" style={{ color: "#6B7280", fontSize: 13 }}>
          © 2026 {SITE_FULL_NAME}. Todos os direitos reservados.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 w-full sm:w-auto"
          style={{ background: COLORS.success, color: COLORS.white, fontSize: 13, fontWeight: 600 }}
        >
          <MessageCircle className="w-4 h-4" />
          Agendar agora
        </a>
      </div>
    </footer>
  );
}
