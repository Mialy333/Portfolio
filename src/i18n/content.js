import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

/**
 * Données projet non traduisibles (images, liens, stack technique).
 * Le texte (titre, description) vit dans CONTENT[lang].projects.items[id].
 */
export const PROJECTS_META = [
  {
    id: "safehaven",
    image: project1,
    stack: [
      "React Native (Expo)",
      "TypeScript",
      "Claude",
      "ElevenLabs",
      "Virtuals Protocol",
      "Solana",
      "i18next",
    ],
    githubLink: "https://github.com/Mialy333/SafeHaven",
    liveLink: "https://safe-haven-z92f.vercel.app/",
    videoDemo: "",
  },
  {
    id: "defipulsex",
    image: project2,
    stack: [
      "React 18",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Ethers.js",
      "XRPL.js",
      "Lightweight Charts",
    ],
    githubLink: "https://github.com/Mialy333/DeFi-PulseX",
    liveLink: "https://defipulsex-three.vercel.app",
    videoDemo: "",
  },
  {
    id: "uvote",
    image: project3,
    stack: ["Python 3", "Django", "SQLite", "Django Test Framework"],
    githubLink: "https://github.com/Mialy333/uVote",
    liveLink: "",
    videoDemo: "",
  },
];

export const CONTENT = {
  fr: {
    langLabel: "FR",
    nav: {
      portfolio: "Portfolio",
    },
    hero: {
      name: "Mialy Ratsimbazafy",
      tagline: "Agent Engineer × Digital Assets — Frontend React / TypeScript (she/her)",
      body: "Après dix ans en gestion d'actifs entre la France, le Luxembourg et le Japon, j'ai rejoint le développement pour construire les produits que j'aurais voulu utiliser. Je conçois des interfaces Web3 et DeFi en React et TypeScript, avec un intérêt marqué pour les agents autonomes et les actifs numériques.",
    },
    about: {
      heading: {
        before: "De la gestion d'actifs au ",
        highlight: "développement Web3",
        after: "",
      },
      paragraphs: [
        "En 2023, un licenciement économique met fin à dix ans en gestion d'actifs entre la France, le Luxembourg et le Japon (Candriam, Northern Trust, Crédit Agricole CIB, Selexium). J'en fais un point de bascule plutôt qu'un accident de parcours.",
        "Je me forme au développement web fullstack à Ada Tech School, puis en autonomie via la documentation, l'open source et mes propres projets — aujourd'hui le cursus Full Stack Open de l'université d'Helsinki. Le frontend s'impose vite comme mon terrain : donner une forme claire et utilisable à des systèmes complexes.",
        "Mon parcours en gestion d'actifs n'est pas derrière moi, il est devenu un outil de travail. Je comprends les produits financiers, le risque et la liquidité, et je sais les traduire en interfaces qu'un non-spécialiste peut utiliser. C'est ce qui m'amène vers la DeFi, les actifs numériques et les agents autonomes.",
        "Je travaille en React, TypeScript et Tailwind, avec Framer Motion pour l'animation. Les projets ci-dessous sont livrés et publics : ils montrent comment je conçois une interface, structure l'état applicatif et intègre des données on-chain.",
        "En dehors du code, je suis pianiste et je compose, je lis beaucoup de fiction, et je passe du temps en pâtisserie.",
      ],
    },
    technologies: {
      heading: "Technologies",
    },
    environment: {
      heading: "Environnement",
      container: "Conteneur",
    },
    experience: {
      heading: "Expériences",
      items: [
        {
          year: "Févr. 2025 – présent",
          role: "Fondatrice — projets personnels",
          company: "SafeHaven Money / B-Wiize",
          description:
            "Conception et développement d'un agent financier vocal et multilingue (React Native, TypeScript) qui rend l'éducation financière et le rendement DeFi accessibles à des publics peu servis par la banque : raisonnement via Claude, synthèse vocale ElevenLabs, stratégies conservatrices en USDC sur Solana, conception non-custodiale. Sélectionnée à l'Aquarium Residency de XRPL Commons (5e cohorte, « Gaming & Gamified Experiences ») : produit gamifié présenté devant un jury lors d'un Demo Day. Montée en compétences documentée en public, de Next.js / TypeScript vers Solidity / Foundry.",
          technologies: ["React Native", "TypeScript", "Claude", "Solana", "Solidity", "Foundry"],
        },
        {
          year: "Janv. – Oct. 2024",
          role: "Développeuse Fullstack — formation intensive",
          company: "Ada Tech School",
          description:
            "Développement d'applications web en JavaScript, HTML/CSS et Python (Django), sur des projets individuels et collectifs. Pratique du versioning Git/GitHub et du travail en équipe technique.",
          technologies: ["JavaScript", "HTML/CSS", "Django", "Git"],
        },
        {
          year: "2012 – 2023",
          role: "Gestion d'actifs & conseil financier",
          company: "Candriam · Northern Trust · Crédit Agricole CIB · Selexium",
          description:
            "Dix ans en gestion d'actifs entre la France, le Luxembourg et le Japon : gestion de portefeuille multi-actifs, relation avec une clientèle institutionnelle, coordination de projet et conseil en gestion de patrimoine. C'est de là que vient ma compréhension des produits financiers, du risque et des enjeux métier bancaires.",
          technologies: ["Gestion de portefeuille", "Clientèle institutionnelle", "Gestion de patrimoine", "Analyse"],
        },
      ],
    },
    projects: {
      heading: "Réalisations",
      githubLabel: "Code source",
      liveLabel: "Voir en ligne",
      videoLabel: "Démo vidéo",
      videoSoon: "Démo vidéo à venir",
      items: {
        safehaven: {
          title: "SafeHaven Money",
          description:
            "Agent financier vocal et multilingue (React Native / TypeScript) qui rend l'éducation financière et le rendement DeFi accessibles à des publics peu servis par la banque. Raisonnement via Claude, synthèse vocale ElevenLabs, stratégies conservatrices en USDC sur Solana, conception non-custodiale. Mon rôle : interface mobile, parcours d'onboarding gamifié (Novice → Épargnant → Investisseur) et intégration de l'agent.",
        },
        defipulsex: {
          title: "DeFi-PulseX",
          description:
            "Terminal de trading DeFi cross-chain (React / TypeScript / Zustand) connecté à Ethereum et au XRP Ledger. Données de marché en temps réel, graphiques TradingView, détection d'arbitrage et agrégation de liquidité via 1inch, dans une interface de type terminal. Une couche de gamification (XP, niveaux, classement) accompagne la prise en main de la DeFi.",
        },
        uvote: {
          title: "uVote",
          description:
            "Application de vote en ligne (Python / Django) couverte par des tests automatisés. Gestion des sondages, back-office d'administration et tests CSRF. Un projet volontairement resserré, pour montrer mes fondamentaux Python et ma rigueur côté tests.",
        },
      },
    },
    contact: {
      heading: "Me contacter",
      body: "Ouverte aux opportunités frontend (CDI) comme aux missions Web3 / Agent Engineer.",
      emailLabel: "Écrire un e-mail",
      email: "mialy.ratsimbazafy@gmail.com",
    },
  },

  en: {
    langLabel: "EN",
    nav: {
      portfolio: "Portfolio",
    },
    hero: {
      name: "Mialy Ratsimbazafy",
      tagline: "Agent Engineer × Digital Assets — Frontend React / TypeScript (she/her)",
      body: "After ten years in asset management across France, Luxembourg and Japan, I moved into development to build the products I wished I'd had. I design Web3 and DeFi interfaces in React and TypeScript, with a strong focus on autonomous agents and digital assets.",
    },
    about: {
      heading: {
        before: "From asset management to ",
        highlight: "Web3 development",
        after: "",
      },
      paragraphs: [
        "In 2023, redundancy ended ten years in asset management across France, Luxembourg and Japan (Candriam, Northern Trust, Crédit Agricole CIB, Selexium). I chose to treat it as a turning point rather than a setback.",
        "I trained as a fullstack web developer at Ada Tech School, then kept learning on my own through documentation, open source and my own projects — currently the University of Helsinki's Full Stack Open course. Frontend quickly became my ground: giving complex systems a clear, usable shape.",
        "My asset-management background isn't behind me — it became a working tool. I understand financial products, risk and liquidity, and I can translate them into interfaces a non-specialist can actually use. That's what draws me to DeFi, digital assets and autonomous agents.",
        "I work in React, TypeScript and Tailwind, with Framer Motion for animation. The projects below are shipped and public: they show how I design an interface, structure application state and integrate on-chain data.",
        "Away from code, I play and compose piano, read a lot of fiction, and spend time baking.",
      ],
    },
    technologies: {
      heading: "Technologies",
    },
    environment: {
      heading: "Environment",
      container: "Container",
    },
    experience: {
      heading: "Experience",
      items: [
        {
          year: "Feb. 2025 – present",
          role: "Founder — personal projects",
          company: "SafeHaven Money / B-Wiize",
          description:
            "Design and development of a voice-first, multilingual financial agent (React Native, TypeScript) making financial education and DeFi yield accessible to people underserved by traditional banking: Claude-powered reasoning, ElevenLabs voice synthesis, conservative USDC strategies on Solana, non-custodial by design. Selected for XRPL Commons' Aquarium Residency (5th cohort, \"Gaming & Gamified Experiences\"): a gamified product presented to a jury at a Demo Day. Build-in-public documentation of my technical ramp-up, from Next.js / TypeScript to Solidity / Foundry.",
          technologies: ["React Native", "TypeScript", "Claude", "Solana", "Solidity", "Foundry"],
        },
        {
          year: "Jan. – Oct. 2024",
          role: "Fullstack Developer — intensive training",
          company: "Ada Tech School",
          description:
            "Web application development in JavaScript, HTML/CSS and Python (Django), on individual and team projects. Git/GitHub versioning and technical teamwork throughout.",
          technologies: ["JavaScript", "HTML/CSS", "Django", "Git"],
        },
        {
          year: "2012 – 2023",
          role: "Asset management & financial advisory",
          company: "Candriam · Northern Trust · Crédit Agricole CIB · Selexium",
          description:
            "Ten years in asset management across France, Luxembourg and Japan: multi-asset portfolio management, institutional client relations, project coordination and wealth advisory. This is where my understanding of financial products, risk and banking domain challenges comes from.",
          technologies: ["Portfolio management", "Institutional clients", "Wealth advisory", "Analysis"],
        },
      ],
    },
    projects: {
      heading: "Work",
      githubLabel: "Source code",
      liveLabel: "View live",
      videoLabel: "Video demo",
      videoSoon: "Video demo coming soon",
      items: {
        safehaven: {
          title: "SafeHaven Money",
          description:
            "A voice-first, multilingual financial agent (React Native / TypeScript) making financial education and DeFi yield accessible to people underserved by traditional banking. Claude-powered reasoning, ElevenLabs voice synthesis, conservative USDC strategies on Solana, non-custodial by design. My role: mobile interface, gamified onboarding (Novice → Saver → Investor) and agent integration.",
        },
        defipulsex: {
          title: "DeFi-PulseX",
          description:
            "A cross-chain DeFi trading terminal (React / TypeScript / Zustand) connected to Ethereum and the XRP Ledger. Real-time market data, TradingView charts, arbitrage detection and liquidity aggregation via 1inch, in a terminal-style interface. A gamification layer (XP, levels, leaderboard) eases the DeFi learning curve.",
        },
        uvote: {
          title: "uVote",
          description:
            "An online voting app (Python / Django) covered by automated tests. Poll management, admin back-office and CSRF tests. A deliberately small project, meant to show my Python fundamentals and testing discipline.",
        },
      },
    },
    contact: {
      heading: "Get in touch",
      body: "Open to frontend roles (permanent) as well as Web3 / Agent Engineer work.",
      emailLabel: "Send an email",
      email: "mialy.ratsimbazafy@gmail.com",
    },
  },
};
