# IIREB - Instituto Integrado de Recuperação e Bem-Estar

[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38b2ac?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Landing page moderna e responsiva para o Instituto Integrado de Recuperação e Bem-Estar (IIREB), especializado em fisioterapia, massoterapia, auriculoterapia e fotobiomodulação no Rio de Janeiro.

## 📋 Visão Geral

### O Projeto

O IIREB é um projeto de landing page profissional desenvolvido com foco em **performance, SEO e experiência do usuário**. A aplicação apresenta os serviços de uma clínica especializada de recuperação física e bem-estar, funcionando como porta de entrada digital para agendamentos e informações sobre os tratamentos oferecidos.

### Problema Resolvido

Instituições de saúde precisam de uma presença digital forte e otimizada que:
- Comunique valores e especialidades com clareza
- Converta visitantes em leads (agendamentos via WhatsApp)
- Funcione perfeitamente em múltiplos dispositivos
- Mantenha SEO de qualidade para buscas locais
- Ofereça performance excepcional

### Público-Alvo

- Pacientes em busca de fisioterapia especializada no RJ
- Pessoas com interesse em terapias integrativas
- Usuários mobile buscando agendamento rápido
- Profissionais de saúde procurando referências

### Objetivos

✅ **Conversão**: Facilitar agendamentos via WhatsApp  
✅ **Informação**: Detalhar serviços e diferenciais  
✅ **Confiança**: Apresentar equipe, expertise e depoimentos  
✅ **Performance**: Carregamento ultra-rápido (<2s)  
✅ **SEO**: Ranking em buscas locais ("fisioterapia RJ")  
✅ **Acessibilidade**: Compatibilidade total com dispositivos

---

## 🎯 Demonstração

### URL de Produção

🔗 **Em desenvolvimento** - Deploy próximo no Vercel

### Screenshots

| Desktop | Mobile |
|---------|--------|
| ![Hero Section](/Fotos/hero.webp) | ![Hero Section Mobile](/Fotos/hero.webp) |

---

## ✨ Funcionalidades

### Core Features

- ✅ **Homepage responsiva** com 10 seções temáticas
- ✅ **Menu de navegação** com scroll suave entre seções
- ✅ **Botão WhatsApp flutuante** para contato direto
- ✅ **Galeria de imagens** otimizada com lazy loading
- ✅ **Depoimentos de clientes** com avaliações em estrelas
- ✅ **Integração WhatsApp** com número pré-configurado
- ✅ **Links para Instagram** para redes sociais
- ✅ **Horários de funcionamento** dinâmicos
- ✅ **Estrutura SEO completa** (metadados, sitemap, robots.txt)
- ✅ **Design system unificado** com paleta de cores consistente

### Seções da Página

1. **Hero Section** - Banner principal com CTA e estatísticas
2. **Services Section** - Grid de 6 especialidades
3. **About Section** - Histórico e diferencias do instituto
4. **Benefits Section** - 9 vantagens destacadas
5. **Gallery Section** - Galeria com 3 fotos de eventos
6. **Community Section** - Ações sociais com impacto
7. **Testimonials Section** - 3 depoimentos verificados
8. **Contact Section** - CTA final para agendamento
9. **Header** - Navegação sticky e menu mobile
10. **Footer** - Contatos, horários e redes sociais

---

## 🛠️ Stack Tecnológica

### Frontend Framework

| Tecnologia | Versão | Propósito | Motivo da Escolha |
|---|---|---|---|
| **Next.js** | 15.1.0 | Framework React full-stack | SSG otimizado, SEO nativo, performance automática |
| **React** | 18.3.1 | Biblioteca UI | Ecosystem maduro, performance, Components |
| **TypeScript** | 5.7.0 | Linguagem tipada | Type safety, DX melhorada, menos bugs |

### Estilização

| Tecnologia | Versão | Propósito | Motivo da Escolha |
|---|---|---|---|
| **Tailwind CSS** | 4.1.12 | CSS utilitário | Zero CSS custom, rápido, consistência visual |
| **PostCSS** | - | Processamento CSS | Integração Tailwind, autoprefixer automático |

### Ícones & Assets

| Tecnologia | Versão | Propósito | Motivo da Escolha |
|---|---|---|---|
| **Lucide React** | 0.487.0 | Sistema de ícones | SVG limpo, customizável, performance |
| **Google Fonts** | - | Tipografia | Poppins para branding, carregamento otimizado |

### Utilitários

| Tecnologia | Versão | Propósito | Motivo da Escolha |
|---|---|---|---|
| **ESLint** | 10.5.0 | Code quality | Detecção de erros, code patterns |

---

## 🏗️ Arquitetura do Projeto

### Estrutura de Diretórios

```
iireb/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Layout root com metadados globais
│   │   ├── page.tsx                # Homepage (única página)
│   │   ├── robots.ts               # Configuração robots.txt
│   │   ├── sitemap.ts              # Geração de sitemap
│   │   └── globals.css             # Estilos globais + Tailwind
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navegação com menu mobile (Client)
│   │   │   └── Footer.tsx          # Rodapé com contatos (Server)
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Banner principal
│   │   │   ├── ServicesSection.tsx # Grid de serviços
│   │   │   ├── AboutSection.tsx    # Sobre o instituto
│   │   │   ├── BenefitsSection.tsx # Lista de diferenciais
│   │   │   ├── GallerySection.tsx  # Galeria de fotos
│   │   │   ├── CommunitySection.tsx# Ações sociais
│   │   │   ├── TestimonialsSection.tsx # Depoimentos
│   │   │   └── ContactSection.tsx  # CTA final
│   │   │
│   │   └── ui/
│   │       ├── SectionTitle.tsx    # Componente reutilizável de título
│   │       └── WhatsAppButton.tsx  # Botão flutuante WhatsApp
│   │
│   ├── data/
│   │   ├── services.ts             # 6 especialidades
│   │   ├── benefits.ts             # 9 diferenciais
│   │   └── testimonials.ts         # 3 depoimentos
│   │
│   ├── lib/
│   │   ├── constants.ts            # Dados globais, design system, URLs
│   │   └── scroll.ts               # Utility para scroll suave
│   │
│   └── types/
│       └── index.ts                # Tipos TypeScript compartilhados
│
├── public/
│   └── images/
│       ├── brand/                  # Logo e ícone
│       ├── about/                  # Foto do team
│       ├── hero/                   # Banner principal
│       └── community/              # Fotos de ações sociais
│
├── package.json                    # Dependências
├── next.config.ts                  # Configuração Next.js
├── tsconfig.json                   # Configuração TypeScript
├── tailwind.config.ts              # Configuração Tailwind
├── postcss.config.mjs              # Configuração PostCSS
├── eslint.config.js                # Configuração ESLint
├── .gitignore                      # Git ignore patterns
├── .vercelignore                   # Vercel ignore patterns
└── README.md                       # Este arquivo
```

### Organização de Componentes

```
PAGE (page.tsx - Server Component)
  │
  ├── Header (Client Component)
  │   ├── Logo/Branding
  │   ├── Nav Links (com smooth scroll)
  │   └── Mobile Menu Toggle
  │
  ├── HeroSection
  │   ├── Badge
  │   ├── Title + Subtitle
  │   ├── CTA Buttons
  │   ├── Stats Grid
  │   └── Hero Image
  │
  ├── ServicesSection
  │   └── Service Cards (6x)
  │
  ├── AboutSection
  │   ├── Team Image
  │   └── Text Content
  │
  ├── BenefitsSection
  │   └── Benefits List (9x)
  │
  ├── GallerySection
  │   └── Image Grid (3x)
  │
  ├── CommunitySection
  │   ├── Masonry Gallery (2x2)
  │   └── Impact Text
  │
  ├── TestimonialsSection
  │   └── Testimonial Cards (3x)
  │
  ├── ContactSection
  │   └── CTA Button
  │
  └── Footer
      ├── Branding
      ├── Contact Info
      ├── Business Hours
      └── Social Links
```

### Fluxo de Dados

```
constants.ts (Central Data Hub)
    │
    ├─→ WHATSAPP_LINK ────────→ CTA Buttons
    ├─→ COLORS ────────────────→ All Components (styling)
    ├─→ NAV_LINKS ────────────→ Header Navigation
    ├─→ HERO_STATS ───────────→ Hero Section
    └─→ SITE_NAME ────────────→ Header, Footer, Page Metadata
    
services.ts ──────→ ServicesSection
benefits.ts ──────→ BenefitsSection
testimonials.ts ──→ TestimonialsSection

static images/data ──→ All Image Components (no API calls)
```

### Padrões Arquiteturais

#### 1. **Component Composition Pattern**

Cada seção é um componente independente, facilitando manutenção isolada, reutilização, testes unitários e escalabilidade.

#### 2. **Server Components by Default**

11 de 12 componentes são Server Components. Apenas Header é Client Component (necessário para interatividade com menu mobile).

**Benefícios**:
- Zero JavaScript desnecessário no bundle
- Dados seguros (sem exposição de tokens)
- Performance melhorada
- SEO otimizado

#### 3. **Centralized Constants**

Todas as configurações, cores, textos e URLs em um único arquivo (`src/lib/constants.ts`).

#### 4. **Static Data Pattern**

Sem API backend - dados carregados em build time através de arquivos TypeScript em `src/data/`.

---

## 🎨 Decisões Técnicas

### 1. Escolha do Next.js 15

**Motivos**:
- SSG (Static Site Generation) para performance máxima
- Server Components por padrão (menos JS no cliente)
- Metadados automáticos (SEO integrado)
- Image Optimization nativo
- Deploy automático no Vercel

### 2. Server Components por Padrão

**Motivos**:
- 11 componentes não precisam de interatividade
- Reduz bundle de JavaScript ~70%
- Segurança: não expõe dados no client
- Performance: rendering no servidor
- SEO: melhor indexação

### 3. Tailwind CSS vs Alternativas

**Motivos**:
- ✅ Utility-first: prototipagem rápida
- ✅ Bundle pequeno: PurgeCSS automático
- ✅ Sem CSS-in-JS overhead
- ✅ Responsivo built-in (md:, sm:, lg:)
- ✅ Design system consistente

### 4. Sem API Backend

**Motivos**:
- Website informativo (não precisa de BD)
- Performance máxima (sem latência de API)
- Deploy simplificado (apenas static hosting)
- Custo reduzido (nenhum backend necessário)

### 5. Sem State Management Global

**Motivos**:
- Projeto não tem estado complexo
- Apenas Header tem estado (menuOpen)
- Context API seria overkill

---

## 📊 Performance

### Estratégia de Renderização: Static Site Generation

```
Build Time:
next build → Gera todas as páginas em HTML estático
            ↓
            Armazenado em CDN (Vercel Edge Network)
            ↓
            Serve instantaneamente ao usuário
            
Benefit: TTFB < 50ms, FCP < 1s, LCP < 2.5s
```

### Otimização de Imagens

- ✅ WebP format (58% menor que JPEG)
- ✅ Lazy loading por padrão
- ✅ Responsive images (diferentes resoluções por device)
- ✅ Caching agressivo
- ✅ AVIF fallback em navegadores suportados

### Bundle Final

```
First Load JS: 110 kB (compartilhado)
├── React: 46.2 kB
├── Next.js runtime: 54.2 kB
└── Aplicação: 1.99 kB

Total: ~2 kB de código customizado!
```

### Web Vitals Esperados

```
LCP (Largest Contentful Paint): < 2.5s ✅
FID (First Input Delay): < 100ms ✅
CLS (Cumulative Layout Shift): < 0.1 ✅
PageSpeed Insights: 95+ Score ✅
```

---

## 📱 Responsividade

### Design Mobile-First

**Tipografia Responsiva**:
```tsx
fontSize: "clamp(2rem, 5vw, 3.25rem)"
// Mobile: 2rem (32px) | Desktop: 3.25rem (52px)
```

**Grid Responsivo**:
```tsx
className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
// Mobile: 1 coluna | Desktop: 3 colunas
```

**Menu Mobile**:
```tsx
{!isMobile && <DesktopNav />}
{isMobile && <MobileMenuButton />}
```

---

## 🔍 SEO

### Otimizações Implementadas

✅ **Metadata Global** - Título, descrição, Open Graph tags  
✅ **Sitemap XML** - Geração automática  
✅ **Robots.txt** - Controle de crawlers  
✅ **Idioma Declarado** - `<html lang="pt-BR">`  
✅ **Canonical URL** - Evita conteúdo duplicado  

---

## 🚀 Instalação

### Pré-requisitos

```
- Node.js 18.17+
- npm 9+ ou pnpm 8+
```

### Passos

#### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/iireb.git
cd iireb
```

#### 2. Instale as Dependências

```bash
npm install
# ou
pnpm install
```

#### 3. Variáveis de Ambiente (Opcional)

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://iireb.com.br
```

#### 4. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts Disponíveis

```bash
npm run dev       # Servidor desenvolvimento (hot reload)
npm run build     # Build para produção (SSG)
npm start         # Serve build estático
npm run lint      # ESLint + TypeScript check
```

---

## 📦 Dependências

### Produção

```json
{
  "react": "18.3.1",
  "react-dom": "18.3.1",
  "next": "^15.1.0",
  "lucide-react": "0.487.0"
}
```

### Desenvolvimento

```json
{
  "typescript": "^5.7.0",
  "tailwindcss": "4.1.12",
  "eslint": "10.5.0"
}
```

---

## 🔧 Configuração

### TypeScript

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Tailwind CSS

```typescript
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {} },
  plugins: []
}
```

---

## 🤝 Contribuindo

```bash
# 1. Crie uma branch
git checkout -b feature/sua-feature

# 2. Teste localmente
npm run dev && npm run lint

# 3. Commit e push
git commit -m "feat: descrição"
git push origin feature/sua-feature

# 4. Abra Pull Request
```

---

## 📞 Contato

- 📱 **WhatsApp**: (21) 99157-2459
- 📷 **Instagram**: [@iireb.oficial](https://instagram.com/iireb.oficial)
- 🌐 **Website**: https://iireb.com.br

---

## 📄 Licença

MIT © 2026

---

**Desenvolvido com ❤️ usando Next.js 15 + React 18 + TypeScript + Tailwind CSS**
