# 三階段系外行星視覺化工作流程

## 📋 完整實作總結

本文檔說明系外行星候選視覺化系統的完整三階段互動流程。

---

## 🎯 三階段工作流程

### 階段 1：待命階段（Data Upload）

**路由**: `/byod` (Bring Your Own Data)
**組件**: `DataPortal.jsx`

**功能**：
- 支援 `.csv` 和 `.dat` 檔案上傳
- 拖放上傳介面
- 檔案驗證與預覽
- 自動解析光變曲線資料

**使用者操作**：
1. 點擊上傳區域或拖放檔案
2. 系統驗證檔案格式
3. 顯示檔案資訊（名稱、大小、行數）
4. 點擊「下一步」按鈕

---

### 階段 2：AI 分析階段（Analysis Phase）

**路由**: `/visualizer` (phase = 'analyzing')
**組件**: `Visualizer.jsx`
**持續時間**: 2.5 秒

**分析步驟**（自動顯示）：
1. **0-25%**: Loading light curve data...（載入光變曲線資料）
2. **25-60%**: Calculating probability scores...（計算機率分數）
3. **60-85%**: Applying threshold filter...（套用門檻篩選）
4. **85-100%**: Identifying candidates...（識別候選對象）

**顯示資訊**：
- 動態進度條（漸層藍紫色）
- 分析步驟文字
- 統計面板：
  - 總目標數量（Total Targets）
  - 可信度門檻（Threshold，預設 80%）
  - 候選數量（Candidates Found，85% 時顯示）

**技術實作**：
```javascript
// useAppStore.js - processFile()
set({ phase: 'analyzing', uploadedFile, parsedData, scoresByTid });

setTimeout(() => {
  set({ phase: 'done' });
}, 2500);
```

**分數計算邏輯**：
- 使用 `probability.js` 的 `scoreForTarget()` 函數
- 分數範圍：0-100%
- 門檻篩選：預設 80%
- 超門檻候選自動識別

---

### 階段 3：宇宙視覺化（Visualization Phase）

**路由**: `/visualizer` (phase = 'done')
**組件**: `Visualizer.jsx` + `ThreeScene.jsx`

#### 3.1 視覺化布局

**桌面版（≥1024px）**：
```
┌─────────────────┬──────────────┐
│                 │              │
│   3D 天體球     │   HUD 控制台  │
│   (2/3)         │   (1/3)      │
│                 │              │
└─────────────────┴──────────────┘
```

**手機版（<1024px）**：
```
┌─────────────────┐
│   3D 天體球      │
│   (50vh)        │
├─────────────────┤
│   HUD 控制台     │
│   (滾動)        │
└─────────────────┘
```

#### 3.2 3D 天體球（左側）

**資料來源**: `/data/stars.json`（真實 RA/DEC 座標）

