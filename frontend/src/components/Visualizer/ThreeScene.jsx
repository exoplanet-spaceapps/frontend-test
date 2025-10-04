import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import useAppStore from '../../state/useAppStore';
import { createStarField } from '../../three/starRenderer';
import { smoothCameraTransition } from '../../three/cameraAnimations';

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

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.001);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 50, 150);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 50;
    controls.maxDistance = 300;
    controlsRef.current = controls;

    // Raycaster for star selection
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 2;
    raycasterRef.current = raycaster;

    // Create star field if data exists
    if (parsedData.length > 0) {
      const starData = parsedData.map(item => ({
        ra: Math.random() * 360, // TODO: Use real RA from TID lookup
        dec: (Math.random() - 0.5) * 180, // TODO: Use real DEC from TID lookup
        tid: item.tid,
        label: scoresByTid[item.tid] >= 80 ? 1 : 0,
        period: item.features[1] || null,
        depth: item.features[2] || null,
        magnitude: item.features[3] || null,
        catalog: `TID${item.tid}`
      }));

      const starField = createStarField(starData);
      scene.add(starField);
      starFieldRef.current = starField;
    }

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
        const starData = parsedData[index];
        if (starData && starData.tid) {
          setSelectedTid(starData.tid);

          // Animate camera to star
          const starPosition = new THREE.Vector3(
            intersects[0].point.x,
            intersects[0].point.y,
            intersects[0].point.z
          );

          smoothCameraTransition(
            camera,
            controls,
            starPosition.clone().add(new THREE.Vector3(0, 10, 20)),
            starPosition,
            3000
          );
        }
      }
    };

    renderer.domElement.addEventListener('click', handleClick);

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

      if (starFieldRef.current) {
        starFieldRef.current.rotation.y += 0.0001;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('click', handleClick);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [parsedData, scoresByTid]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ position: 'relative' }}
    />
  );
};

export default ThreeScene;
