/**
 * Controls Module
 * Handles user interaction, camera controls, and UI elements
 */

/**
 * Setup interactive controls
 * Note: OrbitControls are initialized in main.js
 * This module handles additional UI controls
 */
export function setupControls() {
    setupFilterControls();
    setupSearchControls();
    setupViewControls();
    setupKeyboardControls();
}

/**
 * Handle star click event
 * @param {Object} starData - Data for the clicked star
 * @param {THREE.Vector3} position - 3D position of the star
 */
export function handleStarClick(starData, position) {
    showInfoPanel(starData);
    logStarInfo(starData);
}

/**
 * Show information panel for selected star
 * @param {Object} starData - Star data object
 */
function showInfoPanel(starData) {
    let infoPanel = document.getElementById('info-panel');

    // Create panel if it doesn't exist
    if (!infoPanel) {
        infoPanel = document.createElement('div');
        infoPanel.id = 'info-panel';
        infoPanel.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 50, 0.95);
            color: white;
            padding: 20px;
            border-radius: 10px;
            border: 2px solid #4488ff;
            max-width: 350px;
            z-index: 100;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            box-shadow: 0 4px 20px rgba(0, 100, 255, 0.3);
            opacity: 0;
            transition: opacity 0.3s;
        `;
        document.body.appendChild(infoPanel);
    }

    // Format star information
    const catalogType = starData.catalog ? starData.catalog.substring(0, 3) : 'Unknown';
    const catalogColor = catalogType === 'TIC' ? '#4488ff' : catalogType === 'KIC' ? '#ffdd44' : '#8888ff';

    infoPanel.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="margin: 0; color: ${catalogColor};">⭐ ${starData.catalog || 'Unknown Star'}</h3>
            <button onclick="document.getElementById('info-panel').classList.remove('visible')"
                    style="background: none; border: none; color: white; font-size: 20px; cursor: pointer;">×</button>
        </div>

        <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #4488ff;">
            <div style="color: #88aaff; margin-bottom: 5px;">📍 Coordinates</div>
            <div>RA: ${starData.ra.toFixed(4)}°</div>
            <div>DEC: ${starData.dec.toFixed(4)}°</div>
        </div>

        ${starData.period ? `
            <div style="margin-bottom: 10px;">
                <span style="color: #88aaff;">🔄 Period:</span> ${starData.period.toFixed(4)} days
            </div>
        ` : ''}

        ${starData.depth ? `
            <div style="margin-bottom: 10px;">
                <span style="color: #88aaff;">📉 Depth:</span> ${starData.depth.toFixed(6)}
            </div>
        ` : ''}

        ${starData.magnitude ? `
            <div style="margin-bottom: 10px;">
                <span style="color: #88aaff;">✨ Magnitude:</span> ${starData.magnitude.toFixed(2)}
            </div>
        ` : ''}

        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #4488ff;">
            <div style="color: #88aaff; margin-bottom: 5px;">📚 Catalog</div>
            <div style="color: ${catalogColor}; font-weight: bold;">
                ${catalogType === 'TIC' ? 'TESS Input Catalog' : catalogType === 'KIC' ? 'Kepler Input Catalog' : 'Unknown'}
            </div>
        </div>

        <div style="margin-top: 15px; font-size: 12px; color: #6688aa;">
            Click outside or press ESC to close
        </div>
    `;

    // Show panel with animation
    setTimeout(() => {
        infoPanel.classList.add('visible');
        infoPanel.style.opacity = '1';
    }, 10);
}

/**
 * Log star information to console
 * @param {Object} starData - Star data object
 */
function logStarInfo(starData) {
    console.log('⭐ Selected Star:');
    console.log(`   Catalog: ${starData.catalog}`);
    console.log(`   RA: ${starData.ra.toFixed(4)}°`);
    console.log(`   DEC: ${starData.dec.toFixed(4)}°`);
    if (starData.period) console.log(`   Period: ${starData.period.toFixed(4)} days`);
    if (starData.depth) console.log(`   Depth: ${starData.depth.toFixed(6)}`);
    if (starData.magnitude) console.log(`   Magnitude: ${starData.magnitude.toFixed(2)}`);
}

/**
 * Setup filter controls
 */
function setupFilterControls() {
    // This will be connected to UI controls panel
    // For now, filtering can be done via console
    window.filterStarsByCatalog = function(catalogType) {
        console.log(`Filtering by catalog: ${catalogType}`);
        // Implementation would update the star field based on filters
    };
}

/**
 * Setup search controls
 */
function setupSearchControls() {
    // Search functionality for finding specific stars
    window.searchStar = function(query) {
        console.log(`Searching for: ${query}`);
        // Implementation would highlight matching stars
    };
}

/**
 * Setup view controls
 */
function setupViewControls() {
    // Preset camera views
    window.viewPresets = {
        front: () => setCameraView(0, 0, 150),
        top: () => setCameraView(0, 150, 0),
        side: () => setCameraView(150, 0, 0),
        iso: () => setCameraView(100, 100, 100)
    };
}

/**
 * Set camera to specific view
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {number} z - Z position
 */
