# Frontend Style Audit - Exoplanet Visualization Project

**生成時間**: 2025-10-04
**專案路徑**: `C:\Users\thc1006\Desktop\NASA\frontend-test\frontend`
**技術棧**: React 19.1.1 + Vite 7.1.7 + Tailwind CSS 3.3.6

---

## 🎨 設計系統 (Design System)

### 色彩 (Color Palette)

#### 主色調 (Primary Colors)
```css
primary: #000000      /* 黑色 - 主要背景 */
secondary: #1f1925    /* 深紫黑 - 次要背景 */
```

#### 功能色 (Functional Colors)
```css
/* 強調色 (Accent) */
blue-400: #60a5fa     /* 主要 CTA 按鈕 */
blue-500: #3b82f6     /* hover 狀態 */
indigo-400: #818cf8   /* 次要 CTA */
indigo-500: #6366f1   /* hover 狀態 */

/* 狀態色 (Status) */
emerald-500/10: rgba(16, 185, 129, 0.1)   /* 成功背景 */
emerald-400/40: rgba(52, 211, 153, 0.4)   /* 成功邊框 */
emerald-100: #d1fae5                      /* 成功文字 */

red-500/10: rgba(239, 68, 68, 0.1)        /* 錯誤背景 */
red-400/40: rgba(248, 113, 113, 0.4)      /* 錯誤邊框 */
red-100: #fee2e2                          /* 錯誤文字 */

blue-500/10: rgba(59, 130, 246, 0.1)      /* 資訊背景 */
blue-400/30: rgba(96, 165, 250, 0.3)      /* 資訊邊框 */
blue-100: #dbeafe                         /* 資訊文字 */

indigo-500/10: rgba(99, 102, 241, 0.1)    /* 處理中背景 */
indigo-400/30: rgba(129, 140, 248, 0.3)   /* 處理中邊框 */
indigo-100: #e0e7ff                       /* 處理中文字 */
```

#### 透明度與玻璃形態 (Transparency & Glassmorphism)
```css
bg-black/20          /* Hero 背景遮罩 */
bg-black/50          /* DataPortal 卡片背景 */
bg-black/40          /* Code preview 背景 */
border-white/10      /* 細微邊框 */
border-white/40      /* 次要邊框 */
text-white/80        /* 次要文字 */
text-white/90        /* 主要文字 */
backdrop-blur-md     /* 背景模糊效果 */
```

---

## 📐 排版系統 (Typography)

### 字體家族 (Font Family)
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
```

### 字體大小 (Font Sizes)
```css
text-5xl: 3rem       /* 大標題 (Hero H1) */
text-3xl: 1.875rem   /* 中標題 (Section H2) */
text-sm: 0.875rem    /* 小文字 (Meta info) */
text-xs: 0.75rem     /* 超小文字 (Code preview) */
```

### 字體粗細 (Font Weights)
```css
font-bold: 700       /* 標題 */
font-semibold: 600   /* 副標題 */
font-medium: 500     /* 按鈕文字 */
```

### 文字顏色 (Text Colors)
```css
text-white           /* 主要文字 (100%) */
text-white/80        /* 次要文字 (80%) */
text-emerald-200/80  /* 成功訊息次要文字 */
text-emerald-200/70  /* 成功訊息標籤 */
```

---

## 🔘 元件樣式 (Component Styles)

### 按鈕 (Buttons)

#### 主要 CTA (Primary CTA)
```css
className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
```
- 背景：藍色 (#60a5fa)
- Hover：深藍 (#3b82f6)
- 內距：px-4 py-1 (16px 4px)
- 圓角：rounded-md (6px)
- 過渡：duration-200 (200ms)

#### 次要 CTA (Secondary CTA)
```css
className="bg-indigo-400 text-white hover:bg-indigo-500 px-4 py-3 rounded-lg font-semibold transition"
```
- 背景：靛藍 (#818cf8)
- Hover：深靛藍 (#6366f1)
- 內距：px-4 py-3 (16px 12px)
- 圓角：rounded-lg (8px)
- 字重：font-semibold (600)

#### 返回按鈕 (Back Button)
```css
className="rounded-md border border-white/40 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:border-white/70 transition"
```
- 樣式：Ghost button（透明背景 + 邊框）
- 邊框：白色 40% 透明度
- Hover：邊框與文字透明度增加

#### 禁用按鈕 (Disabled Button)
```css
className="bg-white/10 text-white/80 px-4 py-3 rounded-lg font-semibold border border-white/20 cursor-not-allowed"
```
- 背景：白色 10% 透明度
- 邊框：白色 20% 透明度
- 游標：not-allowed

### 卡片 (Cards)

#### 玻璃形態卡片 (Glassmorphism Card)
```css
className="bg-black/50 border border-white/10 rounded-2xl max-w-3xl w-full p-8 backdrop-blur-md space-y-6"
```
- 背景：黑色 50% 透明度
- 邊框：白色 10% 透明度
- 圓角：rounded-2xl (16px)
- 最大寬度：max-w-3xl (768px)
- 內距：p-8 (32px)
- 背景模糊：backdrop-blur-md
- 間距：space-y-6 (24px 垂直間距)

### 狀態提示框 (Status Alerts)

#### 成功 (Success)
```css
className="bg-emerald-500/10 border border-emerald-400/40 text-emerald-100 rounded-lg p-4 space-y-3"
```

#### 錯誤 (Error)
```css
className="bg-red-500/10 border border-red-400/40 text-red-100 rounded-lg p-4"
```

#### 資訊 (Info)
```css
className="bg-blue-500/10 border border-blue-400/30 text-blue-100 rounded-lg p-4"
```

#### 處理中 (Processing)
```css
className="bg-indigo-500/10 border border-indigo-400/30 text-indigo-100 rounded-lg p-4"
```

### Code Preview
```css
className="bg-black/40 text-white/90 text-xs rounded-md p-3 overflow-x-auto whitespace-pre-wrap"
```
- 背景：黑色 40% 透明度
- 文字：白色 90% 透明度
- 字體：text-xs (0.75rem)
- 溢出：可橫向滾動
- 換行：保留空白與換行

---

## 🎬 動畫系統 (Animation System)

### AOS 動畫配置
```javascript
AOS.init({
  duration: 1200,      // 動畫時長 1.2秒
  easing: "ease-in-out"
});
```

### 常用動畫模式
```html
<!-- 淡入向上 -->
data-aos="fade-up"

