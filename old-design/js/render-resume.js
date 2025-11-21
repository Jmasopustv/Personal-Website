'use strict';

import { loadJSON } from './data-loader.js';

/**
 * Render Resume section from JSON data
 */
export async function renderResume() {
  const data = await loadJSON('./assets/data/resume.json');
  if (!data) return;

  // Render Education
  const educationList = document.querySelector('.timeline-list.education');
  if (educationList && data.education) {
    educationList.innerHTML = data.education
      .map(edu => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${edu.institution}</h4>
          <span>${edu.period}</span>
          <p class="timeline-text">${edu.description}</p>
        </li>
      `)
      .join('');
  }

  // Render Certifications
  const certificationsList = document.querySelector('.timeline-list.certifications');
  if (certificationsList && data.certifications) {
    certificationsList.innerHTML = data.certifications
      .map(cert => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${cert.name}</h4>
          <span>${cert.period}</span>
          <p class="timeline-text">${cert.description}</p>
        </li>
      `)
      .join('');
  }

  // Render Experience
  const experienceList = document.querySelector('.timeline-list.experience');
  if (experienceList && data.experience) {
    experienceList.innerHTML = data.experience
      .map(exp => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${exp.title}</h4>
          <span>${exp.period}</span>
          <p class="timeline-text">
            ${exp.responsibilities.map(resp => `• ${resp}`).join('<br><br>')}
          </p>
        </li>
      `)
      .join('');
  }

  // Render Skills
  const skillsList = document.querySelector('.skills-list');
  if (skillsList && data.skills) {
    skillsList.innerHTML = data.skills
      .map(skill => `
        <li class="skills-item">
          <div class="title-wrapper">
            <h4 class="h4">${skill.name}</h4>
            <h6 class="h6">${skill.description}</h6>
            <data value="${skill.percentage}">${skill.percentage}%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: ${skill.percentage}%;"></div>
          </div>
        </li>
      `)
      .join('');
  }

  console.log('Resume section rendered');
}
