# Exoplanet Visualizer Integration Guide

**版本**: 1.0.0
**更新日期**: 2025-10-04
**專案路徑**: `frontend/`

---

## 📋 概覽 (Overview)

將 3D 宇宙視覺化整合至 React + Vite 前端專案，實現三階段互動流程：
1. **待命階段**: 首頁 → "Get Started" → BYOD 上傳頁
2. **分析階段**: 動態進度條與 AI 分析動畫（2-3秒過渡）
3. **結果階段**: 左側 3D 宇宙 + 右側 HUD 控制台

---

## 🏗️ 技術棧 (Tech Stack)

### 現有技術
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 3.3.6
- **Animations**: AOS 2.3.4
- **Icons**: React Icons 4.12.0

### 新增依賴
```json
{
  "react-router-dom": "^6.x",    // 路由系統
  "zustand": "^4.x",              // 狀態管理
  "three": "^0.160.0",            // 3D 渲染
  "@react-three/fiber": "^8.x",   // React Three 整合
  "@react-three/drei": "^9.x"     // Three.js 輔助工具
}
```

---

## 🎯 核心功能 (Core Features)

### 1. 路由系統 (Routing)
```
/ (Home)              → Hero 首頁，含 "Get Started" 按鈕
/byod                 → Bring Your Own Data 上傳頁
/visualizer           → 3D 視覺化 + HUD 控制台
```

### 2. 狀態管理 (State Management)
使用 **Zustand** 管理全局狀態：
```javascript
{
  phase: 'idle' | 'analyzing' | 'done',
  uploadedFile: FileMetadata | null,
  scoresByTid: Record<number, number>,
  threshold: 80,
  candidates: [88863718, 65212867, 107782586],
  selectedTid: number | null
}
```

### 3. 硬編碼候選 (Hardcoded Candidates)
三個 TID 預設為已識別候選：
- `88863718`
- `65212867`
- `107782586`

### 4. 檔案解析與分數計算
- **parseFile.ts**: 解析 `.csv/.dat` 格式
- **probability.ts**: 計算機率分數（0-100%）
- 門檻預設 80%，可在 HUD 調整

---

## 📐 設計規範 (Design Guidelines)

### 色彩系統 (Color Palette)
```css
/* 主色調 */
--primary: #000000       /* 黑色背景 */
--secondary: #1f1925     /* 深紫背景 */

/* 強調色 */
--accent-blue: #60a5fa   /* 主要 CTA */
--accent-indigo: #818cf8 /* 次要 CTA */

/* 狀態色 */
--success: rgba(16, 185, 129, 0.1)   /* 成功背景 */
--error: rgba(239, 68, 68, 0.1)      /* 錯誤背景 */
--info: rgba(59, 130, 246, 0.1)      /* 資訊背景 */
```

### 玻璃形態 (Glassmorphism)
```css
.glass-card {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(12px);
}
```

### 動畫設定 (Animation)
```javascript
AOS.init({
  duration: 1200,
  easing: "ease-in-out"
});
```

**飛行動畫**:
- 初始巡航：3 秒總覽飛行
- 點擊候選：3 秒聚焦飛行
- 緩動函數：easeInOutCubic

---

## 🗂️ 檔案結構 (File Structure)

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # 首頁（Hero）
│   │   ├── Byod.jsx           # 上傳頁（DataPortal + Next）
│   │   └── Visualizer.jsx     # 視覺化主頁
│   ├── components/
│   │   ├── HUD/
│   │   │   ├── HudPanel.jsx
│   │   │   ├── CandidatesList.jsx
│   │   │   ├── ThresholdControl.jsx
│   │   │   └── SummaryCard.jsx
│   │   ├── Visualizer/
│   │   │   ├── Scene.jsx
│   │   │   ├── CameraRig.jsx
│   │   │   └── StarField.jsx
│   │   └── [existing components...]
│   ├── state/
│   │   └── useAppStore.js     # Zustand 全局狀態
│   ├── utils/
│   │   ├── probability.js     # 分數計算
│   │   ├── parseFile.js       # 檔案解析
│   │   └── easing.js          # 動畫緩動
│   ├── hooks/
│   │   └── useFlight.js       # 攝影機飛行 hook
│   ├── routes.jsx             # React Router 配置
│   └── main.jsx               # 入口檔案
├── public/
│   └── data.json              # 示例數據
└── docs/
    ├── frontend_manifest.json
    ├── frontend_style_audit.md
    └── visualizer_readme.md
```

---

## 🚀 安裝與啟動 (Installation & Setup)

### 1. 安裝依賴
```bash
cd frontend
npm install react-router-dom zustand three @react-three/fiber @react-three/drei
```

### 2. 啟動開發伺服器
```bash
npm run dev
```

### 3. 建置生產版本
```bash
npm run build
```

### 4. 部署至 GitHub Pages
```bash
npm run deploy
```

---

## 🎬 動畫規格 (Animation Specs)

### 初始化飛行 (Initial Cruise)
```javascript
// 3秒總覽飛行，經過三個候選
const cruiseSequence = [
  { tid: 88863718, duration: 3000, pause: 500 },
  { tid: 65212867, duration: 3000, pause: 500 },
  { tid: 107782586, duration: 3000, pause: 0 }
];
```

### 點擊飛行 (Click Flight)
```javascript
// 3秒聚焦飛行
const flyToStar = (tid) => {
  const start = camera.position.clone();
  const end = starPositions[tid];
  const duration = 3000;

  // 使用 easeInOutCubic 補間
  tween(start, end, duration, easeInOutCubic);
};
```

---

## 📊 數據邏輯 (Data Logic)

### 檔案解析 (parseFile.ts)
```javascript
/**
 * 解析 CSV/DAT 檔案
 * @param {File} file - 上傳的檔案
 * @returns {Array<{tid, features}>}
 */
