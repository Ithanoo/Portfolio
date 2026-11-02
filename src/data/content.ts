export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  tech: string[]
  category: 'pro' | 'perso'
  links: { label: string; url: string }[]
  emoji: string
}

// NOUVELLES SECTIONS

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  description: string
  tech: string[]
  emoji: string
}

export type Formation = {
  title: string
  school: string
  period: string
  description: string
  emoji: string
}

export type SkillItem = {
  name: string
  level: number // 1-4: Débutant → Expert
  icon?: string
}

export type SkillCategory = {
  category: string
  items: SkillItem[]
}

export type WatchItem = {
  title: string
  description: string
  tags: string[]
}

// DONNÉES EXISTANTES (inchangées)
export const profile = {
  name: 'Raphaël',
  role: 'Développeur TypeScript (React) & Java (Spring)',
  status: 'Étudiant en Master — en alternance / stage',
  location: 'Paris, France',
  intro:
    "Étudiant en Master et développeur passionné, je construis des applications web avec React et TypeScript côté frontend, et Java avec Spring côté backend. Ce qui me motive vraiment : la cybersécurité — comprendre comment les systèmes se font attaquer, et comment les protéger.",
  passions: [
    {
      emoji: '🔐',
      title: 'Cybersécurité',
      text: "Comprendre les cyberattaques, leur contexte géopolitique et les moyens de s'en protéger.",
    },
    {
      emoji: '⚛️',
      title: 'Développement web',
      text: 'React + TypeScript au quotidien, Spring pour les API robustes.',
    },
    {
      emoji: '🌍',
      title: 'Géopolitique & tech',
      text: "Explorer le croisement entre technologie, données et enjeux mondiaux.",
    },
  ],
  skills: [
    'TypeScript',
    'React',
    'Java',
    'Spring',
    'Node.js',
    'Express',
    'MongoDB',
    'Cartographie (Leaflet)',
    'Cybersécurité',
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/Ithanoo' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/raphael-dev' },
  ],
}

// DONNÉES EXISTANTES (inchangées)
export const projects: Project[] = [
  {
    id: 'cybergeopolitics-hub',
    title: 'CyberGeopolitics Hub',
    tagline: "Cartographier les cyberattaques et leur contexte géopolitique",
    description:
      "Une plateforme web qui combine cybersécurité et géopolitique : carte interactive des cyberattaques mondiales (pays, secteur, type), enrichie de leur contexte — conflits, groupes cybercriminels — avec filtrage par date, secteur ou acteur, et agrégation de données depuis des APIs publiques (NewsAPI, Shodan, HIBP). Frontend React + TypeScript avec Leaflet, backend Node/Express, données hétérogènes dans MongoDB.",
    tech: ['React', 'TypeScript', 'Leaflet', 'Node.js', 'Express', 'MongoDB'],
    category: 'perso',
    links: [
      { label: 'Voir sur GitHub', url: 'https://github.com/Ithanoo/GeoWeb' },
    ],
    emoji: '🌍',
  },
  {
    id: 'todoapp',
    title: 'ToDo App',
    tagline: 'Gestion de tâches en React',
    description:
      "Application de gestion de tâches développée en React : ajout, édition, suppression et suivi des tâches au quotidien. Un projet personnel pour maîtriser les fondamentaux de React (composants, state, props).",
    tech: ['React', 'JavaScript'],
    category: 'perso',
    links: [
      { label: 'Voir sur GitHub', url: 'https://github.com/Ithanoo/ToDoApp' },
    ],
    emoji: '✅',
  },
  {
    id: 'sitesurfruncraft',
    title: 'Site Surfruncraft',
    tagline: 'Premier projet web personnel',
    description:
      "Un de mes premiers projets web : un site dédié à la communauté Minecraft Surfruncraft. C'est le projet qui m'a fait découvrir le développement web et donné envie d'en faire mon métier.",
    tech: ['HTML', 'CSS'],
    category: 'perso',
    links: [
      { label: 'Voir sur GitHub', url: 'https://github.com/Ithanoo/SiteSurfruncraft' },
    ],
    emoji: '🧱',
  },
]

// ========================================
// NOUVELLES DONNÉES
// ========================================

