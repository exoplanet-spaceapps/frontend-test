/**
 * Quality Metrics Calculator
 * Generates detailed quality metrics and visualizations from validation report
 */

const fs = require('fs');
const path = require('path');

class QualityMetricsAnalyzer {
  constructor(reportPath) {
    this.reportPath = reportPath;
  }

  loadReport() {
    try {
      const rawData = fs.readFileSync(this.reportPath, 'utf8');
      return JSON.parse(rawData);
    } catch (error) {
      throw new Error(`Failed to load report: ${error.message}`);
    }
  }

  generateSummary(report) {
    console.log('╔══════════════════════════════════════════════════════╗');
    console.log('║         DATA QUALITY METRICS SUMMARY                 ║');
    console.log('╚══════════════════════════════════════════════════════╝\n');

    // Overall Quality Score
    const quality = report.qualityScore.overall;
    const qualityBar = this.createProgressBar(quality, 100);
    const qualityStatus = this.getQualityStatus(quality);

    console.log('📊 OVERALL QUALITY SCORE');
    console.log(`   ${qualityBar} ${quality}/100`);
    console.log(`   Status: ${qualityStatus}\n`);

    // Completeness
    const completeness = report.summary.completeness;
    const completenessBar = this.createProgressBar(completeness, 100);

    console.log('✓ DATA COMPLETENESS');
    console.log(`   ${completenessBar} ${completeness}%`);
    console.log(`   Valid: ${report.summary.validRecords}/${report.summary.totalRecords} records\n`);

    // Error Analysis
    const errorRate = report.summary.errorRate;
    const errorStatus = errorRate < 5 ? '🟢 Excellent' : errorRate < 10 ? '🟡 Good' : '🔴 Needs Attention';

    console.log('⚠️  ERROR ANALYSIS');
    console.log(`   Error Rate: ${errorRate}% ${errorStatus}`);
    console.log(`   Invalid Records: ${report.summary.invalidRecords}\n`);

    // Field Coverage Summary
    console.log('📋 CRITICAL FIELD COVERAGE');
    const criticalFields = ['ra', 'dec', 'id'];
    criticalFields.forEach(field => {
      if (report.fieldCoverage[field]) {
        const coverage = parseFloat(report.fieldCoverage[field].percentage);
        const bar = this.createProgressBar(coverage, 100);
        const icon = coverage >= 95 ? '✅' : coverage >= 80 ? '⚠️' : '❌';
        console.log(`   ${icon} ${field.padEnd(10)}: ${bar} ${coverage}%`);
      }
    });
    console.log();

    // Catalog Distribution
    console.log('📚 CATALOG DISTRIBUTION');
    const total = report.summary.totalRecords;
    Object.entries(report.catalogBreakdown).forEach(([catalog, count]) => {
      const percentage = (count / total * 100).toFixed(1);
      const bar = this.createProgressBar(percentage, 100);
      console.log(`   ${catalog.padEnd(15)}: ${bar} ${count} (${percentage}%)`);
    });
    console.log();

    // Quality Breakdown
    console.log('🎯 QUALITY SCORE BREAKDOWN');
    console.log(`   Completeness:   ${report.qualityScore.breakdown.completeness.toFixed(2)}/60`);
    console.log(`   Coordinates:    ${report.qualityScore.breakdown.coordinates.toFixed(2)}/30`);
    console.log(`   Field Coverage: ${report.qualityScore.breakdown.fieldCoverage.toFixed(2)}/10`);
    console.log();

    // Recommendations
    console.log('💡 RECOMMENDATIONS');
    report.recommendations.forEach((rec, index) => {
      const icon = this.getSeverityIcon(rec.severity);
      console.log(`   ${index + 1}. ${icon} [${rec.severity.toUpperCase()}]`);
      console.log(`      Issue: ${rec.issue}`);
      console.log(`      Action: ${rec.recommendation}`);
    });
    console.log();

    // Visualization Readiness
    const vizIcon = report.readyForVisualization ? '✅' : '❌';
    const vizStatus = report.readyForVisualization ? 'READY' : 'NOT READY';
    console.log('╔══════════════════════════════════════════════════════╗');
    console.log(`║  ${vizIcon} VISUALIZATION STATUS: ${vizStatus.padEnd(25)} ║`);
    console.log('╚══════════════════════════════════════════════════════╝\n');
  }

  createProgressBar(value, max, width = 30) {
    const percentage = (value / max) * 100;
    const filled = Math.round((percentage / 100) * width);
    const empty = width - filled;

    const bar = '█'.repeat(filled) + '░'.repeat(empty);

    // Color coding
    if (percentage >= 90) return `🟢 ${bar}`;
    if (percentage >= 80) return `🟡 ${bar}`;
    if (percentage >= 70) return `🟠 ${bar}`;
    return `🔴 ${bar}`;
  }

  getQualityStatus(score) {
    if (score >= 90) return '🟢 Excellent - Ready for production';
    if (score >= 80) return '🟡 Good - Ready for visualization';
    if (score >= 70) return '🟠 Fair - Review recommendations';
    if (score >= 60) return '🔴 Poor - Address issues';
    return '🔴 Critical - Re-fetch data';
  }

  getSeverityIcon(severity) {
    switch (severity.toLowerCase()) {
      case 'critical': return '🔴';
      case 'high': return '🟡';
      case 'medium': return '🟠';
      case 'low': return '🟢';
      default: return 'ℹ️';
    }
  }

  generateDetailedMetrics(report) {
    const metrics = {
      timestamp: report.timestamp,
      qualityScore: report.qualityScore.overall,
      dataCompleteness: report.summary.completeness,
      errorRate: report.summary.errorRate,
      totalRecords: report.summary.totalRecords,
      validRecords: report.summary.validRecords,
      invalidRecords: report.summary.invalidRecords,
      catalogDistribution: report.catalogBreakdown,
      criticalFieldCoverage: {
        ra: report.fieldCoverage.ra ? parseFloat(report.fieldCoverage.ra.percentage) : 0,
        dec: report.fieldCoverage.dec ? parseFloat(report.fieldCoverage.dec.percentage) : 0,
        id: report.fieldCoverage.id ? parseFloat(report.fieldCoverage.id.percentage) : 0
      },
      readyForVisualization: report.readyForVisualization,
      recommendations: report.recommendations
    };

    return metrics;
  }

  exportMetrics(metrics, outputPath) {
    fs.writeFileSync(outputPath, JSON.stringify(metrics, null, 2));
    console.log(`📊 Detailed metrics exported to: ${outputPath}\n`);
  }
}

// Main execution
if (require.main === module) {
  const reportPath = path.join(__dirname, '../data/validation-report.json');
  const metricsPath = path.join(__dirname, '../data/quality-metrics.json');

  try {
    const analyzer = new QualityMetricsAnalyzer(reportPath);
    const report = analyzer.loadReport();

    analyzer.generateSummary(report);

    const metrics = analyzer.generateDetailedMetrics(report);
    analyzer.exportMetrics(metrics, metricsPath);

    console.log('✅ Quality metrics analysis completed\n');
    process.exit(0);

  } catch (error) {
    console.error('❌ Metrics analysis failed:', error.message);
    console.log('⚠️  Make sure validation has been run first\n');
    process.exit(1);
  }
}

module.exports = QualityMetricsAnalyzer;
