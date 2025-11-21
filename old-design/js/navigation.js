'use strict';

/**
 * Page navigation functionality
 */
export function initNavigation() {
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");
  const contactButton = document.querySelector(".navigate-contact-btn");

  // Contact button navigation
  if (contactButton) {
    contactButton.addEventListener("click", (event) => {
      event.preventDefault();

      const contactSection = document.querySelector("[data-page='contact']");
      const allSections = document.querySelectorAll("[data-page]");

      allSections.forEach((section) => section.classList.remove("active"));
      contactSection.classList.add("active");

      const navLinks = document.querySelectorAll("[data-nav-link]");
      navLinks.forEach((link) => link.classList.remove("active"));
      const contactNavLink = Array.from(navLinks).find((link) =>
        link.textContent.trim().toLowerCase() === "contact"
      );
      if (contactNavLink) contactNavLink.classList.add("active");

      // Save active nav to localStorage
      localStorage.setItem('activeNav', 'contact');

      window.scrollTo(0, 0);
    });
  }

  // Navigation link handlers
  navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetPage = this.textContent.trim().toLowerCase();

      console.log(`Navigating to: ${targetPage}`);

      pages.forEach((page) => {
        if (page.dataset.page === targetPage) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });

      navigationLinks.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");

      // Save active nav to localStorage
      localStorage.setItem('activeNav', targetPage);

      window.scrollTo(0, 0);
    });
  });

  // Handle URL hash or localStorage on page load
  const fragment = window.location.hash.slice(1);
  const savedNav = localStorage.getItem('activeNav');

  // Priority: URL hash > localStorage > default (About)
  const targetPage = fragment || savedNav || 'about';

  if (targetPage && targetPage !== 'about') {
    console.log(`Loading page: ${targetPage}`);

    // Find matching page and nav link
    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach((link) => {
      if (link.textContent.trim().toLowerCase() === targetPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  console.log("Navigation initialized!");
}
