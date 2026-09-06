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
  Globe,
} from "lucide-react";

type Language = "fr" | "en";
type TimelineTab = "botting" | "blois" | "web";
type ProjectTab = "jardin" | "hardware";
type CodeSnippetTab = "tarkov" | "osrs" | "jardin";

export default function HomePage() {
  const [lang, setLang] = useState<Language>("fr");
  const [timelineTab, setTimelineTab] = useState<TimelineTab>("botting");
  const [projectTab, setProjectTab] = useState<ProjectTab>("jardin");
  const [codeTab, setCodeTab] = useState<CodeSnippetTab>("tarkov");
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
                <span>{isEn ? "Florian · Software Engineer & Maker" : "Florian · Développeur & Maker"}</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94a3b8]">
            <a href="#parcours" className="hover:text-[#a855f7] transition-colors font-semibold flex items-center gap-1">
              <span>{isEn ? "My Journey" : "Mon Parcours"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
            </a>
            <a href="#projets" className="hover:text-white transition-colors">
              {isEn ? "Projects" : "Projets"}
            </a>
            <a href="#hardware" className="hover:text-[#06b6d4] transition-colors flex items-center gap-1">
              <span>{isEn ? "Hardware Lab" : "Hardware Lab"}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#06b6d4]/15 text-[#06b6d4] font-semibold border border-[#06b6d4]/30">
                {isEn ? "Soon" : "Bientôt"}
              </span>
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
                className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                  lang === "fr" ? "bg-[#10b981] text-white shadow-sm" : "text-[#94a3b8] hover:text-white"
                }`}
                title="Passer le site en Français"
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => toggleLang("en")}
                className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
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
          <span>{isEn ? "OFFICIAL PORTFOLIO, EXPERTISE & ACTIVE PROJECTS" : "PORTFOLIO, EXPERTISE & PROJETS ACTIFS"}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Florian (Stygmar).{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] via-[#06b6d4] to-[#a855f7]">
            {isEn ? "Software engineer & automation specialist." : "Ingénieur logiciel & expert en automatisation."}
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-8">
          {isEn
            ? "9 years of code: 4 years studying Computer Science in Blois, 4 years architecting 24/7 gaming automation & operating as an Eldorado.gg merchant (+9,400 reviews, 99.99% positive), leading in 2026 to building frictionless, lightning-fast web tools like JardinCalcul.fr."
            : "9 ans de code : 4 ans de licence informatique à Blois, 4 ans d'ingénierie d'automatisation, de botting et d'activité marchande sur Eldorado.gg (+9 400 avis à 99,99% positifs), puis la création en 2026 d'outils web ouverts, utiles et ultra-rapides comme JardinCalcul.fr."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#parcours"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] hover:opacity-95 text-white font-bold text-sm transition-all shadow-lg shadow-[#8b5cf6]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Terminal className="w-4 h-4" />
            <span>{isEn ? "Explore my journey in detail" : "Explorer mon parcours en détail"}</span>
          </a>
          <a
            href="https://www.jardincalcul.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-lg shadow-[#10b981]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sprout className="w-4 h-4" />
            <span>{isEn ? "Try JardinCalcul.fr ↗" : "Tester JardinCalcul.fr ↗"}</span>
          </a>
          <a
            href="https://www.eldorado.gg/users/Stygmar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold text-sm transition-all hover:scale-[1.02]"
          >
            <Coins className="w-4 h-4" />
            <span>{isEn ? "+9,400 Reviews (99.99%) ↗" : "+9 400 Avis (99,99%) ↗"}</span>
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

        {/* Quick Social Proof Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 pt-6 border-t border-white/5 text-xs text-[#94a3b8]">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-white">4 ans</span>
            <span>{isEn ? "Licence CS Blois" : "Licence Informatique (Blois)"}</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2">
            <span className="font-mono font-extrabold text-amber-400">+9 400 avis</span>
            <span className="text-amber-200/90 font-medium">{isEn ? "(99.99% positive rating)" : "(99,99% d'avis positifs sur Eldorado)"}</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-[#34d399]">100%</span>
            <span>{isEn ? "Autonomous & Client Focus" : "Exécution & Rigueur Client"}</span>
          </div>
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
                <span>{isEn ? "Chronological Journey & Technical DNA" : "Parcours Chronologique & Savoir-Faire"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isEn ? "From High-Precision Automation to Web Products" : "De l'automatisation de haut vol à l'édition d'outils web"}
              </h2>
            </div>
            <div className="text-xs text-[#94a3b8] md:text-right">
              {isEn ? "Click on an era to inspect the underlying engineering and tech stack." : "Cliquez sur une période pour explorer l'ingénierie et les technologies associées."}
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
                <div className="font-bold text-sm text-white mt-0.5">{isEn ? "B.S. in Computer Science" : "Licence Informatique"}</div>
                <div className="text-xs text-[#94a3b8] mt-0.5">{isEn ? "University of Tours · Blois Campus" : "Université · Antenne de Blois"}</div>
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
                <span className="text-[10px] font-mono text-amber-400 font-bold">{isEn ? "Defining Era" : "Expérience Clé"}</span>
              </div>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                timelineTab === "botting" ? "bg-[#06b6d4] text-black font-bold" : "bg-white/5 text-[#94a3b8]"
              }`}>
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#22d3ee]">2021 — 2025</div>
                <div className="font-bold text-sm text-white mt-0.5">{isEn ? "Automation & Botting" : "Automatisation & Botting"}</div>
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
                <div className="text-xs font-mono font-bold text-[#34d399]">{isEn ? "2026 — Present" : "2026 — Aujourd'hui"}</div>
                <div className="font-bold text-sm text-white mt-0.5">{isEn ? "Independent Web Studio" : "Édition Web Indépendante"}</div>
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
                      {isEn
                        ? "B.S. in Computer Science (University of Tours · Blois Campus)"
                        : "Licence Informatique Générale (Antenne Universitaire de Blois)"}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#8b5cf6]/15 text-[#c084fc] border border-[#8b5cf6]/30">
                    {isEn ? "2017 — 2021 · 4 years" : "2017 — 2021 · 4 ans"}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  {isEn
                    ? "Four years immersed in scientific foundations and software engineering. This is where I developed algorithmic rigor and a deep understanding of low-level machine architectures:"
                    : "Quatre années d'immersion dans les fondamentaux scientifiques et l'ingénierie logicielle. C'est ici que j'ai forgé ma rigueur mathématique et ma compréhension profonde des architectures machines :"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">
                      {isEn ? "Algorithms & Complexity:" : "Algorithmique & Complexité :"}
                    </strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "Data structures (trees, graphs, hash tables), time/space complexity optimization, and engineering problem solving."
                        : "Structures de données (arbres, graphes, tables de hachage), optimisation temporelle/spatiale et résolution de problèmes d'ingénierie."}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">
                      {isEn ? "Systems Programming & OOP:" : "Programmation Système & POO :"}
                    </strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "C and C++ for manual low-level memory management, and Java for modular object-oriented design."
                        : "C et C++ pour la gestion bas niveau de la mémoire, et Java pour la programmation orientée objet stricte et modulaire."}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">
                      {isEn ? "Databases & SQL:" : "Bases de Données & SQL :"}
                    </strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "Relational database modeling, schema normalization, and high-performance aggregation queries."
                        : "Modélisation relationnelle, normalisation des données et requêtes d'agrégation à haute performance."}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <strong className="text-white block text-sm font-semibold">
                      {isEn ? "Systems & Networking:" : "Systèmes & Réseaux :"}
                    </strong>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "TCP/IP protocols, thread management, concurrent processes, and client-server architectures."
                        : "Protocoles TCP/IP, gestion des threads, processus concurrents et communications client-serveur."}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#94a3b8]">
                  <span>
                    {isEn
                      ? "Key takeaway: the mathematical discipline required to model physical formulas and engineering rules with zero approximation."
                      : "Ce que ça m'a apporté : la rigueur nécessaire pour modéliser des formules physiques sans la moindre approximation."}
                  </span>
                </div>
              </div>
            )}

            {timelineTab === "botting" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] animate-ping" />
                    <h3 className="text-xl font-bold text-white">
                      {isEn
                        ? "High-Volume Automation, Botting & Eldorado Merchant (+9,400 Reviews)"
                        : "Ingénierie d'Automatisation, Botting & Vendeur Eldorado (+9 400 Avis)"}
                    </h3>
                  </div>
                  <a
                    href="https://www.eldorado.gg/users/Stygmar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-xs font-bold text-amber-400 transition-colors"
                  >
                    <Coins className="w-3.5 h-3.5" />
                    <span>{isEn ? "Eldorado.gg: +9,400 Reviews (99.99%) ↗" : "Eldorado.gg : +9 400 Avis (99,99%) ↗"}</span>
                  </a>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  {isEn
                    ? "For 4 years, I operated professionally across global digital asset marketplaces, architecting autonomous bots and scripts to farm, trade, and distribute virtual currencies and gaming accounts at high volume."
                    : "Pendant 4 ans, j'ai opéré professionnellement sur les marchés virtuels internationaux en développant des scripts et des bots pour générer et revendre des monnaies numériques et des comptes de jeux vidéo à fort volume."}
                </p>

                {/* Highlight Card: Direct Client Relationships & 9,400 Reviews */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-black/70 to-black/70 border border-amber-500/30 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                      <BadgeCheck className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>
                        {isEn
                          ? "High-Volume Merchant Operations & Client Relationships (+9,400 Reviews)"
                          : "Activité Marchande & Relation Client à Fort Volume (+9 400 Avis)"}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                      99,99% {isEn ? "Positive Rating" : "Avis Positifs"}
                    </span>
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    {isEn
                      ? "Alongside autonomous code development, I personally operated the commercial storefront on Eldorado.gg: serving thousands of international clients, managing rapid 24/7 order fulfillment, resolving customer queries, and maintaining a flawless 99.99% positive feedback track record over +9,400 verified reviews."
                      : "En parallèle du développement des bots et scripts, j'ai assuré la gestion commerciale en direct avec les clients sur Eldorado.gg : traitement de milliers de commandes avec des acheteurs du monde entier, support client 24/7 réactif et multilingue, sécurisation des livraisons et maintien d'une réputation irréprochable avec plus de 9 400 avis clients à 99,99% positifs."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-black/60 border border-[#06b6d4]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#22d3ee] font-bold text-sm">
                      <Gamepad2 className="w-4 h-4" />
                      <span>Escape from Tarkov (EFT) — AutoHotkey</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "Advanced AutoHotkey (AHK) engineering: surgical automation of nested inventories, sub-15ms Flea Market sniping, high-speed pixel recognition, in-game captcha solving, and robust evasion of heuristic anti-bot detection systems."
                        : "Ingénierie avancée sous AutoHotkey (AHK) : automatisation chirurgicale d'inventaires complexes, sniping ultra-rapide sur le Flea Market sous la barre des 15 ms, analyse visuelle de pixels, contournement des protections antibot et résolution automatisée des captchas in-game."}
                    </p>
                    <div className="text-[11px] font-mono text-[#06b6d4] pt-1">
                      {isEn
                        ? "→ Anti-bot & in-game captcha bypass, reactive micro-timings & zero latency"
                        : "→ Contournement antibot & captchas in-game, timings millimétrés & zéro latence"}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/60 border border-[#8b5cf6]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#c084fc] font-bold text-sm">
                      <Terminal className="w-4 h-4" />
                      <span>Old School RuneScape (OSRS) — Java</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "Autonomous Java bots: game client reverse-engineering, event-driven decision trees, and distributed multi-session farms running 24/7 with zero human intervention."
                        : "Développement de bots complets en Java : reverse-engineering du client de jeu, logique événementielle, gestion de fermes multi-sessions et multi-threads tournant 24h/24 et 7j/7 sans surveillance."}
                    </p>
                    <div className="text-[11px] font-mono text-[#a855f7] pt-1">
                      {isEn ? "→ Distributed systems, 24/7 resilience & zero memory leak" : "→ Systèmes distribués, résilience 24/7 & zero memory leak"}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-200/90 leading-relaxed">
                  <strong>{isEn ? "The critical lesson from this real-world battlefield: " : "La leçon capitale de cette expérience : "}</strong>
                  {isEn
                    ? "When a software bug, memory leak, or network hiccup immediately costs real money in real time, error tolerance is zero. You learn to write battle-hardened code engineered to endure stress and run indefinitely without failing."
                    : "Quand une erreur de code, une fuite de mémoire ou une désynchronisation réseau entraîne une perte d'argent réelle en direct, la tolérance aux bugs est nulle. On apprend à concevoir du code infaillible, testé sous toutes les conditions de stress et totalement autonome."}
                </div>
              </div>
            )}

            {timelineTab === "web" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    <h3 className="text-xl font-bold text-white">
                      {isEn ? "Building Open, Frictionless & Blazingly Fast Web Tools" : "Édition d'Outils Web Utiles, Neutres & Instantanés"}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30">
                    {isEn ? "2026 — Present" : "2026 — Aujourd'hui"}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  {isEn
                    ? "Channeling these 9 years of algorithmic rigor, scraping proficiency, and automation discipline into open, frictionless consumer web products:"
                    : "Mettre ces 9 années d'expertise en algorithmes, en automatisation et en scraping au service d'outils web grand public en accès libre, sans intermédiaire ni modèle prédateur :"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-black/60 border border-[#10b981]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#34d399] font-bold text-sm">
                      <Sprout className="w-4 h-4" />
                      <span>{isEn ? "JardinCalcul.fr (Live in Production)" : "JardinCalcul.fr (En Production)"}</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "7 physical material calculators (gravel, concrete, lawn, soil, fences, tiles), 35 technical guides, and 50 pre-rendered static pages. 100% local client-side computation in < 50ms."
                        : "7 calculateurs physiques (gravier, béton, gazon, terreau, clôtures, dalles), 35 guides chantiers et 50 pages statiques. Exécution locale 100% client-side en moins de 50ms."}
                    </p>
                    <a href="https://www.jardincalcul.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-[#34d399] hover:underline pt-1">
                      <span>{isEn ? "Visit official website →" : "Visiter le site officiel →"}</span>
                    </a>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/60 border border-[#06b6d4]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#22d3ee] font-bold text-sm">
                      <Cpu className="w-4 h-4" />
                      <span>{isEn ? "Hardware & Tech Comparator (In R&D)" : "Comparateur Hardware & Tech (En Conception)"}</span>
                    </div>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {isEn
                        ? "Unbiased GPU/CPU comparator (FPS/$/Watt), multi-retailer price aggregator, and mathematical real-deal detector."
                        : "Comparateur neutre GPU/CPU (FPS/€/Watt), agrégateur de cours multi-marchands et détecteur mathématique de vrais bons plans matériels."}
                    </p>
                    <a href="#hardware" className="inline-flex items-center gap-1 text-xs font-bold text-[#22d3ee] hover:underline pt-1">
                      <span>{isEn ? "Discover R&D concept →" : "Découvrir le concept R&D →"}</span>
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
                <span className="text-xs font-mono text-[#94a3b8] ml-2">stygmar-env — {isEn ? "interactive terminal" : "terminal interactif"}</span>
              </div>

              <div className="flex items-center gap-1.5">
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
                <button
                  type="button"
                  onClick={() => setCodeTab("jardin")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
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
                  <div className="text-[#64748b]">
                    {isEn
                      ? "// 2021-2025: Advanced AHK script for Tarkov: Flea Market sniping, antibot evasion & captcha solving"
                      : "// 2021-2025: Script AHK avancé Tarkov : sniping Flea Market, bypass antibot & résolution captchas"}
                  </div>
                  <div><span className="text-[#a855f7]">SetBatchLines</span>, -1</div>
                  <div><span className="text-[#a855f7]">SetKeyDelay</span>, -1, 0</div>
                  <div><span className="text-[#22d3ee]">AutoMarketSnipe</span>(itemSlot, targetPrice, maxLatencyMs) &#123;</div>
                  <div className="pl-4"><span className="text-[#34d399]">if</span> (<span className="text-amber-400">DetectInGameCaptcha</span>()) &#123;</div>
                  <div className="pl-8"><span className="text-amber-400">SolveVisualCaptcha</span>(itemSlot) <span className="text-[#64748b] font-italic">{isEn ? "// Heuristic & in-game captcha bypass" : "// Résolution & contournement antibot"}</span></div>
                  <div className="pl-4">&#125;</div>
                  <div className="pl-4">pixelColor := <span className="text-amber-400">PixelGetColor</span>(itemSlot.x, itemSlot.y, &quot;RGB&quot;)</div>
                  <div className="pl-4"><span className="text-[#34d399]">if</span> (pixelColor == 0x24C882 &amp;&amp; <span className="text-amber-400">QueryPrice</span>() &lt;= targetPrice) &#123;</div>
                  <div className="pl-8"><span className="text-amber-400">SendInput</span>, &#123;Space&#125;&#123;Y&#125; <span className="text-[#64748b] font-italic">{isEn ? "// Instant confirmation (< 15ms)" : "// Confirmation instantanée (< 15ms)"}</span></div>
                  <div className="pl-8"><span className="text-amber-400">LogTransactionSuccess</span>(&quot;EldoradoOrder_Sync&quot;, itemSlot.id)</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              )}

              {codeTab === "osrs" && (
                <div className="space-y-1">
                  <div className="text-[#64748b]">
                    {isEn
                      ? "// 2021-2025: Autonomous Java multi-thread daemon running 24/7 on Old School RuneScape"
                      : "// 2021-2025: Démon multi-thread Java tournant 24/7 sur Old School RuneScape"}
                  </div>
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
                  <div className="text-[#64748b]">
                    {isEn
                      ? "// 2026: Pure client-side physical calculation engine of JardinCalcul.fr (< 50ms)"
                      : "// 2026: Moteur de calcul physique pur client-side de JardinCalcul.fr (< 50ms)"}
                  </div>
                  <div><span className="text-[#a855f7]">export function</span> <span className="text-[#22d3ee]">calculateGravelNeeds</span>(lengthM: number, widthM: number, depthCm: number, density: number) &#123;</div>
                  <div className="pl-4"><span className="text-[#a855f7]">const</span> rawVolumeM3 = (lengthM * widthM * depthCm) / 100;</div>
                  <div className="pl-4"><span className="text-[#a855f7]">const</span> withCompactionM3 = rawVolumeM3 * 1.10; <span className="text-[#64748b] font-italic">{isEn ? "// +10% standard compaction" : "// +10% tassement normalisé"}</span></div>
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
              <span>{isEn ? "Studio & Digital Products" : "Studio & Réalisations Numériques"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {isEn ? "Engineered Projects" : "Les Projets Développés"}
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
                    {isEn ? "LIVE & IN PRODUCTION" : "EN LIGNE & ACTIF"}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10">
                    {isEn ? "Landscaping & Construction" : "Aménagement Extérieur & BTP"}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10">
                    {isEn ? "50 Static Pages" : "50 Pages Statiques"}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#34d399] transition-colors mb-2">
                    {isEn
                      ? "JardinCalcul.fr — The Exterior Material Estimation Suite"
                      : "JardinCalcul.fr — La suite d'estimation de matériaux d'extérieur"}
                  </h3>
                  <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                    {isEn
                      ? "Engineered for homeowners and DIYers: no more guesswork in hardware stores. Describe your project (dimensions, use case, depth), and the engine immediately calculates volume, tonnage, exact bag count, and generates a printable shopping list with essential accessories."
                      : "Conçu pour les particuliers et bricoleurs exigeants : fini les hésitations en magasin. Vous décrivez votre chantier (dimensions, usage, finition), l'outil calcule instantanément le cubage, le tonnage, le nombre de sacs et vous génère une liste d'achats complète avec accessoires indispensables."}
                  </p>
                </div>

                {/* 4 Core pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#cbd5e1]">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">{isEn ? "7 Specialized Calculators:" : "7 Calculateurs Métier :"}</strong>
                      <span className="text-[#94a3b8] text-xs">
                        {isEn ? "Gravel, concrete, soil, lawn, mulch, rigid fences, pedestal tiles." : "Gravier, béton, terreau, gazon, paillage, clôture, terrasse sur plots."}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">{isEn ? "Interactive 2D Cross-Sections:" : "Schémas 2D de coupe :"}</strong>
                      <span className="text-[#94a3b8] text-xs">
                        {isEn ? "Instant visual breakdown of depth, base layers, and material compaction." : "Visualisation immédiate de l'épaisseur et des couches techniques."}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">{isEn ? "Purchase Arbitrage & Budget:" : "Décision d'achat & Budget :"}</strong>
                      <span className="text-[#94a3b8] text-xs">
                        {isEn ? "Smart cost comparison (bags vs bulk) and real retail market estimates." : "Arbitrage économique sacs vs vrac et fourchette de prix magasin en direct."}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">{isEn ? "35 Technical Guides:" : "35 Guides Pratiques :"}</strong>
                      <span className="text-[#94a3b8] text-xs">
                        {isEn ? "Shovel/bucket concrete recipes, gravel grades, building standards, and best practices." : "Dosages au seau/pelle, calibres, normes DTU et conseils de mise en œuvre."}
                      </span>
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
                  <span>{isEn ? "Launch JardinCalcul.fr" : "Accéder à JardinCalcul.fr"}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="text-xs text-[#94a3b8] text-center lg:text-right">
                  {isEn ? "Official domain: " : "Domaine officiel : "} <strong className="text-white">jardincalcul.fr</strong>
                </div>
                <div className="text-[11px] text-[#64748b] text-center lg:text-right">
                  {isEn ? "Free · Zero intrusive ads · 100% Client-side" : "Gratuit · Sans pub intrusive · 100% Client-side"}
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
                    {isEn ? "PROJECT IN CONCEPTION (R&D 2026)" : "PROJET EN CONCEPTION (R&D 2026)"}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/10">
                    Hardware &amp; Tech
                  </span>
                </div>
                <span className="text-xs font-mono text-[#22d3ee]">{isEn ? "Horizon: Late 2026" : "Horizon Fin 2026"}</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {isEn
                    ? "The Unbiased Hardware & Tech Comparator: Zero Bullshit, Real Metrics"
                    : "Le Comparateur & Agrégateur Hardware neutre, sans faux bons plans"}
                </h3>
                <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                  {isEn
                    ? "The PC hardware space is riddled with generic AI scrapers, misleading benchmarks, and fake discounted prices. Hardware Lab leverages our scraping and instant analytics background to deliver a genuinely objective tool."
                    : "Le marché des composants PC est pollué par des comparateurs automatisés sans âme, des benchmarks trompeurs et de fausses promos barrées. Le projet Hardware Lab réutilisera nos compétences en scraping et calculs instantanés pour proposer un outil 100 % objectif."}
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
                      ? "Direct real-world gaming and creative benchmarks indexed against street price and power draw."
                      : "Comparaison directe des performances réelles en jeu et création par rapport au prix payé et à la consommation énergétique."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#34d399] font-bold text-sm">
                    <TrendingDown className="w-4 h-4" />
                    <span>{isEn ? "Deal Aggregator & Price History" : "Agrégateur de Deals & Historique de Cours"}</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {isEn
                      ? "Transparent price tracking across European e-tailers, mathematically detecting genuine price drops."
                      : "Suivi transparent des cours des composants chez les cybermarchands européens avec détection des vraies baisses de prix."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#a855f7] font-bold text-sm">
                    <Sliders className="w-4 h-4" />
                    <span>{isEn ? "PC Builder & Physical Clearance Checker" : "Config Builder & Vérificateur Physique"}</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {isEn
                      ? "Smart physical clearance checks: cooler height, GPU case length, motherboard VRM, and PSU capacity."
                      : "Vérification intelligente des compatibilités physiques : dégagement ventirad, longueur GPU dans le boîtier et dimensionnement d'alimentation."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Monitor className="w-4 h-4" />
                    <span>{isEn ? "Balanced Build Guides by Real Budget" : "Paniers Types par Budget Réel"}</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {isEn
                      ? "Optimized part selections (1080p budget, 1440p sweet-spot, 4K workstation) auto-updated with stock swings."
                      : "Configurations optimisées au centime près (1080p, 1440p, 4K / IA créateurs) mises à jour en continu selon les fluctuations réelles."}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
                <span>
                  {isEn
                    ? "Current stage: Component database modeling & ratio formulas"
                    : "Phase actuelle : Modélisation de la base de données de composants"}
                </span>
                <a href="#contact" className="font-bold text-[#22d3ee] hover:underline">
                  {isEn ? "Have an idea or feedback? Let us know →" : "Une idée ou suggestion ? Écrivez-nous →"}
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
              {isEn ? "Core Philosophy & Engineering Standards" : "Notre Ligne de Conduite"}
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mt-3">
              {isEn
                ? "Building software that respects user attention, time, and intelligence."
                : "Construire des applications web qui respectent le temps et l'intelligence de leurs utilisateurs."}
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
                  ? "No mandatory accounts, no dark patterns, no modal paywalls. Enter your parameters and get instant answers in seconds."
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
                  ? "Calculators and comparison engines are grounded in verified physical standards, industry norms, and auditable math."
                  : "Les moteurs de calcul et algorithmes de comparaison s'appuient sur des données physiques, des normes établies et des formules vérifiables, pas sur du vent."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{isEn ? "Modern Web Engineering" : "Ingénierie Web Moderne"}</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                {isEn
                  ? "Next.js App Router, strict TypeScript, instant client-side execution, and lightweight architecture for sub-100ms load times."
                  : "Next.js App Router, TypeScript strict, exécution client-side instantanée et architecture légère pour des temps de chargement ultra-rapides même sur mobile."}
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
            {isEn ? "Feedback, suggestions, or collaboration?" : "Un retour, une suggestion ou une question ?"}
          </h2>

          <p className="text-sm text-[#94a3b8] mb-8 leading-relaxed">
            {isEn
              ? "Have an idea for JardinCalcul.fr, feature requests for the upcoming Hardware comparator, or want to discuss automation and code? Let's connect!"
              : "Vous avez une idée d'amélioration pour JardinCalcul.fr, une suggestion pour le futur comparateur Hardware, ou vous souhaitez échanger sur du code ou de l'automatisation ? Parlons-en !"}
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
            <span>{isEn ? "Independent Web Studio & Automation · © 2026" : "Studio Web & Automatisation · © 2026"}</span>
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
