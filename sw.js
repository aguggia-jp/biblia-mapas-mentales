// Service Worker · Mapas Bíblicos
const CACHE_NAME = 'biblia-mapas-v2';
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./mapa-gen/",
  "./mapa-gen/index.html",
  "./mapa-exo/",
  "./mapa-exo/index.html",
  "./mapa-lev/",
  "./mapa-lev/index.html",
  "./mapa-num/",
  "./mapa-num/index.html",
  "./mapa-deu/",
  "./mapa-deu/index.html",
  "./mapa-jos/",
  "./mapa-jos/index.html",
  "./mapa-jue/",
  "./mapa-jue/index.html",
  "./mapa-rut/",
  "./mapa-rut/index.html",
  "./mapa-1sa/",
  "./mapa-1sa/index.html",
  "./mapa-2sa/",
  "./mapa-2sa/index.html",
  "./mapa-1re/",
  "./mapa-1re/index.html",
  "./mapa-2re/",
  "./mapa-2re/index.html",
  "./mapa-1cr/",
  "./mapa-1cr/index.html",
  "./mapa-2cr/",
  "./mapa-2cr/index.html",
  "./mapa-esd/",
  "./mapa-esd/index.html",
  "./mapa-neh/",
  "./mapa-neh/index.html",
  "./mapa-est/",
  "./mapa-est/index.html",
  "./mapa-job/",
  "./mapa-job/index.html",
  "./mapa-sal/",
  "./mapa-sal/index.html",
  "./mapa-pro/",
  "./mapa-pro/index.html",
  "./mapa-ecc/",
  "./mapa-ecc/index.html",
  "./mapa-cnt/",
  "./mapa-cnt/index.html",
  "./mapa-isa/",
  "./mapa-isa/index.html",
  "./mapa-jer/",
  "./mapa-jer/index.html",
  "./mapa-lam/",
  "./mapa-lam/index.html",
  "./mapa-eze/",
  "./mapa-eze/index.html",
  "./mapa-dan/",
  "./mapa-dan/index.html",
  "./mapa-oso/",
  "./mapa-oso/index.html",
  "./mapa-joe/",
  "./mapa-joe/index.html",
  "./mapa-amo/",
  "./mapa-amo/index.html",
  "./mapa-abd/",
  "./mapa-abd/index.html",
  "./mapa-jon/",
  "./mapa-jon/index.html",
  "./mapa-mic/",
  "./mapa-mic/index.html",
  "./mapa-nah/",
  "./mapa-nah/index.html",
  "./mapa-hab/",
  "./mapa-hab/index.html",
  "./mapa-sof/",
  "./mapa-sof/index.html",
  "./mapa-hag/",
  "./mapa-hag/index.html",
  "./mapa-zac/",
  "./mapa-zac/index.html",
  "./mapa-mal/",
  "./mapa-mal/index.html",
  "./mapa-mat/",
  "./mapa-mat/index.html",
  "./mapa-mar/",
  "./mapa-mar/index.html",
  "./mapa-luc/",
  "./mapa-luc/index.html",
  "./mapa-jua/",
  "./mapa-jua/index.html",
  "./mapa-hec/",
  "./mapa-hec/index.html",
  "./mapa-rom/",
  "./mapa-rom/index.html",
  "./mapa-1co/",
  "./mapa-1co/index.html",
  "./mapa-2co/",
  "./mapa-2co/index.html",
  "./mapa-gal/",
  "./mapa-gal/index.html",
  "./mapa-efe/",
  "./mapa-efe/index.html",
  "./mapa-fil/",
  "./mapa-fil/index.html",
  "./mapa-col/",
  "./mapa-col/index.html",
  "./mapa-1te/",
  "./mapa-1te/index.html",
  "./mapa-2te/",
  "./mapa-2te/index.html",
  "./mapa-1ti/",
  "./mapa-1ti/index.html",
  "./mapa-2ti/",
  "./mapa-2ti/index.html",
  "./mapa-tito/",
  "./mapa-tito/index.html",
  "./mapa-flm/",
  "./mapa-flm/index.html",
  "./mapa-heb/",
  "./mapa-heb/index.html",
  "./mapa-sant/",
  "./mapa-sant/index.html",
  "./mapa-1pe/",
  "./mapa-1pe/index.html",
  "./mapa-2pe/",
  "./mapa-2pe/index.html",
  "./mapa-1jn/",
  "./mapa-1jn/index.html",
  "./mapa-2jn/",
  "./mapa-2jn/index.html",
  "./mapa-3jn/",
  "./mapa-3jn/index.html",
  "./mapa-jud/",
  "./mapa-jud/index.html",
  "./mapa-apo/",
  "./mapa-apo/index.html"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
