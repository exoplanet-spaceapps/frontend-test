# 🌌 Exoplanet Universe - 3D Visualization

An interactive 3D visualization of NASA exoplanet host stars from TESS and Kepler missions, built with Three.js. This project transforms celestial coordinate data (RA/DEC) into an immersive, explorable universe where each star represents a potential exoplanet host.

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Three.js](https://img.shields.io/badge/Three.js-v0.160.0-green.svg)](https://threejs.org/)
[![NASA Data](https://img.shields.io/badge/Data-NASA%20Exoplanet-orange.svg)](https://exoplanets.nasa.gov/)

## ✨ Features

### 🎨 Interactive 3D Visualization
- **Spherical Star Field**: Stars plotted in 3D space using authentic RA/DEC celestial coordinates
- **Real-time Rendering**: Smooth 60 FPS performance with optimized Three.js particle system
- **Custom Shader Effects**: Enhanced star rendering with glow effects and cross-shaped flares
- **Interactive Controls**: OrbitControls for intuitive navigation (rotate, pan, zoom)

### 🔍 Data-Driven Insights
- **Dual Catalog Support**: TESS (TIC) and Kepler (KIC) exoplanet candidates
- **Color-Coded Classification**:
  - 🔵 Blue stars: Confirmed exoplanet candidates
  - 🟡 Orange stars: False positives
- **Dynamic Sizing**: Star sizes based on transit depth, magnitude, and orbital period
- **Real-time Statistics**: Live counts of TESS, Kepler, and total stars

### 🎯 Advanced Features
- **Star Selection**: Click any star to view detailed information
- **Smart Data Validation**: Automatic filtering and validation of coordinate data
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Keyboard Shortcuts**: Quick camera presets and UI toggles
- **FPS Monitor**: Optional performance tracking

## 🛠️ Technology Stack

### Frontend
- **Three.js** (v0.160.0) - 3D graphics rendering
- **OrbitControls** - Camera manipulation
- **Vanilla JavaScript** (ES6+) - Modular architecture
- **HTML5 Canvas** - WebGL rendering surface

### Styling
- **Custom CSS3** - Modern UI with glassmorphism effects
- **CSS Animations** - Smooth transitions and loading states
- **Responsive Grid** - Mobile-first design approach

### Data Processing
- **Node.js** - CSV to JSON conversion
- **Custom Parsers** - Celestial coordinate validation
- **Data Validation** - Automated quality checks

### Testing
- **Jest** (v29.7.0) - Unit testing framework
- **Custom Test Suites** - Coordinate validation and data integrity

### Development Tools
- **http-server** (v14.1.1) - Local development server
- **ESLint** (v8.56.0) - Code quality and consistency
- **gh-pages** (v6.1.1) - Deployment automation

## 📂 Project Structure

```
frontend-test/
├── index.html                    # Main HTML entry point
├── package.json                  # Project dependencies and scripts
├── LICENSE                       # Apache 2.0 License
├── CLAUDE.md                     # Development configuration
│
├── src/                          # Source code
│   ├── js/                       # JavaScript modules
│   │   ├── main.js              # Scene setup and animation loop
│   │   ├── starRenderer.js      # Star field creation and shaders
│   │   ├── dataLoader.js        # Data fetching and validation
│   │   └── controls.js          # User interaction handlers
│   │
│   └── css/                      # Stylesheets
│       ├── styles.css           # Global styles and UI components
│       └── visualization.css    # Canvas and visual effects
│
├── data/                         # Data files
│   ├── supervised_dataset.csv   # Raw NASA exoplanet data
│   └── initial_dataset.json     # Processed JSON data
│
├── scripts/                      # Data processing scripts
│   ├── package.json             # Script dependencies
│   ├── csv-to-json.js          # CSV to JSON converter
│   ├── fetch-coordinates.js     # Coordinate enrichment (if needed)
│   └── validate-data.js        # Data validation
│
├── tests/                        # Test suites
│   ├── coordinate-fetcher.test.js
│   ├── data-validation.test.js
│   └── validate-stars.test.js
│
└── memory/                       # Claude Flow coordination
    ├── agents/                   # Agent memory storage
    └── sessions/                 # Session data
```

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- Modern web browser with WebGL support

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/exoplanet-spaceapps/frontend-test.git
cd frontend-test

# 2. Install frontend dependencies
cd frontend
npm install
```

### Data Preparation (Optional)

The project includes pre-processed data in `frontend/public/data/stars.json`. If you need to process raw data:

```bash
# From project root
cd scripts

# Convert CSV to JSON (if you have raw data)
npm run convert

# Validate data quality
npm run validate

# Return to frontend directory
cd ../frontend
```

## 🎮 Usage

### Development Server

```bash
# Make sure you're in the frontend directory
cd frontend

# Start Vite development server
npm run dev
```

This will:
1. Start Vite development server on port 5173
2. Display: `Local: http://localhost:5173/frontend/`
3. Enable Hot Module Replacement (HMR) for instant updates
4. Open your browser automatically

### Building for Production

```bash
# Navigate to frontend directory
cd frontend

# Build the application
npm run build
```

This will:
1. Compile and optimize all React components
2. Bundle JavaScript and CSS files with Vite
3. Minify and optimize assets
4. Generate production files in `frontend/dist/` directory

**Preview the build (optional):**
```bash
# After building, preview the production build locally
npm run preview
```

### Running Tests

```bash
# From frontend directory
cd frontend

# Run tests with Vitest
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint
```

### Deployment

```bash
# From frontend directory
cd frontend

# Deploy to GitHub Pages (builds and deploys automatically)
npm run deploy
```

The site will be deployed to: `https://exoplanet-spaceapps.github.io/frontend/`

## 🎯 How to Use the Application

### Navigation Controls

**Mouse Controls:**
- **Left Click + Drag**: Rotate the view
- **Right Click + Drag**: Pan the camera
- **Scroll Wheel**: Zoom in/out
- **Click on Star**: View detailed information

**Keyboard Shortcuts:**
- **1**: Front view
- **2**: Top view
- **3**: Side view
- **4**: Isometric view
- **F**: Toggle FPS counter
- **H**: Toggle help panel
- **ESC**: Close info panel

### Understanding the Visualization

**Star Colors:**
- 🔵 **Blue (Cyan)**: Confirmed exoplanet candidates
- 🟡 **Orange**: False positive detections

**Star Sizes:**
- Size is determined by:
  - Transit depth (larger depth = more visible)
  - Stellar magnitude (brighter stars = larger)
  - Orbital period (longer period = slightly larger)

**Coordinate System:**
- Stars are positioned using spherical coordinates (RA/DEC)
- RA (Right Ascension): 0-360 degrees
- DEC (Declination): -90 to +90 degrees
- All stars are projected onto a sphere of radius 100 units

## 🔧 Key Components

### main.js
- **Scene Initialization**: Sets up Three.js scene, camera, and renderer
- **Animation Loop**: 60 FPS rendering with requestAnimationFrame
- **Event Handling**: Window resize, mouse clicks, and keyboard input
- **Performance Tracking**: FPS calculation and monitoring

### starRenderer.js
- **Coordinate Conversion**: RA/DEC to Cartesian (x, y, z)
- **Custom Shaders**: GLSL vertex and fragment shaders for star effects
- **Star Classification**: Color assignment based on exoplanet labels
- **Dynamic Sizing**: Size calculation based on stellar properties
- **Texture Generation**: Procedural star textures with glow and flares

### dataLoader.js
- **Data Fetching**: Async loading of JSON star data
- **Validation**: Coordinate range checking and data cleaning
- **Statistics**: Real-time data analysis and logging
- **Filtering**: Advanced filtering by catalog, coordinates, and properties
- **Searching**: Text-based star search functionality

### controls.js
- **Star Selection**: Click detection and information display
- **UI Panels**: Dynamic creation of info panels
- **Keyboard Shortcuts**: Preset views and utility toggles
- **Camera Presets**: Predefined viewpoints for exploration

## 📊 Data Format

### Input CSV Columns
```
label, source, toi, tid, target_id, period, depth, duration, kepid
```

### Processed JSON Structure
```json
{
  "label": 1,                    // 1 = confirmed, 0 = false positive
  "source": "TOI_Candidate",     // Data source
  "toi": 1001.01,               // TESS Object of Interest ID
  "tid": 88863718,              // TESS Input Catalog ID
  "target_id": "TIC88863718",   // Full target identifier
  "period": 1.9316462,          // Orbital period (days)
  "depth": 1286,                // Transit depth (ppm)
  "duration": 3.166,            // Transit duration (hours)
  "kepid": null,                // Kepler Input Catalog ID (if applicable)
  "ra": 45.2134,                // Right Ascension (degrees)
  "dec": -12.4567,              // Declination (degrees)
  "catalog": "TIC"              // Catalog type (TIC/KIC)
}
```

## 🧪 Testing

### Unit Tests

```bash
# Run all tests
npm test

# Test coordinate validation
npm test coordinate-fetcher.test.js

# Test data validation
npm test data-validation.test.js

# Test star validation
npm test validate-stars.test.js
```

### Test Coverage
- Coordinate validation (RA: 0-360°, DEC: -90° to 90°)
- Data integrity checks
- File parsing accuracy
- Star field generation

## 🎨 Configuration

### Rendering Settings

Edit in `src/js/main.js`:
```javascript
// Camera settings
camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
camera.position.set(0, 50, 150);

// OrbitControls settings
controls.minDistance = 50;
controls.maxDistance = 300;
controls.dampingFactor = 0.05;

// Raycaster threshold (star selection sensitivity)
raycaster.params.Points.threshold = 2;
```

### Visual Effects

Edit shader code in `src/js/starRenderer.js`:
```javascript
// Star size multiplier
gl_PointSize = size * (300.0 / -mvPosition.z);

// Glow intensity
float coreBrightness = 1.0 - smoothstep(0.0, 0.3, dist);
float outerGlow = 1.0 - smoothstep(0.2, 0.5, dist);
```

## 🔬 NASA Data Sources

This project uses data from:

- **TESS (Transiting Exoplanet Survey Satellite)**: NASA's exoplanet hunting mission launched in 2018
- **Kepler Space Telescope**: NASA's pioneering exoplanet mission (2009-2018)

**Data Credits:**
- NASA Exoplanet Archive
- TESS Input Catalog (TIC)
- Kepler Input Catalog (KIC)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting
- Use meaningful commit messages

## 📜 Scripts Reference

| Script | Command | Description |
|--------|---------|-------------|
| **dev** | `npm run dev` | Start development server on port 8080 |
| **build** | `npm run build` | Build and prepare data for production |
| **copy-data** | `npm run copy-data` | Copy data files to public directory |
| **deploy** | `npm run deploy` | Deploy to GitHub Pages |
| **lint** | `npm run lint` | Run ESLint on JavaScript files |
| **test** | `npm run test` | Run Jest test suite |

## 🐛 Known Issues & Limitations

- Coordinate data (`ra`, `dec`) must be fetched from external sources (placeholders in dataset)
- Some stars may have incomplete data (period, depth, magnitude)
- Mobile performance may vary on older devices
- WebGL support required (check browser compatibility)

## 🔮 Future Enhancements

- [ ] Integration with NASA Exoplanet Archive API for real-time data
- [ ] Advanced filtering UI (by period, depth, magnitude ranges)
- [ ] Star search functionality with autocomplete
- [ ] Constellation boundaries and labels
- [ ] VR/AR support for immersive exploration
- [ ] Data export functionality
- [ ] Custom color schemes and themes
- [ ] Timeline scrubber for discovery dates
- [ ] Comparison tools for stellar properties

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

```
Copyright [2024] [Your Name]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

## 🙏 Acknowledgments

- **NASA** - For providing open access to exoplanet data
- **TESS Science Team** - For the TESS mission and data
- **Kepler Science Team** - For the Kepler mission legacy
- **Three.js Community** - For the amazing 3D graphics library
- **NASA Space Apps Challenge** - For inspiring citizen science projects

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/YOUR-USERNAME/nasa-star-catalog/issues)
- **Documentation**: [Project Wiki](https://github.com/YOUR-USERNAME/nasa-star-catalog/wiki)
- **Discussions**: [GitHub Discussions](https://github.com/YOUR-USERNAME/nasa-star-catalog/discussions)

## 🌟 Star This Project

If you find this project useful or interesting, please consider giving it a star! ⭐

---

**Made with ❤️ for NASA Space Apps Challenge and the exoplanet research community**

*"We are all in the gutter, but some of us are looking at the stars."* - Oscar Wilde
