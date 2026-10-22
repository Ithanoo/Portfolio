import { useEffect, useState } from 'react'
import { profile, projects } from './data/content'
import ProjectCard from './components/ProjectCard'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Detect active section
      const sections = document.querySelectorAll('section[id]')
      const navHeight = 70
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight - 100
        const sectionHeight = section.clientHeight
        const scrollPosition = window.scrollY + navHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation links
  const navLinks = [
    { id: '', label: 'ACCUEIL' },
    { id: 'passions', label: 'PASSIONS' },
    { id: 'geoweb', label: 'GEOWEB' },
    { id: 'projets', label: 'PROJETS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  // Filter GeoWeb project
  const geoWebProject = projects.find(p => p.id === 'cybergeopolitics-hub')

  return (
    <div className="app">
      {/* NAVBAR SF */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#" className="navbar-brand">
            <span className="navbar-logo">RAPHAËL</span>
          </a>
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SF */}
      <header className="hero">
        <div className="hero-content">
          <span className="hero-badge">DEVELOPPEUR FULL-STACK</span>
          
          <p className="hero-hello">┌─ BONJOUR</p>
          <h1>RAPHAËL <span style={{ color: 'var(--neon-pink)' }}>│</span> DEV SF</h1>
          
          <p className="hero-role">
            Développeur TypeScript (React) & Java (Spring)
          </p>
          
          <p className="hero-status">
            <span>📍 Paris, France</span>
            <span>🎓 Master en alternance</span>
            <span>🔐 Passionné de Cybersécurité</span>
          </p>
          
          <p className="hero-intro">
            Étudiant en Master et développeur passionné, je construis des applications web 
            avec React et TypeScript côté frontend, et Java avec Spring côté backend. 
            Ce qui me motive vraiment : la cybersécurité et la géopolitique numérique.
          </p>
          
          <div className="hero-links">
            {profile.socials.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* SECTION PASSIONS */}
      <section id="passions" className="section">
        <div className="section-header">
          <h2 className="section-title">
            CE QUE J'AIME
            <span className="section-subtitle">// PASSIONS</span>
          </h2>
        </div>
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

      {/* SECTION GEOWEB - Projet fil rouge */}
      <section id="geoweb" className="section">
        <div className="section-header">
          <h2 className="section-title">
            GEOWEB
            <span className="section-subtitle">// PROJET FIL ROUGE</span>
          </h2>
        </div>
        <p className="section-description">
          CyberGeopolitics Hub est mon projet principal qui combine cybersécurité et géopolitique. 
          Une plateforme complète avec carte interactive, analyse de données et visualisation 
          des cyberattaques mondiales.
        </p>
        
        {geoWebProject && (
          <div className="cards">
            <ProjectCard key={geoWebProject.id} project={geoWebProject} isFeatured={true} />
          </div>
        )}
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="section">
        <div className="section-header">
          <h2 className="section-title">
            MES PROJETS
            <span className="section-subtitle">// DEV SF</span>
          </h2>
        </div>
        
        <div className="cards">
          {projects.filter(p => p.id !== 'cybergeopolitics-hub').map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <p>
          <span style={{ color: 'var(--neon-blue)' }}>≡</span> 
          Fait avec React + TypeScript · 
          <a href={profile.socials[0]?.url ?? '#'} target="_blank" rel="noreferrer">
            @Ithanoo
          </a>
        </p>
        <p className="footer-credits">
          Inspiré par l'univers Science-Fiction · 2026
        </p>
      </footer>
    </div>
  )
}
