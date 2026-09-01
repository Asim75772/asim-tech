const CACHE_NAME = "asim-multimedia-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js",
  "./multimedia.png"
];


/* ================================
   INSTALL
================================ */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(FILES_TO_CACHE);

      })

  );

  self.skipWaiting();

});


/* ================================
   ACTIVATE
================================ */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()
      .then(keys => {

        return Promise.all(

          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))

        );

      })

  );

  self.clients.claim();

});


/* ================================
   FETCH
================================ */

self.addEventListener("fetch", event => {

  if(event.request.method !== "GET"){
    return;
  }


  event.respondWith(

    caches.match(event.request)

      .then(cachedResponse => {

        /* CACHE FIRST */

        if(cachedResponse){

          return cachedResponse;

        }


        /* NETWORK */

        return fetch(event.request)

          .then(networkResponse => {

            if(
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type === "opaque"
            ){

              return networkResponse;

            }


            const responseClone =
              networkResponse.clone();


            caches.open(CACHE_NAME)
              .then(cache => {

                cache.put(
                  event.request,
                  responseClone
                );

              });


            return networkResponse;

          })


          /* OFFLINE FALLBACK */

          .catch(() => {

            return caches.match("./index.html");

          });

      })

  );

});
