/**
 * Quick script to check if coordinate fetching is complete
 */

const fs = require('fs');
const path = require('path');

const PROGRESS_FILE = path.join(__dirname, '../data/fetch_progress.json');

if (!fs.existsSync(PROGRESS_FILE)) {
  console.log('❌ Progress file not found. Fetching may not have started.');
  process.exit(1);
}

const progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));

console.log('\n📊 NASA MAST Coordinate Fetching Progress\n');
console.log(`Total Records: ${progress.total.toLocaleString()}`);
console.log(`Processed: ${progress.processed.toLocaleString()} (${((progress.processed / progress.total) * 100).toFixed(2)}%)`);
console.log(`Success: ${progress.success.toLocaleString()}`);
console.log(`Failed: ${progress.failed.toLocaleString()}`);
console.log(`Success Rate: ${((progress.success / progress.processed) * 100).toFixed(2)}%`);
console.log('\nBreakdown:');
console.log(`  TIC Success: ${progress.ticSuccess.toLocaleString()}`);
console.log(`  KIC Success: ${progress.kicSuccess.toLocaleString()}`);

const remaining = progress.total - progress.processed;
if (remaining > 0) {
  const rate = progress.processed / ((Date.now() - fs.statSync(PROGRESS_FILE).birthtimeMs) / 1000 / 60); // records per minute
  const estimatedMinutes = remaining / rate;
  console.log(`\n⏱️  Estimated time remaining: ${estimatedMinutes.toFixed(1)} minutes`);
  console.log(`   (Processing at ~${rate.toFixed(1)} records/minute)`);
} else {
  console.log('\n✅ COMPLETE! All coordinates have been fetched.');
}

console.log('\n');
