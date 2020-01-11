importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'thecodeship-cache',
    runtime: 'runtime',
  });

workbox.routing.registerRoute(
    new RegExp('\.css'),
    workbox.strategies.cacheFirst({
        cacheName: 'thecodeship-cache-css',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 requests
                purgeOnQuotaError: true
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('_app.js$'),
    workbox.strategies.cacheFirst({
        cacheName: 'thecodeship-cache-js',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 requests
                purgeOnQuotaError: true
            })
        ]
    })
);

workbox.routing.registerRoute(
  new RegExp('\.(png|svg|jpg|jpeg)$'),
  workbox.strategies.cacheFirst({
      cacheName: 'thecodeship-cache-images',
      plugins: [
          new workbox.expiration.Plugin({
              maxAgeSeconds: 60 * 60 * 24 * 7,
              maxEntries: 50,
              purgeOnQuotaError: true
          })
      ]
  })
);