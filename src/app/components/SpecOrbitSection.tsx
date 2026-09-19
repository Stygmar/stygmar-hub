"use client";

import React, { useState } from "react";
import {
  Compass,
  Cpu,
  Sliders,
  Monitor,
  Scale,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ShoppingCart,
  Newspaper,
  Users,
  BarChart3,
  Flame,
  Layers,
  Sparkles,
  Zap,
  Info,
  HardDrive,
  Boxes,
  Activity,
  Gauge,
  ArrowRight,
  Check,
  Workflow,
  Server,
  Star,
} from "lucide-react";

type OrbitPresetKey = "budget" | "sweetspot" | "enthusiast" | "extreme";

interface OrbitPart {
  categoryKey: string;
  categoryLabelFr: string;
  categoryLabelEn: string;
  name: string;
  price: number;
  badge: string;
  specs: string;
  whyFr: string;
  whyEn: string;
  checks: { labelFr: string; labelEn: string }[];
}

interface OrbitBuildPreset {
  id: OrbitPresetKey;
  nameFr: string;
  nameEn: string;
  subtitleFr: string;
  subtitleEn: string;
  badgeFr: string;
  badgeEn: string;
  targetBudget: number;
  recommendedRes: "1080p" | "1440p" | "4k";
  balanceScore: number;
  estimatedWattage: number;
  psuWattage: number;
  fpsEstimates: { game: string; res: string; fps: number; settings: string }[];
  parts: Record<string, OrbitPart>;
}

