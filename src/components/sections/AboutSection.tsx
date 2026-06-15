import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, SITE_NAME, SITE_FULL_NAME, COLORS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";

const credentials = [
  "CREFITO habilitado",
  "Terapias Integrativas",
  "Fotobiomodulação",
  "Reabilitação Física",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20" style={{ background: COLORS.bgAlternate }}>
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative overflow-hidden max-w-full">
          <div
            className="absolute -inset-3 rounded-3xl opacity-10"
            style={{ background: COLORS.accent, filter: "blur(30px)" }}
          />
          <Image
            src="/images/about/about-team.webp"
            alt={`Equipe ${SITE_NAME}`}
            width={500}
            height={580}
            className="relative rounded-3xl w-full max-w-full object-cover shadow-xl"
            style={{ height: 480 }}
          />
          <div
            className="absolute -bottom-3 right-3 sm:-right-3 px-4 py-3 rounded-2xl shadow-xl"
            style={{ background: COLORS.primary }}
          >
            <div
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 800,
                fontSize: 24,
                color: "#ffffff",
              }}
            >
              +500
            </div>
            <div style={{ fontSize: 12, color: COLORS.white, marginTop: 2 }}>Atendimentos realizados</div>
          </div>
        </div>

        <div>
          <SectionTitle
            badge="Sobre o Instituto"
            title={SITE_NAME}
            badgeColor="primary"
            center={false}
          />
          <p style={{ color: COLORS.textSecondary, lineHeight: 1.8, marginBottom: 12 }}>
            O {SITE_FULL_NAME} nasceu com a missão de oferecer cuidado integral ao ser humano,
            unindo ciência, tecnologia e humanização em cada atendimento.
          </p>
          <p style={{ color: COLORS.textSecondary, lineHeight: 1.8, marginBottom: 24 }}>
            Nossa equipe multidisciplinar atua com fisioterapia, massoterapia, auriculoterapia e
            fotobiomodulação, promovendo recuperação física, redução de dores e qualidade de vida
            para toda a comunidade carioca.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {credentials.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-sm"
                style={{ background: `${COLORS.primary}15`, color: COLORS.primary, fontWeight: 500 }}
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 active:scale-95 w-full sm:w-auto"
            style={{ background: COLORS.success, color: COLORS.white, fontSize: 13, fontWeight: 600 }}
          >
            <MessageCircle className="w-4 h-4" />
            Falar com o {SITE_NAME}
          </a>
        </div>
      </div>
    </section>
  );
}
