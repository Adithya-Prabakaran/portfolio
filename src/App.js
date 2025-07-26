import './App.css';
import profile from './profile-page.avif';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  return (
    <div id="body1">
      <header>
        <nav>
          <a href='#about-me' className='nav-link'>About</a>
          <a href='#qualifications' className='nav-link'>Skills</a>
          <a href='#projects' className='nav-link'>Projects</a>
          <a href='#contacts' className='nav-link'>Contact</a>
        </nav>
      </header>
      
      {/* Home section is adjusted for your gradient text style */}
      <section id='home'>
        <div id='hmt1' className='hidden'>
          Hi, I am Adithya <br />
          Welcome to my Portfolio
        </div>
      </section>

      <section id="about-me" className='hidden'>
        <h2 className='section-title'>About Me</h2>
        <div className='about-container'>
          <img src={profile} alt="profile pic" id='image1' />
          <div className="about-text">
            <p>
              I'm a pre-third-year IT student with a genuine passion for creating websites that users enjoy. My sweet spot is full-stack development using Node.js, where I've built several projects from responsive landing pages to dynamic web applications.
            </p>
            <p>
              Beyond web technologies, I'm comfortable with Python, C++, and Java, which have strengthened my logical thinking. I'm actively looking for opportunities to contribute to real projects and grow within a collaborative team.
            </p>
          </div>
        </div>
      </section>

      <section id='qualifications' className='hidden'>
        <h2 className='section-title'>My Skills</h2>
        <div id='skills-container'>
          <div className='skill-card hidden'>
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li>
              <li>C & C++</li>
              <li>Java</li>
            </ul>
          </div>
          <div className='skill-card hidden'>
            <h3>Web Development</h3>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Node.js & Express</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className='skill-card hidden'>
            <h3>Databases & Tools</h3>
            <ul>
              <li>PL/SQL</li>
              <li>MongoDB</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='projects' className='hidden'>
        <h2 className='section-title'>My Projects</h2>
        <div className='project-card'>
          <div className='project-header'>
            <h3><a href='https://github.com/Adithya-Prabakaran/Fitflex' target="_blank" rel="noopener noreferrer">Fitflex - Diet & Calorie Planner</a></h3>
          </div>
          <div className='project-body'>
            <p>A comprehensive web app that empowers users to plan their diet and monitor daily caloric intake. Features a robust food database and an intuitive interface for tracking nutritional goals.</p>
            <div className='project-tech'>
              <strong>Tech Stack:</strong>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      <section id='contacts' className='hidden'>
        <h2 className='section-title'>Get In Touch</h2>
        <p className='contact-intro'>I'm always open to discussing new projects or opportunities. Feel free to reach out!</p>
        <div id='contact-details'>
          <a href="mailto:adithya.prabakaran85@gmail.com" className="contact-link">adithya.prabakaran85@gmail.com</a>
          <a href="https://github.com/Adithya-Prabakaran" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub Profile</a>
          <p className="contact-link">Phone: 123-456-7890</p>
        </div>
      </section>
    </div>
  );
}

export default App;