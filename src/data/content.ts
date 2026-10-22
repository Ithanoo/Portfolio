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
  ],
}

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