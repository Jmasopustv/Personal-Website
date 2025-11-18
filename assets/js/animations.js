'use strict';

/**
 * Advanced animations and visual effects
 * Scroll animations, cursor trails, and micro-interactions
 */

/**
 * Initialize scroll animations
 * Animate elements as they come into viewport
 */
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll(
    '.service-item, .timeline-item, .skill-item, .project-item, .repositories-post-item'
  );

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

/**
 * Initialize cursor trail effect (optional)
 * Creates glowing particles that follow the cursor
 */
export function initCursorTrail() {
  let isEnabled = false; // Set to true to enable cursor trail

  if (!isEnabled) return;

  document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';

    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 500);
  });
}

/**
 * Initialize parallax effect for glowing orbs
 */
export function initParallaxOrbs() {
  document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    const main = document.querySelector('main');
    if (main) {
      main.style.setProperty('--mouse-x', `${moveX}px`);
      main.style.setProperty('--mouse-y', `${moveY}px`);
    }
  });
}

/**
 * Add ripple effect to buttons
 */
export function initRippleEffect() {
  const buttons = document.querySelectorAll('.form-btn, .filter-btn, .navbar-link');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

/**
 * Smooth reveal for skill progress bars
 */
export function initSkillProgressAnimation() {
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.skill-progress-fill');
        if (progressBar) {
          const width = progressBar.getAttribute('data-progress');
          progressBar.style.width = width;
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const skillItems = document.querySelectorAll('.skills-item');
  skillItems.forEach(item => {
    const progressBar = item.querySelector('.skill-progress-fill');
    if (progressBar) {
      const width = progressBar.style.width;
      progressBar.setAttribute('data-progress', width);
      progressBar.style.width = '0%';
    }
    observer.observe(item);
  });
}

/**
 * Initialize all animation features
 */
export function initAnimations() {
  initScrollAnimations();
  initCursorTrail();
  initParallaxOrbs();
  initRippleEffect();

  // Skill progress animation needs to run after resume is rendered
  setTimeout(() => {
    initSkillProgressAnimation();
  }, 100);

  console.log('Advanced animations initialized');
}
