/**
 * Star Data Validation Script
 * Validates coordinate data quality for NASA star visualization
 *
 * Validation Criteria:
 * - RA (Right Ascension): 0-360 degrees
 * - DEC (Declination): -90 to 90 degrees
 * - Required fields presence
 * - Numeric field validation
 * - Null/undefined checks
 */

const fs = require('fs');
const path = require('path');

class StarDataValidator {
  constructor(dataPath) {
    this.dataPath = dataPath;
    this.stats = {
      total: 0,
      valid: 0,
      invalid: 0,
      fieldCoverage: {},
      catalogBreakdown: {},
      errors: [],
      warnings: []
    };
  }

  /**
   * Load star data from JSON file
   */
  loadData() {
    try {
      const rawData = fs.readFileSync(this.dataPath, 'utf8');
      return JSON.parse(rawData);
    } catch (error) {
      throw new Error(`Failed to load data: ${error.message}`);
    }
  }

  /**
   * Validate coordinate ranges
   */
  validateCoordinates(star, index) {
    const errors = [];

    // Check RA (Right Ascension)
    if (star.ra === null || star.ra === undefined) {
      errors.push(`Star ${index}: Missing RA coordinate`);
    } else if (typeof star.ra !== 'number') {
      errors.push(`Star ${index}: RA is not a number (${typeof star.ra})`);
    } else if (star.ra < 0 || star.ra > 360) {
      errors.push(`Star ${index}: RA out of range (${star.ra}), should be 0-360`);
    }

    // Check DEC (Declination)
    if (star.dec === null || star.dec === undefined) {
      errors.push(`Star ${index}: Missing DEC coordinate`);
    } else if (typeof star.dec !== 'number') {
      errors.push(`Star ${index}: DEC is not a number (${typeof star.dec})`);
    } else if (star.dec < -90 || star.dec > 90) {
      errors.push(`Star ${index}: DEC out of range (${star.dec}), should be -90 to 90`);
    }

    return errors;
  }

  /**
   * Validate required fields
   */
  validateRequiredFields(star, index) {
    const errors = [];
    const requiredFields = ['id', 'ra', 'dec'];

    requiredFields.forEach(field => {
      if (!(field in star)) {
        errors.push(`Star ${index}: Missing required field '${field}'`);
      }
    });

    return errors;
  }

  /**
   * Check for null/undefined values
   */
  checkNullValues(star, index) {
    const warnings = [];

    Object.keys(star).forEach(key => {
      if (star[key] === null || star[key] === undefined) {
        warnings.push(`Star ${index}: Field '${key}' is null/undefined`);
      }
    });

    return warnings;
  }

  /**
   * Verify numeric fields
   */
  validateNumericFields(star, index) {
    const errors = [];
    const numericFields = ['ra', 'dec', 'Tmag', 'Vmag', 'Jmag', 'Hmag', 'Kmag'];

    numericFields.forEach(field => {
      if (field in star && star[field] !== null && star[field] !== undefined) {
        if (typeof star[field] !== 'number' || isNaN(star[field])) {
          errors.push(`Star ${index}: Field '${field}' should be numeric, got ${typeof star[field]}`);
        }
      }
    });

    return errors;
  }

  /**
   * Track field coverage statistics
   */
  updateFieldCoverage(star) {
    Object.keys(star).forEach(field => {
      if (!this.stats.fieldCoverage[field]) {
        this.stats.fieldCoverage[field] = { present: 0, null: 0, total: 0 };
      }

      this.stats.fieldCoverage[field].total++;

      if (star[field] !== null && star[field] !== undefined) {
        this.stats.fieldCoverage[field].present++;
      } else {
        this.stats.fieldCoverage[field].null++;
      }
    });
  }

  /**
   * Track catalog breakdown
   */
  updateCatalogBreakdown(star) {
    const catalog = star.catalog || 'UNKNOWN';
    this.stats.catalogBreakdown[catalog] = (this.stats.catalogBreakdown[catalog] || 0) + 1;
  }

