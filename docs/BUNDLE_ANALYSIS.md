# Bundle Analysis Report - NASA Exoplanet Visualizer

## Executive Summary

**Date:** 2025-10-04
**Project:** NASA Exoplanet Frontend
**Framework:** React 19 + Vite 7
**Current Bundle Size:** 789 kB (minified) / 217 kB (gzip)

---

## Current Bundle Breakdown

### JavaScript Assets (Total: 789 kB)

```
┌─────────────────────────────────────────────────────┐
│ index-83N0BdcJ.js - 789 kB (217 kB gzip)           │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Three.js Core              ~500 kB  (63.4%)       │
│  ├─ WebGLRenderer           ~200 kB                │
│  ├─ Geometry/Materials      ~150 kB                │
│  ├─ Math/Utils              ~100 kB                │
│  └─ Other modules            ~50 kB                │
│                                                      │
│  Three.js Addons            ~100 kB  (12.7%)       │
│  ├─ OrbitControls            ~40 kB                │
│  └─ Other controls           ~60 kB                │
│                                                      │
│  @react-three/fiber          ~40 kB   (5.1%)       │
│  @react-three/drei           ~30 kB   (3.8%)       │
│                                                      │
│  React + ReactDOM            ~45 kB   (5.7%)       │
│  React Router DOM            ~15 kB   (1.9%)       │
│  AOS (animations)            ~20 kB   (2.5%)       │
│  Zustand                      ~5 kB   (0.6%)       │
│  Other utilities             ~34 kB   (4.3%)       │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Asset Files

```
Video Assets:
├─ GSFC_20190627_TESS_m13223_L98-59b_Full_Rotation~orig.mp4
│  Size: 56 MB (58,607 kB)
│  Usage: Home + BYOD routes background
│  Impact: CRITICAL - largest asset
│
├─ earth-bg.mp4
│  Size: 1.6 MB (not in current build)
│  Status: Not used
│
└─ wave Gif.gif
   Size: 3.7 MB (3,804 kB)
   Usage: Unknown component
   Impact: HIGH

Image Assets:
├─ moon-surface-hd.png - 617 kB (used in Hero)
├─ unnamed-Photoroom.png - 96 kB
├─ satelite2.jpg - 68 kB
├─ satelite1.jpg - 20 kB
└─ logo.png - 19 kB

CSS:
└─ index-Ct9lsXS5.css - 51 kB (7.6 kB gzip)
   ├─ Tailwind utilities - ~40 kB
   ├─ Custom styles - ~8 kB
   └─ AOS animations - ~3 kB
```

---

## Route Analysis

### Route 1: Home (/)

**Components Loaded:**
- Navbar
- Hero (with moon-surface-hd.png)
- HeroCard
- Rapidscat
- Satelite
- Footer5
- VideoBackground (56 MB)

**Bundle Usage:**
- JavaScript: 789 kB (full bundle)
- Three.js: 670 kB (NOT USED on this route ❌)
- Video: 56 MB
- Images: ~700 kB

**Problem:** Three.js loaded but not used (670 kB wasted)

---

### Route 2: /byod (Data Portal)

**Components Loaded:**
- Navbar
- DataPortal (file upload)
- Footer5
- VideoBackground (56 MB)

**Bundle Usage:**
- JavaScript: 789 kB (full bundle)
- Three.js: 670 kB (NOT USED on this route ❌)
- Video: 56 MB

**Problem:** Three.js loaded but not used (670 kB wasted)

---

### Route 3: /visualizer (3D Visualization)

**Components Loaded:**
- Visualizer
  - ThreeScene (THREE.js required ✅)
  - SummaryCard
  - ThresholdControl
  - CandidatesList
  - StarInfoPanel

**Bundle Usage:**
- JavaScript: 789 kB
- Three.js: 670 kB (USED ✅)
- AOS: 20 kB (NOT USED ❌)
- Video: 0 MB

**Problem:** AOS animations loaded but not used (20 kB wasted)

---

## Critical Findings

### 🔴 Critical Issue #1: Three.js Bundled Globally

**Impact:** HIGH (670 kB wasted on 2/3 routes)

**Current Behavior:**
```jsx
// App.jsx imports Visualizer eagerly
import Visualizer from "./pages/Visualizer/Visualizer.jsx";

