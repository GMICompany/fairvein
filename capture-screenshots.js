const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const VIEWPORT = { width: 1024, height: 1536 };
const LOCAL_URL = 'file:///C:/Users/vncen/.openclaw/workspace/ethicalcart/index.html';

// Ensure directories exist
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function captureScreenshots() {
  console.log('🎬 Starting screenshot capture...\n');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  
  // Navigate to the page
  console.log('📄 Loading page...');
  await page.goto(LOCAL_URL, { waitUntil: 'networkidle0' });
  await wait(2000); // Let everything load
  
  const screenshots = [
    {
      name: 'Bonus - Homepage',
      path: 'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\homepage.png',
      action: async () => {
        // Just capture the homepage as-is
        console.log('📸 Capturing homepage...');
      }
    },
    {
      name: 'Post 1, Slide 3 - MAC Search',
      path: 'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post1\\3.png',
      action: async () => {
        console.log('🔍 Searching for MAC...');
        // Type in search box
        await page.type('#brandSearch', 'MAC');
        await wait(500);
        // Click search or press enter
        await page.keyboard.press('Enter');
        await wait(2000); // Wait for results
      }
    },
    {
      name: 'Post 1, Slide 4 - Sister Brands List',
      path: 'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post1\\4.png',
      action: async () => {
        console.log('📜 Scrolling to show full sister brands...');
        // Scroll down to show all sister brands
        await page.evaluate(() => {
          const resultsDiv = document.querySelector('#results');
          if (resultsDiv) {
            resultsDiv.scrollTop = 400; // Scroll down a bit
          }
        });
        await wait(500);
      }
    },
    {
      name: 'Post 2, Slide 4 - Clinique Search',
      path: 'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post2\\4.png',
      action: async () => {
        console.log('🔍 Searching for Clinique...');
        // Clear and search for Clinique
        await page.evaluate(() => {
          document.querySelector('#brandSearch').value = '';
        });
        await page.click('#brandSearch', { clickCount: 3 });
        await page.type('#brandSearch', 'Clinique');
        await wait(500);
        await page.keyboard.press('Enter');
        await wait(2000);
      }
    },
    {
      name: 'Post 3, Slide 3 - Too Faced Search',
      path: 'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post3\\3.png',
      action: async () => {
        console.log('🔍 Searching for Too Faced...');
        await page.evaluate(() => {
          document.querySelector('#brandSearch').value = '';
        });
        await page.click('#brandSearch', { clickCount: 3 });
        await page.type('#brandSearch', 'Too Faced');
        await wait(500);
        await page.keyboard.press('Enter');
        await wait(2000);
      }
    },
    {
      name: 'Post 3, Slide 5 - Smashbox Search',
      path: 'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post3\\5.png',
      action: async () => {
        console.log('🔍 Searching for Smashbox...');
        await page.evaluate(() => {
          document.querySelector('#brandSearch').value = '';
        });
        await page.click('#brandSearch', { clickCount: 3 });
        await page.type('#brandSearch', 'Smashbox');
        await wait(500);
        await page.keyboard.press('Enter');
        await wait(2000);
      }
    },
    {
      name: 'Post 3, Slide 6 - MAC Search (in action)',
      path: 'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post3\\6.png',
      action: async () => {
        console.log('🔍 Searching for MAC again...');
        await page.evaluate(() => {
          document.querySelector('#brandSearch').value = '';
        });
        await page.click('#brandSearch', { clickCount: 3 });
        await page.type('#brandSearch', 'MAC');
        await wait(500);
        await page.keyboard.press('Enter');
        await wait(2000);
      }
    }
  ];
  
  for (const screenshot of screenshots) {
    // Ensure directory exists
    const dir = path.dirname(screenshot.path);
    ensureDir(dir);
    
    // Perform action
    await screenshot.action();
    
    // Take screenshot
    await page.screenshot({ 
      path: screenshot.path,
      type: 'png',
      fullPage: false // Just capture viewport
    });
    
    console.log(`✅ ${screenshot.name} saved to ${path.basename(screenshot.path)}\n`);
  }
  
  await browser.close();
  console.log('🎉 All screenshots captured successfully!');
}

captureScreenshots().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
