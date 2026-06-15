import { benefits } from "@/data/benefits";
import { COLORS } from "@/lib/constants";
import { Check } from "lucide-react";

export function BenefitsSection() {
  return (
    <section
      className="py-20 text-white"
      style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs mb-4"
            style={{ background: "rgba(255,255,255,0.15)", color: "#BFDBFE", fontWeight: 600 }}
          >
            Por que nos escolher?
          </span>
          <h2
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#ffffff",
            }}
          >
            Nossos Diferenciais
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#DCFCE7", border: `1px solid ${COLORS.success}66` }}
              >
                <Check className="w-5 h-5" style={{ color: COLORS.success }} strokeWidth={3} />
              </div>
              <span className="min-w-0" style={{ fontWeight: 500, fontSize: 15, color: "#E0F2FE" }}>
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
