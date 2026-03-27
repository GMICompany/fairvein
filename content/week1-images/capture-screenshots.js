const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set portrait viewport (1024x1536)
  await page.setViewport({
    width: 1024,
    height: 1536,
    deviceScaleFactor: 2
  });

  // Screenshot 1: Fairvein homepage on phone
  console.log('Capturing Fairvein homepage...');
  await page.goto('https://fairvein.com', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: 'post1/6.png' });
  
  // Screenshot 2: Search for MAC
  console.log('Searching for MAC...');
  await page.goto('https://fairvein.com', { waitUntil: 'networkidle2', timeout: 30000 });
  
  // Try to find and fill search input
  try {
    await page.waitForSelector('input[type="search"], input[placeholder*="Search"], input[name*="search"]', { timeout: 5000 });
    await page.type('input[type="search"], input[placeholder*="Search"], input[name*="search"]', 'MAC');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'post1/3.png' });
  } catch (e) {
    console.log('Could not find search - taking screenshot of homepage instead');
    await page.screenshot({ path: 'post1/3.png' });
  }

  // Screenshot 3: Estée Lauder brands list
  console.log('Capturing Estée Lauder brands...');
  await page.goto('https://fairvein.com', { waitUntil: 'networkidle2', timeout: 30000 });
  
  // Try navigating to find EL brands info
  try {
    await page.waitForSelector('a', { timeout: 5000 });
    const links = await page.$$eval('a', links => links.map(a => ({ text: a.innerText, href: a.href })));
    const brandLink = links.find(l => l.text && (l.text.toLowerCase().includes('brand') || l.text.toLowerCase().includes('estee') || l.text.toLowerCase().includes('lauder')));
    
    if (brandLink) {
      await page.goto(brandLink.href, { waitUntil: 'networkidle2', timeout: 30000 });
    }
  } catch (e) {
    console.log('Taking homepage screenshot for EL brands');
  }
  
  await page.screenshot({ path: 'post1/4.png' });

  // Screenshot 4: Clinique search
  console.log('Searching for Clinique...');
  await page.goto('https://fairvein.com', { waitUntil: 'networkidle2', timeout: 30000 });
  
  try {
    await page.waitForSelector('input[type="search"], input[placeholder*="Search"], input[name*="search"]', { timeout: 5000 });
    await page.type('input[type="search"], input[placeholder*="Search"], input[name*="search"]', 'Clinique');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'post2/4.png' });
  } catch (e) {
    console.log('Could not search for Clinique');
    await page.screenshot({ path: 'post2/4.png' });
  }

  // Screenshot 5: Fairvein on phone (post 2)
  console.log('Capturing Fairvein homepage (post 2)...');
  await page.goto('https://fairvein.com', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: 'post2/6.png' });

  // Screenshot 6: Full EL brand list (post 3)
  console.log('Capturing EL brand list (post 3)...');
  await page.goto('https://fairvein.com', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: 'post3/5.png' });

  // Screenshot 7: Fairvein search in action (post 3)
  console.log('Capturing search in action...');
  await page.goto('https://fairvein.com', { waitUntil: 'networkidle2', timeout: 30000 });
  
  try {
    await page.waitForSelector('input[type="search"], input[placeholder*="Search"], input[name*="search"]', { timeout: 5000 });
    await page.type('input[type="search"], input[placeholder*="Search"], input[name*="search"]', 'Too Faced');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'post3/6.png' });
  } catch (e) {
    console.log('Could not search - using homepage');
    await page.screenshot({ path: 'post3/6.png' });
  }

  await browser.close();
  console.log('All screenshots captured!');
})();