**視覺特性**：
- Fibonacci 球面分布
- OBAFGKM 光譜分類顏色系統：
  - O: 藍色 (#9BB0FF) - 最熱 (>30,000K)
  - B: 藍白 (#AABFFF)
  - A: 白色 (#CAD7FF)
  - F: 黃白 (#F8F7FF)
  - G: 黃色 (#FFF4EA) - 類太陽
  - K: 橙色 (#FFD2A1)
  - M: 紅色 (#FFCC6F) - 最冷 (<3,700K)
- ShaderMaterial 自訂渲染
- AdditiveBlending 發光效果

**相機控制**：
- OrbitControls（旋轉、縮放）
- 初始位置：(0, 0, 300)
- 縮放範圍：150-500
- 阻尼效果（dampingFactor: 0.05）

#### 3.3 HUD 控制台（右側）

**包含組件**：

1. **SummaryCard** - 統計摘要
   - 總目標數量
   - 超門檻候選數量
   - 門檻值顯示

2. **ThresholdControl** - 門檻控制
   - 滑桿調整（0-100%）
   - 即時更新候選數量

3. **CandidatesList** - 候選列表
   - 硬編碼候選：
     - TID 88863718
     - TID 65212867
     - TID 107782586
   - 顯示分數和光譜類型
   - 可點擊項目

4. **StarInfoPanel** - 詳細資訊面板（Modal）
   - TID 編號
   - 機率分數
   - 光譜類型
   - 溫度範圍
   - 週期、深度、持續時間

#### 3.4 互動功能

##### 功能 A：初始巡航動畫（可選）
- 載入後自動巡視三顆候選星
- 每顆停留 3 秒
- 使用 `initialTour.js` 實作

##### 功能 B：候選列表點擊
1. 使用者點擊 CandidatesList 中的項目
2. 觸發 `flyToStar` 自訂事件
3. 相機飛行至該星星（3秒動畫）
4. 使用 `smoothCameraTransition()`

**技術實作**：
```javascript
// CandidatesList.jsx
const handleClick = (tid) => {
  setSelectedTid(tid);
  window.dispatchEvent(new CustomEvent('flyToStar', { detail: { tid } }));
};

// ThreeScene.jsx
window.addEventListener('flyToStar', handleFlyToStar);
```

##### 功能 C：星星點擊
1. Raycaster 偵測點擊
2. 找到對應的 star 資料
3. 設定 `selectedTid`
4. 相機飛行至星星
5. 顯示 StarInfoPanel

**技術實作**：
```javascript
raycaster.setFromCamera(mouseRef.current, camera);
const intersects = raycaster.intersectObject(starFieldRef.current);

if (intersects.length > 0) {
  const starData = window.currentStarData[intersects[0].index];
  setSelectedTid(starData.tid);
  // 飛行動畫...
}
```

---

## 🔧 狀態管理架構

### Zustand Store (`useAppStore.js`)

```javascript
{
  // Phase 管理
  phase: 'idle' | 'analyzing' | 'done',

  // 檔案資料
  uploadedFile: { name, size, type, rowCount },
  parsedData: Array<{ tid, features }>,

  // 分數系統
  scoresByTid: Record<tid, score>,
  threshold: 80,

  // 候選對象
  candidates: [88863718, 65212867, 107782586],
  selectedTid: number | null,

  // Actions
  processFile(file, data, scores),
  setThreshold(value),
  setSelectedTid(tid),
  getOverThresholdCount(),
  getOverThresholdTids()
}
```

---

## 🎨 設計風格

### 色彩系統
- 主色：藍色 (#3b82f6, #60a5fa)
- 次色：紫色 (#9333ea)
- 背景：黑色 (#000000)
- 漸層：`from-blue-500 to-purple-500`

### Glassmorphism 效果
- `bg-black/50` - 半透明背景
- `backdrop-blur-md` - 毛玻璃模糊
- `border border-white/10` - 半透明邊框

### 動畫效果
- 進度條：`transition-all duration-500 ease-out`
- 候選數字：`animate-pulse`
- Loading：`animate-spin`
- 相機飛行：easeInOutCubic 緩動（3秒）

---

## 📊 資料流程圖

```
使用者上傳檔案
        ↓
DataPortal 解析 CSV/DAT
        ↓
計算每個 TID 的分數（0-100%）
        ↓
processFile() → phase='analyzing'
        ↓
顯示 AI 分析動畫（2.5秒）
  - 載入資料
  - 計算分數
  - 套用門檻
  - 識別候選
        ↓
phase='done' → 顯示視覺化
        ↓
ThreeScene 載入 stars.json
        ↓
使用 RA/DEC 創建 3D 星場
        ↓
使用者互動
  - 點擊候選 → 相機飛行
  - 點擊星星 → 顯示詳細資訊
  - 調整門檻 → 更新候選數量
```

---

## 🚀 使用流程範例

### 完整使用者旅程：

1. **進入首頁** → `/`
2. **進入上傳頁** → `/byod`
3. **上傳檔案** → 拖放 `light_curves.csv`
4. **點擊分析** → 觸發 AI 分析動畫
5. **等待 2.5 秒** → 觀看進度 0% → 100%
6. **自動跳轉** → `/visualizer` 視覺化頁面
7. **查看統計** → 右側 HUD 顯示：
   - 總目標：150
   - 門檻：80%
   - 候選：3 顆
8. **點擊候選** → TID 88863718
9. **相機飛行** → 3秒平滑動畫至星星
10. **查看詳細** → StarInfoPanel 顯示光譜、溫度等
11. **調整門檻** → 拖動 slider 至 70%
12. **更新候選** → 候選數量增加至 8 顆

---

## 🔍 技術棧總覽

| 技術 | 版本 | 用途 |
|------|------|------|
| React | 19.1.1 | UI 框架 |
| Vite | 7.1.7 | 建置工具 + HMR |
| Three.js | 0.180.0 | 3D 渲染 |
| Zustand | 5.0.8 | 狀態管理 |
| React Router | 7.9.3 | 路由 |
| Tailwind CSS | 3.3.6 | 樣式 |
| Vitest | 3.2.4 | 測試 |

---

## 📁 核心檔案結構

```
frontend/
├── src/
│   ├── components/
│   │   ├── DataPortal/
│   │   │   └── DataPortal.jsx          # 階段 1：檔案上傳
│   │   └── Visualizer/
│   │       ├── ThreeScene.jsx          # 3D 天體球
│   │       ├── CandidatesList.jsx      # 候選列表
│   │       ├── ThresholdControl.jsx    # 門檻控制
│   │       ├── SummaryCard.jsx         # 統計卡片
│   │       └── StarInfoPanel.jsx       # 詳細資訊
│   ├── pages/
│   │   └── Visualizer/
│   │       └── Visualizer.jsx          # 階段 2+3：分析+視覺化
│   ├── three/
│   │   ├── starRenderer.js             # 星場渲染引擎
│   │   ├── cameraAnimations.js         # 相機動畫
│   │   └── initialTour.js              # 初始巡航
│   ├── utils/
│   │   ├── parseFile.js                # CSV/DAT 解析
│   │   ├── probability.js              # 分數計算
│   │   ├── spectralClass.js            # OBAFGKM 分類
│   │   └── easing.js                   # 緩動函數
│   └── state/
│       └── useAppStore.js              # Zustand Store
└── public/
    └── data/
        └── stars.json                  # 真實星星資料
```

---

## ✅ 完成檢查清單

### 階段 1：待命階段
- [x] 支援 CSV 檔案上傳
- [x] 支援 DAT 檔案上傳
- [x] 拖放上傳介面
- [x] 檔案驗證
- [x] 資料解析

### 階段 2：AI 分析階段
- [x] 動態進度條（0-100%）
- [x] 分析步驟顯示
- [x] 統計面板（目標、門檻、候選）
- [x] 2.5秒過場動畫
- [x] 自動跳轉至視覺化

### 階段 3：宇宙視覺化
- [x] 3D 天體球（左側）
- [x] HUD 控制台（右側）
- [x] 真實 RA/DEC 座標
- [x] OBAFGKM 光譜顏色
- [x] 硬編碼候選（88863718, 65212867, 107782586）
- [x] 門檻控制（Slider）
- [x] 候選列表（可點擊）
- [x] 相機飛行動畫（3秒）
- [x] 星星點擊偵測
- [x] 詳細資訊面板
- [x] 響應式設計（桌面/手機）

### 程式碼品質
- [x] 清晰的註解
- [x] 狀態管理邏輯清楚
- [x] Component 模組化
- [x] 效能優化（單一 ThreeScene 實例）

---

## 🎯 核心需求對照

| 需求 | 實作位置 | 狀態 |
|------|---------|------|
| 上傳 CSV/DAT | `DataPortal.jsx` | ✅ |
| AI 分析動畫 | `Visualizer.jsx` (phase='analyzing') | ✅ |
| 計算機率分數 | `probability.js` | ✅ |
| 設定門檻 | `ThresholdControl.jsx` | ✅ |
| 篩選計數 | `useAppStore.getOverThresholdCount()` | ✅ |
| 3D 宇宙視覺化 | `ThreeScene.jsx` | ✅ |
| HUD 面板 | `Visualizer.jsx` | ✅ |
| 硬編碼候選 | `useAppStore.candidates` | ✅ |
| 區域動畫（飛行） | `cameraAnimations.js` | ✅ |
| 點擊候選 | `CandidatesList.jsx` | ✅ |
| 點擊星星 | `ThreeScene.jsx` (Raycaster) | ✅ |
| 詳細資訊 | `StarInfoPanel.jsx` | ✅ |

---

## 📝 後續改進建議

1. **初始巡航功能** - 載入後自動巡視候選星（`initialTour.js`）
2. **E2E 測試** - Playwright 測試完整流程
3. **AI 模型整合** - 替換 heuristic 分數計算
4. **真實 TIC 資料** - 對接天文資料庫 API
5. **無障礙性** - ARIA 標籤、鍵盤導航
6. **Code Splitting** - 優化打包大小

---

**文檔版本**: 1.0.0
**最後更新**: 2025-10-04
**專案狀態**: ✅ 完整實作，可進行部署
