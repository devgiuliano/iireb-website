import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { COLORS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="py-20" style={{ background: COLORS.bgAlternate }}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle
          badge="Depoimentos"
          title="O que nossos pacientes dizem"
          badgeColor="primary"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-2xl border transition-all hover:shadow-md"
              style={{ borderColor: COLORS.border, background: COLORS.white }}
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 mb-5 leading-relaxed" style={{ color: COLORS.textSecondary, fontSize: 15 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${COLORS.border}` }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0"
                  style={{ background: COLORS.primary, fontWeight: 700 }}
                >
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div style={{ fontWeight: 600, color: COLORS.textPrimary, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: COLORS.textSecondary, fontSize: 12 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
