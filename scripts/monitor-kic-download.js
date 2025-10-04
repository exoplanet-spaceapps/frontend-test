/**
 * Monitor KIC download progress
 */

const { exec } = require('child_process');

function checkProgress() {
  exec('cd scripts && node -p "try { const f = require(\'fs\'); const s = f.statSync(\'../data/kic.txt.gz\'); (s.size/1024/1024).toFixed(2) + \' MB\' } catch(e) { \'0 MB\' }"', (err, stdout) => {
    if (stdout) {
      const downloaded = parseFloat(stdout);
      const total = 760.51;
      const percent = (downloaded / total * 100).toFixed(1);
      console.log(`\r📥 Downloaded: ${stdout.trim()} / ${total} MB (${percent}%)`);
    }
  });
}

console.log('🔍 Monitoring KIC download progress...\n');
setInterval(checkProgress, 5000);
checkProgress();
