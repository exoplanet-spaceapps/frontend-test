# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Repository with this project
- Node.js 18+ installed locally
- Git installed

## Quick Start

### 1. Initial Setup

```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/nasa-star-catalog.git
cd nasa-star-catalog

# Install dependencies
npm install

# Ensure star data is in place
# Copy stars.json to data/ directory if not already there
cp /path/to/stars.json data/

# Test locally
npm run dev
# Visit http://localhost:8080
```

### 2. GitHub Pages Configuration

#### Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save changes

#### Update package.json
Replace `YOUR-USERNAME` in `package.json`:
```json
"repository": {
  "type": "git",
  "url": "git+https://github.com/YOUR-USERNAME/nasa-star-catalog.git"
}
```

### 3. Deploy

#### Automatic Deployment (Recommended)
The project uses GitHub Actions for automatic deployment.

```bash
# Commit your changes
git add .
git commit -m "Initial setup for GitHub Pages"

# Push to main branch
git push origin main
```

GitHub Actions will automatically:
1. Build the project
2. Copy data files to `public/data/`
3. Deploy to GitHub Pages

#### Manual Deployment
```bash
# Build and deploy manually
npm run build
npm run deploy
```

## Deployment Workflow

### GitHub Actions Pipeline

The `.github/workflows/deploy.yml` file handles:

```yaml
Trigger (push to main)
    ↓
Checkout code
    ↓
Install Node.js & dependencies
    ↓
Copy stars.json to public/data/
    ↓
Build artifacts
    ↓
Upload to GitHub Pages
    ↓
Deploy to live site
```

### Workflow Steps

1. **Build Job**:
   - Checks out repository
   - Sets up Node.js 20
   - Installs dependencies
   - Copies data files
   - Uploads build artifact

2. **Deploy Job**:
   - Deploys artifact to GitHub Pages
   - Updates site URL

## File Structure for Deployment

```
public/                    # This directory is deployed
├── index.html            # Entry point
├── data/
│   └── stars.json        # Star catalog data
└── assets/
    ├── models/
    └── textures/

src/                      # Referenced by index.html
├── js/
│   ├── main.js
│   ├── starRenderer.js
│   ├── controls.js
│   ├── dataLoader.js
│   └── utils.js
└── css/
    ├── styles.css
    └── visualization.css
```

**Note**: The `public/` directory is the root for GitHub Pages. All paths in `index.html` should be relative to this directory.

## Environment-Specific Configurations

### Local Development
```bash
npm run dev
# Serves from public/ at http://localhost:8080
```

### Production (GitHub Pages)
- Base URL: `https://YOUR-USERNAME.github.io/nasa-star-catalog/`
- All assets served via GitHub's CDN
- HTTPS enabled by default

## Custom Domain (Optional)

### Setup Custom Domain

1. **Add CNAME file**:
```bash
echo "stars.yourdomain.com" > public/CNAME
```

2. **Configure DNS**:
   - Add CNAME record pointing to: `YOUR-USERNAME.github.io`
   - Wait for DNS propagation (up to 24 hours)

3. **Enable in GitHub Settings**:
   - Settings → Pages → Custom domain
   - Enter your domain
   - Enable "Enforce HTTPS"

## Troubleshooting

### Common Issues

#### 1. 404 Errors
**Problem**: Page shows 404 after deployment

**Solutions**:
- Verify GitHub Pages is enabled in Settings
- Check that `public/` directory contains `index.html`
- Ensure workflow completed successfully
- Wait 2-3 minutes after first deployment

#### 2. Stars Not Loading
**Problem**: Visualization shows but no stars

**Solutions**:
```bash
# Verify stars.json exists
ls -la data/stars.json

# Check file is copied to public
ls -la public/data/stars.json

# Verify JSON is valid
npm run test
```

#### 3. Three.js Not Loading
**Problem**: Console errors about Three.js

**Solutions**:
- Check CDN link in `index.html`
- Verify internet connection
- Try alternative CDN (unpkg, cdnjs)

