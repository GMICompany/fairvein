# Week 1 Marketing Content - EthicalCart

**Campaign Duration:** March 26 - April 1, 2026  
**Goal:** 500 visitors, 350 searches, 1+ viral piece (5K+ views)  
**Budget:** $0 (organic only)  
**Platforms:** TikTok (primary), Reddit (high-intent), Instagram (community)

---

## 📁 Content Inventory

### TikTok Slideshows (7 total)
Each folder contains 6 HTML slides + caption.txt

1. **slideshow-01-mac-reveal** - "Wait, MAC is owned by WHO?!"
2. **slideshow-02-indie-brands** - "Brands you thought were indie..."
3. **slideshow-03-before-you-buy** - "Before you tap Buy Now"
4. **slideshow-04-loreal-empire** - "The L'Oréal Empire"
5. **slideshow-05-receipt-check** - "POV: You're at checkout"
6. **slideshow-06-alternatives** - "Boycotting Estée Lauder? Try these instead"
7. **slideshow-07-conglomerate-map** - "8 companies own everything"

### Reddit Posts (3 total)
1. **post-01-makeupaddiction.md** - Tool intro for beauty community
2. **post-02-anticonsumption.md** - Anti-capitalist angle on brand ownership
3. **post-03-ethicalconsumerism.md** - Comprehensive tool review with transparency

### Instagram Carousels (2 total)
1. **carousel-01-estee-lauder-empire** - Network diagram of 29 brands (4 slides)
2. **carousel-02-why-boycott** - Timeline with sources (5 slides)

---

## 🎬 How to Create Final Assets from HTML Files

### Method 1: Screenshot in Browser (Recommended)
```bash
# Open each HTML file in Chrome/Edge
# Press F12 → Toggle Device Toolbar (Ctrl+Shift+M)
# Set dimensions:
#   - TikTok: 1080x1920 (9:16)
#   - Instagram: 1080x1080 (1:1)
# Take screenshot: Capture node screenshot in DevTools
# Or use browser extension: "Full Page Screen Capture"
```

### Method 2: Automated with Puppeteer (Node.js)
```javascript
const puppeteer = require('puppeteer');

async function screenshot(htmlPath, outputPath, width, height) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(`file://${htmlPath}`);
  await page.screenshot({ path: outputPath });
  await browser.close();
}

// Example usage:
screenshot('slide-1.html', 'slide-1.png', 1080, 1920);
```

### Method 3: Use Figma/Canva (If editing needed)
- Import HTML as design inspiration
- Recreate in design tool for easier editing
- Export as PNG at exact dimensions

---

## 📅 Posting Schedule

### Day 1 (Wednesday, March 26)
**Morning (9am SGT / 8pm EST):**
- **TikTok:** Post slideshow-01-mac-reveal
- **Reddit:** Post to r/MakeupAddiction (post-01)

**Evening (8pm SGT / 7am EST):**
- **Instagram:** Post carousel-01-estee-lauder-empire

### Day 2 (Thursday, March 27)
**Morning (9am SGT):**
- **TikTok:** Post slideshow-02-indie-brands
- **Reddit:** Engage with comments on Day 1 post

**Evening (8pm SGT):**
- Monitor TikTok analytics
- Reply to comments with genuine engagement

### Day 3 (Friday, March 28)
**Morning (9am SGT):**
- **TikTok:** Post slideshow-03-before-you-buy
- **Reddit:** Post to r/Anticonsumption (post-02)

**Afternoon (2pm SGT):**
- **Instagram:** Post carousel-02-why-boycott

### Day 4 (Saturday, March 29)
**Morning (10am SGT):**
- **TikTok:** Post slideshow-04-loreal-empire

**Evening:**
- Weekend engagement check
- Cross-post top TikTok to Instagram Reels

### Day 5 (Sunday, March 30)
**Morning (10am SGT):**
- **TikTok:** Post slideshow-05-receipt-check
- **Reddit:** Post to r/EthicalConsumerism (post-03)

### Day 6 (Monday, March 31)
**Morning (9am SGT):**
- **TikTok:** Post slideshow-06-alternatives

**Evening:**
- Review week performance
- Document top-performing content

### Day 7 (Tuesday, April 1)
**Morning (9am SGT):**
- **TikTok:** Post slideshow-07-conglomerate-map

**End of Day:**
- **WEEK 1 REVIEW** (see metrics section)

---

## 🎯 Platform-Specific Instructions

### TikTok

**Account Setup:**
- Handle: @ethicalcart (register if available)
- Bio: "Follow the money before you buy. 200+ brands indexed. Free forever. 🔍↓"
- Link: ethicalcart.com

**Posting Best Practices:**
- Upload as "Photo" slideshow (not video)
- Use trending audio: "Oh no" sound or "Spooky, Scary, Sunday"
- Hashtags: Mix broad (#beautytok) + niche (#brandtransparency)
- Post during peak hours: 7-9am, 12-1pm, 7-9pm EST
- Reply to comments within first hour (algorithm boost)

**Caption Template:**
```
[Hook from caption.txt]

