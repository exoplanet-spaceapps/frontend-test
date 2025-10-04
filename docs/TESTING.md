# Testing Instructions for Three.js Visualization

## Prerequisites

1. **Node.js and npm** installed (for development server)
2. **Modern web browser** with WebGL support
3. **Star data** in `data/stars.json`

## Quick Start

### Option 1: Using NPM (Recommended)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:8080
```

### Option 2: Using Python

```bash
# Python 3
python -m http.server 8080

# Open browser to http://localhost:8080
```

### Option 3: Using any HTTP server

```bash
# Using http-server (npx)
npx http-server -p 8080

# Using live-server
npx live-server --port=8080
```

## Verification Checklist

### ✅ Visual Checks

- [ ] **Star Field Renders**
  - Stars appear as colored particles
  - Blue stars visible (TESS catalog)
  - Yellow stars visible (Kepler catalog)
  - Stars distributed in 3D space

- [ ] **Lighting & Atmosphere**
  - Scene has dark blue/black background
  - Stars have glow effect
  - Depth perception visible
  - Fog effect subtle

- [ ] **Loading Experience**
  - Loading screen appears initially
  - Loading message displays
  - Loading screen fades out after data loads
  - Welcome message appears after loading

### ✅ Interaction Tests

- [ ] **Mouse Controls**
  - Left-click + drag rotates view smoothly
  - Scroll wheel zooms in/out
  - Camera limits work (min/max distance)
  - Damping effect makes movement smooth

- [ ] **Star Selection**
  - Clicking near a star selects it
  - Info panel appears on right side
  - Selected star highlights (white + larger)
  - Info panel shows correct data (RA, DEC, etc.)
  - Clicking elsewhere deselects star

- [ ] **Keyboard Shortcuts**
  - **1**: Front view works
  - **2**: Top view works
  - **3**: Side view works
  - **4**: Isometric view works
  - **F**: FPS counter toggles
  - **H**: Help panel toggles
  - **ESC**: Closes info panel

### ✅ Data Validation

Open browser console (F12) and verify:

- [ ] **Loading Messages**
  ```
  🚀 Initializing Exoplanet Universe Visualization...
  📡 Fetching star data from data/stars.json...
  ✅ Loaded [N] raw records
  ✅ Valid stars: [N]
  ```

- [ ] **Statistics Display**
  ```
  📊 Data Statistics:
     Total stars: [N]
     With period: [N] ([%])
     Catalogs: { TIC: [N], KIC: [N] }
     RA range: [min]° to [max]°
     DEC range: [min]° to [max]°
  ```

- [ ] **No Errors**
  - No red error messages
  - No failed requests
  - No WebGL errors

### ✅ Performance Tests

- [ ] **FPS Counter**
  - Press F to show FPS
  - FPS should be 50-60 on modern hardware
  - Lower FPS acceptable on older devices

- [ ] **Smooth Interaction**
  - Camera rotation is smooth
  - Zoom is responsive
  - No lag when selecting stars
  - Scene renders without stuttering

### ✅ Responsive Design

- [ ] **Window Resize**
  - Resize browser window
  - Canvas resizes correctly
  - Aspect ratio maintained
  - No distortion of stars

- [ ] **Different Screen Sizes**
  - Test on large monitor (1920x1080+)
  - Test on laptop (1366x768)
  - Test on tablet/mobile if possible

## Test Scenarios

### Scenario 1: First-Time User

1. Open `http://localhost:8080`
2. Wait for loading screen
3. Read welcome message
4. Click "Explore" button
5. Rotate view with mouse
6. Click on a blue star (TIC)
7. Read info panel
8. Click on a yellow star (KIC)
9. Compare info panels
10. Press H for help

**Expected**: User understands controls and can explore stars

### Scenario 2: Power User

1. Open page
2. Press F to show FPS
3. Press 1, 2, 3, 4 to cycle views
4. Click multiple stars rapidly
5. Zoom in/out extensively
6. Check console for data stats

**Expected**: All features work, performance is good

### Scenario 3: Data Validation

1. Check console logs
2. Verify star count matches data file
3. Click 10 random stars
4. Verify RA/DEC values are correct
5. Verify catalog types match colors
6. Check for any invalid data warnings

**Expected**: All data loads correctly, no validation errors

