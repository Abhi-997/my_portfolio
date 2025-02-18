// import React, { useEffect } from 'react';
// import './App.css';
// import profileImage from './assets/profile.jpeg';

// const App = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll('.fade-in');
//       elements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         if (elementTop < window.innerHeight - 100) {
//           element.classList.add('visible');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="app">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="container">
//           <h1 className="logo">Portfolio</h1>
//           <ul className="nav-links">
//             <li><a href="#about">About</a></li>
//             <li><a href="#projects">Work</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
//       </nav>

// {/*          {/* Hero Section */}
//       <section className="hero">
//         <div className="container fade-in">
//           <h1 className="hero-title">
//             Hi, I'm <span className="highlight">Abhinaya Sapkota</span>
            
//           </h1>

//            <p className="hero-subtitle">Building digital experiences</p> 
//           <img src={profileImage} alt="My Profile" className="profile-pic" />
//         </div>
//       </section> 


//       {/* Skills Section */}
//       <section id="about" className="section">
//         <div className="container fade-in">
//           <h2 className="section-title">About Me</h2>
//           <div className="about-content">
//             <p className="about-text">
//               Passionate developer with expertise in modern web technologies.
//               Specializing in creating performant and user-friendly applications.
//             </p>
//             <div className="skills-grid">
//               {['React', 'JavaScript', 'Node.js', 'Python', 'CSS', 'Git'].map((skill) => (
//                 <div key={skill} className="skill-item">{skill}</div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="section">
//         <div className="container fade-in">
//           <h2 className="section-title">Featured Work</h2>
//           <div className="projects-grid">
//             {[1, 2, 3].map((project) => (
//               <div key={project} className="project-card">
//                 <div className="project-image"></div>
//                 <h3>Project {project}</h3>
//                 <p>Description of project and technologies used.</p>
//                 <div className="project-links">
//                   <a href="#" className="link-button">Demo</a>
//                   <a href="#" className="link-button">Code</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section">
//         <div className="container fade-in">
//           <h2 className="section-title">Get in Touch</h2>
//           <div className="contact-content">
//             <p>Let's build something amazing together!</p>
//             <p>Email: <a href="mailto:abhinayasapkota38@gmail.com">abhinayasapkota38@gmail.com</a></p>

//             <a href="mailto:you@example.com" className="cta-button">
//               Send Message
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="social-links">
//             {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
//               <a
//                 key={platform}
//                 href={
//                   platform === 'GitHub'
//                     ? 'https://github.com/your-username' // Replace with your GitHub URL
//                     : platform === 'LinkedIn'
//                     ? 'https://www.linkedin.com/in/your-profile' // Replace with your LinkedIn URL
//                     : '#' // Add Twitter URL if desired
//                 }
//                 className="social-link"
//                 target="_blank" // Opens link in a new tab
//                 rel="noopener noreferrer" // Security best practice
//               >
//                 {platform}
//               </a>
//             ))}
//           </div>
//           <p className="copyright">&copy; {new Date().getFullYear()} Your Name</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from 'react';
import './App.css';
import profileImage from './assets/profile.jpeg';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Fade-in animation logic
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });

      // Active section detection
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack React application with Node.js backend",
      tech: ["React", "Node.js", "MongoDB"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management system",
      tech: ["React", "Firebase", "Material UI"],
      links: {
        demo: "#",
        code: "#"
      }
    }
  ];

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">AS</h1>
          <ul className="nav-links">
            {['about', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`} 
                  className={activeSection === section ? 'active' : ''}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container fade-in">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Abhinaya Sapkota</span>
            </h1>
            <p className="hero-subtitle">Full-Stack Developer & UI Enthusiast</p>
            <div className="social-links hero-social">
              <a href="https://github.com/Abhi-997" target="_blank" rel="noopener">GitHub</a>
              <a href="https://www.linkedin.com/in/abhinaya-sapkota-6887072b2/" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://twitter.com/your-handle" target="_blank" rel="noopener">Twitter</a>
            </div>
          </div>
          <img src={profileImage} alt="Abhinaya Sapkota" className="profile-pic" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="section">
        <div className="container fade-in">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'MongoDB'].map((skill) => (
              <div key={skill} className="skill-item">
                {skill}
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container fade-in">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image"></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-item">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.demo} className="link-button">Live Demo</a>
                  <a href={project.links.code} className="link-button">View Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container fade-in">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © {new Date().getFullYear()} Abhinaya Sapkota. All rights reserved.
          </p>
        </div>
      </footer>

      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </div>
  );
};

export default App;