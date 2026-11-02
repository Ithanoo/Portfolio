import type { Project } from '../data/content'

export default function GeoWebFeatured({ project }: { project: Project }) {
  // Fonctionnalités de GeoWeb
  const features = [
    "Carte interactive des cyberattaques mondiales avec Leaflet",
    "Filtrage dynamique par date, pays, secteur et type d'attaque",
    "Agrégation de données depuis NewsAPI, Shodan et Have I Been Pwned",
    "Visualisation du contexte géopolitique des cybermenaces",
    "Tableau de bord avec statistiques et métriques",
    "Responsive design pour mobile et desktop"
  ]
  
  // Technos avec icônes
  const techWithIcons = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔵' },
    { name: 'Leaflet', icon: '🗺️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' }
  ]
  
  return (
    <article 
      className="card project-card featured"
      style={{
        borderColor: 'var(--neon-purple)',
        background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.9), rgba(30, 30, 50, 0.9))',
        boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <span style={{ 
          display: 'inline-block',
          background: 'var(--neon-purple)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '1px',
          marginBottom: '16px'
        }}>
          PROJET FIL ROUGE
        </span>
        
        <h2 style={{ 
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '1.8rem',
          color: 'var(--neon-purple)',
          marginBottom: '8px'
        }}>
          {project.title}
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
          {project.tagline}
        </p>
      </div>
      
      {/* Description */}
      <p style={{ 
        color: 'var(--text-secondary)', 
        lineHeight: '1.8', 
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        {project.description}
      </p>
      
      {/* Fonctionnalités */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '1rem',
          color: 'var(--neon-blue)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>⚡</span> Fonctionnalités
        </h4>
        
        <ul style={{ 
          listStyle: 'none',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '8px'
        }}>
          {features.map((feature, index) => (
            <li 
              key={index}
              style={{
                padding: '8px 12px',
                background: 'rgba(0, 212, 255, 0.05)',
                borderLeft: '3px solid var(--neon-blue)',
                borderRadius: '4px',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
              }}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Technologies */}
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '1rem',
          color: 'var(--neon-purple)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>🛠️</span> Technologies
        </h4>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {techWithIcons.map((tech) => (
            <span 
              key={tech.name}
              style={{
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '0.85rem',
                color: 'var(--neon-purple)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>{tech.icon}</span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
      
      {/* Liens */}
      <div className="project-links" style={{ justifyContent: 'center' }}>
        {project.links.map((l) => (
          <a 
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            style={{
              borderColor: 'var(--neon-purple)',
              color: 'var(--neon-purple)'
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </article>
  )
}
