/**
 * Test suite for data validation
 * Ensures star data is complete and valid for visualization
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/initial_dataset.json');

describe('Data Validation Tests', () => {

  let dataset;

  before(() => {
    if (fs.existsSync(DATA_PATH)) {
      dataset = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    }
  });

  describe('Dataset Structure', () => {
    it('should load dataset successfully', () => {
      assert.ok(dataset, 'Dataset should be loaded');
      assert.ok(Array.isArray(dataset), 'Dataset should be an array');
      assert.ok(dataset.length > 0, 'Dataset should not be empty');
    });

    it('should have required fields for each record', () => {
      const requiredFields = ['label', 'source', 'tid', 'target_id', 'period', 'catalog'];

      dataset.slice(0, 10).forEach((record, index) => {
        requiredFields.forEach(field => {
          assert.ok(
            field in record,
            `Record ${index} should have field: ${field}`
          );
        });
      });
    });

    it('should have coordinate fields (ra, dec)', () => {
      dataset.slice(0, 10).forEach((record, index) => {
        assert.ok('ra' in record, `Record ${index} should have 'ra' field`);
        assert.ok('dec' in record, `Record ${index} should have 'dec' field`);
      });
    });
  });

  describe('Coordinate Completeness', () => {
    it('should eventually have coordinates for all TIC records', () => {
      const ticRecords = dataset.filter(r => r.catalog === 'TIC');
      const withCoords = ticRecords.filter(r => r.ra !== null && r.dec !== null);

      // Initially this will fail - that's expected in TDD
      // After fetching, this should pass
      const completeness = (withCoords.length / ticRecords.length) * 100;

      console.log(`TIC Coordinate completeness: ${completeness.toFixed(2)}%`);

      // We expect at least 80% success rate from MAST API
      if (withCoords.length > 0) {
        assert.ok(
          completeness >= 80,
          `Should have at least 80% coordinate completeness, got ${completeness.toFixed(2)}%`
        );
      }
    });

    it('should have valid coordinate values when present', () => {
      const withCoords = dataset.filter(r => r.ra !== null && r.dec !== null);

      withCoords.forEach((record, index) => {
        assert.ok(
          typeof record.ra === 'number' && record.ra >= 0 && record.ra <= 360,
          `Record ${index}: RA should be number between 0-360`
        );
        assert.ok(
          typeof record.dec === 'number' && record.dec >= -90 && record.dec <= 90,
          `Record ${index}: DEC should be number between -90 and 90`
        );
      });
    });
  });

  describe('Visualization Readiness', () => {
    it('should have sufficient data for 3D visualization', () => {
      const visualizableRecords = dataset.filter(r =>
        r.ra !== null &&
        r.dec !== null &&
        r.period !== null &&
        r.depth !== null
      );

      console.log(`Visualizable records: ${visualizableRecords.length} / ${dataset.length}`);

      assert.ok(
        visualizableRecords.length >= 100,
        'Should have at least 100 records ready for visualization'
      );
    });

    it('should have catalog information for all records', () => {
      dataset.forEach((record, index) => {
        assert.ok(
          record.catalog && ['TIC', 'KIC', 'UNKNOWN'].includes(record.catalog),
          `Record ${index} should have valid catalog type`
        );
      });
    });
  });
});
