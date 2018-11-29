if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}

self.addEventListener('install', function(event) {
     event.waitUntil(
       caches.open('restaurant-reviews-v1').then(function(cache) {
         return cache.addAll([
          '/',
          '/index.html',
          '/restaurant.html',
          '/sw.js',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/css/styles.css',
          '/img/1_1x.webp',
          '/img/1_2x.webp',
          '/img/1_3x.webp',
          '/img/2_1x.webp',
          '/img/2_2x.webp',
          '/img/2_3x.webp',
          '/img/3_1x.webp',
          '/img/3_2x.webp',
          '/img/3_3x.webp',
          '/img/4_1x.webp',
          '/img/4_2x.webp',
          '/img/4_3x.webp',
          '/img/5_1x.webp',
          '/img/5_2x.webp',
          '/img/5_3x.webp',
          '/img/6_1x.webp',
          '/img/6_2x.webp',
          '/img/6_3x.webp',
          '/img/7_1x.webp',
          '/img/7_2x.webp',
          '/img/7_3x.webp',
          '/img/8_1x.webp',
          '/img/8_2x.webp',
          '/img/8_3x.webp',
          '/img/9_1x.webp',
          '/img/9_2x.webp',
          '/img/9_3x.webp',
          '/img/10_1x.webp',
          '/img/10_2x.webp',
          '/img/10_3x.webp'
         ]);
       })
     );
   });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) {
      if (response.status === 404) {
        return new Response('404: Page not found');
      }
      return response;
    }).catch(function() {
      return new Response('You have no internet connection');
    })
  );
});
