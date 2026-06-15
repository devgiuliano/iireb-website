import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iireb.com.br"),
  title: {
    default: "IIREB | Instituto Integrado de Recuperação e Bem-Estar",
    template: "%s | IIREB",
  },
  description:
    "Fisioterapia, massoterapia, estética avançada e relaxamento no Rio de Janeiro.",
  openGraph: {
    title: "IIREB | Instituto Integrado de Recuperação e Bem-Estar",
    description:
      "Fisioterapia, massoterapia, estética avançada e relaxamento no Rio de Janeiro.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#FAFBFC] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}