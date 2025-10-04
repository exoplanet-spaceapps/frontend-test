# Frontend Style Audit

## 專案概覽
- **Framework**: React 19.1.1 + Vite 7.1.7
- **UI Library**: Tailwind CSS 3.3.6
- **3D Graphics**: Three.js 0.180.0 + React Three Fiber 9.3.0 + drei 10.7.6
- **狀態管理**: Zustand 5.0.8
- **路由**: React Router DOM 7.9.3
- **動畫**: AOS 2.3.4 (Animate On Scroll)
- **測試**: Vitest 3.2.4

## UI/UX 設計規範

### 色彩配置
**主要色票**：
- **Primary (黑色系)**：#000000 (背景)
- **Accent Blue**：#3b82f6 (按鈕), #60a5fa (hover)
- **Accent Indigo**：#6366f1 (次要按鈕)
- **Success Green**：#10b981 (成功狀態)
- **Warning Orange**：#f59e0b (警告)
- **Error Red**：#ef4444 (錯誤)
- **Text Primary**：#ffffff (主文字)
- **Text Secondary**：rgba(255,255,255,0.7-0.8) (次要文字)

### 字體規範
- **Primary Font**: 系統預設 (sans-serif)
- **Monospace Font**: font-mono (用於數據顯示)
- **Font Sizes**: text-3xl (30px), text-2xl (24px), text-xl (20px), text-base (16px), text-sm (14px), text-xs (12px)

### 間距系統
- **Container Padding**: px-6 py-8 或 p-4
- **Section Spacing**: space-y-6, space-y-4, space-y-3
- **Grid Gaps**: gap-4, gap-3

### 圓角與陰影
- **Border Radius**: Cards (rounded-2xl), Buttons (rounded-lg), Badges (rounded-full)
- **Shadows**: shadow-2xl, shadow-2xl shadow-blue-500/20

### 透明與模糊效果
- **Glassmorphism**: bg-black/50 + backdrop-blur-md
- **Overlay**: bg-black/60 backdrop-blur-sm

## 動畫與過渡
- **Transition Duration**: transition (150ms)
- **Custom Animations**: animate-fade-in (0.3s), animate-scale-in (0.3s)
- **3D Camera**: 3秒 easeInOutCubic

## 路由策略
- **首頁**: / (<Hero />)
- **資料上傳**: /byod (<DataPortal />)
- **視覺化**: /visualizer (<Visualizer />)
- **Base Path**: /frontend (GitHub Pages)

---
**最後更新**: 2025-10-04
