import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Code2,
  Sprout,
  CheckCircle2,
  FolderGit2,
  Cpu,
  Mail,
  Scale,
  TrendingDown,
  Sliders,
  Monitor,
  BadgeCheck,
  GraduationCap,
  Bot,
  Terminal,
  Rocket,
  Coins,
  Gamepad2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#06080d] text-[#f1f5f9] relative bg-grid-pattern selection:bg-[#10b981]/30 selection:text-[#34d399]">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#10b981]/15 via-[#06b6d4]/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-[900px] right-0 w-[600px] h-[600px] bg-[#06b6d4]/10 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[1800px] left-0 w-[500px] h-[500px] bg-[#8b5cf6]/10 blur-[160px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#06080d]/80 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#10b981]/25 group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider text-white flex items-center gap-1.5">
                STYGMAR<span className="text-[#10b981]">.COM</span>
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#94a3b8] -mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span>Studio &amp; Outils Web Indépendants</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94a3b8]">
            <a href="#projets" className="hover:text-white transition-colors">
              Projets
            </a>
            <a href="#hardware" className="hover:text-[#06b6d4] transition-colors flex items-center gap-1">
              <span>Hardware &amp; Tech</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#06b6d4]/15 text-[#06b6d4] font-semibold border border-[#06b6d4]/30">Bientôt</span>
            </a>
            <a href="#parcours" className="hover:text-[#a855f7] transition-colors">
              Parcours
            </a>
            <a href="#philosophie" className="hover:text-white transition-colors">
              Philosophie
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.jardincalcul.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10b981]/15 hover:bg-[#10b981]/25 border border-[#10b981]/30 text-xs font-bold text-[#34d399] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-[#10b981]/20"
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>JardinCalcul.fr ↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/25 mb-8 backdrop-blur-sm shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-[#34d399]" />
          <span>PORTAIL OFFICIEL &amp; STUDIO NUMÉRIQUE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Des outils web utiles,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] via-[#06b6d4] to-[#a855f7]">
            rapides &amp; sans friction.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10">
          Développeur indépendant diplômé en informatique et passionné d&apos;automatisation logicielle.
          De la création de bots et scripts haute performance au développement d&apos;outils web ouverts : des applications directes qui résolvent de vrais besoins.
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
            href="https://www.jardincalcul.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-semibold text-sm transition-all hover:border-[#10b981]/40"
          >
            <Sprout className="w-4 h-4 text-[#34d399]" />
            <span>Visiter JardinCalcul.fr ↗</span>
          </a>
        </div>

        {/* Real Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 pt-12 border-t border-white/[0.08] text-left">
          <div className="glass-card rounded-2xl p-5 border border-white/[0.08] transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#34d399]">JardinCalcul</div>
            <div className="text-xs text-[#94a3b8] mt-1.5 font-medium">Suite extérieure complète en ligne</div>
          </div>
          <div className="glass-card rounded-2xl p-5 border border-white/[0.08] transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-white">4 Ans Automatisation</div>
            <div className="text-xs text-[#94a3b8] mt-1.5 font-medium">Botting Java &amp; AutoHotkey (2021-2025)</div>
          </div>
          <div className="glass-card rounded-2xl p-5 border border-white/[0.08] transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#06b6d4]">&lt; 50 ms</div>
            <div className="text-xs text-[#94a3b8] mt-1.5 font-medium">Calcul local instantané sans rechargement</div>
          </div>
          <div className="glass-card rounded-2xl p-5 border border-white/[0.08] transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#a855f7]">Hardware Lab</div>
            <div className="text-xs text-[#94a3b8] mt-1.5 font-medium">Prochain comparateur tech en R&amp;D</div>
          </div>
        </div>
      </section>

      {/* Flagship Project Section: JardinCalcul */}
      <section id="projets" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#34d399] uppercase tracking-wider mb-2">
              <BadgeCheck className="w-4 h-4 text-[#34d399]" />
              <span>Projet Phare Déployé</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              JardinCalcul.fr
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] max-w-md">
            L&apos;application web de référence pour calculer et estimer les quantités de matériaux pour aménager son jardin sans gaspillage.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="relative group rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent border border-white/15 p-8 sm:p-12 mb-16 overflow-hidden transition-all duration-300 hover:border-[#10b981]/50 hover:shadow-2xl hover:shadow-[#10b981]/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/15 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-[#10b981]/25 transition-all" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="space-y-5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-ping" />
                  EN LIGNE &amp; ACTIF
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10">
                  Aménagement Extérieur &amp; BTP
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10">
                  50 Pages Statiques
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#34d399] transition-colors mb-2">
                  La suite complète d&apos;estimation de matériaux de jardin
                </h3>
                <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                  Conçu pour les particuliers et bricoleurs exigeants : fini les hésitations en magasin.
                  Vous décrivez votre chantier (dimensions, usage, finition), l&apos;outil calcule instantanément le cubage,
                  le tonnage, le nombre de sacs et vous génère une liste d&apos;achats complète avec accessoires indispensables.
                </p>
              </div>

              {/* 4 Core pillars of JardinCalcul */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#cbd5e1]">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">7 Calculateurs Métier :</strong>
                    <span className="text-[#94a3b8] text-xs">Gravier, béton, terreau, gazon, paillage, clôture, terrasse sur plots.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Schémas 2D de coupe :</strong>
                    <span className="text-[#94a3b8] text-xs">Visualisation immédiate de l&apos;épaisseur et des couches techniques.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Décision d&apos;achat &amp; Budget :</strong>
                    <span className="text-[#94a3b8] text-xs">Arbitrage économique sacs vs vrac et fourchette de prix magasin en direct.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">35 Guides &amp; Fiches Repères :</strong>
                    <span className="text-[#94a3b8] text-xs">Dosages au seau/pelle, calibres, normes DTU et conseils de mise en œuvre.</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">Next.js 16 (App Router)</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">React 19</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">TypeScript</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">Tailwind CSS v4</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">Vitest (65 tests)</span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="lg:text-right shrink-0 space-y-3">
              <a
                href="https://www.jardincalcul.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-xl shadow-[#10b981]/25 hover:scale-105 active:scale-[0.98]"
              >
                <span>Accéder à JardinCalcul.fr</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="text-xs text-[#94a3b8] text-center lg:text-right">
                Domaine officiel : <strong className="text-white">jardincalcul.fr</strong>
              </div>
              <div className="text-[11px] text-[#64748b] text-center lg:text-right">
                Gratuit · Sans pub intrusive · 100% Client-side
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Up: Tech & Hardware Comparator Section */}
      <section id="hardware" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20 border-t border-white/[0.08]">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#06b6d4]/10 via-white/[0.02] to-[#8b5cf6]/10 border border-[#06b6d4]/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#06b6d4]/15 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8b5cf6]/15 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                PROCHAIN PROJET EN CONCEPTION
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/10">
                Hardware &amp; Tech
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] font-mono">
              <Cpu className="w-4 h-4 text-[#22d3ee]" />
              <span>Horizon 2026</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Le Comparateur &amp; Agrégateur Hardware{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">
                neutre, sans bullshit ni faux bons plans.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Le marché des composants PC est pollué par des comparateurs automatisés sans âme, des benchmarks trompeurs et de fausses promos barrées.
              Le prochain projet du studio Stygmar appliquera la même formule gagnante que JardinCalcul : 
              <strong> clarté absolue, outils directs, métriques réelles et aucun parti-pris.</strong>
            </p>
          </div>

          {/* 4 Key Pillars of the Hardware Project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 hover:border-[#06b6d4]/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#06b6d4]/15 text-[#22d3ee] flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Comparateur Réel GPU &amp; CPU (FPS / € / Watt)</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Fini les scores théoriques inutiles. Comparaison directe des performances réelles en jeu et création par rapport au prix payé et à la consommation énergétique.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 hover:border-[#06b6d4]/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#10b981]/15 text-[#34d399] flex items-center justify-center font-bold">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Agrégateur de Deals &amp; Historique de Cours</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Suivi transparent des cours des composants chez les principaux cybermarchands européens. Détection mathématique des vraies baisses de prix par rapport à la moyenne trimestrielle.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 hover:border-[#a855f7]/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#8b5cf6]/15 text-[#a855f7] flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Config Builder &amp; Vérificateur Physique</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Vérification intelligente des compatibilités physiques : encombrement ventirad, longueur de carte graphique dans le boîtier, marge de l&apos;alimentation et compatibilité VRM/socket.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 hover:border-amber-400/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center font-bold">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Paniers Types &amp; Conseils d&apos;Achat par Budget</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Sélections de configurations cohérentes (1080p budget, 1440p équilibrée, 4K / IA créateurs) mises à jour en continu selon les stocks et les fluctuations réelles.
              </p>
            </div>
          </div>

          {/* Project Status footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
              <span>Phase actuelle : <strong>Modélisation de la base de données de composants &amp; moteurs de calcul de ratios</strong></span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#22d3ee] font-semibold transition-colors"
            >
              <span>Vous avez des idées ou suggestions pour ce projet ? Écrivez-nous →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Background / Parcours Section */}
      <section id="parcours" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20 border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#a855f7] uppercase tracking-wider mb-2">
              <Terminal className="w-4 h-4 text-[#a855f7]" />
              <span>Mon Parcours &amp; ADN Technique</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              De l&apos;automatisation poussée à l&apos;édition d&apos;outils web
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] max-w-md">
            Un profil d&apos;ingénierie forgé par 4 ans de théorie universitaire puis 4 ans de programmation de bots et d&apos;automatisation sur les marchés virtuels mondiaux.
          </p>
        </div>

        {/* Chronological Timeline Cards */}
        <div className="space-y-8">
          {/* Card 1: 2017 - 2021 (Licence Blois) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 p-6 sm:p-8 hover:border-[#8b5cf6]/40 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8b5cf6]/15 text-[#a855f7] flex items-center justify-center shrink-0 border border-[#8b5cf6]/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/40 font-mono">
                      2017 — 2021
                    </span>
                    <span className="text-xs text-[#94a3b8] font-medium">
                      Université / Antenne de Blois
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Licence Informatique — Fondations &amp; Rigueur Algorithmique
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed max-w-3xl">
                    Quatre années d&apos;apprentissage des fondamentaux de l&apos;informatique moderne : conception algorithmique pure, structures de données avancées, programmation système (C/C++), programmation orientée objet (Java), modélisation relationnelle SQL et architectures réseaux.
                    Ce socle universitaire m&apos;a apporté la rigueur nécessaire pour modéliser des problèmes mathématiques et physiques sans approximation.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-[#cbd5e1] border border-white/10">Licence Informatique (Blois)</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-[#cbd5e1] border border-white/10">Algorithmique &amp; Complexité</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-[#cbd5e1] border border-white/10">Java / C / C++</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-[#cbd5e1] border border-white/10">Bases de Données SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 2021 - 2025 (Eldorado.gg, Botting Tarkov & OSRS) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#06b6d4]/10 via-white/[0.03] to-amber-500/5 border border-[#06b6d4]/30 p-6 sm:p-8 hover:border-[#06b6d4]/60 transition-colors shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#06b6d4]/15 text-[#22d3ee] flex items-center justify-center shrink-0 border border-[#06b6d4]/30">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/40 font-mono">
                      2021 — 2025
                    </span>
                    <span className="text-xs text-[#94a3b8] font-medium">
                      Économie Numérique &amp; Systèmes 24/7
                    </span>
                    <a
                      href="https://www.eldorado.gg/users/Stygmar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-xs font-bold text-amber-400 transition-colors"
                      title="Consulter le profil marchand certifié Stygmar sur Eldorado.gg"
                    >
                      <Coins className="w-3.5 h-3.5" />
                      <span>Profil Vendeur @Stygmar sur Eldorado.gg ↗</span>
                    </a>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Ingénierie d&apos;Automatisation, Botting &amp; Revente Numérique à Grande Échelle
                  </h3>

                  <p className="text-sm text-[#94a3b8] leading-relaxed max-w-3xl">
                    Professionnalisation à temps plein dans l&apos;économie numérique des jeux vidéo : génération automatisée et revente de monnaies virtuelles et de comptes sur les places de marché internationales.
                    Pendant 4 ans, j&apos;ai conçu et maintenu des infrastructures logicielles autonomes reposant sur deux spécialisations majeures :
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                      <div className="flex items-center gap-2 text-white font-bold text-sm">
                        <Gamepad2 className="w-4 h-4 text-[#06b6d4]" />
                        <span>Escape from Tarkov (EFT) — AutoHotkey</span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        Scripts AutoHotkey (AHK) avancés pour automatiser les interactions complexes d&apos;inventaire, de marché (Flea Market) et de transactions en millisecondes avec contournement des latences.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                      <div className="flex items-center gap-2 text-white font-bold text-sm">
                        <Terminal className="w-4 h-4 text-[#a855f7]" />
                        <span>Old School RuneScape (OSRS) — Java</span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        Développement de bots complets en Java : reverse-engineering du client, logique décisionnelle événementielle et parcs multi-instances tournant 24/7 de façon résiliente.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#cbd5e1] bg-white/[0.02] border border-white/[0.08] p-3.5 rounded-xl leading-relaxed">
                    <strong>Ce que cette école de terrain m&apos;a apporté :</strong> Une maîtrise absolue de l&apos;automatisation logicielle. Quand une erreur de code, une fuite de mémoire ou une désynchronisation réseau entraîne une perte d&apos;argent réelle et immédiate, la tolérance aux bugs est nulle : le code doit être irréprochable, optimisé à la milliseconde et conçu pour tourner sans surveillance.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#06b6d4]/10 text-[#22d3ee] border border-[#06b6d4]/30">AutoHotkey (AHK)</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#06b6d4]/10 text-[#22d3ee] border border-[#06b6d4]/30">Java Botting &amp; Reverse</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-[#cbd5e1] border border-white/10">Multi-Threading 24/7</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30">Eldorado.gg Marketplace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: 2026 - Aujourd'hui (JardinCalcul & Projets Web) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#10b981]/10 via-white/[0.03] to-transparent border border-[#10b981]/30 p-6 sm:p-8 hover:border-[#10b981]/60 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#10b981]/15 text-[#34d399] flex items-center justify-center shrink-0 border border-[#10b981]/30">
                  <Rocket className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40 font-mono">
                      2026 — Aujourd&apos;hui
                    </span>
                    <span className="text-xs text-[#94a3b8] font-medium">
                      Édition Web Indépendante &amp; Outils Utiles
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Création d&apos;Écosystèmes Numériques Ouverts, Sans Friction &amp; Performants
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed max-w-3xl">
                    Mettre cette obsession de l&apos;automatisation, de la fiabilité et de la performance au service du web grand public :
                  </p>
                  <ul className="text-xs sm:text-sm text-[#cbd5e1] space-y-2 pt-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                      <span><strong>JardinCalcul.fr :</strong> 7 calculateurs d&apos;aménagement extérieur, 35 fiches repères et 50 pages statiques avec calculs physiques locaux instantanés (&lt; 50 ms).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" />
                      <span><strong>Projet Hardware &amp; Tech (En cours) :</strong> Application directe des techniques de scraping et d&apos;automatisation pour concevoir un comparateur de composants PC et détecteur de faux deals 100 % neutre.</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/30">Next.js 16</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/30">React 19</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/30">TypeScript</span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-[#cbd5e1] border border-white/10">Full-Stack Solo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Competency Highlight Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#06b6d4]/10 via-purple-500/10 to-[#10b981]/10 border border-white/10 space-y-3">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[#22d3ee]" />
            <h4 className="text-base sm:text-lg font-bold text-white">
              Pourquoi l&apos;expertise en automatisation fait la différence
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
            Avoir programmé des bots et des systèmes temps réel pendant des années façonne une manière singulière de concevoir le web : <strong>zéro gaspillage de ressources, exécution locale instantanée, automatisation intégrale des tests et du déploiement, et tolérance zéro pour les interfaces lentes ou encombrées</strong>.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophie" className="border-t border-white/[0.08] bg-white/[0.01] py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Notre Ligne de Conduite
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mt-3">
              Construire des applications web qui respectent le temps et l&apos;intelligence de leurs utilisateurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 text-[#34d399] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Zéro Friction</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Aucun compte forcé, aucun paywall dissimulé, aucune pop-up bloquante. L&apos;utilisateur entre ses données et obtient sa réponse en quelques secondes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/15 text-[#22d3ee] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Rigueur &amp; Transparence</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Les moteurs de calcul et algorithmes de comparaison s&apos;appuient sur des données physiques, des normes établies et des formules vérifiables, pas sur du vent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Ingénierie Web Moderne</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Next.js App Router, TypeScript strict, exécution client-side instantanée et architecture légère pour des temps de chargement ultra-rapides même sur mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center scroll-mt-20">
        <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10">
          <div className="w-14 h-14 rounded-2xl bg-[#10b981]/15 text-[#34d399] flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Un retour, une suggestion ou une question ?
          </h2>

          <p className="text-sm text-[#94a3b8] mb-8 leading-relaxed">
            Vous avez une idée d&apos;amélioration pour <strong>JardinCalcul.fr</strong> ou une suggestion de fonctionnalité pour le futur <strong>comparateur Hardware</strong> ? Échangeons directement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:contact@stygmar.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#06080d] font-bold text-sm hover:bg-white/90 transition-colors shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>contact@stygmar.com</span>
            </a>
            <a
              href="https://github.com/Stygmar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/10 transition-colors"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>GitHub @Stygmar</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-10 bg-[#040609] text-xs text-[#64748b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#94a3b8]">
            <span className="font-bold text-white">STYGMAR</span>
            <span>—</span>
            <span>Studio Web Indépendant · © 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.jardincalcul.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#34d399] transition-colors font-medium text-white/80"
            >
              JardinCalcul.fr ↗
            </a>
            <a
              href="https://www.eldorado.gg/users/Stygmar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Eldorado.gg
            </a>
            <a
              href="https://github.com/Stygmar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
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