[Value statement]

[CTA: check ethicalcart]

[Hashtags from caption.txt]
```

**Engagement Strategy:**
- Pin top comment with "Link: ethicalcart.com"
- Reply to first 10 comments personally
- Duet/Stitch with popular boycott TikToks
- Don't argue with skeptics (let community defend)

---

### Reddit

**Account Requirements:**
- Age: 30+ days old
- Karma: 500+ (comment in communities first if needed)
- No promotional history (space out posts)

**Posting Best Practices:**
- Read subreddit rules FIRST (some ban link posts)
- Use markdown formatting (bold, bullets)
- Reply to comments within 30 minutes
- Provide value BEFORE mentioning tool
- No "I built this" unless asked directly

**Tone Guidelines:**
- **r/MakeupAddiction:** Helpful, casual, "fellow shopper"
- **r/Anticonsumption:** Critical of capitalism, not just promoting tool
- **r/EthicalConsumerism:** Thoughtful, transparent about limitations

**Red Flags to Avoid:**
- Multiple posts in same day
- Copy-pasted replies
- Ignoring questions
- Deleting downvoted comments
- Linking in every reply

---

### Instagram

**Account Setup:**
- Handle: @ethicalcart
- Bio: "Your wallet is your vote. Search 200+ brands to see parent companies + active boycotts. Free forever. 👇"
- Link: ethicalcart.com

**Posting Best Practices:**
- Post carousels at 11am or 7pm SGT (peak engagement)
- Use all 30 hashtags (mix of sizes)
- Tag relevant accounts: @ethicalconsumer, @consciousliving
- Share to Stories immediately after posting
- Create shareable Story template: "Tag a friend who needs this"

**Carousel Design Notes:**
- First slide = hook (people scroll if not grabbed immediately)
- Last slide = CTA with clear URL
- Alt text for accessibility (helps SEO)
- Watermark with @ethicalcart on each slide (prevent repost theft)

**Story Strategy:**
- Repost carousel slides as individual Stories
- Add polls: "Do you check brand ownership before buying?"
- Share user-generated content (with permission)
- Link sticker on every Story

---

## 📊 Metrics to Track

### Daily Tracking (in spreadsheet)

| Date | TikTok Views | TikTok Engagement | Reddit Upvotes | IG Reach | Site Visits | Searches |
|------|--------------|-------------------|----------------|----------|-------------|----------|
| 3/26 |              |                   |                |          |             |          |
| 3/27 |              |                   |                |          |             |          |
| ...  |              |                   |                |          |             |          |

### Key Performance Indicators (Week 1)

**TikTok:**
- Total views: 5,000+ (target)
- Engagement rate: >5%
- Link clicks: 200+
- Best-performing slideshow: [TBD]

**Reddit:**
- Total upvotes: 100+
- Comments: 50+
- Link clicks: 100+
- Best-performing post: [TBD]

**Instagram:**
- Reach: 1,000+
- Saves: 50+
- Shares: 20+
- Profile visits: 100+

**Website (Google Analytics):**
- Unique visitors: 500+
- Searches: 350+
- Bounce rate: <60%
- Avg. time on site: 1:30+

### Traffic Sources (UTM Tracking)
Add UTM parameters to all links:
- TikTok: `?utm_source=tiktok&utm_medium=slideshow&utm_campaign=week1`
- Reddit: `?utm_source=reddit&utm_medium=post&utm_campaign=week1&utm_content=[subreddit]`
- Instagram: `?utm_source=instagram&utm_medium=carousel&utm_campaign=week1`

---

## 🔍 Week 1 Review Checklist (April 1 EOD)

**What worked?**
- [ ] Which content got most views/engagement?
- [ ] Which platform drove most traffic?
- [ ] Which hook/angle resonated?
- [ ] What did comments say?

**What didn't work?**
- [ ] Which content flopped?
- [ ] Where did people drop off?
- [ ] What criticism did we get?

**Learnings for Week 2:**
- [ ] Double down on [format/platform]
- [ ] Test new angle: [idea]
- [ ] Reduce effort on [underperforming channel]

**Content Performance:**
| Content | Views | Engagement | Clicks | Searches |
|---------|-------|------------|--------|----------|
| Slideshow 01 | | | | |
| Slideshow 02 | | | | |
| ... | | | | |

**Decision for Week 2:**
- If TikTok outperforms: Post daily (1 video/day)
- If Reddit outperforms: Increase to 5 posts/week in more subreddits
- If Instagram outperforms: Create 3 carousels/week

---

## 🚨 Crisis Management

**If accused of being promotional spam:**
- Acknowledge: "Fair feedback. I genuinely find it useful but understand the skepticism."
- Provide value: Share brand ownership facts WITHOUT linking to tool
- Let community defend if they find it valuable

**If content gets flagged/removed:**
- Read platform guidelines carefully
- Appeal if wrongly flagged
- Adjust strategy (less promotional language)

**If negative comments about tool accuracy:**
- Respond quickly with sources
- Fix any actual errors immediately
- Thank them for the feedback

**If competitor calls us out:**
- Ignore or respond professionally
- Focus on our value proposition (free, open, sourced)
- Don't badmouth competitors

---

## 🎨 Design Assets Reference

**Colors (from EthicalCart brand):**
- Cream: #FFF8F0
- Burnt Orange: #D2691E
- Dark Brown: #2C1810
- Medium Brown: #5C4033
- Light Brown: #8B7355
- Gradient: 135deg, #FFF8F0 → #FFE8D6

**Typography:**
- Headings: Playfair Display (700)
- Body: Inter (400, 600)
- Monospace (for URLs): System monospace

**Brand Voice:**
- Tone: Informative, empowering, slightly rebellious
- NOT: Preachy, sanctimonious, corporate
- Use: "Your wallet is your vote" "Follow the money" "Know who you're really paying"
- Avoid: "We're the best" "Revolutionary" "Game-changing"

---

## 💬 Comment Response Templates

**"Is this sponsored?"**
> Nope, not affiliated. Just a tool I found useful for tracking boycotts. Sharing in case it helps others.

**"How is this different from Googling?"**
> Saves time. Instead of 20 min of research, you get parent company + boycott campaigns + alternatives in one search. Also cites sources so you can verify.

**"This brand isn't owned by [company]"**
> Thanks for catching that! Can you share your source? We're always updating the database to keep it accurate. [If correct, acknowledge and fix immediately]

**"What about [missing brand]?"**
> Good suggestion! The database is growing — 200+ brands so far. Feel free to submit brands you'd like added.

**"Free? How do you make money?"**
> It's free forever. No ads, no data selling. Built as a public resource. (Future: donations or premium features, but core stays free)

---

## ✅ Pre-Launch Checklist

Before posting ANY content:

- [ ] Google Analytics added to EthicalCart website
- [ ] UTM parameters set up for tracking
- [ ] Social media accounts created (@ethicalcart)
- [ ] HTML slides converted to PNG (1080x1920 for TikTok, 1080x1080 for IG)
- [ ] Captions copied and ready
- [ ] Hashtag research done (not banned/flagged)
- [ ] Reddit accounts have sufficient karma
- [ ] Community guidelines reviewed for each platform
- [ ] Response templates saved for quick replies
- [ ] Week 1 tracking spreadsheet created
- [ ] Crisis management plan reviewed

---

## 📞 Support

**Questions during Week 1?**
- Check platform-specific best practices above
- Review MARKETING-STRATEGY.md for strategic context
- Test content on smaller account first if unsure
- Document any issues for Week 1 review

**Post-Week 1:**
- Update this README with learnings
- Archive underperforming content
- Plan Week 2 based on data

---

**Last Updated:** March 26, 2026  
**Next Review:** April 1, 2026 (End of Week 1)  
**Owner:** Bond (subagent: ethicalcart-week1-content)

---

## 🎯 Success Metrics Summary

**Minimum Viable Success (Week 1):**
- ✅ 500 unique visitors
- ✅ 350 searches
- ✅ 1+ content piece with 5K+ views
- ✅ 50+ Reddit upvotes
- ✅ Positive community feedback

**Stretch Goals:**
- 🎯 1,000 visitors
- 🎯 5+ pieces with >1K views each
- 🎯 First user-generated content (someone shares tool organically)
- 🎯 100+ email signups (if form added)

---

**Remember:** Week 1 is about LEARNING, not perfection. Test, measure, iterate.

Your wallet is your vote. Let's help people use it wisely. 💪