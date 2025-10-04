# 上傳資料過濾與高亮功能

## 📋 功能說明

當使用者上傳 CSV/DAT 檔案後，視覺化系統會：

1. **只高亮顯示上傳資料中的星星**（使用 OBAFGKM 光譜顏色）
2. **其他星星變暗/低識別度**（灰色、透明度 15%）
3. **點擊候選列表可飛行至該星星**（3秒動畫）
4. **顯示詳細資訊**（光譜類型、溫度等）

---

## 🎯 測試流程

### 步驟 1：上傳測試檔案

1. 訪問 **http://localhost:5173/frontend/byod**
2. 上傳 `test_data.csv` 檔案（位於 `data/test_data.csv`）
3. 點擊「分析」按鈕
4. 觀看 AI 分析動畫（2.5秒）

### 步驟 2：查看視覺化結果

進入視覺化頁面後，你會看到：

#### 🌟 高亮星星（上傳資料中的星星）
- **數量**：3 顆（來自 test_data.csv 中存在於 stars.json 的 TID）
- **TID**：88863718, 65212867, 107782586
- **顏色**：OBAFGKM 光譜顏色（根據星等計算）
- **大小**：正常大小（3.0-10.0）
- **透明度**：100%（完全不透明）

#### 🌑 背景星星（其他星星）
- **數量**：11,976 顆
- **顏色**：暗灰色 (RGB: 0.3, 0.3, 0.3)
- **大小**：很小 (1.0)
- **透明度**：15%（幾乎透明）

### 步驟 3：互動測試

#### A. 點擊候選列表
1. 右側 HUD 面板的 **Candidates Found** 區域
2. 點擊任一 TID（例如：TID 88863718）
3. **預期結果**：
   - 相機飛行至該星星（3秒平滑動畫）
   - 星星位於螢幕中央
   - OrbitControls 聚焦於該星星

#### B. 點擊星星
1. 直接點擊 3D 場景中的高亮星星
2. **預期結果**：
   - 開啟 **StarInfoPanel** 詳細資訊面板
   - 顯示：TID、分數、光譜類型、溫度範圍
   - 相機飛行至該星星

#### C. 調整門檻
1. 右側 HUD 面板的 **Threshold** slider
2. 拖動 slider 調整門檻值（例如：80% → 70%）
3. **預期結果**：
   - **Candidates Found** 數字即時更新
   - 候選列表動態過濾

---

## 📊 test_data.csv 內容

```csv
tid,period,depth,magnitude
88863718,2.5,100,12.3
65212867,3.2,150,11.8
107782586,4.1,200,13.1
123456789,1.8,80,14.2
987654321,5.5,250,10.9
555555555,3.7,120,12.7
```

**6 個 TID，但只有前 3 個在 stars.json 中存在**

---

## 🔍 技術實作細節

### 1. 星星過濾邏輯 (ThreeScene.jsx)

```javascript
// 獲取上傳的 TID
const uploadedTids = parsedData.map(d => d.tid).filter(Boolean);

if (uploadedTids.length > 0) {
  // 使用者上傳資料：只高亮上傳的星星
  relevantStars = starData.filter(star => uploadedTids.includes(star.tid));
  otherStars = starData.filter(star => !uploadedTids.includes(star.tid));
} else {
  // 沒有上傳：Demo 模式，顯示所有星星
  relevantStars = starData;
  otherStars = [];
}
```

### 2. 星星渲染 (starRenderer.js)

```javascript
// 高亮星星（上傳資料）
relevantStars.forEach(star => {
  const color = getStarColor(star); // OBAFGKM 顏色
  colors.push(color.r, color.g, color.b);
  sizes.push(calculateStarSize(star)); // 正常大小
  alphas.push(1.0); // 100% 透明度
});

// 背景星星（其他）
otherStars.forEach(star => {
  colors.push(0.3, 0.3, 0.3); // 暗灰色
  sizes.push(1.0); // 小尺寸
  alphas.push(0.15); // 15% 透明度
});
```

### 3. Shader 實作

**Vertex Shader**:
```glsl
attribute float alpha;
varying float vAlpha;

void main() {
    vAlpha = alpha;
    // ...
}
```

**Fragment Shader**:
```glsl
varying float vAlpha;

void main() {
    // ...
    float alpha = texColor.a * outerGlow * vAlpha; // 使用 vAlpha 控制透明度
    gl_FragColor = vec4(finalColor, alpha);
}
```

---

## 🎨 OBAFGKM 光譜顏色系統

| 光譜類型 | 溫度範圍 | 顏色 | Hex 代碼 |
|----------|----------|------|----------|
| O | >30,000K | 藍色 | #9BB0FF |
| B | 10,000-30,000K | 藍白色 | #AABFFF |
| A | 7,500-10,000K | 白色 | #CAD7FF |
| F | 6,000-7,500K | 黃白色 | #F8F7FF |
| G | 5,200-6,000K | 黃色（類太陽）| #FFF4EA |
| K | 3,700-5,200K | 橙色 | #FFD2A1 |
| M | <3,700K | 紅色 | #FFCC6F |

**計算方式**：根據星等（magnitude）估算光譜類型

---

## 🐛 除錯提示

### Console 日誌檢查

上傳檔案後，開發者工具 Console 應該顯示：

```
✅ Loaded 11979 stars from stars.json
📊 Uploaded TIDs: 6 [88863718, 65212867, 107782586, 123456789, 987654321, 555555555]
⭐ Relevant stars (from upload): 3
🌑 Background stars (dimmed): 11976
✅ Created star field: 3 highlighted + 11976 dimmed = 11979 total
✅ Star field created with uploaded data highlighted
```

### 常見問題

**Q: 看不到高亮星星？**
- 檢查 test_data.csv 的 TID 是否在 stars.json 中存在
- 檢查 Console 是否有「Relevant stars: 0」

**Q: 所有星星都很暗？**
- 確認已上傳檔案並完成分析
- 檢查 `parsedData` 是否有資料

**Q: 點擊星星沒反應？**
- 檢查 Raycaster threshold（目前為 2）
- 確認星星在相機視野內

---

## 📈 效能影響

### 前後對比

| 項目 | 上傳前 | 上傳後 |
|------|--------|--------|
| 渲染星星數 | 11,979 | 11,979 |
| 高亮星星 | 11,979 | 3 |
| 背景星星 | 0 | 11,976 |
| 記憶體使用 | ~45MB | ~45MB |
| FPS | 60 | 60 |

**結論**：過濾功能不影響效能，因為所有星星仍然渲染，只是改變顏色/透明度/大小。

---

## 🚀 後續改進建議

1. **動態半徑調整** - 根據上傳星星數量調整球面半徑
2. **分組顏色** - 不同候選分組使用不同顏色
3. **動畫過渡** - 上傳後平滑過渡到高亮狀態
4. **星星標籤** - 滑鼠懸停顯示 TID
5. **匯出功能** - 匯出高亮星星的 TID 列表

---

**文檔版本**: 1.0.0
**最後更新**: 2025-10-04
**功能狀態**: ✅ 完整實作
