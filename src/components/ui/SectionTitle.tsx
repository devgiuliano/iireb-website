import { COLORS } from "@/lib/constants";

type BadgeColor = "primary" | "accent" | "secondary";

type SectionTitleProps = {
  badge: string;
  title: string;
  subtitle?: string;
  badgeColor?: BadgeColor;
  center?: boolean;
};

const badgeStyles: Record<BadgeColor, React.CSSProperties> = {
  primary: {
    background: `${COLORS.primary}15`,
    color: COLORS.primary,
  },
  accent: {
    background: `${COLORS.accent}15`,
    color: COLORS.accent,
  },
  secondary: {
    background: `${COLORS.secondary}15`,
    color: COLORS.secondary,
  },
};

export function SectionTitle({
  badge,
  title,
  subtitle,
  badgeColor = "primary",
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center mb-14" : "mb-10"}>
      <span
        className="inline-block px-3 py-1 rounded-full text-xs mb-4"
        style={{ ...badgeStyles[badgeColor], fontWeight: 600 }}
      >
        {badge}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-poppins)",
          fontWeight: 700,
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          color: COLORS.textPrimary,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 ${center ? "max-w-xl mx-auto" : ""}`}
          style={{ color: COLORS.textSecondary }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
