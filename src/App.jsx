
import React, { useEffect } from 'react';
import './App.css';
import profileImage from './assets/profile.jpeg';


const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Portfolio</h1>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section
      <section className="hero">
        <div className="container fade-in">
          <h1 className="hero-title">
            Hi, I'm  <span className="highlight">Abhinaya Sapkota</span> </h1>
          <p className="hero-subtitle">Building digital experiences</p>
        </div>
      </section> */}
      <section className="hero">
          <div className="container fade-in">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Abhinaya Sapkota</span>
           </h1>
           <p className="hero-subtitle">Building digital experiences</p>
           <img src={profileImage} alt="My Profile" className="profile-pic" />
        </div>
      </section>


      {/* Skills Section */}
      <section id="about" className="section">
        <div className="container fade-in">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              Passionate developer with expertise in modern web technologies. 
              Specializing in creating performant and user-friendly applications.
            </p>
            <div className="skills-grid">
              {['React', 'JavaScript', 'Node.js', 'Python', 'CSS', 'Git'].map((skill) => (
                <div key={skill} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container fade-in">
          <h2 className="section-title">Featured Work</h2>
          <div className="projects-grid">
            {[1, 2, 3].map((project) => (
              <div key={project} className="project-card">
                <div className="project-image"></div>
                <h3>Project {project}</h3>
                <p>Description of project and technologies used.</p>
                <div className="project-links">
                  <a href="#" className="link-button">Demo</a>
                  <a href="#" className="link-button">Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container fade-in">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <p>Let's build something amazing together!</p>
            <a href="mailto:you@example.com" className="cta-button">
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
              <a key={platform} href="#" className="social-link">{platform}</a>
            ))}
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Your Name</p>
        </div>
      </footer>
    </div>
  );
};

export default App;