import React from 'react';
import useAppStore from '../../state/useAppStore';
import { getSpectralDescription, getTemperatureRange } from '../../utils/spectralClass';

/**
 * StarInfoPanel Component
 * Displays detailed information about selected star
 */
const StarInfoPanel = () => {
  const selectedTid = useAppStore(state => state.selectedTid);
  const setSelectedTid = useAppStore(state => state.setSelectedTid);
  const scoresByTid = useAppStore(state => state.scoresByTid);
  const parsedData = useAppStore(state => state.parsedData);

  if (!selectedTid) return null;

  const score = scoresByTid[selectedTid] || 0;
  const starData = parsedData.find(item => item.tid === selectedTid);

  // Get star from window.currentStarData which has spectral info
  const currentStars = window.currentStarData || [];
  const fullStarData = currentStars.find(s => s.tid === selectedTid);
  const spectralClass = fullStarData?.spectralClass || 'G2V';
  const spectralType = fullStarData?.spectralType || 'G';
  const spectralDesc = getSpectralDescription(spectralType);
  const tempRange = getTemperatureRange(spectralType);

  const handleClose = () => {
    setSelectedTid(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 animate-slide-up pointer-events-auto">
      <div className="bg-gradient-to-br from-[#0a0a0f]/95 via-[#1a1a2e]/95 to-[#16213e]/95 backdrop-blur-xl border-2 border-blue-500/40 rounded-2xl shadow-2xl shadow-blue-500/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-blue-500/30 px-5 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50"></div>
            <h2 className="text-lg font-bold text-blue-300">TID {selectedTid}</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-white/50 hover:text-white transition-colors text-xl leading-none"
            aria-label="Close panel"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Score Badge */}
          <div className="flex justify-center">
            <div className={`
              px-5 py-2.5 rounded-xl text-center backdrop-blur-sm
              ${score >= 90
                ? 'bg-blue-500/20 border border-blue-400/50'
                : 'bg-orange-500/20 border border-orange-400/50'
              }
            `}>
              <p className="text-xs text-white/60 mb-0.5">Probability Score</p>
              <p className={`text-2xl font-bold ${score >= 90 ? 'text-blue-400' : 'text-orange-400'}`}>
                {score.toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2.5 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/60">Catalog ID:</span>
              <span className="font-mono text-sm text-white font-medium">TID{selectedTid}</span>
            </div>

            {/* Spectral Classification */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/60">Spectral Class:</span>
              <div className="text-right">
                <span className="font-mono text-white font-bold">{spectralClass}</span>
                <p className="text-xs text-white/50 mt-0.5">{spectralDesc}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-white/60">Temperature:</span>
              <span className="font-mono text-sm text-white font-medium">
                ~{Math.round((tempRange.min + tempRange.max) / 2).toLocaleString()} K
              </span>
            </div>

            {starData && (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">Period:</span>
                  <span className="font-mono text-sm text-white font-medium">
                    {parseFloat(starData.features[1])?.toFixed(4) || 'N/A'} days
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">Depth:</span>
                  <span className="font-mono text-sm text-white font-medium">
                    {parseFloat(starData.features[2])?.toFixed(6) || 'N/A'}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">Magnitude:</span>
                  <span className="font-mono text-sm text-white font-medium">
                    {parseFloat(starData.features[3])?.toFixed(2) || 'N/A'}
                  </span>
                </div>
              </>
            )}

            <div className="flex justify-between items-center pt-1 border-t border-white/10">
              <span className="text-sm text-white/60">Classification:</span>
              <span className={`text-sm font-semibold ${score >= 90 ? 'text-blue-400' : 'text-orange-400'}`}>
                {score >= 90 ? 'High Confidence' : 'Moderate Confidence'}
              </span>
            </div>
          </div>

          {/* Status Indicator */}
          <div className={`
            rounded-xl p-2.5 text-xs text-center backdrop-blur-sm
            ${score >= 90
              ? 'bg-blue-500/10 text-blue-300 border border-blue-500/30'
              : 'bg-orange-500/10 text-orange-300 border border-orange-500/30'
            }
          `}>
            {score >= 90
              ? 'Strong exoplanet candidate - High probability detection'
              : 'Moderate candidate - Further verification recommended'
            }
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2.5">
            <button
              onClick={handleClose}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm py-2 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm py-2 rounded-lg transition-all shadow-lg shadow-blue-500/20"
              onClick={() => {
                // Future: Export or save star data
                console.log('Export star data:', { tid: selectedTid, score, ...starData });
              }}
            >
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarInfoPanel;
