export const renderBentoGrid = () => {
  const projects = document.querySelector('#projects');
  
  const projectsData = [
    {
      id: 'utility-tools',
      title: 'Utility Tools Hub',
      description: 'A modern, SEO-optimized suite of essential web tools including image converters, password generators, and more.',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide'],
      image: '/assets/projects/utility-tools.png',
      github: 'https://github.com/Tluan-2510/utility_tools.git',
      demo: '#',
      size: 'large'
    },
    {
      id: 'aura-music',
      title: 'Aura Music',
      description: 'Premium glassmorphic music player experience with seamless playback, dynamic profiles, and real-time database.',
      tech: ['Next.js 15', 'Prisma', 'Zustand', 'NextAuth'],
      image: '/assets/projects/aura-music.png',
      github: 'https://github.com/Tluan-2510/music-web.git',
      demo: '#',
      size: 'medium'
    }
  ];

  projects.innerHTML = `
    <div class="section-header reveal" style="margin-top: var(--space-xl);">
      <h2 class="gradient-text">Featured Projects</h2>
      <p>Exploring the intersection of AI, Design, and Motion.</p>
    </div>
    
    <div class="projects-grid">
      ${projectsData.map(project => `
        <div class="project-card antigravity-card reveal ${project.size}" id="${project.id}">
          <div class="project-image-container">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-overlay">
              <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link-icon" title="View Source">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="${project.demo}" class="project-link-icon" title="Live Demo">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <div class="project-tags">
              ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-md);
      padding: var(--space-lg) 0;
    }

    @media (min-width: 992px) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .project-card {
      background: var(--surface-color);
      border-radius: 32px;
      overflow: hidden;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .project-image-container {
      position: relative;
      width: 100%;
      aspect-ratio: 16/9;
      overflow: hidden;
    }

    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s var(--ease-antigravity);
    }

    .project-card:hover .project-image {
      transform: scale(1.1);
    }

    .project-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-links {
      display: flex;
      gap: var(--space-sm);
    }

    .project-link-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--primary-color);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: var(--transition-fast);
    }

    .project-link-icon:hover {
      transform: scale(1.1) rotate(10deg);
      box-shadow: 0 0 20px var(--primary-glow);
    }

    .project-content {
      padding: var(--space-md);
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: var(--space-sm);
    }

    .tag {
      font-size: 0.75rem;
      padding: 4px 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-color);
      border-radius: 100px;
      color: var(--text-secondary);
    }

    .project-content h3 {
      font-size: 1.5rem;
      margin-bottom: var(--space-xs);
      color: var(--text-primary);
    }

    .project-content p {
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  `;
  document.head.appendChild(style);
};

