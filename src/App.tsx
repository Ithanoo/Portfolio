import { profile, projects } from './data/content'
import ProjectCard from './components/ProjectCard'

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="hero-hello">Bonjour, moi c'est</p>
        <h1>{profile.name} 👋</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-status">
          {profile.status} · {profile.location}
        </p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-links">
          {profile.socials.map((s) => (
            <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          ))}
        </div>
      </header>

      <section className="section">
        <h2>Ce que j'aime ✨</h2>
        <div className="cards passions">
          {profile.passions.map((p) => (
            <article key={p.title} className="card">
              <span className="card-emoji">{p.emoji}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
        <ul className="skills">
          {profile.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Mes projets 🛠️</h2>
        <div className="cards">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          Fait avec React + TypeScript ·{' '}
          <a href={profile.socials[0]?.url ?? '#'} target="_blank" rel="noreferrer">
            @Ithanoo
          </a>
        </p>
      </footer>
    </div>
  )
}