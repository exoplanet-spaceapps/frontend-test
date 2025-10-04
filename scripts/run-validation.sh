#!/bin/bash

# Star Data Validation Runner
# Runs comprehensive validation and testing pipeline

echo "🚀 Starting Star Data Validation Pipeline"
echo "=========================================="
echo ""

# Check if stars.json exists
if [ ! -f "data/stars.json" ]; then
    echo "❌ Error: data/stars.json not found"
    echo "Please run Agent 1 (coordinate fetcher) first"
    exit 1
fi

# Run validation script
echo "📋 Step 1: Running data validation..."
node scripts/validate-stars.js
VALIDATION_EXIT=$?

if [ $VALIDATION_EXIT -ne 0 ]; then
    echo ""
    echo "⚠️  Validation found issues - check report for details"
fi

echo ""
echo "🧪 Step 2: Running test suite..."
cd tests
npm test
TEST_EXIT=$?
cd ..

echo ""
echo "=========================================="
if [ $VALIDATION_EXIT -eq 0 ] && [ $TEST_EXIT -eq 0 ]; then
    echo "✅ All validation and tests passed!"
    echo "🎉 Data is ready for visualization"
    exit 0
else
    echo "❌ Validation or tests failed"
    echo "Please review the reports and fix issues"
    exit 1
fi
