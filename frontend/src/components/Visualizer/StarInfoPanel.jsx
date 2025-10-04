import React, { useMemo, useState } from 'react';
import useAppStore from '../../state/useAppStore';
import { getSpectralDescription, getTemperatureRange } from '../../utils/spectralClass';

// Define tabs for different star property categories (similar to PlanetDialog)
const TABS = [
  {
    id: 'transit',
    label: '🔭 Transit & Orbital',
    fields: [
      { key: 'period', label: 'Orbital Period [days]', precision: 4, fromFeatures: 1 },
      { key: 'depth', label: 'Transit Depth', precision: 6, fromFeatures: 2 },
      { key: 'duration', label: 'Transit Duration [hours]', precision: 3 }
    ]
  },
  {
    id: 'stellar',
    label: '⭐ Stellar Properties',
    fields: [
      { key: 'spectralClass', label: 'Spectral Class', isSpectral: true },
      { key: 'magnitude', label: 'Magnitude', precision: 3, fromFeatures: 3 },
      { key: 'ra', label: 'Right Ascension [deg]', precision: 6 },
      { key: 'dec', label: 'Declination [deg]', precision: 6 }
    ]
  },
  {
    id: 'catalog',
    label: '📊 Catalog & Detection',
    fields: [
      { key: 'catalog', label: 'Catalog' },
      { key: 'source', label: 'Source' },
      { key: 'toi', label: 'TOI Number', precision: 2 },
      { key: 'score', label: 'AI Probability Score [%]', precision: 1, isScore: true }
    ]
  }
];

const formatNumeric = (value, precision = 2) => {
  if (value === undefined || value === null || value === '') {
    return '—';
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return value;
  }

  const formatter = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: precision,
    minimumFractionDigits: 0
  });

  return formatter.format(parsed);
};

const spectralInfo = (spectralType) => {
  const colors = {
    'O': '#8ab4ff',
    'B': '#9fc2ff',
    'A': '#ffffff',
    'F': '#fff4c2',
    'G': '#ffd860',
    'K': '#ffb070',
    'M': '#ff6b6b'
  };

  const type = spectralType?.[0]?.toUpperCase() || 'G';
  return {
    klass: spectralType || 'G2V',
    type: type,
    name: getSpectralDescription(type),
    color: colors[type] || '#ffd860'
  };
};

const formatValue = (field, starData, fullStarData, score) => {
  // Handle spectral class with color swatch
  if (field.isSpectral) {
    const info = spectralInfo(fullStarData?.spectralType);
    return (
      <span className="inline-flex items-center gap-2">
        <span
          className="inline-block h-3 w-3 rounded-sm border border-white/30"
          style={{ backgroundColor: info.color }}
          aria-label={`Spectral color for class ${info.klass}`}
        />
        <span className="font-medium">{info.klass}</span>
        <span className="text-xs text-white/50">({info.name})</span>
      </span>
    );
  }

  // Handle AI score
  if (field.isScore) {
    return formatNumeric(score, field.precision);
  }

  // Handle features array data
  if (field.fromFeatures && starData?.features) {
    const value = parseFloat(starData.features[field.fromFeatures]);
    return formatNumeric(value, field.precision);
  }

  // Handle direct star data from stars.json
  const allStars = window.allStarData || [];
  const starFromJson = allStars.find(s => s.tid === starData?.tid);

  if (starFromJson && starFromJson[field.key] !== undefined) {
    return formatNumeric(starFromJson[field.key], field.precision);
  }

  // Handle other fields
  return formatNumeric(fullStarData?.[field.key] || starData?.[field.key], field.precision);
};

const StarInfoPanel = () => {
  const selectedTid = useAppStore(state => state.selectedTid);
  const setSelectedTid = useAppStore(state => state.setSelectedTid);
  const scoresByTid = useAppStore(state => state.scoresByTid);
  const parsedData = useAppStore(state => state.parsedData);

  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const currentTab = useMemo(
    () => TABS.find(tab => tab.id === activeTab) ?? TABS[0],
    [activeTab]
  );

  if (!selectedTid) return null;

  const score = scoresByTid[selectedTid] || 0;
  const starData = parsedData.find(item => item.tid === selectedTid);

  // Get star from window data
  const currentStars = window.currentStarData || [];
  const allStars = window.allStarData || [];
  const fullStarData = currentStars.find(s => s.tid === selectedTid);
  const starFromJson = allStars.find(s => s.tid === selectedTid);

  const starName = starFromJson?.target_id || `TID ${selectedTid}`;
  const candidateLabel = score >= 90 ? 'HIGH CONFIDENCE' : 'MODERATE';
  const catalogInfo = starFromJson?.catalog || 'TIC';

  const handleClose = () => {
    setSelectedTid(null);
  };

  return (
    <article className="fixed right-6 top-24 z-50 w-full max-w-md rounded-3xl border border-blue-500/40 bg-gradient-to-br from-[#0a0a0f]/95 via-[#1a1a2e]/95 to-[#16213e]/95 p-6 text-white shadow-2xl shadow-blue-500/30 backdrop-blur-xl animate-slide-up">
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white/70 transition hover:bg-white/20 hover:text-white"
        aria-label="Close dialog"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-widest ${
            score >= 90
              ? 'border-blue-400/50 bg-blue-500/20 text-blue-300'
              : 'border-orange-400/50 bg-orange-500/20 text-orange-300'
          }`}>
            {candidateLabel}
          </span>
          {starFromJson?.source && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {starFromJson.source}
            </span>
          )}
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            {catalogInfo} {selectedTid}
          </p>
          <h3 className="text-2xl font-semibold">{starName}</h3>
          {starFromJson?.kepid && (
            <p className="text-sm text-white/60">Kepler ID: {starFromJson.kepid}</p>
          )}
        </div>
      </header>

      {/* Probability Score Badge */}
      <div className="mt-4 flex justify-center">
        <div className={`px-5 py-2.5 rounded-xl text-center backdrop-blur-sm ${
          score >= 90
            ? 'bg-blue-500/20 border border-blue-400/50'
            : 'bg-orange-500/20 border border-orange-400/50'
        }`}>
          <p className="text-xs text-white/60 mb-0.5">AI Probability Score</p>
          <p className={`text-2xl font-bold ${score >= 90 ? 'text-blue-400' : 'text-orange-400'}`}>
            {score.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-5 flex flex-wrap gap-2">
        {TABS.map(tab => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-3 py-2 text-sm transition ${
                isActive
                  ? 'border-blue-400/70 bg-blue-500/20 text-white shadow-sm'
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Data Fields */}
      <dl className="mt-6 grid grid-cols-1 gap-4">
        {currentTab.fields.map(field => (
          <div
            key={field.key}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner"
          >
            <dt className="text-xs uppercase tracking-wider text-white/60">
              {field.label}
            </dt>
            <dd className="mt-2 text-lg font-semibold">
              {formatValue(field, starData, fullStarData, score)}
            </dd>
          </div>
        ))}
      </dl>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-2.5">
        <button
          onClick={handleClose}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm py-2 rounded-lg transition-colors"
        >
          Close
        </button>
        <button
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm py-2 rounded-lg transition-all shadow-lg shadow-blue-500/20"
          onClick={() => {
            console.log('Export star data:', {
              tid: selectedTid,
              score,
              ...starData,
              ...starFromJson
            });
          }}
        >
          Export Data
        </button>
      </div>
    </article>
  );
};

export default StarInfoPanel;
