import React from 'react';
import useAppStore from '../../state/useAppStore';

/**
 * SummaryCard Component
 * Displays overall statistics and file information
 */
const SummaryCard = () => {
  const uploadedFile = useAppStore(state => state.uploadedFile);

  const totalCandidates = 11979;
  const totalStars = 1498;
  const modelName = 'XGBoost';
  const modelAccuracy = 0.8;

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
          <p className="text-xs text-white/60 mb-1">Total Candidates</p>
          <p className="text-2xl font-bold text-blue-400">{totalCandidates}</p>
        </div>

        <div className="bg-green-500/10 rounded-md p-3">
          <p className="text-xs text-white/60 mb-1">Total Stars</p>
          <p className="text-2xl font-bold text-green-400">{totalStars}</p>
        </div>

        <div className="bg-purple-500/10 rounded-md p-3">
          <p className="text-xs text-white/60 mb-1">Model</p>
          <p className="text-xl font-bold text-purple-400">{modelName}</p>
        </div>

        <div className="bg-orange-500/10 rounded-md p-3">
          <p className="text-xs text-white/60 mb-1">Model Accuracy</p>
          <p className="text-xl font-bold text-orange-400">{modelAccuracy}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
