import type { Experience } from '../data/content'

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <div>
          <span className="card-emoji" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block' }}>
            {experience.emoji}
          </span>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>
            {experience.role}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '4px' }}>
            {experience.company}
          </p>
        </div>
        <span 
          style={{
            background: 'rgba(0, 212, 255, 0.15)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '6px',
            padding: '4px 10px',
            fontSize: '0.8rem',
            color: 'var(--neon-blue)',
            whiteSpace: 'nowrap'
          }}
        >
          {experience.period}
        </span>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
        {experience.description}
      </p>
      
      <ul className="tech" style={{ marginTop: '12px' }}>
        {experience.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  )
}
