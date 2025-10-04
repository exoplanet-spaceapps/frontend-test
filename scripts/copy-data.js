#!/usr/bin/env node

/**
 * Copy data files from /data to /public/data for deployment
 */

const fs = require('fs');
const path = require('path');

// Define source and destination paths
const sourceDir = path.join(__dirname, '../data');
const destDir = path.join(__dirname, '../public/data');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('✓ Created public/data directory');
}

// Copy stars.json
const sourceFile = path.join(sourceDir, 'stars.json');
const destFile = path.join(destDir, 'stars.json');

try {
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);

    // Get file size
    const stats = fs.statSync(destFile);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log(`✓ Copied stars.json to public/data/ (${fileSizeMB} MB)`);

    // Validate JSON
    const content = fs.readFileSync(destFile, 'utf8');
    const data = JSON.parse(content);

    if (data.stars && Array.isArray(data.stars)) {
      console.log(`✓ Validated JSON: ${data.stars.length} stars found`);
    } else {
      console.warn('⚠ Warning: JSON structure may be invalid');
    }
  } else {
    console.error('✗ Error: stars.json not found in /data directory');
    console.log('  Please ensure Agent 1 has generated the star data');
    process.exit(1);
  }
} catch (error) {
  console.error('✗ Error copying data:', error.message);
  process.exit(1);
}

console.log('\n✓ Build preparation complete!');
