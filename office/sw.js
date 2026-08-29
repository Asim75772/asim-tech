const CACHE_NAME = "asim-office-v7";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

/* INSTALL */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))

  );

  self.skipWaiting();

});


/* ACTIVATE */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))

      );

    })

  );

  self.clients.claim();

});


/* FETCH */

self.addEventListener("fetch", event => {

  const request = event.request;

  /* Only handle GET */

  if(request.method !== "GET"){
    return;
  }

  event.respondWith(

    fetch(request)

      .then(response => {

        /*
         * Save a copy of successful
         * same-origin files.
         */

        if(
          response &&
          response.status === 200 &&
          response.type === "basic"
        ){

          const copy = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {

              cache.put(request, copy);

            });

        }

        return response;

      })

      .catch(() => {

        return caches.match(request)
          .then(cached => {

            if(cached){
              return cached;
            }

            /*
             * If navigation fails,
             * return the main app.
             */

            if(request.mode === "navigate"){

              return caches.match("./index.html");

            }

            return new Response(
              "Offline",
              {
                status:503,
                headers:{
                  "Content-Type":"text/plain"
                }
              }
            );

          });

      })

  );

});
