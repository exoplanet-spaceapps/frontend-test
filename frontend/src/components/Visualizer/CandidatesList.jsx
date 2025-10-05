import React from 'react';
import useAppStore from '../../state/useAppStore';

/**
 * CandidatesList Component
 * Displays list of exoplanet candidates with scores
 */
const CandidatesList = () => {
  const candidates = useAppStore(state => state.candidates);
  const scoresByTid = useAppStore(state => state.scoresByTid);
  const threshold = useAppStore(state => state.threshold);
  const selectedTid = useAppStore(state => state.selectedTid);
  const setSelectedTid = useAppStore(state => state.setSelectedTid);
  const getOverThresholdTids = useAppStore(state => state.getOverThresholdTids);

  const overThresholdTids = getOverThresholdTids();

  const handleCandidateClick = (tid) => {
    // Only trigger camera fly animation, don't open panel
    // Panel will open when user clicks the star in 3D view
    const event = new CustomEvent('flyToStar', { detail: { tid } });
    window.dispatchEvent(event);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3 text-blue-400">
        Exoplanet Candidates
      </h3>

      {/* Hardcoded Candidates Section */}
      <div className="mb-4 pb-4 border-b border-white/10">
        <p className="text-sm text-white/60 mb-2">Known Candidates</p>
        <div className="mb-3 flex items-center gap-2 text-[0.7rem] text-white/50">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-300" />
          </span>
          <span className="text-white/70">Click a candidate to fly to its star</span>
        </div>
        <div className="space-y-2">
          {candidates.map(tid => (
            <button
              type="button"
              key={tid}
              onClick={() => handleCandidateClick(tid)}
              className={`
                w-full rounded-lg border px-3 py-3 text-left transition
                ${selectedTid === tid
                  ? 'border-blue-400 bg-blue-500/30 shadow-[0_8px_25px_rgba(59,130,246,0.25)]'
                  : 'border-transparent bg-white/5 hover:border-blue-400/60 hover:bg-blue-500/20'
                }
              `}
            >
              <div className="flex items-start gap-3">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-200" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-white/90">TID {tid}</span>
                  </div>
                  <p className="mt-1 text-[0.68rem] text-white/55">Tap to jump the camera to this planet's star.</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detected Candidates Section */}
      <div>

        {overThresholdTids.length === 0 ? (
          <p className="text-xs text-white/40"></p>
        ) : (
          <div className="max-h-48 overflow-y-auto space-y-2">
            {overThresholdTids.slice(0, 10).map(tid => (
              <div
                key={tid}
                onClick={() => handleCandidateClick(tid)}
                className={`
                  p-2 rounded-md cursor-pointer transition
                  ${selectedTid === tid
                    ? 'bg-blue-500/30 border border-blue-400'
                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                  }
                `}
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">TID {tid}</span>
                  <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">
                    {scoresByTid[tid]?.toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
            {overThresholdTids.length > 10 && (
              <p className="text-xs text-white/40 text-center pt-2">
                + {overThresholdTids.length - 10} more
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidatesList;
