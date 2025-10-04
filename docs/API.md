# Star Data API Documentation

## Overview
This document describes the data structure and format for the NASA star catalog JSON data used in the 3D visualization.

## Data Source
The star data is provided by Agent 1 (Data Processor) and stored in `/data/stars.json`.

## JSON Schema

### Root Structure
```json
{
  "metadata": {
    "version": "string",
    "dataSource": "string",
    "generatedAt": "ISO8601 timestamp",
    "totalStars": "number",
    "coordinateSystem": "string"
  },
  "stars": [
    // Array of star objects
  ]
}
```

### Star Object Schema

```json
{
  "id": "string",              // Unique identifier (e.g., "HIP-12345" or sequential)
  "name": "string",            // Common name (e.g., "Sirius", "Betelgeuse")
  "catalogId": "string",       // Original catalog ID (HIP/HD/HR number)

  // Position Coordinates
  "coordinates": {
    "ra": "number",            // Right Ascension (0-360 degrees)
    "dec": "number",           // Declination (-90 to 90 degrees)
    "distance": "number"       // Distance in parsecs
  },

  // 3D Cartesian Coordinates (optional, calculated from RA/Dec)
  "position": {
    "x": "number",
    "y": "number",
    "z": "number"
  },

  // Physical Properties
  "magnitude": "number",       // Apparent magnitude (brightness)
  "absoluteMagnitude": "number", // Absolute magnitude
  "spectralType": "string",    // Spectral classification (O, B, A, F, G, K, M)
  "color": "string",           // Hex color code (e.g., "#FFFFFF")
  "temperature": "number",     // Surface temperature in Kelvin

  // Optional Extended Properties
  "luminosity": "number",      // Luminosity relative to Sun
  "radius": "number",          // Radius in solar radii
  "mass": "number",            // Mass in solar masses
  "age": "number",             // Age in billions of years
  "metallicity": "number",     // [Fe/H] metallicity

  // Additional Information
  "constellation": "string",   // Constellation name
  "properMotion": {            // Proper motion in mas/year
    "ra": "number",
    "dec": "number"
  },
  "radialVelocity": "number",  // km/s
  "parallax": "number"         // Parallax in milliarcseconds
}
```

## Example Data

### Minimal Example
```json
{
  "metadata": {
    "version": "1.0",
    "dataSource": "NASA Star Catalog",
    "generatedAt": "2025-10-04T00:00:00Z",
    "totalStars": 10000,
    "coordinateSystem": "ICRS"
  },
  "stars": [
    {
      "id": "star-0001",
      "name": "Sirius",
      "catalogId": "HIP-32349",
      "coordinates": {
        "ra": 101.287,
        "dec": -16.716,
        "distance": 2.64
      },
      "magnitude": -1.46,
      "spectralType": "A1V",
      "color": "#9DB4FF",
      "temperature": 9940
    },
    {
      "id": "star-0002",
      "name": "Betelgeuse",
      "catalogId": "HIP-27989",
      "coordinates": {
        "ra": 88.793,
        "dec": 7.407,
        "distance": 197
      },
      "magnitude": 0.50,
      "spectralType": "M2Iab",
      "color": "#FF4500",
      "temperature": 3500
    }
  ]
}
```

### Complete Example
```json
{
  "id": "star-0001",
  "name": "Sirius",
  "catalogId": "HIP-32349",
  "coordinates": {
    "ra": 101.287,
    "dec": -16.716,
    "distance": 2.64
  },
  "position": {
    "x": -0.52,
    "y": -1.67,
    "z": -2.07
  },
  "magnitude": -1.46,
  "absoluteMagnitude": 1.42,
  "spectralType": "A1V",
  "color": "#9DB4FF",
  "temperature": 9940,
  "luminosity": 25.4,
  "radius": 1.711,
  "mass": 2.063,
  "age": 0.228,
  "metallicity": 0.50,
  "constellation": "Canis Major",
  "properMotion": {
    "ra": -546.01,
    "dec": -1223.08
  },
  "radialVelocity": -5.5,
  "parallax": 379.21
}
```

## Data Validation

### Required Fields
Every star object MUST have:
- `id` (unique)
- `coordinates.ra`
- `coordinates.dec`
- `coordinates.distance`
- `magnitude`
- `spectralType`

### Validation Rules

#### Coordinate Ranges
```javascript
0 <= ra <= 360          // Right Ascension
-90 <= dec <= 90        // Declination
distance > 0            // Distance must be positive
```

#### Magnitude Range
```javascript
-2 <= magnitude <= 15   // Typical range for visible stars
```

#### Spectral Types
Valid values: `O`, `B`, `A`, `F`, `G`, `K`, `M` (may include subtype like `G2V`)

## Data Loading API

### JavaScript Data Loader

```javascript
// src/js/dataLoader.js

/**
 * Load star data from JSON file
 * @param {string} url - Path to stars.json
 * @returns {Promise<Object>} Parsed star data
 */
async function loadStarData(url = '/data/stars.json') {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Validate data
    validateStarData(data);

    return data;
  } catch (error) {
    console.error('Error loading star data:', error);
    throw error;
  }
}

/**
 * Validate star data structure
 * @param {Object} data - Star data object
 * @throws {Error} If validation fails
 */
function validateStarData(data) {
  if (!data.metadata || !data.stars) {
    throw new Error('Invalid data structure: missing metadata or stars');
  }

  if (!Array.isArray(data.stars)) {
    throw new Error('Invalid data structure: stars must be an array');
  }

  // Validate required fields for each star
  data.stars.forEach((star, index) => {
    const required = ['id', 'coordinates', 'magnitude', 'spectralType'];
    required.forEach(field => {
      if (!star[field]) {
        throw new Error(`Star ${index}: missing required field '${field}'`);
      }
    });

    // Validate coordinate ranges
    const { ra, dec, distance } = star.coordinates;
    if (ra < 0 || ra > 360) {
      throw new Error(`Star ${star.id}: invalid RA value ${ra}`);
    }
    if (dec < -90 || dec > 90) {
      throw new Error(`Star ${star.id}: invalid Dec value ${dec}`);
    }
    if (distance <= 0) {
      throw new Error(`Star ${star.id}: invalid distance ${distance}`);
    }
  });

  console.log(`✓ Validated ${data.stars.length} stars`);
}
```

