/**
 * Star Rendering Module (React/Vite Adapted)
 * Handles conversion of RA/DEC coordinates to 3D space and star visualization
 */

import * as THREE from 'three';
import { estimateSpectralClass, getSpectralType, getSpectralColor } from '../utils/spectralClass';

/**
 * Convert RA/DEC coordinates to 3D Cartesian coordinates
 * @param {number} ra - Right Ascension in degrees (0-360)
 * @param {number} dec - Declination in degrees (-90 to 90)
 * @param {number} radius - Distance from origin (default: 150 for celestial sphere)
 * @returns {Object} {x, y, z} Cartesian coordinates
 */
export function raDec2Cartesian(ra, dec, radius = 100) {
    const raRad = (ra * Math.PI) / 180;
    const decRad = (dec * Math.PI) / 180;

    const x = radius * Math.cos(decRad) * Math.cos(raRad);
    const y = radius * Math.sin(decRad);
    const z = -radius * Math.cos(decRad) * Math.sin(raRad); // Negative z for correct orientation

    return { x, y, z };
}

/**
 * Determine star color based on spectral classification (OBAFGKM)
 * @param {Object} star - Star data object with magnitude
 * @returns {THREE.Color} Three.js color object based on stellar temperature
 */
export function getStarColor(star) {
    // Estimate spectral class from magnitude if not provided
    const spectralClass = star.spectralClass || estimateSpectralClass(star.magnitude || 10);
    const spectralType = getSpectralType(spectralClass);

    // Get color based on OBAFGKM classification
    return getSpectralColor(spectralType);
}

/**
 * Calculate star size based on planet properties
 * @param {Object} star - Star data object
 * @returns {number} Star size
 */
export function calculateStarSize(star) {
    // Base size increased for better visibility
    let size = 4.0;

    if (star.magnitude && !isNaN(star.magnitude)) {
        // Brighter stars (lower magnitude) = larger size
        const magFactor = (15 - Math.min(star.magnitude, 15)) / 10;
        size += magFactor * 2.0;
    }

    if (star.depth && !isNaN(star.depth)) {
        const depthFactor = Math.log10(Math.abs(star.depth) + 1);
        size += depthFactor * 1.0;
    }

    if (star.period && !isNaN(star.period)) {
        const periodFactor = Math.log10(star.period + 1) / 5;
        size += periodFactor * 0.8;
    }

    // Size range increased for better visibility
    return Math.max(3.0, Math.min(size, 10.0));
}

/**
 * Create particle system for star field with highlight/dim support
 * @param {Array} relevantStars - Stars from uploaded data (highlighted with OBAFGKM colors)
 * @param {Array} otherStars - Background stars (dimmed, low opacity)
 * @param {Object} scoresByTid - Score map for identifying candidates
 * @returns {THREE.Points} Three.js Points object representing the star field
 */
export function createStarField(relevantStars, otherStars = [], scoresByTid = {}) {
    const positions = [];
    const colors = [];
    const sizes = [];
    const alphas = [];

    // Add relevant stars (from uploaded data) - full brightness with OBAFGKM colors
    relevantStars.forEach(star => {
        const { x, y, z } = raDec2Cartesian(star.ra, star.dec);
        positions.push(x, y, z);

        // Use OBAFGKM spectral colors
        const color = getStarColor(star);
        colors.push(color.r, color.g, color.b);

        // Larger size for candidates
        const size = calculateStarSize(star);
        sizes.push(size);

        // Full opacity for relevant stars
        alphas.push(1.0);
    });

    // Add background stars - dimmed but visible (to show sphere shape)
    otherStars.forEach(star => {
        const { x, y, z } = raDec2Cartesian(star.ra, star.dec);
        positions.push(x, y, z);

        // Subtle gray/blue color for background stars (to show sphere shape)
        colors.push(0.4, 0.4, 0.5); // Subtle blue-gray

        // Small but visible size
        sizes.push(1.5);

        // Medium-low opacity for background (visible but not distracting)
        alphas.push(0.35);
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('alpha', new THREE.Float32BufferAttribute(alphas, 1));

    const material = new THREE.ShaderMaterial({
        uniforms: {
            pointTexture: { value: createStarTexture() }
        },
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            attribute float alpha;
            varying vec3 vColor;
            varying float vAlpha;

            void main() {
                vColor = color;
                vAlpha = alpha;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                // Size multiplier increased for better visibility
                gl_PointSize = size * (800.0 / length(mvPosition.xyz));
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform sampler2D pointTexture;
            varying vec3 vColor;
            varying float vAlpha;

            void main() {
                vec4 texColor = texture2D(pointTexture, gl_PointCoord);
                float dist = distance(gl_PointCoord, vec2(0.5));

                // Enhanced brightness and glow - increased for better visibility
                float coreBrightness = 1.0 - smoothstep(0.0, 0.2, dist);
                float outerGlow = 1.0 - smoothstep(0.1, 0.5, dist);

                // Much brighter colors - increased multipliers
                vec3 finalColor = vColor * (coreBrightness * 5.0 + outerGlow * 3.0);

                // Use vAlpha to control overall opacity (for dimming background stars)
                float alpha = texColor.a * outerGlow * vAlpha;

                gl_FragColor = vec4(finalColor, alpha);
            }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    const starField = new THREE.Points(geometry, material);
    const totalStars = relevantStars.length + otherStars.length;
    console.log(`Created star field: ${relevantStars.length} highlighted + ${otherStars.length} dimmed = ${totalStars} total`);
    return starField;
}

/**
 * Create star texture for point sprite
 * @returns {THREE.Texture} Texture for star rendering
 */
function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;

    const ctx = canvas.getContext('2d');
    const center = 64;

    const gradient = ctx.createRadialGradient(center, center, 0, center, center, 64);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.9)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    ctx.globalCompositeOperation = 'screen';

    const hGradient = ctx.createLinearGradient(0, center, 128, center);
    hGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
    hGradient.addColorStop(0.45, 'rgba(255, 255, 255, 0.3)');
    hGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.6)');
    hGradient.addColorStop(0.55, 'rgba(255, 255, 255, 0.3)');
    hGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = hGradient;
    ctx.fillRect(0, center - 3, 128, 6);

    const vGradient = ctx.createLinearGradient(center, 0, center, 128);
    vGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
    vGradient.addColorStop(0.45, 'rgba(255, 255, 255, 0.3)');
    vGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.6)');
    vGradient.addColorStop(0.55, 'rgba(255, 255, 255, 0.3)');
    vGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = vGradient;
    ctx.fillRect(center - 3, 0, 6, 128);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
}

/**
 * Update star colors (e.g., for filtering or highlighting)
 * @param {THREE.Points} starField - The star field object
 * @param {Function} colorFunction - Function that takes star data and returns a color
 * @param {Array} starData - Array of star objects
 */
export function updateStarColors(starField, colorFunction, starData) {
    const colors = starField.geometry.attributes.color;

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
        const catalog = star.catalog ? star.catalog.substring(0, 3) : 'Unknown';
        stats.byType[catalog] = (stats.byType[catalog] || 0) + 1;

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
