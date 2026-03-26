# Deployment Guide for EthicalCart

## Quick Deploy Options (Choose One)

### Option 1: GitHub Pages (Recommended — Free Forever)

1. **Create GitHub repo:**
   ```bash
   # In ethicalcart folder
   git init
   git add .
   git commit -m "Initial commit: EthicalCart MVP"
   
   # Create repo on GitHub (via web UI or CLI)
   gh repo create ethicalcart --public --source=. --push
   ```

2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch `main` (or `master`)
   - Folder: `/` (root)
   - Click Save

3. **Your site will be live at:**
   `https://[your-username].github.io/ethicalcart/`

4. **Custom domain (optional):**
   - Buy domain: ethicalcart.app ($12/year at Namecheap/Porkbun)
   - Add CNAME record pointing to `[your-username].github.io`
   - Add `CNAME` file to repo with your domain name

**Pros:** Free, simple, reliable, custom domain support  
**Cons:** Public repo required (code is visible)

---

### Option 2: Vercel (Fast, Auto-Deploy)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd ethicalcart
   vercel --prod
   ```

3. **Follow prompts:**
   - Login/signup with email or GitHub
   - Choose project name: `ethicalcart`
   - Framework: None (static site)

4. **Your site will be live at:**
   `https://ethicalcart.vercel.app`

5. **Custom domain:**
   - Add in Vercel dashboard → Settings → Domains

**Pros:** Instant deploy, auto-deploy on git push, SSL included  
**Cons:** Requires Vercel account (free tier is generous)

---

### Option 3: Netlify (Great for Forms)

1. **Drag & Drop Method:**
   - Go to https://app.netlify.com/drop
   - Drag the `ethicalcart` folder onto the page
   - Done! Site is live

2. **Or use Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

**Pros:** Easiest deploy, built-in form handling (for waitlist), generous free tier  
**Cons:** Requires Netlify account

---

### Option 4: Cloudflare Pages (Fast, Global CDN)

1. **Create Cloudflare Pages project:**
   - Push code to GitHub
   - Connect GitHub repo to Cloudflare Pages
   - Auto-deploy on push

2. **Your site will be live at:**
   `https://ethicalcart.pages.dev`

**Pros:** Cloudflare's global CDN, super fast, free tier is excellent  
**Cons:** Requires Cloudflare account, GitHub integration

---

## Recommended: GitHub Pages

**Why:** 
- Free forever
- Simple setup
- Custom domain support
- No vendor lock-in
- Code backup in GitHub

**Steps:**

1. Push to GitHub:
   ```bash
   cd C:\Users\vncen\.openclaw\workspace\ethicalcart
   git init
   git add .
   git commit -m "EthicalCart MVP v0.1"
   
   # If you have GitHub CLI installed:
   gh repo create ethicalcart --public --source=. --push
   
   # Or manually:
   # 1. Create repo on github.com/new
   # 2. git remote add origin https://github.com/[username]/ethicalcart.git
   # 3. git push -u origin main
   ```

2. Enable Pages in repo settings

3. Share link: `https://[username].github.io/ethicalcart/`

---

## After Deployment: Next Steps

1. **Test on mobile** (beauty shoppers are mobile-first)
2. **Add Google Analytics** (track usage)
3. **Share on Reddit:**
   - r/MakeupAddiction
   - r/EthicalConsumerism
   - r/BeautyGuruChatter
4. **Create TikTok demo video** ("Search MAC → see it's Estée Lauder → mind blown")
5. **Add waitlist email form** (Netlify Forms or Airtable)
6. **Expand database** to 100 brands (L'Oréal, Coty, Shiseido, Unilever)

---

## Custom Domain Setup (Optional)

1. **Buy domain:** ethicalcart.app or ethicalcart.co ($9-12/year)
2. **Add DNS records:**
   - Type: CNAME
   - Name: www
   - Value: [your-username].github.io
   - Type: A (if you want apex domain)
   - Value: GitHub Pages IPs (185.199.108.153, etc.)
3. **Add CNAME file to repo:**
   ```
   ethicalcart.app
   ```
4. **Wait for DNS propagation** (5-60 minutes)

---

## Files Ready to Deploy

- ✅ `index.html` — Landing page with search
- ✅ `data.js` — Brand database (11 brands)
- ✅ `README.md` — Project docs
- ✅ `DEPLOY.md` — This file

**Total size:** <100KB (fast load)

**Dependencies:** None (Tailwind loaded via CDN)

---

## Support

If deployment fails:
1. Check file paths are correct (all files in same folder)
2. Verify `data.js` is loaded before `index.html` uses it
3. Test locally first: `Open index.html in browser`
4. Check browser console for errors (F12)

Vincent: Choose your preferred hosting and I'll help deploy. GitHub Pages is easiest for MVP.

—Bond 🔫
