"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK, SITE_NAME, COLORS } from "@/lib/constants";
import { scrollToSection } from "@/lib/scroll";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b" style={{ borderColor: COLORS.border }}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 min-w-0"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          aria-label="Ir ao início"
        >
          <div className="w-9 h-9 flex-shrink-0">
            <Image
              src="/images/brand/icon.webp"
              alt={SITE_NAME}
              width={36}
              height={36}
              className="w-full h-full object-contain"
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              color: COLORS.primary,
            }}
            className="text-base sm:text-lg truncate"
          >
            {SITE_NAME}
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm transition-colors"
              style={{
                fontWeight: 500,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: COLORS.textSecondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = COLORS.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = COLORS.textSecondary;
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 active:scale-95 w-full sm:w-auto"
            style={{ background: COLORS.success, color: COLORS.white, fontSize: 13, fontWeight: 600 }}
          >
            <MessageCircle className="w-4 h-4" />
            Agendar
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition flex-shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: COLORS.border }}>
          <div className="px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-sm py-2"
                style={{
                  fontWeight: 500,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: COLORS.primary,
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 active:scale-95 w-full sm:w-auto"
              style={{ background: COLORS.success, color: COLORS.white, fontSize: 13, fontWeight: 600 }}
            >
              <MessageCircle className="w-4 h-4" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
