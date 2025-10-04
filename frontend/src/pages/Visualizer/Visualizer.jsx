import React, { useState, useEffect } from 'react';
import useAppStore from '../../state/useAppStore';
import ThreeScene from '../../components/Visualizer/ThreeScene';
import SummaryCard from '../../components/Visualizer/SummaryCard';
import ThresholdControl from '../../components/Visualizer/ThresholdControl';
import CandidatesList from '../../components/Visualizer/CandidatesList';
import StarInfoPanel from '../../components/Visualizer/StarInfoPanel';

const Visualizer = () => {
  const phase = useAppStore(state => state.phase);
  const uploadedFile = useAppStore(state => state.uploadedFile);
  const parsedData = useAppStore(state => state.parsedData);
  const threshold = useAppStore(state => state.threshold);
  const getOverThresholdCount = useAppStore(state => state.getOverThresholdCount);

  // Detect screen size to render only ONE ThreeScene
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Analysis progress state (0-100)
  const [progress, setProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState('Initializing...');

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate analysis progress when in analyzing phase
  useEffect(() => {
    if (phase === 'analyzing') {
      // Reset progress
      setProgress(0);
      setAnalysisStep('Loading light curve data...');

      // Step 1: Loading (0-25%)
      const timer1 = setTimeout(() => {
        setProgress(25);
        setAnalysisStep('Calculating probability scores...');
      }, 500);

      // Step 2: Calculating (25-60%)
      const timer2 = setTimeout(() => {
        setProgress(60);
        setAnalysisStep('Applying threshold filter...');
      }, 1200);

      // Step 3: Filtering (60-85%)
      const timer3 = setTimeout(() => {
        setProgress(85);
        setAnalysisStep('Identifying candidates...');
      }, 1800);

      // Step 4: Complete (85-100%)
      const timer4 = setTimeout(() => {
        setProgress(100);
        setAnalysisStep('Analysis complete!');
      }, 2300);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [phase]);

  // Enhanced analyzing state UI
  if (phase === 'analyzing') {
    return (
      <div data-visualizer className="fixed inset-0 bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500 mx-auto mb-6"></div>
            <h1 className="text-3xl font-bold mb-3">AI Analysis in Progress</h1>
            <p className="text-white/70 text-lg">Processing {uploadedFile?.name}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/80">{analysisStep}</span>
              <span className="text-blue-400 font-mono">{progress}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Statistics Panel */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold mb-4">Analysis Parameters</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-white/60 text-sm mb-1">Total Targets</div>
                <div className="text-2xl font-bold text-blue-400">{parsedData.length || 0}</div>
              </div>

              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-white/60 text-sm mb-1">Threshold</div>
                <div className="text-2xl font-bold text-purple-400">{threshold}%</div>
              </div>
            </div>

            {progress >= 85 && (
              <div className="bg-black/30 rounded-lg p-4 animate-pulse">
                <div className="text-white/60 text-sm mb-1">Candidates Found</div>
                <div className="text-3xl font-bold text-green-400">{getOverThresholdCount()}</div>
              </div>
            )}
          </div>

          {/* Info Text */}
          <div className="mt-6 text-center text-white/50 text-sm">
            <p>AI model calculating planet probability scores (0-100%)</p>
            <p className="mt-1">Filtering targets above {threshold}% confidence threshold</p>
          </div>
        </div>
      </div>
    );
  }

  // Always show visualizer (demo mode if no data uploaded)

  return (
    <div data-visualizer className="fixed inset-0 bg-black text-white overflow-hidden">
      {/* Desktop Layout: Split View */}
      <div className="hidden lg:grid lg:grid-cols-[2fr,1fr] h-full w-full">
        {/* Left: 3D Visualization */}
        <div className="relative h-full w-full bg-gradient-to-br from-black via-[#1f1925] to-black">
          {isDesktop && <ThreeScene />}
        </div>

        {/* Right: HUD Control Panel */}
        <div className="bg-black/50 backdrop-blur-md border-l border-white/10 overflow-y-auto h-full">
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold">Control Panel</h2>
            <SummaryCard />
            <ThresholdControl />
            <CandidatesList />
          </div>
        </div>
      </div>

      {/* Mobile Layout: Stacked */}
      <div className="lg:hidden h-full w-full flex flex-col">
        <div className="h-[50vh] w-full bg-gradient-to-br from-black via-[#1f1925] to-black">
          {!isDesktop && <ThreeScene />}
        </div>
        <div className="flex-1 bg-black/50 backdrop-blur-md p-4 space-y-4 overflow-y-auto">
          <h2 className="text-xl font-bold">Control Panel</h2>
          <SummaryCard />
          <ThresholdControl />
          <CandidatesList />
        </div>
      </div>

      {/* Star Info Panel (Modal) */}
      <StarInfoPanel />
    </div>
  );
};

export default Visualizer;
