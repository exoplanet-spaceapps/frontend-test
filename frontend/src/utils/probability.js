/**
 * Calculate exoplanet probability score (0-100)
 * TODO: Replace with real ML model inference
 *
 * @param {Array<string|number>} features - Feature array
 * @returns {number} Score between 0-100
 */
export function scoreForTarget(features) {
  if (!features || features.length === 0) {
    return 0;
  }

  // Convert to numeric values, filter out NaN
  const numericFeatures = features
    .map(f => parseFloat(f))
    .filter(f => !isNaN(f));

  if (numericFeatures.length === 0) {
    return 0;
  }

  // Heuristic calculation (temporary)
  const mean = numericFeatures.reduce((a, b) => a + b, 0) / numericFeatures.length;

  const variance =
    numericFeatures.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / numericFeatures.length;

  // Normalize to 0-100 range
  // Higher variance often indicates signal presence in light curves
  const score = Math.min(100, Math.max(0, mean * 30 + variance * 15));

  return score;
}

/**
 * Filter targets by threshold
 * @param {Record<number, number>} scoresByTid - TID -> score mapping
 * @param {number} threshold - Threshold value (0-100)
 * @returns {number[]} Array of TIDs above threshold
 */
export function filterByThreshold(scoresByTid, threshold) {
  return Object.entries(scoresByTid)
    .filter(([, score]) => score >= threshold)
    .map(([tid]) => parseInt(tid));
}

/**
 * Calculate statistics for scores
 * @param {Record<number, number>} scoresByTid - TID -> score mapping
 * @returns {Object} Statistics
 */
export function calculateScoreStats(scoresByTid) {
  const scores = Object.values(scoresByTid);

  if (scores.length === 0) {
    return { mean: 0, median: 0, min: 0, max: 0, count: 0 };
  }

  const sorted = [...scores].sort((a, b) => a - b);
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
  const median = sorted[Math.floor(sorted.length / 2)];
  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  return { mean, median, min, max, count: scores.length };
}
