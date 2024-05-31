/**
 * Event listener for the 'install' event.
 * This event is triggered when the service worker is installed.
 * @event install
 * @memberof ServiceWorkerGlobalScope
 * @param {ExtendableEvent} event - The 'install' event object.
 */
self.addEventListener('install', function(event) {
  console.log('Service Worker installed');
});

/**
 * Event listener for the 'activate' event.
 * This event is triggered when the service worker is activated.
 * @event activate
 * @memberof ServiceWorkerGlobalScope
 * @param {ExtendableEvent} event - The 'activate' event object.
 */
self.addEventListener('activate', function(event) {
  console.log('Service Worker activated');
});

/**
 * Event listener for the 'fetch' event.
 * This event is triggered for every network request made by the page.
 * It attempts to serve the request from the cache first, and if not found, fetches it from the network.
 * @event fetch
 * @memberof ServiceWorkerGlobalScope
 * @param {FetchEvent} event - The 'fetch' event object.
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      /**
       * Respond with the cached response if found, otherwise fetch from the network.
       * @function respondWith
       * @param {Request} request - The network request object.
       * @returns {Promise<Response>} A promise that resolves with the cached response or the network response.
       */
      return response || fetch(event.request);
    })
  );
});