  /**
   * Validate single star record
   */
  validateStar(star, index) {
    const recordErrors = [];

    // Required fields check
    recordErrors.push(...this.validateRequiredFields(star, index));

    // Coordinate validation
    recordErrors.push(...this.validateCoordinates(star, index));

    // Numeric fields validation
    recordErrors.push(...this.validateNumericFields(star, index));

    // Null value warnings
    const recordWarnings = this.checkNullValues(star, index);
    this.stats.warnings.push(...recordWarnings);

    // Update statistics
    this.updateFieldCoverage(star);
    this.updateCatalogBreakdown(star);

    if (recordErrors.length > 0) {
      this.stats.invalid++;
      this.stats.errors.push(...recordErrors);
      return false;
    } else {
      this.stats.valid++;
      return true;
    }
  }

  /**
   * Run complete validation
   */
  validate() {
    console.log('🔍 Starting data validation...\n');

    const data = this.loadData();
    this.stats.total = data.length;

    console.log(`📊 Total records to validate: ${this.stats.total}\n`);

    data.forEach((star, index) => {
      this.validateStar(star, index);
    });

    return this.generateReport();
  }

  /**
   * Calculate quality metrics
   */
  calculateMetrics() {
    const completeness = (this.stats.valid / this.stats.total * 100).toFixed(2);
    const errorRate = (this.stats.invalid / this.stats.total * 100).toFixed(2);

    // Calculate field completeness
    const fieldCompleteness = {};
    Object.keys(this.stats.fieldCoverage).forEach(field => {
      const coverage = this.stats.fieldCoverage[field];
      fieldCompleteness[field] = {
        percentage: (coverage.present / coverage.total * 100).toFixed(2),
        present: coverage.present,
        missing: coverage.null,
        total: coverage.total
      };
    });

    return {
      completeness: parseFloat(completeness),
      errorRate: parseFloat(errorRate),
      fieldCompleteness,
      catalogDistribution: this.stats.catalogBreakdown
    };
  }

