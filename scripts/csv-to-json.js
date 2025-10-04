/**
 * CSV to JSON Converter for NASA Exoplanet Dataset
 * Converts supervised_dataset.csv to JSON format
 * Prepares data structure for coordinate enrichment
 */

const fs = require('fs');
const path = require('path');

// File paths
const CSV_PATH = path.join(__dirname, '../data/supervised_dataset.csv');
const JSON_PATH = path.join(__dirname, '../data/initial_dataset.json');

/**
 * Parse CSV line considering comma-separated values
 */
function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current.trim());

  return values;
}

/**
 * Convert CSV to JSON with structure ready for coordinate enrichment
 */
function convertCSVtoJSON() {
  console.log('Reading CSV file...');
  const csvData = fs.readFileSync(CSV_PATH, 'utf-8');
  const lines = csvData.split('\n').filter(line => line.trim());

  console.log(`Total lines: ${lines.length}`);

  // Parse header
  const headers = parseCSVLine(lines[0]);
  console.log('Headers:', headers);

  // Parse data rows
  const jsonData = [];
  let ticCount = 0;
  let kicCount = 0;

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row = {};

    headers.forEach((header, index) => {
      const value = values[index] || '';
      // Convert numeric strings to numbers
      if (value && !isNaN(value) && value !== '') {
        row[header] = parseFloat(value);
      } else {
        row[header] = value || null;
      }
    });

    // Add placeholder for coordinates
    row.ra = null;
    row.dec = null;
    row.coordinates_fetched = false;

    // Track catalog type
    if (row.tid) {
      row.catalog = 'TIC';
      ticCount++;
    } else if (row.kepid) {
      row.catalog = 'KIC';
      kicCount++;
    } else {
      row.catalog = 'UNKNOWN';
    }

    jsonData.push(row);

    if ((i % 1000) === 0) {
      console.log(`Processed ${i} rows...`);
    }
  }

  console.log(`\nConversion complete!`);
  console.log(`Total records: ${jsonData.length}`);
  console.log(`TIC records: ${ticCount}`);
  console.log(`KIC records: ${kicCount}`);

  // Write JSON file
  console.log(`\nWriting JSON to ${JSON_PATH}...`);
  fs.writeFileSync(JSON_PATH, JSON.stringify(jsonData, null, 2));

  console.log('Done! JSON file created successfully.');

  return {
    total: jsonData.length,
    ticCount,
    kicCount,
    sample: jsonData.slice(0, 3)
  };
}

// Run conversion
if (require.main === module) {
  try {
    const result = convertCSVtoJSON();
    console.log('\nSample records:');
    console.log(JSON.stringify(result.sample, null, 2));
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

module.exports = { convertCSVtoJSON };
