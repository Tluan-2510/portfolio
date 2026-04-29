import './style.css';
import { renderHeader } from './components/Header';
import { renderHero } from './components/Hero';
import { renderBentoGrid } from './components/BentoGrid';
import { initAnimations, animatePageTransition } from './utils/animations';

const initApp = () => {
  // Initialize Theme
  initTheme();

  // Render Components
  renderHeader();
  renderHero();
  renderBentoGrid();
  
  // Render About, Skills & Contact (inline for now)
  renderAbout();
  renderSkills();
  renderContact();
  renderFooter();

  // Initialize Animations
  initAnimations();
  animatePageTransition();

  // Re-bind theme toggle after header render
  const themeToggle = document.querySelector('#theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Mobile Menu Logic
  const mobileToggle = document.querySelector('#mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('open');
      });
    });
  }
}

const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Optional: Trigger a small animation or feedback
};

const renderAbout = () => {
  const about = document.querySelector('#about');
  about.innerHTML = `
    <div class="about-grid">
      <div class="about-content reveal">
        <h2 class="gradient-text">About Me</h2>
        <p>
          Hello! I am a final-year student at the Ho Chi Minh City University of Transport. 
          I have a deep passion for programming and am dedicated to building modern, highly functional web and mobile applications.
        </p>
      </div>
      <div class="stats-grid">
        <div class="stat-item reveal" style="transition-delay: 0.2s">
          <span class="stat-number">UTH</span>
          <span class="stat-label">University</span>
        </div>
        <div class="stat-item reveal" style="transition-delay: 0.3s">
          <span class="stat-number">Senior</span>
          <span class="stat-label">Student</span>
        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-lg);
      align-items: center;
      padding: var(--space-xl) 0;
    }

    @media (min-width: 992px) {
      .about-grid {
        grid-template-columns: 1.5fr 1fr;
      }
    }

    .about-content h2 {
      font-size: clamp(2.5rem, 10vw, 3.5rem);
      margin-bottom: var(--space-md);
    }

    .about-content p {
      font-size: clamp(1rem, 4vw, 1.25rem);
      line-height: 1.7;
      color: var(--text-secondary);
      max-width: 700px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-sm);
    }

    @media (min-width: 640px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .stat-item {
      padding: var(--space-lg);
      background: var(--surface-color);
      border-radius: 24px;
      text-align: center;
      border: 1px solid var(--border-color);
      transition: var(--transition-base);
    }

    .stat-item:hover {
      transform: translateY(-5px);
      background: var(--surface-hover);
      border-color: var(--primary-color);
    }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 800;
      font-family: var(--font-heading);
      color: var(--primary-color);
      margin-bottom: 5px;
    }

    .stat-label {
      color: var(--text-muted);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  `;
  document.head.appendChild(style);
};