  /**
   * Generate validation report
   */
  generateReport() {
    const metrics = this.calculateMetrics();

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalRecords: this.stats.total,
        validRecords: this.stats.valid,
        invalidRecords: this.stats.invalid,
        completeness: metrics.completeness,
        errorRate: metrics.errorRate
      },
      fieldCoverage: metrics.fieldCompleteness,
      catalogBreakdown: metrics.catalogDistribution,
      errors: this.stats.errors.slice(0, 100), // Limit to first 100 errors
      warnings: this.stats.warnings.slice(0, 50), // Limit to first 50 warnings
      qualityScore: this.calculateQualityScore(metrics),
      readyForVisualization: metrics.completeness >= 80,
      recommendations: this.generateRecommendations(metrics)
    };

    return report;
  }

  /**
   * Calculate overall quality score
   */
  calculateQualityScore(metrics) {
    // Weighted scoring: 60% completeness, 30% coordinate quality, 10% field coverage
    const completenessScore = metrics.completeness * 0.6;
    const coordinateScore = (100 - metrics.errorRate) * 0.3;

    // Calculate average field coverage
    const fieldCoverages = Object.values(metrics.fieldCompleteness).map(f => parseFloat(f.percentage));
    const avgFieldCoverage = fieldCoverages.reduce((a, b) => a + b, 0) / fieldCoverages.length;
    const fieldScore = avgFieldCoverage * 0.1;

    const totalScore = completenessScore + coordinateScore + fieldScore;

    return {
      overall: parseFloat(totalScore.toFixed(2)),
      breakdown: {
        completeness: parseFloat(completenessScore.toFixed(2)),
        coordinates: parseFloat(coordinateScore.toFixed(2)),
        fieldCoverage: parseFloat(fieldScore.toFixed(2))
      }
    };
  }

  /**
   * Generate recommendations based on validation results
   */
  generateRecommendations(metrics) {
    const recommendations = [];

    if (metrics.completeness < 80) {
      recommendations.push({
        severity: 'high',
        issue: 'Low data completeness',
        recommendation: 'Review and fix coordinate validation errors before visualization'
      });
    }

    if (metrics.errorRate > 10) {
      recommendations.push({
        severity: 'high',
        issue: 'High error rate',
        recommendation: 'Investigate data source quality and implement additional filtering'
      });
    }

    // Check field completeness
    Object.entries(metrics.fieldCompleteness).forEach(([field, coverage]) => {
      if (parseFloat(coverage.percentage) < 50 && ['ra', 'dec'].includes(field)) {
        recommendations.push({
          severity: 'critical',
          issue: `Critical field '${field}' has low coverage (${coverage.percentage}%)`,
          recommendation: `This field is essential for visualization - investigate data source`
        });
      }
    });

    if (recommendations.length === 0) {
      recommendations.push({
        severity: 'info',
        issue: 'Data quality is good',
        recommendation: 'Proceed with visualization'
      });
    }

    return recommendations;
  }

  /**
   * Print report to console
   */
  printReport(report) {
    console.log('═══════════════════════════════════════════════════════');
    console.log('📋 STAR DATA VALIDATION REPORT');
    console.log('═══════════════════════════════════════════════════════\n');

    console.log('📊 SUMMARY');
    console.log(`   Total Records: ${report.summary.totalRecords}`);
    console.log(`   Valid Records: ${report.summary.validRecords}`);
    console.log(`   Invalid Records: ${report.summary.invalidRecords}`);
    console.log(`   Completeness: ${report.summary.completeness}%`);
    console.log(`   Error Rate: ${report.summary.errorRate}%\n`);

    console.log('🎯 QUALITY SCORE');
    console.log(`   Overall: ${report.qualityScore.overall}/100`);
    console.log(`   └─ Completeness: ${report.qualityScore.breakdown.completeness}`);
    console.log(`   └─ Coordinates: ${report.qualityScore.breakdown.coordinates}`);
    console.log(`   └─ Field Coverage: ${report.qualityScore.breakdown.fieldCoverage}\n`);

    console.log('📁 CATALOG BREAKDOWN');
    Object.entries(report.catalogBreakdown).forEach(([catalog, count]) => {
      const percentage = (count / report.summary.totalRecords * 100).toFixed(2);
      console.log(`   ${catalog}: ${count} (${percentage}%)`);
    });
    console.log();

    console.log('🔍 FIELD COVERAGE');
    Object.entries(report.fieldCoverage).forEach(([field, coverage]) => {
      console.log(`   ${field}: ${coverage.percentage}% (${coverage.present}/${coverage.total})`);
    });
    console.log();

    if (report.errors.length > 0) {
      console.log('⚠️  ERRORS (showing first 10)');
      report.errors.slice(0, 10).forEach(error => {
        console.log(`   - ${error}`);
      });
      if (report.errors.length > 10) {
        console.log(`   ... and ${report.errors.length - 10} more errors\n`);
      } else {
        console.log();
      }
    }

    console.log('💡 RECOMMENDATIONS');
    report.recommendations.forEach(rec => {
      const icon = rec.severity === 'critical' ? '🔴' : rec.severity === 'high' ? '🟡' : '🟢';
      console.log(`   ${icon} [${rec.severity.toUpperCase()}] ${rec.issue}`);
      console.log(`      → ${rec.recommendation}`);
    });
    console.log();

    console.log('✅ VISUALIZATION READY:', report.readyForVisualization ? 'YES' : 'NO');
    console.log('═══════════════════════════════════════════════════════\n');
  }

  /**
   * Save report to file
   */
  saveReport(report, outputPath) {
    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
    console.log(`📄 Full report saved to: ${outputPath}\n`);
  }
}

// Main execution
if (require.main === module) {
  const dataPath = path.join(__dirname, '../data/stars.json');
  const reportPath = path.join(__dirname, '../data/validation-report.json');

  try {
    const validator = new StarDataValidator(dataPath);
    const report = validator.validate();

    validator.printReport(report);
    validator.saveReport(report, reportPath);

    // Exit with error code if quality is insufficient
    if (!report.readyForVisualization) {
      console.error('❌ Data quality insufficient for visualization\n');
      process.exit(1);
    }

    console.log('✅ Validation completed successfully\n');
    process.exit(0);

  } catch (error) {
    console.error('❌ Validation failed:', error.message);
    process.exit(1);
  }
}

module.exports = StarDataValidator;
