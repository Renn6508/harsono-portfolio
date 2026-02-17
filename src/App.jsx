import { useEffect, useState } from 'react';
import './App.css';
import { projectsData, skillsData, strengthsData } from './data.js';

// Import Icons
import { 
  FaNetworkWired, FaServer, FaTerminal, 
  FaGithub, FaInstagram, FaLinkedin, FaEnvelope,
  FaArrowRight, FaCheckCircle, FaDownload, 
  FaMapMarkerAlt, FaWhatsapp
} from 'react-icons/fa';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      
      {/* --- BACKGROUND DECORATION (PARTICLES) --- */}
      <div className="bg-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        {/* Confetti Particles */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`confetti c-${i % 3}`}></div>
        ))}
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">AS<span className="dot">.</span></div>
        <div className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#strengths">Keunggulan</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Portfolio</a>
        </div>
        <a href="/cv-amirah.pdf" download className="btn-cv">
           Download CV <FaDownload className="icon-sm"/>
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero" id="about">
        <div className="hero-content">
          <div className="badge-pill">
             <span className="pulsing-dot"></span> Ready to Configure
          </div>
          <h1 className="name">Amirah Syauqillah H.</h1>
          <h2 className="role">Computer and Network Engineering</h2>
          <p className="hero-desc">
            Siswi <strong>SMKN 1 Lumajang</strong> jurusan Teknik Komputer & Jaringan. 
            Ahli dalam topologi jaringan, manajemen server, dan troubleshooting.
          </p>
          
          <div className="hero-actions">
             <a href="#projects" className="btn-primary">Lihat Project <FaArrowRight/></a>
             <a href="#skills" className="btn-secondary">Cek Skill</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        
        {/* --- STRENGTHS SECTION --- */}
        <section id="strengths" className="section">
          <div className="section-header">
            <span className="section-subtitle">KENAPA SAYA?</span>
            <h2 className="section-title">Nilai Lebih</h2>
          </div>
          <div className="strengths-grid">
            {strengthsData.map((item) => (
              <div key={item.id} className="strength-card">
                <div className="icon-box"><FaCheckCircle/></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="section">
          <div className="section-header">
             <span className="section-subtitle">HARD SKILLS</span>
             <h2 className="section-title">Keahlian Teknis</h2>
          </div>
          
          <div className="skills-wrapper">
            {/* Networking Column */}
            <div className="skill-col">
              <div className="skill-header">
                <FaNetworkWired className="s-icon"/> 
                <h3>Network Infrastructure</h3>
              </div>
              <ul className="skill-list">
                {skillsData.networking.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Tools Column */}
            <div className="skill-col">
              <div className="skill-header">
                <FaTerminal className="s-icon"/> 
                <h3>Tools & Administration</h3>
              </div>
              <ul className="skill-list">
                {skillsData.tools.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="section">
          <div className="section-header">
            <span className="section-subtitle">PORTOFOLIO</span>
            <h2 className="section-title">Project Pilihan</h2>
          </div>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="card-image">
                   <img src={project.image} alt={project.title} />
                </div>
                <div className="card-body">
                  <span className="cat-badge">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.techStack.map((tech, i) => (
                      <span key={i}>#{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-container">
          
          <div className="footer-col brand-col">
            <h3>AS.</h3>
            <p>
              Membangun konektivitas yang stabil dan aman.
              Terbuka untuk kolaborasi dan magang.
            </p>
          </div>

          <div className="footer-col links-col">
            <h4>Menu</h4>
            <ul>
              <li><a href="#about">Tentang</a></li>
              <li><a href="#skills">Keahlian</a></li>
              <li><a href="#projects">Portofolio</a></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Kontak</h4>
            <ul>
              <li><FaMapMarkerAlt className="f-icon"/> Lumajang, Jawa Timur</li>
              <li><FaEnvelope className="f-icon"/> amirah@smkn1lmj.sch.id</li>
              <li><FaWhatsapp className="f-icon"/> +62 812-3456-7890</li>
            </ul>
            
            {/* SOCIAL ICONS MODERN (Tanpa Kotak) */}
            <div className="social-row">
              <a href="#" className="soc-link github" aria-label="Github"><FaGithub/></a>
              <a href="#" className="soc-link linkedin" aria-label="LinkedIn"><FaLinkedin/></a>
              <a href="#" className="soc-link instagram" aria-label="Instagram"><FaInstagram/></a>
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Amirah Syauqillah Harsono.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;