// EXPÉRIENCES PROFESSIONNELLES
export const experiences: Experience[] = [
  {
    id: 'alternance-2024',
    company: "Entreprise en Alternance",
    role: "Développeur Full-Stack",
    period: "Sept 2024 – Présent",
    description: "Développement d'applications web full-stack dans un environnement agile. Participation à la conception et à l'implémentation de nouvelles fonctionnalités, ainsi qu'à la maintenance des applications existantes. Travail en équipe avec des développeurs seniors sur des projets variés.",
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MongoDB', 'Git'],
    emoji: '💼'
  },
  {
    id: 'stage-2023',
    company: "Société Tech",
    role: "Développeur Backend",
    period: "Avril 2023 – Août 2023",
    description: "Stage de 4 mois où j'ai travaillé sur le développement d'APIs REST avec Spring Boot. Intégration de services externes et optimisation des requêtes bases de données. Apprentissage des bonnes pratiques de développement backend et de la sécurité des API.",
    tech: ['Java', 'Spring', 'MySQL', 'Postman'],
    emoji: '📈'
  }
]

// FORMATIONS
export const formations: Formation[] = [
  {
    title: "Master Informatique - Parcours Cybersécurité",
    school: "Université Paris Cité",
    period: "2024 – 2026",
    description: "Master avec spécialisation en cybersécurité et développement web. Cours avancés sur la sécurité des applications, la cryptographie, et l'analyse des vulnérabilités. Projet de fin d'étude : Analyse des cyberattaques via le machine learning.",
    emoji: '🎓'
  },
  {
    title: "Licence Informatique",
    school: "Université Paris Cité",
    period: "2021 – 2024",
    description: "Formation solide en algorithmique, structures de données, programmation orientée objet, et développement web. Projets pratiques en Java, Python, et JavaScript.",
    emoji: '📚'
  },
  {
    title: "Certification SecNumAcadémie",
    school: "ANSSI",
    period: "2024",
    description: "Formation complète en cybersécurité couvrant les bases et les concepts avancés : sécurisation des systèmes, détection d'intrusions, gestion des risques, et conformité RGPD.",
    emoji: '🔒'
  }
]

// COMPÉTENCES CATÉGORISÉES
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 4, icon: "⚛️" },
      { name: "TypeScript", level: 4, icon: "🔵" },
      { name: "HTML/CSS", level: 4, icon: "🎨" },
      { name: "Leaflet", level: 3, icon: "🗺️" },
      { name: "Tailwind CSS", level: 2, icon: "🎭" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Java", level: 4, icon: "☕" },
      { name: "Spring Boot", level: 4, icon: "🌿" },
      { name: "Node.js", level: 3, icon: "🟢" },
      { name: "Express", level: 3, icon: "🚀" },
      { name: "REST APIs", level: 4, icon: "🔄" }
    ]
  },
  {
    category: "Base de données",
    items: [
      { name: "MongoDB", level: 3, icon: "🍃" },
      { name: "MySQL", level: 3, icon: "🗄️" },
      { name: "PostgreSQL", level: 2, icon: "🐘" }
    ]
  },
  {
    category: "DevOps & Outils",
    items: [
      { name: "Git", level: 4, icon: "🪜" },
      { name: "GitHub", level: 4, icon: "🐙" },
      { name: "Docker", level: 2, icon: "🐳" },
      { name: "Vite", level: 3, icon: "⚡" }
    ]
  },
  {
    category: "Cybersécurité",
    items: [
      { name: "Analyse de vulnérabilités", level: 3, icon: "🛡️" },
      { name: "Sécurité des APIs", level: 3, icon: "🔐" },
      { name: "Cryptographie", level: 2, icon: "🔑" },
      { name: "RGPD", level: 3, icon: "📜" }
    ]
  }
]

// VEILLE TECHNOLOGIQUE
export const watchlist: WatchItem[] = [
  {
    title: "Cybersécurité en 2025",
    description: "Suivi des nouvelles menaces : attaques par IA, vulnérabilités IoT, et evolution des ransomwares.",
    tags: ['Cybersécurité', 'IA', 'IoT']
  },
  {
    title: "Spring Boot 3.2",
    description: "Nouveautés : amélioration des performances, support natif de GraalVM, et simplifications.",
    tags: ['Java', 'Backend', 'Spring']
  },
  {
    title: "React Server Components",
    description: "Révolution dans React : composants côté serveur pour des performances optimisées.",
    tags: ['React', 'Frontend', 'Performance']
  },
  {
    title: "WebAssembly",
    description: "Exécution de code à vitesse native dans le navigateur. Potentiel énorme pour les apps web.",
    tags: ['Web', 'Performance', 'Rust']
  }
]

// FUTURS PROJETS (placeholders)
export const upcomingProjects: Project[] = [
  {
    id: 'new-project-2025',
    title: 'Nouveau Projet à Venir',
    tagline: "Projet en développement - Détails à venir",
    description: "Un nouveau projet passionnant est en cours de développement. Restez à l'affût pour plus d'informations.",
    tech: ['À définir'],
    category: 'perso',
    links: [],
    emoji: '🚀'
  }
]
