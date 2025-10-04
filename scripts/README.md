# Data Validation Scripts

This directory contains scripts for validating and analyzing star coordinate data quality.

## Scripts Overview

### 1. validate-stars.js
**Primary validation engine**

Performs comprehensive data quality validation on stars.json:
- Coordinate range validation (RA: 0-360°, DEC: -90°-90°)
- Required field presence checks
- Numeric type validation
- Null/undefined detection
- Field coverage statistics
- Catalog distribution analysis
- Quality score calculation
- Visualization readiness assessment

**Usage:**
```bash
node scripts/validate-stars.js
```

**Output:**
- Console report with detailed statistics
- `data/validation-report.json` - Full validation report

**Exit Codes:**
- `0` - Validation passed, ready for visualization
- `1` - Validation failed or quality insufficient

---

### 2. quality-metrics.js
**Quality metrics analyzer and visualizer**

Generates detailed quality metrics and user-friendly summaries from validation reports.

**Features:**
- Visual progress bars for metrics
- Color-coded quality indicators
- Detailed field coverage analysis
- Catalog distribution visualization
- Recommendation prioritization

**Usage:**
```bash
node scripts/quality-metrics.js
```

**Prerequisites:**
- Must run `validate-stars.js` first to generate validation report

**Output:**
- Console summary with visual indicators
- `data/quality-metrics.json` - Exportable metrics

---

### 3. wait-for-data.js
**Data availability monitor**

Monitors for stars.json creation and automatically triggers validation pipeline when ready.

**Features:**
- Polls for data file every 2 seconds
- 5-minute timeout protection
- Validates file completeness
- Auto-triggers validation and tests
- Progress indicator

**Usage:**
```bash
node scripts/wait-for-data.js
```

**Use Case:**
Run this in parallel with Agent 1 (coordinate fetcher) to automatically validate data as soon as it's available.

---

### 4. run-validation.sh
**Complete validation pipeline runner**

Bash script that runs the complete validation workflow.

**Workflow:**
1. Check if stars.json exists
2. Run validation script
3. Run test suite
4. Report overall status

**Usage:**
```bash
bash scripts/run-validation.sh
```

**Windows (Git Bash):**
```bash
bash scripts/run-validation.sh
```

**Windows (PowerShell):**
Convert to PowerShell or run in WSL/Git Bash

---

## Workflow Examples

### Standard Workflow
```bash
# Step 1: Wait for data from Agent 1
node scripts/wait-for-data.js

# OR run manually after data is ready:

# Step 2: Validate data
node scripts/validate-stars.js

# Step 3: Analyze metrics
node scripts/quality-metrics.js

# Step 4: Run tests
cd tests
npm test
```

### Quick Validation
```bash
# Run everything at once
bash scripts/run-validation.sh
```

### Manual Validation Only
```bash
node scripts/validate-stars.js && node scripts/quality-metrics.js
```

---

## Understanding Validation Results

### Quality Score Components

**Overall Score (0-100)**
- 60% - Data Completeness (valid records / total records)
- 30% - Coordinate Quality (100 - error rate)
- 10% - Field Coverage (average field completeness)

**Quality Tiers:**
- 90-100: Excellent (production-ready)
- 80-89: Good (visualization-ready)
- 70-79: Fair (review recommendations)
- 60-69: Poor (fix issues)
- <60: Critical (re-fetch data)

### Field Coverage
Percentage of records with non-null values for each field.

**Critical Fields** (must be >95%):
- `id`: Star identifier
- `ra`: Right Ascension
- `dec`: Declination

**Optional Fields** (can be lower):
- Magnitude fields (Tmag, Vmag, etc.)
- Catalog metadata

### Catalog Distribution
Breakdown of stars by source catalog:
- **TIC**: TESS Input Catalog
- **KIC**: Kepler Input Catalog
- **UNKNOWN**: No catalog specified

---

## Validation Criteria Reference

### Coordinate Validation

