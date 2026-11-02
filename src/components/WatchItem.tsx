import type { WatchItem as WatchItemType } from '../data/content'

export default function WatchItem({ item }: { item: WatchItemType }) {
  return (
    <article className="card" style={{ minHeight: '180px' }}>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>
        {item.title}
      </h3>
      
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
        {item.description}
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
        {item.tags.map((tag) => (
          <span 
            key={tag}
            style={{
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '4px 12px',
              fontSize: '0.75rem',
              color: 'var(--neon-blue)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
