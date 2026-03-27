#!/usr/bin/env node
/**
 * Add text overlay to images using Larry's proven viral formula
 * Tested on 1M+ TikTok views
 * 
 * Usage:
 *   node add-text-overlay.js --image path/to/image.png --text "Your text here" --output path/to/output.png
 *   node add-text-overlay.js --batch texts.json --dir input-dir/ --output output-dir/
 * 
 * Text format: Use \n for manual line breaks (recommended)
 * Example: "I showed my landlord\nwhat AI thinks our\nkitchen should look like"
 */

const fs = require('fs');
const path = require('path');

// Check if canvas is installed
let canvas;
try {
  canvas = require('canvas');
} catch (err) {
  console.error('❌ node-canvas not installed');
  console.error('\nInstall it first:');
  console.error('  npm install canvas');
  console.error('\nIf that fails, install system dependencies first:');
  console.error('  macOS:    brew install pkg-config cairo pango libpng jpeg giflib librsvg');
  console.error('  Ubuntu:   sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev');
  console.error('  Windows:  npm install canvas (auto-downloads prebuilt binaries)');
  process.exit(1);
}

const { createCanvas, loadImage } = canvas;

/**
 * Add text overlay to a single image using Larry's formula
 * 
 * @param {string} imagePath - Path to input image
 * @param {string} text - Text to overlay (use \n for line breaks)
 * @param {string} outputPath - Path to save output image
 */
async function addOverlay(imagePath, text, outputPath) {
  // Load image
  const img = await loadImage(imagePath);
  const canvasObj = createCanvas(img.width, img.height);
  const ctx = canvasObj.getContext('2d');
  
  // Draw image
  ctx.drawImage(img, 0, 0);
  
  // ─── Dynamic font sizing based on text length ───
  const wordCount = text.split(/\s+/).length;
  let fontSizePercent;
  
  if (wordCount <= 5) {
    fontSizePercent = 0.075;  // Short text: 75px on 1024w image
  } else if (wordCount <= 12) {
    fontSizePercent = 0.065;  // Medium text: 66px
  } else {
    fontSizePercent = 0.050;  // Long text: 51px
  }
  
  const fontSize = Math.round(img.width * fontSizePercent);
  const outlineWidth = Math.round(fontSize * 0.15); // 15% of font size
  const maxWidth = img.width * 0.75; // 75% of image width
  const lineHeight = fontSize * 1.3;
  
  // ─── Text styling ───
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  
  // ─── Word wrap (respects manual \n breaks) ───
  const lines = [];
  const manualLines = text.split('\n');
  
  for (const manualLine of manualLines) {
    const words = manualLine.trim().split(/\s+/);
    let currentLine = '';
    
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    
    if (currentLine) lines.push(currentLine);
  }
  
  // ─── Position: centered at 28% from top (TikTok safe zone) ───
  const totalHeight = lines.length * lineHeight;
  const startY = (img.height * 0.28) - (totalHeight / 2);
  const x = img.width / 2;
  
  // ─── Draw each line ───
  for (let i = 0; i < lines.length; i++) {
    const y = startY + (i * lineHeight);
    
    // Black outline (thick for readability on any background)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = outlineWidth;
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;
    ctx.strokeText(lines[i], x, y);
    
    // White fill
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(lines[i], x, y);
  }
  
  // Save output
  fs.writeFileSync(outputPath, canvasObj.toBuffer('image/png'));
  console.log(`✓ ${path.basename(outputPath)}`);
}

/**
 * Batch process multiple images with corresponding texts
 * 
 * @param {string} textsFile - Path to JSON file with texts array
 * @param {string} inputDir - Directory with numbered images (1.png, 2.png, etc.)
 * @param {string} outputDir - Directory to save overlayed images
 */
async function batchProcess(textsFile, inputDir, outputDir) {
  const texts = JSON.parse(fs.readFileSync(textsFile, 'utf8'));
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  for (let i = 0; i < texts.length; i++) {
    const slideNum = i + 1;
    const inputPath = path.join(inputDir, `${slideNum}.png`);
    const outputPath = path.join(outputDir, `${slideNum}.png`);
    
    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠ Missing slide ${slideNum}: ${inputPath}`);
      continue;
    }
    
    await addOverlay(inputPath, texts[i], outputPath);
  }
  
  console.log(`\n✓ Processed ${texts.length} slides`);
}

// ─── CLI ───
const args = process.argv.slice(2);

if (args.includes('--help') || args.length === 0) {
  console.log(`
Add text overlay to images using Larry's viral TikTok formula

Single image:
  node add-text-overlay.js --image input.png --text "Your text here" --output output.png

Batch (6 slides):
  node add-text-overlay.js --batch texts.json --dir slides/ --output overlayed/

texts.json format:
  [
    "Slide 1 text\\nwith line breaks",
    "Slide 2 text\\nwith line breaks",
    ...
  ]

Tips:
  - Use \\n for manual line breaks (4-6 words per line is optimal)
  - Text is centered at 28% from top (TikTok safe zone)
  - Font size adjusts automatically based on text length
  - White text + thick black outline (readable on any background)
  `);
  process.exit(0);
}

// Parse arguments
const getArg = (flag) => {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : null;
};

const imagePath = getArg('--image');
const text = getArg('--text');
const outputPath = getArg('--output');
const batchFile = getArg('--batch');
const inputDir = getArg('--dir');

// Execute
(async () => {
  try {
    if (batchFile && inputDir && outputPath) {
      // Batch mode
      await batchProcess(batchFile, inputDir, outputPath);
    } else if (imagePath && text && outputPath) {
      // Single mode
      await addOverlay(imagePath, text, outputPath);
    } else {
      console.error('❌ Invalid arguments. Use --help for usage.');
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
})();
