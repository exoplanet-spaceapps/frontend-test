<role>
你是資深前端／互動視覺工程師，正在使用 Claude Code（可直接讀/寫檔、執行指令、建立 commit）。請主動執行動作，不只給建議。若需要權限就請求；必要時自行建立分支與提交。輸出務必精煉，給「計畫、變更、驗收」等結構化內容，避免冗長思緒。開發請務必遵守 TDD 原則。
</role>

<objective>
將「宇宙視覺化」頁面（視圖 2）無縫整合到現有 React + Vite 前端專案（資料夾：C:\Users\thc1006\Desktop\NASA\frontend-test\frontend），完成三階段互動流程：
1) 待命階段：首頁點「Get Started」→ 進入「Bring Your Own Data」上傳頁，支援 `.csv`、`.dat`。
2) 分析階段：點「下一步」後，顯示動態進度條與狀態更新（AI 分析動畫）。此階段已改為「過渡至視圖 2」的轉場，但仍需在背景完成分數計算與統計。
3) 結果階段（視圖 2）：左側是 3D 宇宙視覺（含攝影機飛行）；右側為 HUD 控制台（顯示候選列表、篩選與摘要）。
</objective>

<must_have_features>

* 檔案總覽與風格分析：自動遞迴掃描 `frontend/`（排除 `node_modules/` 等生成物），建立：

  * `docs/frontend_manifest.json`（每個檔案的路徑、size、hash、type）。
  * `docs/frontend_style_audit.md`（UI/UX/色票/字體/排版/動效慣例、狀態管理做法、路由策略、元件命名慣例、測試與工具鏈），供後續對齊。
  * **不要**把「整個專案原始碼」貼回對話視窗；請讀檔並在 repo 內輸出上述文件（必要時分段落檔），以避免聊天視窗爆量。
* 路由/流程：

  * 進入點（首頁）含「Get Started」→ `/byod` 上傳頁 → 點「下一步」→ 過場動畫 → `/visualizer`（視圖 2）。
  * 偵測是否已使用 React Router；若無則安裝並最小侵入導入。
* 上傳與分析：

  * 上傳 `.csv/.dat` 後，以 Web Worker 或 `setTimeout` 模擬 AI 掃描動畫（進度條＋狀態字串循環），**動畫約 2–3 秒**，結束即路由跳轉至視圖 2。
  * 實作「行星機率分數」計算模組 `src/utils/probability.ts`（以可替換的偽模型，對每個目標產生 0–100% 分數）。
  * 門檻（預設 80%）可在 HUD 調整；顯示「超過門檻的計數」。
* 候選硬編碼（先行可見結果）：

  * 將 `data.json` 中的三個 `tid` 視為已識別候選：`88863718`、`65212867`、`107782586`。
  * 結果面板（HUD）預先列出這三個 ID（可點擊）。
* 視圖 2（宇宙視覺左 + HUD 右）：

  * 左側 3D：優先沿用現有 Three.js / React Three Fiber（R3F）堆疊；若專案未含，優先導入 **React Three Fiber + drei**；次選原生 Three.js。
  * 初始區域動畫：在載入完成後做一次 3 秒總覽飛行，`OrbitControls.target` 與攝影機位置一起平滑補間，飛往三顆候選恆星的座標（以假資料或隨機分佈生成，並與 `tid` 綁定）。
  * 點擊候選 ID 時，再觸發 3 秒攝影機飛行（Lerp/Slerp 或 gsap/tween，如專案已有），讓該恆星置中＋放大；彈出該恆星摘要（`tid`、分數、是否超門檻、原始檔案行數/欄位等）。
* HUD（右側面板，Pro Render 風格）：

  * 模塊：上傳摘要、門檻控制（Slider / Number input）、超門檻計數、候選列表（可點）、目前狀態（待命/分析/完成）、錯誤提示區。
  * 風格對齊：按 `frontend_style_audit.md` 的色票與字體，遵循專案既有 UI 套件（若有）與 spacing/陰影/圓角規則。
* 狀態管理與註解：

  * 優先沿用現有狀態管理（Redux、Zustand、Context 等）；若無，導入 **Zustand** 實作 `useAppStore`（phase、uploadMeta、scores、threshold、candidates、selectedTid 等）。
  * 在控制台與 3D 視圖之間的狀態流，需有清楚註解與 JSDoc（特別是「分析→過場→視圖2」的轉換）。
* 響應式與效能：

  * CSS Grid 建立「左 3D／右 HUD」兩欄版型；小螢幕（< 1024px）改為上下堆疊。
  * 清理動畫與事件監聽，避免 route 切換記憶體外洩；視窗縮放時調整 renderer 尺寸。
* 測試與驗收：

  * 若專案已用 Vitest/RTL，新增基本單元測試（檔案解析、門檻篩選、飛行函數計時/邊界）。
  * E2E（可選）：若已有 Playwright，新增流程測試（上傳→動畫→結果頁出現候選）。
    </must_have_features>

<explicit_actions>
請 **直接動手** 依序執行（必要時請我授權）：

