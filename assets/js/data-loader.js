'use strict';

/**
 * Data loading utility
 * Fetches JSON data files
 */

export async function loadJSON(filepath) {
  try {
    const response = await fetch(filepath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${filepath}:`, error);
    return null;
  }
}
