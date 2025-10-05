import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../state/useAppStore";
import { parseFile } from "../../utils/parseFile";
import { scoreForTarget } from "../../utils/probability";

const SAMPLE_FILE_NAME = "sample-data.csv";
const SAMPLE_ROW_COUNT = 11979;

const SAMPLE_ANCHOR_ENTRIES = [
  { tid: 88863718, period: "1.9316462", depth: "1286", magnitude: "9.42344", snr: "47.20" },
  { tid: 65212867, period: "6.9989206", depth: "2840", magnitude: "8.87759", snr: "52.10" },
  { tid: 107782586, period: "1.9600277", depth: "1707.6273", magnitude: "8.43310", snr: "44.85" },
  { tid: 231663901, period: "1.4303699", depth: "18960.7123", magnitude: "12.40690", snr: "38.62" },
  { tid: 114018671, period: "2.4704981", depth: "250", magnitude: "8.23880", snr: "29.40" },
  { tid: 341420329, period: "5.2341008", depth: "20796.9416", magnitude: "10.63480", snr: "58.47" },
];

const buildSampleDataset = () => {
  const parsedData = SAMPLE_ANCHOR_ENTRIES.map(entry => ({
    tid: entry.tid,
    features: [
      String(entry.tid),
      entry.period,
      entry.depth,
      entry.magnitude,
      entry.snr,
    ],
  }));

  const fillerCount = Math.max(SAMPLE_ROW_COUNT - parsedData.length, 0);

  // Generate synthetic filler rows so the demo mirrors a full 11,979-row upload
  for (let i = 0; i < fillerCount; i += 1) {
    const base = SAMPLE_ANCHOR_ENTRIES[i % SAMPLE_ANCHOR_ENTRIES.length];
    const period = (parseFloat(base.period) + (i % 47) * 0.0137).toFixed(5);
    const depth = (parseFloat(base.depth) * (1 + (i % 23) * 0.0005)).toFixed(4);
    const magnitude = (parseFloat(base.magnitude) + (i % 29) * 0.002).toFixed(3);
    const snr = (parseFloat(base.snr) + (i % 31) * 0.15).toFixed(2);

    parsedData.push({
      tid: null,
      features: [
        `SIM-${String(i + 1).padStart(5, "0")}`,
        period,
        depth,
        magnitude,
        snr,
      ],
    });
  }

  const scores = {};
  parsedData.forEach(item => {
    if (item.tid) {
      scores[item.tid] = scoreForTarget(item.features);
    }
  });

  const preview = parsedData
    .slice(0, 5)
    .map(d => `TID: ${d.tid || 'N/A'}, Features: ${d.features.slice(0, 3).join(', ')}...`)
    .join('\n');

  const file = {
    name: SAMPLE_FILE_NAME,
    size: SAMPLE_ROW_COUNT * 64,
    type: "text/csv",
  };

  return {
    file,
    parsedData,
    scores,
    preview,
  };
};

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

  const handleSampleData = () => {
    const dataset = buildSampleDataset();

    setUploadState({
      status: "reading",
      fileType: "csv",
      fileName: dataset.file.name,
    });

    setTimeout(() => {
      setUploadState({
        status: "uploading",
        fileType: "csv",
        fileName: dataset.file.name,
      });

      setTimeout(() => {
        setUploadState({
          status: "success",
          fileType: "csv",
          fileName: dataset.file.name,
          rowCount: dataset.parsedData.length,
          preview: dataset.preview,
        });

        processFile(dataset.file, dataset.parsedData, dataset.scores);
      }, 350);
    }, 250);
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
            onClick={handleSampleData}
            className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-3 rounded-lg font-semibold transition"
          >
            Try Sample Data
          </button>
          <button
            onClick={() => handleUploadClick(csvInputRef)}
            className="bg-white/10 text-white/80 hover:bg-white/20 hover:text-white px-4 py-3 rounded-lg font-semibold border border-white/20 transition"
          >
            Upload CSV
          </button>
          <button
            onClick={() => handleUploadClick(datInputRef)}
            className="bg-white/10 text-white/80 hover:bg-white/20 hover:text-white px-4 py-3 rounded-lg font-semibold border border-white/20 transition"
          >
            Upload .dat
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
