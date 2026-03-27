# Quick Start Guide - Week 1 Content

## 🚀 Fastest Path to Launch

### Step 1: Generate PNG files from HTML (5 minutes)

**Option A: Browser DevTools (Manual)**
```
1. Open Chrome/Edge
2. Navigate to each HTML file
3. Press F12 → Toggle Device Toolbar (Ctrl+Shift+M)
4. Set viewport: 1080x1920 (TikTok) or 1080x1080 (Instagram)
5. Right-click page → Capture screenshot
6. Save as PNG
```

**Option B: Puppeteer Script (Automated)**
```javascript
// save as generate-pngs.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateSlides(folder, width, height) {
  const browser = await puppeteer.launch();
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  
  for (const file of files) {
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    await page.goto(`file://${path.join(__dirname, folder, file)}`);
    await page.screenshot({ 
      path: path.join(__dirname, folder, file.replace('.html', '.png'))
    });
    await page.close();
  }
  
  await browser.close();
}

// Generate all TikTok slideshows (9:16)
['slideshow-01-mac-reveal', 'slideshow-02-indie-brands', 'slideshow-03-before-you-buy']
  .forEach(dir => generateSlides(`tiktok/${dir}`, 1080, 1920));

// Generate Instagram carousels (1:1)
['carousel-01-estee-lauder-empire', 'carousel-02-why-boycott']
  .forEach(dir => generateSlides(`instagram/${dir}`, 1080, 1080));
```

Run: `node generate-pngs.js`

---

### Step 2: Complete Missing Slideshows (10 minutes)

**Slideshows 04-07 are documented but need HTML files created.**

Use slideshows 01-03 as templates. Quick guide:

**Slideshow 04 (L'Oréal Empire):**
- Slide 1: Hook "The L'Oréal Empire" (copy slideshow-01 slide-1 structure)
- Slide 2: Receipt listing brands (copy slideshow-01 slide-3 structure)
- Slide 3: Show network diagram (copy slideshow-02 slide-5 structure)
- Slide 4-6: Follow patterns from slides-all.txt

**Shortcut:** Copy-paste existing slides, just change:
- Title text
- Brand names
- Colors (keep same palette)

---

### Step 3: Post to Platforms (30 minutes)

**TikTok (Day 1):**
1. Upload slideshow-01 PNGs as "Photo" mode
2. Add trending audio: Search "Oh no oh no"
3. Paste caption from caption.txt
4. Add hashtags (already in caption.txt)
5. Post at 9am SGT / 8pm EST

**Reddit (Day 1):**
1. Go to r/MakeupAddiction
2. Click "Create Post" → Text
3. Paste title and body from post-01-makeupaddiction.md
4. Format with markdown (bold, bullets)
5. Post between 10am-2pm EST

**Instagram (Day 1 evening):**
1. Upload carousel-01 PNGs (4 slides)
2. Paste caption from caption.txt
3. Add all hashtags
4. Share to Stories after posting
5. Post at 8pm SGT / 7am EST

---

## 📊 Minimum Viable Week 1

**If time-constrained, prioritize:**

✅ **Must-Do:**
- Post 3 TikTok slideshows (01, 02, 03)
- Post 2 Reddit posts (r/MakeupAddiction, r/Anticonsumption)
- Post 1 Instagram carousel (Estée Lauder Empire)

⏳ **Nice-to-Have:**
- Complete all 7 TikTok slideshows
- Post to r/EthicalConsumerism
- Post second Instagram carousel
- Daily engagement/replies

**Focus = Quality over quantity in Week 1.**

---

## 🎯 Day 1 Checklist

- [ ] Generate PNGs for slideshow-01-mac-reveal
- [ ] Post to TikTok (9am SGT)
- [ ] Post to r/MakeupAddiction (10am-2pm EST window)
- [ ] Generate PNGs for carousel-01
- [ ] Post to Instagram (8pm SGT)
- [ ] Set calendar reminders for Days 2-7
- [ ] Monitor first post for 1 hour, reply to comments
- [ ] Check Google Analytics at end of day

---

## 🔧 Troubleshooting

**"HTML fonts not loading"**
→ Wait 2-3 seconds after page load before screenshot (Google Fonts delay)

**"Reddit post removed"**
→ Check subreddit rules. Some require flair or minimum account age. Try again without link in body.

**"TikTok video quality poor"**
→ Upload as high-res PNG. Avoid compressing before upload.

**"No engagement on posts"**
→ Reply to comments yourself first. Algorithms favor active conversations.

---

## 💡 Pro Tips

1. **Batch create content:** Generate all PNGs at once, schedule posts
2. **Test hooks:** If slideshow-01 gets >5K views, create similar hook for Week 2
3. **Engage authentically:** Don't copy-paste replies. Sound human.
4. **Track everything:** Google Analytics + manual spreadsheet
5. **Iterate fast:** If something flops by Day 3, pivot

---

## 📞 Need Help?

- **Design questions:** Reference frontend-design/SKILL.md
- **Strategy questions:** Reference MARKETING-STRATEGY.md
- **Posting guidelines:** Reference week1/README.md

**Remember:** Perfect is the enemy of done. Ship Week 1, learn, iterate Week 2.

Let's go. 🚀