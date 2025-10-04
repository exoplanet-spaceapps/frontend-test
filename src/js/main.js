/**
 * Main Three.js Scene Setup and Animation Loop
 * Handles scene initialization, rendering, and responsive canvas
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { loadStarData } from './dataLoader.js';
import { createStarField, updateStarColors } from './starRenderer.js';
import { setupControls, handleStarClick } from './controls.js';

// Scene components
let scene, camera, renderer, controls;
let starField = null;
let raycaster, mouse;
let selectedStar = null;

// Performance tracking
let fps = 0;
let lastTime = performance.now();
let frameCount = 0;

/**
 * Initialize the Three.js scene
 */
function initScene() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    scene.fog = new THREE.FogExp2(0x000011, 0.001);

    // Setup camera
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
    camera.position.set(0, 50, 150);
    camera.lookAt(0, 0, 0);

    // Setup renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Add directional light for depth
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    // Add subtle point lights for atmosphere
    const pointLight1 = new THREE.PointLight(0x4444ff, 0.3, 200);
    pointLight1.position.set(100, 0, 0);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffff44, 0.3, 200);
    pointLight2.position.set(-100, 0, 0);
    scene.add(pointLight2);

    // Setup OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 50;
    controls.maxDistance = 300;
    controls.maxPolarAngle = Math.PI;

    // Setup raycaster for star selection
    raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 2;
    mouse = new THREE.Vector2();

    // Add event listeners
    window.addEventListener('resize', onWindowResize);
    renderer.domElement.addEventListener('click', onMouseClick);
    renderer.domElement.addEventListener('mousemove', onMouseMove);

    console.log('✅ Scene initialized');
}

/**
 * Handle window resize
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Handle mouse click for star selection
 */
function onMouseClick(event) {
    if (!starField) return;

    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update raycaster
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections
    const intersects = raycaster.intersectObject(starField);

    if (intersects.length > 0) {
        const intersect = intersects[0];
        const index = intersect.index;

        // Get star data
        const starData = window.starDataCache[index];

        if (starData) {
            selectedStar = { index, data: starData };
            handleStarClick(starData, intersect.point);

            // Highlight selected star
            highlightStar(index);
        }
    } else {
        // Deselect star
        selectedStar = null;
        hideInfoPanel();
        resetStarHighlight();
    }
}

/**
 * Handle mouse move for hover effects
 */
function onMouseMove(event) {
    if (!starField) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(starField);

    // Change cursor on hover
    renderer.domElement.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
}

/**
 * Highlight selected star
 */
function highlightStar(index) {
    if (!starField) return;

    const colors = starField.geometry.attributes.color;
    const sizes = starField.geometry.attributes.size;

    // Store original values if not already stored
    if (!window.originalStarAttributes) {
        window.originalStarAttributes = {
            color: colors.array.slice(),
            size: sizes.array.slice()
        };
    }

    // Reset all stars to original
    colors.array.set(window.originalStarAttributes.color);
    sizes.array.set(window.originalStarAttributes.size);

    // Highlight selected star (white and larger)
    colors.setXYZ(index, 1, 1, 1);
    sizes.setX(index, sizes.array[index] * 2);

    colors.needsUpdate = true;
    sizes.needsUpdate = true;
}

/**
 * Reset star highlight
 */
function resetStarHighlight() {
    if (!starField || !window.originalStarAttributes) return;

    const colors = starField.geometry.attributes.color;
    const sizes = starField.geometry.attributes.size;

    colors.array.set(window.originalStarAttributes.color);
    sizes.array.set(window.originalStarAttributes.size);

    colors.needsUpdate = true;
    sizes.needsUpdate = true;
}

/**
 * Hide info panel
 */
function hideInfoPanel() {
    const infoPanel = document.getElementById('info-panel');
    if (infoPanel) {
        infoPanel.classList.remove('visible');
    }
}

/**
 * Load and render star data
 */
async function loadAndRenderStars() {
    try {
        showLoadingScreen(true, 'Loading star data...');

        const starData = await loadStarData('data/stars.json');

        showLoadingScreen(true, `Creating star field with ${starData.length} stars...`);

        // Cache star data for click handlers
        window.starDataCache = starData;

        // Create star field
        starField = createStarField(starData);
        scene.add(starField);

        console.log(`✅ Rendered ${starData.length} stars`);

        showLoadingScreen(false);

        // Show welcome message
        showWelcomeMessage(starData.length);

    } catch (error) {
        console.error('❌ Error loading stars:', error);
        showLoadingScreen(true, `Error: ${error.message}`);
    }
}

/**
 * Show/hide loading screen
 */
function showLoadingScreen(show, message = 'Loading...') {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');

    if (loadingScreen) {
        loadingScreen.style.display = show ? 'flex' : 'none';
        if (loadingText && message) {
            loadingText.textContent = message;
        }
    }
}

/**
 * Show welcome message
 */
function showWelcomeMessage(starCount) {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.id = 'welcome-message';
    welcomeDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 50, 0.9);
            color: white;
            padding: 30px;
            border-radius: 10px;
            border: 2px solid #4488ff;
            text-align: center;
            z-index: 1000;
            max-width: 500px;
        ">
            <h2 style="margin: 0 0 15px 0;">🌌 Exoplanet Universe</h2>
            <p style="margin: 10px 0;">${starCount} exoplanet host stars loaded</p>
            <p style="margin: 10px 0; font-size: 14px;">
                🔵 Blue stars: TESS (TIC) catalog<br>
                🟡 Yellow stars: Kepler (KIC) catalog
            </p>
            <p style="margin: 15px 0; font-size: 14px;">
                Click on any star to view details<br>
                Drag to rotate • Scroll to zoom
            </p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: #4488ff;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 10px;
            ">Explore</button>
        </div>
    `;
    document.body.appendChild(welcomeDiv);
}

/**
 * Calculate FPS
 */
function calculateFPS() {
    frameCount++;
    const currentTime = performance.now();
    const delta = currentTime - lastTime;

    if (delta >= 1000) {
        fps = Math.round((frameCount * 1000) / delta);
        frameCount = 0;
        lastTime = currentTime;

        // Update FPS display
        const fpsCounter = document.getElementById('fps-counter');
        if (fpsCounter) {
            fpsCounter.textContent = `FPS: ${fps}`;
        }
    }
}

/**
 * Animation loop
 */
function animate() {
    requestAnimationFrame(animate);

    // Update controls
    controls.update();

    // Calculate FPS
    calculateFPS();

    // Subtle rotation of star field for depth perception
    if (starField) {
        starField.rotation.y += 0.0001;
    }

    // Render scene
    renderer.render(scene, camera);
}

/**
 * Initialize application
 */
function init() {
    console.log('🚀 Initializing Exoplanet Universe Visualization...');

    initScene();
    loadAndRenderStars();
    animate();

    console.log('✅ Application initialized');
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for debugging
window.scene = scene;
window.camera = camera;
window.renderer = renderer;