| Field | Type | Range | Required |
|-------|------|-------|----------|
| ra | number | 0-360° | Yes |
| dec | number | -90° to 90° | Yes |
| id | string/number | any | Yes |
| Tmag | number | any | No |
| Vmag | number | any | No |
| Jmag | number | any | No |
| Hmag | number | any | No |
| Kmag | number | any | No |

### Error Types

**Critical Errors** (block visualization):
- Missing required fields (id, ra, dec)
- Coordinates out of range
- Invalid data types (strings instead of numbers)
- NaN or Infinity values

**Warnings** (logged but don't block):
- Null/undefined values in optional fields
- Missing magnitude data
- Unknown catalog source

---

## Troubleshooting

### stars.json not found
**Cause:** Agent 1 hasn't created the data file yet

**Solutions:**
1. Use `wait-for-data.js` to monitor automatically
2. Check if Agent 1 is running
3. Verify data directory exists

### Quality score < 80%
**Cause:** Too many invalid records

**Solutions:**
1. Review `data/validation-report.json` for specific errors
2. Check API query parameters in Agent 1
3. Verify coordinate data source quality
4. Consider filtering or re-fetching data

### Tests failing
**Cause:** Validation logic errors or environment issues

**Solutions:**
1. Ensure Node.js version >= 14
2. Run `npm install` in tests directory
3. Check test file paths are correct
4. Review error messages for specific failures

### Empty or incomplete results
**Cause:** File being written by Agent 1 during validation

**Solutions:**
1. Wait for Agent 1 to complete
2. Use `wait-for-data.js` to prevent race conditions
3. Check file size before validating

---

## Integration with Agent Swarm

### Hook Integration

**Before validation:**
```bash
npx claude-flow@alpha hooks pre-task --description "Validate data quality"
npx claude-flow@alpha hooks session-restore --session-id "swarm-data-validation"
```

**During validation:**
```bash
npx claude-flow@alpha hooks post-edit --file "scripts/validate-stars.js" --memory-key "swarm/data-validator/validation-script"
npx claude-flow@alpha hooks notify --message "Validation complete: 98% quality score"
```

**After validation:**
```bash
npx claude-flow@alpha hooks post-task --task-id "data-validation"
npx claude-flow@alpha hooks session-end --export-metrics true
```

### Memory Coordination

Validation results are stored in swarm memory for access by other agents:
- Quality metrics
- Validation status
- Error summaries
- Readiness flags

---

## Output Files

### Generated Files

| File | Description | Format |
|------|-------------|--------|
| `data/validation-report.json` | Full validation report | JSON |
| `data/quality-metrics.json` | Exportable metrics | JSON |
| `data/stars.json` | Input data (from Agent 1) | JSON |

### Report Structure

**validation-report.json:**
```json
{
  "timestamp": "ISO 8601 timestamp",
  "summary": {
    "totalRecords": 1000,
    "validRecords": 982,
    "invalidRecords": 18,
    "completeness": 98.2,
    "errorRate": 1.8
  },
  "fieldCoverage": { ... },
  "catalogBreakdown": { ... },
  "errors": [ ... ],
  "warnings": [ ... ],
  "qualityScore": { ... },
  "readyForVisualization": true,
  "recommendations": [ ... ]
}
```

---

## Dependencies

### Required
- Node.js >= 14.0.0
- fs (built-in)
- path (built-in)

### For Tests
- Jest >= 27.0.0 (installed in tests directory)

### Optional
- claude-flow@alpha (for swarm coordination)

---

## Best Practices

1. **Always validate after fetching new data**
2. **Review validation reports before visualization**
3. **Track quality metrics over time**
4. **Use hooks for swarm coordination**
5. **Keep validation scripts updated**
6. **Document any custom validation rules**

---

## Version History

**v1.0.0** - Initial release
- Coordinate range validation
- Required field checks
- Quality score calculation
- Test suite
- Report generation
- Swarm integration

---

## Support

For issues or questions:
1. Check troubleshooting section above
2. Review validation report details
3. Consult data quality report in `/docs`
4. Contact agent coordinator

---

**Last Updated:** 2025-10-04
**Maintained by:** Agent 4 - Data Quality Validator