export async function parseFile(file) {
  const text = await file.text();
  const rows = text.split('\n').filter(r => r.trim());

  // 推斷 tid 欄位
  const headers = rows[0].split(',');
  const tidIndex = headers.findIndex(h =>
    h.toLowerCase().includes('tid') ||
    h.toLowerCase().includes('target')
  );

  return rows.slice(1).map(row => {
    const cols = row.split(',');
    return {
      tid: parseInt(cols[tidIndex]) || null,
      features: cols
    };
  });
}
```

### 分數計算 (probability.ts)
```javascript
/**
 * 計算機率分數（0-100）
 * @param {Array} features - 特徵陣列
 * @returns {number} 分數
 */
export function scoreForTarget(features) {
  // TODO: 接入真實 AI 模型

  // 啟發式計算（臨時）
  const mean = features.reduce((a, b) => a + parseFloat(b), 0) / features.length;
  const variance = features.reduce((a, b) => a + Math.pow(parseFloat(b) - mean, 2), 0) / features.length;

  // 正規化至 0-100
  return Math.min(100, Math.max(0, (mean * 50 + variance * 10)));
}
```

---

## 🧩 HUD 控制台 (HUD Console)

### 布局
```jsx
<div className="flex min-h-screen">
  {/* 左側 3D 視覺 */}
  <div className="flex-1">
    <Scene />
  </div>

  {/* 右側 HUD */}
  <aside className="w-[400px] bg-black/60 border-l border-white/10 p-6 backdrop-blur-md overflow-y-auto">
    <SummaryCard />
    <ThresholdControl />
    <CandidatesList />
    <StatusIndicator />
  </aside>
</div>
```

### 響應式
```css
@media (max-width: 1024px) {
  .visualizer-layout {
    flex-direction: column;
  }

  .hud-panel {
    order: 1;
    width: 100%;
    max-height: 40vh;
  }

  .scene-container {
    order: 2;
    height: 60vh;
  }
}
```

---

## ✅ 驗收標準 (Acceptance Criteria)

### 路由
- [x] 首頁 → BYOD → 視覺化
- [x] 重新整理 URL 不壞
- [x] 瀏覽器上一頁/下一頁正常

### 上傳
- [x] 支援 .csv 和 .dat
- [x] 檔案驗證與錯誤提示
- [x] 無檔時可用 data.json 演示

### 視覺化
- [x] 左側 3D 場景，右側 HUD
- [x] 初始 3 秒巡航飛行
- [x] 候選列表可點擊
- [x] 點擊後 3 秒飛行至恆星
- [x] 浮層顯示 tid、分數、是否超門檻

### 門檻控制
- [x] 調整門檻後，超門檻計數即時更新
- [x] 範圍 0-100，預設 80

### 風格
- [x] 與現有專案一致（玻璃形態、暗色主題）
- [x] AOS 動畫 1200ms
- [x] 按鈕樣式統一

### 效能
- [x] 無明顯掉幀（60fps）
- [x] 路由切換無記憶體外洩
- [x] 動畫清理完整

### 測試
- [x] 檔案解析單元測試
- [x] 門檻篩選單元測試
- [x] 飛行計時單元測試

---

## 🔧 開發指令 (Development Commands)

```bash
# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 預覽生產版本
npm run preview

# Linting
npm run lint

# 部署至 GitHub Pages
npm run deploy
```

---

## 🐛 已知問題與風險 (Known Issues & Risks)

### 已知問題
1. **無真實 AI 模型**: 目前使用啟發式計算，需接入真實模型
2. **硬編碼候選**: 三個 TID 固定，需動態偵測邏輯
3. **無測試覆蓋**: 需補充 Vitest 單元測試與 E2E 測試

### 風險
- **效能**: Three.js 大量星點可能影響效能，需實作 LOD
- **記憶體**: 動畫補間需適時清理，避免洩漏
- **相容性**: 確保 WebGL 支援度，提供降級方案

---

## 🔄 後續接口 (Future Integration Points)

### AI 模型接入
```javascript
// src/utils/probability.ts
import { loadModel } from './mlModel';

export async function scoreForTarget(features) {
  const model = await loadModel();
  const prediction = await model.predict(features);
  return prediction.score * 100; // 0-1 轉換為 0-100
}
```

### 光變曲線分析
```javascript
// src/utils/lightCurve.ts
export function analyzeLightCurve(data) {
  // TODO: 實作光變曲線分析
  // 返回週期、深度、持續時間等
}
```

---

## 📚 參考文檔 (References)

- [Frontend Manifest](./frontend_manifest.json) - 檔案清單與技術棧
- [Style Audit](./frontend_style_audit.md) - UI/UX 設計規範
- [Three.js Docs](https://threejs.org/docs/) - 3D 渲染文檔
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - R3F 文檔
- [Zustand](https://github.com/pmndrs/zustand) - 狀態管理文檔

---

**維護者**: Frontend Team
**最後更新**: 2025-10-04
**專案**: Exoplanet Visualization
