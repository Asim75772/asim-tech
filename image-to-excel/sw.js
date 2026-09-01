const CACHE_NAME = "asim-image-to-excel-v5";

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
       Do not intercept external CDN.
    */

    if(
        url.origin !==
        self.location.origin
    ){

        return;
    }


    const pathname =
        url.pathname;


    /*
       Always get latest versions of
       important application files.
    */

    const importantFile =
        pathname.endsWith(
            "/index.html"
        )
        ||
        pathname.endsWith(
            "/manifest.json"
        )
        ||
        pathname.endsWith(
            "/sw.js"
        );


    if(importantFile){

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
       Other local files:
       cache first.
    */

    event.respondWith(

        caches.match(
            request
        )
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
