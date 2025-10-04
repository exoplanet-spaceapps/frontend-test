import { create } from 'zustand';

/**
 * Global Application State Store
 * Manages exoplanet visualization state across all components
 */
const useAppStore = create((set, get) => ({
  // === Phase Management ===
  /**
   * Current application phase
   * 'idle' - Initial state, no file uploaded
   * 'analyzing' - File uploaded, processing (2-3s transition animation)
   * 'done' - Analysis complete, ready for visualization
   */
  phase: 'idle',

  setPhase: (phase) => set({ phase }),

  // === File Upload ===
  /**
   * Uploaded file metadata
   * @type {{name: string, size: number, type: string, rowCount: number} | null}
   */
  uploadedFile: null,

  setUploadedFile: (file) => set({ uploadedFile: file }),

  // === Exoplanet Scores ===
  /**
   * Probability scores by TID
   * @type {Record<number, number>} - TID → Score (0-100)
   */
  scoresByTid: {},

  setScores: (scores) => set({ scoresByTid: scores }),

  // === Threshold Filtering ===
  /**
   * Score threshold for candidate filtering (0-100)
   * @type {number}
   */
  threshold: 80,

  setThreshold: (threshold) => set({ threshold }),

  /**
   * Get count of candidates above threshold
   * @returns {number}
   */
  getOverThresholdCount: () => {
    const { scoresByTid, threshold } = get();
    return Object.values(scoresByTid).filter((score) => score >= threshold).length;
  },

  /**
   * Get TIDs above threshold
   * @returns {number[]}
   */
  getOverThresholdTids: () => {
    const { scoresByTid, threshold } = get();
    return Object.entries(scoresByTid)
      .filter(([, score]) => score >= threshold)
      .map(([tid]) => parseInt(tid));
  },

  // === Hardcoded Candidates ===
  /**
   * Pre-identified exoplanet candidates (from requirements)
   * @type {number[]}
   */
  candidates: [88863718, 65212867, 107782586],

  // === Selected Star ===
  /**
   * Currently selected TID for camera focus
   * @type {number | null}
   */
  selectedTid: null,

  setSelectedTid: (tid) => set({ selectedTid: tid }),

  // === Parsed Data ===
  /**
   * Parsed file data with features
   * @type {Array<{tid: number|null, features: any[]}>}
   */
  parsedData: [],

  setParsedData: (data) => set({ parsedData: data }),

  // === Actions ===
  /**
   * Reset all state to initial values
   */
  reset: () =>
    set({
      phase: 'idle',
      uploadedFile: null,
      scoresByTid: {},
      threshold: 80,
      selectedTid: null,
      parsedData: [],
    }),

  /**
   * Process uploaded file
   * @param {File} file - Uploaded file
   * @param {Array} parsedData - Parsed data from file
   * @param {Record<number, number>} scores - Calculated scores
   */
  processFile: (file, parsedData, scores) => {
    set({
      phase: 'analyzing',
      uploadedFile: {
        name: file.name,
        size: file.size,
        type: file.type,
        rowCount: parsedData.length,
      },
      parsedData,
      scoresByTid: scores,
    });

    // Simulate 2-3s analysis animation
    setTimeout(() => {
      set({ phase: 'done' });
    }, 2500);
  },
}));

export default useAppStore;
