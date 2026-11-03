import type { SkillCategory as SkillCategoryType } from '../data/content'

export default function SkillCategory({ category }: { category: SkillCategoryType }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{
        fontFamily: 'Orbitron, sans-serif',
        fontSize: '1.2rem',
        color: 'var(--neon-blue)',
        marginBottom: '16px',
        borderLeft: '3px solid var(--neon-blue)',
        paddingLeft: '12px'
      }}>
        {category.category}
      </h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {category.items.map((item) => (
          <div 
            key={item.name}
            style={{
              flex: 1,
              minWidth: '200px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '12px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              <span style={{ fontWeight: '600' }}>{item.name}</span>
            </div>
            
            {/* Barre de niveau */}
            <div style={{ 
              height: '6px', 
              background: 'var(--bg-dark)', 
              borderRadius: '3px',
              overflow: 'hidden',
              marginTop: '8px'
            }}>
              <div 
                style={{
                  height: '100%',
                  width: `${(item.level / 10) * 100}%`,
                  background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))',
                  borderRadius: '3px',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end',
              marginTop: '4px',
              fontSize: '0.75rem',
              color: 'var(--text-muted)'
            }}>
              Niveau {item.level}/4
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
