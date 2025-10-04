import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import useAppStore from '../../state/useAppStore';
import { createStarField } from '../../three/starRenderer';
import { smoothCameraTransition, introAnimation } from '../../three/cameraAnimations';
import { estimateSpectralClass, getSpectralType } from '../../utils/spectralClass';

/**
 * ThreeScene Component
 * React wrapper for Three.js star visualization
 */
const ThreeScene = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const starFieldRef = useRef(null);
  const raycasterRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());

  const selectedTid = useAppStore(state => state.selectedTid);
  const setSelectedTid = useAppStore(state => state.setSelectedTid);
  const parsedData = useAppStore(state => state.parsedData);
  const scoresByTid = useAppStore(state => state.scoresByTid);
  const candidates = useAppStore(state => state.candidates);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.001);
    sceneRef.current = scene;

    // Camera setup - positioned to view celestial sphere
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    // Start camera WAY beyond top-left (off-screen) for dramatic entrance
    camera.position.set(-80, 60, 30);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting - increased for better star visibility
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(100, 100, 100);
    scene.add(directionalLight);

    // OrbitControls - fixed center rotation
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false; // Disable panning to keep sphere centered
    controls.minDistance = 25; // Slightly larger than sphere radius (15)
    controls.maxDistance = 150; // Increased to accommodate intro animation
    controls.rotateSpeed = 0.5;
    controls.target.set(0, 0, 0); // Always rotate around center
    controls.autoRotate = false; // Will be enabled after intro animation
    controls.autoRotateSpeed = 0.15; // Ultra-slow rotation speed
    controls.screenSpacePanning = false; // Ensure no screen space panning
    controls.enabled = false; // Disable user interaction during intro animation
    controlsRef.current = controls;

    // Raycaster for star selection
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 2;
    raycasterRef.current = raycaster;

    // Load star data from stars.json
    const basePath = import.meta.env.BASE_URL;
    fetch(`${basePath}data/stars.json`)
      .then(res => res.json())
      .then(starData => {
        console.log(`Loaded ${starData.length} stars from stars.json`);

        // Get uploaded TIDs from parsedData
        const uploadedTids = parsedData.map(d => d.tid).filter(Boolean);
        console.log(`Uploaded TIDs: ${uploadedTids.length}`, uploadedTids);

        let relevantStars, otherStars;

        if (uploadedTids.length > 0) {
          // User uploaded data: show only uploaded stars highlighted, dim others
          relevantStars = starData.filter(star => uploadedTids.includes(star.tid));
          otherStars = starData.filter(star => !uploadedTids.includes(star.tid));

          console.log(`Relevant stars (from upload): ${relevantStars.length}`);
          console.log(`Background stars (dimmed): ${otherStars.length}`);
        } else {
          // No upload: show all stars with normal brightness (demo mode)
          relevantStars = starData;
          otherStars = [];

          console.log(`Demo mode: showing all ${starData.length} stars`);
        }

        // Create star field with highlighted relevant stars
        const starField = createStarField(relevantStars, otherStars, scoresByTid);
        scene.add(starField);
        starFieldRef.current = starField;

        // Store star data globally for click handling
        window.currentStarData = relevantStars;
        window.allStarData = starData; // Store complete star data for coordinate lookup

        console.log('Star field created with uploaded data highlighted');

        // Trigger intro animation: sphere from WAY beyond top-left to center
        const startPos = new THREE.Vector3(-80, 60, 30); // Far top-left, beyond visible screen
        const endPos = new THREE.Vector3(0, 0, 50); // Center of screen

        introAnimation(camera, controls, startPos, endPos, 2500, () => {
          // Animation complete: pause for 3 seconds, then enable VERY slow auto-rotation
          controls.enabled = true;
          console.log('Intro animation complete - pausing before rotation');

          setTimeout(() => {
            controls.autoRotate = true;
            console.log('Auto-rotation enabled after pause');
          }, 3000); // 3 second pause for clear stop
        });
      })
      .catch(err => {
        console.error('Failed to load stars.json:', err);
      });

    // Mouse click handler
    const handleClick = (event) => {
      if (!starFieldRef.current) return;

      const rect = mountRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseRef.current, camera);
      const intersects = raycaster.intersectObject(starFieldRef.current);

      if (intersects.length > 0) {
        const index = intersects[0].index;
        const currentStars = window.currentStarData || [];
        const starData = currentStars[index];

        if (starData && starData.tid) {
          console.log('Star clicked:', starData);

          // Only show info panel for candidate stars
          if (candidates.includes(starData.tid)) {
            setSelectedTid(starData.tid);
            console.log('Candidate star selected - showing info panel');
          } else {
            console.log('Non-candidate star clicked - camera animation only');
          }

          // Stop auto-rotation when user clicks a star
          controls.autoRotate = false;

          // Animate camera to star - very close (regardless of whether it's a candidate)
          const starPosition = new THREE.Vector3(
            intersects[0].point.x,
            intersects[0].point.y,
            intersects[0].point.z
          );

          // Move camera to better view the selected star
          const direction = starPosition.clone().normalize();
          const cameraPosition = direction.multiplyScalar(50); // Position camera outside sphere

          smoothCameraTransition(
            camera,
            controls,
            cameraPosition,
            starPosition, // Look at the star
            3000
          );
        }
      }
    };

    renderer.domElement.addEventListener('click', handleClick);

    // Listen for flyToStar events from CandidatesList
    const handleFlyToStar = (event) => {
      const { tid } = event.detail;
      const allStars = window.allStarData || [];

      // Find star in complete star data by TID
      const starData = allStars.find(s => s.tid === tid);

      if (starData && starData.ra !== undefined && starData.dec !== undefined) {
        // Stop auto-rotation when flying to a star
        controls.autoRotate = false;

        // Import raDec2Cartesian to convert RA/DEC to 3D coordinates
        import('../../three/starRenderer').then(({ raDec2Cartesian }) => {
          const { x, y, z } = raDec2Cartesian(starData.ra, starData.dec);
          const starPosition = new THREE.Vector3(x, y, z);
          const direction = starPosition.clone().normalize();
          const cameraPosition = direction.multiplyScalar(50);

          console.log(`Flying to star TID ${tid} at position:`, starPosition, `(RA: ${starData.ra}, DEC: ${starData.dec})`);

          smoothCameraTransition(
            camera,
            controls,
            cameraPosition,
            starPosition,
            3000
          );
        });
      } else {
        console.warn(`Star TID ${tid} not found in stars.json or missing RA/DEC coordinates`);
      }
    };

    window.addEventListener('flyToStar', handleFlyToStar);

    // Window resize handler
    const handleResize = () => {
      if (!mountRef.current) return;

      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('flyToStar', handleFlyToStar);
      renderer.domElement.removeEventListener('click', handleClick);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [parsedData, scoresByTid, setSelectedTid]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ position: 'relative', pointerEvents: 'auto' }}
    />
  );
};

export default ThreeScene;
