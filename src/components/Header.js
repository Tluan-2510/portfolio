export const renderHeader = () => {
  const nav = document.querySelector('#main-nav');
  nav.innerHTML = `
    <div class="nav-content">
      <div class="logo">
        <img src="/assets/avatar.jpg" alt="Nguyễn Thành Luân" class="avatar-header">
        <span class="gradient-text profile-name">Nguyễn Thành Luân</span>
      </div>
        <nav class="nav-links">
          <a href="#home" class="nav-link active">
            <span class="nav-icon"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span>
            Home
          </a>
          <a href="#about" class="nav-link">
            <span class="nav-icon"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
            About
          </a>
          <a href="#projects" class="nav-link">
            <span class="nav-icon"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span>
            Projects
          </a>
          <a href="#contact" class="nav-link">
            <span class="nav-icon"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
            Contact
          </a>
        </nav>
      <div class="nav-actions">
        <button class="theme-toggle" id="theme-toggle" aria-label="Toggle Theme">
          <svg class="sun-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg class="moon-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
        <button class="btn-premium" id="btn-cta-nav">Let's Talk</button>
      </div>
      <button class="mobile-toggle" id="mobile-toggle">
        <span></span>
        <span></span>
      </button>
    </div>
  `;

  // Add styles specific to header
  const style = document.createElement('style');
  style.textContent = `
    #main-nav {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 95%;
      max-width: 1200px;
      height: 70px;
      display: flex;
      align-items: center;
      z-index: var(--z-nav);
      transition: var(--transition-slow);
    }

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 20px;
    }

    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: var(--transition-base);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .nav-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: var(--transition-base);
    }

    .nav-link:hover .nav-icon,
    .nav-link.active .nav-icon {
      opacity: 1;
      transform: translateY(-1px);
    }

    .nav-links {
      display: none;
      gap: 2.5rem;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.2rem;
      letter-spacing: 1px;
    }

    .avatar-header {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 15px rgba(108, 92, 231, 0.3);
    }

    .profile-name {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 1.1rem;
      letter-spacing: 0.5px;
      white-space: nowrap;
      font-weight: 700;
    }


    @media (max-width: 1200px) {
      .nav-links {
        gap: 1.2rem;
      }
      .profile-name {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 991px) {
      .profile-name {
        display: none;
      }
      .nav-links {
        display: none !important;
      }
      .mobile-toggle {
        display: flex !important;
      }
      .nav-actions {
        gap: 0.8rem;
      }
      #btn-cta-nav {
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
      }
    }

    @media (min-width: 992px) {
      .nav-links {
        display: flex;
      }
      .mobile-toggle {
        display: none;
      }
    }

    .nav-links.active {
      display: flex !important;
      flex-direction: column;
      position: fixed;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      background: var(--glass-bg);
      padding: 2rem;
      border-radius: 20px;
      backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      gap: 1.5rem;
      animation: slideIn 0.4s var(--ease-antigravity);
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translate(-50%, -20px); }
      to { opacity: 1; transform: translate(-50%, 0); }
    }

    .nav-link {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-secondary);
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: var(--transition-base);
    }

    .nav-link:hover, .nav-link.active {
      color: var(--text-primary);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-color);
      transition: 0.3s;
    }

    .nav-link:hover::after, .nav-link.active::after {
      width: 100%;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .theme-toggle {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-color);
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary);
      transition: var(--transition-base);
    }

    .theme-toggle:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    .sun-icon { display: none; }
    .moon-icon { display: block; }

    [data-theme="light"] .sun-icon { display: block; }
    [data-theme="light"] .moon-icon { display: none; }
    [data-theme="light"] .theme-toggle { background: rgba(0, 0, 0, 0.05); }

    .mobile-toggle {
      display: flex;
      flex-direction: column;
      gap: 6px;
      z-index: var(--z-nav);
      cursor: pointer;
    }

    @media (min-width: 992px) {
      .mobile-toggle {
        display: none;
      }
    }

    .mobile-toggle span {
      width: 25px;
      height: 2px;
      background: var(--text-primary);
      transition: 0.3s;
    }

    .mobile-toggle.open span:nth-child(1) {
      transform: translateY(4px) rotate(45deg);
    }

    .mobile-toggle.open span:nth-child(2) {
      transform: translateY(-4px) rotate(-45deg);
    }
  `;
  document.head.appendChild(style);
};
