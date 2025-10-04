/**
 * Parallel Coordinate Fetcher for NASA Exoplanet Dataset
 * Uses multiple concurrent workers to accelerate coordinate fetching
 * Optimized for maximum throughput with MAST API
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { Worker } = require('worker_threads');

// Configuration
const INPUT_JSON = path.join(__dirname, '../data/initial_dataset.json');
const OUTPUT_JSON = path.join(__dirname, '../data/stars.json');
const PROGRESS_FILE = path.join(__dirname, '../data/parallel_progress.json');

const NUM_WORKERS = 5; // Number of parallel workers
const BATCH_SIZE = 10; // Records per batch
const DELAY_MS = 50; // Reduced delay for parallel execution

// MAST API configuration
const MAST_API = {
  host: 'mast.stsci.edu',
  path: '/api/v0/invoke'
};

/**
 * Make HTTPS request to MAST API
 */
function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const jsonMatch = data.match(/^({.*})\{/);
          const cleanData = jsonMatch ? jsonMatch[1] : data;
          const jsonData = JSON.parse(cleanData);
          resolve(jsonData);
        } catch (e) {
          console.error('JSON parse error:', e.message);
          resolve(null);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (postData) {
      req.write(JSON.stringify(postData));
    }

    req.end();
  });
}

/**
 * Query MAST API for batch of TIC IDs
 */
async function queryBatchTIC(ticIds) {
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
        filters: [
          {
            paramName: 'ID',
            values: ticIds
          }
        ]
      }
    })
  };

  try {
    const response = await makeRequest(options, requestData);
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.error(`Batch query error:`, error.message);
  }

  return [];
}

/**
 * Query single TIC ID (fallback)
 */
async function querySingleTIC(ticId) {
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
        filters: [
          {
            paramName: 'ID',
            values: [ticId]
          }
        ]
      }
    })
  };

  try {
    const response = await makeRequest(options, requestData);
    if (response && response.data && response.data.length > 0) {
      const star = response.data[0];
      return {
        ra: star.ra,
        dec: star.dec,
        magnitude: star.Tmag
      };
    }
  } catch (error) {
    console.error(`Error querying TIC ${ticId}:`, error.message);
  }

  return null;
}

/**
 * Process chunk of records
 */
async function processChunk(records, startIndex) {
  const results = [];
  let successCount = 0;
  let failCount = 0;

  // Try batch query first
  const ticIds = records
    .filter(r => r.catalog === 'TIC' && r.tid)
    .map(r => r.tid);

  if (ticIds.length > 0) {
    try {
      const batchResults = await queryBatchTIC(ticIds);

      // Map batch results to records
      const resultMap = new Map();
      batchResults.forEach(star => {
        resultMap.set(star.ID, {
          ra: star.ra,
          dec: star.dec,
          magnitude: star.Tmag
        });
      });

      // Apply results to records
      for (let i = 0; i < records.length; i++) {
        const record = records[i];

        if (record.catalog === 'TIC' && record.tid) {
          const coords = resultMap.get(record.tid);
          if (coords) {
            record.ra = coords.ra;
            record.dec = coords.dec;
            record.magnitude = coords.magnitude;
            record.coordinates_fetched = true;
            successCount++;
          } else {
            failCount++;
          }
        }

        results.push(record);
      }
    } catch (error) {
      console.error(`Batch processing error:`, error.message);
      // Fall back to single queries
      for (const record of records) {
        if (record.catalog === 'TIC' && record.tid) {
          const coords = await querySingleTIC(record.tid);
          if (coords) {
            record.ra = coords.ra;
            record.dec = coords.dec;
            record.magnitude = coords.magnitude;
            record.coordinates_fetched = true;
            successCount++;
          } else {
            failCount++;
          }
        }
        results.push(record);
        await delay(DELAY_MS);
      }
    }
  }

  return {
    records: results,
    success: successCount,
    failed: failCount,
    startIndex,
    endIndex: startIndex + records.length
  };
}

/**
 * Delay helper
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Save progress
 */
function saveProgress(data, progress) {
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

/**
 * Main parallel fetching function
 */
async function parallelFetch() {
  console.log('🚀 Starting parallel coordinate fetching...\n');

  // Load data
  const data = JSON.parse(fs.readFileSync(INPUT_JSON, 'utf-8'));
  console.log(`Total records: ${data.length}`);

  // Find records that need coordinates
  const needsCoords = data.filter(r => !r.coordinates_fetched || !r.ra || !r.dec);
  console.log(`Records needing coordinates: ${needsCoords.length}\n`);

  if (needsCoords.length === 0) {
    console.log('✅ All records already have coordinates!');
    return;
  }

  // Split into chunks
  const chunkSize = Math.ceil(needsCoords.length / NUM_WORKERS);
  const chunks = [];

  for (let i = 0; i < needsCoords.length; i += chunkSize) {
    chunks.push(needsCoords.slice(i, i + chunkSize));
  }

  console.log(`Split into ${chunks.length} chunks of ~${chunkSize} records each\n`);

  // Process chunks in parallel
  const startTime = Date.now();
  let totalSuccess = 0;
  let totalFailed = 0;

  const promises = chunks.map(async (chunk, idx) => {
    console.log(`Worker ${idx + 1}: Processing ${chunk.length} records...`);

    const batchResults = [];
    for (let i = 0; i < chunk.length; i += BATCH_SIZE) {
      const batch = chunk.slice(i, i + BATCH_SIZE);
      const result = await processChunk(batch, i);
      batchResults.push(result);

      console.log(`Worker ${idx + 1}: ${i + batch.length}/${chunk.length} | Success: ${result.success} | Failed: ${result.failed}`);

      // Small delay between batches
      await delay(DELAY_MS);
    }

    return batchResults.flat();
  });

  const allResults = await Promise.all(promises);

  // Merge results back into main data
  let resultIndex = 0;
  for (let i = 0; i < data.length; i++) {
    if (!data[i].coordinates_fetched || !data[i].ra || !data[i].dec) {
      const processedRecord = allResults.flat().find(r => r.records && r.records.length > 0);
      if (processedRecord && processedRecord.records[0]) {
        Object.assign(data[i], processedRecord.records[0]);
        if (data[i].coordinates_fetched && data[i].ra) {
          totalSuccess++;
        } else {
          totalFailed++;
        }
      }
      resultIndex++;
    }
  }

  // Add IDs (fix for Agent 4 validation)
  data.forEach((record, index) => {
    if (!record.id) {
      record.id = record.target_id || `STAR-${index}`;
    }
  });

  // Final save
  const progress = {
    total: data.length,
    processed: data.length,
    success: totalSuccess,
    failed: totalFailed,
    duration: Date.now() - startTime,
    method: 'parallel-batch'
  };

  saveProgress(data, progress);

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✅ Parallel fetching complete!`);
  console.log(`Duration: ${duration}s`);
  console.log(`Success: ${totalSuccess}`);
  console.log(`Failed: ${totalFailed}`);
  console.log(`Speed: ${(totalSuccess / (duration / 60)).toFixed(0)} records/minute`);
}

// Run if called directly
if (require.main === module) {
  parallelFetch()
    .then(() => {
      console.log('\n🎉 Done!');
      process.exit(0);
    })
    .catch(error => {
      console.error('Error:', error);
      process.exit(1);
    });
}

module.exports = { parallelFetch };
