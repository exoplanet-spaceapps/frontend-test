# Exoplanet Visualizer - 開發與維護指南

## 概覽
這是一個基於 React + Three.js 的系外行星視覺化系統，使用 AI 分析光變曲線資料，以 3D 天體球形式呈現候選恆星。

## 技術棧
- **Frontend**: React 19.1.1 + Vite 7.1.7
- **3D Rendering**: Three.js 0.180.0 + React Three Fiber
- **State**: Zustand 5.0.8
- **Routing**: React Router DOM 7.9.3
- **Styling**: Tailwind CSS 3.3.6
- **Testing**: Vitest 3.2.4

## 專案結構
```
frontend/
├── src/
│   ├── components/
│   │   ├── DataPortal/          # 資料上傳頁面
│   │   └── Visualizer/           # 3D視覺化元件
│   │       ├── ThreeScene.jsx    # Three.js 場景
│   │       ├── CandidatesList.jsx
│   │       ├── ThresholdControl.jsx
│   │       ├── SummaryCard.jsx
│   │       └── StarInfoPanel.jsx
│   ├── pages/Visualizer/         # 視覺化頁面
│   ├── three/                    # Three.js 核心模組
│   │   ├── starRenderer.js       # 星空渲染引擎
│   │   ├── cameraAnimations.js   # 相機動畫
│   │   └── initialTour.js        # 初始巡航
│   ├── utils/                    # 工具函數
│   │   ├── parseFile.js          # CSV/DAT 解析
│   │   ├── probability.js        # 分數計算
│   │   ├── easing.js             # 緩動函數
│   │   └── spectralClass.js      # 光譜分類
│   └── state/useAppStore.js      # Zustand 全域狀態
```

## 核心功能

### 1. 資料上傳與解析
- **支援格式**: `.csv`, `.dat`
- **解析器**: `utils/parseFile.js`
- **分數計算**: `utils/probability.js`
- **AI 動畫**: 2.5秒過場動畫

### 2. 3D 天體球視覺化
- **星星分布**: Fibonacci 球面演算法（2000顆）
- **光譜分類**: OBAFGKM 溫度色彩
- **相機控制**: OrbitControls (旋轉、縮放)
- **互動**: 點擊星星顯示詳細資訊

### 3. 動畫系統
- **點擊飛行**: 3秒平滑旋轉至目標星星
- **緩動函數**: easeInOutCubic
- **初始巡航**: (可選) 3秒自動巡視候選星

### 4. HUD 控制台
- **候選列表**: 可點擊飛向恆星
- **門檻控制**: 動態調整分數門檻 (預設 80%)
- **摘要卡**: 顯示統計資訊
- **詳細面板**: 顯示光譜類型、溫度、週期等

## 開發指令

### 安裝依賴
```bash
cd frontend
npm install
```

### 開發模式
```bash
npm run dev
# 訪問 http://localhost:5173/frontend/
```

### 測試
```bash
npm run test         # 執行所有測試
npm run test:ui      # 測試 UI 介面
npm run test:coverage # 測試覆蓋率
```

### 建置與部署
```bash
npm run build        # 生產構建
npm run preview      # 預覽生產版本
npm run deploy       # 部署到 GitHub Pages
```

## 狀態管理 (Zustand)

```javascript
useAppStore({
  // Phase 控制
  phase: 'idle' | 'analyzing' | 'done',

  // 上傳資料
  uploadedFile: File | null,
  parsedData: Array<{tid, features}>,

  // 分數系統
  scoresByTid: Object<tid, score>,
  threshold: 80,

  // 候選恆星
  candidates: [88863718, 65212867, 107782586],
  selectedTid: number | null,

  // Actions
  processFile: (file, data, scores) => void,
  setThreshold: (value) => void,
  setSelectedTid: (tid) => void,
  getOverThresholdTids: () => Array<tid>
})
```

## API 參考

### 星空渲染
```javascript
// starRenderer.js
raDec2Cartesian(ra, dec, radius) // RA/DEC → 3D 座標
getStarColor(star)                // OBAFGKM 顏色
calculateStarSize(star)           // 計算星星大小
createStarField(starData)         // 建立 Three.js 星場
```

### 相機動畫
```javascript
// cameraAnimations.js
smoothCameraTransition(camera, controls, newPos, newTarget, duration)
flyCameraToStar(camera, controls, starPosition, duration)
```

### 光譜分類
```javascript
// spectralClass.js
estimateSpectralClass(magnitude)  // 星等 → 光譜類型
getSpectralColor(spectralType)    // 光譜類型 → 顏色
getTemperatureRange(spectralType) // 光譜類型 → 溫度範圍
```

## 測試
- `parseFile.test.js` - CSV/DAT 解析邏輯
- `probability.test.js` - 分數計算演算法
- `easing.test.js` - 緩動函數正確性

## 效能優化

### Three.js 優化
- Pixel Ratio 限制: `Math.min(devicePixelRatio, 2)`
- BufferGeometry + ShaderMaterial
- Fog 遠景淡出: `THREE.FogExp2`

### React 優化
- useEffect cleanup functions
- 事件監聽器正確移除
- 響應式視窗調整

## 已知限制
- 星星座標目前為隨機生成（TODO: 對接真實 RA/DEC 資料）
- 分數計算為啟發式演算法（TODO: 接入真實 AI 模型）
- 初始巡航功能為可選實作

## 擴展指南

### 添加新的光譜類型
編輯 `utils/spectralClass.js`:
```javascript
const colorMap = {
  'O': new THREE.Color(0x9BB0FF),
  // 添加新類型...
}
```

### 自訂動畫時長
修改 `cameraAnimations.js` 中的 `duration` 參數

### 新增 HUD 元件
在 `components/Visualizer/` 創建新元件，並在 `pages/Visualizer/Visualizer.jsx` 引入

## 常見問題

### Q: 星星看不見？
A: 檢查 `starRenderer.js` 中的 `calculateStarSize()` 和 shader 亮度設定

### Q: 相機動畫不流暢？
A: 確認 `easing.js` 的 easeInOutCubic 函數，調整 damping factor

### Q: 上傳檔案後沒反應？
A: 檢查 `parseFile.js` 的 CSV 解析邏輯和 `DataPortal.jsx` 的狀態更新

## 維護檢查清單
- [ ] 定期更新依賴（Three.js, React）
- [ ] 監控 bundle size
- [ ] 測試覆蓋率 >80%
- [ ] 無障礙性檢查 (ARIA, 鍵盤導航)
- [ ] 記憶體洩漏檢測 (Chrome DevTools)

---
**最後更新**: 2025-10-04  
**維護者**: Frontend Team
