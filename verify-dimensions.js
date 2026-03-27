const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function verifyDimensions() {
  const screenshots = [
    'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\homepage.png',
    'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post1\\3.png',
    'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post1\\4.png',
    'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post2\\4.png',
    'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post3\\3.png',
    'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post3\\5.png',
    'C:\\Users\\vncen\\.openclaw\\workspace\\ethicalcart\\content\\week1-images\\post3\\6.png'
  ];

  console.log('📐 Verifying screenshot dimensions:\n');
  
  for (const filepath of screenshots) {
    const metadata = await sharp(filepath).metadata();
    const filename = path.basename(filepath);
    const status = (metadata.width === 1024 && metadata.height === 1536) ? '✅' : '❌';
    console.log(`${status} ${filename}: ${metadata.width}×${metadata.height}`);
  }
}

verifyDimensions().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
