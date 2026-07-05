import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiDjango, SiFiverr } from 'react-icons/si';

// Assets Imports
import pic from '../assets/pic.png';     // LGU University
import pic2 from '../assets/pic2.png';   // MAO College
import car from '../assets/car.png';
import ai from '../assets/ai.jpeg';
import grocery3 from '../assets/grocery3.jpeg';

const About = () => {
  return (
    <div className="about-container">
      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-content">
          <h1>About Me</h1>
          <div className="intro-text">
            <p>
              My name is <strong>Muhammad Hassan Ali</strong>. I have completed my Bachelor of Science in Computer Science from <strong>Lahore Garrison University (LGU)</strong> in 2026. 
              I am a passionate Full Stack Developer with expertise in both frontend and backend technologies.
            </p>
            <p>
              I possess hands-on experience in various programming languages and frameworks. My problem-solving skills and ability to learn new technologies quickly 
              have helped me deliver high-quality solutions. I am particularly interested in building scalable web applications and integrating AI capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <h2>Technologies I Use</h2>
        <div className="tech-grid">
          <div className="tech-item"><FaHtml5 className="tech-icon" /><span>HTML5</span></div>
          <div className="tech-item"><FaCss3Alt className="tech-icon" /><span>CSS3</span></div>
          <div className="tech-item"><FaJs className="tech-icon" /><span>JavaScript</span></div>
          <div className="tech-item"><FaReact className="tech-icon" /><span>React.js</span></div>
          <div className="tech-item"><FaNodeJs className="tech-icon" /><span>Node.js</span></div>
          <div className="tech-item"><SiExpress className="tech-icon" /><span>Express.js</span></div>
          <div className="tech-item"><SiMongodb className="tech-icon" /><span>MongoDB</span></div>
          <div className="tech-item"><SiMysql className="tech-icon" /><span>MySQL</span></div>
          <div className="tech-item"><SiDjango className="tech-icon" /><span>Django</span></div>
          <div className="tech-item"><FaPython className="tech-icon" /><span>Python</span></div>
          <div className="tech-item"><FaDatabase className="tech-icon" /><span>AI Prompt Engineering</span></div>
          <div className="tech-item"><SiFiverr className="tech-icon" /><span>Fiverr</span></div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="edu-image"><img src={pic} alt="LGU University" /></div>
            <div className="edu-content">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="institution">Lahore Garrison University (LGU)</p>
              <p className="year">2022 - 2026</p>
            </div>
          </div>
          
          <div className="education-card">
            <div className="edu-image"><img src={pic2} alt="MAO College" /></div>
            <div className="edu-content">
              <h3>Intermediate (F.Sc Pre-Engineering)</h3>
              <p className="institution">MAO College</p>
              <p className="year">2020 - 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Full Stack Web Development</h3>
            <p>Developed multiple web applications using MERN stack, Django, and various other technologies. Created responsive and scalable solutions for clients worldwide.</p>
          </div>
          <div className="experience-card">
            <h3>AI & Machine Learning</h3>
            <p>Worked on AI projects including Machine Learning and Deep Learning models. Implemented neural networks and AI solutions for various applications.</p>
          </div>
          <div className="experience-card">
            <h3>Web Development Instructor</h3>
            <p>Taught web development to students covering HTML, CSS, JavaScript, Python, and various frameworks.</p>
          </div>
          <div className="experience-card">
            <h3>Sales & Purchase Management</h3>
            <p>Managed sales and purchase operations with custom software solutions. Streamlined inventory management.</p>
          </div>
          <div className="experience-card">
            <h3>Fiverr Freelancing</h3>
            <p>Successfully delivered numerous projects on Fiverr including web development and AI integration.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image"><img src={grocery3} alt="FYP" /></div>
            <div className="project-content">
              <h3>Full Stack FYP</h3>
              <p>Developed a comprehensive full-stack application using MERN stack.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image"><img src={ai} alt="AI Chatbot" /></div>
            <div className="project-content">
              <h3>AI Chatbot</h3>
              <p>Created an intelligent chatbot using Groq API with advanced AI capabilities.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image"><img src={car} alt="Grocery" /></div>
            <div className="project-content">
              <h3>Grocery Website</h3>
              <p>Built a complete grocery e-commerce platform with payment integration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;