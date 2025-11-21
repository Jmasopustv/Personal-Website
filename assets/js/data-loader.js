'use strict';

/**
 * Data loading utility
 * Fetches data from Strapi CMS
 */

// Use environment variable or default to localhost for development
const STRAPI_URL = window.STRAPI_URL || 'http://localhost:1337/api';

export async function loadJSON(filepath) {
  let endpoint = '';

  // Convert legacy filepath to Strapi endpoint
  if (filepath.includes('about.json')) {
    endpoint = `${STRAPI_URL}/about?populate=*`;
  } else if (filepath.includes('resume.json')) {
    endpoint = `${STRAPI_URL}/resume?populate=*`;
  } else if (filepath.includes('projects.json')) {
    endpoint = `${STRAPI_URL}/projects?populate=*`;
  } else {
    throw new Error(`Unknown data source: ${filepath}`);
  }

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();

    // Transform Strapi response to match original JSON structure
    return transformStrapiResponse(filepath, json);
  } catch (error) {
    console.error(`Error loading from Strapi (${endpoint}):`, error);
    throw error;
  }
}

function transformStrapiResponse(filepath, strapiData) {
  // Transform Strapi response to match original JSON structure

  if (filepath.includes('about.json')) {
    const data = strapiData.data;
    return {
      name: data.name,
      title: data.title,
      organization: data.organization,
      bio: data.bio ? data.bio.split('\n\n') : [],
      services: data.services || []
    };
  }

  if (filepath.includes('resume.json')) {
    const data = strapiData.data;
    return {
      education: data.education || [],
      certifications: data.certifications || [],
      experience: data.experience || [],
      skills: data.skills || []
    };
  }

  if (filepath.includes('projects.json')) {
    const projects = strapiData.data.map(project => {
      // Map project IDs to their corresponding images
      const imageMap = {
        '1': 'project-1.jpg',
        '2': 'project-2.png',
        '3': 'project-3.jpg',
        '4': 'project-4.png',
        '5': 'project-5.png',
        '6': 'project-6.png',
        '7': 'project-7.png',
        '8': 'project-8.jpg',
        '9': 'project-9.png',
        'finance': 'project-1.jpg',
        'orizon': 'project-2.png',
        'fundo': 'project-3.jpg',
        'brawlhalla': 'project-4.png',
        'dsm': 'project-5.png',
        'metaspark': 'project-6.png',
        'summary': 'project-7.png',
        'task-manager': 'project-8.jpg',
        'arrival': 'project-9.png'
      };

      return {
        id: project.id,
        title: project.title,
        category: project.category,
        // Use Strapi image if uploaded, otherwise fallback to local images
        image: project.image?.url || imageMap[project.id] || imageMap[project.title?.toLowerCase()] || 'project-1.jpg',
        // Use slug-based link for dynamic project pages, fallback to hardcoded link
        link: project.slug ? `project-detail.html?project=${project.slug}` : project.link,
        featured: project.featured
      };
    });

    // Extract unique categories
    const categories = ['All', ...new Set(projects.map(p => p.category))];

    return {
      projects,
      categories
    };
  }

  return strapiData;
}
