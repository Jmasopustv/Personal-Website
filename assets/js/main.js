'use strict';

/**
 * NEW MAIN - Revolutionary Portfolio Design
 * Integrates all existing Strapi functionality with new modern design
 */

const STRAPI_BASE_URL = 'https://strapibackend-production-b824.up.railway.app';
const API_TOKEN = 'a7e0d2be85fc6cb18fde5fd3ba4d83331d2113a1aad2c3cf1abf2dd7d34e3e32e3cb38fe18dc41f62c6feb2eaf85cf8b08c3caac7b4a5e50ea26e8ea67c4a1c71ec0f868e03f9f7ba5e4dcfe5e7a14dd2925daa8870bc6d7a7a87cf2dc03d78b5c9cc9aa33b11c37ff28ebf20f6b67dff96b15f5aff7e60e1e86f6ad1ad5e99b';

// ============================================================================
// PARTICLES.JS INITIALIZATION
// ============================================================================

function initParticles() {
  if (typeof particlesJS === 'undefined') {
    console.warn('Particles.js not loaded');
    return;
  }

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#2069e0'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#2069e0',
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.5
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}

// ============================================================================
// CUSTOM CURSOR
// ============================================================================

function initCustomCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (!cursorDot || !cursorOutline) return;

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // Smooth follow animation for outline
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Add hover effects to interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag, .social-link');

  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });

    el.addEventListener('mouseleave', () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}

// ============================================================================
// NAVIGATION & SECTIONS
// ============================================================================

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const mobileMenuBtn = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');

  // Section switching with smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Smooth scroll to section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update active states
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Save to localStorage for refresh persistence
        localStorage.setItem('activeSection', targetId);

        // Update URL hash without jumping
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });

  // Scroll spy - update active nav based on scroll position
  let ticking = false;

  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100; // Offset for nav height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
            localStorage.setItem('activeSection', sectionId);
          }
        });
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateActiveNav);
      ticking = true;
    }
  });

  // Restore active section on load
  const savedSection = localStorage.getItem('activeSection') || window.location.hash.slice(1) || 'home';
  const savedSectionEl = document.getElementById(savedSection);

  if (savedSectionEl) {
    // Scroll to saved section on load
    setTimeout(() => {
      savedSectionEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  // Mobile menu toggle
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('mobile-active');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }
}

// ============================================================================
// STAT COUNTER ANIMATION
// ============================================================================

function animateStats() {
  const stats = document.querySelectorAll('.stat-value');

  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count')) || 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCount = () => {
      current += increment;
      if (current < target) {
        stat.textContent = Math.floor(current) + '+';
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = target + '+';
      }
    };

    // Start animation when stat comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(stat);
  });
}

// ============================================================================
// STRAPI DATA LOADING
// ============================================================================

async function fetchStrapiData(endpoint) {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}/api/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

// Load About Section
async function loadAboutSection() {
  const aboutData = await fetchStrapiData('about?populate=*');
  if (!aboutData) return;

  // Update about text (handle both 'bio' and 'about_text' fields)
  const aboutText = document.querySelector('[data-dynamic-content="about"]');
  const textContent = aboutData.bio || aboutData.about_text;
  if (aboutText && textContent) {
    aboutText.innerHTML = textContent.replace(/\n/g, '<br>');
  }

  // Load services
  const servicesGrid = document.querySelector('[data-dynamic-content="services"]');
  if (servicesGrid && aboutData.services) {
    servicesGrid.innerHTML = aboutData.services.map(service => {
      // Handle both SVG files and ionicon names
      const iconHtml = service.icon && service.icon.endsWith('.svg')
        ? `<img src="./assets/images/${service.icon}" alt="${service.title} icon">`
        : `<ion-icon name="${service.icon || 'code-outline'}"></ion-icon>`;

      return `
        <div class="service-card">
          <div class="service-icon">
            ${iconHtml}
          </div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-description">${service.description}</p>
        </div>
      `;
    }).join('');
  }
}