1. 掃描 `frontend/`，輸出 `docs/frontend_manifest.json` 與 `docs/frontend_style_audit.md`，歸納現有 UI/UX 與技術棧。
2. 生成或更新 `CLAUDE.md`：記載本專案常用指令、程式風格、測試/啟動方式、以及「本整合任務」的準則與驗收清單。
3. 新增或修改檔案（建議結構）：

   * `src/pages/Home.tsx`（含「Get Started」）、`src/pages/Byod.tsx`、`src/pages/Visualizer.tsx`
   * `src/components/HUD/*`（`HudPanel.tsx`、`CandidatesList.tsx`、`ThresholdControl.tsx`、`SummaryCard.tsx`）
   * `src/components/Visualizer/*`（`Scene.tsx`、`CameraRig.ts`、`useFlight.ts`）
   * `src/state/useAppStore.ts`（或沿用現有方案）
   * `src/utils/{probability.ts, parseFile.ts, easing.ts}`
   * `src/routes.tsx` 或整合至既有 Router 設定
   * `public/data.json`（若不存在則加入示例）
   * `docs/visualizer_readme.md`（開發說明與維護指引）
4. 以小步提交（每 1–2 個模組/邏輯一次），撰寫具體 commit message。
5. 跑起開發伺服器驗證路由與動畫（若需要，請自動安裝缺件套件）。
   </explicit_actions>

<animation_specs>

* 初始化三點巡航：3 秒，攝影機與 `OrbitControls.target` 同步補間；飛行序列：候選 A → 候選 B → 候選 C（每段 3 秒可連續或中途停留 0.5 秒）。
* 點擊候選 ID：3 秒近距飛行＋置中，顯示細節浮層；ESC 或點空白處關閉。
* 補間可用現有動畫工具；若無，提供自製 `tween()`（時間驅動、requestAnimationFrame、easeInOutCubic）。
  </animation_specs>

<data_logic>

* `parseFile.ts`：解析 `.csv/.dat`，輸出 `{ tid, features }[]`（若缺 `tid` 欄，嘗試從檔名/欄位別名推斷；否則標註為 unknown）。
* `probability.ts`：`scoreForTarget(features): number`（0–100），目前採啟發式（平均/變異/峰值等）；保留 TODO：接入真實模型。
* `threshold`（預設 80，可在 HUD 改），`overThresholdCount` 即時計算。
* 若尚未上傳檔案，也要能以 `public/data.json` 演示（含三個硬編碼候選）。
  </data_logic>

<ui_ux>

* HUD 右欄資訊層級：結果摘要（超門檻數）→ 門檻控制 → 候選清單（可點）→ 當前狀態（待命/分析/完成）→ 訊息/錯誤。
* 風格對齊：依 `frontend_style_audit.md` 的色票/字體/半徑/陰影/動效時序；沿用既有 UI 套件（如有）。
* 無障礙：按鍵可導覽（Tab/Fokus），候選列可 Enter 觸發飛行。
  </ui_ux>

<state_management_and_docs>

* `useAppStore` 內的關鍵狀態：`phase: 'idle' | 'analyzing' | 'done'`、`uploadedFileMeta`、`scoresByTid`、`threshold`、`candidates`（預設含三個硬編碼）、`selectedTid`。
* 將「分析→過場→視圖 2」的轉換放在集中 action，並以 JSDoc 詳述。
* 所有關鍵模組與動畫函式補上區塊註解（為何這樣做、輸入/輸出、副作用）。
  </state_management_and_docs>

<acceptance_criteria>

* 路由：首頁 → BYOD →（動畫過場 2–3 秒）→ 視圖 2；重新整理 URL 不壞。
* 上傳：可選 `.csv/.dat`；無檔時仍能用 `data.json` 演示。
* 視圖 2：左 3D／右 HUD。初始巡航成功；候選清單可點且 3 秒飛行至置中；浮層顯示 `tid` 與分數與是否超門檻。
* 門檻：調整後，超門檻計數即時更新。
* 風格：與現有專案一致（比對 `frontend_style_audit.md`）。
* 效能：無明顯掉幀；路由切換無殘留動畫或記憶體外洩。
* 測試：解析/篩選/飛行計時至少各 1 項單元測試通過。
  </acceptance_criteria>

<constraints_and_notes>

* 盡量沿用現有工具鏈；若需新增依賴，列在 `docs/visualizer_readme.md` 並說明理由與體積影響。
* **不要**在對話中貼出整個專案檔案內容；請以檔案編輯操作＋ repo 內文檔輸出方式工作（避免上下文污染）。
* 若偵測到既有 Three.js/R3F/狀態管理/Router，必須最小改動接入；否則按上述建議新增。
* 使用 Git 檢查點與小步提交；必要可使用 `/rewind` 回退（Claude Code checkpointing 支援）。
  </constraints_and_notes>

<final_output_request>
回報格式請用以下結構：

1. 《Plan》：高層級步驟清單（短），含將建立/修改的檔案名。
2. 《Diffs》：依提交批次，逐檔說明將新增/修改的重點（以實際檔案編輯動作為主，不要大量複製貼上整檔原始碼到對話）。
3. 《Run / Test Notes》：啟動、測試、與人工檢查操作。
4. 《Risks & Next》：已知風險、後續可接 AI 模型處理光變曲線的接口位置。
   完成後，請直接開始執行第 1 步（掃描與審視），並於需要授權時提示我允許所需工具。
   </final_output_request>