function setCameraView(x, y, z) {
    if (window.camera) {
        window.camera.position.set(x, y, z);
        window.camera.lookAt(0, 0, 0);

        if (window.controls) {
            window.controls.target.set(0, 0, 0);
            window.controls.update();
        }
    }
}

/**
 * Setup keyboard controls
 */
function setupKeyboardControls() {
    document.addEventListener('keydown', (event) => {
        // ESC key to close info panel
        if (event.key === 'Escape') {
            const infoPanel = document.getElementById('info-panel');
            if (infoPanel) {
                infoPanel.classList.remove('visible');
                infoPanel.style.opacity = '0';
            }
        }

        // Number keys for preset views
        if (event.key === '1') window.viewPresets.front();
        if (event.key === '2') window.viewPresets.top();
        if (event.key === '3') window.viewPresets.side();
        if (event.key === '4') window.viewPresets.iso();

        // F key to toggle FPS counter
        if (event.key === 'f' || event.key === 'F') {
            toggleFPSCounter();
        }

        // H key to toggle help
        if (event.key === 'h' || event.key === 'H') {
            toggleHelp();
        }
    });
}

/**
 * Toggle FPS counter visibility
 */
function toggleFPSCounter() {
    let fpsCounter = document.getElementById('fps-counter');

    if (!fpsCounter) {
        fpsCounter = document.createElement('div');
        fpsCounter.id = 'fps-counter';
        fpsCounter.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: #4488ff;
            padding: 10px 15px;
            border-radius: 5px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            z-index: 100;
        `;
        fpsCounter.textContent = 'FPS: --';
        document.body.appendChild(fpsCounter);
    } else {
        fpsCounter.style.display = fpsCounter.style.display === 'none' ? 'block' : 'none';
    }
}

/**
 * Toggle help panel
 */
function toggleHelp() {
    let helpPanel = document.getElementById('help-panel');

    if (!helpPanel) {
        helpPanel = document.createElement('div');
        helpPanel.id = 'help-panel';
        helpPanel.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 50, 0.95);
            color: white;
            padding: 30px;
            border-radius: 10px;
            border: 2px solid #4488ff;
            max-width: 500px;
            z-index: 1000;
            font-family: Arial, sans-serif;
        `;

        helpPanel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="margin: 0;">🌌 Controls</h2>
                <button onclick="this.parentElement.parentElement.style.display='none'"
                        style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">×</button>
            </div>

            <div style="margin-bottom: 15px;">
                <h3 style="color: #4488ff; margin-bottom: 10px;">Mouse Controls</h3>
                <div style="margin-left: 15px;">
                    <div>🖱️ Left Click + Drag: Rotate view</div>
                    <div>🖱️ Right Click + Drag: Pan view</div>
                    <div>🖱️ Scroll Wheel: Zoom in/out</div>
                    <div>🖱️ Click Star: Show details</div>
                </div>
            </div>

            <div style="margin-bottom: 15px;">
                <h3 style="color: #4488ff; margin-bottom: 10px;">Keyboard Shortcuts</h3>
                <div style="margin-left: 15px;">
                    <div>⌨️ 1-4: Preset camera views</div>
                    <div>⌨️ F: Toggle FPS counter</div>
                    <div>⌨️ H: Toggle this help</div>
                    <div>⌨️ ESC: Close info panel</div>
                </div>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #4488ff; font-size: 12px; color: #88aaff;">
                🔵 Blue = TESS (TIC) • 🟡 Yellow = Kepler (KIC)
            </div>
        `;

        document.body.appendChild(helpPanel);
    } else {
        helpPanel.style.display = helpPanel.style.display === 'none' ? 'block' : 'none';
    }
}

/**
 * Create controls UI panel
 */
export function createControlsUI() {
    const controlsPanel = document.createElement('div');
    controlsPanel.id = 'controls-panel';
    controlsPanel.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0, 0, 50, 0.9);
        color: white;
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #4488ff;
        z-index: 100;
        font-family: Arial, sans-serif;
        font-size: 12px;
    `;

    controlsPanel.innerHTML = `
        <div style="margin-bottom: 10px; font-weight: bold; color: #4488ff;">Quick Actions</div>
        <button onclick="window.viewPresets.front()" style="margin: 2px; padding: 5px 10px;">Front</button>
        <button onclick="window.viewPresets.top()" style="margin: 2px; padding: 5px 10px;">Top</button>
        <button onclick="window.viewPresets.side()" style="margin: 2px; padding: 5px 10px;">Side</button>
        <button onclick="window.viewPresets.iso()" style="margin: 2px; padding: 5px 10px;">Isometric</button>
        <br>
        <button onclick="toggleHelp()" style="margin: 2px; padding: 5px 10px; margin-top: 5px;">Help (H)</button>
    `;

    document.body.appendChild(controlsPanel);
}

// Initialize controls when module loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setupControls();
        createControlsUI();
    });
} else {
    setupControls();
    createControlsUI();
}

// Export for global access
window.toggleHelp = toggleHelp;
window.toggleFPSCounter = toggleFPSCounter;
