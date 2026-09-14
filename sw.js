// What's The Score Ref - 100% Offline Service Worker
const CACHE_NAME = 'whatsthescoreref-v57';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './css/high-contrast.css',
  './js/app.js',
  './js/timer.js',
  './js/score.js',
  './js/hardware.js',
  './js/rules.js',
  './js/prematch.js',
  './js/report.js',
  './js/lockMode.js',
  './js/storage.js',
  './js/tailwind.min.js',
  './icons/icon.svg',
  './icons/favicon.svg',
  './icons/confused_ref.png',
  './icons/confused_ref.jpg',
  './icons/apple-touch-icon.png',
  './icons/logo-96.png',
  './icons/logo-192.png',
  './icons/logo-512.png',
  './icons/logo-header.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Listen for SKIP_WAITING message from page
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isLocalOrigin = url.origin === self.location.origin;
  const isCodeAsset = event.request.mode === 'navigate' ||
    url.pathname === '/' ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('manifest.json');

  // Network-first for navigation and local application code so updates are immediately loaded
  if (isLocalOrigin && isCodeAsset) {
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(event.request).then((cached) => {
          return cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : null);
        });
      })
    );
    return;
  }

  // All other assets (icons, images, static vendor bundles): cache-first with network fallback
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
