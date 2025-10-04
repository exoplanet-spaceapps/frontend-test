const data = require('../data/stars.json');

const total = data.length;
const withCoords = data.filter(r => r.ra !== null && r.dec !== null).length;
const tic = data.filter(r => r.catalog === 'TIC').length;
const ticWithCoords = data.filter(r => r.catalog === 'TIC' && r.ra !== null).length;
const kic = data.filter(r => r.catalog === 'KIC').length;
const kicWithCoords = data.filter(r => r.catalog === 'KIC' && r.ra !== null).length;

console.log('\n📊 FINAL DATA STATISTICS\n');
console.log('Total records:', total);
console.log('Records with coordinates:', withCoords, `(${(withCoords/total*100).toFixed(1)}%)`);
console.log('');
console.log('TIC (TESS):');
console.log('  Total:', tic);
console.log('  With coordinates:', ticWithCoords, `(${(ticWithCoords/tic*100).toFixed(1)}%)`);
console.log('');
console.log('KIC (Kepler):');
console.log('  Total:', kic);
console.log('  With coordinates:', kicWithCoords, `(${(kicWithCoords/kic*100).toFixed(1)}%)`);
console.log('');
console.log('✅ Visualization ready:', withCoords >= total * 0.5 ? 'YES' : 'NO');
console.log('');
