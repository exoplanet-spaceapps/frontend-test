/**
 * Data Loading Module
 * Handles fetching, parsing, and validating star data
 */

/**
 * Validate star data record
 * @param {Object} star - Star data object
 * @returns {boolean} True if valid, false otherwise
 */
function validateStarData(star) {
    // Check for required fields
    if (star.ra === undefined || star.dec === undefined) {
        return false;
    }

    // Validate RA range (0-360 degrees)
    if (typeof star.ra !== 'number' || star.ra < 0 || star.ra > 360) {
        return false;
    }

    // Validate DEC range (-90 to 90 degrees)
    if (typeof star.dec !== 'number' || star.dec < -90 || star.dec > 90) {
        return false;
    }

    return true;
}

/**
 * Clean and normalize star data
 * @param {Object} star - Raw star data
 * @returns {Object} Cleaned star data
 */
function cleanStarData(star) {
    return {
        ra: parseFloat(star.ra),
        dec: parseFloat(star.dec),
        period: star.period !== undefined ? parseFloat(star.period) : null,
        depth: star.depth !== undefined ? parseFloat(star.depth) : null,
        magnitude: star.magnitude !== undefined ? parseFloat(star.magnitude) : null,
        catalog: star.catalog || 'Unknown',
        // Preserve additional fields
        ...star
    };
}

/**
 * Load star data from JSON file
 * @param {string} url - URL to the JSON file
 * @returns {Promise<Array>} Promise that resolves to array of star objects
 */
export async function loadStarData(url) {
    try {
        console.log(`📡 Fetching star data from ${url}...`);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawData = await response.json();
        console.log(`✅ Loaded ${rawData.length} raw records`);

        // Clean and validate data
        const validStars = [];
        const invalidStars = [];

        rawData.forEach((star, index) => {
            const cleanedStar = cleanStarData(star);

            if (validateStarData(cleanedStar)) {
                validStars.push(cleanedStar);
            } else {
                invalidStars.push({
                    index,
                    reason: getValidationError(cleanedStar),
                    data: star
                });
            }
        });

        console.log(`✅ Valid stars: ${validStars.length}`);
        if (invalidStars.length > 0) {
            console.warn(`⚠️  Invalid stars filtered: ${invalidStars.length}`);
            console.warn('Sample invalid records:', invalidStars.slice(0, 5));
        }

        // Log data statistics
        logDataStatistics(validStars);

        return validStars;

    } catch (error) {
        console.error('❌ Error loading star data:', error);
        throw new Error(`Failed to load star data: ${error.message}`);
    }
}

/**
 * Get validation error message for a star
 * @param {Object} star - Star data object
 * @returns {string} Error message
 */
function getValidationError(star) {
    if (star.ra === undefined) return 'Missing RA';
    if (star.dec === undefined) return 'Missing DEC';
    if (typeof star.ra !== 'number' || isNaN(star.ra)) return 'Invalid RA (not a number)';
    if (typeof star.dec !== 'number' || isNaN(star.dec)) return 'Invalid DEC (not a number)';
    if (star.ra < 0 || star.ra > 360) return `RA out of range: ${star.ra}`;
    if (star.dec < -90 || star.dec > 90) return `DEC out of range: ${star.dec}`;
    return 'Unknown validation error';
}

/**
 * Log statistics about loaded data
 * @param {Array} stars - Array of star objects
 */