## Common Issues & Solutions

### Issue: Blank Screen

**Solutions:**
- Check browser console for errors
- Verify `data/stars.json` exists
- Ensure server is running (ES6 modules require server)
- Check WebGL support: https://get.webgl.org/

### Issue: Stars Not Clickable

**Solutions:**
- Ensure info panel isn't blocking clicks
- Try clicking directly on star center
- Check console for raycaster errors
- Verify mouse events are registered

### Issue: Poor Performance

**Solutions:**
- Close other browser tabs
- Lower pixel ratio in `main.js` (line 47)
- Check FPS counter (should be 50+)
- Update graphics drivers

### Issue: Controls Not Working

**Solutions:**
- Verify OrbitControls loaded (check console)
- Ensure no JavaScript errors
- Try refreshing page
- Check keyboard focus on page

### Issue: Data Not Loading

**Solutions:**
- Verify file path: `data/stars.json`
- Check file is valid JSON
- Look for CORS errors in console
- Ensure server is running

## Manual Testing Checklist

```
STARTUP
[ ] Server starts without errors
[ ] Browser opens to correct URL
[ ] Loading screen appears
[ ] Console shows initialization messages

DATA LOADING
[ ] Star data fetches successfully
[ ] Statistics logged to console
[ ] Valid star count matches expectations
[ ] No validation errors (or minimal)

RENDERING
[ ] Stars appear in 3D space
[ ] Colors are correct (blue/yellow)
[ ] Sizes vary appropriately
[ ] Glow effect visible
[ ] Background color correct

CAMERA
[ ] Initial view is good (centered, good distance)
[ ] Rotation works smoothly
[ ] Zoom in/out works
[ ] Pan works
[ ] Damping effect noticeable
[ ] Distance limits work

INTERACTION
[ ] Stars are clickable
[ ] Info panel appears
[ ] Info panel data is correct
[ ] Star highlights correctly
[ ] Deselection works (ESC or click elsewhere)

KEYBOARD
[ ] View presets work (1-4)
[ ] FPS toggle works (F)
[ ] Help toggle works (H)
[ ] ESC closes panels

UI ELEMENTS
[ ] Title overlay visible
[ ] Stats panel shows correct counts
[ ] Info panel formats correctly
[ ] Help panel readable
[ ] Controls panel visible

PERFORMANCE
[ ] FPS is acceptable (40+)
[ ] No stuttering during rotation
[ ] Selection is instant
[ ] Resize is smooth

RESPONSIVE
[ ] Window resize works
[ ] Mobile view acceptable
[ ] Touch controls work (if applicable)
```

## Automated Testing (Future)

For future automated tests, consider:

```javascript
// Example test structure (not implemented)
describe('Star Visualization', () => {
  test('loads star data', async () => {
    // Test data loading
  });

  test('converts RA/DEC correctly', () => {
    // Test coordinate conversion
  });

  test('renders correct number of stars', () => {
    // Test rendering
  });

  test('detects star clicks', () => {
    // Test raycasting
  });
});
```

## Browser Compatibility

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome  | 90+     | ✅ Full | Recommended |
| Edge    | 90+     | ✅ Full | Recommended |
| Firefox | 88+     | ✅ Full | Good performance |
| Safari  | 14+     | ✅ Full | May need WebGL enable |
| Mobile  | Recent  | ⚠️ Limited | Touch controls needed |

## Performance Benchmarks

**Target Performance:**
- Load time: < 2 seconds
- FPS: 50-60 (1000 stars)
- Click response: < 100ms
- Resize response: Instant

**Test with:**
- 100 stars: Should be 60 FPS
- 1000 stars: Should be 50+ FPS
- 5000 stars: May drop to 30-40 FPS

## Reporting Issues

When reporting issues, include:

1. Browser and version
2. Operating system
3. Console errors (F12)
4. Screenshot if visual issue
5. Steps to reproduce
6. Expected vs actual behavior

## Success Criteria

The visualization passes testing if:

✅ All stars load and render correctly
✅ All controls work as documented
✅ Performance is acceptable (40+ FPS)
✅ No console errors
✅ Info panel shows accurate data
✅ Responsive to window resize
✅ All keyboard shortcuts work
✅ Star selection is accurate
✅ Welcome and help messages appear
✅ Loading experience is smooth
