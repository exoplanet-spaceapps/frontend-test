import React from 'react';
import useAppStore from '../../state/useAppStore';

/**
 * ThresholdControl Component
 * Slider to adjust probability score threshold (0-100)
 */
const ThresholdControl = () => {
  const threshold = useAppStore(state => state.threshold);
  const setThreshold = useAppStore(state => state.setThreshold);
  const getOverThresholdCount = useAppStore(state => state.getOverThresholdCount);

  const count = getOverThresholdCount();

  const handleThresholdChange = (e) => {
    setThreshold(Number(e.target.value));
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3 text-blue-400">
        Score Threshold
      </h3>

      <div className="space-y-4">
        {/* Threshold Value Display */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-white/70">Current Threshold</span>
          <span className="text-2xl font-bold text-blue-400">{threshold}</span>
        </div>

        {/* Slider */}
        <div className="relative">
          <input
            type="range"
            min="0"
            max="100"
            value={threshold}
            onChange={handleThresholdChange}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer
                     slider-thumb"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${threshold}%, rgba(255,255,255,0.1) ${threshold}%, rgba(255,255,255,0.1) 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-white/50 mt-1">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>

        {/* Candidates Count */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-md p-3">
          <div className="text-center">
            <p className="text-xs text-white/60 mb-1">Candidates Above Threshold</p>
            <p className="text-3xl font-bold text-blue-400">{count}</p>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => setThreshold(50)}
            className="flex-1 px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition"
          >
            50
          </button>
          <button
            onClick={() => setThreshold(70)}
            className="flex-1 px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition"
          >
            70
          </button>
          <button
            onClick={() => setThreshold(80)}
            className="flex-1 px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition"
          >
            80
          </button>
          <button
            onClick={() => setThreshold(90)}
            className="flex-1 px-2 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition"
          >
            90
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThresholdControl;