// Visualizer.jsx imports ThreeScene
import ThreeScene from '../../components/Visualizer/ThreeScene';

// ThreeScene.jsx imports Three.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
```

**Result:** Three.js bundled in main chunk, loaded on ALL routes

**Solution:** Lazy load Visualizer route
```jsx
const Visualizer = lazy(() => import("./pages/Visualizer/Visualizer.jsx"));
```

**Expected Reduction:** 670 kB from initial bundle

---

### 🔴 Critical Issue #2: 56 MB Video Asset

**Impact:** CRITICAL (blocks page load)

**Current Behavior:**
```jsx
// App.jsx - Lines 6, 37-44, 56-61
import planetVideo from "./assets/GSFC_20190627_TESS_m13223_L98-59b_Full_Rotation~orig.mp4";

<video autoPlay loop muted>
  <source src={planetVideo} type="video/mp4" />
</video>
```

**Result:** 56 MB video loaded immediately on home/BYOD routes

**Problems:**
1. Blocks critical rendering path
2. Wastes bandwidth (even on fast connections)
3. Terrible mobile experience
4. Not optimized format

**Solutions:**

**A) Lazy Load (Quick Win - No Compression)**
```jsx
const [shouldLoad, setShouldLoad] = useState(false);

useEffect(() => {
  setTimeout(() => setShouldLoad(true), 500);
}, []);
```
Saves 56 MB from blocking initial load

**B) Video Compression (Best Long-term)**
```bash
# Reduce to 5-10 MB with minimal quality loss
ffmpeg -i original.mp4 -c:v libx264 -crf 28 -preset slow compressed.mp4
```
Reduces file size by 80-90%

**C) WebM Format**
```bash
# Even smaller, better compression
ffmpeg -i original.mp4 -c:v libvpx-vp9 -b:v 2M planet.webm
```
Reduces to ~5 MB (90% reduction)

---

### 🟡 Medium Issue #3: AOS Library Loading

**Impact:** MEDIUM (20 kB + CSS on all routes)

**Current Behavior:**
```jsx
// App.jsx - Lines 12-13, 24-29
import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({ duration: 1200, easing: "ease-in-out" });
}, []);
```

**Result:** AOS loaded on ALL routes, but only used on Home/BYOD

**Solution:** Dynamic import based on route
```jsx
useEffect(() => {
  if (location.pathname !== '/visualizer') {
    import('aos').then(AOS => AOS.default.init({...}));
  }
}, [location.pathname]);
```

**Expected Reduction:** 20 kB from visualizer route

---

### 🟡 Medium Issue #4: Large GIF (3.7 MB)

**Impact:** MEDIUM (large asset, uncertain usage)

**File:** `wave Gif.gif` - 3.7 MB

**Problem:** GIF format is highly inefficient

**Solution:**
1. Convert GIF to video (90% smaller)
```bash
ffmpeg -i "wave Gif.gif" -c:v libvpx-vp9 -crf 30 wave.webm
```

2. Or optimize GIF
```bash
gifsicle -O3 --lossy=80 "wave Gif.gif" -o wave-optimized.gif
```

**Expected Reduction:** 3.3 MB (to ~400 kB)

---

### 🟢 Low Issue #5: Image Optimization

**Impact:** LOW (potential 600 kB savings)

**Large Images:**
- moon-surface-hd.png: 617 kB

**Solution:** Convert to WebP
```bash
cwebp -q 80 moon-surface-hd.png -o moon-surface-hd.webp
```

With fallback:
```jsx
<picture>
  <source srcSet={moonWebp} type="image/webp" />
  <img src={moonPng} alt="Moon" />
