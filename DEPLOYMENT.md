# 🚀 GitHub Pages Deployment Guide for AquaPure

## Step 1: Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: AquaPure website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `aquapure-website`
4. Description: `Premium mineral water brand website`
5. Make it **Public**
6. **DO NOT** initialize with README (you already have one)
7. Click **"Create repository"**

## Step 3: Connect Local Repository to GitHub

```bash
# Add remote repository (replace with your GitHub username)
git remote add origin https://github.com/Shashank23codes/aquapure-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Install gh-pages Package

The package is being installed automatically. Wait for it to complete, then verify:

```bash
npm list gh-pages
```

## Step 5: Deploy to GitHub Pages

```bash
# Build and deploy in one command
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Create a `gh-pages` branch
- Push the `dist` folder to that branch

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

## Step 7: Access Your Live Site

After 2-3 minutes, your site will be live at:

```
https://shashank23codes.github.io/aquapure-website/
```

## 🔄 Updating Your Site

Whenever you make changes:

```bash
# 1. Add changes
git add .

# 2. Commit changes
git commit -m "Update: description of changes"

# 3. Push to GitHub
git push origin main

# 4. Deploy to GitHub Pages
npm run deploy
```

## ⚠️ Important Notes

1. **Base Path**: The `vite.config.js` is configured with `base: '/aquapure-website/'`
   - This matches your repository name
   - If you change the repo name, update this too

2. **Images**: Make sure `hero-img.png` is in the `public` folder

3. **Build Errors**: If deployment fails, check:
   ```bash
   npm run build
   ```
   Fix any errors before deploying

## 🐛 Troubleshooting

### Issue: 404 Page Not Found
- Check that `base` in `vite.config.js` matches your repo name
- Verify GitHub Pages is enabled in repository settings

### Issue: Images Not Loading
- Move images to `public` folder
- Reference them as `/image.png` (not `./image.png`)

### Issue: Deployment Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

## 📱 Custom Domain (Optional)

To use a custom domain like `aquapure.com`:

1. Add a `CNAME` file in `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

---

**Your site will be live at:** `https://shashank23codes.github.io/aquapure-website/`

Good luck! 🎉
