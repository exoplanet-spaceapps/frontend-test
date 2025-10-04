/**
 * Ultra-Fast Parallel Coordinate Fetcher
 * Uses aggressive parallelization with Promise.all for maximum speed
 * Optimized for NASA MAST API batch queries
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const INPUT_JSON = path.join(__dirname, '../data/initial_dataset.json');
const OUTPUT_JSON = path.join(__dirname, '../data/stars.json');
const PROGRESS_FILE = path.join(__dirname, '../data/ultra_progress.json');

const CONCURRENT_BATCHES = 10; // Number of simultaneous API calls
const BATCH_SIZE = 50; // IDs per batch query
const RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 1000;

// MAST API
const MAST_API = {
  host: 'mast.stsci.edu',
  path: '/api/v0/invoke'
};

/**
 * Make HTTPS request with retry logic
 */
async function makeRequestWithRetry(options, postData, retries = RETRY_ATTEMPTS) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const result = await new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
          let data = '';
          res.on('data', (chunk) => { data += chunk; });
          res.on('end', () => {
            try {
              const jsonMatch = data.match(/^({.*})\{/);
              const cleanData = jsonMatch ? jsonMatch[1] : data;
              resolve(JSON.parse(cleanData));
            } catch (e) {
              reject(e);
            }
          });
        });
        req.on('error', reject);
        if (postData) req.write(JSON.stringify(postData));
        req.end();
      });
      return result;
    } catch (error) {
      if (attempt === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (attempt + 1)));
    }
  }
}

/**
 * Batch query TIC IDs
 */
async function batchQueryTIC(ticIds) {
  const options = {
    host: MAST_API.host,
    path: MAST_API.path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  const requestData = {
    request: JSON.stringify({
      service: 'Mast.Catalogs.Filtered.Tic',
      format: 'json',
      params: {
        columns: 'ID,ra,dec,Tmag',
        filters: [{
          paramName: 'ID',
          values: ticIds
        }]
      }
    })
  };

  const response = await makeRequestWithRetry(options, requestData);
  return response?.data || [];
}

/**
 * Process all records with ultra-parallel batching
 */
async function ultraParallelFetch() {
  console.log('⚡ ULTRA-FAST PARALLEL FETCHING ACTIVATED\n');

  const startTime = Date.now();
  const data = JSON.parse(fs.readFileSync(INPUT_JSON, 'utf-8'));

  console.log(`Total records: ${data.length}`);

  // Get records needing coordinates
  const needsCoords = data.filter(r =>
    !r.coordinates_fetched || !r.ra || !r.dec
  );

  console.log(`Records to fetch: ${needsCoords.length}`);

  if (needsCoords.length === 0) {
    console.log('✅ All records complete!');
    return;
  }

  // Separate TIC and KIC
  const ticRecords = needsCoords.filter(r => r.catalog === 'TIC' && r.tid);
  const kicRecords = needsCoords.filter(r => r.catalog === 'KIC' && r.kepid);

  console.log(`TIC: ${ticRecords.length}, KIC: ${kicRecords.length}\n`);

  // Create batches
  const ticBatches = [];
  for (let i = 0; i < ticRecords.length; i += BATCH_SIZE) {
    ticBatches.push(ticRecords.slice(i, i + BATCH_SIZE));
  }

  console.log(`Created ${ticBatches.length} batches of ${BATCH_SIZE} records\n`);

  // Process batches with controlled concurrency
  let completed = 0;
  let successful = 0;
  let failed = 0;

  // Map to store results
  const coordMap = new Map();

  // Process in concurrent chunks
  for (let i = 0; i < ticBatches.length; i += CONCURRENT_BATCHES) {
    const batchChunk = ticBatches.slice(i, i + CONCURRENT_BATCHES);

    const promises = batchChunk.map(async (batch) => {
      const ticIds = batch.map(r => r.tid);
      try {
        const results = await batchQueryTIC(ticIds);

        // Map results
        results.forEach(star => {
          coordMap.set(star.ID, {
            ra: star.ra,
            dec: star.dec,
            magnitude: star.Tmag
          });
        });

        return results.length;
      } catch (error) {
        console.error(`Batch error:`, error.message);
        return 0;
      }
    });

    const results = await Promise.all(promises);
    completed += batchChunk.length;
    const batchSuccess = results.reduce((sum, count) => sum + count, 0);
    successful += batchSuccess;

    const progress = (completed / ticBatches.length * 100).toFixed(1);
    console.log(`Progress: ${progress}% | Batches: ${completed}/${ticBatches.length} | Success: ${successful}`);

    // Save intermediate progress
    if (completed % 20 === 0) {
      saveIntermediateProgress(data, coordMap, successful, failed);
    }
  }

  // Apply coordinates to all records
  data.forEach((record, index) => {
    if (record.catalog === 'TIC' && record.tid) {
      const coords = coordMap.get(record.tid);
      if (coords) {
        record.ra = coords.ra;
        record.dec = coords.dec;
        record.magnitude = coords.magnitude;
        record.coordinates_fetched = true;
      }
    }

    // Add ID field (fix for Agent 4)
    if (!record.id) {
      record.id = record.target_id || `STAR-${index}`;
    }
  });

  // Count final results
  const withCoords = data.filter(r => r.ra !== null && r.dec !== null);

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  const speed = (withCoords.length / (duration / 60)).toFixed(0);

  console.log(`\n✅ ULTRA-PARALLEL FETCHING COMPLETE!`);
  console.log(`Duration: ${duration}s`);
  console.log(`Total with coordinates: ${withCoords.length}/${data.length}`);
  console.log(`Speed: ${speed} records/minute`);
  console.log(`Speedup: ${(speed / 96).toFixed(1)}x faster than sequential\n`);

  // Final save
  const progress = {
    total: data.length,
    processed: data.length,
    withCoordinates: withCoords.length,
    success: successful,
    failed: data.length - withCoords.length,
    duration: duration,
    speed: speed,
    method: 'ultra-parallel-batch',
    timestamp: new Date().toISOString()
  };

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

  console.log(`💾 Saved to: ${OUTPUT_JSON}`);
  console.log(`📊 Progress: ${PROGRESS_FILE}`);
}

/**
 * Save intermediate progress
 */
function saveIntermediateProgress(data, coordMap, successful, failed) {
  data.forEach((record) => {
    if (record.catalog === 'TIC' && record.tid) {
      const coords = coordMap.get(record.tid);
      if (coords) {
        record.ra = coords.ra;
        record.dec = coords.dec;
        record.magnitude = coords.magnitude;
        record.coordinates_fetched = true;
      }
    }
  });

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2));
  console.log(`  💾 Intermediate save: ${successful} successful`);
}

// Run
if (require.main === module) {
  ultraParallelFetch()
    .then(() => process.exit(0))
    .catch(error => {
      console.error('❌ Error:', error);
      process.exit(1);
    });
}

module.exports = { ultraParallelFetch };
