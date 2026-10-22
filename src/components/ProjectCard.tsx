import type { Project } from '../data/content'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project">
      <div className="project-head">
        <span className="card-emoji">{project.emoji}</span>
        <span className="badge">
          {project.category === 'pro' ? 'Pro / classe' : 'Perso'}
        </span>
      </div>
      <h3>{project.title}</h3>
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