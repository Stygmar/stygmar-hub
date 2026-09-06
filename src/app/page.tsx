"use client";

import React, { useState, useEffect } from "react";
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
  BadgeCheck,
  GraduationCap,
  Terminal,
  Rocket,
  Coins,
  Gamepad2,
  Copy,
  Check,
  Activity,
  Globe,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  Star,
  CheckCheck,
  Scale,
  TrendingDown,
  Sliders,
  Monitor,
  Workflow,
} from "lucide-react";

type Language = "fr" | "en";
type TimelineTab = "blois" | "botting" | "web";
type ProjectTab = "jardin" | "hardware";
type CodeSnippetTab = "jardin" | "tarkov" | "osrs";

export default function HomePage() {
  const [lang, setLang] = useState<Language>("fr");
  const [timelineTab, setTimelineTab] = useState<TimelineTab>("botting");
  const [projectTab, setProjectTab] = useState<ProjectTab>("jardin");
  const [codeTab, setCodeTab] = useState<CodeSnippetTab>("jardin");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("stygmar_lang");
      if (savedLang === "en" || savedLang === "fr") {
        queueMicrotask(() => {
          setLang(savedLang);
        });
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleLang = (selectedLang: Language) => {
    setLang(selectedLang);
    try {
      localStorage.setItem("stygmar_lang", selectedLang);
    } catch {
      // ignore storage errors
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("contact@stygmar.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const isEn = lang === "en";

  return (
    <div className="min-h-screen bg-[#06080d] text-[#f1f5f9] relative bg-grid-pattern selection:bg-[#10b981]/30 selection:text-[#34d399]">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#10b981]/15 via-[#06b6d4]/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-[800px] right-0 w-[600px] h-[600px] bg-[#06b6d4]/10 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[1700px] left-0 w-[500px] h-[500px] bg-[#8b5cf6]/10 blur-[160px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#06080d]/85 backdrop-blur-xl border-b border-white/[0.08]">
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
                <span>{isEn ? "Florian · Code, Automation & Projects" : "Florian · Code, Automatisation & Projets"}</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94a3b8]">
            <a href="#projets" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>{isEn ? "Projects" : "Projets"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            </a>
            <a href="#parcours" className="hover:text-white transition-colors">
              {isEn ? "Journey & Tech" : "Parcours & Tech"}
            </a>
            <a href="#experience" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <span>{isEn ? "Eldorado (+9,400)" : "Eldorado (+9 400)"}</span>
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            </a>
            <a href="#philosophie" className="hover:text-white transition-colors">
              {isEn ? "Philosophy" : "Philosophie"}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {isEn ? "Contact" : "Contact"}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-bold">
              <Globe className="w-3.5 h-3.5 text-[#94a3b8] ml-1.5 mr-1" />
              <button
                type="button"
                onClick={() => toggleLang("fr")}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  lang === "fr" ? "bg-[#10b981] text-white shadow-sm" : "text-[#94a3b8] hover:text-white"
                }`}
                title="Passer le site en Français"
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => toggleLang("en")}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  lang === "en" ? "bg-[#06b6d4] text-black shadow-sm font-black" : "text-[#94a3b8] hover:text-white"
                }`}
                title="Switch site to English"
              >
                EN
              </button>
            </div>

            <a
              href="https://www.jardincalcul.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#10b981]/15 hover:bg-[#10b981]/25 border border-[#10b981]/30 text-xs font-bold text-[#34d399] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-[#10b981]/20"
            >
              <Sprout className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">JardinCalcul.fr ↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* 01 — HERO SECTION (COURT, PERCUTANT, IDENTITÉ PERSO) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-14 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/25 mb-6 backdrop-blur-sm shadow-inner">
          <Terminal className="w-3.5 h-3.5 text-[#34d399]" />
          <span>{isEn ? "PERSONAL TECH HUB & PROJECT ARCHIVE" : "ESPACE PERSONNEL, CODE & PROJETS"}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-6">
          Florian (Stygmar).{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] via-[#06b6d4] to-[#a855f7]">
            {isEn ? "Code, Automation & Web Tools." : "Code, Automatisation & Outils Web."}
          </span>
        </h1>

        <p className="text-lg sm:text-2xl text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          {isEn
            ? "I build fast web applications, autonomous automation systems, and useful tools from scratch."
            : "Je conçois et mets en ligne des applications web rapides, des systèmes d'automatisation et des outils utiles."}
        </p>

        {/* Quick Tech Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-[#94a3b8] font-medium mb-10">
          <span className="text-white font-semibold">9 {isEn ? "years of coding" : "ans de code"}</span>
          <span className="text-white/20">·</span>
          <span>Next.js</span>
          <span className="text-white/20">·</span>
          <span>TypeScript</span>
          <span className="text-white/20">·</span>
          <span>React</span>
          <span className="text-white/20">·</span>
          <span className="text-[#34d399] font-medium">{isEn ? "Automation & Bots" : "Automatisation & Bots"}</span>
          <span className="text-white/20">·</span>
          <span className="text-[#06b6d4] font-medium">Java / AHK</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projets"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#10b981]/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isEn ? "Explore projects" : "Voir mes projets"}</span>
          </a>
          <a
            href="#parcours"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base transition-all hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Activity className="w-4 h-4" />
            <span>{isEn ? "My journey" : "Mon parcours"}</span>
          </a>
          <a
            href="https://github.com/Stygmar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#94a3b8] hover:text-white font-medium text-sm transition-all"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>GitHub ↗</span>
          </a>
        </div>

        {/* 4 Chiffres Clés Réels & Mesurables */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14 pt-8 border-t border-white/10 text-left">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">9+ {isEn ? "years" : "ans"}</div>
            <div className="text-xs text-[#94a3b8] mt-1 font-medium">{isEn ? "Coding & Architecture" : "Pratique du Code"}</div>
          </div>

          <a
            href="#experience"
            className="p-4 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 hover:border-amber-500/40 transition-colors group block"
          >
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono flex items-center justify-between">
              <span>9 400+</span>
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
            <div className="text-xs text-amber-200/80 mt-1 font-medium">{isEn ? "Eldorado Verified Reviews" : "Avis clients sur Eldorado"}</div>
          </a>

          <a
            href="#experience"
            className="p-4 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 hover:border-amber-500/40 transition-colors group block"
          >
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono flex items-center justify-between">
              <span>99,99 %</span>
              <CheckCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xs text-amber-200/80 mt-1 font-medium">{isEn ? "Positive Rating Score" : "Avis positifs"}</div>
          </a>

          <a
            href="#projets"
            className="p-4 rounded-2xl bg-[#10b981]/[0.05] border border-[#10b981]/25 hover:border-[#10b981]/40 transition-colors group block"
          >
            <div className="text-2xl sm:text-3xl font-black text-[#34d399] font-mono flex items-center justify-between">
              <span>1 {isEn ? "product" : "produit"}</span>
              <Sprout className="w-4 h-4 text-[#34d399]" />
            </div>
            <div className="text-xs text-[#34d399]/80 mt-1 font-medium">{isEn ? "Live · JardinCalcul.fr" : "Live · JardinCalcul.fr"}</div>
          </a>
        </div>
      </section>

      {/* 02 — PROJETS : JARDINCALCUL (MIS EN AVANT) & HARDWARE LAB (R&D) */}
      <section id="projets" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20 border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30 uppercase tracking-wider mb-2">
              <BadgeCheck className="w-4 h-4 text-[#34d399]" />
              <span>{isEn ? "02 — PROJECTS & PRODUCTIONS" : "02 — PROJETS & RÉALISATIONS"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {isEn ? "What I've Built & What I'm Exploring" : "Ce Que J'ai Construit & Ce Qui M'intéresse"}
            </h2>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              type="button"
              onClick={() => setProjectTab("jardin")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                projectTab === "jardin" ? "bg-[#10b981] text-white shadow-md" : "text-[#94a3b8] hover:text-white"
              }`}
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>JardinCalcul.fr ({isEn ? "Live" : "En Ligne"})</span>
            </button>
            <button
              type="button"
              onClick={() => setProjectTab("hardware")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                projectTab === "hardware" ? "bg-[#06b6d4] text-black shadow-md font-extrabold" : "text-[#94a3b8] hover:text-white"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Hardware Lab (R&amp;D)</span>
            </button>
          </div>
        </div>

        {/* Project 1: JardinCalcul.fr (Highlighted Flagship) */}
        {projectTab === "jardin" && (
          <div className="glass-card rounded-3xl border border-[#10b981]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
            {/* Top badges & stats strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-ping" />
                  {isEn ? "LIVE IN PRODUCTION" : "EN LIGNE & ACTIF"}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10">
                  {isEn ? "Exterior Materials & DIY" : "Aménagement Extérieur & BTP"}
                </span>
              </div>

              {/* 4 Metric Badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <strong className="text-[#34d399]">7</strong> {isEn ? "calculators" : "calculateurs"}
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <strong className="text-[#34d399]">35</strong> {isEn ? "guides" : "guides"}
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <strong className="text-[#34d399]">65</strong> {isEn ? "tests" : "tests unitaires"}
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[#94a3b8]">
                  Next.js 16 · React 19 · TS
                </div>
              </div>
            </div>

            {/* Core Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    JardinCalcul.fr — {isEn ? "The Exterior Material Estimation Suite" : "La suite d'estimation de matériaux d'extérieur"}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {isEn
                      ? "A complete suite of tools empowering homeowners and DIYers to estimate their exterior materials, budget, and generated purchase lists with zero friction. Calculations happen 100% client-side in under 50ms without server delays."
                      : "Une suite d'outils permettant aux particuliers d'estimer leurs matériaux, leur budget et leur liste d'achat pour des travaux extérieurs. Les calculs tournent 100% côté client en moins de 50ms sans délai serveur."}
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">{isEn ? "7 Specialized Calculators:" : "7 Calculateurs Métier :"}</strong>
                      <span className="text-[#94a3b8] text-xs">
                        {isEn ? "Pedestal tiles, gravel, concrete, lawn, soil, fences, mulch." : "Terrasse sur plots, gravier, béton, terreau, gazon, paillage, clôture rigide."}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">{isEn ? "Interactive 2D Cross-Sections:" : "Schémas 2D de coupe :"}</strong>
                      <span className="text-[#94a3b8] text-xs">
                        {isEn ? "Instant visual representation of sub-layers, base gravel, slope, and compaction." : "Visualisation immédiate de l'épaisseur, des couches de fondation et du compactage."}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">{isEn ? "Smart Budget & Shopping Lists:" : "Budget & Liste d'Achats :"}</strong>
                      <span className="text-[#94a3b8] text-xs">
                        {isEn ? "Smart bag vs bulk cost arbitrage with real French retail price estimates." : "Arbitrage économique sacs vs vrac et fourchette de prix magasin réaliste."}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">{isEn ? "35 Technical Guides:" : "35 Guides Pratiques :"}</strong>
                      <span className="text-[#94a3b8] text-xs">
                        {isEn ? "DTU building standards, bucket/shovel conversion recipes, zero ads." : "Normes DTU, dosages au seau/pelle, aucune pub intrusive."}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://www.jardincalcul.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-xl shadow-[#10b981]/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{isEn ? "Launch JardinCalcul.fr →" : "Voir le projet en direct →"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-[#94a3b8] text-center sm:text-left">
                    {isEn ? "Free · Zero popups · Sub-50ms" : "100% Gratuit · Sans pub intrusive · < 50ms"}
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Browser Preview Mockup */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[#090d16] border border-[#10b981]/30 shadow-2xl overflow-hidden">
                  <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-2 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-[#34d399] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                        https://www.jardincalcul.fr/calculateur-dalles-terrasse
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#94a3b8] hidden sm:inline">React 19 Engine</span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-5 bg-gradient-to-b from-[#090d16] to-[#04060a]">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#10b981] flex items-center justify-center text-white">
                          <Sprout className="w-4 h-4" />
                        </div>
                        <span className="font-extrabold text-sm text-white">JardinCalcul</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#94a3b8]">v2.4</span>
                      </div>
                      <div className="text-xs text-[#94a3b8] flex items-center gap-3">
                        <span className="text-[#34d399] font-medium">Terrasse sur plots</span>
                        <span className="hidden sm:inline">Gravier</span>
                        <span className="hidden sm:inline">Béton</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                      <div className="sm:col-span-6 p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                        <div className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                          {isEn ? "Project Parameters" : "Paramètres du Projet"}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                            <span className="text-[#94a3b8] block text-[10px]">{isEn ? "Length" : "Longueur"}</span>
                            <span className="font-mono font-bold text-white text-sm">6.00 m</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                            <span className="text-[#94a3b8] block text-[10px]">{isEn ? "Width" : "Largeur"}</span>
                            <span className="font-mono font-bold text-white text-sm">4.00 m</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                            <span className="text-[#94a3b8] block text-[10px]">{isEn ? "Tile Format" : "Format Dalle"}</span>
                            <span className="font-mono font-bold text-white text-sm">50 × 50 cm</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                            <span className="text-[#94a3b8] block text-[10px]">{isEn ? "Substrate" : "Support"}</span>
                            <span className="font-mono font-bold text-white text-sm">{isEn ? "Stabilized" : "Stabilisé"}</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-black/60 border border-white/5 space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] text-[#94a3b8]">
                            <span>{isEn ? "Interactive 2D Cross-Section" : "Coupe Technique 2D"}</span>
                            <span className="text-[#34d399] font-mono">24.00 m²</span>
                          </div>
                          <div className="h-14 rounded bg-gradient-to-b from-[#10b981]/20 via-[#06b6d4]/15 to-amber-900/40 border border-white/10 flex flex-col justify-between p-1.5 text-[9px] font-mono">
                            <div className="flex justify-between text-white/90">
                              <span>▲ Dalles Céramique 20mm</span>
                              <span>96 unités</span>
                            </div>
                            <div className="flex justify-between text-[#34d399]">
                              <span>■ Plots Réglables (40-65mm)</span>
                              <span>120 plots</span>
                            </div>
                            <div className="flex justify-between text-amber-300/80">
                              <span>▼ Géotextile 100g/m²</span>
                              <span>24 m²</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-6 p-4 rounded-xl bg-gradient-to-br from-[#10b981]/15 via-black/40 to-black/60 border border-[#10b981]/40 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#34d399] uppercase tracking-wider">
                              {isEn ? "Instant Computation" : "Résultats Instantanés"}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10b981]/20 text-[#34d399]">
                              &lt; 15 ms
                            </span>
                          </div>
                          <div className="mt-3 space-y-2">
                            <div className="flex items-baseline justify-between">
                              <span className="text-xs text-[#cbd5e1]">{isEn ? "Total Area:" : "Surface Totale :"}</span>
                              <span className="text-base font-black font-mono text-white">24.00 m²</span>
                            </div>
                            <div className="flex items-baseline justify-between">
                              <span className="text-xs text-[#cbd5e1]">{isEn ? "Adjustable Pedestals:" : "Plots Réglables :"}</span>
                              <span className="text-lg font-black font-mono text-[#34d399]">120 plots</span>
                            </div>
                            <div className="flex items-baseline justify-between">
                              <span className="text-xs text-[#cbd5e1]">{isEn ? "50x50 Tiles Needed:" : "Dalles 50x50 cm :"}</span>
                              <span className="text-base font-black font-mono text-white">96 dalles (+5% marge)</span>
                            </div>
                            <div className="flex items-baseline justify-between">
                              <span className="text-xs text-[#cbd5e1]">{isEn ? "Estimated Budget:" : "Budget Moyen Estimé :"}</span>
                              <span className="text-base font-black font-mono text-amber-400">920 € – 1 450 €</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                          <span className="text-[#94a3b8]">{isEn ? "Printable Checklist Ready" : "Liste d'achat générée"}</span>
                          <a
                            href="https://www.jardincalcul.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#34d399] hover:underline flex items-center gap-1"
                          >
                            <span>{isEn ? "Open full app" : "Ouvrir l'application"}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 2: Hardware Lab (R&D Explorer) */}
        {projectTab === "hardware" && (
          <div className="relative group rounded-3xl bg-gradient-to-br from-[#06b6d4]/15 via-white/[0.02] to-[#8b5cf6]/10 border border-[#06b6d4]/40 p-8 sm:p-12 overflow-hidden shadow-2xl animate-in fade-in duration-300">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                    {isEn ? "R&D EXPLORATION & TECH LAB" : "PROJET EN CONCEPTION (R&D)"}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/10">
                    Hardware &amp; PC Architecture
                  </span>
                </div>
                <span className="text-xs font-mono text-[#22d3ee]">{isEn ? "In active conception" : "En cours de conception"}</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {isEn
                    ? "The Unbiased Hardware & Tech Comparator: Zero Bullshit, Real Ratios"
                    : "Le Comparateur & Agrégateur Hardware neutre, sans faux bons plans"}
                </h3>
                <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                  {isEn
                    ? "The PC hardware space is filled with generic AI scrapers, misleading benchmarks, and fake promo strikes. Hardware Lab leverages automated web scraping and instant analytics background to deliver genuine objectivity."
                    : "Le marché des composants PC est pollué par des comparateurs automatisés génériques, des benchmarks trompeurs et de fausses promos barrées. Hardware Lab utilise notre expertise en scraping et calculs instantanés pour proposer un outil 100 % objectif."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#22d3ee] font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>{isEn ? "Real GPU & CPU Comparator (FPS / $ / Watt)" : "Comparateur GPU & CPU (FPS / € / Watt)"}</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {isEn
                      ? "Direct gaming and creative benchmarks indexed against street price and power draw."
                      : "Comparaison directe des performances réelles en jeu par rapport au prix payé et à la consommation énergétique."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#34d399] font-bold text-sm">
                    <TrendingDown className="w-4 h-4" />
                    <span>{isEn ? "True Deal Aggregator & Price Tracking" : "Agrégateur de Deals & Historique de Cours"}</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {isEn
                      ? "Transparent price tracking across European e-tailers detecting mathematically genuine discounts."
                      : "Suivi transparent des cours des composants chez les cybermarchands européens avec détection des vraies baisses de prix."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#a855f7] font-bold text-sm">
                    <Sliders className="w-4 h-4" />
                    <span>{isEn ? "Physical Clearance & PSU Checker" : "Vérificateur de Compatibilités Physiques"}</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {isEn
                      ? "Smart clearance checks: cooler height, GPU case clearance, and PSU curve."
                      : "Vérification intelligente des compatibilités physiques : dégagement ventirad, longueur GPU dans le boîtier et dimensionnement d'alimentation."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Monitor className="w-4 h-4" />
                    <span>{isEn ? "Balanced Builds by Budget" : "Paniers Types par Budget Réel"}</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {isEn
                      ? "Optimized balanced components tailored to real market availability."
                      : "Configurations optimisées au centime près mises à jour selon les fluctuations réelles des stocks."}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
                <span>
                  {isEn
                    ? "Phase: Component database modeling & ratio metrics"
                    : "Phase : Modélisation de la base de données de composants"}
                </span>
                <a href="#contact" className="font-bold text-[#22d3ee] hover:underline">
                  {isEn ? "Have an idea or feedback? Let's discuss →" : "Une idée ou suggestion ? Écrivez-moi →"}
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 03 — PARCOURS CHRONOLOGIQUE & SAVOIR-FAIRE (AVEC HISTORIQUE COMPLET BOTTING & ELDORADO) */}
      <section id="parcours" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20 border-t border-white/[0.08]">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden shadow-2xl">
          {/* Header of Timeline */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8b5cf6] uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4 text-[#8b5cf6]" />
                <span>{isEn ? "03 — CHRONOLOGICAL JOURNEY & DNA" : "03 — PARCOURS CHRONOLOGIQUE & HISTORIQUE"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isEn ? "From High-Precision Automation to Web Products" : "De l'Automatisation de Haut Vol aux Produits Web"}
              </h2>
            </div>
            <div className="text-xs text-[#94a3b8] md:text-right">
              {isEn ? "Click on an era to inspect the underlying engineering and tech stack." : "Cliquez sur une période pour explorer l'ingénierie et les technologies associées."}
            </div>
          </div>

          {/* Chronological Flow Tracker Bar */}
          <div className="relative my-6 px-2">
            <div className="hidden sm:block absolute top-3.5 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-[#8b5cf6]/50 via-[#06b6d4]/50 to-[#10b981]/50 -z-0" />

            <div className="grid grid-cols-3 text-center relative z-10">
              <button
                type="button"
                onClick={() => setTimelineTab("blois")}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                    timelineTab === "blois"
                      ? "bg-[#8b5cf6] text-white ring-4 ring-[#8b5cf6]/30 shadow-lg shadow-[#8b5cf6]/40 scale-110"
                      : "bg-[#0d121f] border border-[#8b5cf6]/40 text-[#c084fc] group-hover:border-[#8b5cf6]"
                  }`}
                >
                  1
                </div>
                <span className="text-[11px] font-bold text-white mt-1.5">{isEn ? "Foundations" : "Fondations Informatique"}</span>
                <span className="text-[10px] font-mono text-[#94a3b8]">2017 — 2021</span>
              </button>

              <button
                type="button"
                onClick={() => setTimelineTab("botting")}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                    timelineTab === "botting"
                      ? "bg-[#06b6d4] text-black ring-4 ring-[#06b6d4]/30 shadow-lg shadow-[#06b6d4]/40 scale-110"
                      : "bg-[#0d121f] border border-[#06b6d4]/40 text-[#22d3ee] group-hover:border-[#06b6d4]"
                  }`}
                >
                  2
                </div>
                <span className="text-[11px] font-bold text-white mt-1.5">{isEn ? "Automation & Scale" : "Automatisation & Botting"}</span>
                <span className="text-[10px] font-mono text-[#94a3b8]">2021 — 2025</span>
              </button>

              <button
                type="button"
                onClick={() => setTimelineTab("web")}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                    timelineTab === "web"
                      ? "bg-[#10b981] text-white ring-4 ring-[#10b981]/30 shadow-lg shadow-[#10b981]/40 scale-110"
                      : "bg-[#0d121f] border border-[#10b981]/40 text-[#34d399] group-hover:border-[#10b981]"
                  }`}
                >
                  3
                </div>
                <span className="text-[11px] font-bold text-white mt-1.5">{isEn ? "Web Studio" : "Studio Web & Outils"}</span>
                <span className="text-[10px] font-mono text-[#94a3b8]">{isEn ? "2026 — Present" : "2026 — Aujourd'hui"}</span>
              </button>
            </div>
          </div>

          {/* Epoch Switcher Tab Buttons */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 my-8">
            {/* Card 1: Blois */}
            <button
              type="button"
              onClick={() => setTimelineTab("blois")}
              className={`flex-1 p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                timelineTab === "blois"
                  ? "bg-[#8b5cf6]/15 border-[#8b5cf6] ring-2 ring-[#8b5cf6]/30 shadow-lg shadow-[#8b5cf6]/15"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20 text-[#94a3b8]"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/30">
                  {isEn ? "STEP 01" : "ÉTAPE 01"}
                </span>
                <span className="text-xs font-mono font-bold text-[#c084fc]">2017 — 2021</span>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    timelineTab === "blois" ? "bg-[#8b5cf6] text-white" : "bg-white/5 text-[#94a3b8]"
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{isEn ? "B.S. in Computer Science" : "Licence Informatique"}</div>
                  <div className="text-xs text-[#94a3b8] mt-0.5">{isEn ? "University of Tours · Blois Campus" : "Université de Tours · Blois"}</div>
                </div>
              </div>
            </button>

            {/* Directional Connector 1 -> 2 */}
            <div className="flex lg:flex-col items-center justify-center shrink-0 py-1 lg:py-0 px-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 shadow-inner">
                <ArrowRight className="hidden lg:block w-4 h-4 text-[#22d3ee] animate-pulse" />
                <ArrowDown className="lg:hidden w-3.5 h-3.5 text-[#22d3ee] animate-bounce" />
              </div>
            </div>

            {/* Card 2: Botting & Automation */}
            <button
              type="button"
              onClick={() => setTimelineTab("botting")}
              className={`flex-1 p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                timelineTab === "botting"
                  ? "bg-[#06b6d4]/15 border-[#06b6d4] ring-2 ring-[#06b6d4]/30 shadow-lg shadow-[#06b6d4]/15"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20 text-[#94a3b8]"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/30">
                  {isEn ? "STEP 02" : "ÉTAPE 02"}
                </span>
                <span className="text-xs font-mono font-bold text-[#22d3ee]">2021 — 2025</span>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    timelineTab === "botting" ? "bg-[#06b6d4] text-black font-bold" : "bg-white/5 text-[#94a3b8]"
                  }`}
                >
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{isEn ? "Automation, Botting & Scale" : "Automatisation, Botting & Marché"}</div>
                  <div className="text-xs text-[#94a3b8] mt-0.5">Tarkov (AHK) · OSRS (Java) · Eldorado.gg</div>
                </div>
              </div>
            </button>

            {/* Directional Connector 2 -> 3 */}
            <div className="flex lg:flex-col items-center justify-center shrink-0 py-1 lg:py-0 px-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 shadow-inner">
                <ArrowRight className="hidden lg:block w-4 h-4 text-[#34d399] animate-pulse" />
                <ArrowDown className="lg:hidden w-3.5 h-3.5 text-[#34d399] animate-bounce" />
              </div>
            </div>

            {/* Card 3: Web Studio */}
            <button
              type="button"
              onClick={() => setTimelineTab("web")}
              className={`flex-1 p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                timelineTab === "web"
                  ? "bg-[#10b981]/15 border-[#10b981] ring-2 ring-[#10b981]/30 shadow-lg shadow-[#10b981]/15"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20 text-[#94a3b8]"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30">
                  {isEn ? "STEP 03" : "ÉTAPE 03"}
                </span>
                <span className="text-xs font-mono font-bold text-[#34d399]">{isEn ? "2026 — Present" : "2026 — Aujourd'hui"}</span>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    timelineTab === "web" ? "bg-[#10b981] text-white" : "bg-white/5 text-[#94a3b8]"
                  }`}
                >
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{isEn ? "Web Products & Studio" : "Studio Web & Outils"}</div>
                  <div className="text-xs text-[#94a3b8] mt-0.5">JardinCalcul.fr &amp; Hardware Lab</div>
                </div>
              </div>
            </button>
          </div>

          {/* Active Tab Content Display */}
          <div className="bg-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all">
            {/* TAB 1: BLOIS */}
            {timelineTab === "blois" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]" />
                    <h3 className="text-xl font-bold text-white">
                      {isEn
                        ? "B.S. in Computer Science (University of Tours · Blois Campus)"
                        : "Licence Informatique Générale (Antenne Universitaire de Blois)"}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#8b5cf6]/15 text-[#c084fc] border border-[#8b5cf6]/30">
                    2017 — 2021 · 4 {isEn ? "years" : "ans"}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  {isEn
                    ? "Four years dedicated to scientific foundations and rigorous software engineering. This is where I built mathematical discipline, algorithmic analysis, and deep comprehension of hardware and operating system fundamentals:"
                    : "Quatre années d'immersion dans les fondamentaux scientifiques et l'ingénierie logicielle. C'est ici que j'ai forgé ma rigueur algorithmique et ma compréhension profonde des architectures machines :"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">
                      {isEn ? "Algorithms & Complexity:" : "Algorithmique & Complexité :"}
                    </strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "Data structures (trees, graphs, hash maps), Big-O time/space complexity optimization, and computational modeling."
                        : "Structures de données (arbres, graphes, tables de hachage), complexité spatio-temporelle et résolution rigoureuse de problèmes."}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">
                      {isEn ? "Low-Level & OOP Programming:" : "Programmation Système & POO :"}
                    </strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "C and C++ for manual memory management and pointers, Java for strictly typed modular object-oriented design."
                        : "C et C++ pour la maîtrise bas niveau de la mémoire et des pointeurs, Java pour la conception modulaire et orientée objet."}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">
                      {isEn ? "Relational Databases & SQL:" : "Bases de Données & SQL :"}
                    </strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "Relational database schema normalization, indexing strategies, and multi-table transactional queries."
                        : "Modélisation relationnelle, normalisation des données, indexation et requêtes d'agrégation complexes."}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">
                      {isEn ? "Systems & Computer Networking:" : "Systèmes & Réseaux :"}
                    </strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "TCP/IP protocols, concurrent processes, thread synchronization, and client-server architectures."
                        : "Protocoles TCP/IP, gestion des threads et processus concurrents, communications client-serveur."}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-[#94a3b8]">
                    {isEn
                      ? "Key takeaway: Theoretical discipline applied without approximation to real software."
                      : "Ce que ça m'a apporté : la discipline nécessaire pour modéliser des formules physiques et logiques sans approximation."}
                  </span>
                  <button
                    type="button"
                    onClick={() => setTimelineTab("botting")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#06b6d4]/15 hover:bg-[#06b6d4]/25 border border-[#06b6d4]/30 font-bold text-[#22d3ee] transition-all cursor-pointer"
                  >
                    <span>{isEn ? "Next: Step 02 (Automation & Botting) →" : "Étape suivante : 02 / Automatisation & Botting →"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: BOTTING & AUTOMATION (AUTHENTIQUE, DÉTAILLÉ ET PROFESSIONNEL) */}
            {timelineTab === "botting" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] animate-ping" />
                    <h3 className="text-xl font-bold text-white">
                      {isEn
                        ? "High-Volume Automation, Botting & Marketplace Merchant (2021 — 2025)"
                        : "Ingénierie d'Automatisation, Botting & Activité Marchande (2021 — 2025)"}
                    </h3>
                  </div>
                  <a
                    href="https://www.eldorado.gg/users/Stygmar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-xs font-bold text-amber-400 transition-colors"
                  >
                    <Coins className="w-3.5 h-3.5" />
                    <span>Eldorado.gg : +9 400 Avis (99,99%) ↗</span>
                  </a>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  {isEn
                    ? "For 4 years, I operated across global digital marketplaces, architecting autonomous bots and scripts to farm, trade, and distribute virtual assets at high volume, while directly serving thousands of clients worldwide."
                    : "Pendant 4 ans, j'ai opéré sur les marchés virtuels internationaux en concevant des bots et des scripts pour automatiser la gestion d'inventaires, l'échange d'actifs numériques et la distribution à fort volume, tout en gérant en direct la relation avec des milliers d'acheteurs."}
                </p>

                {/* 2 Projets Clés : Tarkov & OSRS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-black/60 border border-[#06b6d4]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#22d3ee] font-bold text-sm">
                      <Gamepad2 className="w-4 h-4" />
                      <span>Escape from Tarkov (EFT) — AutoHotkey</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "Advanced AutoHotkey (AHK) engineering: surgical UI automation of nested inventories, sub-15ms Flea Market sniping, visual pixel detection, latency compensation, and continuous event dispatching."
                        : "Ingénierie avancée sous AutoHotkey (AHK) : automatisation chirurgicale d'inventaires touffus, sniping sur le Flea Market sous la barre des 15 ms, reconnaissance visuelle de pixels et compensation fine de la latence réseau."}
                    </p>
                    <div className="text-[11px] font-mono text-[#06b6d4] pt-1">
                      → {isEn ? "Sub-15ms event loops, pixel recognition & zero latency" : "Boucles d'événements sub-15ms, analyse de pixels & zéro latence"}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/60 border border-[#8b5cf6]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#c084fc] font-bold text-sm">
                      <Terminal className="w-4 h-4" />
                      <span>Old School RuneScape (OSRS) — Java &amp; DreamBot</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn ? (
                        <>
                          Development of complex Java scripts on the{" "}
                          <a
                            href="https://dreambot.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c084fc] hover:underline font-semibold"
                          >
                            dreambot.org
                          </a>{" "}
                          client paired with automation software like EternalFarm. End-to-end infrastructure: mass account creation (custom VPS self-hosted mailbox server) all the way to autonomous high-level character leveling running 24/7 unattended.
                        </>
                      ) : (
                        <>
                          Développement de scripts Java complexes sur le client{" "}
                          <a
                            href="https://dreambot.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c084fc] hover:underline font-semibold"
                          >
                            dreambot.org
                          </a>{" "}
                          couplé à des outils comme EternalFarm. Automatisation de bout en bout : de la création de comptes en masse (serveur de mailbox auto-hébergé sur VPS) jusqu&apos;à la montée autonome à haut niveau 24h/24 et 7j/7 sans surveillance.
                        </>
                      )}
                    </p>
                    <div className="text-[11px] font-mono text-[#a855f7] pt-1">
                      → {isEn ? "DreamBot API, EternalFarm farm management & VPS mailbox" : "API DreamBot, gestion de ferme EternalFarm & mailbox VPS"}
                    </div>
                  </div>
                </div>

                {/* The EXACT requested quote replacing "code infaillible" */}
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-200/90 leading-relaxed">
                  <strong className="text-white block text-sm mb-1">{isEn ? "The real engineering lesson:" : "L'apprentissage fondamental :"}</strong>
                  {isEn
                    ? "« When a software bug or desynchronization costs real money in real time, you learn to build robust, observable systems capable of graceful automatic failure recovery. »"
                    : "« Cette expérience m'a appris à construire des systèmes robustes, observables et capables de récupérer automatiquement après une erreur. »"}
                </div>

                {/* Step navigation */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setTimelineTab("blois")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-[#cbd5e1] transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#c084fc]" />
                    <span>{isEn ? "Step 01 (Licence Blois)" : "Étape précédente : 01 / Licence Blois"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimelineTab("web")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#10b981]/15 hover:bg-[#10b981]/25 border border-[#10b981]/30 font-bold text-[#34d399] transition-all cursor-pointer"
                  >
                    <span>{isEn ? "Next: Step 03 (Web Studio 2026) →" : "Étape suivante : 03 / Studio Web (2026) →"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: WEB STUDIO */}
            {timelineTab === "web" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    <h3 className="text-xl font-bold text-white">
                      {isEn ? "Building Open, Fast & Frictionless Web Products" : "Édition d'Outils Web Utiles, Neutres & Instantanés"}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30">
                    {isEn ? "2026 — Present" : "2026 — Aujourd'hui"}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  {isEn
                    ? "Channeling 9 years of algorithmic discipline, telemetry monitoring, and automation proficiency into creating open, lightning-fast consumer web products without predatory models or friction:"
                    : "Mettre ces 9 années d'exigence algorithmique, de télémétrie et d'automatisation au service d'outils web grand public utiles, transparents et instantanés :"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-black/60 border border-[#10b981]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#34d399] font-bold text-sm">
                      <Sprout className="w-4 h-4" />
                      <span>{isEn ? "JardinCalcul.fr (Live in Production)" : "JardinCalcul.fr (En Production)"}</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "7 physical material calculators (pedestal tiles, gravel, concrete, lawn, soil, fences), 35 technical guides, and 50 pre-rendered static pages. 100% local client-side computation in < 50ms."
                        : "7 calculateurs physiques (dalles sur plots, gravier, béton, gazon, terreau, clôtures, paillage), 35 guides chantiers et 50 pages statiques. Exécution 100% client-side en moins de 50ms."}
                    </p>
                    <a href="https://www.jardincalcul.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-[#34d399] hover:underline pt-1">
                      <span>{isEn ? "Visit official website →" : "Visiter le site officiel →"}</span>
                    </a>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/60 border border-[#06b6d4]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#22d3ee] font-bold text-sm">
                      <Cpu className="w-4 h-4" />
                      <span>{isEn ? "Hardware Lab (In Conception)" : "Hardware Lab (En Conception)"}</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "Unbiased GPU/CPU comparator (FPS/$/Watt), price tracker, and physical clearance checker."
                        : "Comparateur neutre GPU/CPU (FPS/€/Watt), agrégateur de cours et vérificateur physique de compatibilité de boîtier."}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setProjectTab("hardware");
                        const el = document.getElementById("projets");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#22d3ee] hover:underline pt-1 cursor-pointer"
                    >
                      <span>{isEn ? "View R&D concept →" : "Voir le concept R&D →"}</span>
                    </button>
                  </div>
                </div>

                {/* Step navigation */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setTimelineTab("botting")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-[#cbd5e1] transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#22d3ee]" />
                    <span>{isEn ? "Previous: Step 02 (Automation & Eldorado)" : "Étape précédente : 02 / Automatisation & Eldorado"}</span>
                  </button>
                  <a
                    href="#projets"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#10b981]/15 hover:bg-[#10b981]/25 border border-[#10b981]/30 font-bold text-[#34d399] transition-all"
                  >
                    <span>{isEn ? "Explore Projects above ↑" : "Voir les projets ci-dessus ↑"}</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Code Terminal (Real technical depth, authentic feel) */}
          <div className="mt-8 rounded-2xl bg-[#030407] border border-white/10 overflow-hidden">
            <div className="px-4 py-3 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-[#94a3b8] ml-2">
                  stygmar-env — {isEn ? "interactive terminal" : "terminal interactif"}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCodeTab("jardin")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    codeTab === "jardin" ? "bg-[#10b981]/20 text-[#34d399] font-bold" : "text-[#64748b] hover:text-white"
                  }`}
                >
                  physics_engine.ts
                </button>
                <button
                  type="button"
                  onClick={() => setCodeTab("tarkov")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    codeTab === "tarkov" ? "bg-[#06b6d4]/20 text-[#22d3ee] font-bold" : "text-[#64748b] hover:text-white"
                  }`}
                >
                  tarkov_macro.ahk
                </button>
                <button
                  type="button"
                  onClick={() => setCodeTab("osrs")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    codeTab === "osrs" ? "bg-[#8b5cf6]/20 text-[#c084fc] font-bold" : "text-[#64748b] hover:text-white"
                  }`}
                >
                  osrs_bot.java
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 font-mono text-xs text-[#cbd5e1] leading-relaxed overflow-x-auto">
              {codeTab === "jardin" && (
                <div className="space-y-1">
                  <div className="text-[#64748b]">
                    {isEn
                      ? "// JardinCalcul.fr — Pure client-side physical calculation engine (< 15ms)"
                      : "// JardinCalcul.fr — Moteur de calcul physique pur client-side (< 15ms)"}
                  </div>
                  <div>
                    <span className="text-[#a855f7]">export function</span>{" "}
                    <span className="text-[#22d3ee]">calculateGravelNeeds</span>(lengthM: number, widthM: number, depthCm: number, density: number) &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#a855f7]">const</span> rawVolumeM3 = (lengthM * widthM * depthCm) / 100;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#a855f7]">const</span> withCompactionM3 = rawVolumeM3 * 1.10;{" "}
                    <span className="text-[#64748b] font-italic">{isEn ? "// +10% standard compaction" : "// +10% tassement normalisé"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#a855f7]">const</span> totalTonnes = withCompactionM3 * density;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#34d399]">return</span> &#123;
                  </div>
                  <div className="pl-8">volumeM3: rawVolumeM3,</div>
                  <div className="pl-8">bags25kgCount: Math.ceil((totalTonnes * 1000) / 25),</div>
                  <div className="pl-8">budgetAvgEuro: Math.round(totalTonnes * 65),</div>
                  <div className="pl-4">&#125;;</div>
                  <div>&#125;</div>
                </div>
              )}

              {codeTab === "tarkov" && (
                <div className="space-y-1">
                  <div className="text-[#64748b]">
                    {isEn
                      ? "// 2021-2025: Advanced AHK script for Tarkov: Flea Market sniping & pixel analysis"
                      : "// 2021-2025: Script AHK avancé Tarkov : sniping Flea Market & analyse de pixels temps réel"}
                  </div>
                  <div>
                    <span className="text-[#a855f7]">SetBatchLines</span>, -1
                  </div>
                  <div>
                    <span className="text-[#a855f7]">SetKeyDelay</span>, -1, 0
                  </div>
                  <div>
                    <span className="text-[#22d3ee]">AutoMarketSnipe</span>(itemSlot, targetPrice, maxLatencyMs) &#123;
                  </div>
                  <div className="pl-4">
                    pixelColor := <span className="text-amber-400">PixelGetColor</span>(itemSlot.x, itemSlot.y, &quot;RGB&quot;)
                  </div>
                  <div className="pl-4">
                    <span className="text-[#34d399]">if</span> (pixelColor == 0x24C882 &amp;&amp; <span className="text-amber-400">QueryPrice</span>() &lt;= targetPrice) &#123;
                  </div>
                  <div className="pl-8">
                    <span className="text-amber-400">SendInput</span>, &#123;Space&#125;&#123;Y&#125;{" "}
                    <span className="text-[#64748b] font-italic">{isEn ? "// Instant confirmation (< 15ms)" : "// Confirmation instantanée (< 15ms)"}</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-amber-400">LogTransactionSuccess</span>(&quot;EldoradoOrder_Sync&quot;, itemSlot.id)
                  </div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              )}

              {codeTab === "osrs" && (
                <div className="space-y-1">
                  <div className="text-[#64748b]">
                    {isEn
                      ? "// 2021-2025: DreamBot Java Scripting & EternalFarm 24/7 Farm Orchestration"
                      : "// 2021-2025: Scripting Java DreamBot & orchestration de ferme via EternalFarm (24/7)"}
                  </div>
                  <div>
                    <span className="text-[#a855f7]">public class</span> <span className="text-[#22d3ee]">HighLevelWorkerScript</span> <span className="text-[#a855f7]">extends</span> AbstractScript &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#a855f7]">private final</span> VPSMailboxService mailbox = <span className="text-[#a855f7]">new</span> VPSMailboxService(&quot;vps.mail.node&quot;);
                  </div>
                  <div className="pl-4">
                    <span className="text-[#a855f7]">public void</span> <span className="text-amber-400">onStart</span>() &#123;
                  </div>
                  <div className="pl-8">
                    <span className="text-[#34d399]">if</span> (AccountQueue.needsNewAccount()) &#123;
                  </div>
                  <div className="pl-12">
                    Account acc = mailbox.createAndVerifyNewAccount();{" "}
                    <span className="text-[#64748b] font-italic">{isEn ? "// VPS mailbox validation" : "// Création & validation VPS"}</span>
                  </div>
                  <div className="pl-12">
                    EternalFarm.registerNode(acc.getId(), FarmProfile.HIGH_LEVEL);
                  </div>
                  <div className="pl-8">&#125;</div>
                  <div className="pl-4">&#125;</div>
                  <div className="pl-4">
                    <span className="text-[#a855f7]">public int</span> <span className="text-amber-400">onLoop</span>() &#123;
                  </div>
                  <div className="pl-8">
                    <span className="text-[#34d399]">return</span> HighLevelSkillTrainer.executeNextAction();{" "}
                    <span className="text-[#64748b] font-italic">{isEn ? "// Autonomous 24/7 leveling" : "// Montée haut niveau 24/7"}</span>
                  </div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — EXPÉRIENCE ELDORADO (+9 400 AVIS & RIGUEUR CLIENT) */}
      <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20 border-t border-white/[0.08]">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/30 relative overflow-hidden shadow-2xl bg-gradient-to-br from-amber-500/[0.05] via-black/50 to-black/80">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase tracking-wider">
              <Coins className="w-4 h-4 text-amber-400" />
              <span>{isEn ? "04 — COMMERCIAL TRUST & HIGH VOLUME" : "04 — ACTIVITÉ COMMERCIALE & CONFIANCE CLIENT"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {isEn ? "+9,400 Verified Reviews · 99.99% Positive Rating" : "+9 400 Avis Vérifiés · 99,99% de Satisfaction Client"}
            </h2>

            <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              {isEn
                ? "Operating as a top-tier digital merchant on Eldorado.gg taught me the non-negotiable reality of client satisfaction at high volume. When handling thousands of international orders around the clock, technical automation and rigorous human customer care must align perfectly."
                : "Mon activité marchande sur Eldorado.gg m'a confronté directement à l'exigence absolue de la relation client à très fort volume. Gérer des milliers de commandes pour des acheteurs du monde entier impose d'associer une automatisation irréprochable et un service client sans faille."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="text-2xl font-black font-mono text-amber-400">+9 400</div>
              <div className="text-xs font-bold text-white">{isEn ? "Verified Reviews" : "Avis Clients Certifiés"}</div>
              <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                {isEn
                  ? "Thousands of satisfied individual customers from North America, Europe, and Asia."
                  : "Des milliers de clients satisfaits répartis sur tous les fuseaux horaires."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="text-2xl font-black font-mono text-amber-400">99,99 %</div>
              <div className="text-xs font-bold text-white">{isEn ? "Positive Rating Score" : "Taux de Satisfaction"}</div>
              <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                {isEn
                  ? "Flawless track record earned through rapid order fulfillment and transaction security."
                  : "Réputation bâtie sur la rapidité de traitement et la sécurité absolue des transactions."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="text-2xl font-black font-mono text-[#34d399]">24/7</div>
              <div className="text-xs font-bold text-white">{isEn ? "Automated Dispatch" : "Livraison Instantanée"}</div>
              <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                {isEn
                  ? "Custom background dispatch scripts engineered to fulfill digital orders in seconds."
                  : "Scripts d'automatisation dédiés pour valider et expédier les commandes en quelques secondes."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="text-2xl font-black font-mono text-[#22d3ee]">0 %</div>
              <div className="text-xs font-bold text-white">{isEn ? "Dispute Rate" : "Taux de Litige"}</div>
              <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                {isEn
                  ? "Proactive multilingual customer support and complete end-to-end audit logging."
                  : "Support client multilingue réactif et traçabilité exhaustive de chaque livraison."}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-[#94a3b8]">
              {isEn ? "Public merchant profile verifiable on Eldorado.gg" : "Profil commerçant public consultable sur Eldorado.gg"}
            </span>
            <a
              href="https://www.eldorado.gg/users/Stygmar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold border border-amber-500/40 transition-colors"
            >
              <span>{isEn ? "Inspect Eldorado Profile ↗" : "Consulter le profil Eldorado ↗"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 05 — PHILOSOPHIE */}
      <section id="philosophie" className="border-t border-white/[0.08] bg-white/[0.01] py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-white/90 border border-white/15 uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-[#34d399]" />
              <span>{isEn ? "05 — CORE PRINCIPLES" : "05 — NOTRE LIGNE DE CONDUITE"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {isEn ? "Philosophy & Engineering Standards" : "Philosophie & Principes Fondamentaux"}
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mt-3">
              {isEn
                ? "Building digital software that respects user attention, time, and intelligence."
                : "Construire des applications logicielles qui respectent le temps et l'intelligence de leurs utilisateurs."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 text-[#34d399] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{isEn ? "Zero Friction" : "Zéro Friction"}</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                {isEn
                  ? "No mandatory accounts, no dark patterns, no modal paywalls. Enter parameters and get instant answers in seconds."
                  : "Aucun compte forcé, aucun paywall dissimulé, aucune pop-up bloquante. L'utilisateur entre ses données et obtient sa réponse en quelques secondes."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/15 text-[#22d3ee] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{isEn ? "Rigor & Transparency" : "Rigueur & Transparence"}</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                {isEn
                  ? "Calculators and data systems are grounded in verified physical standards, industry norms, and auditable math."
                  : "Les moteurs de calcul et algorithmes s'appuient sur des données physiques, des normes établies (DTU) et des formules vérifiables."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{isEn ? "Modern Web Engineering" : "Ingénierie Web Moderne"}</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                {isEn
                  ? "Next.js App Router, strict TypeScript, instant client-side execution, and lightweight architecture for sub-50ms experiences."
                  : "Next.js App Router, TypeScript strict, exécution client-side instantanée et architecture légère pour des temps de chargement ultra-rapides."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center scroll-mt-20">
        <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10">
          <div className="w-14 h-14 rounded-2xl bg-[#10b981]/15 text-[#34d399] flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30 uppercase tracking-wider mb-3">
            <span>{isEn ? "06 — GET IN TOUCH" : "06 — CONTACT"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            {isEn ? "Feedback, projects, or discussions?" : "Un échange, une idée ou une question ?"}
          </h2>

          <p className="text-sm text-[#94a3b8] mb-8 leading-relaxed">
            {isEn
              ? "Have feedback on JardinCalcul.fr, thoughts on Hardware Lab, or want to discuss automation, code, and systems? Let's connect!"
              : "Une suggestion sur JardinCalcul.fr, une idée pour Hardware Lab, ou envie d'échanger sur du code et de l'automatisation ? Parlons-en !"}
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
                  <span>{isEn ? "Email copied (contact@stygmar.com)" : "Email copié (contact@stygmar.com)"}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#06080d]" />
                  <span>{isEn ? "Copy contact@stygmar.com" : "Copier contact@stygmar.com"}</span>
                </>
              )}
            </button>
            <a
              href="mailto:contact@stygmar.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{isEn ? "Open email client" : "Ouvrir ma messagerie"}</span>
            </a>
            <a
              href="https://github.com/Stygmar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-colors"
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
            <span>{isEn ? "Florian · Code, Automation & Web Tools · © 2026" : "Florian · Code, Automatisation & Outils Web · © 2026"}</span>
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
