# TikTok Developer App — Review Form Answers

Copy-paste ready answers for the TikTok Developer Portal app review submission.

---

## App Description (max 120 chars)

```
FairVein helps consumers discover brand ownership, boycott campaigns, and indie alternatives before they buy.
```

**Character count:** 107 ✅

---

## URLs

| Field | Value |
|-------|-------|
| Terms of Service URL | `https://fairvein.com/terms` |
| Privacy Policy URL | `https://fairvein.com/privacy` |
| Website URL | `https://fairvein.com` |

---

## Platform

- [x] Web
- [ ] iOS
- [ ] Android

---

## Products & Scopes Requested

- **Login Kit** → `user.info.basic`
- **Content Posting API** → `video.upload`

---

## Product/Scope Explanation (max 1000 chars)

```
FairVein is a free consumer transparency tool that helps shoppers discover brand ownership, active boycott campaigns, and indie alternatives (fairvein.com).

Login Kit (user.info.basic): Used to authenticate members of the FairVein editorial team so they can authorize content publishing to the official @fairvein TikTok account. Authentication is limited to our internal team — end users of FairVein do not log in via TikTok.

Content Posting API (video.upload): Used to publish educational photo slideshow posts to the @fairvein TikTok account. Content includes brand ownership infographics, boycott awareness slides, and indie alternative recommendations. All posts are original, non-commercial, educational consumer transparency content created by our team.

We do not collect or store TikTok user data beyond the basic profile needed for authentication. Content is published only to our own account (@fairvein) and is never automated spam — each post is editorially reviewed before publishing.
```

**Character count:** ~890 ✅

---

## Demo Video — Recording Instructions for Vincent

Record a **screen recording** (1-3 minutes) showing the full integration flow. TikTok reviewers need to see the app actually working.

### What to Record

1. **Open FairVein admin/posting interface** (the page where you initiate a TikTok post)
2. **Click "Log in with TikTok"** — show the TikTok OAuth screen appearing
3. **Authorize the app** — log in with the @fairvein TikTok account credentials
4. **Show the post creation flow:**
   - Select/upload slideshow images (brand ownership infographic slides)
   - Add caption text (e.g., "Did you know MAC is owned by Estée Lauder? Here are 5 indie alternatives 🧵")
   - Add hashtags (e.g., #brandtransparency #ethicalshopping #fairvein)
5. **Click "Publish to TikTok"** — show the API call succeeding
6. **Open TikTok** (browser or app) and show the post live on @fairvein's profile

### Tips
- Use a clean browser (no embarrassing tabs)
- Keep it under 3 minutes — reviewers watch hundreds of these
- No background music needed
- If using OBS or QuickTime, 1080p is fine
- Show the TikTok authorization scope consent screen clearly (they check this)
- Make sure the content you post is a real, quality slideshow — not a test image

### What NOT to Do
- Don't show automated/bulk posting — show one manual editorial post
- Don't show any user data collection beyond basic TikTok auth
- Don't rush through the OAuth flow — let the consent screen be visible for 2-3 seconds

---

## Additional Notes

- **App Name on TikTok:** FairVein
- **Category:** Education / Consumer Tools
- **Content Type:** Photo slideshows (not video — uses TikTok's photo mode)
- **Posting Frequency:** 3-5 posts per week (editorial content, not automated)
- **Account:** @fairvein (create this before submitting the app review)

---

## Checklist Before Submitting

- [ ] Create @fairvein TikTok account
- [ ] Deploy terms.html to fairvein.com/terms
- [ ] Deploy privacy.html to fairvein.com/privacy
- [ ] Build the posting interface (even a minimal one for the demo)
- [ ] Record demo video per instructions above
- [ ] Upload demo video to the review form
- [ ] Submit and wait (review typically takes 1-5 business days)
