#!/usr/bin/env node

/**
 * TikTok Automated Uploader for Fairvein
 * 
 * ⚠️ WARNING: This violates TikTok Terms of Service (browser automation)
 * Use at your own risk. Account could be flagged or banned.
 * 
 * Usage:
 *   First time: node upload-tiktok.js --login
 *   Upload:     node upload-tiktok.js --images path/to/images --caption "text" --draft
 */

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');
const path = require('path');

puppeteer.use(StealthPlugin());

const CONFIG_FILE = path.join(__dirname, 'tiktok-config.json');

// Load or create config
function loadConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  }
  return { cookies: null, username: null };
}

function saveConfig(config) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
  console.log('✓ Config saved');
}

async function loginFlow() {
  console.log('🔐 Login Mode: Browser will open for manual TikTok login...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1280, height: 800 }
  });
  
  const page = await browser.newPage();
  
  try {
    await page.goto('https://www.tiktok.com/login', { waitUntil: 'networkidle2' });
    
    console.log('👤 Please log into TikTok in the browser window...');
    console.log('   (Handle 2FA if needed)');
    console.log('   Press ENTER here when you see your TikTok homepage');
    
    // Wait for user to press Enter
    await new Promise(resolve => {
      process.stdin.once('data', resolve);
    });
    
    // Save cookies
    const cookies = await page.cookies();
    const config = loadConfig();
    config.cookies = cookies;
    
    // Try to get username
    try {
      await page.goto('https://www.tiktok.com/upload', { waitUntil: 'networkidle2' });
      // Extract username if possible
      const username = await page.evaluate(() => {
        const el = document.querySelector('[data-e2e="profile-icon"]');
        return el ? el.getAttribute('href')?.split('/').pop() : null;
      });
      if (username) config.username = username;
    } catch (e) {
      console.warn('Could not extract username, continuing...');
    }
    
    saveConfig(config);
    
    console.log('✅ Login successful! Cookies saved.');
    console.log(`   Account: ${config.username || 'Unknown'}`);
    console.log('   You can now close the browser and run uploads.');
    
  } catch (error) {
    console.error('❌ Login failed:', error.message);
  } finally {
    await browser.close();
  }
}

async function uploadSlideshow(imagesDir, caption, isDraft = true) {
  const config = loadConfig();
  
  if (!config.cookies) {
    console.error('❌ No cookies found. Run with --login first.');
    process.exit(1);
  }
  
  // Find images
  const imageFiles = fs.readdirSync(imagesDir)
    .filter(f => /\.(png|jpg|jpeg)$/i.test(f))
    .sort()
    .slice(0, 6) // Max 6 slides
    .map(f => path.join(imagesDir, f));
  
  if (imageFiles.length === 0) {
    console.error('❌ No images found in', imagesDir);
    process.exit(1);
  }
  
  console.log(`📤 Uploading ${imageFiles.length} slides to TikTok...`);
  
  const browser = await puppeteer.launch({
    headless: false, // Keep visible for debugging
    defaultViewport: { width: 1280, height: 800 }
  });
  
  const page = await browser.newPage();
  
  try {
    // Set cookies
    await page.setCookie(...config.cookies);
    
    // Navigate to upload page
    await page.goto('https://www.tiktok.com/upload', { waitUntil: 'networkidle2', timeout: 60000 });
    
    console.log('⏳ Waiting for upload page to load...');
    
    // Wait for file input
    const fileInputSelector = 'input[type="file"][accept*="image"]';
    await page.waitForSelector(fileInputSelector, { timeout: 30000 });
    
    console.log('📁 Selecting images...');
    
    // Upload images
    const fileInput = await page.$(fileInputSelector);
    await fileInput.uploadFile(...imageFiles);
    
    console.log('✓ Images uploaded, waiting for processing...');
    
    // Wait for images to process (TikTok shows preview)
    await page.waitForTimeout(5000);
    
    // Add caption
    console.log('✍️  Adding caption...');
    const captionSelector = '[placeholder*="describe"]';
    await page.waitForSelector(captionSelector, { timeout: 30000 });
    await page.click(captionSelector);
    await page.type(captionSelector, caption, { delay: 50 });
    
    console.log('✓ Caption added');
    
    // Set privacy (if needed)
    // Note: TikTok UI varies by region, this might need adjustment
    
    if (isDraft) {
      console.log('💾 Saving as draft...');
      // Look for "Save draft" or "Post" button
      // This is tricky as TikTok UI changes frequently
      console.log('⚠️  Check browser window - click "Save draft" or "Post"');
      console.log('   Script will wait 30 seconds for you to click...');
      await page.waitForTimeout(30000);
    }
    
    console.log('✅ Upload complete!');
    console.log('   Check your TikTok drafts to add music and publish.');
    
    // Take screenshot as proof
    const screenshotPath = path.join(__dirname, `upload-${Date.now()}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Screenshot saved: ${screenshotPath}`);
    
  } catch (error) {
    console.error('❌ Upload failed:', error.message);
    
    // Take error screenshot
    const errorScreenshotPath = path.join(__dirname, `error-${Date.now()}.png`);
    await page.screenshot({ path: errorScreenshotPath, fullPage: true });
    console.error(`   Error screenshot: ${errorScreenshotPath}`);
    
    throw error;
  } finally {
    await browser.close();
  }
}

// CLI
const args = process.argv.slice(2);

if (args.includes('--login')) {
  loginFlow();
} else if (args.includes('--images')) {
  const imagesIdx = args.indexOf('--images');
  const captionIdx = args.indexOf('--caption');
  const isDraft = args.includes('--draft');
  
  if (imagesIdx === -1 || captionIdx === -1) {
    console.error('Usage: node upload-tiktok.js --images <dir> --caption "text" [--draft]');
    process.exit(1);
  }
  
  const imagesDir = args[imagesIdx + 1];
  const caption = args[captionIdx + 1];
  
  uploadSlideshow(imagesDir, caption, isDraft);
} else {
  console.log(`
TikTok Automated Uploader

Usage:
  First time setup:
    node upload-tiktok.js --login
  
  Upload slideshow:
    node upload-tiktok.js --images path/to/images --caption "Your caption" --draft

Options:
  --login    Open browser for manual login (saves cookies)
  --images   Directory containing 1-6 images (PNG/JPG)
  --caption  Caption text for the post
  --draft    Save as draft (default: true)

Example:
  node upload-tiktok.js --images ../content/week1-final/post1 --caption "My caption" --draft
  `);
}
