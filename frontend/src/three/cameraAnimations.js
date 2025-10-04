/**
 * Camera Animation Module
 * Handles camera flight animations with easing
 */

import * as THREE from 'three';
import { easeInOutCubic } from '../utils/easing';

/**
 * Animate camera to target position
 * @param {THREE.Camera} camera - Three.js camera
 * @param {THREE.Vector3} targetPosition - Target camera position
 * @param {THREE.Vector3} targetLookAt - Target look-at point
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} onComplete - Callback when animation completes
 * @returns {Object} Animation controller with cancel method
 */
export function animateCameraTo(camera, targetPosition, targetLookAt, duration = 3000, onComplete = null) {
    const startPosition = camera.position.clone();
    const startTime = performance.now();

    let animationFrameId = null;

    const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        // Interpolate position
        camera.position.lerpVectors(startPosition, targetPosition, easedProgress);

        // Update look-at target
        camera.lookAt(targetLookAt);

        if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
        } else if (onComplete) {
            onComplete();
        }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Return controller to cancel animation
    return {
        cancel: () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        }
    };
}

/**
 * Fly camera to star position
 * @param {THREE.Camera} camera - Three.js camera
 * @param {THREE.Vector3} starPosition - Star position in 3D space
 * @param {number} distance - Distance from star (default: 20)
 * @param {number} duration - Animation duration in milliseconds (default: 3000)
 * @param {Function} onComplete - Callback when animation completes
 * @returns {Object} Animation controller
 */
export function flyCameraToStar(camera, starPosition, distance = 20, duration = 3000, onComplete = null) {
    // Calculate target camera position (offset from star)
    const direction = starPosition.clone().normalize();
    const targetPosition = starPosition.clone().add(direction.multiplyScalar(distance));

    return animateCameraTo(camera, targetPosition, starPosition, duration, onComplete);
}

/**
 * Smooth camera transition with controls update (along sphere surface)
 * @param {THREE.Camera} camera - Three.js camera
 * @param {OrbitControls} controls - OrbitControls instance
 * @param {THREE.Vector3} targetPosition - Target camera position
 * @param {THREE.Vector3} targetLookAt - Target look-at point
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} onComplete - Callback when animation completes
 * @returns {Object} Animation controller
 */
export function smoothCameraTransition(camera, controls, targetPosition, targetLookAt, duration = 3000, onComplete = null) {
    const startPosition = camera.position.clone();
    const startTarget = controls.target.clone();
    const startTime = performance.now();

    // Calculate sphere radius (distance from origin)
    const radius = startPosition.length();

    // Normalize vectors for spherical interpolation
    const startDir = startPosition.clone().normalize();
    const endDir = targetPosition.clone().normalize();

    let animationFrameId = null;

    const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        // Spherical linear interpolation (slerp) for smooth arc along sphere surface
        const angle = startDir.angleTo(endDir);
        const sinAngle = Math.sin(angle);

        let newPosition;
        if (sinAngle < 0.001) {
            // Vectors are nearly parallel, use linear interpolation
            newPosition = new THREE.Vector3().lerpVectors(startPosition, targetPosition, easedProgress);
        } else {
            // Slerp for smooth arc along sphere
            const a = Math.sin((1 - easedProgress) * angle) / sinAngle;
            const b = Math.sin(easedProgress * angle) / sinAngle;

            newPosition = new THREE.Vector3(
                a * startDir.x + b * endDir.x,
                a * startDir.y + b * endDir.y,
                a * startDir.z + b * endDir.z
            ).normalize().multiplyScalar(radius);
        }

        camera.position.copy(newPosition);

        // Interpolate controls target (look-at point)
        controls.target.lerpVectors(startTarget, targetLookAt, easedProgress);
        controls.update();

        if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            // Reset target to center when animation completes to keep sphere centered
            controls.target.set(0, 0, 0);
            controls.update();

            if (onComplete) {
                onComplete();
            }
        }
    };

    animationFrameId = requestAnimationFrame(animate);

    return {
        cancel: () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        }
    };
}

/**
 * Intro animation: sphere starts close (large) and moves away to center
 * @param {THREE.Camera} camera - Three.js camera
 * @param {OrbitControls} controls - OrbitControls instance
 * @param {THREE.Vector3} startPosition - Starting camera position (close to sphere)
 * @param {THREE.Vector3} endPosition - Final camera position
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} onComplete - Callback when animation completes
 * @returns {Object} Animation controller
 */
export function introAnimation(camera, controls, startPosition, endPosition, duration = 2500, onComplete = null) {
    const startTime = performance.now();
    const lookAtCenter = new THREE.Vector3(0, 0, 0);

    let animationFrameId = null;

    const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        // Interpolate camera position from close to far
        camera.position.lerpVectors(startPosition, endPosition, easedProgress);
        camera.lookAt(lookAtCenter);

        // Update controls
        controls.update();

        if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
        } else if (onComplete) {
            onComplete();
        }
    };

    animationFrameId = requestAnimationFrame(animate);

    return {
        cancel: () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        }
    };
}

/**
 * Preset camera positions for different views
 */
export const CameraPresets = {
    DEFAULT: { position: { x: 0, y: 50, z: 150 }, lookAt: { x: 0, y: 0, z: 0 } },
    FRONT: { position: { x: 0, y: 0, z: 150 }, lookAt: { x: 0, y: 0, z: 0 } },
    TOP: { position: { x: 0, y: 150, z: 0 }, lookAt: { x: 0, y: 0, z: 0 } },
    SIDE: { position: { x: 150, y: 0, z: 0 }, lookAt: { x: 0, y: 0, z: 0 } },
    ISOMETRIC: { position: { x: 100, y: 100, z: 100 }, lookAt: { x: 0, y: 0, z: 0 } }
};
