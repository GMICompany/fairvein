# TikTok Automated Uploader

**⚠️ WARNING:** This tool uses browser automation which **violates TikTok Terms of Service**. Use at your own risk. Your account could be flagged or banned.

## What It Does

Automates uploading slideshow posts to TikTok drafts using Puppeteer (browser automation). You still need to:
- Add trending music manually (TikTok API limitation)
- Publish the draft (automation posts to drafts only)

## Setup (One Time - 10 Minutes)

### 1. Install Dependencies

```bash
cd C:\Users\vncen\.openclaw\workspace\ethicalcart\scripts
npm install
```

This installs Puppeteer + stealth plugin.

### 2. Login to TikTok

```bash
node upload-tiktok.js --login
```

**What happens:**
- Browser window opens
- You manually log into @fairvein TikTok account
- Handle 2FA if needed
- When you see your TikTok homepage, press **ENTER** in terminal
- Script saves cookies to `tiktok-config.json`
- Done! You won't need to login again unless cookies expire

## Usage

### Upload Single Post

```bash
node upload-tiktok.js --images ../content/week1-final/post1 --caption "Your caption text here" --draft
```

**What happens:**
1. Script opens browser (headless or visible)
2. Navigates to tiktok.com/upload
3. Uploads 6 images from the folder
4. Adds your caption
5. Waits 30 seconds for you to click "Save draft" or "Post"
6. Done

**Check TikTok app** → Drafts → Your post is there → Add music → Publish

### Upload All Week 1 Posts

Create `upload-week1.js`:

```javascript
const { execSync } = require('child_process');
const path = require('path');

const posts = [
  {
    dir: '../content/week1-final/post1',
    caption: 'I thought I was being so conscious avoiding Estée Lauder and then I found out MAC, Clinique, Bobbi Brown, Tom Ford, Too Faced, Smashbox, Origins... ALL of them are the same parent company 😭\n\nBeen using Fairvein to check every brand before I buy now. It's free and shows you who actually owns what + active boycott campaigns.\n\nTurns out most "indie" brands aren't indie at all 🙃\n\n#ethicalbeauty #boycott #esteelauder #mac #makeup'
  },
  {
    dir: '../content/week1-final/post2',
    caption: 'The moment I realized I'd been "boycotting" Estée Lauder for 2 years but buying Clinique the entire time 🤡...'
  },
  {
    dir: '../content/week1-final/post3',
    caption: 'That moment when you find out your favorite "indie" brand is actually owned by the same corporation...'
  }
];

posts.forEach((post, i) => {
  console.log(`\n📤 Uploading Post ${i + 1}/3...\n`);
  try {
    execSync(`node upload-tiktok.js --images "${post.dir}" --caption "${post.caption}" --draft`, { stdio: 'inherit' });
    console.log(`✅ Post ${i + 1} uploaded\n`);
  } catch (error) {
    console.error(`❌ Post ${i + 1} failed:`, error.message);
  }
});
```

Then run:
```bash
node upload-week1.js
```

## Troubleshooting

### "No cookies found"
- Run `node upload-tiktok.js --login` first
- Log into TikTok in the browser
- Press ENTER after you see your homepage

### "Upload failed: Timeout"
- TikTok's upload page may have changed
- Check the error screenshot in `scripts/` folder
- You may need to manually upload this time

### "Session expired"
- Cookies expired (happens after ~30 days)
- Run `--login` again to refresh cookies

### "CAPTCHA detected"
- TikTok flagged bot behavior
- Try again in a few hours
- Or fall back to manual upload

### Browser doesn't open
- Check Puppeteer installed: `npm list puppeteer`
- Try: `npm install puppeteer --force`

## File Structure

```
scripts/
├── package.json              # Dependencies
├── upload-tiktok.js          # Main uploader script
├── upload-week1.js           # Batch uploader for Week 1
├── tiktok-config.json        # Saved cookies (DO NOT COMMIT)
├── TIKTOK-UPLOADER-README.md # This file
└── upload-*.png              # Screenshots (auto-generated)
```

## Security

**⚠️ IMPORTANT:**
- `tiktok-config.json` contains your login cookies
- Anyone with this file can access your @fairvein account
- **DO NOT** commit this file to Git
- Add to `.gitignore` if not already there

## Limitations

1. **Music:** Cannot be added via automation (TikTok API limitation)
   - You must add manually after upload
   - Takes 30 seconds per post in TikTok app

2. **TikTok UI Changes:** Script may break if TikTok updates their upload flow
   - We'll need to update selectors
   - Fall back to manual upload if broken

3. **ToS Violation:** Using browser automation violates TikTok ToS
   - Account could be flagged or banned
   - Use at your own risk

4. **Headless Mode:** Currently runs with browser visible
   - Helps with debugging
   - Can switch to headless: change `headless: false` → `headless: true`

## Next Steps

**Week 1 Launch:**
1. Run `node upload-week1.js` (uploads all 3 posts to drafts)
2. Open TikTok app on phone
3. Go to Drafts
4. For each post:
   - Add trending music (search in TikTok sound library)
   - Review caption/hashtags
   - Schedule or publish immediately
5. Track performance in `analytics/tiktok-posts.json`

**If automation breaks:** Just upload manually via TikTok app (what you'd do anyway)

---

Built by Bond 🔫 for Fairvein Week 1 launch
