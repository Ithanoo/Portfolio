import type { Formation } from '../data/content'

export default function FormationCard({ formation }: { formation: Formation }) {
  return (
    <article className="card">
      <span className="card-emoji" style={{ fontSize: '2rem', marginBottom: '12px', display: 'block' }}>
        {formation.emoji}
      </span>
      
      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
        {formation.title}
      </h3>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '8px' }}>
        {formation.school}
      </p>
      
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>
        {formation.period}
      </p>
      
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
        {formation.description}
      </p>
    </article>
  )
}
