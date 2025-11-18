'use strict';

import { loadJSON } from './data-loader.js';

/**
 * Render About section from JSON data
 */
export async function renderAbout() {
  const data = await loadJSON('./assets/data/about.json');
  if (!data) return;

  // Render bio text
  const aboutTextSection = document.querySelector('.about-text');
  if (aboutTextSection) {
    aboutTextSection.innerHTML = data.bio
      .map(paragraph => `<p>${paragraph}</p>`)
      .join('');
  }

  // Render services
  const serviceList = document.querySelector('.service-list');
  if (serviceList) {
    serviceList.innerHTML = data.services
      .map(service => `
        <li class="service-item">
          <div class="service-icon-box">
            <img src="./assets/images/${service.icon}" alt="${service.title} icon" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">${service.title}</h4>
            <p class="service-item-text">${service.description}</p>
          </div>
        </li>
      `)
      .join('');
  }

  console.log('About section rendered');
}
