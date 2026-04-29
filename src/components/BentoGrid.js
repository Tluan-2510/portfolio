export const renderBentoGrid = () => {
  const projects = document.querySelector('#projects');
  projects.innerHTML = `
    <div class="section-header" style="margin-top: var(--space-xl);">
      <h2 class="gradient-text">Featured Projects</h2>
      <p>Exploring the intersection of AI, Design, and Motion.</p>
    </div>
    <div class="empty-state reveal">
      <div class="empty-state-content glass">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </div>
        <h3>The lab is currently experimenting</h3>
        <p>New digital experiences are currently under development. Stay tuned for upcoming innovative projects that defy gravity.</p>
        <div class="loading-bar">
          <div class="loading-progress"></div>
        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .empty-state {
      padding: var(--space-xl) 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
    }

    .empty-state-content {
      padding: var(--space-lg);
      border-radius: 32px;
      text-align: center;
      width: 100%;
      max-width: 600px;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
      transition: background-color 0.4s ease;
    }

    @media (min-width: 768px) {
      .empty-state-content {
        padding: var(--space-xl);
      }
    }

    .empty-icon {
      color: var(--primary-color);
      margin-bottom: var(--space-xs);
      opacity: 0.8;
      animation: float 4s ease-in-out infinite;
    }

    .empty-state-content h3 {
      font-size: clamp(1.4rem, 5vw, 1.8rem);
      color: var(--text-primary);
    }

    .empty-state-content p {
      color: var(--text-secondary);
      line-height: 1.6;
      font-size: clamp(0.9rem, 3vw, 1.1rem);
    }

    .loading-bar {
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 100px;
      overflow: hidden;
      margin-top: var(--space-md);
    }

    .loading-progress {
      width: 40%;
      height: 100%;
      background: var(--primary-color);
      border-radius: 100px;
      animation: progress-slide 2s ease-in-out infinite;
    }

    @keyframes progress-slide {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(250%); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
  `;
  document.head.appendChild(style);
};
