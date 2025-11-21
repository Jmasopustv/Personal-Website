'use strict';

/**
 * Main application entry point
 * Import and initialize all modules
 */

import { initSidebar } from './sidebar.js';
import { initFilter } from './filter.js';
import { initNavigation } from './navigation.js';
import { initContactForm } from './contact-form.js';
import { initRepositories } from './repositories.js';
import { renderAbout } from './render-about.js';
import { renderResume } from './render-resume.js';
import { renderProjects } from './render-projects.js';
import { initAnimations } from './animations.js';
import { initScrollAnimations } from './scroll-animations.js';

// Initialize all modules when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  // Render dynamic content first
  await Promise.all([
    renderAbout(),
    renderResume(),
    renderProjects()
  ]);

  // Then initialize interactive features
  initSidebar();
  initFilter();
  initNavigation();
  initContactForm();
  initRepositories();
  initAnimations();

  // Initialize GSAP scroll animations after content is loaded
  setTimeout(() => {
    initScrollAnimations();
  }, 100);

  console.log('All modules initialized successfully');
});
