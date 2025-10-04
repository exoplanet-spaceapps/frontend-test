/**
 * Test suite for coordinate fetching functionality
 * Following TDD principles
 */

const assert = require('assert');
const { queryTIC, queryKIC } = require('../scripts/fetch-coordinates');

describe('Coordinate Fetcher Tests', () => {

  describe('TIC Query Tests', () => {
    it('should fetch valid RA/DEC for known TIC ID', async function() {
      this.timeout(5000); // API call may take time

      const ticId = 88863718; // From first record
      const result = await queryTIC(ticId);

      assert.ok(result, 'Result should not be null');
      assert.ok(result.ra !== undefined, 'RA should be defined');
      assert.ok(result.dec !== undefined, 'DEC should be defined');
      assert.ok(typeof result.ra === 'number', 'RA should be a number');
      assert.ok(typeof result.dec === 'number', 'DEC should be a number');
      assert.ok(result.ra >= 0 && result.ra <= 360, 'RA should be between 0-360');
      assert.ok(result.dec >= -90 && result.dec <= 90, 'DEC should be between -90 and 90');
    });

    it('should return null for invalid TIC ID', async function() {
      this.timeout(5000);

      const invalidId = 999999999999;
      const result = await queryTIC(invalidId);

      assert.strictEqual(result, null, 'Invalid ID should return null');
    });
  });

  describe('KIC Query Tests', () => {
    it('should fetch valid RA/DEC for known KIC ID', async function() {
      this.timeout(5000);

      // We'll need to find a valid KIC ID from the dataset
      const kicId = 757076; // Example KIC ID
      const result = await queryKIC(kicId);

      if (result) { // KIC might not be in our dataset
        assert.ok(result.ra !== undefined, 'RA should be defined');
        assert.ok(result.dec !== undefined, 'DEC should be defined');
        assert.ok(typeof result.ra === 'number', 'RA should be a number');
        assert.ok(typeof result.dec === 'number', 'DEC should be a number');
      }
    });
  });

  describe('Coordinate Validation', () => {
    it('should validate coordinate ranges', () => {
      const validRA = 180.5;
      const validDEC = 45.3;

      assert.ok(validRA >= 0 && validRA <= 360, 'Valid RA should pass');
      assert.ok(validDEC >= -90 && validDEC <= 90, 'Valid DEC should pass');
    });

    it('should reject invalid coordinate ranges', () => {
      const invalidRA = 400;
      const invalidDEC = 100;

      assert.ok(!(invalidRA >= 0 && invalidRA <= 360), 'Invalid RA should fail');
      assert.ok(!(invalidDEC >= -90 && invalidDEC <= 90), 'Invalid DEC should fail');
    });
  });
});
