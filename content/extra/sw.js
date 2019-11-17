const CACHE = 'thecodeship-cache';
const PRECACHED_URLS = [
  '/',
  '/theme/css/style.min.css',
  'theme/js/app.min.js',
  '/theme/images/email-icon.svg',
  '/theme/images/feedburner-icon.svg',
  '/theme/images/logo.png',
  '/theme/images/rss-feed-icon.svg'
];

self.addEventListener('fetch', event => {
  if(isCacheEnabledOrigin(event.request.url)) {
    return event.respondWith(networkFirst(event.request));
  }
});

/**
 * Returns requested content from network and updates the cache. On network fail, 
 * uses the cached content as a fallback if available.
 * @param {object} request 
 */
function networkFirst(request) {
  return new Promise((fulfill, reject) => {
      fetch(request).then((response) => {
        return caches.open(CACHE).then((cache) => {
          cache.put(request, response.clone());
          fulfill(response)
        })
      })
      .catch((error) => {
        fulfill(fromCache(request))
      })
  });
}

/**
 * Checks if a given URL is whitelisted for caching
 * @param {string} requestUrl 
 */
function isCacheEnabledOrigin(requestUrl) {
  const allowedOrigins = [
    'https://wwww.thecodeship.com',
    'http://127.0.0.1'
  ]

  let enableCache = false;

  allowedOrigins.forEach((origin) => {
    if(requestUrl.startsWith(origin)) {
      enableCache = true;
    }
  });

  return enableCache;
}

/**
 * Caches the app shell related resources
 */
function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      '/',
    ]);
  });
}

/**
 * Fetches a resource related to a request from the cache 
 * @param {*} request 
 */
function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}