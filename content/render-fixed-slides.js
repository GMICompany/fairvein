const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE = path.join(__dirname, 'week1-fixed');
const OUT = path.join(__dirname, 'week1-final');

async function render() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1536, deviceScaleFactor: 1 });

  const posts = ['post1', 'post2', 'post3'];
  const slides = ['slide-3', 'slide-4', 'slide-6'];

  for (const post of posts) {
    for (const slide of slides) {
      const htmlPath = path.join(BASE, post, `${slide}.html`);
      if (!fs.existsSync(htmlPath)) {
        console.log(`SKIP: ${post}/${slide}.html not found`);
        continue;
      }

      const slideNum = slide.split('-')[1];
      const outPath = path.join(OUT, post, `${slideNum}.png`);

      // Backup original
      const backupPath = path.join(OUT, post, `${slideNum}.original.png`);
      if (fs.existsSync(outPath) && !fs.existsSync(backupPath)) {
        fs.copyFileSync(outPath, backupPath);
        console.log(`BACKUP: ${post}/${slideNum}.png → ${slideNum}.original.png`);
      }

      await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0', timeout: 15000 });
      // Wait for fonts to load
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 1000));

      await page.screenshot({ path: outPath, type: 'png' });
      console.log(`RENDERED: ${post}/${slideNum}.png`);
    }
  }

  await browser.close();
  console.log('Done! All fixed slides rendered to week1-final/');
}

render().catch(err => { console.error(err); process.exit(1); });
