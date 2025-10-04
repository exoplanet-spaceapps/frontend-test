/**
 * Test KIC API Query Format
 * Testing different API endpoints and formats for KIC catalog
 */

const https = require('https');

const MAST_API = {
  host: 'mast.stsci.edu',
  path: '/api/v0/invoke'
};

// Test KIC ID
const TEST_KEPID = 757076;

/**
 * Make HTTPS request
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
          resolve(JSON.parse(cleanData));
        } catch (e) {
          console.error('Parse error:', e.message);
          console.log('Raw data:', data.substring(0, 200));
          resolve({ error: e.message, rawData: data });
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
 * Test Method 1: Mast.Catalogs.Filtered.Kic (original method)
 */
async function testMethod1() {
  console.log('\n🧪 Method 1: Mast.Catalogs.Filtered.Kic');

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
          values: [TEST_KEPID]
        }]
      }
    })
  };

  const result = await makeRequest(options, requestData);
  console.log('Result:', JSON.stringify(result, null, 2).substring(0, 500));
}

/**
 * Test Method 2: Mast.Catalogs.Kic.Cone (cone search)
 */
async function testMethod2() {
  console.log('\n🧪 Method 2: Mast.Catalogs.Kic.Cone');

  const options = {
    host: MAST_API.host,
    path: MAST_API.path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const requestData = {
    request: JSON.stringify({
      service: 'Mast.Catalogs.Kic.Cone',
      format: 'json',
      params: {
        ra: 297.0,
        dec: 46.0,
        radius: 1.0,
        columns: 'kepid,ra,dec,kepmag'
      }
    })
  };

  const result = await makeRequest(options, requestData);
  console.log('Result:', JSON.stringify(result, null, 2).substring(0, 500));
}

/**
 * Test Method 3: Direct service without 'Filtered'
 */
async function testMethod3() {
  console.log('\n🧪 Method 3: Mast.Catalogs.Kic (direct)');

  const options = {
    host: MAST_API.host,
    path: MAST_API.path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const requestData = {
    request: JSON.stringify({
      service: 'Mast.Catalogs.Kic',
      format: 'json',
      params: {
        kepid: TEST_KEPID
      }
    })
  };

  const result = await makeRequest(options, requestData);
  console.log('Result:', JSON.stringify(result, null, 2).substring(0, 500));
}

/**
 * Test Method 4: Using kic10 table
 */
async function testMethod4() {
  console.log('\n🧪 Method 4: Mast.Catalogs.Kic10.Filtered');

  const options = {
    host: MAST_API.host,
    path: MAST_API.path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const requestData = {
    request: JSON.stringify({
      service: 'Mast.Catalogs.Filtered.Kic10',
      format: 'json',
      params: {
        columns: 'kic_kepler_id,kic_ra,kic_dec,kic_kepmag',
        filters: [{
          paramName: 'kic_kepler_id',
          values: [TEST_KEPID]
        }]
      }
    })
  };

  const result = await makeRequest(options, requestData);
  console.log('Result:', JSON.stringify(result, null, 2).substring(0, 500));
}

/**
 * Test Method 5: VizieR alternative
 */
async function testVizieR() {
  console.log('\n🧪 Method 5: VizieR V/133/kic');

  const url = `https://vizier.cds.unistra.fr/viz-bin/votable/-A?-source=V/133/kic&KIC=${TEST_KEPID}`;

  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('VizieR response (first 500 chars):', data.substring(0, 500));
    });
  }).on('error', (e) => {
    console.error('VizieR error:', e.message);
  });
}

/**
 * Run all tests
 */
async function runTests() {
  console.log('🔬 Testing KIC API Query Formats\n');
  console.log(`Test KIC ID: ${TEST_KEPID}\n`);
  console.log('='.repeat(60));

  try {
    await testMethod1();
    await new Promise(resolve => setTimeout(resolve, 500));

    await testMethod2();
    await new Promise(resolve => setTimeout(resolve, 500));

    await testMethod3();
    await new Promise(resolve => setTimeout(resolve, 500));

    await testMethod4();
    await new Promise(resolve => setTimeout(resolve, 500));

    await testVizieR();

    console.log('\n' + '='.repeat(60));
    console.log('\n✅ Tests complete!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

runTests();
