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
      emoji: '🌍',
      title: 'Géopolitique & tech',
      text: "Explorer le croisement entre technologie, données et enjeux mondiaux.",
    },
    {
      emoji: '🎮',
      title: 'Jeux',
      text: 'Qu ils soient vidéos ou pas, j aime la stratégie notamment dans les MMO.',
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
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/raphael-lou-mar/' },
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
    id: 'findmyinforientation',
    title: 'FindMyInfOrientation',
    tagline: 'Gestion de tâches en React',
    description:
      "Application de gestion de tâches développée en React : ajout, édition, suppression et suivi des tâches au quotidien. Un projet personnel pour maîtriser les fondamentaux de React (composants, state, props).",
    tech: ['React', 'TypeScript', 'D3.js', 'Vite'],
    category: 'perso',
    links: [
      { label: 'Voir sur GitHub', url: 'https://github.com/Ithanoo/FindMyInfoOrientation' },
    ],
    emoji: '✅',
  },
  {
    id: 'iaalignementpeda',
    title: 'Application avec RAG pour Formateurs et formés',
    tagline: 'Livrable de stage d\'initiation à la recherche',
    description:
      "Une application web moderne qui utilise un système RAG (Retrieval-Augmented Generation) pour offrir une expérience d'apprentissage personnalisée selon trois rôles d'utilisateurs : Apprenant, Concepteur pédagogique, et Chercheur/Développeur.",
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Python'],
    category: 'pro',
    links: [
      { label: 'Voir sur GitHub', url: 'https://github.com/Layauu/ia-alignement-pedagogique' },
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
    id: 'architecte-2026',
    company: "SPB",
    role: "Alternant Architecte Technique SI",
    period: "Décembre 2025 – Septembre 2026",
    description: "Refonte de l'architecture technique des extranets dans l’objectif d'optimisation et de réduction du temps de déploiement des extranets. Création d'un P.O.C sur l'intégration d'un module IA de Figma dans le processus de création d'extranets pour les clients. Coordination et vulgarisation entre les différents acteurs du projet. Etudes sur la place des I.A. dans les nouvelles techniques de développement.",
    tech: ['Figma', 'Visual Studio Code', 'React', 'TypeScript', 'Git', 'BPMN'],
    emoji: '🏗️'
  },
  {
    id: 'alternance-2026',
    company: "SPB",
    role: "Alternant Développeur Full-Stack",
    period: "Octobre 2023 – Octobre 2025",
    description: "Migration d’une Base de données MySQL vers Microsoft SQL Server. Etudes sur l’impact d’une migration Cloud sur le PRA de l’entreprise. Création d’une API CRUD de gestion de tâches et de travaux en Java",
    tech: ['React', 'TypeScript', 'MUI', 'Java', 'Spring', 'Git', 'Confluence/Jira', 'Projets de groupe'],
    emoji: '💼'
  },
  {
    id: 'stage-tunis',
    company: "TEK-UP Tunis",
    role: "Stage Ingénieur CI/CD",
    period: "Juillet 2025 – Août 2025",
    description: "Mise en place d’une CI/CD complète autour d’un projet sur GitLab. Création de l’écosystème sur le Cloud AWS avec métriques et suivis. Mise en place d’un cahier des charges détaillé sur Jira avec une méthodologie Agile et documentation sur Confluence",
    tech: ['CI/CD', 'GitLab', 'Pratiques DevOps', 'AWS', 'YAML'],
    emoji: '🛬'
  },
  {
    id: 'stage-cesi',
    company: "CESI Rouen",
    role: "Stage d'Initiation à la Recherche",
    period: "juin 2025 – juillet 2025",
    description: "Création et intégration d’un RAG intéractif pour étudiants et professeurs. Conception et étude d’un outil de SimilaritySearch de projets GitLab. Constitution d’une API CRUD en Python avec des LLM et React. Travail en collaboration avec un autre étudiant, versionning complet disponible sur GitHub.",
    tech: ['RAG', 'IA', 'Python', 'React', 'Git', 'GitHub', 'GitLab', 'SimilaritySearch', 'API CRUD', ],
    emoji: '🔍'
  },
  {
    id: 'stage-spb',
    company: "SPB",
    role: "Stage Développeur",
    period: "Mai 2023 – Août 2023",
    description: "Développement d’une solution interne en Java/Spring et TypeScript/React. Management et suivi du projet sur la suite Atlassian (Jira et Confluence)",
    tech: ['React', 'TypeScript', 'MUI', 'Java', 'Spring', 'Git', 'Confluence/Jira'],
    emoji: '💡'
  },

  
  
  
]

