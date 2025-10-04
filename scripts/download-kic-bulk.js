/**
 * KIC Bulk Download and Merge
 * Downloads complete KIC catalog from MAST and merges coordinates
 */

const https = require('https');
const fs = require('fs');
const zlib = require('zlib');
const readline = require('readline');
const path = require('path');

const KIC_URL = 'https://archive.stsci.edu/pub/kepler/catalogs/kic.txt.gz';
const KIC_GZ_FILE = path.join(__dirname, '../data/kic.txt.gz');
const KIC_TXT_FILE = path.join(__dirname, '../data/kic.txt');
const STARS_JSON = path.join(__dirname, '../data/stars.json');

/**
 * Step 1: Download KIC catalog
 */
async function downloadKICCatalog() {
  return new Promise((resolve, reject) => {
    console.log('📥 Step 1: Downloading KIC catalog...');
    console.log(`URL: ${KIC_URL}\n`);

    const file = fs.createWriteStream(KIC_GZ_FILE);
    let downloadedBytes = 0;
    let totalBytes = 0;

    https.get(KIC_URL, (response) => {
      totalBytes = parseInt(response.headers['content-length'], 10);
      console.log(`File size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);

      response.on('data', (chunk) => {
        downloadedBytes += chunk.length;
        const progress = ((downloadedBytes / totalBytes) * 100).toFixed(1);
        process.stdout.write(`\rProgress: ${progress}% (${(downloadedBytes / 1024 / 1024).toFixed(2)} MB)`);
      });

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log('\n✅ Download complete!\n');
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(KIC_GZ_FILE, () => {});
      reject(err);
    });
  });
}

/**
 * Step 2: Decompress .gz file
 */
async function decompressKIC() {
  return new Promise((resolve, reject) => {
    console.log('📦 Step 2: Decompressing KIC catalog...\n');

    const input = fs.createReadStream(KIC_GZ_FILE);
    const output = fs.createWriteStream(KIC_TXT_FILE);
    const gunzip = zlib.createGunzip();

    input.pipe(gunzip).pipe(output);

    output.on('finish', () => {
      const stats = fs.statSync(KIC_TXT_FILE);
      console.log(`✅ Decompressed size: ${(stats.size / 1024 / 1024).toFixed(2)} MB\n`);
      resolve();
    });

    output.on('error', reject);
  });
}

/**
 * Step 3: Parse KIC catalog and build coordinate map
 */
async function parseKICCatalog() {
  return new Promise((resolve, reject) => {
    console.log('🔍 Step 3: Parsing KIC catalog...\n');

    const kicMap = new Map();
    const input = fs.createReadStream(KIC_TXT_FILE);
    const rl = readline.createInterface({
      input: input,
      crlfDelay: Infinity
    });

    let lineCount = 0;
    let validCount = 0;

    rl.on('line', (line) => {
      lineCount++;

      // Skip header lines (first 10 lines usually)
      if (lineCount <= 10 || line.startsWith('#') || line.trim() === '') {
        return;
      }

      try {
        // KIC format (fixed width columns)
        // Column positions based on KIC catalog format
        const parts = line.trim().split(/\s+/);

        if (parts.length >= 4) {
          const kepid = parseInt(parts[0]);
          const ra = parseFloat(parts[1]);
          const dec = parseFloat(parts[2]);
          const kepmag = parseFloat(parts[3]);

          if (!isNaN(kepid) && !isNaN(ra) && !isNaN(dec)) {
            kicMap.set(kepid, {
              ra: ra,
              dec: dec,
              magnitude: !isNaN(kepmag) ? kepmag : null
            });
            validCount++;
          }
        }
      } catch (e) {
        // Skip malformed lines
      }

      if (lineCount % 100000 === 0) {
        process.stdout.write(`\rParsed ${(lineCount / 1000000).toFixed(1)}M lines, ${(validCount / 1000).toFixed(0)}K valid entries`);
      }
    });

    rl.on('close', () => {
      console.log(`\n✅ Parsing complete!`);
      console.log(`Total lines: ${lineCount}`);
      console.log(`Valid KIC entries: ${validCount}\n`);
      resolve(kicMap);
    });

    rl.on('error', reject);
  });
}

/**
 * Step 4: Merge KIC coordinates into stars.json
 */
function mergeKICData(kicMap) {
  console.log('🔄 Step 4: Merging KIC coordinates...\n');

  const data = JSON.parse(fs.readFileSync(STARS_JSON, 'utf-8'));

  let updated = 0;
  let notFound = 0;

  data.forEach((record, index) => {
    if (record.catalog === 'KIC' && record.kepid) {
      const coords = kicMap.get(record.kepid);

      if (coords) {
        record.ra = coords.ra;
        record.dec = coords.dec;
        if (coords.magnitude !== null) {
          record.magnitude = coords.magnitude;
        }
        record.coordinates_fetched = true;
        updated++;
      } else {
        notFound++;
      }
    }

    if ((index + 1) % 1000 === 0) {
      process.stdout.write(`\rProcessed ${index + 1}/${data.length} records`);
    }
  });

  console.log(`\n✅ Merge complete!`);
  console.log(`Updated: ${updated} KIC records`);
  console.log(`Not found: ${notFound} KIC records\n`);

  // Save merged data
  console.log('💾 Saving merged data...');
  fs.writeFileSync(STARS_JSON, JSON.stringify(data, null, 2));
  console.log('✅ Saved to:', STARS_JSON);

  return { updated, notFound, total: data.length };
}

/**
 * Step 5: Cleanup temporary files
 */
function cleanup() {
  console.log('\n🧹 Cleaning up temporary files...');

  if (fs.existsSync(KIC_GZ_FILE)) {
    fs.unlinkSync(KIC_GZ_FILE);
    console.log('✅ Deleted:', KIC_GZ_FILE);
  }

  if (fs.existsSync(KIC_TXT_FILE)) {
    fs.unlinkSync(KIC_TXT_FILE);
    console.log('✅ Deleted:', KIC_TXT_FILE);
  }
}

/**
 * Step 6: Final statistics
 */
function showFinalStats() {
  const data = require(STARS_JSON);

  const total = data.length;
  const withCoords = data.filter(r => r.ra !== null && r.dec !== null).length;
  const tic = data.filter(r => r.catalog === 'TIC').length;
  const ticWithCoords = data.filter(r => r.catalog === 'TIC' && r.ra !== null).length;
  const kic = data.filter(r => r.catalog === 'KIC').length;
  const kicWithCoords = data.filter(r => r.catalog === 'KIC' && r.ra !== null).length;

  console.log('\n' + '='.repeat(60));
  console.log('📊 FINAL DATA STATISTICS');
  console.log('='.repeat(60));
  console.log('');
  console.log(`Total records: ${total}`);
  console.log(`Records with coordinates: ${withCoords} (${(withCoords/total*100).toFixed(1)}%)`);
  console.log('');
  console.log('TIC (TESS):');
  console.log(`  Total: ${tic}`);
  console.log(`  With coordinates: ${ticWithCoords} (${(ticWithCoords/tic*100).toFixed(1)}%)`);
  console.log('');
  console.log('KIC (Kepler):');
  console.log(`  Total: ${kic}`);
  console.log(`  With coordinates: ${kicWithCoords} (${(kicWithCoords/kic*100).toFixed(1)}%)`);
  console.log('');
  console.log(`✅ Visualization ready: ${withCoords >= total * 0.95 ? 'YES' : 'PARTIAL'}`);
  console.log('='.repeat(60));
  console.log('');
}

/**
 * Main execution
 */
async function main() {
  const startTime = Date.now();

  console.log('\n🚀 KIC BULK DOWNLOAD AND MERGE\n');
  console.log('='.repeat(60));
  console.log('');

  try {
    // Execute all steps
    await downloadKICCatalog();
    await decompressKIC();
    const kicMap = await parseKICCatalog();
    const result = mergeKICData(kicMap);
    cleanup();
    showFinalStats();

    const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`⏱️  Total time: ${duration} minutes\n`);
    console.log('🎉 KIC data integration complete!\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run
if (require.main === module) {
  main();
}

module.exports = { main };