## Coordinate Conversion

### RA/Dec to Cartesian (3D)

```javascript
/**
 * Convert RA/Dec coordinates to Cartesian 3D coordinates
 * @param {number} ra - Right Ascension in degrees
 * @param {number} dec - Declination in degrees
 * @param {number} distance - Distance in parsecs
 * @returns {Object} {x, y, z} coordinates
 */
function raDecToCartesian(ra, dec, distance) {
  // Convert degrees to radians
  const raRad = ra * (Math.PI / 180);
  const decRad = dec * (Math.PI / 180);

  // Calculate Cartesian coordinates
  const x = distance * Math.cos(decRad) * Math.cos(raRad);
  const y = distance * Math.cos(decRad) * Math.sin(raRad);
  const z = distance * Math.sin(decRad);

  return { x, y, z };
}
```

## Color Mapping

### Spectral Type to Color

```javascript
const SPECTRAL_COLORS = {
  'O': '#9BB0FF', // Blue
  'B': '#AABFFF', // Blue-white
  'A': '#CAD7FF', // White
  'F': '#F8F7FF', // Yellow-white
  'G': '#FFF4EA', // Yellow (like our Sun)
  'K': '#FFD2A1', // Orange
  'M': '#FFCC6F'  // Red-orange
};

/**
 * Get color for star based on spectral type
 * @param {string} spectralType - Spectral classification
 * @returns {string} Hex color code
 */
function getStarColor(spectralType) {
  const mainType = spectralType.charAt(0).toUpperCase();
  return SPECTRAL_COLORS[mainType] || '#FFFFFF';
}
```

## Data Filtering & Search

### Filter by Magnitude
```javascript
function filterByMagnitude(stars, minMag, maxMag) {
  return stars.filter(star =>
    star.magnitude >= minMag && star.magnitude <= maxMag
  );
}
```

### Filter by Distance
```javascript
function filterByDistance(stars, maxDistance) {
  return stars.filter(star =>
    star.coordinates.distance <= maxDistance
  );
}
```

### Search by Name
```javascript
function searchByName(stars, query) {
  const lowerQuery = query.toLowerCase();
  return stars.filter(star =>
    star.name?.toLowerCase().includes(lowerQuery) ||
    star.catalogId?.toLowerCase().includes(lowerQuery)
  );
}
```

## Performance Considerations

### Data Size Estimates
- **1,000 stars**: ~200 KB
- **10,000 stars**: ~2 MB
- **100,000 stars**: ~20 MB

### Optimization Strategies
1. **Lazy Loading**: Load data in chunks
2. **Level of Detail**: Filter stars by magnitude/distance
3. **Data Compression**: Use gzip compression (automatic with GitHub Pages)
4. **Caching**: Store processed data in browser cache

### Example: Progressive Loading
```javascript
async function loadStarsProgressive(chunkSize = 5000) {
  const data = await loadStarData();
  const chunks = [];

  for (let i = 0; i < data.stars.length; i += chunkSize) {
    chunks.push(data.stars.slice(i, i + chunkSize));
  }

  return chunks;
}
```

## Error Handling

### Common Errors

1. **404 Not Found**: `stars.json` missing
2. **JSON Parse Error**: Invalid JSON format
3. **Validation Error**: Missing required fields
4. **CORS Error**: Incorrect file path

### Error Recovery
```javascript
async function loadStarDataWithFallback() {
  try {
    return await loadStarData('/data/stars.json');
  } catch (error) {
    console.warn('Failed to load from /data/, trying /public/data/');
    try {
      return await loadStarData('/public/data/stars.json');
    } catch (fallbackError) {
      console.error('All data sources failed');
      return { metadata: {}, stars: [] };
    }
  }
}
```

## Testing Data

### Minimal Test Dataset
For development/testing, use a minimal dataset:

```json
{
  "metadata": {
    "version": "1.0-test",
    "totalStars": 5
  },
  "stars": [
    {"id": "1", "name": "Test Star 1", "coordinates": {"ra": 0, "dec": 0, "distance": 10}, "magnitude": 5, "spectralType": "G"},
    {"id": "2", "name": "Test Star 2", "coordinates": {"ra": 90, "dec": 45, "distance": 20}, "magnitude": 3, "spectralType": "A"},
    {"id": "3", "name": "Test Star 3", "coordinates": {"ra": 180, "dec": -45, "distance": 15}, "magnitude": 4, "spectralType": "K"},
    {"id": "4", "name": "Test Star 4", "coordinates": {"ra": 270, "dec": 30, "distance": 25}, "magnitude": 2, "spectralType": "B"},
    {"id": "5", "name": "Test Star 5", "coordinates": {"ra": 45, "dec": -30, "distance": 30}, "magnitude": 6, "spectralType": "M"}
  ]
}
```

---

**Version**: 1.0.0
**Last Updated**: 2025-10-04
**Contact**: NASA Star Catalog Team
