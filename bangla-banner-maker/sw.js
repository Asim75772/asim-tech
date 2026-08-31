const CACHE_NAME = "asim-tech-banner-maker-v2";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js"
];


self.addEventListener(
  "install",
  event => {

    event.waitUntil(

      caches.open(CACHE_NAME)
        .then(cache => {

          return cache.addAll(APP_FILES);

        })

    );

    self.skipWaiting();

  }
);


self.addEventListener(
  "activate",
  event => {

    event.waitUntil(

      caches.keys()
        .then(keys => {

          return Promise.all(

            keys
              .filter(
                key => key !== CACHE_NAME
              )
              .map(
                key => caches.delete(key)
              )

          );

        })

    );

    self.clients.claim();

  }
);


self.addEventListener(
  "fetch",
  event => {

    if(
      event.request.method !== "GET"
    ){
      return;
    }

    event.respondWith(

      caches.match(
        event.request
      )
      .then(cached => {

        if(cached){
          return cached;
        }

        return fetch(
          event.request
        )
        .then(response => {

          return response;

        })
        .catch(() => {

          return caches.match(
            "./index.html"
          );

        });

      })

    );

  }
);