const ORBIT_BUILDS: Record<OrbitPresetKey, OrbitBuildPreset> = {
  budget: {
    id: "budget",
    nameFr: "1080p High-FPS & E-Sport",
    nameEn: "1080p High-FPS & E-Sports",
    subtitleFr: "Le ratio FPS / € absolu : composants éprouvés sans surcoût de plateforme",
    subtitleEn: "Maximum FPS per € without platform tax or wasted overhead",
    badgeFr: "Budget Maîtrisé (~840 €)",
    badgeEn: "Best Value (~840 €)",
    targetBudget: 840,
    recommendedRes: "1080p",
    balanceScore: 99,
    estimatedWattage: 380,
    psuWattage: 650,
    fpsEstimates: [
      { game: "Counter-Strike 2", res: "1080p Comp.", fps: 360, settings: "High" },
      { game: "Warzone", res: "1080p", fps: 125, settings: "Équilibré" },
      { game: "Cyberpunk 2077", res: "1080p", fps: 84, settings: "Ultra (FSR)" },
    ],
    parts: {
      cpu: {
        categoryKey: "cpu",
        categoryLabelFr: "Processeur (CPU)",
        categoryLabelEn: "Processor (CPU)",
        name: "AMD Ryzen 5 5600X",
        price: 125,
        badge: "6c / 12t · 4.6 GHz",
        specs: "Socket AM4 · 32 Mo Cache L3 · 65W TDP",
        whyFr:
          "Incontestable champion du rapport perf/prix. Ses 6 cœurs rapides évitent le surcoût d'une plateforme DDR5, permettant d'allouer plus de 40% du budget total au GPU.",
        whyEn:
          "Unrivaled price-to-performance champion. 6 high-speed cores avoiding expensive DDR5 platform overhead, directing over 40% of the total budget straight to the GPU.",
        checks: [
          { labelFr: "Socket AM4 validé & BIOS à jour", labelEn: "Socket AM4 verified & BIOS ready" },
          { labelFr: "Zéro goulot d'étranglement en 1080p", labelEn: "Zero 1080p bottleneck" },
        ],
      },
      gpu: {
        categoryKey: "gpu",
        categoryLabelFr: "Carte Graphique (GPU)",
        categoryLabelEn: "Graphics Card (GPU)",
        name: "AMD Radeon RX 6750 XT 12 Go",
        price: 339,
        badge: "12 Go GDDR6 · RDNA 2",
        specs: "Bus 192-bit · 2560 Shaders · 250W TDP",
        whyFr:
          "12 Go de VRAM dans ce budget : enterre les cartes concurrentes à 8 Go limitées sur les jeux modernes. Permet de jouer en Ultra sans saturation de texture.",
        whyEn:
          "12GB VRAM buffer at this tier obliterates competing 8GB cards choke-pointed on modern textures. High-refresh 1080p and capable 1440p entry.",
        checks: [
          { labelFr: "Longueur 280 mm < Boîtier 330 mm", labelEn: "Length 280mm < Case 330mm max" },
          { labelFr: "2 connecteurs 8-pin PCIe disponibles", labelEn: "2x 8-pin PCIe connectors ready" },
        ],
      },
      motherboard: {
        categoryKey: "motherboard",
        categoryLabelFr: "Carte Mère",
        categoryLabelEn: "Motherboard",
        name: "MSI B550M PRO-VDH WiFi",
        price: 105,
        badge: "Micro-ATX · Wi-Fi intégré",
        specs: "Chipset B550 · PCIe 4.0 x16 · 2x M.2 NVMe",
        whyFr:
          "Double port M.2 PCIe 4.0, Wi-Fi intégré et étage d'alimentation solide pour le 5600X sans payer pour du RGB superflu.",
        whyEn:
          "Dual M.2 PCIe 4.0 slots, integrated Wi-Fi, and rock-solid VRMs without paying for unnecessary RGB markup.",
        checks: [
          { labelFr: "Format Micro-ATX parfaitement logé", labelEn: "Micro-ATX form factor fits" },
          { labelFr: "Bouton Flash BIOS sans processeur", labelEn: "BIOS Flashback ready" },
        ],
      },
      ram: {
        categoryKey: "ram",
        categoryLabelFr: "Mémoire RAM",
        categoryLabelEn: "Memory (RAM)",
        name: "32 Go (2x16 Go) DDR4-3600 CL16 Corsair",
        price: 69,
        badge: "DDR4-3600 · CL16",
        specs: "Kit Dual Channel · 1.35V · Profil XMP 2.0",
        whyFr:
          "Le sweet spot DDR4 à 3600 MHz CL16 synchrone avec l'Infinity Fabric (1800 MHz). 32 Go élimine tout risque de micro-stuttering en jeu avec Discord ouvert.",
        whyEn:
          "DDR4 sweet spot at 3600MHz CL16 in 1:1 sync with Infinity Fabric (1800MHz). 32GB completely eliminates modern background micro-stutters.",
        checks: [
          { labelFr: "Profil XMP 2.0 certifié stable", labelEn: "XMP 2.0 profile certified" },
          { labelFr: "Format Low Profile 34 mm", labelEn: "34mm low-profile clearance" },
        ],
      },
      storage: {
        categoryKey: "storage",
        categoryLabelFr: "Stockage SSD",
        categoryLabelEn: "Storage (NVMe SSD)",
        name: "Kingston NV2 1 To NVMe PCIe 4.0",
        price: 59,
        badge: "1 To · 3500 Mo/s",
        specs: "Format M.2 2280 · NVMe 1.4 · 320 TBW",
        whyFr:
          "Temps de chargement quasi-instantanés en jeu pour un coût au gigaoctet imbattable dans cette catégorie.",
        whyEn:
          "Near-instant game boot and level loads at unbeatable cost-per-gigabyte in this budget bracket.",
        checks: [
          { labelFr: "DirectStorage compatible", labelEn: "DirectStorage compatible" },
          { labelFr: "Slot M.2 PCIe 4.0 natif", labelEn: "Native PCIe 4.0 M.2 slot" },
        ],
      },
      cooler: {
        categoryKey: "cooler",
        categoryLabelFr: "Refroidissement",
        categoryLabelEn: "Cooler",
        name: "Thermalright Assassin X 120 SE",
        price: 20,
        badge: "4 Caloducs · 120 mm PWM",
        specs: "Hauteur 148 mm · Pression statique optimisée",
        whyFr:
          "4 caloducs en contact direct : 25°C de moins que le ventirad d'origine pour seulement 20€, dans un silence total.",
        whyEn:
          "4 direct-touch heatpipes: 25°C cooler than stock cooler for just 20€ with virtually silent operation.",
        checks: [
          { labelFr: "Hauteur 148 mm < Boîtier 161 mm", labelEn: "Height 148mm < Case tolerance 161mm" },
        ],
      },
      psu: {
        categoryKey: "psu",
        categoryLabelFr: "Alimentation (PSU)",
        categoryLabelEn: "Power Supply (PSU)",
        name: "MSI MAG A650BN 650W 80+ Bronze",
        price: 58,
        badge: "650W · 80+ Bronze",
        specs: "Rail unique +12V · Ventilateur 120 mm Low-Noise",
        whyFr:
          "Puissance amplement suffisante (conso estimée ~380W) laissant ~40% de marge pour une excellente durée de vie et zéro coupure.",
        whyEn:
          "Generous 650W output (estimated ~380W draw) leaving ~40% headroom for longevity and optimal efficiency curve.",
        checks: [
          { labelFr: "Protections OVP, OPP, SCP certifiées", labelEn: "OVP, OPP, SCP protections certified" },
        ],
      },
      case: {
        categoryKey: "case",
        categoryLabelFr: "Boîtier PC",
        categoryLabelEn: "Chassis (Case)",
        name: "Montech AIR 100 ARGB (4 fans inclus)",
        price: 64,
        badge: "4x Ventilateurs PWM inclus",
        specs: "Façade Mesh · Verre trempé magnétique",
        whyFr:
          "Façade mesh à flux d'air maximal avec 4 ventilateurs déjà inclus : économise 30€ de ventilateurs additionnels.",
        whyEn:
          "Maximum airflow mesh front with 4 PWM fans included out-of-the-box, saving 30€ in aftermarket fans.",
        checks: [
          { labelFr: "Dégagement GPU 330 mm vérifié", labelEn: "GPU clearance 330mm verified" },
        ],
      },
    },
  },

  sweetspot: {
    id: "sweetspot",
    nameFr: "1440p Sweet Spot (Le Juste Milieu)",
    nameEn: "1440p Sweet Spot (The Golden Balance)",
    subtitleFr: "L'équilibre parfait du marché : longévité AM5, DLSS 3.5 et Ray Tracing fluide",
    subtitleEn: "The indisputable market sweet spot: AM5 longevity, DLSS 3.5, and smooth Ray Tracing",
    badgeFr: "Recommandation Phare (~1 370 €)",
    badgeEn: "SpecOrbit Pick (~1,370 €)",
    targetBudget: 1370,
    recommendedRes: "1440p",
    balanceScore: 100,
    estimatedWattage: 420,
    psuWattage: 750,
    fpsEstimates: [
      { game: "Warzone", res: "1440p Ultra", fps: 145, settings: "Ultra" },
      { game: "Cyberpunk 2077", res: "1440p Ultra", fps: 112, settings: "Ultra + DLSS 3.5" },
      { game: "Black Myth: Wukong", res: "1440p High", fps: 96, settings: "Élevé" },
    ],
    parts: {
      cpu: {
        categoryKey: "cpu",
        categoryLabelFr: "Processeur (CPU)",
        categoryLabelEn: "Processor (CPU)",
        name: "AMD Ryzen 5 7600X",
        price: 209,
        badge: "6c / 12t · 5.3 GHz Zen 4",
        specs: "Socket AM5 · 5nm · 32 Mo L3 · PCIe 5.0",
        whyFr:
          "Plateforme AM5 garantie supportée jusqu'en 2027+. Fréquence d'horloge de 5.3 GHz assurant d'exploiter 100% de la RTX 4070 Super en 1440p sans goulot d'étranglement.",
        whyEn:
          "Socket AM5 supported through 2027+. 5.3GHz boost clock ensures 100% RTX 4070 Super utilization at 1440p with zero bottleneck.",
        checks: [
          { labelFr: "Support PCIe 5.0 & DDR5 natif", labelEn: "Native PCIe 5.0 & DDR5 support" },
          { labelFr: "Évolutif vers Ryzen 9000 & puces X3D", labelEn: "Drop-in path to 9000 & X3D chips" },
        ],
      },
      gpu: {
        categoryKey: "gpu",
        categoryLabelFr: "Carte Graphique (GPU)",
        categoryLabelEn: "Graphics Card (GPU)",
        name: "NVIDIA GeForce RTX 4070 Super 12 Go",
        price: 589,
        badge: "12 Go GDDR6X · Ada Lovelace",
        specs: "7168 Cœurs CUDA · DLSS 3.5 · 220W TDP",
        whyFr:
          "Le véritable 'sweet spot' du gaming PC : 20% plus puissante que la 4070 de base, DLSS 3.5 Frame Generation, Ray Tracing fluide et consommation remarquablement contenue (220W).",
        whyEn:
          "The undisputed PC gaming sweet spot: 20% faster than base 4070, DLSS 3.5 Frame Gen, smooth Ray Tracing, and thrifty 220W TDP.",
        checks: [
          { labelFr: "Câble 12V-2x6 dédié natif inclus", labelEn: "Native 12V-2x6 cable supported" },
          { labelFr: "Longueur 242 mm (flux d'air libre)", labelEn: "Compact 242mm length (free airflow)" },
        ],
      },
      motherboard: {
        categoryKey: "motherboard",
        categoryLabelFr: "Carte Mère",
        categoryLabelEn: "Motherboard",
        name: "Gigabyte B650 Eagle AX WiFi",
        price: 149,
        badge: "ATX · Wi-Fi 6E · PCIe 5.0",
        specs: "VRM 12+2+2 phases · 3x M.2 NVMe · Q-Flash Plus",
        whyFr:
          "VRM 12+2+2 phases, 3 slots M.2 NVMe (dont un PCIe 5.0) et Wi-Fi 6E. Une carte ultra-complète prête pour de futures puces X3D sans surcoût inutile.",
        whyEn:
          "12+2+2 power phases, 3 M.2 NVMe slots (including PCIe 5.0), and Wi-Fi 6E. Future-proof for X3D upgrades without marketing fluff.",
        checks: [
          { labelFr: "Dissipateurs thermiques M.2 inclus", labelEn: "M.2 thermal heatsinks included" },
          { labelFr: "Bouton Q-Flash Plus pour MàJ BIOS sans CPU", labelEn: "Q-Flash Plus CPU-less BIOS update" },
        ],
      },
      ram: {
        categoryKey: "ram",
        categoryLabelFr: "Mémoire RAM",
        categoryLabelEn: "Memory (RAM)",
        name: "32 Go (2x16 Go) DDR5-6000 CL30 Corsair",
        price: 115,
        badge: "DDR5-6000 · CL30 EXPO",
        specs: "Timing 30-36-36-76 · Puces SK Hynix · 1.35V",
        whyFr:
          "La spécification d'or pour Ryzen 7000 : 6000 MHz CL30 en ratio 1:1 avec l'Infinity Fabric pour la plus faible latence mémoire du marché.",
        whyEn:
          "The golden standard for Ryzen 7000: 6000MHz CL30 running 1:1 with Infinity Fabric for lowest memory latency.",
        checks: [
          { labelFr: "Profil AMD EXPO pré-validé", labelEn: "AMD EXPO profile pre-validated" },
          { labelFr: "Puces SK Hynix haute stabilité", labelEn: "SK Hynix high-stability ICs" },
        ],
      },
      storage: {
        categoryKey: "storage",
        categoryLabelFr: "Stockage SSD",
        categoryLabelEn: "Storage (NVMe SSD)",
        name: "Crucial T500 1 To NVMe PCIe 4.0 DRAM",
        price: 89,
        badge: "7300 Mo/s · Cache DRAM",
        specs: "Contrôleur Phison E25 · TLC 3D 232L · 600 TBW",
        whyFr:
          "Débits séquentiels maximaux de la norme PCIe 4.0 et cache DRAM physique pour un système d'exploitation hyper réactif et zéro micro-freeze.",
        whyEn:
          "Maxes out the PCIe 4.0 bus (7300 MB/s) with dedicated DRAM cache, preventing micro-hiccups during DirectStorage streaming.",
        checks: [
          { labelFr: "Endurance 600 TBW garantie 5 ans", labelEn: "600 TBW 5-year warranty" },
        ],
      },
      cooler: {
        categoryKey: "cooler",
        categoryLabelFr: "Refroidissement",
        categoryLabelEn: "Cooler",
        name: "Thermalright Peerless Assassin 120 SE",
        price: 36,
        badge: "Dual-Tower · 6 Caloducs",
        specs: "2x Ventilateurs 120 mm PWM · Hauteur 155 mm",
        whyFr:
          "Deux tours de dissipation et 6 caloducs. Offre des températures égales à un watercooling de 120€ pour seulement 36€, sans pompe susceptible de tomber en panne.",
        whyEn:
          "Dual heatsink towers and 6 heatpipes. Yields temperatures on par with 120€ liquid coolers at 36€, with zero pump failure risk.",
        checks: [
          { labelFr: "Hauteur 155 mm < Boîtier 170 mm", labelEn: "Height 155mm < Case 170mm" },
          { labelFr: "Dégagement RAM vérifié (ventilateur réglable)", labelEn: "RAM clearance verified" },
        ],
      },
      psu: {
        categoryKey: "psu",
        categoryLabelFr: "Alimentation (PSU)",
        categoryLabelEn: "Power Supply (PSU)",
        name: "Corsair RM750e 750W 80+ Gold ATX 3.0",
        price: 99,
        badge: "750W · 80+ Gold · ATX 3.0",
        specs: "100% Modulaire · Connecteur 12V-2x6 · Zéro-RPM",
        whyFr:
          "Câble 12V-2x6 dédié pour la RTX 4070 Super évitant tout adaptateur risqué. Mode zéro-RPM silencieux sous 300W.",
        whyEn:
          "Dedicated native 12V-2x6 cable for the RTX 4070 Super eliminating messy adapters. Zero-RPM fan mode under 300W.",
        checks: [
          { labelFr: "Norme ATX 3.0 / PCIe 5.0 certifiée", labelEn: "ATX 3.0 / PCIe 5.0 certified" },
          { labelFr: "Rendement 92% à 50% de charge", labelEn: "92% efficiency at 50% load" },
        ],
      },
      case: {
        categoryKey: "case",
        categoryLabelFr: "Boîtier PC",
        categoryLabelEn: "Chassis (Case)",
        name: "Fractal Design Pop Air RGB TG",
        price: 84,
        badge: "3x Fans Aspect 12 · Verre Trempé",
        specs: "Format ATX Moyen Tour · Tiroir de rangement",
        whyFr:
          "Qualité de fabrication scandinave, panneau en verre trempé, 3 ventilateurs silencieux et compartiment de rangement caché astucieux.",
        whyEn:
          "Clean Scandinavian build quality, tempered glass, 3 whisper-quiet fans, and a clever hidden storage drawer.",
        checks: [
          { labelFr: "Dégagement GPU 405 mm validé", labelEn: "GPU clearance 405mm validated" },
        ],
      },
    },
  },

  enthusiast: {
    id: "enthusiast",
    nameFr: "4K Enthusiast & E-Sport King",
    nameEn: "4K Enthusiast & E-Sports King",
    subtitleFr: "Le summum du CPU gaming mondial (7800X3D) et 16 Go de VRAM pour le 4K",
    subtitleEn: "World benchmark gaming CPU (7800X3D) paired with 16GB VRAM for 4K dominance",
    badgeFr: "Gaming Ultime (~2 050 €)",
    badgeEn: "Peak Gaming (~2,050 €)",
    targetBudget: 2050,
    recommendedRes: "4k",
    balanceScore: 99,
    estimatedWattage: 510,
    psuWattage: 850,
    fpsEstimates: [
      { game: "Cyberpunk 2077", res: "4K Ultra", fps: 84, settings: "Ultra (DLSS 3.5)" },
      { game: "Warzone", res: "4K Comp.", fps: 138, settings: "Compétitif Élevé" },
      { game: "Flight Simulator", res: "4K Ultra", fps: 86, settings: "Ultra" },
    ],
    parts: {
      cpu: {
        categoryKey: "cpu",
        categoryLabelFr: "Processeur (CPU)",
        categoryLabelEn: "Processor (CPU)",
        name: "AMD Ryzen 7 7800X3D",
        price: 429,
        badge: "8c / 16t · 96 Mo 3D Cache",
        specs: "Socket AM5 · 5.0 GHz Boost · Conso ~65W",
        whyFr:
          "Le processeur gaming de référence mondiale. Son énorme cache 3D de 96 Mo élimine les chutes de framerate et garantit les meilleurs 1% low FPS du marché.",
        whyEn:
          "The benchmark gaming CPU worldwide. Massive 96MB 3D V-Cache obliterates 1% framerate drops and delivers unbeatable esports responsiveness.",
        checks: [
          { labelFr: "Consommation gaming ultra faible (~65W)", labelEn: "Ultra-low ~65W gaming draw" },
          { labelFr: "Indétrônable sur les 1% Low FPS", labelEn: "Best 1% Low FPS stability" },
        ],
      },
      gpu: {
        categoryKey: "gpu",
        categoryLabelFr: "Carte Graphique (GPU)",
        categoryLabelEn: "Graphics Card (GPU)",
        name: "NVIDIA GeForce RTX 4070 Ti Super 16 Go",
        price: 859,
        badge: "16 Go GDDR6X · Bus 256-bit",
        specs: "Puce AD103 · 8448 Cœurs CUDA · 285W TDP",
        whyFr:
          "16 Go de VRAM sur bus 256 bits et puce AD103. Parfait pour le 4K sans compromis et les textures Ultra sans jamais saturer la mémoire vidéo.",
        whyEn:
          "16GB VRAM on full 256-bit bus using the AD103 die. Ample buffer for native 4K and heavy ray tracing without hitting VRAM bottlenecks.",
        checks: [
          { labelFr: "Bus mémoire 256-bit large bande", labelEn: "Wide 256-bit memory bus" },
          { labelFr: "Double encodeur NVENC AV1 streaming", labelEn: "Dual NVENC AV1 streaming encoders" },
        ],
      },
      motherboard: {
        categoryKey: "motherboard",
        categoryLabelFr: "Carte Mère",
        categoryLabelEn: "Motherboard",
        name: "ASUS TUF GAMING B650-PLUS WiFi",
        price: 189,
        badge: "TUF Mil-Spec · Wi-Fi 6",
        specs: "VRM 12+2 DrMOS 60A · PCIe 5.0 M.2 · Audio 7.1",
        whyFr:
          "Composants certifiés de classe militaire, étages d'alimentation 12+2 DrMOS 60A et radiateurs VRM massifs pour une stabilité absolue.",
        whyEn:
          "Military-grade certified components, 12+2 DrMOS 60A power stages, and massive heatsinks for 24/7 gaming stability.",
        checks: [
          { labelFr: "Slot PCIe SafeSlot métallique renforcé", labelEn: "Reinforced PCIe SafeSlot" },
          { labelFr: "Dissipation thermique VRM surdimensionnée", labelEn: "Oversized VRM thermal armor" },
        ],
      },
      ram: {
        categoryKey: "ram",
        categoryLabelFr: "Mémoire RAM",
        categoryLabelEn: "Memory (RAM)",
        name: "32 Go (2x16 Go) G.Skill Flare X5 DDR5-6000",
        price: 122,
        badge: "DDR5-6000 · CL30 EXPO",
        specs: "Timing 30-38-38-96 · Hauteur 33 mm · 1.35V",
        whyFr:
          "Spécialement optimisée pour les puces X3D avec profil EXPO calibré pour une compatibilité plug-and-play immédiate.",
        whyEn:
          "Tailored specifically for X3D silicon with pre-tuned sub-timings for instantaneous plug-and-play boot.",
        checks: [
          { labelFr: "Hauteur ultra-basse 33 mm", labelEn: "Ultra-low 33mm height" },
        ],
      },
      storage: {
        categoryKey: "storage",
        categoryLabelFr: "Stockage SSD",
        categoryLabelEn: "Storage (NVMe SSD)",
        name: "Kingston KC3000 2 To NVMe PCIe 4.0",
        price: 149,
        badge: "2 To · 7000 Mo/s · 1600 TBW",
        specs: "Phison E18 · TLC 3D 176L · Cache DDR4 2 Go",
        whyFr:
          "2 To avec mémoire TLC de haute endurance et contrôleur Phison E18 : capable d'installer plus de 15 jeux AAA volumineux sans ralentir.",
        whyEn:
          "2TB TLC flash endurance powered by the Phison E18 controller: store 15+ modern AAA games without performance degradation.",
        checks: [
          { labelFr: "Endurance 1600 TBW exceptionnelle", labelEn: "1600 TBW heavy endurance" },
        ],
      },
      cooler: {
        categoryKey: "cooler",
        categoryLabelFr: "Refroidissement",
        categoryLabelEn: "Cooler (AIO Liquid)",
        name: "Arctic Liquid Freezer III 360 A-RGB",
        price: 88,
        badge: "360 mm · Radiateur 38 mm",
        specs: "Ventilateur VRM intégré · 3x Arctic P12 PWM",
        whyFr:
          "Radiateur de 38 mm d'épaisseur (vs 27 mm standard) avec ventilateur dédié au refroidissement des VRM. Meilleur rapport température/décibels au monde.",
        whyEn:
          "Extra-thick 38mm radiator (vs 27mm standard) with dedicated VRM rotor fan. Class-leading acoustic-to-thermal ratio.",
        checks: [
          { labelFr: "Montage déporté spécifique AMD Ryzen", labelEn: "AMD Ryzen offset mounting bracket" },
          { labelFr: "Pression statique P12 PWM", labelEn: "High static pressure P12 fans" },
        ],
      },
      psu: {
        categoryKey: "psu",
        categoryLabelFr: "Alimentation (PSU)",
        categoryLabelEn: "Power Supply (PSU)",
        name: "be quiet! Pure Power 12 M 850W ATX 3.0",
        price: 124,
        badge: "850W · ATX 3.0 · Silent Wings",
        specs: "12V-2x6 600W · LLC + SR + DC/DC · Modulaire",
        whyFr:
          "Conception allemande, ventilateur Silent Wings quasi inaudible et câble 12V-2x6 natif 600W capable d'encaisser les pics transitoires.",
        whyEn:
          "German engineering, near-silent Silent Wings fan, and native 600W 12V-2x6 cable designed for extreme load spikes.",
        checks: [
          { labelFr: "Tolérance aux pics transitoires 200%", labelEn: "200% transient power excursion safe" },
        ],
      },
      case: {
        categoryKey: "case",
        categoryLabelFr: "Boîtier PC",
        categoryLabelEn: "Chassis (Case)",
        name: "Lian Li LANCOOL 216 RGB",
        price: 99,
        badge: "2x 160 mm + 1x 140 mm fans",
        specs: "Façade intégrale Mesh · Support Watercooling 360 mm",
        whyFr:
          "Flux d'air de référence avec 2 énormes ventilateurs avant de 160 mm pulsant un volume d'air frais massif directement sur la carte graphique.",
        whyEn:
          "Benchmark-topping thermal performance with dual 160mm front turbines pushing high-volume airflow straight into the GPU.",
        checks: [
          { labelFr: "Radiateur 360 mm en position supérieure", labelEn: "Top-mounted 360mm radiator fit" },
        ],
      },
    },
  },

  extreme: {
    id: "extreme",
    nameFr: "Titan Station 4K Path Tracing & IA",
    nameEn: "Titan Station 4K Path Tracing & AI",
    subtitleFr: "Le pinacle technologique : RTX 4090 24 Go, Zen 5 16 cœurs et stockage PCIe 5.0",
    subtitleEn: "The technological summit: RTX 4090 24GB, Zen 5 16 cores, and Gen5 NVMe storage",
    badgeFr: "Sans Compromis (~4 190 €)",
    badgeEn: "Uncompromised (~4,190 €)",
    targetBudget: 4190,
    recommendedRes: "4k",
    balanceScore: 100,
    estimatedWattage: 680,
    psuWattage: 1000,
    fpsEstimates: [
      { game: "Cyberpunk 2077", res: "4K Path Tracing", fps: 108, settings: "Path Tracing Ultra" },
      { game: "Alan Wake 2", res: "4K Full RT", fps: 94, settings: "Full Ray Tracing" },
      { game: "Rendu Blender BMW", res: "Cycles GPU", fps: 0, settings: "7.1 secondes" },
    ],
    parts: {
      cpu: {
        categoryKey: "cpu",
        categoryLabelFr: "Processeur (CPU)",
        categoryLabelEn: "Processor (CPU)",
        name: "AMD Ryzen 9 9950X",
        price: 629,
        badge: "16c / 32t · 5.7 GHz Zen 5",
        specs: "Socket AM5 · Gravure 4nm · 80 Mo Cache · AVX-512",
        whyFr:
          "16 cœurs et 32 threads d'architecture Zen 5 gravée en 4nm. La puissance brute absolue pour le rendu 3D, le montage 8K et le multitâche lourd sans aucun compromis en jeu.",
        whyEn:
          "16 cores and 32 threads on TSMC 4nm Zen 5. Titan-grade horsepower for 3D simulation, 8K video timelines, and uncompromised flagship gaming.",
        checks: [
          { labelFr: "Instructions AVX-512 pleine largeur", labelEn: "Full 512-bit AVX-512 pipeline" },
          { labelFr: "Boost monocœur 5.7 GHz", labelEn: "5.7GHz single-core boost" },
        ],
      },
      gpu: {
        categoryKey: "gpu",
        categoryLabelFr: "Carte Graphique (GPU)",
        categoryLabelEn: "Graphics Card (GPU)",
        name: "NVIDIA GeForce RTX 4090 24 Go",
        price: 1829,
        badge: "24 Go GDDR6X · 16 384 CUDA",
        specs: "Bus 384-bit · Bande passante 1 008 Go/s · 450W TDP",
        whyFr:
          "Le GPU grand public le plus puissant jamais conçu : 24 Go VRAM, 16 384 cœurs CUDA. Exécute le Path Tracing complet en 4K et les modèles d'IA lourds en local.",
        whyEn:
          "The pinnacle of consumer GPUs: 24GB VRAM, 16,384 CUDA cores. Powers full 4K Path Tracing and local LLM/diffusion AI pipelines.",
        checks: [
          { labelFr: "Connecteur 12V-2x6 haute intensité natif", labelEn: "Native high-current 12V-2x6 cable" },
          { labelFr: "Supporte les charges LLM 24 Go en local", labelEn: "Local 24GB LLM weights ready" },
        ],
      },
      motherboard: {
        categoryKey: "motherboard",
        categoryLabelFr: "Carte Mère",
        categoryLabelEn: "Motherboard",
        name: "ASUS ROG STRIX X670E-E Gaming WiFi",
        price: 439,
        badge: "X670E · Double PCIe 5.0",
        specs: "18+2 Phases 110A · 3x M.2 PCIe 5.0 · Q-Release",
        whyFr:
          "Étages d'alimentation 18+2 phases 110A, double slot PCIe 5.0 pour GPU et NVMe, bouton de dégagement rapide de carte graphique PCIe Q-Release.",
        whyEn:
          "Flagship 18+2 110A power stages, dual PCIe 5.0 slots for GPU and NVMe, and PCIe Q-Release latch for instant GPU swapping.",
        checks: [
          { labelFr: "Affichage Q-Code LED pour diagnostic", labelEn: "Q-Code diagnostic LED readout" },
          { labelFr: "PCIe Slot Q-Release pour GPU lourd", labelEn: "PCIe Slot Q-Release latch" },
        ],
      },
      ram: {
        categoryKey: "ram",
        categoryLabelFr: "Mémoire RAM",
        categoryLabelEn: "Memory (RAM)",
        name: "64 Go (2x32 Go) Dominator Titanium DDR5-6000",
        price: 249,
        badge: "64 Go · DDR5-6000 · CL30",
        specs: "Aluminium forgé · Puces triées A-Die · 1.40V",
        whyFr:
          "64 Go en double canal avec puces triées à la main et dissipateurs en aluminium forgé. Aucune saturation même sur des scènes After Effects colossales.",
        whyEn:
          "64GB dual-channel configuration with hand-binned SK Hynix dies and forged aluminum heatsinks. Eliminates memory exhaustion in giant workloads.",
        checks: [
          { labelFr: "Double canal 2x 32 Go sans dégradation", labelEn: "2x 32GB 1:1 dual channel" },
        ],
      },
      storage: {
        categoryKey: "storage",
        categoryLabelFr: "Stockage SSD",
        categoryLabelEn: "Storage (NVMe SSD)",
        name: "Crucial T700 2 To PCIe 5.0 (12 400 Mo/s)",
        price: 449,
        badge: "2 To PCIe 5.0 + 4 To Secondaire",
        specs: "Débits jusqu'à 12 400 Mo/s · Contrôleur Phison E26",
        whyFr:
          "Disque système PCIe 5.0 à 12 400 Mo/s pour la réactivité ultime, couplé à 4 To additionnels pour le stockage massif de données et projets.",
        whyEn:
          "12,400 MB/s PCIe 5.0 system drive for near-zero latency, paired with 4TB secondary NVMe for bulk footage and game libraries.",
        checks: [
          { labelFr: "Dissipateur thermique dédié", labelEn: "Heavy-duty thermal heatsink" },
        ],
      },
      cooler: {
        categoryKey: "cooler",
        categoryLabelFr: "Refroidissement",
        categoryLabelEn: "Cooler (AIO Liquid)",
        name: "Lian Li Galahad II Trinity 360 LCD",
        price: 219,
        badge: "Écran IPS 2.88\" · 360 mm",
        specs: "Pompe haute pression · 480x480 60Hz Display",
        whyFr:
          "Watercooling 360 mm haute pression avec écran LCD 2.88\" pour surveiller en direct les températures du CPU et GPU à 60 FPS.",
        whyEn:
          "360mm high-pressure AIO featuring a 2.88\" IPS display showcasing real-time CPU/GPU thermals at fluid 60 FPS.",
        checks: [
          { labelFr: "Télémétrie thermique affichée en direct", labelEn: "Live thermal telemetry display" },
        ],
      },
      psu: {
        categoryKey: "psu",
        categoryLabelFr: "Alimentation (PSU)",
        categoryLabelEn: "Power Supply (PSU)",
        name: "Seasonic Vertex GX-1000 1000W ATX 3.0",
        price: 199,
        badge: "1000W · ATX 3.0 · Garantie 10 ans",
        specs: "100% Japonais · Ventilateur FDB 135 mm · 12V-2x6",
        whyFr:
          "Fiabilité Seasonic légendaire garantie 10 ans. Condensateurs 100% japonais 105°C et support natif des pics de 2000W de l'ATX 3.0.",
        whyEn:
          "Legendary Seasonic 10-year warranty, 100% Japanese 105°C capacitors, and native 2000W excursion tolerance for ATX 3.0.",
        checks: [
          { labelFr: "Garantie constructeur 10 ans", labelEn: "10-year manufacturer warranty" },
        ],
      },
      case: {
        categoryKey: "case",
        categoryLabelFr: "Boîtier PC",
        categoryLabelEn: "Chassis (Case)",
        name: "Lian Li O11 Dynamic EVO RGB",
        price: 179,
        badge: "Chambre Double · Vue Panoramique",
        specs: "Verre trempé frontal & latéral · Bande ARGB intégrée",
        whyFr:
          "Boîtier vitré d'exposition à double compartiment : isole thermiquement l'alimentation et met en valeur les composants comme une galerie.",
        whyEn:
          "Museum-grade dual-chamber glass showcase isolating power supply heat while providing 360-degree component visibility.",
        checks: [
          { labelFr: "Tolérance GPU 455 mm", labelEn: "GPU clearance 455mm" },
        ],
      },
    },
  },
};

