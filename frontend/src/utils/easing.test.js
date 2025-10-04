import { describe, it, expect } from 'vitest';
import { easeInOutCubic, lerp } from './easing';

describe('easeInOutCubic', () => {
  it('should return 0 at t=0', () => {
    expect(easeInOutCubic(0)).toBe(0);
  });

  it('should return 1 at t=1', () => {
    expect(easeInOutCubic(1)).toBe(1);
  });

  it('should return 0.5 at t=0.5', () => {
    const result = easeInOutCubic(0.5);
    expect(result).toBeCloseTo(0.5, 1);
  });

  it('should return values between 0 and 1', () => {
    const t = 0.25;
    const result = easeInOutCubic(t);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  it('should be smooth (cubic) curve', () => {
    const t1 = easeInOutCubic(0.1);
    const t2 = easeInOutCubic(0.9);

    // Cubic easing should be slower at start/end
    expect(t1).toBeLessThan(0.1);
    expect(t2).toBeGreaterThan(0.9);
  });
});

describe('lerp', () => {
  it('should linearly interpolate between two numbers', () => {
    const result = lerp(0, 10, 0.5);
    expect(result).toBe(5);
  });

  it('should return start value at t=0', () => {
    const result = lerp(5, 15, 0);
    expect(result).toBe(5);
  });

  it('should return end value at t=1', () => {
    const result = lerp(5, 15, 1);
    expect(result).toBe(15);
  });

  it('should handle negative numbers', () => {
    const result = lerp(-10, 10, 0.5);
    expect(result).toBe(0);
  });

  it('should interpolate beyond bounds if t > 1', () => {
    const result = lerp(0, 10, 1.5);
    expect(result).toBe(15);
  });
});