// FORMATIONS
export const formations: Formation[] = [
  {
    title: "MBA Risques, Sûreté Internationale et Cybersécurité (RSIC)",
    school: "Ecole de Guerre Economique",
    period: "2026 – 2027",
    description: "Il forme à la gestion des risques, à la sûreté, à la sécurité et à la cybersécurité, à travers des enseignements en géopolitique, due diligence, cartographie des menaces et gestion de crise. Les étudiants choisissent également entre une option Sûreté et une option Cyber.",
    emoji: '⚔',
  },
  {
    title: "Ingénieur Informatique",
    school: "CESI Rouen",
    period: "2023 – 2026",
    description: "Formation complète sur les différents métiers de l'informatique. Beaucoup de thèmes étudiés, notamment le développement web et logiciel, les réseaux, la Big Data ou encore le management. L'option cybersécurité a été un vrai plus dans la compréhension des enjeux cybers et de l'application technique.",
    emoji: '📚'
  },
  {
    title: "Bachelor Numérique Option Développement Web",
    school: "StJoSup",
    period: "2023",
    description: "Formation complète en cybersécurité couvrant les bases et les concepts avancés : sécurisation des systèmes, détection d'intrusions, gestion des risques, et conformité RGPD.",
    emoji: '🔒'
  },
  {
    title: "BTS Services Informatique aux Organisations Option SLAM",
    school: "StJoSup",
    period: "2022 - 2023",
    description: "Formation complète en cybersécurité couvrant les bases et les concepts avancés : sécurisation des systèmes, détection d'intrusions, gestion des risques, et conformité RGPD.",
    emoji: '🔒'
  },
  {
    title: "Certification EBIOS Risk Manager",
    school: "Ecole de Guerre Economique",
    period: "2027",
    description: "SOON",
    emoji: '🔒'
  }
]

// COMPÉTENCES CATÉGORISÉES
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 8, icon: "⚛️" },
      { name: "TypeScript", level: 6, icon: "🔵" },
      { name: "HTML/CSS", level: 5, icon: "🎨" },
      { name: "Leaflet", level: 3, icon: "🗺️" },
      { name: "Tailwind CSS", level: 3, icon: "🎭" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Java", level: 6, icon: "☕" },
      { name: "Spring Boot", level: 7, icon: "🌿" },
      { name: "Node.js", level: 5, icon: "🟢" },
      { name: "Express", level: 6, icon: "🚀" },
      { name: "REST APIs", level: 6, icon: "🔄" }
    ]
  },
  {
    category: "Base de données",
    items: [
      { name: "MongoDB", level: 5, icon: "🍃" },
      { name: "MySQL", level: 7, icon: "🗄️" },
      { name: "PostgreSQL", level: 5, icon: "🐘" }
    ]
  },
  {
    category: "DevOps & Outils",
    items: [
      { name: "Git", level: 6, icon: "🪜" },
      { name: "GitHub", level: 7, icon: "🐙" },
      { name: "Docker", level: 5, icon: "🐳" },
      { name: "Vite", level: 4, icon: "⚡" }
    ]
  },
  {
    category: "Cybersécurité",
    items: [
      { name: "Analyse de vulnérabilités", level: 4, icon: "🛡️" },
      { name: "Sécurité des APIs", level: 7, icon: "🔐" },
      { name: "Cryptographie", level: 6, icon: "🔑" },
      { name: "RGPD", level: 7, icon: "📜" }
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