function logDataStatistics(stars) {
    const stats = {
        total: stars.length,
        withPeriod: 0,
        withDepth: 0,
        withMagnitude: 0,
        catalogs: {},
        raRange: { min: Infinity, max: -Infinity },
        decRange: { min: Infinity, max: -Infinity },
        periodRange: { min: Infinity, max: -Infinity },
        depthRange: { min: Infinity, max: -Infinity },
        magnitudeRange: { min: Infinity, max: -Infinity }
    };

    stars.forEach(star => {
        // Count fields
        if (star.period !== null && !isNaN(star.period)) {
            stats.withPeriod++;
            stats.periodRange.min = Math.min(stats.periodRange.min, star.period);
            stats.periodRange.max = Math.max(stats.periodRange.max, star.period);
        }

        if (star.depth !== null && !isNaN(star.depth)) {
            stats.withDepth++;
            stats.depthRange.min = Math.min(stats.depthRange.min, star.depth);
            stats.depthRange.max = Math.max(stats.depthRange.max, star.depth);
        }

        if (star.magnitude !== null && !isNaN(star.magnitude)) {
            stats.withMagnitude++;
            stats.magnitudeRange.min = Math.min(stats.magnitudeRange.min, star.magnitude);
            stats.magnitudeRange.max = Math.max(stats.magnitudeRange.max, star.magnitude);
        }

        // Count catalogs
        const catalogType = star.catalog ? star.catalog.substring(0, 3) : 'Unknown';
        stats.catalogs[catalogType] = (stats.catalogs[catalogType] || 0) + 1;

        // Track ranges
        stats.raRange.min = Math.min(stats.raRange.min, star.ra);
        stats.raRange.max = Math.max(stats.raRange.max, star.ra);
        stats.decRange.min = Math.min(stats.decRange.min, star.dec);
        stats.decRange.max = Math.max(stats.decRange.max, star.dec);
    });

    console.log('📊 Data Statistics:');
    console.log(`   Total stars: ${stats.total}`);
    console.log(`   With period: ${stats.withPeriod} (${(stats.withPeriod/stats.total*100).toFixed(1)}%)`);
    console.log(`   With depth: ${stats.withDepth} (${(stats.withDepth/stats.total*100).toFixed(1)}%)`);
    console.log(`   With magnitude: ${stats.withMagnitude} (${(stats.withMagnitude/stats.total*100).toFixed(1)}%)`);
    console.log(`   Catalogs:`, stats.catalogs);
    console.log(`   RA range: ${stats.raRange.min.toFixed(2)}° to ${stats.raRange.max.toFixed(2)}°`);
    console.log(`   DEC range: ${stats.decRange.min.toFixed(2)}° to ${stats.decRange.max.toFixed(2)}°`);

    if (stats.withPeriod > 0) {
        console.log(`   Period range: ${stats.periodRange.min.toFixed(2)} to ${stats.periodRange.max.toFixed(2)} days`);
    }

    if (stats.withDepth > 0) {
        console.log(`   Depth range: ${stats.depthRange.min.toFixed(4)} to ${stats.depthRange.max.toFixed(4)}`);
    }

    if (stats.withMagnitude > 0) {
        console.log(`   Magnitude range: ${stats.magnitudeRange.min.toFixed(2)} to ${stats.magnitudeRange.max.toFixed(2)}`);
    }
}

/**
 * Filter stars by criteria
 * @param {Array} stars - Array of star objects
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered array of stars
 */
export function filterStars(stars, filters) {
    return stars.filter(star => {
        // Filter by catalog type
        if (filters.catalog && !star.catalog.startsWith(filters.catalog)) {
            return false;
        }

        // Filter by RA range
        if (filters.raMin !== undefined && star.ra < filters.raMin) {
            return false;
        }
        if (filters.raMax !== undefined && star.ra > filters.raMax) {
            return false;
        }

        // Filter by DEC range
        if (filters.decMin !== undefined && star.dec < filters.decMin) {
            return false;
        }
        if (filters.decMax !== undefined && star.dec > filters.decMax) {
            return false;
        }

        // Filter by period range
        if (filters.periodMin !== undefined && (star.period === null || star.period < filters.periodMin)) {
            return false;
        }
        if (filters.periodMax !== undefined && (star.period === null || star.period > filters.periodMax)) {
            return false;
        }

        // Filter by magnitude range
        if (filters.magnitudeMin !== undefined && (star.magnitude === null || star.magnitude < filters.magnitudeMin)) {
            return false;
        }
        if (filters.magnitudeMax !== undefined && (star.magnitude === null || star.magnitude > filters.magnitudeMax)) {
            return false;
        }

        return true;
    });
}

/**
 * Search stars by text query
 * @param {Array} stars - Array of star objects
 * @param {string} query - Search query
 * @returns {Array} Matching stars
 */
export function searchStars(stars, query) {
    const lowerQuery = query.toLowerCase();

    return stars.filter(star => {
        // Search in catalog name
        if (star.catalog && star.catalog.toLowerCase().includes(lowerQuery)) {
            return true;
        }

        // Search in any string fields
        for (const [key, value] of Object.entries(star)) {
            if (typeof value === 'string' && value.toLowerCase().includes(lowerQuery)) {
                return true;
            }
        }

        return false;
    });
}

/**
 * Sort stars by a field
 * @param {Array} stars - Array of star objects
 * @param {string} field - Field to sort by
 * @param {boolean} ascending - Sort order
 * @returns {Array} Sorted array
 */
export function sortStars(stars, field, ascending = true) {
    return [...stars].sort((a, b) => {
        const aVal = a[field];
        const bVal = b[field];

        // Handle null/undefined values
        if (aVal === null || aVal === undefined) return 1;
        if (bVal === null || bVal === undefined) return -1;

        const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        return ascending ? comparison : -comparison;
    });
}
