import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import { COLORS } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" className="py-20" style={{ background: COLORS.bgLight }}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle
          badge="O que oferecemos"
          title="Nossos Serviços"
          subtitle="Tratamentos especializados para cada necessidade, com técnicas baseadas em evidências científicas."
          badgeColor="primary"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ background: COLORS.white, borderColor: COLORS.border }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all group-hover:scale-110"
                style={{ background: `${COLORS.primary}10` }}
              >
                {svc.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 600,
                  color: COLORS.primary,
                  fontSize: 16,
                  marginBottom: 8,
                }}
              >
                {svc.title}
              </h3>
              <p style={{ color: COLORS.textSecondary, fontSize: 14, lineHeight: 1.6 }}>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
