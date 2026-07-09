import React from 'react';
import {
  FaCode, FaReact, FaMobileAlt, FaPaintBrush, FaBug, FaBolt,
  FaEnvelope, FaCheckCircle, FaRocket
} from 'react-icons/fa';

const services = [
  { icon: <FaCode />, text: 'Complete Web Application Development' },
  { icon: <FaReact />, text: 'React.js Projects' },
  { icon: <FaMobileAlt />, text: 'Responsive Website Design' },
  { icon: <FaPaintBrush />, text: 'UI/UX Improvements' },
  { icon: <FaRocket />, text: 'Landing Pages' },
  { icon: <FaCode />, text: 'Portfolio Websites' },
  { icon: <FaBug />, text: 'Bug Fixing & Code Optimization' },
  { icon: <FaCode />, text: 'HTML, CSS & JavaScript Projects' },
  { icon: <FaPaintBrush />, text: 'Bootstrap & Tailwind CSS' },
  { icon: <FaBolt />, text: 'API Integration' },
  { icon: <FaBolt />, text: 'Performance Optimization' },
];

const whyMe = [
  'Clean & Well Structured Code',
  'Mobile Friendly Responsive Design',
  'Modern UI/UX',
  'Fast Delivery',
  'Affordable Pricing',
  'Unlimited Support During Project',
  'Friendly Communication',
  'Client Satisfaction is My Priority',
];

const faqs = [
  {
    q: 'What technologies do you use?',
    a: 'HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS, Git and modern frontend tools.',
  },
  {
    q: 'Can you build a complete web application?',
    a: 'Yes. I can develop complete responsive web applications from scratch according to your requirements.',
  },
  {
    q: 'Can you fix existing code?',
    a: 'Absolutely! I can fix bugs, improve performance, redesign UI, and optimize your existing project.',
  },
  {
    q: 'Are you available for urgent work?',
    a: "Yes. I'm available 24/7 for urgent tasks and long-term projects.",
  },
  {
    q: 'Do you work remotely?',
    a: "Yes, I work remotely with clients worldwide and I'm also available for on-site opportunities when required.",
  },
  {
    q: 'How can I contact you?',
    a: 'You can contact me through my email listed above.',
  },
];

function HireMe() {
  return (
    <div className="hire-container">

      {/* Hero */}
      <section className="hire-hero">
        <span className="eyebrow">Available for work</span>
        <h1>Hire Me</h1>
        <h2>After viewing my portfolio, I'm here to work with you!</h2>
        <p>
          If you need a professional developer for your project, you've come to
          the right place. Whether you need a complete website, a React.js web
          application, bug fixing, UI/UX improvements, or a fully responsive
          design, I'm ready to help.
        </p>
        <p>
          I can work on both <strong>Remote</strong> and <strong>On-Site</strong>{' '}
          projects. My goal is to deliver high-quality work at an affordable
          price while meeting deadlines and ensuring client satisfaction.
        </p>
        <div className="hero-actions">
          <a href="mailto:mhassan2u12@gmail.com" className="btn btn-primary">
            <FaEnvelope /> Email Me
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2 className="section-title"> Services I Offer</h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <span className="service-icon">{s.icon}</span>
              <span>{s.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-info">
        <h2 className="section-title"> Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <p className="contact-label">Email</p>
              <p className="contact-value">mhassan2u12@gmail.com</p>
            </div>
          </div>
        </div>
        <p className="contact-note">
          Feel free to contact me anytime. I usually respond very quickly and
          I'm always happy to discuss your project.
        </p>
      </section>

      {/* Why Me */}
      <section className="why-me">
        <h2 className="section-title"> Why Choose Me?</h2>
        <div className="why-grid">
          {whyMe.map((item, i) => (
            <div className="why-item" key={i}>
              <FaCheckCircle className="why-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2 className="section-title">❓ Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <details className="faq-item" key={i}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-message">
        <h2>Let's Build Something Amazing Together 🚀</h2>
        <p>
          Thank you for visiting my portfolio. If you're looking for a reliable,
          dedicated, and passionate web developer, I'd love to work with you.
          Let's turn your ideas into reality.
        </p>
      </section>

    </div>
  );
}

export default HireMe;