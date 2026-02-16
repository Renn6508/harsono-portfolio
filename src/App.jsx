import { useEffect, useState } from 'react';
import './App.css';
import { projectsData, skillsData, strengthsData } from './data.js';

// Import Icons
import { 
  FaNetworkWired, FaServer, FaTerminal, 
  FaGithub, FaInstagram, FaLinkedin, FaEnvelope,
  FaArrowRight, FaCheckCircle, FaDownload, 
  FaMapMarkerAlt, FaWhatsapp, FaGlobe, FaChevronDown
} from 'react-icons/fa';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('id'); // 'id' or 'en'
  const [showLangMenu, setShowLangMenu] = useState(false);

  // --- KAMUS BAHASA (TRANSLATION) ---
  const t = {
    id: {
      nav: { about: "Tentang", value: "Keunggulan", skills: "Skill", projects: "Portofolio" },
      btn_cv: "Unduh CV",
      hero: {
        badge: "Siap Bekerja",
        role: "Network Engineer & SysAdmin",
        desc: "Siswi SMKN 1 Lumajang jurusan Teknik Komputer & Jaringan. Ahli dalam topologi jaringan, manajemen server, dan troubleshooting.",
        btn_project: "Lihat Project",
        btn_skill: "Cek Skill"
      },
      section_why: { sub: "KENAPA SAYA?", title: "Nilai Lebih" },
      section_skill: { sub: "HARD SKILLS", title: "Keahlian Teknis" },
      section_proj: { sub: "PORTOFOLIO", title: "Project Pilihan" },
      footer: {
        brand_desc: "Membangun konektivitas yang stabil dan aman. Terbuka untuk kolaborasi dan magang.",
        menu_title: "Menu",
        contact_title: "Kontak"
      }
    },
    en: {
      nav: { about: "About", value: "Values", skills: "Skills", projects: "Portfolio" },
      btn_cv: "Download CV",
      hero: {
        badge: "Ready to Work",
        role: "Network Engineer & SysAdmin",
        desc: "Student at SMKN 1 Lumajang majoring in Computer & Network Engineering. Expert in network topology, server management, and troubleshooting.",
        btn_project: "View Projects",
        btn_skill: "Check Skills"
      },
      section_why: { sub: "WHY ME?", title: "My Values" },
      section_skill: { sub: "HARD SKILLS", title: "Technical Skills" },
      section_proj: { sub: "PORTFOLIO", title: "Selected Projects" },
      footer: {
        brand_desc: "Building stable and secure connectivity. Open for collaboration and internships.",
        menu_title: "Menu",
        contact_title: "Contact"
      }
    }
  };

  const text = t[language]; // Shortcut pemanggil teks

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest('.lang-dropdown')) setShowLangMenu(false);
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (
    <div className="app-container">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="bg-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`confetti c-${i % 3}`}></div>
        ))}
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">AS<span className="dot">.</span></div>
        
        <div className="nav-links">
          <a href="#about">{text.nav.about}</a>
          <a href="#strengths">{text.nav.value}</a>
          <a href="#skills">{text.nav.skills}</a>
          <a href="#projects">{text.nav.projects}</a>
        </div>

        <div className="nav-actions">
          {/* CUSTOM LANGUAGE DROPDOWN */}
          <div className="lang-dropdown">
            <button 
              className="lang-btn" 
              onClick={() => setShowLangMenu(!showLangMenu)}
            >
              <FaGlobe /> {language.toUpperCase()} <FaChevronDown size={10} className={`chevron ${showLangMenu ? 'rotate' : ''}`}/>
            </button>
            
            <div className={`lang-menu ${showLangMenu ? 'show' : ''}`}>
              <div 
                className={`lang-item ${language === 'id' ? 'active' : ''}`} 
                onClick={() => {setLanguage('id'); setShowLangMenu(false)}}
              >
                <span className="flag">🇮🇩</span> Indonesia
              </div>
              <div 
                className={`lang-item ${language === 'en' ? 'active' : ''}`} 
                onClick={() => {setLanguage('en'); setShowLangMenu(false)}}
              >
                <span className="flag">🇬🇧</span> English
              </div>
            </div>
          </div>

          {/* Tombol CV */}
          <a href="/cv-amirah.pdf" download className="btn-cv">
             {text.btn_cv} <FaDownload className="icon-sm"/>
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero" id="about">
        <div className="hero-content">
          <div className="badge-pill">
             <span className="pulsing-dot"></span> {text.hero.badge}
          </div>
          <h1 className="name">Amirah Syauqillah H.</h1>
          <h2 className="role">{text.hero.role}</h2>
          <p className="hero-desc">{text.hero.desc}</p>
          
          <div className="hero-actions">
             <a href="#projects" className="btn-primary">{text.hero.btn_project} <FaArrowRight/></a>
             <a href="#skills" className="btn-secondary">{text.hero.btn_skill}</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        
        {/* --- STRENGTHS --- */}
        <section id="strengths" className="section">
          <div className="section-header">
            <span className="section-subtitle">{text.section_why.sub}</span>
            <h2 className="section-title">{text.section_why.title}</h2>
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

        {/* --- SKILLS --- */}
        <section id="skills" className="section">
          <div className="section-header">
             <span className="section-subtitle">{text.section_skill.sub}</span>
             <h2 className="section-title">{text.section_skill.title}</h2>
          </div>
          <div className="skills-wrapper">
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

        {/* --- PROJECTS --- */}
        <section id="projects" className="section">
          <div className="section-header">
            <span className="section-subtitle">{text.section_proj.sub}</span>
            <h2 className="section-title">{text.section_proj.title}</h2>
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
            <p>{text.footer.brand_desc}</p>
          </div>

          <div className="footer-col links-col">
            <h4>{text.footer.menu_title}</h4>
            <ul>
              <li><a href="#about">{text.nav.about}</a></li>
              <li><a href="#skills">{text.nav.skills}</a></li>
              <li><a href="#projects">{text.nav.projects}</a></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>{text.footer.contact_title}</h4>
            <ul>
              <li><FaMapMarkerAlt className="f-icon"/> Jl.Cempaka No 3, Jogotrunan, Lumajang, Jawa Timur</li>
              <li><FaEnvelope className="f-icon"/> syauqillahamira@gmail.com</li>
              <li><FaWhatsapp className="f-icon"/> +62 812-5217-0084</li>
            </ul>
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