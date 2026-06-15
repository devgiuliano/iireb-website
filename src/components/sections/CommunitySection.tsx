import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, SITE_NAME, COLORS } from "@/lib/constants";

const images = [
  {
    src: "/images/community/community-action-01.webp",
    alt: "Ação social IIREB na comunidade",
  },
  {
    src: "/images/community/community-action-02.webp",
    alt: "Atendimento gratuito em ação comunitária",
  },
  {
    src: "/images/community/community-team.webp",
    alt: "Equipe IIREB",
  },
];

export function CommunitySection() {
  return (
    <section className="py-20" style={{ background: COLORS.bgAlternate }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden rounded-2xl row-span-2" style={{ aspectRatio: "3/4" }}>
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs mb-5"
              style={{ background: `${COLORS.accent}20`, color: COLORS.accent, fontWeight: 600 }}
            >
              Impacto Social
            </span>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: COLORS.textPrimary,
                marginBottom: 16,
              }}
            >
              Levando saúde à comunidade
            </h2>
            <p style={{ color: COLORS.textSecondary, lineHeight: 1.8, marginBottom: 12 }}>
              O {SITE_NAME} acredita que saúde é um direito de todos. Por isso, realizamos ações
              sociais periódicas levando atendimentos gratuitos de fisioterapia e massoterapia a
              comunidades carentes do Rio de Janeiro.
            </p>
            <p style={{ color: COLORS.textSecondary, lineHeight: 1.8, marginBottom: 24 }}>
              Centenas de pessoas já foram beneficiadas pelas nossas ações, reforçando nosso
              compromisso com o bem-estar coletivo e a saúde integral da população.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 active:scale-95 w-full sm:w-auto"
              style={{ background: COLORS.success, color: COLORS.white, fontSize: 13, fontWeight: 600 }}
            >
              <MessageCircle className="w-4 h-4" />
              Participar das ações
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
