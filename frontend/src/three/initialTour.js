/**
 * Initial Tour Animation
 * Performs a 3-second tour of the three hardcoded candidate stars on visualization load
 */

import { smoothCameraTransition } from './cameraAnimations';

/**
 * Perform initial tour of candidate stars
 * @param {THREE.Camera} camera - Three.js camera
 * @param {OrbitControls} controls - OrbitControls instance
 * @param {Array} starData - Array of star objects
 * @param {Array} candidateTids - Array of candidate TIDs [88863718, 65212867, 107782586]
 */
export function performInitialTour(camera, controls, starData, candidateTids = [88863718, 65212867, 107782586]) {
  if (!starData || starData.length === 0) {
    console.warn('No star data for initial tour');
    return;
  }

  // Find candidate stars in the data
  const candidateStars = candidateTids
    .map(tid => starData.find(star => star.tid === tid))
    .filter(Boolean);

  if (candidateStars.length === 0) {
    console.warn('No candidate stars found for initial tour');
    return;
  }

  console.log(`Starting initial tour of ${candidateStars.length} candidate stars`);

  // Start tour after short delay
  setTimeout(() => {
    tourCandidates(camera, controls, candidateStars, 0);
  }, 500);
}

/**
 * Recursive function to tour through candidates
 * @param {THREE.Camera} camera
 * @param {OrbitControls} controls
 * @param {Array} candidates
 * @param {number} index
 */
function tourCandidates(camera, controls, candidates, index) {
  if (index >= candidates.length) {
    console.log('Initial tour completed');
    return;
  }

  const candidate = candidates[index];

  // Calculate look-at position (star direction from center)
  const direction = new THREE.Vector3(
    candidate.x || Math.random() * 200 - 100,
    candidate.y || Math.random() * 200 - 100,
    candidate.z || Math.random() * 200 - 100
  ).normalize();

  const lookAtPosition = direction.multiplyScalar(100);

  console.log(`👀 Touring candidate ${index + 1}/${candidates.length}: TID ${candidate.tid}`);

  // Fly to this candidate (3 seconds)
  smoothCameraTransition(
    camera,
    controls,
    new THREE.Vector3(0, 0, 0), // Keep camera at center
    lookAtPosition,
    3000
  );

  // Move to next candidate after 3 seconds
  setTimeout(() => {
    tourCandidates(camera, controls, candidates, index + 1);
  }, 3000);
}

/**
 * Alternative: Quick overview rotation (no specific star targeting)
 * @param {THREE.Camera} camera
 * @param {OrbitControls} controls
 */
export function performQuickRotation(camera, controls) {
  const startRotation = controls.getAzimuthalAngle();
  const endRotation = startRotation + Math.PI * 2; // Full 360° rotation
  const duration = 3000;
  const startTime = performance.now();

  function animate() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // EaseInOutCubic
    const t = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const currentRotation = startRotation + (endRotation - startRotation) * t;
    controls.setAzimuthalAngle(currentRotation);
    controls.update();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      console.log('Initial rotation completed');
    }
  }

  animate();
}
