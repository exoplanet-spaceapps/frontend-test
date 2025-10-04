/**
 * Easing function: easeInOutCubic
 * @param {number} t - Time parameter (0-1)
 * @returns {number} Eased value (0-1)
 */
export function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Easing function: easeInCubic
 * @param {number} t - Time parameter (0-1)
 * @returns {number} Eased value (0-1)
 */
export function easeInCubic(t) {
  return t * t * t;
}

/**
 * Easing function: easeOutCubic
 * @param {number} t - Time parameter (0-1)
 * @returns {number} Eased value (0-1)
 */
export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Linear interpolation
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} t - Time parameter (0-1, can exceed)
 * @returns {number} Interpolated value
 */
export function lerp(start, end, t) {
  return start + (end - start) * t;
}

/**
 * Interpolate between two values with easing
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} t - Time parameter (0-1)
 * @param {Function} easingFn - Easing function (default: easeInOutCubic)
 * @returns {number} Eased interpolated value
 */
export function easedLerp(start, end, t, easingFn = easeInOutCubic) {
  return lerp(start, end, easingFn(t));
}

/**
 * Clamp value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