</picture>
```

**Expected Reduction:** ~500 kB (to ~100 kB WebP)

---

## Dependency Analysis

### Production Dependencies (package.json)

```json
{
  "@react-three/drei": "^10.7.6",      // 30 kB - Only used on /visualizer
  "@react-three/fiber": "^9.3.0",      // 40 kB - Only used on /visualizer
  "aos": "^2.3.4",                     // 20 kB - Only used on home/BYOD
  "react": "^19.1.1",                  // 25 kB - Core (needed everywhere)
  "react-dom": "^19.1.1",              // 20 kB - Core (needed everywhere)
  "react-icons": "^4.12.0",            // ~5 kB - Tree-shakeable
  "react-router-dom": "^7.9.3",        // 15 kB - Core (routing)
  "three": "^0.180.0",                 // 600 kB - Only used on /visualizer
  "zustand": "^5.0.8"                  // 5 kB - State management
}
```

### Optimization Opportunities

| Dependency | Size | Current Usage | Optimal Loading | Savings |
|------------|------|---------------|-----------------|---------|
| three | 600 kB | Global | Lazy (/visualizer) | 600 kB |
| @react-three/* | 70 kB | Global | Lazy (/visualizer) | 70 kB |
| aos | 20 kB | Global | Dynamic (home/BYOD) | 20 kB* |

*20 kB saved on visualizer route only

**Total Potential Savings:** 670 kB on home/BYOD routes

---

## Code Splitting Analysis

### Current State: NO CODE SPLITTING

```
All routes load identical 789 kB bundle:
  / (Home)       → 789 kB (670 kB wasted)
  /byod          → 789 kB (670 kB wasted)
  /visualizer    → 789 kB (20 kB wasted)
