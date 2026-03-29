// FairVein Service Worker — enables PWA install + offline support
const CACHE_NAME = 'fairvein-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/data.js',
  '/swaps.js',
  '/Images/Fairvein_Mascot.png',
  '/Images/Fairvein_Mascot_HalfBottom.png',
  '/Images/Fairvein_Mascot_Halfleft.png',
  '/Images/assets/images/favicon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).catch(() => {
        // Offline fallback
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
