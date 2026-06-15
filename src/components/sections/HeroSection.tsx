import Image from "next/image";
import { MessageCircle, ChevronRight, MapPin } from "lucide-react";
import { WHATSAPP_LINK, HERO_STATS, SITE_NAME, COLORS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` }}
    >
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-6"
            style={{ background: "rgba(255, 255, 255, 0.15)", color: COLORS.white, fontWeight: 600 }}
          >
            <MapPin className="w-4 h-4" />
            Rio de Janeiro
          </span>
          <h1
            className="mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              color: COLORS.white,
            }}
          >
            Cuidado integrado para{" "}
            <span style={{ color: COLORS.white }}>recuperar</span> e{" "}
            <span style={{ color: COLORS.white }}>viver melhor</span>
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: COLORS.white }}>
            Fisioterapia, Massoterapia, Auriculoterapia e Fotobiomodulação com atendimento
            humanizado no Rio de Janeiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 active:scale-95 w-full sm:w-auto"
              style={{
                background: COLORS.success,
                color: COLORS.white,
                fontFamily: "var(--font-poppins)",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 transition-all hover:bg-opacity-10 active:scale-95 w-full sm:w-auto"
              style={{
                borderColor: "#ffffff",
                color: "#ffffff",
                fontWeight: 600,
                background: "transparent",
                cursor: "pointer",
              }}
            >
              Ver Serviços
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-10 pt-10 border-t border-blue-400 border-opacity-20">
            {HERO_STATS.map(([num, label]) => (
              <div key={label} className="text-center min-w-0">
                <div
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 800,
                    color: COLORS.white,
                    fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {num}
                </div>
                <div
                  className="text-xs mt-0.5 leading-tight"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 500,
                    color: "#DDEEFF",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div
            className="absolute -inset-4 rounded-3xl opacity-20"
            style={{ background: COLORS.accent, filter: "blur(40px)" }}
          />
          <Image
            src="/images/hero/hero-main.webp"
            alt={`Profissional ${SITE_NAME} realizando massagem terapêutica`}
            width={600}
            height={700}
            priority
            className="relative rounded-3xl w-full object-cover shadow-2xl"
            style={{ height: 480 }}
          />
          <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 bg-white max-w-[calc(100%-1rem)]">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${COLORS.accent}15` }}
            >
              <span className="text-xl">✅</span>
            </div>
            <div className="min-w-0">
              <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.textPrimary }}>
                Consulta agendada!
              </div>
              <div style={{ fontSize: 12, color: COLORS.textSecondary }}>Confirmado via WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
