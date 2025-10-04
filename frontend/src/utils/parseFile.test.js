import { describe, it, expect } from 'vitest';
import { parseFile } from './parseFile';

describe('parseFile', () => {
  it('should parse CSV file with tid column', async () => {
    const csvContent = 'tid,period,depth\n88863718,2.5,100\n65212867,3.2,150';
    const file = new File([csvContent], 'test.csv', { type: 'text/csv' });

    const result = await parseFile(file);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      tid: 88863718,
      features: ['88863718', '2.5', '100']
    });
  });

  it('should parse DAT file', async () => {
    const datContent = 'target_id,value1,value2\n107782586,1.2,3.4';
    const file = new File([datContent], 'test.dat', { type: 'text/plain' });

    const result = await parseFile(file);

    expect(result).toHaveLength(1);
    expect(result[0].tid).toBe(107782586);
  });

  it('should handle missing tid column', async () => {
    const csvContent = 'period,depth\n2.5,100';
    const file = new File([csvContent], 'test.csv', { type: 'text/csv' });

    const result = await parseFile(file);

    expect(result[0].tid).toBeNull();
  });

  it('should handle empty file', async () => {
    const file = new File([''], 'empty.csv', { type: 'text/csv' });

    const result = await parseFile(file);

    expect(result).toEqual([]);
  });
});