const ECOSYSTEM_PILLARS = [
  {
    id: "builder",
    icon: Sliders,
    titleFr: "Intelligent PC Builder & Moteur de Choix",
    titleEn: "Intelligent PC Builder & Recommendation Engine",
    descFr:
      "Renseignez budget, résolution, jeux cibles et préférences : l'algorithme assemble le build optimal et explicite pourquoi chaque composant a été choisi.",
    descEn:
      "Input budget, target resolution, game library, and goals: the engine recommends the ideal build while explaining the exact rationale for each component.",
    tagFr: "Fonction Cœur",
    tagEn: "Core Feature",
    accent: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
  },
  {
    id: "databases",
    icon: Layers,
    titleFr: "Bases de Données Exhaustives CPU & GPU",
    titleEn: "Comprehensive CPU & GPU Databases",
    descFr:
      "Fiches techniques ultra-complètes : architectures, finesses de gravure, cœurs, IPC, caches, lignes PCIe, consommations et TDP réels.",
    descEn:
      "Exhaustive technical spec sheets: micro-architectures, lithography nodes, core counts, IPC, caches, PCIe lanes, and real power draw curves.",
    tagFr: "Répertoire Technique",
    tagEn: "Specs Library",
    accent: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
  },
  {
    id: "comparator",
    icon: Scale,
    titleFr: "Outils de Comparaison Neutres & Directs",
    titleEn: "Unbiased Multi-Metric Comparison Tools",
    descFr:
      "Face-à-face objectif sans biais sponsorisé : ratios réels calculés en FPS/€, FPS/Watt, bande passante et indice de pérennité.",
    descEn:
      "Direct side-by-side comparison free of vendor bias: evaluate components on genuine ratios (FPS per $, FPS per Watt, memory bandwidth).",
    tagFr: "Zéro Bullshit",
    tagEn: "Zero Bias",
    accent: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "budget_builds",
    icon: Monitor,
    titleFr: "Paniers PC Gaming par Budget Réel",
    titleEn: "Gaming PC Builds by Budget",
    descFr:
      "Configurations optimisées au centime près de 600€ à 3 500€+, actualisées en continu selon les fluctuations de stocks chez les cybermarchands.",
    descEn:
      "Continuously maintained builds from 600€ to 3,500€+, tuned to the cent based on real-time street prices and inventory.",
    tagFr: "Actualisé en direct",
    tagEn: "Live Updated",
    accent: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
  },
  {
    id: "best_guides",
    icon: Compass,
    titleFr: "Guides d'Achat « Meilleur composant pour… »",
    titleEn: "“Best Component For…” Curated Guides",
    descFr:
      "Dossiers ciblés : meilleur CPU gaming sous 200€, cartes graphiques ultra-silencieuses, configs compactes Mini-ITX et stations de rendu.",
    descEn:
      "Expert-curated guides: 'Best Gaming CPU under 200€', 'Whisper-quiet GPUs', 'Ultra-compact Mini-ITX builds', and workstation setups.",
    tagFr: "Guides Thématiques",
    tagEn: "Expert Guides",
    accent: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
  },
  {
    id: "benchmarks",
    icon: BarChart3,
    titleFr: "Données de Benchmarks & Métriques In-Game",
    titleEn: "Benchmark & Real-World Performance Data",
    descFr:
      "Moyennes de framerates mesurées in-game en 1080p, 1440p et 4K sur 25+ titres majeurs, avec analyse des 1% low et de la régularité d'affichage.",
    descEn:
      "Empirical in-game FPS averages across 1080p, 1440p, and 4K in 25+ major titles, with 1% lows and frame-time consistency analysis.",
    tagFr: "Métriques In-Game",
    tagEn: "Empirical Data",
    accent: "from-cyan-500/20 to-emerald-500/20 text-cyan-400 border-cyan-500/30",
  },
  {
    id: "upgrades",
    icon: TrendingUp,
    titleFr: "Diagnostic & Recommandations d'Upgrade",
    titleEn: "Intelligent PC Upgrade Diagnostic",
    descFr:
      "Renseignez votre PC actuel : l'outil détecte le goulot d'étranglement principal et recommande le composant à changer en priorité pour rentabiliser l'investissement.",
    descEn:
      "Enter your current setup: SpecOrbit pinpoints the primary bottleneck and recommends the exact component upgrade offering the highest ROI.",
    tagFr: "Anti-Gaspillage",
    tagEn: "Targeted ROI",
    accent: "from-emerald-500/20 to-lime-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "compatibility",
    icon: ShieldCheck,
    titleFr: "Vérificateur de Compatibilités Physiques",
    titleEn: "Physical Clearance & Electrical Verification",
    descFr:
      "Vérification algorithmique : longueur GPU vs boîtier, hauteur ventirad vs RAM, câble 12V-2x6 et courbe de charge d'alimentation.",
    descEn:
      "Algorithmic verification: GPU length vs chassis, cooler height vs RAM profile, 12V-2x6 connector support, and PSU efficiency curve.",
    tagFr: "Sécurité Montage",
    tagEn: "Clash Detection",
    accent: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
  },
  {
    id: "price_tracking",
    icon: TrendingDown,
    titleFr: "Suivi des Cours & Détection de Vrais Deals",
    titleEn: "Live Price Tracking & Fake Deal Detector",
    descFr:
      "Historique transparent des cours chez les revendeurs européens : détection algorithmique des faux prix barrés et alertes de vraies baisses.",
    descEn:
      "Transparent price history across European retailers: algorithmic detection of fake strike-through discounts and genuine drop alerts.",
    tagFr: "Anti-Faux Rabais",
    tagEn: "True Price Graph",
    accent: "from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30",
  },
  {
    id: "affiliate",
    icon: ShoppingCart,
    titleFr: "Liens d'Affiliation Partenaires Transparents",
    titleEn: "Transparent Retailer Affiliate Links",
    descFr:
      "Redirection vers les boutiques de référence (Amazon, LDLC, TopAchat, etc.) avec transparence totale sur le modèle sans surcoût pour le visiteur.",
    descEn:
      "Direct links to trusted retailers (Amazon, TopAchat, etc.) with transparent disclosure, funding platform development without markups.",
    tagFr: "Monétisation Éthique",
    tagEn: "Ethical Model",
    accent: "from-slate-500/20 to-zinc-500/20 text-slate-300 border-slate-500/30",
  },
  {
    id: "news",
    icon: Newspaper,
    titleFr: "Actualités Hardware & Veille Technologique",
    titleEn: "Hardware News & Silicon Releases",
    descFr:
      "Analyses des lancements AMD, Intel, NVIDIA, décryptage des feuilles de route technologiques et répercussions sur les prix du marché.",
    descEn:
      "Deep dives into AMD, Intel, and NVIDIA silicon launches, roadmap assessments, and market pricing forecasts.",
    tagFr: "Veille Marché",
    tagEn: "Tech Pulse",
    accent: "from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/30",
  },
  {
    id: "community",
    icon: Users,
    titleFr: "Comptes Utilisateurs, Builds & Communauté",
    titleEn: "User Accounts, Saved Builds & Community",
    descFr:
      "Sauvegardez vos configurations, partagez vos builds avec la communauté, votez pour les meilleurs montages et échangez sur le forum d'entraide.",
    descEn:
      "Save custom configurations, share builds with the community, upvote top configs, and discuss hardware on interactive forums.",
    tagFr: "Espace Communauté",
    tagEn: "Community Hub",
    accent: "from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30",
  },
];