// Load Resume Section
async function loadResumeSection() {
  const resumeData = await fetchStrapiData('resume?populate=*');
  if (!resumeData) return;

  // Load Education Timeline
  const educationTimeline = document.querySelector('[data-dynamic-content="education"]');
  if (educationTimeline && resumeData.education) {
    educationTimeline.innerHTML = resumeData.education.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="timeline-date">${item.period || ''}</span>
          <h3 class="timeline-title">${item.degree || item.institution}</h3>
          ${item.institution && item.degree ? `<p class="timeline-subtitle">${item.institution}</p>` : ''}
          ${item.description ? `<p class="timeline-description">${item.description}</p>` : ''}
        </div>
      </div>
    `).join('');
  }

  // Load Certifications Timeline
  const certTimeline = document.querySelector('[data-dynamic-content="certifications"]');
  if (certTimeline && resumeData.certifications) {
    certTimeline.innerHTML = resumeData.certifications.map(cert => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="timeline-date">${cert.period || cert.date || 'Current'}</span>
          <h3 class="timeline-title">${cert.name || cert.title}</h3>
          ${cert.issuer ? `<p class="timeline-subtitle">${cert.issuer}</p>` : ''}
          ${cert.description ? `<p class="timeline-description">${cert.description}</p>` : ''}
        </div>
      </div>
    `).join('');
  }

  // Load Experience Timeline
  const expTimeline = document.querySelector('[data-dynamic-content="experience"]');
  if (expTimeline && resumeData.experience) {
    expTimeline.innerHTML = resumeData.experience.map(exp => {
      // Handle responsibilities array
      const responsibilitiesHtml = exp.responsibilities && exp.responsibilities.length > 0
        ? `<ul class="timeline-responsibilities">${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>`
        : '';

      return `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">${exp.period || `${exp.start_date || ''} - ${exp.end_date || 'Present'}`}</span>
            <h3 class="timeline-title">${exp.title || exp.position}</h3>
            ${exp.company ? `<p class="timeline-subtitle">${exp.company}</p>` : ''}
            ${exp.description ? `<p class="timeline-description">${exp.description}</p>` : ''}
            ${responsibilitiesHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  // Load Skills Cloud
  const skillsCloud = document.querySelector('[data-dynamic-content="skills"]');
  if (skillsCloud && resumeData.skills) {
    skillsCloud.innerHTML = resumeData.skills.map(skill => {
      const descriptionAttr = skill.description
        ? `data-description="${skill.description.replace(/"/g, '&quot;')}"`
        : '';
      return `<span class="skill-tag" ${descriptionAttr}>${skill.name}</span>`;
    }).join('');
  }
}

// Load Projects Section (Bento Grid)
async function loadProjectsSection() {
  const projectsData = await fetchStrapiData('projects?populate=*');
  if (!projectsData) return;

  const bentoGrid = document.querySelector('[data-dynamic-content="projects"]');
  if (!bentoGrid) return;

  // Sort projects - featured ones first
  const sortedProjects = projectsData.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  bentoGrid.innerHTML = sortedProjects.map((project, index) => {
    // Handle Strapi v5 image format (image is an object with url property)
    let imageSrc = './assets/images/project-placeholder.jpg';
    if (project.image) {
      if (typeof project.image === 'object' && project.image.url) {
        // Strapi v5 format: image is an object
        imageSrc = project.image.url.startsWith('/')
          ? `${STRAPI_BASE_URL}${project.image.url}`
          : project.image.url;
      } else if (typeof project.image === 'string') {
        // Legacy format: image is a string
        imageSrc = project.image.startsWith('/')
          ? `${STRAPI_BASE_URL}${project.image}`
          : `./assets/images/${project.image}`;
      }
    }

    // First 2 featured projects get large size
    const isFeatured = project.featured && index < 2;
    const featuredClass = isFeatured ? 'featured' : '';

    return `
      <div class="bento-item ${featuredClass}" data-category="${project.category || 'all'}">
        <a href="${project.link || `./project-detail.html?slug=${project.slug}`}" class="project-card">
          <div class="project-image">
            <img src="${imageSrc}" alt="${project.title}" loading="lazy">
            <div class="project-overlay">
              <div class="project-icon">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div class="project-info">
            ${project.category ? `<span class="project-tag">${project.category}</span>` : ''}
            <h3 class="project-title">${project.title}</h3>
            ${project.description ? `<p class="project-description">${project.description.substring(0, 100)}...</p>` : ''}
          </div>
        </a>
      </div>
    `;
  }).join('');

  // Initialize project filter
  initProjectFilter();
}

// Project Filter
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.bento-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter projects
      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => item.style.opacity = '1', 10);
        } else {
          item.style.opacity = '0';
          setTimeout(() => item.style.display = 'none', 300);
        }
      });
    });
  });
}

// ============================================================================
// CONTACT FORM
// ============================================================================

async function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successMessage = document.querySelector('.form-success');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: form.querySelector('[name="name"]').value,
      email: form.querySelector('[name="email"]').value,
      message: form.querySelector('[name="message"]').value
    };

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    try {
      const response = await fetch(`${STRAPI_BASE_URL}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({ data: formData })
      });

      if (response.ok) {
        // Show success message
        form.style.display = 'none';
        if (successMessage) {
          successMessage.style.display = 'flex';
        }

        // Reset form after delay
        setTimeout(() => {
          form.reset();
          form.style.display = 'block';
          if (successMessage) {
            successMessage.style.display = 'none';
          }
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Failed to send message. Please try again or contact me directly via email at jjmasopust@gmail.com');
    } finally {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }
  });
}

// ============================================================================
// GSAP SCROLL ANIMATIONS
// ============================================================================

function initScrollAnimations() {
  // Disabled scroll animations for cleaner, simpler experience
  // All content is now immediately visible without fade-in effects
  console.log('Scroll animations disabled for better UX');
}

// ============================================================================
// MAIN INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', async () => {
  console.log('Initializing revolutionary portfolio...');

  // Initialize visual effects first
  initParticles();
  initCustomCursor();
  initNavigation();

  // Load all Strapi content in parallel
  await Promise.all([
    loadAboutSection(),
    loadResumeSection(),
    loadProjectsSection()
  ]);

  // Initialize interactive features after content loads
  animateStats();
  initContactForm();

  // Initialize scroll animations after everything is rendered
  setTimeout(() => {
    initScrollAnimations();
  }, 100);

  console.log('Revolutionary portfolio initialized successfully! 🚀');
});
