let offlinHTML = 'Youre offline!';

self.addEventListener("fetch", event => {
  console.log(`[ServiceWorker] Fetch ${event.request.url}`)
});

self.addEventListener("fetch", event => {
  event.respondWith(
      fetch(event.request)
      .catch( () => new Response(offlineHTML, { headers : {"Content-Type": "text/html;charset=utf-8"}}))
  );
});