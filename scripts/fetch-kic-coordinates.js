/**
 * KIC (Kepler) Coordinate Fetcher
 * Ultra-fast parallel fetching for Kepler Input Catalog coordinates
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const INPUT_JSON = path.join(__dirname, '../data/stars.json');
const OUTPUT_JSON = path.join(__dirname, '../data/stars.json');
const PROGRESS_FILE = path.join(__dirname, '../data/kic_progress.json');

const CONCURRENT_BATCHES = 10;
const BATCH_SIZE = 50;
const RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 1000;

const MAST_API = {
  host: 'mast.stsci.edu',
  path: '/api/v0/invoke'
};

/**
 * Make HTTPS request with retry
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
 * Batch query KIC IDs
 */
async function batchQueryKIC(kepids) {
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
      service: 'Mast.Catalogs.Filtered.Kic',
      format: 'json',
      params: {
        columns: 'kepid,ra,dec,kepmag',
        filters: [{
          paramName: 'kepid',
          values: kepids
        }]
      }
    })
  };

  const response = await makeRequestWithRetry(options, requestData);
  return response?.data || [];
}

/**
 * Main KIC fetching function
 */
async function fetchKICCoordinates() {
  console.log('⚡ FETCHING KIC (KEPLER) COORDINATES\n');

  const startTime = Date.now();
  const data = JSON.parse(fs.readFileSync(INPUT_JSON, 'utf-8'));

  console.log(`Total records: ${data.length}`);

  // Get KIC records needing coordinates
  const kicRecords = data.filter(r =>
    r.catalog === 'KIC' && r.kepid && (!r.ra || !r.dec)
  );

  console.log(`KIC records to fetch: ${kicRecords.length}\n`);

  if (kicRecords.length === 0) {
    console.log('✅ All KIC records have coordinates!');
    return;
  }

  // Create batches
  const kicBatches = [];
  for (let i = 0; i < kicRecords.length; i += BATCH_SIZE) {
    kicBatches.push(kicRecords.slice(i, i + BATCH_SIZE));
  }

  console.log(`Created ${kicBatches.length} batches of ${BATCH_SIZE} records\n`);

  // Map to store results
  const coordMap = new Map();
  let completed = 0;
  let successful = 0;

  // Process in concurrent chunks
  for (let i = 0; i < kicBatches.length; i += CONCURRENT_BATCHES) {
    const batchChunk = kicBatches.slice(i, i + CONCURRENT_BATCHES);

    const promises = batchChunk.map(async (batch) => {
      const kepids = batch.map(r => r.kepid);
      try {
        const results = await batchQueryKIC(kepids);

        results.forEach(star => {
          coordMap.set(star.kepid, {
            ra: star.ra,
            dec: star.dec,
            magnitude: star.kepmag
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

    const progress = (completed / kicBatches.length * 100).toFixed(1);
    console.log(`Progress: ${progress}% | Batches: ${completed}/${kicBatches.length} | Success: ${successful}`);

    // Save intermediate progress
    if (completed % 20 === 0) {
      data.forEach((record) => {
        if (record.catalog === 'KIC' && record.kepid) {
          const coords = coordMap.get(record.kepid);
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
  }

  // Apply all coordinates
  data.forEach((record) => {
    if (record.catalog === 'KIC' && record.kepid) {
      const coords = coordMap.get(record.kepid);
      if (coords) {
        record.ra = coords.ra;
        record.dec = coords.dec;
        record.magnitude = coords.magnitude;
        record.coordinates_fetched = true;
      }
    }
  });

  // Count final results
  const withCoords = data.filter(r => r.ra !== null && r.dec !== null);

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  const speed = (successful / (duration / 60)).toFixed(0);

  console.log(`\n✅ KIC COORDINATE FETCHING COMPLETE!`);
  console.log(`Duration: ${duration}s`);
  console.log(`KIC records fetched: ${successful}/${kicRecords.length}`);
  console.log(`Total with coordinates: ${withCoords.length}/${data.length} (${(withCoords.length/data.length*100).toFixed(1)}%)`);
  console.log(`Speed: ${speed} records/minute\n`);

  // Final save
  const progress = {
    total: data.length,
    processed: data.length,
    kicFetched: successful,
    totalWithCoords: withCoords.length,
    completeness: (withCoords.length / data.length * 100).toFixed(1),
    duration: duration,
    timestamp: new Date().toISOString()
  };

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

  console.log(`💾 Saved to: ${OUTPUT_JSON}`);
  console.log(`📊 Progress: ${PROGRESS_FILE}`);
}

// Run
if (require.main === module) {
  fetchKICCoordinates()
    .then(() => process.exit(0))
    .catch(error => {
      console.error('❌ Error:', error);
      process.exit(1);
    });
}

module.exports = { fetchKICCoordinates };