interface SpecOrbitSectionProps {
  isEn: boolean;
}

export default function SpecOrbitSection({ isEn }: SpecOrbitSectionProps) {
  const [activePresetKey, setActivePresetKey] = useState<OrbitPresetKey>("sweetspot");
  const [activeCategory, setActiveCategory] = useState<string>("gpu");

  const currentBuild = ORBIT_BUILDS[activePresetKey];
  const activePart = currentBuild.parts[activeCategory] || currentBuild.parts.gpu;

  // Calcul du total réel
  const totalCost = Object.values(currentBuild.parts).reduce((acc, part) => acc + part.price, 0);

  return (
    <div className="relative group rounded-3xl bg-gradient-to-br from-[#06b6d4]/15 via-white/[0.02] to-[#6366f1]/15 border border-[#06b6d4]/40 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl animate-in fade-in duration-300">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#06b6d4]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#6366f1]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* HEADER SECTION: Identity & Positioning Line */}
      <div className="space-y-6 pb-8 border-b border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/40 shadow-sm shadow-[#06b6d4]/20">
              <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
              {isEn ? "UPCOMING PROJECT · ACTIVE R&D" : "FUTUR PROJET · EN CONCEPTION ACTIVE"}
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#22d3ee]" />
              PC Hardware Discovery &amp; Buying Platform
            </span>
          </div>
          <span className="text-xs font-mono text-[#22d3ee] bg-black/40 px-3 py-1 rounded-full border border-white/10">
            {isEn ? "Architecture & Data Pipeline Modeling" : "Modélisation de l'Architecture & Scraping"}
          </span>
        </div>

        <div className="max-w-4xl space-y-4">
          <div className="inline-block">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex flex-wrap items-center gap-3">
              <span>SpecOrbit</span>
              <span className="text-lg sm:text-2xl font-normal text-[#94a3b8]">/</span>
              <span className="text-base sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#38bdf8] to-[#818cf8]">
                {isEn ? "Your guide to smarter PC hardware choices." : "Le guide pour des choix hardware PC plus intelligents."}
              </span>
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
            {isEn
              ? "SpecOrbit is an upcoming PC hardware discovery and buying platform designed to help people choose the right components, build better PCs, and find the best value for their budget. It unifies PC build recommendations, component comparisons, empirical benchmarks, buying guides, physical compatibility checking, price tracking, deals, and specifications into one seamless, unbiased destination."
              : "SpecOrbit est une future plateforme de découverte et d'achat de hardware PC, pensée pour aider chacun à choisir les bons composants, monter des machines équilibrées et trouver la meilleure valeur pour son budget. Le site combine recommandations de builds, comparateur neutre de composants, benchmarks réels, guides d'achat, vérification de compatibilité physique, suivi des cours et alertes de vrais deals au même endroit."}
          </p>

          {/* Positioning statement banner */}
          <div className="p-4 rounded-2xl bg-black/40 border border-[#06b6d4]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#06b6d4]/15 border border-[#06b6d4]/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#22d3ee]" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="text-white font-bold">{isEn ? "Core Mission: " : "Mission Principale : "}</span>
                <span className="text-[#94a3b8]">
                  {isEn
                    ? "Help people make smarter PC hardware buying decisions with zero vendor bias."
                    : "Aider chacun à prendre des décisions d'achat hardware plus intelligentes, sans faux bons plans ni parti pris."}
                </span>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22d3ee] hover:underline shrink-0"
            >
              <span>{isEn ? "Discuss the concept →" : "Échanger sur le projet →"}</span>
            </a>
          </div>
        </div>
      </div>

      {/* CORE FEATURE SPOTLIGHT: THE INTELLIGENT PC BUILDER (INTERACTIVE PREVIEW) */}
      <div className="mt-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#22d3ee] uppercase tracking-wider mb-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#22d3ee]" />
              <span>{isEn ? "FEATURE IN FOCUS — INTELLIGENT PC BUILDER" : "FONCTIONNALITÉ PHARE — BUILDER PC INTELLIGENT"}</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isEn ? "Interactive Build Engine & Justified Selection" : "Moteur de Recommandation & Choix Justifiés"}
            </h4>
            <p className="text-xs sm:text-sm text-[#94a3b8] mt-1 max-w-2xl">
              {isEn
                ? "SpecOrbit doesn't just list parts: it analyzes your budget, target resolution, and goals, and explains why each component was hand-selected over alternatives."
                : "SpecOrbit ne se contente pas d'aligner des pièces : il analyse votre budget, votre résolution et vos objectifs, et vous explique pourquoi chaque composant a été retenu."}
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-black/50 border border-white/10">
            {(["budget", "sweetspot", "enthusiast", "extreme"] as OrbitPresetKey[]).map((key) => {
              const preset = ORBIT_BUILDS[key];
              const isSelected = activePresetKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActivePresetKey(key);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-gradient-to-r from-[#06b6d4] to-[#6366f1] text-white shadow-md shadow-[#06b6d4]/25 font-extrabold scale-[1.02]"
                      : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{isEn ? preset.nameEn.split(" ")[0] : preset.nameFr.split(" ")[0]}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${isSelected ? "bg-black/30 text-white" : "bg-white/10 text-[#cbd5e1]"}`}>
                    ~{preset.targetBudget}€
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Simulator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Build Components List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {/* Active Preset Header */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-white">{isEn ? currentBuild.nameEn : currentBuild.nameFr}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/30">
                    {isEn ? currentBuild.badgeEn : currentBuild.badgeFr}
                  </span>
                </div>
                <div className="text-xs text-[#94a3b8] mt-0.5">{isEn ? currentBuild.subtitleEn : currentBuild.subtitleFr}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-mono font-black text-[#22d3ee]">{totalCost} €</div>
                <div className="text-[10px] text-[#94a3b8]">{isEn ? "Total street price" : "Coût estimé des pièces"}</div>
              </div>
            </div>

            {/* List of 8 Parts with Click to Inspect */}
            <div className="space-y-2">
              {Object.entries(currentBuild.parts).map(([key, part]) => {
                const isSelected = activeCategory === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveCategory(key)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                      isSelected
                        ? "bg-[#06b6d4]/15 border-[#06b6d4] ring-1 ring-[#06b6d4]/40 shadow-lg shadow-[#06b6d4]/10"
                        : "bg-black/40 border-white/10 hover:bg-white/[0.04] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? "bg-[#06b6d4] text-black font-bold" : "bg-white/5 text-[#94a3b8] group-hover:text-white"
                        }`}
                      >
                        {key === "cpu" && <Cpu className="w-4 h-4" />}
                        {key === "gpu" && <Monitor className="w-4 h-4" />}
                        {key === "motherboard" && <Layers className="w-4 h-4" />}
                        {key === "ram" && <Boxes className="w-4 h-4" />}
                        {key === "storage" && <HardDrive className="w-4 h-4" />}
                        {key === "cooler" && <Flame className="w-4 h-4" />}
                        {key === "psu" && <Zap className="w-4 h-4" />}
                        {key === "case" && <Boxes className="w-4 h-4" />}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#94a3b8] uppercase">
                            {isEn ? part.categoryLabelEn : part.categoryLabelFr}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-[#cbd5e1] font-mono">
                            {part.badge}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white truncate">{part.name}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono font-bold text-[#22d3ee]">{part.price} €</span>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-all ${
                          isSelected ? "bg-[#22d3ee] text-black font-bold" : "text-[#94a3b8] opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        →
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Rationale Spotlight & Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* The "Why This Component Was Selected" Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-black/80 via-black/60 to-[#06b6d4]/10 border border-[#06b6d4]/40 space-y-4 shadow-xl">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#06b6d4]/20 border border-[#06b6d4]/30 flex items-center justify-center">
                    <Info className="w-3.5 h-3.5 text-[#22d3ee]" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {isEn ? "Why SpecOrbit Selected This" : "Pourquoi SpecOrbit a Choisi Ce Composant"}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#22d3ee]">{activePart.price} €</span>
              </div>

              <div>
                <div className="text-xs font-mono text-[#22d3ee] mb-1">
                  {isEn ? activePart.categoryLabelEn : activePart.categoryLabelFr}
                </div>
                <h5 className="text-base sm:text-lg font-black text-white">{activePart.name}</h5>
                <div className="text-[11px] font-mono text-[#94a3b8] mt-1">{activePart.specs}</div>
              </div>

              {/* Rationale Text */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="text-[11px] font-bold text-[#38bdf8] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                  <span>{isEn ? "SpecOrbit Architectural Rationale:" : "Justification Architecturale & Marché :"}</span>
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {isEn ? activePart.whyEn : activePart.whyFr}
                </p>
              </div>

              {/* Verified Hardware Checks */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#34d399]" />
                  <span>{isEn ? "Physical & Electrical Clearance Checks:" : "Vérifications de Compatibilité Validées :"}</span>
                </div>
                <div className="space-y-1.5">
                  {activePart.checks.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#34d399]">
                      <Check className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-[#cbd5e1] text-[11px]">{isEn ? c.labelEn : c.labelFr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance & Balance Telemetry */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Gauge className="w-4 h-4 text-[#a855f7]" />
                  <span>{isEn ? "Build Health & Metrics" : "Équilibre & Télémétrie"}</span>
                </div>
                <span className="text-[10px] font-mono text-[#34d399] bg-[#10b981]/15 px-2 py-0.5 rounded border border-[#10b981]/30">
                  {isEn ? "Balance Score: 100%" : "Score d'Équilibre : 100%"}
                </span>
              </div>

              {/* Wattage & PSU Efficiency curve */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#94a3b8]">{isEn ? "Estimated System Power Draw" : "Consommation Système Estimée"}</span>
                  <span className="font-mono text-white font-bold">
                    {currentBuild.estimatedWattage}W / {currentBuild.psuWattage}W (
                    {Math.round((currentBuild.estimatedWattage / currentBuild.psuWattage) * 100)}% load)
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#6366f1] rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.round((currentBuild.estimatedWattage / currentBuild.psuWattage) * 100)}%`,
                    }}
                  />
                </div>
                <div className="text-[10px] text-[#94a3b8] flex items-center justify-between">
                  <span>{isEn ? "Ideal 50-60% Gold efficiency window" : "Plage de rendement 80+ Gold optimale (50-60%)"}</span>
                  <span className="text-[#34d399] font-semibold">{isEn ? "Optimal Headroom" : "Marge Optimale"}</span>
                </div>
              </div>

              {/* Estimated FPS Preview */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[11px] font-bold text-white flex items-center justify-between">
                  <span>{isEn ? "Estimated In-Game Framerates" : "Performances In-Game Estimées"}</span>
                  <span className="text-[10px] text-[#22d3ee] font-mono">{currentBuild.recommendedRes.toUpperCase()}</span>
                </div>
                <div className="space-y-2">
                  {currentBuild.fpsEstimates.map((gameItem, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white font-medium">{gameItem.game}</span>
                        <span className="font-mono font-bold text-[#22d3ee]">
                          {gameItem.fps > 0 ? `${gameItem.fps} FPS` : gameItem.settings}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#94a3b8]">
                        <span>{gameItem.res}</span>
                        <span>{gameItem.settings}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE 12 PILLARS OF SPECORBIT ECOSYSTEM */}
      <div className="mt-14 pt-10 border-t border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#818cf8] uppercase tracking-wider mb-1.5">
              <Boxes className="w-3.5 h-3.5 text-[#818cf8]" />
              <span>{isEn ? "ECOSYSTEM ROADMAP — 12 CORE PILLARS" : "FEUILLE DE ROUTE — LES 12 PILIERS DE L'ÉCOSYSTÈME"}</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isEn ? "The Complete PC Hardware Platform" : "L'Écosystème Hardware Tout-En-Un"}
            </h4>
          </div>
          <span className="text-xs text-[#94a3b8] max-w-sm sm:text-right">
            {isEn
              ? "Designed to replace scattered forums, ad-bloated scrapers, and misleading promotional trackers."
              : "Conçu pour remplacer les comparateurs publicitaires, les faux classements et les forums dispersés."}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ECOSYSTEM_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.02] space-y-3 group"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <IconComponent className="w-4 h-4 text-[#22d3ee]" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border bg-gradient-to-r ${pillar.accent}`}>
                    {isEn ? pillar.tagEn : pillar.tagFr}
                  </span>
                </div>

                <div>
                  <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-[#22d3ee] transition-colors">
                    {isEn ? pillar.titleEn : pillar.titleFr}
                  </h5>
                  <p className="text-xs text-[#94a3b8] leading-relaxed mt-1.5">
                    {isEn ? pillar.descEn : pillar.descFr}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* WHY FLORIAN'S SKILLS ARE THE FOUNDATION (THE STYGMAR DNA) */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-black/80 via-black/60 to-[#06b6d4]/10 border border-[#06b6d4]/30 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex items-center justify-center shrink-0">
            <Workflow className="w-4 h-4 text-[#22d3ee]" />
          </div>
          <div>
            <h5 className="text-base sm:text-lg font-bold text-white">
              {isEn ? "The Engineering Advantage: Born from 9+ Years of Automation" : "L'Avantage Technique : Issu de 9+ Ans d'Automatisation"}
            </h5>
            <div className="text-xs text-[#94a3b8]">
              {isEn
                ? "Why SpecOrbit is the logical evolution of Stygmar's software background."
                : "Pourquoi SpecOrbit découle naturellement du savoir-faire en scraping et modélisation de données."}
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
          {isEn
            ? "Unlike generic affiliate blogs driven by SEO spam and fake promotions, SpecOrbit is built on automated multi-retailer web scrapers, mathematical pricing history analysis, and deterministic clearance graph algorithms. Every recommendation is calculated, verified, and backed by verifiable component specifications."
            : "Contrairement aux sites affiliés génériques pollués par le spam SEO et de faux rabais, SpecOrbit repose sur des robots de scraping multi-marchands, une analyse mathématique de l'historique des cours et des algorithmes d'encombrement déterministes. Chaque recommandation est calculée, vérifiée et étayée par des données techniques tangibles."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <div className="text-xs font-bold text-[#22d3ee] flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" />
              <span>{isEn ? "High-Frequency Scraping" : "Scraping Haute Fréquence"}</span>
            </div>
            <p className="text-[11px] text-[#94a3b8]">
              {isEn ? "Automated tracking across Amazon, LDLC, TopAchat, Mindfactory." : "Veille automatisée des stocks et cours réels européens."}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <div className="text-xs font-bold text-[#34d399] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isEn ? "Mathematical Neutrality" : "Neutralité Mathématique"}</span>
            </div>
            <p className="text-[11px] text-[#94a3b8]">
              {isEn ? "True FPS / $ / Watt rankings with zero paid placement." : "Ratios FPS / € / Watt objectifs sans sponsoring déguisé."}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <div className="text-xs font-bold text-[#a855f7] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isEn ? "Clearance Collision Engine" : "Moteur d'Encombrement"}</span>
            </div>
            <p className="text-[11px] text-[#94a3b8]">
              {isEn ? "Verification of GPU millimeter clearance and PSU transients." : "Vérification au millimètre des dégagements physiques."}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#94a3b8]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
            {isEn ? "Status: Component data models & PC builder engine under active development" : "Statut : Modélisation des composants et moteur de configuration en cours"}
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#06b6d4]/15 hover:bg-[#06b6d4]/25 border border-[#06b6d4]/40 text-xs font-bold text-[#22d3ee] transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>{isEn ? "Have an idea or want to contribute? Let's discuss →" : "Une idée ou envie d'échanger sur le projet ? Contactez-moi →"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
