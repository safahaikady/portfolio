import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">Safa.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">

        <div className="home-content">

          <p className="hello">Hello, I'm</p>

          <h1>Safa</h1>

          <h2>Computer Science Engineering Student</h2>

          <p>
  I am a Computer Science Engineering student passionate about
  software development and web technologies. I enjoy building
  practical projects, solving problems and continuously learning
  new technologies.
</p>

          <div className="buttons">

            <a href="#projects" className="btn">
              View My Projects
            </a>

            

          </div>

          <div className="social-links">

            <a
  href="https://github.com/safahaikady"
  target="_blank"
  rel="noreferrer"
>
  GitHub
</a>

           <a
  href="https://www.linkedin.com/in/safa-519608384/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn
</a>

          </div>

        </div>

        <div className="home-image">
          <img
            src="/profile.jpg"
            alt="Safa"
          />
        </div>

      </section>


      {/* About Section */}
      <section id="about" className="section about-section">

        <h2>About Me</h2>

        <div className="about-container">

          <div className="about-text">

            <p>
              I am a Computer Science Engineering student with an interest
              in software development, web development and artificial
              intelligence.
            </p>

            <p>
              I enjoy building practical projects, learning new technologies
              and improving my programming and problem-solving skills.
            </p>

            <p>
              I am always looking for opportunities to learn, collaborate
              and apply my technical knowledge to real-world problems.
            </p>

          </div>

          <div className="about-info">

            <div className="info-card">
              <h3>Education</h3>
              <p>B.E. Computer Science & Engineering</p>
            </div>

            <div className="info-card">
              <h3>Interests</h3>
              <p>Software Development • Web Development • AI</p>
            </div>

            <div className="info-card">
              <h3>Currently Learning</h3>
              <p>Java • Python • Web Technologies</p>
            </div>

          </div>

        </div>

      </section>


      {/* Skills Section */}
      <section id="skills" className="section skills-section">

        <h2>Skills</h2>

        <div className="skills-container">

          <div className="skill-category">
            <h3>Programming</h3>

            <div className="skill-list">
              <span>Java</span>
              <span>Python</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Web & Database</h3>

            <div className="skill-list">
              <span>HTML</span>
              <span>MySQL</span>
              <span>Pandas</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>

        </div>

      </section>


      {/* Projects Section */}
      <section id="projects" className="section projects-section">

        <h2>Projects</h2>

        <div className="projects">

          {/* Food Menu Management System */}
          <div className="project-card">

            <h3>Food Menu Management System</h3>

            <p>
              A web-based restaurant menu management and ordering system
              with separate customer and admin functionality.
            </p>

            <p className="tech">
              HTML • CSS • JavaScript • Node.js • MySQL
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/safahaikady/Food-Menu-Management-System"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                GitHub
              </a>

            </div>

          </div>


          {/* HotelEase */}
          <div className="project-card">

            <h3>HotelEase</h3>

            <p>
              A hotel management application designed to simplify
              hotel-related operations using object-oriented programming.
            </p>

            <p className="tech">
              Java • OOP
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/safahaikady"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                GitHub
              </a>

            </div>

          </div>


          {/* TradeVault */}
          <div className="project-card">

            <h3>TradeVault</h3>

            <p>
              A console-based Java stock trading and portfolio management
              system that simulates buying, selling and managing stocks
              and transactions.
            </p>

            <p className="tech">
              Java • OOP • ArrayList • File I/O
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/safahaikady/CodeAlpha_TradeVault"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                GitHub
              </a>

            </div>

          </div>


          {/* Student Grade Tracker */}
          <div className="project-card">

            <h3>Student Grade Tracker</h3>

            <p>
              A Java application for calculating and tracking student
              grades and academic performance.
            </p>

            <p className="tech">
              Java • OOP
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/safahaikady"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* Experience Section */}
      <section id="experience" className="section experience-section">

        <h2>Experience</h2>

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <h3>Software Development Intern</h3>
              <p className="company">CodeAlpha</p>
            </div>

            <p className="duration">2026</p>

          </div>

          <ul>
            <li>
              Developed Java-based applications using Object-Oriented Programming.
            </li>

            <li>
              Worked on projects including HotelEase, TradeVault and Student Grade Tracker.
            </li>

            <li>
              Applied programming concepts to build practical software solutions.
            </li>

            <li>
              Used Git and GitHub for project development and version control.
            </li>
          </ul>

        </div>

      </section>


      {/* Contact Section */}
      <section id="contact" className="section contact">

        <h2>Let's Connect</h2>

        <p>
          I'm always open to learning, collaborating and discussing
          new opportunities and projects.
        </p>

        <div className="contact-links">

          <a
            href="mailto:your-email@example.com"
            className="contact-card"
          >
            <h3>Email</h3>
            <p>haikadysaf@gmail.com</p>
          </a>

          <a
            href="https://github.com/safahaikady"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>GitHub</h3>
            <p>github.com/safahaikady</p>
          </a>

    <a
  href="https://www.linkedin.com/in/safa-519608384/"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>
  <h3>LinkedIn</h3>
  <p>Connect with me</p>
</a>

        </div>

      </section>


      {/* Footer */}
      <footer>
        <p>© 2026 Safa. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;