```

### Proposed State: ROUTE-BASED SPLITTING

```
Optimized chunks:
  Initial (vendor)          → 130 kB (React, Router, utils)
    - react + react-dom      45 kB
    - react-router-dom       15 kB
    - zustand                 5 kB
    - utilities              35 kB
    - app logic              30 kB

  /visualizer lazy chunk    → 650 kB (Three.js)
    - three                 600 kB
    - @react-three/*         70 kB
    - ThreeScene component   30 kB

  /byod lazy chunk          → 50 kB
    - DataPortal component   30 kB
    - parseFile utilities    20 kB

  Home lazy chunk           → 80 kB
    - LandingPage components 60 kB
    - AOS library            20 kB
```

### Load Times by Route (Optimized)

```
/ (Home):
  Initial: 130 kB
  Home chunk: 80 kB
  AOS (dynamic): 20 kB
  Total: 230 kB (was 789 kB) - 71% reduction

/byod:
  Initial: 130 kB
  BYOD chunk: 50 kB
  AOS (dynamic): 20 kB
  Total: 200 kB (was 789 kB) - 75% reduction

/visualizer:
  Initial: 130 kB
  Visualizer chunk: 650 kB
  Total: 780 kB (was 789 kB) - similar, but acceptable
```

---

## Implementation Priority Matrix

### High Priority (Do First)

| Optimization | Impact | Effort | ROI | Days |
|--------------|--------|--------|-----|------|
| Route-based lazy loading | 670 kB | Low | 🔥🔥🔥 | 0.5 |
| Video lazy loading | 56 MB blocking | Low | 🔥🔥🔥 | 0.5 |
| Vite manualChunks config | Better splitting | Low | 🔥🔥 | 0.5 |

**Total:** 1.5 days, 670 kB reduction + 56 MB non-blocking

---

### Medium Priority (Do Second)

| Optimization | Impact | Effort | ROI | Days |
|--------------|--------|--------|-----|------|
| Video compression | 50 MB | Medium | 🔥🔥 | 1 |
| GIF to WebM | 3.3 MB | Low | 🔥 | 0.5 |
| Dynamic AOS import | 20 kB | Low | 🔥 | 0.5 |

**Total:** 2 days, 53 MB reduction

---

### Low Priority (Do Third)

| Optimization | Impact | Effort | ROI | Days |
|--------------|--------|--------|-----|------|
| WebP images | 500 kB | Medium | 🔥 | 1 |
| Component lazy loading | 50 kB | Low | 🔥 | 0.5 |
| Remove console.logs | 5 kB | Low | - | 0.25 |

**Total:** 1.75 days, 555 kB reduction

---

## Testing Recommendations

### 1. Bundle Size Testing

**Before optimization:**
```bash
cd frontend
npm run build
ls -lh dist/assets/*.js

# Expected output:
# index-*.js  789K
```

**After optimization:**
```bash
npm run build
ls -lh dist/assets/*.js

# Expected output:
# index-*.js          130K  (initial bundle)
# three-vendor-*.js   650K  (lazy loaded)
# vendor-*.js          50K
```

---

### 2. Network Testing

**Test on throttled connection:**
```
Chrome DevTools → Network → Slow 3G
```

**Metrics to track:**
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)

**Targets:**
- FCP: < 1.5s on 3G
- LCP: < 2.5s on 3G
- TTI: < 3s on 3G

---

### 3. Route-Specific Testing

**Home Route (/):**
- [ ] Page loads without 789 kB bundle
- [ ] Loading spinner appears briefly
- [ ] Three.js NOT loaded in network tab
- [ ] Video loads after initial render
- [ ] AOS animations work

**BYOD Route (/byod):**
- [ ] Same as home route
- [ ] File upload works
- [ ] Navigation to visualizer works

**Visualizer Route (/visualizer):**
- [ ] Loading spinner appears
- [ ] Three.js chunk loads (650 kB)
- [ ] 3D visualization renders
- [ ] Star selection works
- [ ] No AOS animations loaded

---

## Lighthouse Comparison

### Before Optimization (Estimated)

```
Performance: 62
├─ First Contentful Paint:    3.2s
├─ Largest Contentful Paint:  5.8s
├─ Total Blocking Time:       1,200ms
└─ Speed Index:               4.1s

Bundle Size Analysis:
├─ Total JavaScript:          789 kB
├─ Unused JavaScript:         670 kB (85%)
└─ Main Thread Blocking:      High
```

### After Optimization (Projected)

```
Performance: 92
├─ First Contentful Paint:    0.9s  (↓ 72%)
├─ Largest Contentful Paint:  1.8s  (↓ 69%)
├─ Total Blocking Time:       200ms (↓ 83%)
└─ Speed Index:               1.2s  (↓ 71%)

Bundle Size Analysis:
├─ Total JavaScript:          130 kB (↓ 84%)
├─ Unused JavaScript:         20 kB  (15%)
└─ Main Thread Blocking:      Low
```

---

## Monitoring Setup

### Bundle Size Monitoring

**Install size-limit:**
```bash
npm install --save-dev size-limit @size-limit/preset-app
```

**Create .size-limit.json:**
```json
[
  {
    "name": "Initial Bundle",
    "path": "dist/assets/index-*.js",
    "limit": "150 kB"
  },
  {
    "name": "Three.js Chunk",
    "path": "dist/assets/three-vendor-*.js",
    "limit": "700 kB"
  }
]
```

**Add to package.json:**
```json
{
  "scripts": {
    "size": "size-limit"
  }
}
```

**Run checks:**
```bash
npm run size
```

---

## Conclusion

### Key Findings

1. **Main Problem:** Three.js (670 kB) loaded on all routes but only used on one
2. **Quick Win:** Implement lazy loading → 84% bundle reduction
3. **Critical Asset:** 56 MB video blocking page load
4. **Easy Fix:** All optimizations are low-effort, high-impact

### Implementation Summary

| Phase | Work | Impact | Days |
|-------|------|--------|------|
| 1. Route splitting | Lazy load routes | 670 kB saved | 0.5 |
| 2. Video optimization | Lazy + compress | 50 MB saved | 1.5 |
| 3. Asset optimization | Images, GIF | 4 MB saved | 2 |
| **Total** | - | **84% smaller** | **4** |

### Success Metrics

- ✅ Initial bundle: 789 kB → 130 kB (84% reduction)
- ✅ Time to Interactive: 5s → 1.5s (70% faster)
- ✅ Lighthouse Performance: 62 → 92 (+30 points)
- ✅ Mobile experience: Significantly improved

**Recommended Action:** Implement Phase 1 (route splitting) immediately for maximum impact with minimal effort.
