/**
 * Data Loading Module (React/Vite Adapted)
 * Handles parsing and validating star data from various sources
 */

/**
 * Validate star data record
 * @param {Object} star - Star data object
 * @returns {boolean} True if valid, false otherwise
 */
function validateStarData(star) {
    if (star.ra === undefined || star.dec === undefined) {
        return false;
    }

    if (typeof star.ra !== 'number' || star.ra < 0 || star.ra > 360) {
        return false;
    }

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
        }

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
        decRange: { min: Infinity, max: -Infinity }
    };

    stars.forEach(star => {
        if (star.period !== null && !isNaN(star.period)) stats.withPeriod++;
        if (star.depth !== null && !isNaN(star.depth)) stats.withDepth++;
        if (star.magnitude !== null && !isNaN(star.magnitude)) stats.withMagnitude++;

        const catalogType = star.catalog ? star.catalog.substring(0, 3) : 'Unknown';
        stats.catalogs[catalogType] = (stats.catalogs[catalogType] || 0) + 1;

        stats.raRange.min = Math.min(stats.raRange.min, star.ra);
        stats.raRange.max = Math.max(stats.raRange.max, star.ra);
        stats.decRange.min = Math.min(stats.decRange.min, star.dec);
        stats.decRange.max = Math.max(stats.decRange.max, star.dec);
    });

    console.log('📊 Data Statistics:');
    console.log(`   Total stars: ${stats.total}`);
    console.log(`   Catalogs:`, stats.catalogs);
    console.log(`   RA range: ${stats.raRange.min.toFixed(2)}° to ${stats.raRange.max.toFixed(2)}°`);
    console.log(`   DEC range: ${stats.decRange.min.toFixed(2)}° to ${stats.decRange.max.toFixed(2)}°`);
}

/**
 * Filter stars by criteria
 * @param {Array} stars - Array of star objects
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered array of stars
 */
export function filterStars(stars, filters) {
    return stars.filter(star => {
        if (filters.catalog && !star.catalog.startsWith(filters.catalog)) {
            return false;
        }

        if (filters.raMin !== undefined && star.ra < filters.raMin) return false;
        if (filters.raMax !== undefined && star.ra > filters.raMax) return false;
        if (filters.decMin !== undefined && star.dec < filters.decMin) return false;
        if (filters.decMax !== undefined && star.dec > filters.decMax) return false;

        return true;
    });
}
