/**
 * Star Rendering Module
 * Handles conversion of RA/DEC coordinates to 3D space and star visualization
 */

import * as THREE from 'three';

/**
 * Convert RA/DEC coordinates to 3D Cartesian coordinates
 * @param {number} ra - Right Ascension in degrees (0-360)
 * @param {number} dec - Declination in degrees (-90 to 90)
 * @param {number} radius - Distance from origin (default: 100)
 * @returns {Object} {x, y, z} Cartesian coordinates
 */
export function raDec2Cartesian(ra, dec, radius = 100) {
    // Convert degrees to radians
    const raRad = (ra * Math.PI) / 180;
    const decRad = (dec * Math.PI) / 180;

    // Calculate Cartesian coordinates
    // Using spherical to Cartesian conversion
    const x = radius * Math.cos(decRad) * Math.cos(raRad);
    const y = radius * Math.sin(decRad);
    const z = radius * Math.cos(decRad) * Math.sin(raRad);

    return { x, y, z };
}

/**
 * Determine star color based on catalog type
 * @param {string} catalog - Catalog identifier (TIC or KIC)
 * @returns {THREE.Color} Three.js color object
 */
export function getStarColor(catalog) {
    if (catalog && catalog.startsWith('TIC')) {
        return new THREE.Color(0x4488ff); // Blue for TESS
    } else if (catalog && catalog.startsWith('KIC')) {
        return new THREE.Color(0xffdd44); // Yellow for Kepler
    } else {
        return new THREE.Color(0x8888ff); // Default purple for unknown
    }
}

/**
 * Calculate star size based on planet properties
 * @param {Object} star - Star data object
 * @returns {number} Star size
 */
export function calculateStarSize(star) {
    // Base size
    let size = 1.0;

    // Size based on transit depth (larger depth = more visible)
    if (star.depth && !isNaN(star.depth)) {
        const depthFactor = Math.log10(Math.abs(star.depth) + 1);
        size += depthFactor * 0.5;
    }

    // Size based on magnitude (brighter = larger)
    if (star.magnitude && !isNaN(star.magnitude)) {
        // Inverse relationship: smaller magnitude = brighter = larger
        const magFactor = (15 - Math.min(star.magnitude, 15)) / 10;
        size += magFactor;
    }

    // Size based on period (longer period might indicate larger planet)
    if (star.period && !isNaN(star.period)) {
        const periodFactor = Math.log10(star.period + 1) / 5;
        size += periodFactor * 0.3;
    }

    // Clamp size to reasonable range
    return Math.max(0.5, Math.min(size, 4.0));
}

/**
 * Create particle system for star field
 * @param {Array} starData - Array of star objects with ra, dec, catalog properties
 * @returns {THREE.Points} Three.js Points object representing the star field
 */
export function createStarField(starData) {
    const positions = [];
    const colors = [];
    const sizes = [];

    // Process each star
    starData.forEach(star => {
        // Convert RA/DEC to 3D position
        const { x, y, z } = raDec2Cartesian(star.ra, star.dec);
        positions.push(x, y, z);

        // Determine color based on catalog
        const color = getStarColor(star.catalog);
        colors.push(color.r, color.g, color.b);

        // Calculate size based on properties
        const size = calculateStarSize(star);
        sizes.push(size);
    });

    // Create geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    // Create shader material for better star rendering
    const material = new THREE.ShaderMaterial({
        uniforms: {
            pointTexture: { value: createStarTexture() }
        },
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;

            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform sampler2D pointTexture;
            varying vec3 vColor;

            void main() {
                vec4 texColor = texture2D(pointTexture, gl_PointCoord);
                gl_FragColor = vec4(vColor, 1.0) * texColor;

                // Add glow effect
                float dist = distance(gl_PointCoord, vec2(0.5));
                float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
                gl_FragColor.a *= alpha;
            }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    // Create Points object
    const starField = new THREE.Points(geometry, material);

    console.log(`✅ Created star field with ${starData.length} stars`);

    return starField;
}

/**
 * Create star texture for point sprite
 * @returns {THREE.Texture} Texture for star rendering
 */
function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;

    const ctx = canvas.getContext('2d');

    // Create radial gradient for star glow
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    return texture;
}

/**
 * Update star colors (e.g., for filtering or highlighting)
 * @param {THREE.Points} starField - The star field object
 * @param {Function} colorFunction - Function that takes star data and returns a color
 */
export function updateStarColors(starField, colorFunction) {
    const colors = starField.geometry.attributes.color;
    const starData = window.starDataCache || [];

    for (let i = 0; i < starData.length; i++) {
        const color = colorFunction(starData[i]);
        colors.setXYZ(i, color.r, color.g, color.b);
    }

    colors.needsUpdate = true;
}

/**
 * Get statistics about the star field
 * @param {Array} starData - Array of star objects
 * @returns {Object} Statistics object
 */
export function getStarStatistics(starData) {
    const stats = {
        total: starData.length,
        byType: {},
        avgMagnitude: 0,
        avgPeriod: 0,
        avgDepth: 0,
        raRange: { min: Infinity, max: -Infinity },
        decRange: { min: Infinity, max: -Infinity }
    };

    let magSum = 0, magCount = 0;
    let periodSum = 0, periodCount = 0;
    let depthSum = 0, depthCount = 0;

    starData.forEach(star => {
        // Count by catalog type
        const catalog = star.catalog ? star.catalog.substring(0, 3) : 'Unknown';
        stats.byType[catalog] = (stats.byType[catalog] || 0) + 1;

        // Calculate averages
        if (star.magnitude && !isNaN(star.magnitude)) {
            magSum += star.magnitude;
            magCount++;
        }

        if (star.period && !isNaN(star.period)) {
            periodSum += star.period;
            periodCount++;
        }

        if (star.depth && !isNaN(star.depth)) {
            depthSum += star.depth;
            depthCount++;
        }

        // Track coordinate ranges
        if (star.ra !== undefined) {
            stats.raRange.min = Math.min(stats.raRange.min, star.ra);
            stats.raRange.max = Math.max(stats.raRange.max, star.ra);
        }

        if (star.dec !== undefined) {
            stats.decRange.min = Math.min(stats.decRange.min, star.dec);
            stats.decRange.max = Math.max(stats.decRange.max, star.dec);
        }
    });

    stats.avgMagnitude = magCount > 0 ? magSum / magCount : 0;
    stats.avgPeriod = periodCount > 0 ? periodSum / periodCount : 0;
    stats.avgDepth = depthCount > 0 ? depthSum / depthCount : 0;

    return stats;
}
