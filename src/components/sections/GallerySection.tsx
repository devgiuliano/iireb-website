import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { COLORS } from "@/lib/constants";

const galleryImages = [
  { src: "/images/community/community-event-01.webp", alt: "Evento comunitário IIREB" },
  { src: "/images/community/community-event-02.webp", alt: "Atividade comunitária" },
  { src: "/images/community/community-event-03.webp", alt: "Encontro da comunidade IIREB" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20" style={{ background: COLORS.bgLight }}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle
          badge="Nosso trabalho"
          title="Galeria"
          subtitle="Registros do nosso dia a dia de cuidado e dedicação aos pacientes."
          badgeColor="primary"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
