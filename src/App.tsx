import { useEffect, useState } from 'react'
import { profile, projects, experiences, formations, skillCategories, upcomingProjects } from './data/content'
import ProjectCard from './components/ProjectCard'
import ExperienceCard from './components/ExperienceCard'
import FormationCard from './components/FormationCard'
import SkillCategory from './components/SkillCategory'
import GeoWebFeatured from './components/GeoWebFeatured'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Navigation links
  const navLinks = [
    { id: '', label: 'ACCUEIL & CONTACT' },
    { id: 'experiences', label: 'EXPÉRIENCES' },
    { id: 'formations', label: 'FORMATIONS' },
    { id: 'competences', label: 'COMPÉTENCES' },
    { id: 'passions', label: 'PASSIONS' },
    { id: 'geoweb', label: 'GEOWEB' },
    { id: 'projets', label: 'PROJETS' },
    // { id: 'veille', label: 'VEILLE' },
    // { id: 'contact', label: 'CONTACT' },
  ]

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = document.querySelectorAll('section[id]')
      const navHeight = 70
      const scrollPosition = window.scrollY + navHeight
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight - 100
        const sectionHeight = section.clientHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Get GeoWeb project
  const geoWebProject = projects.find(p => p.id === 'cybergeopolitics-hub')
  
  // Other projects (excluding GeoWeb and upcoming)
  const otherProjects = projects.filter(p => p.id !== 'cybergeopolitics-hub')

  return (
    <div className="app">
      {/* ================ NAVBAR ================ */}
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

      {/* ================ HERO ================ */}
      <header className="hero">
        <div className="hero-content">
          <span className="hero-badge">INGENIEUR CYBERSECURITE & DEVELOPPEUR FULL-STACK</span>
          
          <p className="hero-hello">┌─ BONJOUR / BONSOIR !</p>
          <h1>RAPHAËL <span style={{ color: 'var(--neon-pink)' }}>│</span></h1>
          
          <p className="hero-role">
            Développeur TypeScript (React) & Java (Spring)
          </p>
          
          <p className="hero-status">
            <span>📍 Paris, France</span>
            <span>🎓 Master en alternance</span>
            <span>🔐 Passionné de Cybersécurité et bien d'autres</span>
          </p>
          
          <p className="hero-intro">
            Étudiant en MBA RSIC au sein de l'Ecole de Guerre Economique à Paris et développeur passionné, j'ai beaucoup d'idées que je parviens à concrétiser grâce au développement web.Je construis des applications web 
            avec React et TypeScript côté frontend, et Java avec Spring côté backend (si besoin). 
            Ce qui me motive vraiment : la cybersécurité, la géopolitique, numérique ou non et les jeux.
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

      {/* ================ SECTIONS ================ */}

      {/* EXPÉRIENCES PROFESSIONNELLES */}
      <section id="experiences" className="section">
        <div className="section-header">
          <h2 className="section-title">
            EXPÉRIENCES PROFESSIONNELLES
            <span className="section-subtitle">// PARCOURS</span>
          </h2>
        </div>
        <div className="cards">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* FORMATIONS */}
      <section id="formations" className="section">
        <div className="section-header">
          <h2 className="section-title">
            FORMATIONS & CERTIFICATIONS
            <span className="section-subtitle">// ACADÉMIQUE</span>
          </h2>
        </div>
        <div className="cards">
          {formations.map((formation) => (
            <FormationCard key={formation.title} formation={formation} />
          ))}
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="section">
        <div className="section-header">
          <h2 className="section-title">
            COMPÉTENCES TECHNIQUES
            <span className="section-subtitle">// STACK</span>
          </h2>
        </div>
        <div>
          {skillCategories.map((category) => (
            <SkillCategory key={category.category} category={category} />
          ))}
        </div>
      </section>

      {/* PASSIONS */}
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
      </section>

      {/* GEOWEB - Projet fil rouge */}
      <section id="geoweb" className="section">
        <div className="section-header">
          <h2 className="section-title">
            GEOWEB
            <span className="section-subtitle">// PROJET FIL ROUGE</span>
          </h2>
        </div>
        <p className="section-description">
          CyberGeopolitics Hub est mon projet principal qui combine cybersécurité et géopolitique. Une plateforme complète avec carte interactive, analyse de données et visualisation des cyberattaques mondiales.
        </p>
        
        {geoWebProject && (
          <div style={{ marginTop: '24px' }}>
            <GeoWebFeatured project={geoWebProject} />
          </div>
        )}
      </section>

      {/* AUTRES PROJETS */}
      <section id="projets" className="section">
        <div className="section-header">
          <h2 className="section-title">
            MES AUTRES PROJETS
            <span className="section-subtitle">// DÉVELOPPEMENT</span>
          </h2>
        </div>
        
        <div className="cards">
          {otherProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          
          {/* Placeholder pour futurs projets */}
          {upcomingProjects.map((p) => (
            <ProjectCard key={p.id} project={p} isFeatured={false} />
          ))}
        </div>
      </section>

      {/* ================ FOOTER ================ */}
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
