/**
 * Coordinate Fetcher for NASA Exoplanet Dataset
 * Queries MAST API to fetch RA/DEC coordinates for TIC and KIC objects
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// File paths
const INPUT_JSON = path.join(__dirname, '../data/initial_dataset.json');
const OUTPUT_JSON = path.join(__dirname, '../data/stars.json');
const PROGRESS_FILE = path.join(__dirname, '../data/fetch_progress.json');

// MAST API configuration
const MAST_API = {
  host: 'mast.stsci.edu',
  ticPath: '/api/v0.1/Download/file',
  catalogPath: '/api/v0/invoke'
};

// Rate limiting
const DELAY_MS = 200; // 200ms between requests to avoid overwhelming API
const BATCH_SIZE = 50; // Process in batches

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
          // MAST API sometimes returns malformed JSON with extra data at the end
          // Try to extract the valid JSON part
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
 * Query TIC catalog for RA/DEC using MAST API
 */
async function queryTIC(ticId) {
  const options = {
    host: MAST_API.host,
    path: MAST_API.catalogPath,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  // MAST API format - needs 'request' as string parameter
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

    if (response.data && response.data.length > 0) {
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
 * Query KIC catalog for RA/DEC using MAST API
 */
async function queryKIC(kicId) {
  const options = {
    host: MAST_API.host,
    path: MAST_API.catalogPath,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  // MAST API format - needs 'request' as string parameter
  const requestData = {
    request: JSON.stringify({
      service: 'Mast.Catalogs.Filtered.Kic',
      format: 'json',
      params: {
        columns: 'kepid,ra,dec,kepmag',
        filters: [
          {
            paramName: 'kepid',
            values: [kicId]
          }
        ]
      }
    })
  };

  try {
    const response = await makeRequest(options, requestData);

    if (response.data && response.data.length > 0) {
      const star = response.data[0];
      return {
        ra: star.ra,
        dec: star.dec,
        magnitude: star.kepmag
      };
    }
  } catch (error) {
    console.error(`Error querying KIC ${kicId}:`, error.message);
  }

  return null;
}

/**
 * Delay helper
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetch coordinates for all stars
 */
async function fetchCoordinates(startIndex = 0) {
  console.log('Loading dataset...');
  const data = JSON.parse(fs.readFileSync(INPUT_JSON, 'utf-8'));

  console.log(`Total records: ${data.length}`);
  console.log(`Starting from index: ${startIndex}`);

  let progress = {
    total: data.length,
    processed: startIndex,
    success: 0,
    failed: 0,
    ticSuccess: 0,
    kicSuccess: 0
  };

  // Load previous progress if exists
  if (fs.existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  }

  for (let i = startIndex; i < data.length; i++) {
    const record = data[i];

    // Skip if already fetched
    if (record.coordinates_fetched) {
      progress.processed = i + 1;
      continue;
    }

    let coords = null;

    if (record.catalog === 'TIC' && record.tid) {
      coords = await queryTIC(record.tid);
      if (coords) progress.ticSuccess++;
    } else if (record.catalog === 'KIC' && record.kepid) {
      coords = await queryKIC(record.kepid);
      if (coords) progress.kicSuccess++;
    }

    if (coords) {
      record.ra = coords.ra;
      record.dec = coords.dec;
      record.magnitude = coords.magnitude;
      record.coordinates_fetched = true;
      progress.success++;
    } else {
      progress.failed++;
    }

    progress.processed = i + 1;

    // Log progress every 50 records
    if ((i + 1) % 50 === 0) {
      console.log(`Progress: ${i + 1}/${data.length} | Success: ${progress.success} | Failed: ${progress.failed}`);

      // Save progress
      fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
      fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2));
    }

    // Rate limiting
    await delay(DELAY_MS);
  }

  // Final save
  console.log('\nFetching complete!');
  console.log(`Total processed: ${progress.processed}`);
  console.log(`Success: ${progress.success} (TIC: ${progress.ticSuccess}, KIC: ${progress.kicSuccess})`);
  console.log(`Failed: ${progress.failed}`);

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

  return progress;
}

// Run if called directly
if (require.main === module) {
  const startIndex = process.argv[2] ? parseInt(process.argv[2]) : 0;

  fetchCoordinates(startIndex)
    .then(progress => {
      console.log('\nDone!');
      process.exit(0);
    })
    .catch(error => {
      console.error('Error:', error);
      process.exit(1);
    });
}

module.exports = { fetchCoordinates, queryTIC, queryKIC };
