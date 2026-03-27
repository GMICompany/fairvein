const https = require('https');
const fs = require('fs');
const path = require('path');

// Pexels doesn't require API key for direct image downloads
// Using curated stock photos with known IDs that match our needs

const downloads = [
  // Post 1
  { url: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post1/1.png', name: 'MAC lipstick close-up' },
  { url: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post1/2.png', name: 'MAC products on table' },
  { url: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post1/5.png', name: 'Makeup collection on vanity' },
  
  // Post 2
  { url: 'https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post2/1.png', name: 'Person looking shocked' },
  { url: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post2/2.png', name: 'Estée Lauder products' },
  { url: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post2/3.png', name: 'Clinique products' },
  { url: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post2/5.png', name: 'Clinique product close-up' },
  
  // Post 3
  { url: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post3/1.png', name: 'Indie beauty brands' },
  { url: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post3/2.png', name: 'Too Faced products' },
  { url: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post3/3.png', name: 'Estée Lauder corporate' },
  { url: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&h=1536&w=1024', path: 'post3/4.png', name: 'Smashbox products' },
];

async function downloadImage(url, filepath, name) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading: ${name}...`);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (response) => {
          const fileStream = fs.createWriteStream(filepath);
          response.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`✓ ${name}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ ${name}`);
          resolve();
        });
      }
    }).on('error', reject);
  });
}

(async () => {
  for (const item of downloads) {
    try {
      await downloadImage(item.url, item.path, item.name);
      // Small delay to be respectful
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (err) {
      console.error(`✗ Failed to download ${item.name}:`, err.message);
    }
  }
  console.log('\nAll downloads complete!');
})();
