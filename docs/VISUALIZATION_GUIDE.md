# 3D Universe Visualization Guide

## Overview

Interactive Three.js-based visualization of exoplanet host stars with real-time 3D rendering, celestial coordinate conversion, and detailed star information display.

## Files Created

### Core JavaScript Modules (src/js/)

1. **main.js** - Main scene setup and animation loop
   - Three.js scene initialization
   - Camera and renderer configuration
   - Lighting setup (ambient, directional, point lights)
   - Animation loop with FPS tracking
   - Star selection with raycasting
   - Responsive canvas handling

2. **starRenderer.js** - Star rendering and coordinate conversion
   - RA/DEC to Cartesian coordinate conversion
   - Particle system for star field
   - Color coding by catalog (TIC=blue, KIC=yellow)
   - Dynamic star sizing based on properties
   - Custom shader material with glow effects

3. **dataLoader.js** - Data loading and validation
   - JSON data fetching and parsing
   - Coordinate validation (RA: 0-360°, DEC: -90° to 90°)
   - Data cleaning and normalization
   - Statistics logging
   - Filter and search utilities

4. **controls.js** - User interaction and UI
   - OrbitControls integration
   - Star selection and info panel
   - Keyboard shortcuts
   - Preset camera views
   - FPS counter and help panel

## Features Implemented

### Core Features
✅ 3D star field rendering with particle system
✅ RA/DEC to Cartesian coordinate conversion
✅ Color-coded stars by catalog type
✅ Dynamic star sizing based on magnitude/depth/period
✅ Interactive camera controls (orbit, zoom, pan)
✅ Clickable stars with detailed info panel
✅ Loading screen with progress indication
✅ FPS counter for performance monitoring

### Visual Features
✅ Shader-based star rendering with glow effect
✅ Atmospheric lighting (ambient + directional + point lights)
✅ Fog for depth perception
✅ Smooth star highlighting on selection
✅ Additive blending for realistic star appearance
✅ Subtle auto-rotation for depth

### Interaction Features
✅ Mouse controls (rotate, pan, zoom)
✅ Star click detection with raycasting
✅ Detailed info panel with star properties
✅ Keyboard shortcuts (1-4: views, F: FPS, H: help, ESC: close)
✅ Preset camera views (front, top, side, isometric)
✅ Responsive canvas (auto-resize)

## Coordinate Conversion Formula

```javascript
// Convert RA/DEC (degrees) to Cartesian coordinates
const radius = 100;  // All stars at same distance
const raRad = (ra * Math.PI) / 180;
const decRad = (dec * Math.PI) / 180;

x = radius * Math.cos(decRad) * Math.cos(raRad);
y = radius * Math.sin(decRad);
z = radius * Math.cos(decRad) * Math.sin(raRad);
```

## Star Properties

### Color Coding
- **Blue (0x4488ff)**: TESS Input Catalog (TIC)
- **Yellow (0xffdd44)**: Kepler Input Catalog (KIC)
- **Purple (0x8888ff)**: Unknown catalog

### Size Calculation
Star size is dynamically calculated based on:
1. **Transit depth**: Larger depth = larger star
2. **Magnitude**: Brighter stars (lower magnitude) = larger
3. **Orbital period**: Longer period = slightly larger

Size range: 0.5 to 4.0 units

## Required Dependencies

### Three.js (ES6 Modules)
```json
{
  "dependencies": {
    "three": "^0.160.0"
  }
}
```

### Import Map (for browser)
```html
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
    "three/examples/jsm/controls/OrbitControls.js": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js"
  }
}
</script>
```

## HTML Structure Required

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exoplanet Universe</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        #canvas-container {
            width: 100vw;
            height: 100vh;
        }
        #loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000011;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            z-index: 1000;
        }
        .visible {
            opacity: 1 !important;
        }
    </style>
</head>
<body>
    <div id="canvas-container"></div>
    <div id="loading-screen">
        <div id="loading-text">Loading...</div>
    </div>

    <script type="importmap">
    {
      "imports": {
        "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
        "three/examples/jsm/controls/OrbitControls.js": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js"
      }
    }
    </script>
    <script type="module" src="src/js/main.js"></script>
</body>
</html>
```

## Data Format

The visualization expects `data/stars.json` with this structure:

```json
[
  {
    "ra": 123.4567,      // Right Ascension (0-360°)
    "dec": 45.6789,      // Declination (-90° to 90°)
    "period": 3.5,       // Orbital period (days)
    "depth": 0.001234,   // Transit depth
    "magnitude": 12.34,  // Apparent magnitude
    "catalog": "TIC123456789"  // Catalog identifier
  }
]
```

## Keyboard Controls

- **1-4**: Preset camera views (front, top, side, isometric)
- **F**: Toggle FPS counter
- **H**: Toggle help panel
- **ESC**: Close info panel

## Mouse Controls

- **Left Click + Drag**: Rotate view
- **Right Click + Drag**: Pan view
- **Scroll Wheel**: Zoom in/out
- **Click Star**: Show details

## Performance

### Optimizations
- Efficient particle system for thousands of stars
- Custom shader material for GPU-accelerated rendering
- Raycaster threshold tuning for accurate selection
- Damped controls for smooth interaction
- Pixel ratio capping at 2x for performance

### Expected Performance
- 60 FPS with 1000+ stars on modern hardware
- Smooth interaction even with large datasets
- Responsive on mobile devices (with touch controls)

## Testing Instructions

### 1. Setup
```bash
# Ensure data file exists
ls data/stars.json

# Serve files with a local server (required for ES6 modules)
npx http-server -p 8080
```

### 2. Open Browser
Navigate to `http://localhost:8080`

### 3. Verify Features
- [ ] Stars load and render correctly
- [ ] Colors match catalog types (blue/yellow)
- [ ] Camera controls work smoothly
- [ ] Clicking stars shows info panel
- [ ] Keyboard shortcuts function
- [ ] FPS counter displays (press F)
- [ ] Help panel appears (press H)
- [ ] Loading screen shows then disappears
- [ ] Responsive on window resize

### 4. Console Checks
Open browser console and verify:
- No errors
- Data statistics logged
- Star count matches data file
- RA/DEC ranges displayed

## Browser Compatibility

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ⚠️ Requires WebGL support

## Future Enhancements (Optional)

- [ ] Filter panel (by catalog, magnitude, period)
- [ ] Search functionality with autocomplete
- [ ] Constellation lines overlay
- [ ] Export view as image
- [ ] VR mode support
- [ ] Touch controls for mobile
- [ ] Star trails animation
- [ ] Zoom to star feature
- [ ] Multi-select stars
- [ ] Data visualization overlays

## Troubleshooting

### Stars not appearing
- Check browser console for errors
- Verify data/stars.json exists and is valid JSON
- Ensure server is running (ES6 modules require server)
- Check WebGL support: Visit https://get.webgl.org/

### Poor performance
- Lower pixel ratio in main.js
- Reduce star count in data
- Check FPS counter (press F)
- Close other browser tabs

### Controls not working
- Ensure canvas is visible
- Check for JavaScript errors
- Verify OrbitControls loaded correctly

## Architecture

```
src/js/
├── main.js           → Scene setup, animation, events
├── starRenderer.js   → Coordinate conversion, rendering
├── dataLoader.js     → Data fetching, validation
└── controls.js       → UI, interaction, keyboard

data/
└── stars.json        → Star data

docs/
└── VISUALIZATION_GUIDE.md → This file
```

## Credits

- **Three.js**: 3D rendering library
- **NASA Exoplanet Archive**: Data source
- **TESS/Kepler**: Space telescopes providing catalog data
