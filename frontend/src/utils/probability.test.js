import { describe, it, expect } from 'vitest';
import { scoreForTarget } from './probability';

describe('scoreForTarget', () => {
  it('should return score between 0 and 100', () => {
    const features = ['1.5', '2.3', '4.1', '0.8'];

    const score = scoreForTarget(features);

    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(100);
  });

  it('should calculate consistent scores for same input', () => {
    const features = ['2.0', '3.0', '1.5'];

    const score1 = scoreForTarget(features);
    const score2 = scoreForTarget(features);

    expect(score1).toBe(score2);
  });

  it('should handle empty features array', () => {
    const features = [];

    const score = scoreForTarget(features);

    expect(score).toBe(0);
  });

  it('should handle non-numeric values', () => {
    const features = ['abc', '2.0', 'xyz'];

    const score = scoreForTarget(features);

    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(100);
  });

  it('should give higher scores for higher variance', () => {
    const lowVariance = ['2.0', '2.1', '2.0', '2.1'];
    const highVariance = ['0.5', '10.0', '1.0', '8.5'];

    const scoreLow = scoreForTarget(lowVariance);
    const scoreHigh = scoreForTarget(highVariance);

    expect(scoreHigh).toBeGreaterThan(scoreLow);
  });
});
