import { animate, stagger } from 'animejs';

export const initAnimations = () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if (entry.target.id === 'hero') {
          animateHero();
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

const animateHero = () => {
  animate('.hero-title span', {
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: 'outElastic(1, .8)',
    delay: stagger(100)
  });

  animate('.floating-orb', {
    scale: [0.5, 1],
    opacity: [0, 1],
    duration: 2000,
    easing: 'outExpo'
  });
};

export const animatePageTransition = () => {
  animate('body', {
    opacity: [0, 1],
    duration: 1000,
    easing: 'inOutQuad'
  });
};
