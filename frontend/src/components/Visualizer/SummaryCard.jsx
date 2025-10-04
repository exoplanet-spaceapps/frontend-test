import React from 'react';
import useAppStore from '../../state/useAppStore';

/**
 * SummaryCard Component
 * Displays overall statistics and file information
 */
const SummaryCard = () => {
  const uploadedFile = useAppStore(state => state.uploadedFile);
  const scoresByTid = useAppStore(state => state.scoresByTid);
  const threshold = useAppStore(state => state.threshold);
  const getOverThresholdCount = useAppStore(state => state.getOverThresholdCount);

  const totalStars = Object.keys(scoresByTid).length;
  const overThreshold = getOverThresholdCount();

  // Calculate score statistics
  const scores = Object.values(scoresByTid);
  const avgScore = scores.length > 0
    ? scores.reduce((a, b) => a + b, 0) / scores.length
    : 0;
  const maxScore = scores.length > 0 ? Math.max(...scores) : 0;
  const minScore = scores.length > 0 ? Math.min(...scores) : 0;

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3 text-blue-400">
        Analysis Summary
      </h3>

      {/* File Information */}
      {uploadedFile && (
        <div className="mb-4 pb-4 border-b border-white/10">
          <p className="text-xs text-white/60 mb-2">File</p>
          <p className="text-sm font-mono truncate" title={uploadedFile.name}>
            {uploadedFile.name}
          </p>
          <p className="text-xs text-white/50 mt-1">
            {uploadedFile.rowCount} rows • {(uploadedFile.size / 1024).toFixed(1)} KB
          </p>
        </div>
      )}

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-blue-500/10 rounded-md p-3">
          <p className="text-xs text-white/60 mb-1">Total Stars</p>
          <p className="text-2xl font-bold text-blue-400">{totalStars}</p>
        </div>

        <div className="bg-green-500/10 rounded-md p-3">
          <p className="text-xs text-white/60 mb-1">Above {threshold}</p>
          <p className="text-2xl font-bold text-green-400">{overThreshold}</p>
        </div>

        <div className="bg-purple-500/10 rounded-md p-3">
          <p className="text-xs text-white/60 mb-1">Avg Score</p>
          <p className="text-xl font-bold text-purple-400">{avgScore.toFixed(1)}</p>
        </div>

        <div className="bg-orange-500/10 rounded-md p-3">
          <p className="text-xs text-white/60 mb-1">Max Score</p>
          <p className="text-xl font-bold text-orange-400">{maxScore.toFixed(1)}</p>
        </div>
      </div>

      {/* Score Distribution Indicator */}
      <div className="mt-4">
        <p className="text-xs text-white/60 mb-2">Score Range</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/50">{minScore.toFixed(0)}</span>
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500"
              style={{ width: `${(maxScore / 100) * 100}%` }}
            />
          </div>
          <span className="text-xs text-white/50">{maxScore.toFixed(0)}</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
