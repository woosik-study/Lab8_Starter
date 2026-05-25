// sw.js - This file needs to be in the root of the directory to work,
//         so do not move it next to the other scripts

const CACHE_NAME = 'lab-8-starter';

// B6. The recipe URLs to pre-cache when the ServiceWorker installs.
//     We can't import RECIPE_URLS from main.js (different scope), so we
//     redeclare them here.
const RECIPE_URLS = [
  'https://adarsh249.github.io/Lab8-Starter/recipes/1_50-thanksgiving-side-dishes.json',
  'https://adarsh249.github.io/Lab8-Starter/recipes/2_roasting-turkey-breast-with-stuffing.json',
  'https://adarsh249.github.io/Lab8-Starter/recipes/3_moms-cornbread-stuffing.json',
  'https://adarsh249.github.io/Lab8-Starter/recipes/4_50-indulgent-thanksgiving-side-dishes-for-any-holiday-gathering.json',
  'https://adarsh249.github.io/Lab8-Starter/recipes/5_healthy-thanksgiving-recipe-crockpot-turkey-breast.json',
  'https://adarsh249.github.io/Lab8-Starter/recipes/6_one-pot-thanksgiving-dinner.json',
];

// Installs the service worker. Feed it some initial URLs to cache
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // B6. Add all of the recipe URLs to the cache when the ServiceWorker installs
      return cache.addAll(RECIPE_URLS);
    })
  );
});

// Activates the service worker
self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

// Intercept fetch requests and serve from cache when possible (Cache-First strategy)
self.addEventListener('fetch', function (event) {
  // B7. Respond to the event by opening the cache using CACHE_NAME
  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      // B8. If the request is in the cache, return the cached version.
      //     Otherwise fetch the resource, add it to the cache, and return
      //     the network response.
      return cache.match(event.request).then(function (cachedResponse) {
        if (cachedResponse) {
          // Found in cache — return it directly
          return cachedResponse;
        }

        // Not in cache — fetch from network, cache it, then return it
        return fetch(event.request).then(function (networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});