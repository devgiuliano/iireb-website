import type { NavLink } from "@/types";

export const WHATSAPP_NUMBER = "5521991572459";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20do%20IIREB!`;

export const PHONE_DISPLAY = "(21) 99157-2459";
export const PHONE_HREF = "tel:+5521991572459";
export const INSTAGRAM_URL = "https://www.instagram.com/iireb.oficial";
export const INSTAGRAM_HANDLE = "@iireb.oficial";

export const SITE_NAME = "IIREB";
export const SITE_FULL_NAME = "Instituto Integrado de Recuperação e Bem-Estar";
export const ADDRESS = "Rio de Janeiro — RJ";

export const BUSINESS_HOURS: { days: string; hours: string }[] = [
  { days: "Seg–Sex", hours: "8h às 20h" },
  { days: "Sáb", hours: "8h às 14h" },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Início", id: "hero" },
  { label: "Serviços", id: "services" },
  { label: "Sobre", id: "about" },
  { label: "Galeria", id: "gallery" },
  { label: "Contato", id: "contact" },
];

export const HERO_STATS: [string, string][] = [
  ["500+", "Atendimentos realizados"],
  ["6", "Especialidades"],
  ["98%", "Satisfação"],
];

// Design System Colors - Premium Blue Theme
export const COLORS = {
  // Primary
  primary: "#1E4D8F", // Azul Premium
  primaryDark: "#163B6F", // Azul Premium Escuro
  primaryLight: "#EAF3FF", // Azul Premium Muito Claro
  
  // Backgrounds
  bgPrimary: "#FAFBFC", // Background principal
  bgAlternate: "#F3F7FB", // Background alternado
  bgLight: "#FFFFFF", // Branco puro
  
  // Text
  textPrimary: "#0F172A", // Texto principal (muito escuro)
  textSecondary: "#475569", // Texto secundário
  
  // Utilities
  border: "#E2E8F0", // Borda padrão
  success: "#25D366", // Sucesso (verde)
  white: "#FFFFFF",
  accent: "#1E4D8F", // Accent (mesmo que primary)
  secondary: "#163B6F", // Secondary (mesmo que primaryDark)
} as const;
