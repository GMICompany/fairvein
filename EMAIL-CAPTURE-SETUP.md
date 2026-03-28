# FairVein Email Capture — Google Sheets Backend

**Time required:** ~5 minutes  
**Cost:** Free forever  
**Capacity:** Unlimited submissions (Google Sheets limit: 10M cells)

---

## Current Status

The site currently uses **Convex** (`https://loyal-opossum-407.convex.site/subscribe`).  
This guide sets up a **Google Sheets** alternative — free, no account/billing needed beyond your Google account.

---

## Step 1: Create the Google Sheet (1 min)

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Rename it: `FairVein Email List`
4. In **Row 1**, add these headers (one per column):

| A | B | C | D |
|---|---|---|---|
| Email | Timestamp | Source | User Agent |

5. Leave everything else empty

---

## Step 2: Add the Apps Script (2 min)

1. In your Google Sheet, click **Extensions → Apps Script**
2. **Delete** all the default code in the editor
3. **Paste** this entire block:

```javascript
/**
 * FairVein Email Capture — Google Apps Script Backend
 * Accepts POST requests with email data and appends to this sheet.
 */

function doPost(e) {
  // Lock to prevent race conditions on concurrent submissions
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Validate email exists
    if (!data.email || data.email.indexOf('@') === -1) {
      return _jsonResponse({ success: false, error: 'Invalid email' });
    }

    // Check for duplicates (column A = emails)
    var existingEmails = sheet.getRange('A:A').getValues().flat().map(function(v) { return v.toString().toLowerCase(); });
    if (existingEmails.indexOf(data.email.toLowerCase()) !== -1) {
      // Still return success so the user sees the thank-you message
      return _jsonResponse({ success: true, message: 'Already subscribed' });
    }

    // Append new row
    sheet.appendRow([
      data.email,
      new Date().toISOString(),
      data.source || 'unknown',
      data.userAgent || ''
    ]);

    return _jsonResponse({ success: true, message: 'Subscribed' });

  } catch (error) {
    return _jsonResponse({ success: false, error: error.toString() });

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return _jsonResponse({ status: 'ok', message: 'FairVein email endpoint is live' });
}

function _jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (Ctrl+S). Name the project: `FairVein Email Capture`

---

## Step 3: Deploy as Web App (2 min)

1. Click **Deploy → New deployment** (blue button, top right)
2. Click the ⚙️ gear icon next to "Select type" → choose **Web app**
3. Fill in:
   - **Description:** `FairVein email capture`
   - **Execute as:** `Me (your@email.com)`
   - **Who has access:** `Anyone`
4. Click **Deploy**
5. Click **Authorize access** → select your Google account → Allow
   - If you see "Google hasn't verified this app", click **Advanced → Go to FairVein Email Capture (unsafe)** — this is safe, it's YOUR script
6. **Copy the Web App URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb...long-string.../exec
   ```

---

## Step 4: Update the HTML (30 sec)

Open `ethicalcart/index.html`, find this line (~line 581):

```javascript
const response = await fetch('https://loyal-opossum-407.convex.site/subscribe', {
```

Replace it with your Web App URL:

```javascript
const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE', {
```

That's it. The request body format (`email`, `source`) is already compatible.

---

## Step 5: Test It (30 sec)

**Option A — From the site:**
1. Push the updated `index.html` to GitHub Pages
2. Visit fairvein.com → wait 30 seconds or do a search
3. Enter a test email in the modal
4. Check your Google Sheet — the row should appear

**Option B — From terminal (no deploy needed):**
```bash
curl -L -X POST 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@example.com","source":"curl-test","userAgent":"curl"}'
```

Expected response: `{"success":true,"message":"Subscribed"}`

---

## How It Works

```
User enters email on fairvein.com
  → JS sends POST to Google Apps Script URL
  → Script checks for duplicates
  → Appends row to Google Sheet
  → Returns { success: true }
  → User sees "You're in!" message
```

**Built-in features:**
- ✅ Duplicate email detection (won't add same email twice)
- ✅ Race condition protection (LockService)
- ✅ Server-side email validation
- ✅ Timestamp auto-generated server-side
- ✅ GET endpoint for health checks
- ✅ Graceful error handling

**Limitations:**
- Google Apps Script has a daily quota of ~20,000 URL fetches (more than enough)
- Cold start can take 1-3 seconds on first request (then fast)
- No email verification (user could enter fake emails — fine for MVP)

---

## Switching Between Backends

The `index.html` has a single fetch URL on line ~581. Just swap it:

| Backend | URL |
|---------|-----|
| Convex (current) | `https://loyal-opossum-407.convex.site/subscribe` |
| Google Sheets | `https://script.google.com/macros/s/YOUR_ID/exec` |

Both accept the same JSON body: `{ "email": "...", "source": "..." }`

---

## Future: Email Notifications

Want to get notified when someone subscribes? Add this to the Apps Script (after the `appendRow` line):

```javascript
MailApp.sendEmail({
  to: 'your@email.com',
  subject: '🎉 New FairVein subscriber!',
  body: 'New email: ' + data.email + '\nSource: ' + data.source
});
```

---

*Created: 2026-03-28 | By: Bond (subagent)*
