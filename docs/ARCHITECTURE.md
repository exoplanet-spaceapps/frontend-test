# NASA Star Catalog Visualization - System Architecture

## Overview
This project provides an interactive 3D visualization of NASA star catalog data using Three.js, deployed as a static site on GitHub Pages.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    GitHub Pages                         │
│                   (Static Hosting)                      │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   public/index.html                     │
│              (Main Entry Point)                         │
└─────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   CSS Layer │  │  JS Modules │  │ Data Layer  │
├─────────────┤  ├─────────────┤  ├─────────────┤
│ styles.css  │  │  main.js    │  │stars.json   │
│visualization│  │ renderer.js │  │             │
│   .css      │  │ controls.js │  │             │
│             │  │dataLoader.js│  │             │
│             │  │  utils.js   │  │             │
└─────────────┘  └─────────────┘  └─────────────┘
```

## Directory Structure

```
/
├── public/                 # Deployment directory (GitHub Pages root)
│   ├── index.html         # Main HTML entry point
│   ├── assets/            # Static assets
│   │   ├── models/        # 3D models (if needed)
│   │   └── textures/      # Star textures/sprites
│   └── data/              # Data files
│       └── stars.json     # Star catalog data
│
├── src/                   # Source code
│   ├── js/                # JavaScript modules
│   │   ├── main.js        # Application entry point
│   │   ├── starRenderer.js # Star rendering logic
│   │   ├── controls.js    # Camera/interaction controls
│   │   ├── dataLoader.js  # JSON data loading
│   │   └── utils.js       # Helper functions
│   └── css/               # Stylesheets
│       ├── styles.css     # Global styles
│       └── visualization.css # Visualization-specific styles
│
├── scripts/               # Build scripts
│   └── copy-data.js       # Copy data to public folder
│
├── docs/                  # Documentation
│   ├── ARCHITECTURE.md    # This file
│   ├── DEPLOYMENT.md      # Deployment guide
│   └── API.md            # Data structure documentation
│
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
│
└── package.json           # Dependencies and scripts
```

## Component Architecture

### 1. Data Layer (dataLoader.js)
**Responsibility**: Load and parse star catalog data
- Fetch `stars.json` from `/public/data/`
- Parse JSON data
- Validate data structure
- Provide data to renderer

**Key Functions**:
```javascript
async loadStarData(url)
validateStarData(data)
parseCoordinates(ra, dec, distance)
```

### 2. Rendering Layer (starRenderer.js)
**Responsibility**: Create and manage 3D star visualization
- Initialize Three.js scene
- Create star particles/meshes
- Apply materials and textures
- Handle star colors based on spectral type
- Implement LOD (Level of Detail) for performance

**Key Components**:
```javascript
class StarRenderer {
  initScene()
  createStars(starData)
  updateStarColors(spectralType)
  render()
  dispose()
}
```

### 3. Control Layer (controls.js)
**Responsibility**: Handle user interactions
- Camera orbit controls
- Zoom functionality
- Star selection/clicking
- Touch/mobile controls
- Keyboard shortcuts

**Key Features**:
- OrbitControls integration
- Raycasting for star selection
- Event handling
- Camera animations

### 4. Application Layer (main.js)
**Responsibility**: Application initialization and coordination
- Initialize all modules
- Handle application lifecycle
- Manage loading states
- Coordinate between modules
- Performance monitoring (FPS)

**Lifecycle**:
```javascript
init() → loadData() → setupRenderer() → setupControls() → animate()
```

### 5. Utility Layer (utils.js)
**Responsibility**: Common helper functions
- Coordinate conversions (RA/Dec to 3D)
- Color mapping (spectral type to color)
- Performance utilities
- Data formatters

## Data Flow

```
User Opens Page
       ↓
  index.html loads
       ↓
   main.js initializes
       ↓
 dataLoader.js fetches stars.json
       ↓
  Data validation
       ↓
starRenderer.js creates 3D scene
       ↓
 controls.js enables interaction
       ↓
  Animation loop starts
       ↓
User interacts with visualization
```

## Technology Stack

### Core Technologies
- **Three.js** (v0.160.0): 3D rendering engine
- **Vanilla JavaScript** (ES6+): No framework overhead
- **CSS3**: Styling and animations
- **HTML5 Canvas**: Rendering surface

### Development Tools
- **http-server**: Local development server
- **gh-pages**: GitHub Pages deployment
- **ESLint**: Code linting
- **Jest**: Testing framework

## Performance Considerations

### Optimization Strategies
1. **Particle Systems**: Use THREE.Points for large star counts
2. **LOD (Level of Detail)**: Reduce detail for distant stars
3. **Frustum Culling**: Only render visible stars
4. **Texture Atlasing**: Combine star textures
5. **Lazy Loading**: Load data progressively if large

### Target Performance
- **60 FPS** at 10,000+ stars
- **< 3s** initial load time
- **< 100MB** total page weight

## Deployment Architecture

### GitHub Pages Configuration
- **Source**: `public/` directory
- **Build Process**: GitHub Actions workflow
- **CDN**: GitHub's global CDN
- **Custom Domain**: Optional

### Build Pipeline
```
Source Code → GitHub Actions → Build Assets → Deploy to gh-pages → Live Site
```

## Security Considerations
- No backend/server-side code
- All data is public (star catalog)
- Static content only
- No user data collection
- CSP (Content Security Policy) headers via GitHub Pages

## Scalability
- **Current**: Up to 50,000 stars
- **Optimized**: Up to 100,000+ stars with LOD
- **CDN**: Global distribution via GitHub
- **Caching**: Browser and CDN caching

## Future Enhancements
1. WebGL 2.0 support
2. WebAssembly for data processing
3. Progressive Web App (PWA) features
4. Advanced filtering/search
5. Constellation overlays
6. Star trails animation
7. VR/AR support

## Browser Compatibility
- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile: iOS Safari 14+, Chrome Mobile 90+

## Accessibility
- Keyboard navigation support
- ARIA labels for UI elements
- High contrast mode support
- Screen reader compatible info panels

---

**Version**: 1.0.0
**Last Updated**: 2025-10-04
**Maintainer**: NASA Star Catalog Team
