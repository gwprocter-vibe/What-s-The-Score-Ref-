// What's The Score Ref - 100% Offline Service Worker
const CACHE_NAME = 'whatsthescoreref-v137';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/tailwind.min.css',
  './css/style.css',
  './css/high-contrast.css',
  './fonts/ChakraPetch-SemiBold.woff2',
  './fonts/ChakraPetch-Bold.woff2',
  './js/app.js',
  './js/timer.js',
  './js/score.js',
  './js/hardware.js',
  './js/rules.js',
  './js/prematch.js',
  './js/report.js',
  './js/lockMode.js',
  './js/storage.js',
  './js/tactics.js',
  './icons/favicon.svg',
  './icons/confused_ref.png',
  './icons/apple-touch-icon.png',
  './icons/logo-96.png',
  './icons/logo-192.png',
  './icons/logo-512.png'
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

// Listen for SKIP_WAITING message from page (guarded against mid-match reload in app.js)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isCodeAsset = event.request.mode === 'navigate' ||
    url.pathname === '/' ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('manifest.json');

  // Network-first for navigation and local application code, with query-agnostic offline cache fallback
  if (isCodeAsset) {
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(async () => {
        const exactCached = await caches.match(event.request);
        if (exactCached) return exactCached;

        const ignoreSearchCached = await caches.match(event.request, { ignoreSearch: true });
        if (ignoreSearchCached) return ignoreSearchCached;

        if (event.request.mode === 'navigate') {
          const indexCached = await caches.match('./index.html', { ignoreSearch: true });
          if (indexCached) return indexCached;
        }
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      })
    );
    return;
  }

  // Static binary assets (fonts, icons, images): cache-first with network fallback
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
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
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
