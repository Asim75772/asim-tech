const CACHE_NAME = "asim-image-to-excel-v4";


const APP_SHELL = [
    "./",
    "./index.html",
    "./manifest.json"
];


/* =====================================================
   INSTALL
===================================================== */

self.addEventListener(
"install",
function(event){

    self.skipWaiting();

    event.waitUntil(

        caches.open(
            CACHE_NAME
        )
        .then(
            cache =>
            cache.addAll(
                APP_SHELL
            )
        )

    );

});


/* =====================================================
   ACTIVATE
===================================================== */

self.addEventListener(
"activate",
function(event){

    event.waitUntil(

        caches.keys()
        .then(
            keys =>

            Promise.all(

                keys
                .filter(
                    key =>
                    key !== CACHE_NAME
                )
                .map(
                    key =>
                    caches.delete(key)
                )

            )

        )
        .then(
            () =>
            self.clients.claim()
        )

    );

});


/* =====================================================
   FETCH
===================================================== */

self.addEventListener(
"fetch",
function(event){

    const request =
    event.request;


    /*
       Only handle GET requests.
    */

    if(
        request.method !== "GET"
    ){

        return;
    }


    const url =
    new URL(
        request.url
    );


    /*
       For our own HTML files:
       NETWORK FIRST.

       This is important because
       GitHub Pages should show
       the newest index.html.
    */

    if(
        url.origin ===
        self.location.origin
        &&
        (
            url.pathname.endsWith(
                "/index.html"
            )
            ||
            url.pathname.endsWith(
                "/manifest.json"
            )
        )
    ){

        event.respondWith(

            fetch(
                request,
                {
                    cache:"no-store"
                }
            )
            .then(
                response => {

                    if(
                        response &&
                        response.ok
                    ){

                        const copy =
                        response.clone();

                        caches.open(
                            CACHE_NAME
                        )
                        .then(
                            cache =>
                            cache.put(
                                request,
                                copy
                            )
                        );

                    }

                    return response;

                }
            )
            .catch(
                () =>
                caches.match(
                    request
                )
            )

        );

        return;
    }


    /*
       CDN files:
       let browser fetch them normally.
       This prevents old library files
       from breaking the application.
    */

    if(
        url.origin !==
        self.location.origin
    ){

        return;
    }


    /*
       Other same-origin files:
       Cache first with network fallback.
    */

    event.respondWith(

        caches.match(request)
        .then(
            cached => {

                if(cached){

                    return cached;
                }

                return fetch(
                    request
                )
                .then(
                    response => {

                        if(
                            response &&
                            response.ok
                        ){

                            const copy =
                            response.clone();

                            caches.open(
                                CACHE_NAME
                            )
                            .then(
                                cache =>
                                cache.put(
                                    request,
                                    copy
                                )
                            );

                        }

                        return response;

                    }
                );

            }
        )

    );

});