#### 4. Build Failures
**Problem**: GitHub Actions workflow fails

**Solutions**:
```bash
# Test build locally
npm run build

# Check workflow logs in GitHub Actions tab
# Fix any errors in the code
# Commit and push again
```

### Debug Checklist

- [ ] `stars.json` exists in `data/` directory
- [ ] `package.json` has correct repository URL
- [ ] GitHub Pages is enabled in repository settings
- [ ] GitHub Actions workflow completed successfully
- [ ] Wait 2-3 minutes after deployment
- [ ] Check browser console for errors
- [ ] Verify network requests in DevTools

## Performance Optimization

### Deployment Optimizations

1. **Enable Caching**:
   - GitHub Pages automatically caches static assets
   - Set appropriate cache headers

2. **Compress Assets**:
```bash
# Minify JavaScript (optional)
npm install -g terser
terser src/js/main.js -o public/main.min.js
```

3. **Optimize JSON**:
```bash
# Remove unnecessary whitespace
npm install -g json-minify
json-minify data/stars.json > public/data/stars.json
```

## Monitoring

### Check Deployment Status

1. **GitHub Actions**:
   - Repository → Actions tab
   - View workflow runs
   - Check logs for errors

2. **GitHub Pages Status**:
   - Settings → Pages
   - Shows deployment status and URL

3. **Browser DevTools**:
   - Network tab: Check resource loading
   - Console: Check for JavaScript errors
   - Performance: Monitor FPS and load time

## Rollback Strategy

### Revert to Previous Version

```bash
# Find previous commit hash
git log

# Revert to specific commit
git revert <commit-hash>
git push origin main

# Or rollback to previous commit
git reset --hard HEAD~1
git push -f origin main
```

## Continuous Deployment

### Workflow Triggers

The deployment automatically runs on:
- **Push to main branch**: Immediate deployment
- **Manual trigger**: Via Actions tab → "Run workflow"

### Branch Strategy

Recommended workflow:
```bash
# Create feature branch
git checkout -b feature/new-visualization

# Make changes and test locally
npm run dev

# Commit changes
git add .
git commit -m "Add new visualization feature"

# Push to feature branch
git push origin feature/new-visualization

# Create Pull Request on GitHub
# After review, merge to main
# Auto-deployment triggers
```

## Security

### Best Practices

1. **No Secrets in Code**: Never commit API keys or secrets
2. **Use Environment Variables**: For any sensitive data
3. **HTTPS Only**: GitHub Pages enforces HTTPS
4. **Content Security Policy**: Consider adding CSP headers

### GitHub Actions Secrets

If you need secrets:
```yaml
# In deploy.yml
env:
  API_KEY: ${{ secrets.API_KEY }}
```

Add secrets in: Settings → Secrets and variables → Actions

## Advanced Configuration

### Custom Build Script

Create `scripts/copy-data.js`:
```javascript
const fs = require('fs');
const path = require('path');

// Ensure public/data directory exists
const dataDir = path.join(__dirname, '../public/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Copy stars.json
const source = path.join(__dirname, '../data/stars.json');
const dest = path.join(dataDir, 'stars.json');

fs.copyFileSync(source, dest);
console.log('✓ Copied stars.json to public/data/');
```

### Multiple Environments

```json
// package.json
{
  "scripts": {
    "dev": "http-server public -p 8080",
    "build:staging": "npm run copy-data && NODE_ENV=staging",
    "build:production": "npm run copy-data && NODE_ENV=production",
    "deploy:staging": "gh-pages -d public -b staging",
    "deploy:production": "gh-pages -d public -b main"
  }
}
```

## Support

### Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Three.js Documentation](https://threejs.org/docs/)

### Getting Help
- Check GitHub Actions logs
- Review browser console errors
- Open issue in repository
- Contact team in project chat

---

**Last Updated**: 2025-10-04
**Version**: 1.0.0
