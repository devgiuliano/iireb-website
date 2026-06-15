import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, SITE_NAME, COLORS } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-20" style={{ background: COLORS.bgLight }}>
      <div className="max-w-2xl mx-auto px-5 text-center">
        <span className="text-4xl mb-4 block">✨</span>
        <h2
          style={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
            color: COLORS.textPrimary,
            marginBottom: 16,
          }}
        >
          Cuide da sua saúde hoje
        </h2>
        <p className="mb-8 text-lg leading-relaxed" style={{ color: COLORS.textSecondary }}>
          Não espere a dor piorar. Agende agora sua avaliação com o {SITE_NAME} e dê o primeiro
          passo para uma vida com mais movimento e bem-estar.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 active:scale-95 w-full sm:w-auto"
          style={{
            background: COLORS.success,
            color: COLORS.white,
            fontFamily: "var(--font-poppins)",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          Agendar Consulta pelo WhatsApp
        </a>
        <p className="mt-4 text-sm" style={{ color: COLORS.textSecondary }}>
          Resposta rápida · Atendimento humanizado
        </p>
      </div>
    </section>
  );
}
