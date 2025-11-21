'use strict';

import { loadJSON } from './data-loader.js';

/**
 * Render Projects section from JSON data
 */
export async function renderProjects() {
  const data = await loadJSON('./assets/data/projects.json');
  if (!data) return;

  // Render project list
  const projectList = document.querySelector('.project-list');
  if (projectList && data.projects) {
    const STRAPI_BASE_URL = window.STRAPI_URL ? window.STRAPI_URL.replace('/api', '') : 'http://localhost:1337';

    projectList.innerHTML = data.projects
      .map(project => {
        // Check if image is a Strapi URL (starts with /) or a local filename
        const imageSrc = project.image.startsWith('/')
          ? `${STRAPI_BASE_URL}${project.image}`
          : `./assets/images/${project.image}`;

        return `
          <li class="project-item active" data-filter-item data-category="${project.category}">
            <a href="${project.link}">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="${imageSrc}" alt="${project.title}" loading="lazy">
              </figure>
              <h3 class="project-title">${project.title}</h3>
            </a>
          </li>
        `;
      })
      .join('');
  }

  // Render filter buttons
  const filterList = document.querySelector('.filter-list');
  if (filterList && data.categories) {
    filterList.innerHTML = data.categories
      .map((category, index) => `
        <li class="filter-item">
          <button ${index === 0 ? 'class="active"' : ''} data-filter-btn>${category}</button>
        </li>
      `)
      .join('');
  }

  // Render mobile select options
  const selectList = document.querySelector('.select-list');
  if (selectList && data.categories) {
    selectList.innerHTML = data.categories
      .map(category => `
        <li class="select-item">
          <button data-select-item>${category}</button>
        </li>
      `)
      .join('');
  }

  console.log('Projects section rendered');
}
