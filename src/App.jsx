import { useEffect, useState } from 'react';
import './App.css';
import { projectsData, skillsData, strengthsData } from './data.js';

// Import Icons
import { 
  FaNetworkWired, FaServer, FaTerminal, 
  FaGithub, FaInstagram, FaLinkedin, FaEnvelope,
  FaArrowRight, FaCheckCircle, FaDownload, 
  FaMapMarkerAlt, FaWhatsapp, FaFilePdf
} from 'react-icons/fa';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Email Autofill  ---
  const handleEmailClick = () => {
    const email = "syauqillahamira@gmail.com";
    const subject = "Tawaran Kerjasama / Magang"; // Judul otomatis
    const body = "Halo Amirah Syauqillah Harsono, saya tertarik dengan profil Anda dan ingin berdiskusi mengenai..."; // Isi pesan otomatis
    
    // Membuka Gmail Web di Tab Baru
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="app-container">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="bg-decoration">
        <div className="grid-pattern"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="geo-shape shape-triangle"></div>
        <div className="geo-shape shape-circle"></div>
        <div className="geo-shape shape-square"></div>
        <div className="geo-shape shape-cross"></div>
      </div>

      {/* --- NAVBAR BERSIH --- */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">AS<span className="dot">.</span></div>
        
        <div className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#strengths">Keunggulan</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Portofolio</a>
        </div>

        <div className="nav-actions">
          <a href="/cv-amirah.pdf" download className="btn-cv">
             Download CV <FaDownload className="icon-sm"/>
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero" id="about">
        <div className="hero-content">
          <div className="badge-pill">
             <span className="pulsing-dot"></span> Ready For Internship
          </div>
          <h1 className="name">Amirah Syauqillah H.</h1>
          <h2 className="role">Network Engineer & SysAdmin</h2>
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
        
        {/* --- STRENGTHS --- */}
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

        {/* --- SKILLS --- */}
        <section id="skills" className="section">
          <div className="section-header">
             <span className="section-subtitle">HARD SKILLS</span>
             <h2 className="section-title">Tingkat Keahlian</h2>
          </div>
          
          <div className="skills-wrapper">
            {/* Networking Column */}
            <div className="skill-col">
              <div className="skill-header">
                <FaNetworkWired className="s-icon"/> 
                <h3>Network Infrastructure</h3>
              </div>
              <div className="skill-bars-container">
                {skillsData.networking.map((skill, idx) => (
                  <div key={idx} className="skill-bar-item">
                    <div className="sb-info">
                      <span className="sb-name">{skill.name}</span>
                      <span className="sb-perc">{skill.level}%</span>
                    </div>
                    <div className="sb-track">
                      <div className="sb-fill" style={{width: `${skill.level}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Column */}
            <div className="skill-col">
              <div className="skill-header">
                <FaTerminal className="s-icon"/> 
                <h3>Tools & Administration</h3>
              </div>
              <div className="skill-bars-container">
                {skillsData.tools.map((skill, idx) => (
                  <div key={idx} className="skill-bar-item">
                    <div className="sb-info">
                      <span className="sb-name">{skill.name}</span>
                      <span className="sb-perc">{skill.level}%</span>
                    </div>
                    <div className="sb-track">
                      <div className="sb-fill" style={{width: `${skill.level}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
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
                  
                  {/* Tombol PDF Project */}
                  <a href={project.pdf} download className="btn-project-pdf">
                     <FaFilePdf /> Download Dokumen
                  </a>

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
            <p>Membangun konektivitas yang stabil dan aman. Terbuka untuk kolaborasi dan magang.</p>
            <div className="social-row">
              <a href="#" className="soc-link github" aria-label="Github"><FaGithub/></a>
              <a href="#" className="soc-link linkedin" aria-label="LinkedIn"><FaLinkedin/></a>
              <a href="#" className="soc-link instagram" aria-label="Instagram"><FaInstagram/></a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h4>Menu</h4>
            <ul>
              <li><a href="#about">Tentang</a></li>
              <li><a href="#strengths">Keunggulan</a></li>
              <li><a href="#skills">Skill</a></li>
              <li><a href="#projects">Portofolio</a></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Kontak</h4>
            <ul>
              <li><FaMapMarkerAlt className="f-icon"/> Jl.Cempaka No 3, Lumajang, Jawa Timur</li>
              <li><FaEnvelope className="f-icon"/> syauqillahamira@gmail.com</li>
              <li><FaWhatsapp className="f-icon"/> +62 812-5217-0084</li>
            </ul>
          </div>

          {/* BAGIAN YANG DIUBAH: EMAIL ME (Menggunakan JavaScript Handler) */}
          <div className="footer-col newsletter-col">
            <h4>Email Me</h4>
            <p>Tertarik merekrut? Klik tombol di bawah untuk mengirim tawaran via Gmail.</p>
            <div style={{ marginTop: '20px' }}>
              <button 
                onClick={handleEmailClick} 
                className="btn-cv" 
                style={{ 
                  justifyContent: 'center', 
                  width: '100%', 
                  borderRadius: '12px',
                  cursor: 'pointer',
                  border: 'none', // Menghapus border default button
                  fontSize: '1rem', // Menyesuaikan font
                  fontFamily: 'inherit'
                }}
              >
                Kirim Email <FaEnvelope />
              </button>
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Amirah Syauqillah Harsono. Made with React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;