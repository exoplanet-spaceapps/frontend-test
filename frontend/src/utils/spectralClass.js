/**
 * Spectral Classification Utility
 * Estimates stellar spectral class based on magnitude and provides OBAFGKM color mapping
 */

import * as THREE from 'three';

/**
 * Estimate spectral class from apparent magnitude
 * Uses rough approximation: brighter stars tend to be hotter (earlier type)
 * @param {number} magnitude - Apparent magnitude
 * @returns {string} Spectral class (e.g., "G2V", "K5III")
 */
export function estimateSpectralClass(magnitude) {
  // Rough magnitude to spectral type mapping
  // Note: This is simplified - real classification requires color index (B-V)

  if (magnitude < 0) {
    // Very bright - likely O or B type
    return Math.random() < 0.5 ? 'O5V' : 'B2V';
  } else if (magnitude < 3) {
    // Bright - B or A type
    return Math.random() < 0.5 ? 'B8V' : 'A0V';
  } else if (magnitude < 6) {
    // Medium-bright - A or F type
    return Math.random() < 0.5 ? 'A5V' : 'F2V';
  } else if (magnitude < 7.5) {
    // Medium - F or G type
    return Math.random() < 0.5 ? 'F8V' : 'G0V';
  } else if (magnitude < 9) {
    // Sun-like - G type
    const subclass = Math.floor(Math.random() * 10);
    return `G${subclass}V`;
  } else if (magnitude < 11) {
    // Dim - K type
    const subclass = Math.floor(Math.random() * 10);
    return `K${subclass}V`;
  } else {
    // Very dim - M type
    const subclass = Math.floor(Math.random() * 8); // M0-M7
    return `M${subclass}V`;
  }
}

/**
 * Get spectral type letter from full spectral class
 * @param {string} spectralClass - Full spectral class (e.g., "G2V")
 * @returns {string} Spectral type letter (O, B, A, F, G, K, or M)
 */
export function getSpectralType(spectralClass) {
  if (!spectralClass || typeof spectralClass !== 'string') {
    return 'G'; // Default to G (Sun-like)
  }
  return spectralClass.charAt(0).toUpperCase();
}

/**
 * Get color for spectral type based on OBAFGKM classification
 * Colors represent stellar temperature from hot (blue) to cool (red)
 * @param {string} spectralType - Spectral type letter (O, B, A, F, G, K, M)
 * @returns {THREE.Color} Three.js color object
 */
export function getSpectralColor(spectralType) {
  const colorMap = {
    'O': new THREE.Color(0x9BB0FF), // Blue - Hottest (>30,000K)
    'B': new THREE.Color(0xAABFFF), // Blue-white (10,000-30,000K)
    'A': new THREE.Color(0xCAD7FF), // White (7,500-10,000K)
    'F': new THREE.Color(0xF8F7FF), // Yellow-white (6,000-7,500K)
    'G': new THREE.Color(0xFFF4EA), // Yellow (5,200-6,000K) - Sun-like
    'K': new THREE.Color(0xFFD2A1), // Orange (3,700-5,200K)
    'M': new THREE.Color(0xFFCC6F), // Red - Coolest (<3,700K)
  };

  return colorMap[spectralType] || colorMap['G']; // Default to G (Sun-like)
}

/**
 * Get temperature range for spectral type
 * @param {string} spectralType - Spectral type letter
 * @returns {Object} {min, max} temperature range in Kelvin
 */
export function getTemperatureRange(spectralType) {
  const tempMap = {
    'O': { min: 30000, max: 50000 },
    'B': { min: 10000, max: 30000 },
    'A': { min: 7500, max: 10000 },
    'F': { min: 6000, max: 7500 },
    'G': { min: 5200, max: 6000 },
    'K': { min: 3700, max: 5200 },
    'M': { min: 2400, max: 3700 },
  };

  return tempMap[spectralType] || tempMap['G'];
}

/**
 * Get descriptive name for spectral type
 * @param {string} spectralType - Spectral type letter
 * @returns {string} Descriptive name
 */
export function getSpectralDescription(spectralType) {
  const descMap = {
    'O': 'Blue Supergiant',
    'B': 'Blue-White Star',
    'A': 'White Star',
    'F': 'Yellow-White Star',
    'G': 'Yellow Star (Sun-like)',
    'K': 'Orange Dwarf',
    'M': 'Red Dwarf',
  };

  return descMap[spectralType] || 'Unknown Star Type';
}

/**
 * Add spectral class to star data
 * @param {Object} star - Star data object with magnitude
 * @returns {Object} Star data with added spectralClass property
 */
export function addSpectralClassToStar(star) {
  const spectralClass = estimateSpectralClass(star.magnitude || 10);
  const spectralType = getSpectralType(spectralClass);
  const temperature = getTemperatureRange(spectralType);

  return {
    ...star,
    spectralClass,
    spectralType,
    temperature: (temperature.min + temperature.max) / 2, // Average temperature
  };
}