<!-- 延遲淡入 -->
data-aos="fade-up" data-aos-delay="300"
data-aos="fade-up" data-aos-delay="500"
```

### 延遲階梯 (Delay Ladder)
- 0ms: 主要元素立即出現
- 100ms: 次要元素
- 150ms: 輔助文字
- 200ms: 按鈕組
- 250ms: 狀態提示
- 300-500ms: 標題或重要資訊

### Transition 設定
```css
duration-200         /* 按鈕 hover */
transition           /* 一般過渡效果 */
```

---

## 📱 響應式設計 (Responsive Design)

### 斷點 (Breakpoints)
```css
sm: 640px    /* 小螢幕 */
md: 768px    /* 中等螢幕 */
lg: 1024px   /* 大螢幕 */
```

### 容器設定 (Container)
```javascript
// tailwind.config.js
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',  /* 16px */
    md: '2rem'        /* 32px */
  }
}
```

### Grid 系統
```css
/* Hero 雙欄布局 */
className="grid grid-cols-1 sm:grid-cols-2 gap-4"

/* DataPortal 按鈕組 */
className="grid gap-4 sm:grid-cols-2"

/* Flex 響應式 */
className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
```

---

## 🧩 元件命名慣例 (Component Naming)

### 檔案結構
```
src/components/
├── ComponentName/
│   └── ComponentName.jsx
```

### 命名規則
- **PascalCase** for component names: `Hero.jsx`, `DataPortal.jsx`
- **Folder per component**: Each component in its own folder
- **功能性命名**: 名稱反映功能（Hero, DataPortal, Navbar）

---

## 🛣️ 路由策略 (Routing Strategy)

### 當前實作
```javascript
// App.jsx
const [view, setView] = useState("landing");

// 視圖切換
{view === "landing" ? (
  <Hero onGetStarted={() => setView("data")} />
) : (
  <DataPortal onBack={() => setView("landing")} />
)}
```

**評估**:
- ✅ 簡單直觀
- ❌ 無 URL 同步
- ❌ 無瀏覽器歷史
- ❌ 不支援深層連結
- **建議**: 整合 React Router 以支援視覺化頁面

---

## 🏗️ 狀態管理 (State Management)

### 當前實作
```javascript
// Local state in App.jsx
const [view, setView] = useState("landing");

