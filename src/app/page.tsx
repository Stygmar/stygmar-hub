"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
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
  Copy,
  Check,
  Activity,
} from "lucide-react";

type TimelineTab = "botting" | "blois" | "web";
type ProjectTab = "jardin" | "hardware";
type CodeSnippetTab = "tarkov" | "osrs" | "jardin";

export default function HomePage() {
  const [timelineTab, setTimelineTab] = useState<TimelineTab>("botting");
  const [projectTab, setProjectTab] = useState<ProjectTab>("jardin");
  const [codeTab, setCodeTab] = useState<CodeSnippetTab>("tarkov");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("contact@stygmar.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-[#f1f5f9] relative bg-grid-pattern selection:bg-[#10b981]/30 selection:text-[#34d399]">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#10b981]/15 via-[#06b6d4]/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-[800px] right-0 w-[600px] h-[600px] bg-[#06b6d4]/10 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[1700px] left-0 w-[500px] h-[500px] bg-[#8b5cf6]/10 blur-[160px] pointer-events-none -z-10" />

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
                <span>Alexandre · Développeur &amp; Maker</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94a3b8]">
            <a href="#parcours" className="hover:text-[#a855f7] transition-colors font-semibold flex items-center gap-1">
              <span>Mon Parcours</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
            </a>
            <a href="#projets" className="hover:text-white transition-colors">
              Projets
            </a>
            <a href="#hardware" className="hover:text-[#06b6d4] transition-colors flex items-center gap-1">
              <span>Hardware Lab</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#06b6d4]/15 text-[#06b6d4] font-semibold border border-[#06b6d4]/30">Bientôt</span>
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/25 mb-6 backdrop-blur-sm shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-[#34d399]" />
          <span>PORTFOLIO, EXPERTISE &amp; PROJETS ACTIFS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Alexandre (Stygmar).{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] via-[#06b6d4] to-[#a855f7]">
            Ingénieur logiciel &amp; expert en automatisation.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-8">
          9 ans de code : 4 ans de licence informatique à Blois, 4 ans d&apos;ingénierie d&apos;automatisation et de botting gaming 24/7 sur Eldorado.gg,
          puis la création en 2026 d&apos;outils web ouverts, utiles et ultra-rapides comme <strong>JardinCalcul.fr</strong>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#parcours"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] hover:opacity-95 text-white font-bold text-sm transition-all shadow-lg shadow-[#8b5cf6]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Terminal className="w-4 h-4" />
            <span>Explorer mon parcours en détail</span>
          </a>
          <a
            href="https://www.jardincalcul.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-lg shadow-[#10b981]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sprout className="w-4 h-4" />
            <span>Tester JardinCalcul.fr ↗</span>
          </a>
          <a
            href="https://www.eldorado.gg/users/Stygmar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold text-sm transition-all hover:scale-[1.02]"
          >
            <Coins className="w-4 h-4" />
            <span>Profil Eldorado.gg ↗</span>
          </a>
          <a
            href="https://github.com/Stygmar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all hover:border-white/20"
          >
            <FolderGit2 className="w-4 h-4 text-[#94a3b8]" />
            <span>GitHub</span>
          </a>
        </div>
      </section>

      {/* SECTION DU HAUT : Interactive Timeline / Parcours */}
      <section id="parcours" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden shadow-2xl">
          {/* Header of Timeline */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#a855f7] uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4 text-[#a855f7]" />
                <span>Parcours Chronologique &amp; Savoir-Faire</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                De l&apos;automatisation de haut vol à l&apos;édition d&apos;outils web
              </h2>
            </div>
            <div className="text-xs text-[#94a3b8] md:text-right">
              Cliquez sur une période pour explorer l&apos;ingénierie et les technologies associées.
            </div>
          </div>

          {/* Interactive Epoch Switcher Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
            <button
              type="button"
              onClick={() => setTimelineTab("blois")}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                timelineTab === "blois"
                  ? "bg-[#8b5cf6]/15 border-[#8b5cf6] ring-2 ring-[#8b5cf6]/30 shadow-lg shadow-[#8b5cf6]/10"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20 text-[#94a3b8]"
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                timelineTab === "blois" ? "bg-[#8b5cf6] text-white" : "bg-white/5 text-[#94a3b8]"
              }`}>
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#c084fc]">2017 — 2021</div>
                <div className="font-bold text-sm text-white mt-0.5">Licence Informatique</div>
                <div className="text-xs text-[#94a3b8] mt-0.5">Université · Antenne de Blois</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setTimelineTab("botting")}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 relative overflow-hidden ${
                timelineTab === "botting"
                  ? "bg-[#06b6d4]/15 border-[#06b6d4] ring-2 ring-[#06b6d4]/30 shadow-lg shadow-[#06b6d4]/10"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20 text-[#94a3b8]"
              }`}
            >
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-mono text-amber-400 font-bold">Expérience Clé</span>
              </div>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                timelineTab === "botting" ? "bg-[#06b6d4] text-black font-bold" : "bg-white/5 text-[#94a3b8]"
              }`}>
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#22d3ee]">2021 — 2025</div>
                <div className="font-bold text-sm text-white mt-0.5">Automatisation &amp; Botting</div>
                <div className="text-xs text-[#94a3b8] mt-0.5">Tarkov · OSRS · Eldorado.gg</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setTimelineTab("web")}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                timelineTab === "web"
                  ? "bg-[#10b981]/15 border-[#10b981] ring-2 ring-[#10b981]/30 shadow-lg shadow-[#10b981]/10"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20 text-[#94a3b8]"
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                timelineTab === "web" ? "bg-[#10b981] text-white" : "bg-white/5 text-[#94a3b8]"
              }`}>
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#34d399]">2026 — Aujourd&apos;hui</div>
                <div className="font-bold text-sm text-white mt-0.5">Édition Web Indépendante</div>
                <div className="text-xs text-[#94a3b8] mt-0.5">JardinCalcul &amp; Hardware Lab</div>
              </div>
            </button>
          </div>

          {/* Active Tab Content Display */}
          <div className="bg-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all">
            {timelineTab === "blois" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]" />
                    <h3 className="text-xl font-bold text-white">
                      Licence Informatique Générale (Antenne Universitaire de Blois)
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#8b5cf6]/15 text-[#c084fc] border border-[#8b5cf6]/30">
                    2017 — 2021 · 4 ans
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Quatre années d&apos;immersion dans les fondamentaux scientifiques et l&apos;ingénierie logicielle.
                  C&apos;est ici que j&apos;ai forgé ma rigueur mathématique et ma compréhension profonde des architectures machines :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">Algorithmique &amp; Complexité :</strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Structures de données (arbres, graphes, tables de hachage), optimisation temporelle/spatiale et résolution de problèmes d&apos;ingénierie.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">Programmation Système &amp; POO :</strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      C et C++ pour la gestion bas niveau de la mémoire, et Java pour la programmation orientée objet stricte et modulaire.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">Bases de Données &amp; SQL :</strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Modélisation relationnelle, normalisation des données et requêtes d&apos;agrégation à haute performance.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">Systèmes &amp; Réseaux :</strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Protocoles TCP/IP, gestion des threads, processus concurrents et communications client-serveur.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#94a3b8]">
                  <span>Ce que ça m&apos;a apporté : la rigueur nécessaire pour modéliser des formules physiques sans la moindre approximation.</span>
                </div>
              </div>
            )}

            {timelineTab === "botting" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] animate-ping" />
                    <h3 className="text-xl font-bold text-white">
                      Ingénierie d&apos;Automatisation, Botting &amp; Revente Numérique à Grande Échelle
                    </h3>
                  </div>
                  <a
                    href="https://www.eldorado.gg/users/Stygmar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-xs font-bold text-amber-400 transition-colors"
                  >
                    <Coins className="w-3.5 h-3.5" />
                    <span>Vérifier mon profil marchand Eldorado.gg ↗</span>
                  </a>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Pendant 4 ans, j&apos;ai opéré professionnellement sur les marchés virtuels internationaux en développant des scripts et des bots pour générer et revendre des monnaies numériques et des comptes de jeux vidéo à fort volume.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-black/60 border border-[#06b6d4]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#22d3ee] font-bold text-sm">
                      <Gamepad2 className="w-4 h-4" />
                      <span>Escape from Tarkov (EFT) — AutoHotkey</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Scripts AHK poussés à l&apos;extrême : automatisation d&apos;interfaces d&apos;inventaire touffues, interactions de marché (Flea Market) en microsecondes, détection visuelle et contournement de la latence réseau.
                    </p>
                    <div className="text-[11px] font-mono text-[#06b6d4] pt-1">
                      → Maîtrise des timings d&apos;inputs &amp; macros réactives
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/60 border border-[#8b5cf6]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#c084fc] font-bold text-sm">
                      <Terminal className="w-4 h-4" />
                      <span>Old School RuneScape (OSRS) — Java</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Développement de bots complets en Java : reverse-engineering du client de jeu, logique événementielle, gestion de fermes multi-sessions et multi-threads tournant 24h/24 et 7j/7 sans surveillance.
                    </p>
                    <div className="text-[11px] font-mono text-[#a855f7] pt-1">
                      → Systèmes distribués, résilience 24/7 &amp; zero memory leak
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-200/90 leading-relaxed">
                  <strong>La leçon capitale de cette expérience :</strong> Quand une erreur de code, une fuite de mémoire ou une désynchronisation réseau entraîne une perte d&apos;argent réelle en direct, la tolérance aux bugs est nulle. On apprend à concevoir du code infaillible, testé sous toutes les conditions de stress et totalement autonome.
                </div>
              </div>
            )}

            {timelineTab === "web" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    <h3 className="text-xl font-bold text-white">
                      Édition d&apos;Outils Web Utiles, Neutres &amp; Instantanés
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30">
                    2026 — Aujourd&apos;hui
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Mettre ces 9 années d&apos;expertise en algorithmes, en automatisation et en scraping au service d&apos;outils web grand public en accès libre, sans intermédiaire ni modèle prédateur :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-black/60 border border-[#10b981]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#34d399] font-bold text-sm">
                      <Sprout className="w-4 h-4" />
                      <span>JardinCalcul.fr (En Production)</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      7 calculateurs physiques (gravier, béton, gazon, terreau, clôtures, dalles), 35 guides chantiers et 50 pages statiques. Exécution locale 100% client-side en moins de 50ms.
                    </p>
                    <a href="https://www.jardincalcul.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-[#34d399] hover:underline pt-1">
                      <span>Visiter le site officiel →</span>
                    </a>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/60 border border-[#06b6d4]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#22d3ee] font-bold text-sm">
                      <Cpu className="w-4 h-4" />
                      <span>Comparateur Hardware &amp; Tech (En Conception)</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      Comparateur neutre GPU/CPU (FPS/€/Watt), agrégateur de cours multi-marchands et détecteur mathématique de vrais bons plans matériels.
                    </p>
                    <a href="#hardware" className="inline-flex items-center gap-1 text-xs font-bold text-[#22d3ee] hover:underline pt-1">
                      <span>Découvrir le concept R&amp;D →</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Code / Stack Terminal Widget */}
          <div className="mt-8 rounded-2xl bg-[#030407] border border-white/10 overflow-hidden">
            <div className="px-4 py-3 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-[#94a3b8] ml-2">stygmar-env — terminal interactif</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCodeTab("tarkov")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                    codeTab === "tarkov" ? "bg-[#06b6d4]/20 text-[#22d3ee] font-bold" : "text-[#64748b] hover:text-white"
                  }`}
                >
                  tarkov_macro.ahk
                </button>
                <button
                  type="button"
                  onClick={() => setCodeTab("osrs")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                    codeTab === "osrs" ? "bg-[#8b5cf6]/20 text-[#c084fc] font-bold" : "text-[#64748b] hover:text-white"
                  }`}
                >
                  osrs_bot.java
                </button>
                <button
                  type="button"
                  onClick={() => setCodeTab("jardin")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                    codeTab === "jardin" ? "bg-[#10b981]/20 text-[#34d399] font-bold" : "text-[#64748b] hover:text-white"
                  }`}
                >
                  physics_engine.ts
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 font-mono text-xs text-[#cbd5e1] leading-relaxed overflow-x-auto">
              {codeTab === "tarkov" && (
                <div className="space-y-1">
                  <div className="text-[#64748b]">{"// 2021-2025: Script AutoHotkey avancé pour Escape from Tarkov (Flea Market / Inventaire)"}</div>
                  <div><span className="text-[#a855f7]">SetBatchLines</span>, -1</div>
                  <div><span className="text-[#a855f7]">SetKeyDelay</span>, -1, 0</div>
                  <div><span className="text-[#22d3ee]">AutoMarketSnipe</span>(itemSlot, targetPrice, maxLatencyMs) &#123;</div>
                  <div className="pl-4">pixelColor := <span className="text-amber-400">PixelGetColor</span>(itemSlot.x, itemSlot.y, &quot;RGB&quot;)</div>
                  <div className="pl-4"><span className="text-[#34d399]">if</span> (pixelColor == 0x24C882 &amp;&amp; <span className="text-amber-400">QueryPrice</span>() &lt;= targetPrice) &#123;</div>
                  <div className="pl-8"><span className="text-amber-400">SendInput</span>, &#123;Space&#125;&#123;Y&#125; <span className="text-[#64748b] font-italic">{"// Confirmation instantanée (< 15ms)"}</span></div>
                  <div className="pl-8"><span className="text-amber-400">LogTransactionSuccess</span>(&quot;EldoradoOrder_Sync&quot;, itemSlot.id)</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              )}

              {codeTab === "osrs" && (
                <div className="space-y-1">
                  <div className="text-[#64748b]">{"// 2021-2025: Démon multi-thread Java tournant 24/7 sur Old School RuneScape"}</div>
                  <div><span className="text-[#a855f7]">public class</span> <span className="text-[#22d3ee]">AutonomousWorkerThread</span> <span className="text-[#a855f7]">implements</span> Runnable &#123;</div>
                  <div className="pl-4"><span className="text-[#a855f7]">private final</span> GameClientInstance client;</div>
                  <div className="pl-4"><span className="text-[#a855f7]">public void</span> <span className="text-amber-400">run</span>() &#123;</div>
                  <div className="pl-8"><span className="text-[#34d399]">while</span> (!Thread.currentThread().isInterrupted()) &#123;</div>
                  <div className="pl-12">GameState state = client.pollGameState();</div>
                  <div className="pl-12">DecisionTree.evaluateNextAction(state).dispatch(client);</div>
                  <div className="pl-12">TelemetryService.recordHeartbeat(client.getId(), <span className="text-amber-400">&quot;OK_24_7&quot;</span>);</div>
                  <div className="pl-8">&#125;</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              )}

              {codeTab === "jardin" && (
                <div className="space-y-1">
                  <div className="text-[#64748b]">{"// 2026: Moteur de calcul physique pur client-side de JardinCalcul.fr (< 50ms)"}</div>
                  <div><span className="text-[#a855f7]">export function</span> <span className="text-[#22d3ee]">calculateGravelNeeds</span>(lengthM: number, widthM: number, depthCm: number, density: number) &#123;</div>
                  <div className="pl-4"><span className="text-[#a855f7]">const</span> rawVolumeM3 = (lengthM * widthM * depthCm) / 100;</div>
                  <div className="pl-4"><span className="text-[#a855f7]">const</span> withCompactionM3 = rawVolumeM3 * 1.10; <span className="text-[#64748b] font-italic">{"// +10% tassement normalisé"}</span></div>
                  <div className="pl-4"><span className="text-[#a855f7]">const</span> totalTonnes = withCompactionM3 * density;</div>
                  <div className="pl-4"><span className="text-[#34d399]">return</span> &#123;</div>
                  <div className="pl-8">volumeM3: rawVolumeM3,</div>
                  <div className="pl-8">bags25kgCount: Math.ceil((totalTonnes * 1000) / 25),</div>
                  <div className="pl-8">budgetAvgEuro: Math.round(totalTonnes * 65),</div>
                  <div className="pl-4">&#125;;</div>
                  <div>&#125;</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DU MILIEU : Les Projets du Studio */}
      <section id="projets" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20 border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#10b981] uppercase tracking-wider mb-2">
              <BadgeCheck className="w-4 h-4 text-[#10b981]" />
              <span>Studio &amp; Réalisations Numériques</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Les Projets Développés
            </h2>
          </div>

          {/* Interactive Project Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              type="button"
              onClick={() => setProjectTab("jardin")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                projectTab === "jardin" ? "bg-[#10b981] text-white shadow-md" : "text-[#94a3b8] hover:text-white"
              }`}
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>JardinCalcul.fr (Live)</span>
            </button>
            <button
              type="button"
              onClick={() => setProjectTab("hardware")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                projectTab === "hardware" ? "bg-[#06b6d4] text-black shadow-md" : "text-[#94a3b8] hover:text-white"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Hardware Lab (R&amp;D)</span>
            </button>
          </div>
        </div>

        {/* Project Tab 1: JardinCalcul */}
        {projectTab === "jardin" && (
          <div className="relative group rounded-3xl bg-gradient-to-br from-[#10b981]/15 via-white/[0.02] to-transparent border border-[#10b981]/40 p-8 sm:p-12 overflow-hidden shadow-2xl animate-in fade-in duration-300">
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
                    JardinCalcul.fr — La suite d&apos;estimation de matériaux d&apos;extérieur
                  </h3>
                  <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                    Conçu pour les particuliers et bricoleurs exigeants : fini les hésitations en magasin.
                    Vous décrivez votre chantier (dimensions, usage, finition), l&apos;outil calcule instantanément le cubage,
                    le tonnage, le nombre de sacs et vous génère une liste d&apos;achats complète avec accessoires indispensables.
                  </p>
                </div>

                {/* 4 Core pillars */}
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
                      <strong className="text-white block font-medium">35 Guides Pratiques :</strong>
                      <span className="text-[#94a3b8] text-xs">Dosages au seau/pelle, calibres, normes DTU et conseils de mise en œuvre.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#94a3b8] border border-white/10">Next.js 16</span>
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
        )}

        {/* Project Tab 2: Hardware Lab */}
        {projectTab === "hardware" && (
          <div id="hardware" className="relative group rounded-3xl bg-gradient-to-br from-[#06b6d4]/15 via-white/[0.02] to-[#8b5cf6]/10 border border-[#06b6d4]/40 p-8 sm:p-12 overflow-hidden shadow-2xl animate-in fade-in duration-300">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                    PROJET EN CONCEPTION (R&amp;D 2026)
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/10">
                    Hardware &amp; Tech
                  </span>
                </div>
                <span className="text-xs font-mono text-[#22d3ee]">Horizon Fin 2026</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Le Comparateur &amp; Agrégateur Hardware neutre, sans faux bons plans
                </h3>
                <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                  Le marché des composants PC est pollué par des comparateurs automatisés sans âme, des benchmarks trompeurs et de fausses promos barrées.
                  Le projet Hardware Lab réutilisera nos compétences en scraping et calculs instantanés pour proposer un outil 100 % objectif.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#22d3ee] font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Comparateur GPU &amp; CPU (FPS / € / Watt)</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    Comparaison directe des performances réelles en jeu et création par rapport au prix payé et à la consommation énergétique.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#34d399] font-bold text-sm">
                    <TrendingDown className="w-4 h-4" />
                    <span>Agrégateur de Deals &amp; Historique de Cours</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    Suivi transparent des cours des composants chez les cybermarchands européens avec détection des vraies baisses de prix.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#a855f7] font-bold text-sm">
                    <Sliders className="w-4 h-4" />
                    <span>Config Builder &amp; Vérificateur Physique</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    Vérification intelligente des compatibilités physiques : dégagement ventirad, longueur GPU dans le boîtier et dimensionnement d&apos;alimentation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Monitor className="w-4 h-4" />
                    <span>Paniers Types par Budget Réel</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    Configurations optimisées au centime près (1080p, 1440p, 4K / IA créateurs) mises à jour en continu selon les fluctuations réelles.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
                <span>Phase actuelle : <strong>Modélisation de la base de données de composants</strong></span>
                <a href="#contact" className="font-bold text-[#22d3ee] hover:underline">
                  Une idée ou suggestion ? Écrivez-nous →
                </a>
              </div>
            </div>
          </div>
        )}
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
            Vous avez une idée d&apos;amélioration pour <strong>JardinCalcul.fr</strong>, une suggestion pour le futur <strong>comparateur Hardware</strong>, ou vous souhaitez échanger sur du code ou de l&apos;automatisation ? Parlons-en !
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={copyEmailToClipboard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#06080d] font-bold text-sm hover:bg-white/90 transition-all shadow-lg cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Email copié (contact@stygmar.com)</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#06080d]" />
                  <span>Copier contact@stygmar.com</span>
                </>
              )}
            </button>
            <a
              href="mailto:contact@stygmar.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Ouvrir ma messagerie</span>
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
      <footer className="border-t border-white/[0.08] py-10 bg-[#040609] text-xs text-[#64748b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#94a3b8]">
            <span className="font-bold text-white">STYGMAR</span>
            <span>—</span>
            <span>Studio Web &amp; Automatisation · © 2026</span>
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
