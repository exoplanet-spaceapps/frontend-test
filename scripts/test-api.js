/**
 * Test script to verify MAST API connectivity and response
 */

const https = require('https');

// Test with a known TIC ID from the dataset
const TEST_TIC_ID = 88863718;

function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log('Response Status:', res.statusCode);
        console.log('Response Headers:', JSON.stringify(res.headers, null, 2));

        try {
          // MAST API sometimes returns malformed JSON with extra data at the end
          // Try to extract the valid JSON part
          const jsonMatch = data.match(/^({.*})\{/);
          const cleanData = jsonMatch ? jsonMatch[1] : data;

          console.log('Response Body (cleaned):', cleanData.substring(0, 500) + '...');

          const jsonData = JSON.parse(cleanData);
          resolve(jsonData);
        } catch (e) {
          console.log('Failed to parse JSON:', e.message);
          resolve({ error: e.message, raw: data });
        }
      });
    });

    req.on('error', (error) => {
      console.error('Request error:', error);
      reject(error);
    });

    if (postData) {
      console.log('POST Data:', JSON.stringify(postData, null, 2));
      req.write(JSON.stringify(postData));
    }

    req.end();
  });
}

async function testTICQuery() {
  console.log(`\nTesting TIC query for ID: ${TEST_TIC_ID}\n`);

  const options = {
    host: 'mast.stsci.edu',
    path: '/api/v0/invoke',
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
            values: [TEST_TIC_ID]
          }
        ]
      }
    })
  };

  try {
    const response = await makeRequest(options, requestData);

    console.log('\n=== PARSED RESPONSE ===');
    console.log(JSON.stringify(response, null, 2));

    if (response.data && response.data.length > 0) {
      console.log('\n✅ SUCCESS! Found coordinates:');
      console.log('RA:', response.data[0].ra);
      console.log('DEC:', response.data[0].dec);
      console.log('Magnitude:', response.data[0].Tmag);
    } else {
      console.log('\n❌ FAILED: No data returned');
    }
  } catch (error) {
    console.error('\n❌ ERROR:', error);
  }
}

testTICQuery();