const renderSkills = () => {
  const skills = document.querySelector('#skills');
  skills.innerHTML = `
    <div class="skills-container reveal">
      <div class="skills-header text-center">
        <h2 class="gradient-text">Skills & Expertise</h2>
        <p class="section-subtitle">Building interactive, user-friendly applications with clean, maintainable code.</p>
      </div>
      
      <div class="skills-grid">
        <div class="skill-category glass">
          <div class="category-header">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <h3>Development</h3>
          </div>
          <p>Proficient in front-end frameworks like React and Next.js, complemented by experience in back-end technologies like Node.js and Express.</p>
          <div class="skill-tags">
            <div class="skill-tag">
              <img src="/assets/icons/javascript.svg" alt="JavaScript" class="skill-icon">
              <span>JavaScript</span>
            </div>
            <div class="skill-tag">
              <img src="/assets/icons/nodejs.svg" alt="Node.js" class="skill-icon">
              <span>Node.js</span>
            </div>
            <div class="skill-tag">
              <img src="/assets/icons/html.svg" alt="HTML" class="skill-icon">
              <span>HTML</span>
            </div>
            <div class="skill-tag">
              <img src="/assets/icons/css.svg" alt="CSS" class="skill-icon">
              <span>CSS</span>
            </div>
            <div class="skill-tag">
              <img src="/assets/icons/react.svg" alt="React" class="skill-icon">
              <span>React</span>
            </div>
            <div class="skill-tag">
              <img src="/assets/icons/nextjs.svg" alt="Next.js" class="skill-icon">
              <span>Next.js</span>
            </div>
            <div class="skill-tag">
              <img src="/assets/icons/cpp.svg" alt="C++" class="skill-icon">
              <span>C++</span>
            </div>
            <div class="skill-tag">
              <img src="/assets/icons/java.svg" alt="Java" class="skill-icon">
              <span>Java</span>
            </div>
            <div class="skill-tag">
              <img src="/assets/icons/postgresql.svg" alt="PostgreSQL" class="skill-icon">
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        <div class="skill-category glass">
          <div class="category-header">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <h3>Soft Skills</h3>
          </div>
          <div class="soft-skills-list">
            <div class="soft-skill">
              <strong>Communication & Collaboration</strong>
              <p>Strong interpersonal skills with a proactive attitude.</p>
            </div>
            <div class="soft-skill">
              <strong>Problem-Solving</strong>
              <p>Excellent ability to tackle technical challenges.</p>
            </div>
            <div class="soft-skill">
              <strong>Professionalism</strong>
              <p>Effective time management, reliability, and a fast learner.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #skills {
      padding: var(--space-xl) 0;
    }

    .skills-header {
      margin-bottom: var(--space-lg);
      text-align: center;
    }

    .skills-header h2 {
      font-size: clamp(2rem, 8vw, 3rem);
      margin-bottom: var(--space-xs);
    }

    .section-subtitle {
      color: var(--text-secondary);
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-md);
    }

    @media (min-width: 992px) {
      .skills-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .skill-category {
      padding: var(--space-lg);
      border-radius: 24px;
      border: 1px solid var(--border-color);
      transition: var(--transition-base);
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      margin-bottom: var(--space-md);
      color: var(--primary-color);
    }

    .category-header h3 {
      font-size: 1.5rem;
      color: var(--text-primary);
    }

    .skill-category p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: var(--space-md);
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .skill-tag {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0.6rem 1.2rem;
      background: var(--surface-hover);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      color: var(--text-secondary);
      font-size: 0.95rem;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      backdrop-filter: blur(10px);
    }

    .skill-tag:hover {
      background: var(--primary-color);
      border-color: var(--primary-color);
      color: white !important;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px var(--primary-glow);
    }

    [data-theme="light"] .skill-icon {
      filter: brightness(0.3) contrast(1.2);
      transition: filter 0.3s ease;
    }

    [data-theme="light"] .skill-tag:hover .skill-icon {
      filter: brightness(0) invert(1);
    }

    .skill-icon, .skill-tag svg {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }

    .soft-skills-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    .soft-skill strong {
      display: block;
      color: var(--primary-color);
      margin-bottom: 4px;
      font-size: 1rem;
    }

    .soft-skill p {
      margin-bottom: 0;
      font-size: 0.9rem;
    }
  `;
  document.head.appendChild(style);
};

const renderContact = () => {
  const contact = document.querySelector('#contact');
  contact.innerHTML = `
    <div class="contact-card glass reveal">
      <div class="contact-header">
        <h2 class="gradient-text">Ready to Float?</h2>
        <p>Let's discuss how we can bring your next idea to life with AI.</p>
      </div>
      <form class="contact-form">
        <div class="form-group">
          <input type="text" placeholder="Your Name" required>
        </div>
        <div class="form-group">
          <input type="email" placeholder="Your Email" required>
        </div>
        <div class="form-group">
          <textarea placeholder="Tell us about your project" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn-premium">Send Message</button>
      </form>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .contact-card {
      max-width: 800px;
      margin: 0 auto;
      padding: var(--space-lg);
    }

    .contact-header {
      text-align: center;
      margin-bottom: var(--space-lg);
    }

    .contact-header h2 {
      font-size: 3rem;
    }

    .contact-form {
      display: grid;
      gap: var(--space-sm);
    }

    .form-group input, .form-group textarea {
      width: 100%;
      padding: 1rem;
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      color: var(--text-primary);
      font-family: inherit;
      transition: var(--transition-base);
    }

    .form-group input:focus, .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      background: var(--surface-hover);
    }
  `;
  document.head.appendChild(style);
};

const renderFooter = () => {
  const footer = document.querySelector('#main-footer');
  footer.innerHTML = `
    <div class="container footer-content">
      <div class="footer-brand">
        <span class="gradient-text">Nguyễn Thành Luân</span>
        <p>© 2026 Nguyễn Thành Luân. All rights reserved.</p>
      </div>
      <div class="footer-links">
        <a href="#" class="social-link zalo">
          <span>Zalo</span>
        </a>
        <a href="#" class="social-link github">
          <span>Github</span>
        </a>
        <a href="#" class="social-link facebook">
          <span>Facebook</span>
        </a>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #main-footer {
      padding: var(--space-lg) 0;
      border-top: 1px solid var(--border-color);
      margin-top: var(--space-xl);
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-md);
    }

    .footer-logo p {
      color: var(--text-muted);
      font-size: 0.8rem;
      margin-top: 5px;
    }

    .footer-links {
      display: flex;
      gap: var(--space-md);
    }

    .social-link {
      color: var(--text-secondary);
      font-size: 0.9rem;
      transition: var(--transition-base);
    }

    .social-link:hover {
      color: var(--primary-color);
      transform: translateY(-2px);
    }
  `;
  document.head.appendChild(style);
};

initApp();
