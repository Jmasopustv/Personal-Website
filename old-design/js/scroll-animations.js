/**
 * GSAP Scroll Animations
 * Award-winning scroll-triggered effects
 */

export function initScrollAnimations() {
  // Register GSAP plugin
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    console.log('GSAP ScrollTrigger initialized');

    // Fade in elements on scroll
    gsap.utils.toArray('.fade-in').forEach(element => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // markers: true // Uncomment for debugging
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Stagger project cards animation
    const projectGrid = document.querySelector('.project-list');
    if (projectGrid) {
      gsap.from('.project-item', {
        scrollTrigger: {
          trigger: projectGrid,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }

    // Article title slide in from left
    gsap.utils.toArray('.article-title').forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Timeline items reveal
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power2.out'
      });
    });

    // Skills pills animation
    const skillsList = document.querySelector('.skills-list');
    if (skillsList) {
      gsap.from('.skills-item', {
        scrollTrigger: {
          trigger: skillsList,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      });
    }

    // Service/Feature cards
    gsap.utils.toArray('.service-item').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out'
      });
    });

    // Navbar hide on scroll down, show on scroll up
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        onUpdate: (self) => {
          const currentScroll = self.scroll();

          if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            gsap.to(navbar, {
              y: -100,
              duration: 0.3,
              ease: 'power2.out'
            });
          } else {
            // Scrolling up
            gsap.to(navbar, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          }

          lastScroll = currentScroll;
        }
      });
    }

    // Parallax effect for backgrounds (if elements exist)
    gsap.utils.toArray('[data-parallax]').forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * parseFloat(speed),
        ease: 'none'
      });
    });

    // Scale animation for images on scroll
    gsap.utils.toArray('.project-img img').forEach(img => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        scale: 1.2,
        duration: 1.5,
        ease: 'power2.out'
      });
    });

    // Contact form slide in
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      gsap.from(contactForm, {
        scrollTrigger: {
          trigger: contactForm,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }

    // Map fade in
    const mapbox = document.querySelector('.mapbox');
    if (mapbox) {
      gsap.from(mapbox, {
        scrollTrigger: {
          trigger: mapbox,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power2.out'
      });
    }

    console.log('All scroll animations registered');
  } else {
    console.warn('GSAP or ScrollTrigger not loaded');
  }
}

/**
 * Add parallax data attribute to elements
 * Usage: Add data-parallax="0.5" to any element for parallax effect
 */
export function enableParallax(selector, speed = 0.5) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.dataset.parallax = speed;
  });
}
