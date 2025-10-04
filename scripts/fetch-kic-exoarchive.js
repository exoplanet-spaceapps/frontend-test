/**
 * KIC Coordinate Fetcher using NASA Exoplanet Archive
 * Alternative method using NASA's Exoplanet Archive TAP service
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const INPUT_JSON = path.join(__dirname, '../data/stars.json');
const OUTPUT_JSON = path.join(__dirname, '../data/stars.json');
const PROGRESS_FILE = path.join(__dirname, '../data/kic_exo_progress.json');

// NASA Exoplanet Archive TAP service
const EXOARCHIVE_API = {
  host: 'exoplanetarchive.ipac.caltech.edu',
  path: '/TAP/sync'
};

const CONCURRENT_REQUESTS = 5;
const DELAY_MS = 200;

/**
 * Query NASA Exoplanet Archive for KIC coordinates
 */
async function queryExoArchiveKIC(kepid) {
  return new Promise((resolve, reject) => {
    // ADQL query for Kepler stellar table
    const query = `SELECT kepid, ra, dec, kepmag FROM keplerstellar WHERE kepid = ${kepid}`;
    const params = new URLSearchParams({
      request: 'doQuery',
      lang: 'ADQL',
      format: 'json',
      query: query
    });

    const options = {
      host: EXOARCHIVE_API.host,
      path: `${EXOARCHIVE_API.path}?${params.toString()}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result && result.length > 0) {
            const star = result[0];
            resolve({
              ra: star.ra,
              dec: star.dec,
              magnitude: star.kepmag
            });
          } else {
            resolve(null);
          }
        } catch (e) {
          console.error(`Parse error for KIC ${kepid}:`, e.message);
          resolve(null);
        }
      });
    });

    req.on('error', (error) => {
      console.error(`Request error for KIC ${kepid}:`, error.message);
      resolve(null);
    });

    req.end();
  });
}

/**
 * Process batch of KIC records
 */
async function processBatch(records) {
  const results = [];

  for (const record of records) {
    if (record.catalog === 'KIC' && record.kepid) {
      const coords = await queryExoArchiveKIC(record.kepid);

      if (coords) {
        record.ra = coords.ra;
        record.dec = coords.dec;
        record.magnitude = coords.magnitude;
        record.coordinates_fetched = true;
        results.push({ success: true, kepid: record.kepid });
      } else {
        results.push({ success: false, kepid: record.kepid });
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, DELAY_MS));
    }
  }

  return results;
}

/**
 * Main fetch function
 */
async function fetchKICCoordinates() {
  console.log('🌟 FETCHING KIC COORDINATES - NASA EXOPLANET ARCHIVE\n');

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

  // Process in small batches
  const BATCH_SIZE = 50;
  let totalSuccess = 0;
  let totalFailed = 0;

  for (let i = 0; i < kicRecords.length; i += BATCH_SIZE) {
    const batch = kicRecords.slice(i, i + BATCH_SIZE);
    const batchResults = await processBatch(batch);

    const batchSuccess = batchResults.filter(r => r.success).length;
    const batchFailed = batchResults.filter(r => !r.success).length;

    totalSuccess += batchSuccess;
    totalFailed += batchFailed;

    const progress = ((i + batch.length) / kicRecords.length * 100).toFixed(1);
    console.log(`Progress: ${progress}% | ${i + batch.length}/${kicRecords.length} | Success: ${totalSuccess} | Failed: ${totalFailed}`);

    // Save intermediate progress
    if ((i + batch.length) % 200 === 0) {
      fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2));
      console.log(`  💾 Saved intermediate progress`);
    }
  }

  // Count final results
  const withCoords = data.filter(r => r.ra !== null && r.dec !== null).length;

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  const speed = (totalSuccess / (duration / 60)).toFixed(0);

  console.log(`\n✅ KIC COORDINATE FETCHING COMPLETE!`);
  console.log(`Duration: ${duration}s`);
  console.log(`KIC records fetched: ${totalSuccess}/${kicRecords.length} (${(totalSuccess/kicRecords.length*100).toFixed(1)}%)`);
  console.log(`Total with coordinates: ${withCoords}/${data.length} (${(withCoords/data.length*100).toFixed(1)}%)`);
  console.log(`Speed: ${speed} records/minute\n`);

  // Final save
  const progress = {
    total: data.length,
    kicRecords: kicRecords.length,
    kicSuccess: totalSuccess,
    kicFailed: totalFailed,
    totalWithCoords: withCoords,
    completeness: (withCoords / data.length * 100).toFixed(1),
    duration: duration,
    source: 'NASA Exoplanet Archive',
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
