import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../state/useAppStore";
import { parseFile } from "../../utils/parseFile";
import { scoreForTarget } from "../../utils/probability";

const DataPortal = () => {
  const navigate = useNavigate();
  const processFile = useAppStore(state => state.processFile);
  const phase = useAppStore(state => state.phase);
  const csvInputRef = useRef(null);
  const datInputRef = useRef(null);
  const [uploadState, setUploadState] = useState({ status: "idle" });

  // Auto-navigate to visualizer when analysis is done
  useEffect(() => {
    if (phase === 'done') {
      navigate('/visualizer');
    }
  }, [phase, navigate]);

  const handleUploadClick = (ref) => {
    if (!ref.current) {
      return;
    }

    ref.current.value = "";
    ref.current.click();
  };

  const handleFileChange = (event, fileType) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const lowerName = file.name.toLowerCase();

    if (fileType === "csv") {
      if (file.type !== "text/csv" && !lowerName.endsWith(".csv")) {
        setUploadState({
          status: "error",
          message: "Please choose a .csv file.",
        });
        return;
      }
    } else if (!lowerName.endsWith(".dat")) {
      setUploadState({
        status: "error",
        message: "Please choose a .dat file.",
      });
      return;
    }

    setUploadState({
      status: "reading",
      fileType,
      fileName: file.name,
    });

    const reader = new FileReader();

    reader.onerror = () => {
      setUploadState({
        status: "error",
        message: "We could not read that file. Please try again.",
      });
    };

    reader.onload = async () => {
      setUploadState({
        status: "uploading",
        fileType,
        fileName: file.name,
      });

      try {
        // Parse file and calculate scores
        const parsedData = await parseFile(file);
        const scores = {};

        parsedData.forEach(item => {
          if (item.tid) {
            scores[item.tid] = scoreForTarget(item.features);
          }
        });

        const rows = parsedData.length;
        const preview = parsedData
          .slice(0, 5)
          .map(d => `TID: ${d.tid || 'N/A'}, Features: ${d.features.slice(0, 3).join(', ')}...`)
          .join('\n');

        setUploadState({
          status: "success",
          fileType,
          fileName: file.name,
          rowCount: rows,
          preview,
        });

        // Store in Zustand (triggers 2.5s analyzing phase)
        processFile(file, parsedData, scores);
      } catch (error) {
        setUploadState({
          status: "error",
          message: "Failed to process file. Please try again.",
        });
      }
    };

    reader.readAsText(file);
  };

  return (
    <section className="h-[700px] flex items-center justify-center px-6 py-24 text-white relative">
      <input
        ref={csvInputRef}
        type="file"
        accept=".csv,text/csv"
        onChange={(event) => handleFileChange(event, "csv")}
        className="sr-only"
      />
      <input
        ref={datInputRef}
        type="file"
        accept=".dat,text/plain"
        onChange={(event) => handleFileChange(event, "dat")}
        className="sr-only"
      />
      <div className="bg-black/50 border border-white/10 rounded-2xl max-w-3xl w-full p-8 backdrop-blur-md space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-semibold" data-aos="fade-up">
            Bring Your Own Data
          </h2>
          <button
            onClick={() => navigate('/')}
            className="rounded-md border border-white/40 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:border-white/70 transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Back to Overview
          </button>
        </div>
        <p className="text-white/80 max-w-2xl" data-aos="fade-up" data-aos-delay="150">
          Upload a CSV or .dat file from your own observations to explore orbital patterns and transit signals.
        </p>
        <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={() => handleUploadClick(csvInputRef)}
            className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-3 rounded-lg font-semibold transition"
          >
            Upload CSV
          </button>
          <button
            onClick={() => handleUploadClick(datInputRef)}
            className="bg-indigo-400 text-white hover:bg-indigo-500 px-4 py-3 rounded-lg font-semibold transition"
          >
            Upload .dat
          </button>
          <button
            disabled
            className="bg-white/10 text-white/80 px-4 py-3 rounded-lg font-semibold border border-white/20 cursor-not-allowed"
          >
            Try Sample Data (Coming Soon)
          </button>
        </div>
        {uploadState.status === "reading" && (
          <div
            className="bg-blue-500/10 border border-blue-400/30 text-blue-100 rounded-lg p-4"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Reading your file...
          </div>
        )}
        {uploadState.status === "uploading" && (
          <div
            className="bg-indigo-500/10 border border-indigo-400/30 text-indigo-100 rounded-lg p-4"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Simulating a backend upload for your {uploadState.fileType?.toUpperCase()} file...
          </div>
        )}
        {uploadState.status === "error" && (
          <div
            className="bg-red-500/10 border border-red-400/40 text-red-100 rounded-lg p-4"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {uploadState.message}
          </div>
        )}
        {uploadState.status === "success" && phase !== 'analyzing' && (
          <div
            className="bg-emerald-500/10 border border-emerald-400/40 text-emerald-100 rounded-lg p-4 space-y-3"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="font-semibold">Loaded {uploadState.fileName}</p>
              <span className="text-sm text-emerald-200/80">
                {uploadState.rowCount} data rows detected
              </span>
            </div>
            <p className="text-sm text-emerald-200/70">
              {uploadState.fileType?.toUpperCase()} file processed successfully. Scores calculated.
            </p>
            <div>
              <p className="text-sm text-emerald-200/70 mb-2">
                Preview (first rows):
              </p>
              <pre className="bg-black/40 text-white/90 text-xs rounded-md p-3 overflow-x-auto whitespace-pre-wrap">
                {uploadState.preview || "No preview available."}
              </pre>
            </div>
          </div>
        )}
        {phase === 'analyzing' && (
          <div
            className="bg-blue-500/10 border border-blue-400/40 text-blue-100 rounded-lg p-6 space-y-4"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="flex items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">AI Analysis in Progress</h3>
                <p className="text-sm text-blue-200/80">
                  Analyzing light curve patterns and calculating exoplanet probabilities...
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-blue-300/70">
                <span>Processing data points</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-blue-900/30 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full animate-pulse" style={{width: '75%'}}></div>
              </div>
            </div>

            <div className="text-xs text-blue-300/60 space-y-1">
              <p>Parsed {uploadState.rowCount} rows</p>
              <p>Extracted features from light curves</p>
              <p className="animate-pulse">→ Computing probability scores...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DataPortal;