// Local state in DataPortal.jsx
const [uploadState, setUploadState] = useState({ status: "idle" });
```

**評估**:
- ✅ 輕量級
- ❌ 無全局狀態
- ❌ 難以跨組件共享
- **建議**: 導入 Zustand 進行全局狀態管理

---

## 🧪 測試與工具鏈 (Testing & Toolchain)

### Linting
```javascript
// eslint.config.js
- ESLint 9.36.0
- React Hooks 插件
- React Refresh 插件
```

### Build & Dev
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

### 缺失工具
- ❌ 無測試框架（Vitest/Jest）
- ❌ 無組件測試庫（RTL）
- ❌ 無 E2E 測試（Playwright）

---

## 🎯 視覺化整合建議 (Visualization Integration Recommendations)

### 1. 保持一致的設計語言

#### 色彩對齊
- **HUD 面板**: 沿用 `bg-black/50 + border-white/10 + backdrop-blur-md`
- **按鈕樣式**: 藍色 CTA (`bg-blue-400 hover:bg-blue-500`)
- **狀態提示**: 沿用現有 emerald/red/blue 色系

#### 動畫對齊
- **進場動畫**: AOS fade-up, duration 1200ms
- **過渡效果**: transition duration-200
- **飛行動畫**: 3 秒，ease-in-out

### 2. 元件複用策略

#### 可複用元件
```javascript
// 按鈕組件
<PrimaryCTA>Get Started</PrimaryCTA>
<SecondaryCTA>Upload CSV</SecondaryCTA>
<GhostButton>Back</GhostButton>

// 狀態卡片
<StatusCard type="success">Upload complete</StatusCard>
<StatusCard type="error">Upload failed</StatusCard>

// 玻璃形態容器
<GlassCard>Content</GlassCard>
```

### 3. 響應式 3D 視覺化

#### 布局建議
```css
/* Desktop: 左右分欄 */
@media (min-width: 1024px) {
  display: grid;
  grid-template-columns: 1fr 400px; /* 3D視圖 + HUD */
  gap: 0;
}

/* Mobile: 上下堆疊 */
@media (max-width: 1024px) {
  display: flex;
  flex-direction: column;
  .hud { order: 1; }
  .canvas { order: 2; height: 60vh; }
}
```

### 4. HUD 控制台樣式

```css
/* HUD 容器 */
className="bg-black/60 border-l border-white/10 p-6 backdrop-blur-md overflow-y-auto"

/* 候選列表項 */
className="bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg p-4 cursor-pointer transition duration-200"

/* 門檻控制 */
className="bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white focus:border-blue-400 focus:outline-none"

/* 統計數字 */
className="text-3xl font-bold text-blue-400"
```

---

## 📋 整合檢查清單 (Integration Checklist)

### UI/UX 一致性
- [ ] 沿用主色調（黑色 + 深紫）
- [ ] 使用相同的 CTA 按鈕樣式
- [ ] 保持玻璃形態卡片設計
- [ ] 統一圓角規格（md: 6px, lg: 8px, 2xl: 16px）
- [ ] 統一透明度階梯（10%, 20%, 40%, 50%, 80%, 90%）
- [ ] AOS 動畫時長統一為 1200ms

### 技術一致性
- [ ] 使用 Tailwind CSS utility classes
- [ ] 組件檔案結構一致（資料夾 per 組件）
- [ ] Props 命名遵循 camelCase
- [ ] Event handlers 命名以 `on` 或 `handle` 開頭

### 可及性 (Accessibility)
- [ ] 按鈕具備 focus 狀態
- [ ] 表單輸入具備 label
- [ ] 鍵盤導航支援（Tab/Enter）
- [ ] 適當的語義化 HTML（section, article, nav）

---

## 🚀 後續行動 (Next Actions)

1. **安裝依賴**
   ```bash
   npm install react-router-dom zustand three @react-three/fiber @react-three/drei
   ```

2. **建立路由結構**
   - `/` - Home (Hero)
   - `/byod` - Bring Your Own Data (DataPortal + Next button)
   - `/visualizer` - 3D Visualization + HUD

3. **建立狀態管理**
   ```javascript
   // src/state/useAppStore.js
   import { create } from 'zustand';

   export const useAppStore = create((set) => ({
     phase: 'idle',
     uploadedFile: null,
     scoresByTid: {},
     threshold: 80,
     selectedTid: null,
     // ...
   }));
   ```

4. **建立工具模組**
   - `src/utils/probability.ts` - 分數計算
   - `src/utils/parseFile.ts` - 檔案解析
   - `src/utils/easing.ts` - 動畫緩動函數

---

**總結**: 專案具備良好的設計系統基礎，色彩、排版、動畫均有明確規範。整合視覺化時，優先沿用現有樣式與慣例，確保一致性。重點在於導入路由系統、狀態管理，並以玻璃形態設計風格實作 HUD 控制台。
