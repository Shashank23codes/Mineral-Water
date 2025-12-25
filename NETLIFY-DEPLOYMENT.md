# 🚀 Netlify Deployment Guide for AquaPure

## Method 1: Deploy via Netlify Website (Easiest - Recommended)

### Step 1: Prepare Your Project

First, update the `vite.config.js` to remove the base path (Netlify doesn't need it):

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Remove or comment out the base path for Netlify
  // base: '/Mineral-Water/',
})
```

### Step 2: Build Your Project Locally

```bash
npm run build
```

This creates a `dist` folder with your production files.

### Step 3: Sign Up / Login to Netlify

1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Click **"Sign up"** (or **"Log in"** if you have an account)
3. Sign up with GitHub (recommended) or email

### Step 4: Deploy via Drag & Drop

**Option A: Manual Drag & Drop**

1. After logging in, you'll see the Netlify dashboard
2. Look for the section that says **"Want to deploy a new site without connecting to Git?"**
3. **Drag and drop** your `dist` folder directly onto that area
4. Netlify will upload and deploy your site
5. You'll get a random URL like: `https://random-name-123456.netlify.app`

**Option B: Browse to Upload**

1. Click **"Add new site"** → **"Deploy manually"**
2. Click **"Browse to upload"**
3. Select your entire `dist` folder
4. Click **"Deploy"**

### Step 5: Get Your Live URL

- Your site will be live immediately at: `https://random-name-123456.netlify.app`
- You can change this name in **Site settings** → **Change site name**

---

## Method 2: Deploy via GitHub (Automatic Updates)

### Step 1: Push to GitHub (if not done)

```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

### Step 2: Connect Netlify to GitHub

1. Login to [Netlify](https://www.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub
5. Select your repository: **"Mineral-Water"**

### Step 3: Configure Build Settings

Netlify will auto-detect Vite, but verify these settings:

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

Click **"Deploy site"**

### Step 4: Wait for Deployment

- Netlify will build and deploy automatically
- Takes 1-2 minutes
- You'll get a live URL

---

## Method 3: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This opens a browser to authorize.

### Step 3: Initialize Netlify

```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name (optional)
- Build command: `npm run build`
- Publish directory: `dist`

### Step 4: Deploy

```bash
# Deploy to production
netlify deploy --prod
```

---

## 🎨 Custom Domain (Optional)

### Free Netlify Subdomain

1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to: `aquapure` (if available)
4. Your URL becomes: `https://aquapure.netlify.app`

### Your Own Domain

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In Netlify: **Domain management** → **"Add custom domain"**
3. Enter your domain: `aquapure.com`
4. Follow DNS configuration instructions
5. Netlify provides free SSL certificate

---

## 🔄 Updating Your Site

### If Using Drag & Drop:
1. Make changes to your code
2. Run `npm run build`
3. Go to Netlify → **Deploys** tab
4. Drag & drop the new `dist` folder

### If Using GitHub Integration:
1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```
3. Netlify auto-deploys in 1-2 minutes

### If Using CLI:
```bash
npm run build
netlify deploy --prod
```

---

## ⚙️ Environment Variables (If Needed)

If you need environment variables:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add your variables (e.g., API keys)

---

## 🐛 Troubleshooting

### Issue: Build Fails

**Check build logs:**
1. Go to **Deploys** tab
2. Click on the failed deploy
3. Check the error message

**Common fixes:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: 404 on Refresh

Create a `_redirects` file in the `public` folder:

```
/*    /index.html   200
```

This ensures React Router works properly.

### Issue: Images Not Loading

- Make sure images are in the `public` folder
- Reference as `/image.png` not `./image.png`

---

## 📊 Netlify Features You Get

✅ **Free SSL Certificate** (HTTPS)
✅ **Automatic Deployments** (from GitHub)
✅ **Deploy Previews** (for pull requests)
✅ **Rollback** (to previous versions)
✅ **Form Handling** (for contact forms)
✅ **Analytics** (basic, free tier)
✅ **Custom Domain** support

---

## 🎯 Recommended Approach

**For Beginners:** Use **Method 1** (Drag & Drop)
- Fastest and easiest
- No Git knowledge needed
- Instant deployment

**For Developers:** Use **Method 2** (GitHub Integration)
- Automatic deployments
- Version control
- Deploy previews

**For Advanced:** Use **Method 3** (CLI)
- Full control
- Scriptable
- CI/CD integration

---

## 📱 Your Live URLs

After deployment, you'll have:

- **Netlify URL:** `https://your-site-name.netlify.app`
- **Custom Domain:** `https://aquapure.com` (if configured)

---

## 💡 Pro Tips

1. **Branch Deploys:** Deploy different branches to test features
2. **Deploy Previews:** Every PR gets a preview URL
3. **Rollback:** One-click rollback to previous versions
4. **Split Testing:** A/B test different versions
5. **Analytics:** Track visitors (paid feature)

---

## 🆚 Netlify vs GitHub Pages

| Feature | Netlify | GitHub Pages |
|---------|---------|--------------|
| Setup | Easier | Requires config |
| Custom Domain | Free SSL | Free SSL |
| Build Time | Faster | Slower |
| Rollback | One-click | Manual |
| Forms | Built-in | Need backend |
| Redirects | Easy | Limited |
| **Recommended** | ✅ Yes | For simple sites |

---

**Ready to deploy? Start with Method 1 (Drag & Drop) - it's the easiest!** 🚀

Your site will be live in under 2 minutes! 💧✨
