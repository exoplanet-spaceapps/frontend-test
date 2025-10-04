/**
 * Parse uploaded CSV/DAT file
 * @param {File} file - Uploaded file
 * @returns {Promise<Array<{tid: number|null, features: string[]}>>}
 */
export async function parseFile(file) {
  const text = await file.text();
  const rows = text
    .split(/\r?\n/)
    .map(row => row.trim())
    .filter(row => row.length > 0);

  if (rows.length === 0) {
    return [];
  }

  // Parse header to find tid column
  const headers = rows[0].split(',').map(h => h.trim().toLowerCase());
  const tidIndex = headers.findIndex(h =>
    h.includes('tid') ||
    h.includes('target') ||
    h.includes('target_id')
  );

  // Parse data rows
  const dataRows = rows.slice(1);
  return dataRows.map(row => {
    const cols = row.split(',').map(c => c.trim());

    let tid = null;
    if (tidIndex !== -1 && cols[tidIndex]) {
      const parsed = parseInt(cols[tidIndex]);
      if (!isNaN(parsed)) {
        tid = parsed;
      }
    }

    return {
      tid,
      features: cols
    };
  });
}

/**
 * Parse file and extract features for ML model
 * @param {File} file - Uploaded file
 * @returns {Promise<Array<{tid: number|null, features: number[]}>>}
 */
export async function parseFileWithFeatures(file) {
  const parsed = await parseFile(file);

  return parsed.map(item => ({
    tid: item.tid,
    features: item.features
      .map(f => parseFloat(f))
      .filter(f => !isNaN(f))
  }));
}
