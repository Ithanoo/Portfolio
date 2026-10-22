import type { Project } from '../data/content'

interface ProjectCardProps {
  project: Project
  isFeatured?: boolean
}

// Gradients SF par catégorie et emoji
const getSfGradient = (category: string, emoji: string) => {
  const gradients: Record<string, string> = {
    // Projets par emoji
    '🌍': 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #ec4899 100%)',
    '✅': 'linear-gradient(135deg, #10b981 0%, #00d4ff 100%)',
    '🧱': 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)',
    // Par catégorie
    'pro': 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
    'perso': 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
  }
  
  return gradients[emoji] || gradients[category] || gradients.perso
}

// Icônes SF pour remplacer les emojis
const getSfIcon = (emoji: string) => {
  const icons: Record<string, string> = {
    '🌍': '🌐', // Globe → Réseau
    '✅': '✓', // Check
    '🧱': '◈', // Minecraft → Diamant SF
  }
  return icons[emoji] || emoji
}

// Effets de glow par catégorie
const getGlow = (category: string) => {
  return category === 'pro' 
    ? '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3)'
    : '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)'
}

export default function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const gradient = getSfGradient(project.category, project.emoji)
  const sfIcon = getSfIcon(project.emoji)
  const glow = getGlow(project.category)
  
  return (
    <article 
      className={`card project ${isFeatured ? 'featured' : ''}`}
      style={isFeatured ? {
        borderColor: 'var(--neon-purple)',
        boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
      } : {}}
    >
      {/* Image / Placeholder SF */}
      <div 
        className="project-image"
        style={{
          background: gradient,
          boxShadow: isFeatured ? `inset 0 0 60px rgba(139, 92, 246, 0.3), ${glow}` : glow
        }}
      >
        <span 
          style={{
            fontSize: '4rem',
            filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.8))',
            textShadow: '0 0 20px rgba(255,255,255,0.5)'
          }}
        >
          {sfIcon}
        </span>
        
        {/* Badge featured */}
        {isFeatured && (
          <span 
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'var(--neon-purple)',
              color: 'var(--bg-dark)',
              padding: '4px 10px',
              borderRadius: '12px',
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.7rem',
              fontWeight: '700',
              letterSpacing: '1px',
              boxShadow: '0 0 20px var(--neon-purple)'
            }}
          >
            FIL ROUGE
          </span>
        )}
      </div>
      
      {/* Header */}
      <div className="project-head">
        <h3 style={{ color: isFeatured ? 'var(--neon-purple)' : 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <span className={`badge ${project.category}`}>
          {project.category === 'pro' ? 'PRO / CLASSE' : 'PERSONNEL'}
        </span>
      </div>
      
      {/* Tagline */}
      <p className="tagline">{project.tagline}</p>
      
      {/* Description */}
      <p style={isFeatured ? { color: 'var(--text-secondary)' } : {}}>
        {project.description}
      </p>
      
      {/* Tech stack */}
      <ul className="tech">
        {project.tech.map((t) => (
          <li 
            key={t}
            style={isFeatured ? { 
              background: 'rgba(139, 92, 246, 0.15)',
              borderColor: 'rgba(139, 92, 246, 0.5)',
              color: 'var(--neon-purple)'
            } : {}}
          >
            {t}
          </li>
        ))}
      </ul>
      
      {/* Links */}
      <div className="project-links">
        {project.links.map((l) => (
          <a 
            key={l.url} 
            href={l.url} 
            target="_blank" 
            rel="noreferrer"
            style={isFeatured ? { 
              borderColor: 'var(--neon-purple)',
              color: 'var(--neon-purple)'
            } : {}}
          >
            {l.label}
          </a>
        ))}
      </div>
      
      {/* Featured overlay effect */}
      {isFeatured && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: '1px solid var(--neon-purple)',
            borderRadius: '16px',
            pointerEvents: 'none',
            boxShadow: '0 0 60px rgba(139, 92, 246, 0.2)'
          }}
        />
      )}
    </article>
  )
}
