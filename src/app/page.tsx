import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Code2,
  Layers,
  Sprout,
  CheckCircle2,
  FolderGit2,
  Cpu,
  Mail,
  Flame,
  Globe,
  Radio,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#f1f5f9] relative bg-grid-pattern selection:bg-[#10b981]/30 selection:text-[#34d399]">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#10b981]/20 via-[#06b6d4]/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-[#10b981]/10 blur-[150px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#07090e]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#10b981]/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider text-white flex items-center gap-1.5">
                STYGMAR<span className="text-[#10b981]">.COM</span>
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#94a3b8] -mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span>Hub de projets actifs</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94a3b8]">
            <a href="#projets" className="hover:text-white transition-colors">
              Projets
            </a>
            <a href="#vision" className="hover:text-white transition-colors">
              Philosophie
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://jardincalcul.stygmar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sprout className="w-3.5 h-3.5 text-[#34d399]" />
              <span>JardinCalcul ↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30 mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#34d399]" />
          <span>PORTAIL OFFICIEL &amp; EXPÉRIMENTATIONS NUMÉRIQUES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Concevoir des outils web{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] via-[#10b981] to-[#06b6d4]">
            rapides, utiles &amp; sans friction.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10">
          Bienvenue sur le hub central de <strong>Stygmar</strong>. Vous trouverez ici nos applications en libre accès, conçues pour résoudre des besoins concrets avec précision et élégance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projets"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-lg shadow-[#10b981]/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explorer les projets</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Stygmar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all hover:border-white/20"
          >
            <FolderGit2 className="w-4 h-4 text-[#94a3b8]" />
            <span>GitHub @Stygmar</span>
          </a>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16 pt-12 border-t border-white/10 text-left">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
            <div className="text-xs text-[#94a3b8] mt-1">Accès gratuit &amp; libre</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-2xl sm:text-3xl font-black text-[#34d399]">0</div>
            <div className="text-xs text-[#94a3b8] mt-1">Inscription obligatoire</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-2xl sm:text-3xl font-black text-white">7+</div>
            <div className="text-xs text-[#94a3b8] mt-1">Outils de calcul actifs</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-2xl sm:text-3xl font-black text-[#06b6d4]">&lt; 100ms</div>
            <div className="text-xs text-[#94a3b8] mt-1">Temps de calcul local</div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projets" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#34d399] uppercase tracking-wider mb-2">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Applications &amp; Outils déployés</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Le catalogue des projets
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] max-w-sm">
            Chaque outil est développé avec une obsession pour la rapidité et l&apos;utilité concrète.
          </p>
        </div>

        {/* Featured Project: JardinCalcul */}
        <div className="relative group rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 p-8 sm:p-10 mb-10 overflow-hidden transition-all duration-300 hover:border-[#10b981]/50 hover:shadow-2xl hover:shadow-[#10b981]/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/15 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-[#10b981]/25 transition-all" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-ping" />
                  EN LIGNE &amp; ACTIF
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/10">
                  Aménagement Extérieur &amp; BTP
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/10">
                  Version 2.0
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#34d399] transition-colors">
                JardinCalcul — Calculateurs de Matériaux de Jardin
              </h3>

              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                La suite gratuite de référence pour dimensionner tous vos travaux d&apos;extérieur sans gaspillage : 
                <strong> gravier pour allée, paillage, terreau potager, graines de gazon, béton &amp; mortier, clôture rigide et dalles de terrasse</strong>.
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-[#cbd5e1]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0" />
                  <span>Volumes (m³), tonnages et sacs exacts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0" />
                  <span>Schémas 2D de coupe de sol interactifs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0" />
                  <span>Estimation budgétaire en magasin en direct</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0" />
                  <span>Partage WhatsApp &amp; listes imprimables</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">Next.js 16</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">React 19</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">TypeScript</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">Tailwind CSS v4</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">Vitest</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="lg:text-right shrink-0">
              <a
                href="https://jardincalcul.stygmar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-xl shadow-[#10b981]/20 hover:scale-105 active:scale-[0.98]"
              >
                <span>Ouvrir JardinCalcul</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="text-[11px] text-[#64748b] mt-2 text-center lg:text-right">
                Sous-domaine : jardincalcul.stygmar.com
              </div>
            </div>
          </div>
        </div>

        {/* Future Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teaser 2 */}
          <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  EN COURS DE DÉVELOPPEMENT
                </span>
                <Cpu className="w-5 h-5 text-[#64748b]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Outils de Productivité &amp; Automatisation
              </h4>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Un micro-SaaS ultra ciblé pour simplifier la gestion et l&apos;organisation des créateurs et indépendants.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#64748b]">
              <span>Disponibilité prévue : Q3/Q4 2026</span>
              <span className="font-semibold text-amber-400/80">Prochainement</span>
            </div>
          </div>

          {/* Teaser 3 */}
          <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  STYGMAR LABS (R&amp;D)
                </span>
                <Flame className="w-5 h-5 text-[#64748b]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Expérimentations IA &amp; Algorithmes
              </h4>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Prototypes interactifs, connecteurs API intelligents et expérimentations de modèles d&apos;intelligence artificielle.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#64748b]">
              <span>Projets Open-Source</span>
              <span className="font-semibold text-purple-400/80">En réflexion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section id="vision" className="border-y border-white/10 bg-white/[0.01] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Notre Philosophie de Création
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mt-3">
              Créer des logiciels simples qui respectent l&apos;attention et le temps de ceux qui les utilisent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 text-[#34d399] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Zéro Friction</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Pas de compte forcé, pas d&apos;abonnement caché, pas de pop-ups intrusives. L&apos;outil doit être utilisable en 3 secondes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/15 text-[#22d3ee] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Précision Technique</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Tous les moteurs de calcul sont basés sur des normes officielles vérifiées et couverts par des suites de tests unitaires automatisées.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Stack Moderne</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Architecture App Router Next.js, typage TypeScript strict et déploiement edge distribué sur Vercel pour des performances instantanées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-[#10b981]/20 text-[#34d399] flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Une idée de projet ou un retour ?
          </h2>

          <p className="text-sm text-[#94a3b8] mb-8 leading-relaxed">
            Vous avez une suggestion pour JardinCalcul ou vous souhaitez discuter d&apos;une future collaboration ? Échangeons directement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:contact@stygmar.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#07090e] font-bold text-sm hover:bg-white/90 transition-colors shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>contact@stygmar.com</span>
            </a>
            <a
              href="https://github.com/Stygmar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/10 transition-colors"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-[#05070a] text-xs text-[#64748b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#94a3b8]">
            <span className="font-bold text-white">STYGMAR</span>
            <span>—</span>
            <span>© 2026 Tous droits réservés.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://jardincalcul.stygmar.com" className="hover:text-[#34d399] transition-colors">
              JardinCalcul
            </a>
            <a href="https://github.com/Stygmar" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="mailto:contact@stygmar.com" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
