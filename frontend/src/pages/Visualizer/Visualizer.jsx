import React from 'react';
import useAppStore from '../../state/useAppStore';
import ThreeScene from '../../components/Visualizer/ThreeScene';
import SummaryCard from '../../components/Visualizer/SummaryCard';
import ThresholdControl from '../../components/Visualizer/ThresholdControl';
import CandidatesList from '../../components/Visualizer/CandidatesList';

const Visualizer = () => {
  const phase = useAppStore(state => state.phase);
  const uploadedFile = useAppStore(state => state.uploadedFile);

  if (phase === 'idle') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">No Data Uploaded</h1>
          <p className="text-white/70 mb-6">Please upload a file first.</p>
          <a href="/byod" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
            Upload Data
          </a>
        </div>
      </div>
    );
  }

  if (phase === 'analyzing') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold mb-2">Analyzing Data...</h1>
          <p className="text-white/70">Processing {uploadedFile?.name}</p>
          <div className="mt-6 w-64 mx-auto bg-white/10 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-500 h-full w-3/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Desktop Layout: Split View */}
      <div className="hidden lg:grid lg:grid-cols-[2fr,1fr] h-screen">
        {/* Left: 3D Visualization */}
        <div className="relative bg-gradient-to-br from-black via-[#1f1925] to-black">
          <ThreeScene />
        </div>

        {/* Right: HUD Control Panel */}
        <div className="bg-black/50 backdrop-blur-md border-l border-white/10 overflow-y-auto">
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold">Control Panel</h2>
            <SummaryCard />
            <ThresholdControl />
            <CandidatesList />
          </div>
        </div>
      </div>

      {/* Mobile Layout: Stacked */}
      <div className="lg:hidden min-h-screen flex flex-col">
        <div className="h-[50vh] bg-gradient-to-br from-black via-[#1f1925] to-black">
          <ThreeScene />
        </div>
        <div className="flex-1 bg-black/50 backdrop-blur-md p-4 space-y-4 overflow-y-auto">
          <h2 className="text-xl font-bold">Control Panel</h2>
          <SummaryCard />
          <ThresholdControl />
          <CandidatesList />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
