export const renderHero = () => {
  const hero = document.querySelector('#hero');
  hero.innerHTML = `
    <div class="hero-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title reveal">
          <span>Coding</span> <span>the</span> <span class="gradient-text">Future</span><br>
          <span>one</span> <span>Scalable</span> <span>Layer</span> <span>at</span> <span>a</span> <span>time.</span>
        </h1>
        <p class="hero-subtitle reveal" style="transition-delay: 0.2s">
          Dedicated to building digital products that are not just functional, but essential. 
          Where technical precision meets proactive innovation.
        </p>
        <div class="hero-btns reveal" style="transition-delay: 0.4s">
          <button class="btn-premium">View Projects</button>
          <button class="btn-secondary">Our Story</button>
        </div>
      </div>
      <div class="hero-visual reveal" style="transition-delay: 0.6s">
        <div class="floating-orb float">
          <div class="orb-inner"></div>
        </div>
        <div class="floating-element element-1 float-delayed"></div>
        <div class="floating-element element-2 float"></div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 120px;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: var(--z-negative);
      filter: blur(80px);
      opacity: 0.4;
    }

    .blob {
      position: absolute;
      border-radius: 50%;
    }

    .blob-1 {
      top: 10%;
      right: 10%;
      width: 400px;
      height: 400px;
      background: var(--primary-color);
    }

    .blob-2 {
      bottom: 10%;
      left: 10%;
      width: 300px;
      height: 300px;
      background: var(--secondary-color);
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-lg);
      align-items: center;
    }

    @media (min-width: 992px) {
      .hero-content {
        grid-template-columns: 1.2fr 0.8fr;
      }
    }

    .hero-title {
      font-size: clamp(2.5rem, 8vw, 5rem);
      line-height: 1.1;
      margin-bottom: var(--space-md);
    }

    .hero-title span {
      display: inline-block;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin-bottom: var(--space-lg);
    }

    .hero-btns {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
    }

    @media (max-width: 768px) {
      .hero-btns {
        flex-direction: column;
      }
      .hero-btns button {
        width: 100%;
        justify-content: center;
      }
    }

    .hero-visual {
      position: relative;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 768px) {
      .hero-visual {
        height: 400px;
      }
    }

    .floating-orb {
      width: 150px;
      height: 150px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 50%;
      position: relative;
      box-shadow: 0 0 50px var(--primary-glow);
    }

    @media (min-width: 768px) {
      .floating-orb {
        width: 200px;
        height: 200px;
      }
    }

    .orb-inner {
      position: absolute;
      inset: 10px;
      background: var(--bg-color);
      border-radius: 50%;
      overflow: hidden;
      transition: background-color 0.4s ease;
    }

    .orb-inner::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, transparent, rgba(255,255,255,0.1));
    }

    .floating-element {
      position: absolute;
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      backdrop-filter: blur(10px);
      transition: background-color 0.4s ease, border-color 0.4s ease;
    }

    .element-1 {
      width: 60px;
      height: 60px;
      top: 5%;
      right: 15%;
      transform: rotate(15deg);
    }

    .element-2 {
      width: 40px;
      height: 40px;
      bottom: 15%;
      left: 15%;
      transform: rotate(-10deg);
    }

    @media (min-width: 768px) {
      .element-1 {
        width: 80px;
        height: 80px;
      }
      .element-2 {
        width: 60px;
        height: 60px;
      }
    }

    /* Reveal Animation */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s var(--ease-antigravity);
    }

    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
};
