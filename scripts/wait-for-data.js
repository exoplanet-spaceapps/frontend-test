/**
 * Data Availability Monitor
 * Waits for stars.json to be created by Agent 1 and triggers validation
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const DATA_PATH = path.join(__dirname, '../data/stars.json');
const CHECK_INTERVAL = 2000; // Check every 2 seconds
const MAX_WAIT_TIME = 300000; // Max wait 5 minutes

let elapsedTime = 0;

console.log('⏳ Waiting for Agent 1 to create stars.json...');
console.log(`📁 Monitoring: ${DATA_PATH}\n`);

const checkInterval = setInterval(() => {
  elapsedTime += CHECK_INTERVAL;

  if (fs.existsSync(DATA_PATH)) {
    console.log('✅ stars.json detected!');
    console.log(`⏱️  Wait time: ${(elapsedTime / 1000).toFixed(1)}s\n`);

    clearInterval(checkInterval);

    // Verify file is not empty and is valid JSON
    try {
      const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
      console.log(`📊 File contains ${data.length} records\n`);

      // Run validation
      console.log('🚀 Starting validation pipeline...\n');
      exec('node scripts/validate-stars.js', (error, stdout, stderr) => {
        console.log(stdout);
        if (stderr) console.error(stderr);

        if (error) {
          console.error(`❌ Validation failed with exit code ${error.code}\n`);
          process.exit(1);
        } else {
          console.log('✅ Validation completed successfully!\n');

          // Run tests
          console.log('🧪 Running test suite...\n');
          exec('cd tests && npm test', (testError, testStdout, testStderr) => {
            console.log(testStdout);
            if (testStderr) console.error(testStderr);

            if (testError) {
              console.error(`❌ Tests failed with exit code ${testError.code}\n`);
              process.exit(1);
            } else {
              console.log('🎉 All validation and tests passed!\n');
              process.exit(0);
            }
          });
        }
      });

    } catch (error) {
      console.error('❌ Error reading stars.json:', error.message);
      console.log('⚠️  File may be incomplete - waiting for Agent 1 to finish writing...\n');
    }
  } else {
    const elapsed = (elapsedTime / 1000).toFixed(0);
    process.stdout.write(`\r⏳ Waiting... ${elapsed}s elapsed`);

    if (elapsedTime >= MAX_WAIT_TIME) {
      console.log('\n\n⚠️  Timeout: stars.json not created after 5 minutes');
      console.log('Please check if Agent 1 is running correctly\n');
      clearInterval(checkInterval);
      process.exit(1);
    }
  }
}, CHECK_INTERVAL);

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n\n⏹️  Monitoring stopped by user\n');
  clearInterval(checkInterval);
  process.exit(0);
});
