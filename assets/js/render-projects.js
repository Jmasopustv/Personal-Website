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
    projectList.innerHTML = data.projects
      .map(project => `
        <li class="project-item active" data-filter-item data-category="${project.category}">
          <a href="${project.link}">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img src="./assets/images/${project.image}" alt="${project.title}" loading="lazy">
            </figure>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
          </a>
        </li>
      `)
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
