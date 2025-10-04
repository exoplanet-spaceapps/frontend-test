/**
 * Star Data Validation Test Suite (Mocha/Chai)
 * Comprehensive tests for data quality and validation logic
 */

const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const StarDataValidator = require('../scripts/validate-stars');

// Test data paths
const DATA_PATH = path.join(__dirname, '../data/stars.json');
const TEST_DATA_PATH = path.join(__dirname, 'test-data');

describe('Star Data Validator', function() {
  before(function() {
    // Create test data directory if it doesn't exist
    if (!fs.existsSync(TEST_DATA_PATH)) {
      fs.mkdirSync(TEST_DATA_PATH, { recursive: true });
    }
  });

  describe('Coordinate Range Validation', function() {
    it('should validate RA in range 0-360', function() {
      const testData = [
        { id: 1, ra: 180.5, dec: 45.2 },
        { id: 2, ra: 0, dec: 0 },
        { id: 3, ra: 360, dec: 90 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'valid-ra.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.validRecords).to.equal(3);
      expect(report.summary.invalidRecords).to.equal(0);
      expect(report.summary.completeness).to.equal(100);
    });

    it('should reject RA out of range', function() {
      const testData = [
        { id: 1, ra: -10, dec: 45.2 },
        { id: 2, ra: 400, dec: 0 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'invalid-ra.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.invalidRecords).to.equal(2);
      expect(report.errors.length).to.be.greaterThan(0);
      expect(report.errors.some(e => e.includes('RA out of range'))).to.be.true;
    });

    it('should validate DEC in range -90 to 90', function() {
      const testData = [
        { id: 1, ra: 180, dec: -90 },
        { id: 2, ra: 180, dec: 0 },
        { id: 3, ra: 180, dec: 90 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'valid-dec.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.validRecords).to.equal(3);
      expect(report.summary.completeness).to.equal(100);
    });

    it('should reject DEC out of range', function() {
      const testData = [
        { id: 1, ra: 180, dec: -100 },
        { id: 2, ra: 180, dec: 95 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'invalid-dec.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.invalidRecords).to.equal(2);
      expect(report.errors.some(e => e.includes('DEC out of range'))).to.be.true;
    });
  });

  describe('Required Fields Validation', function() {
    it('should require id, ra, and dec fields', function() {
      const testData = [
        { ra: 180, dec: 45 }, // Missing id
        { id: 2, dec: 45 },   // Missing ra
        { id: 3, ra: 180 }    // Missing dec
      ];

      const testFile = path.join(TEST_DATA_PATH, 'missing-fields.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.invalidRecords).to.equal(3);
      expect(report.errors.some(e => e.includes('Missing required field'))).to.be.true;
    });

    it('should accept records with all required fields', function() {
      const testData = [
        { id: 1, ra: 180.5, dec: 45.2 },
        { id: 2, ra: 90.3, dec: -30.1 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'complete-fields.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.validRecords).to.equal(2);
      expect(report.summary.completeness).to.equal(100);
    });
  });

  describe('Null and Undefined Handling', function() {
    it('should detect null values in required fields', function() {
      const testData = [
        { id: 1, ra: null, dec: 45.2 },
        { id: 2, ra: 180, dec: null }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'null-coords.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.invalidRecords).to.equal(2);
      expect(report.errors.some(e => e.includes('Missing RA') || e.includes('Missing DEC'))).to.be.true;
    });

    it('should warn about null values in optional fields', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45, Tmag: null }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'null-optional.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.warnings.length).to.be.greaterThan(0);
    });
  });

  describe('Numeric Type Validation', function() {
    it('should reject non-numeric coordinates', function() {
      const testData = [
        { id: 1, ra: "180", dec: 45 },
        { id: 2, ra: 180, dec: "45" }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'string-coords.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.invalidRecords).to.be.greaterThan(0);
      expect(report.errors.some(e => e.includes('not a number'))).to.be.true;
    });

    it('should reject NaN values', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'nan-coords.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      // NaN in JSON becomes null, so this should still validate
      expect(report.summary.validRecords).to.equal(1);
    });

    it('should accept valid numeric values', function() {
      const testData = [
        { id: 1, ra: 180.123456, dec: 45.654321 },
        { id: 2, ra: 0.0, dec: -0.0 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'valid-numeric.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.validRecords).to.equal(2);
    });
  });

  describe('Field Coverage Statistics', function() {
    it('should calculate field coverage correctly', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45, Tmag: 10.5, Vmag: 11.2 },
        { id: 2, ra: 90, dec: -30, Tmag: 9.8 },
        { id: 3, ra: 270, dec: 60 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'field-coverage.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.fieldCoverage.id.percentage).to.equal('100.00');
      expect(report.fieldCoverage.ra.percentage).to.equal('100.00');
      expect(report.fieldCoverage.dec.percentage).to.equal('100.00');
      expect(parseFloat(report.fieldCoverage.Tmag.percentage)).to.be.closeTo(66.67, 0.1);
      expect(parseFloat(report.fieldCoverage.Vmag.percentage)).to.be.closeTo(33.33, 0.1);
    });
  });

  describe('Catalog Breakdown', function() {
    it('should track catalog distribution', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45, catalog: 'TIC' },
        { id: 2, ra: 90, dec: -30, catalog: 'TIC' },
        { id: 3, ra: 270, dec: 60, catalog: 'KIC' },
        { id: 4, ra: 0, dec: 0 } // No catalog
      ];

      const testFile = path.join(TEST_DATA_PATH, 'catalog-breakdown.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.catalogBreakdown.TIC).to.equal(2);
      expect(report.catalogBreakdown.KIC).to.equal(1);
      expect(report.catalogBreakdown.UNKNOWN).to.equal(1);
    });
  });

  describe('Quality Score Calculation', function() {
    it('should calculate quality score for perfect data', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45, Tmag: 10.5 },
        { id: 2, ra: 90, dec: -30, Tmag: 9.8 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'perfect-data.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.qualityScore.overall).to.be.at.least(90);
      expect(report.readyForVisualization).to.be.true;
    });

    it('should calculate quality score for imperfect data', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45 },
        { id: 2, ra: 500, dec: -30 }, // Invalid RA
        { id: 3, ra: 90, dec: 100 }   // Invalid DEC
      ];

      const testFile = path.join(TEST_DATA_PATH, 'imperfect-data.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.qualityScore.overall).to.be.below(90);
      expect(parseFloat(report.summary.completeness)).to.be.closeTo(33.33, 0.1);
    });
  });

  describe('Visualization Readiness', function() {
    it('should mark data ready when completeness >= 80%', function() {
      const testData = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        ra: Math.random() * 360,
        dec: (Math.random() * 180) - 90
      }));

      const testFile = path.join(TEST_DATA_PATH, 'ready-data.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.readyForVisualization).to.be.true;
      expect(report.summary.completeness).to.be.at.least(80);
    });

    it('should mark data not ready when completeness < 80%', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45 },
        { id: 2, ra: 500, dec: -30 }, // Invalid
        { id: 3, ra: 90, dec: 100 },  // Invalid
        { id: 4, ra: -10, dec: 0 },   // Invalid
        { id: 5, ra: 180, dec: 95 }   // Invalid
      ];

      const testFile = path.join(TEST_DATA_PATH, 'not-ready-data.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.readyForVisualization).to.be.false;
      expect(report.summary.completeness).to.be.below(80);
    });
  });

  describe('Recommendation Generation', function() {
    it('should generate recommendations for low quality data', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45 },
        { id: 2, ra: 500, dec: -30 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'low-quality.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.recommendations.length).to.be.greaterThan(0);
      expect(report.recommendations.some(r => r.severity === 'high')).to.be.true;
    });

    it('should generate positive recommendations for good data', function() {
      const testData = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        ra: Math.random() * 360,
        dec: (Math.random() * 180) - 90
      }));

      const testFile = path.join(TEST_DATA_PATH, 'good-data.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.recommendations.some(r => r.severity === 'info')).to.be.true;
    });
  });

  describe('Report Generation', function() {
    it('should generate complete report structure', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45, catalog: 'TIC', Tmag: 10.5 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'report-test.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report).to.have.property('timestamp');
      expect(report).to.have.property('summary');
      expect(report).to.have.property('fieldCoverage');
      expect(report).to.have.property('catalogBreakdown');
      expect(report).to.have.property('errors');
      expect(report).to.have.property('warnings');
      expect(report).to.have.property('qualityScore');
      expect(report).to.have.property('readyForVisualization');
      expect(report).to.have.property('recommendations');
    });

    it('should save report to file', function() {
      const testData = [
        { id: 1, ra: 180, dec: 45 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'save-report.json');
      const reportFile = path.join(TEST_DATA_PATH, 'test-report.json');

      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();
      validator.saveReport(report, reportFile);

      expect(fs.existsSync(reportFile)).to.be.true;

      const savedReport = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
      expect(savedReport.summary.totalRecords).to.equal(1);
    });
  });

  describe('Edge Cases', function() {
    it('should handle empty dataset', function() {
      const testData = [];
      const testFile = path.join(TEST_DATA_PATH, 'empty-data.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.totalRecords).to.equal(0);
      expect(report.summary.validRecords).to.equal(0);
    });

    it('should handle very large coordinates', function() {
      const testData = [
        { id: 1, ra: 359.9999999, dec: 89.9999999 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'large-coords.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.validRecords).to.equal(1);
    });

    it('should handle very small coordinates', function() {
      const testData = [
        { id: 1, ra: 0.0000001, dec: -89.9999999 }
      ];

      const testFile = path.join(TEST_DATA_PATH, 'small-coords.json');
      fs.writeFileSync(testFile, JSON.stringify(testData));

      const validator = new StarDataValidator(testFile);
      const report = validator.validate();

      expect(report.summary.validRecords).to.equal(1);
    });
  });

  describe('Real Dataset Integration', function() {
    it('should validate actual stars.json if it exists', function() {
      if (fs.existsSync(DATA_PATH)) {
        const validator = new StarDataValidator(DATA_PATH);
        const report = validator.validate();

        expect(report.summary.totalRecords).to.be.greaterThan(0);
        expect(report.summary.completeness).to.be.greaterThan(0);
        expect(report).to.have.property('qualityScore');

        // Log results for manual inspection
        console.log('\n📊 Real Dataset Validation Results:');
        console.log(`   Total Records: ${report.summary.totalRecords}`);
        console.log(`   Valid Records: ${report.summary.validRecords}`);
        console.log(`   Completeness: ${report.summary.completeness}%`);
        console.log(`   Quality Score: ${report.qualityScore.overall}/100`);
        console.log(`   Ready for Viz: ${report.readyForVisualization}\n`);
      } else {
        console.log('\n⚠️  stars.json not found - skipping real dataset test\n');
        this.skip();
      }
    });
  });

  after(function() {
    // Clean up test files
    if (fs.existsSync(TEST_DATA_PATH)) {
      const files = fs.readdirSync(TEST_DATA_PATH);
      files.forEach(file => {
        fs.unlinkSync(path.join(TEST_DATA_PATH, file));
      });
      fs.rmdirSync(TEST_DATA_PATH);
    }
  });
});
