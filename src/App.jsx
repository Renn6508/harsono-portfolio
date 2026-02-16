import { useEffect, useState } from 'react';
import './App.css';
import { projectsData, skillsData, strengthsData } from './data.js';

// Import Icons
import { 
  FaNetworkWired, FaServer, FaTerminal, 
  FaGithub, FaInstagram, FaLinkedin, FaEnvelope,
  FaArrowRight, FaCheckCircle, FaDownload, 
  FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp
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
      
      {/* --- NAVBAR --- */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">AS<span className="dot">.</span></div>
        <div className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#strengths">Keunggulan</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Portfolio</a>
        </div>
        {/* Tombol Download CV */}
        <a href="/cv-amirah.pdf" download className="btn-cv">
           Download CV <FaDownload className="icon-sm"/>
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero" id="about">
        <div className="hero-content">
          <div className="badge-pill">
             <span className="pulsing-dot"></span> Open to Work
          </div>
          <h1 className="name">Amirah Syauqillah H.</h1>
          <h2 className="role">Network Engineer & SysAdmin</h2>
          <p className="hero-desc">
            Siswi <strong>SMKN 1 Lumajang</strong> jurusan Teknik Komputer & Jaringan. 
            Spesialisasi dalam manajemen bandwidth Mikrotik, routing Cisco, 
            dan administrasi server Linux.
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
        <section id="skills" className="section bg-dim">
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
                   <div className="overlay"></div>
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

      {/* --- FOOTER LENGKAP --- */}
      <footer className="footer">
        <div className="footer-container">
          
          {/* Kolom 1: Brand */}
          <div className="footer-col brand-col">
            <h3>AS.</h3>
            <p>
              Membangun konektivitas yang stabil dan aman untuk masa depan digital.
              Terbuka untuk kesempatan magang dan kolaborasi proyek.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="footer-col links-col">
            <h4>Navigasi</h4>
            <ul>
              <li><a href="#about">Tentang</a></li>
              <li><a href="#skills">Keahlian</a></li>
              <li><a href="#projects">Portofolio</a></li>
              <li><a href="/cv-amirah.pdf">Download CV</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="footer-col contact-col">
            <h4>Hubungi Saya</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className="f-icon"/> 
                <span>Lumajang, Jawa Timur</span>
              </li>
              <li>
                <FaEnvelope className="f-icon"/> 
                <span>amirah.tkj@smkn1lmj.sch.id</span>
              </li>
              <li>
                <FaWhatsapp className="f-icon"/> 
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
            <div className="social-row">
              <a href="#" aria-label="Github"><FaGithub/></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin/></a>
              <a href="#" aria-label="Instagram"><FaInstagram/></a>
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Amirah Syauqillah Harsono. Dibuat dengan React & Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;