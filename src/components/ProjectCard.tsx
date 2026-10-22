import type { Project } from '../data/content'

// Couleurs de placeholder par catégorie
const getGradientColors = (category: string, emoji: string) => {
  const gradients = {
    pro: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    perso: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  }
  
  // Override basé sur l'emoji pour plus de variété
  if (emoji === '🌍') return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  if (emoji === '✅') return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  if (emoji === '🧱') return 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  
  return gradients[category] || gradients.perso
}

export default function ProjectCard({ project }: { project: Project }) {
  const gradient = getGradientColors(project.category, project.emoji)
  
  return (
    <article className="card project">
      <div 
        className="project-image"
        style={{
          background: gradient,
          fontSize: '3rem'
        }}
        aria-label={project.title}
      >
        <span style={{ fontSize: '3rem' }}>{project.emoji}</span>
      </div>
      <div className="project-head">
        <h3>{project.title}</h3>
        <span className="badge">
          {project.category === 'pro' ? 'Pro / classe' : 'Perso'}
        </span>
      </div>
      <p className="tagline">{project.tagline}</p>
      <p>{project.description}</p>
      <ul className="tech">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.links.map((l) => (
          <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
            {l.label} ↗
          </a>
        ))}
      </div>
    </article>
  )
}