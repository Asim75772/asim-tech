const CACHE_NAME = "asim-barcode-scanner-v2";

const APP_FILES = [
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

        event.waitUntil(

            caches
            .open(CACHE_NAME)
            .then(
                function(cache){

                    return cache.addAll(
                        APP_FILES
                    );

                }
            )
            .then(
                function(){

                    return self.skipWaiting();

                }
            )

        );

    }
);


/* =====================================================
   ACTIVATE
===================================================== */

self.addEventListener(
    "activate",
    function(event){

        event.waitUntil(

            caches
            .keys()
            .then(
                function(keys){

                    return Promise.all(

                        keys
                        .filter(
                            function(key){

                                return key !==
                                    CACHE_NAME;

                            }
                        )
                        .map(
                            function(key){

                                return caches.delete(
                                    key
                                );

                            }
                        )

                    );

                }
            )
            .then(
                function(){

                    return self.clients.claim();

                }
            )

        );

    }
);


/* =====================================================
   FETCH
===================================================== */

self.addEventListener(
    "fetch",
    function(event){

        if(
            event.request.method !== "GET"
        ){

            return;

        }


        const url =
            new URL(
                event.request.url
            );


        /*
           Do not interfere with
           camera/blob/data resources.
        */

        if(
            url.protocol === "blob:" ||
            url.protocol === "data:"
        ){

            return;

        }


        /*
           Network first.
           If network fails, use cache.
        */

        event.respondWith(

            fetch(
                event.request
            )
            .then(
                function(response){

                    /*
                       Cache only successful
                       same-origin responses.
                    */

                    if(
                        response &&
                        response.status === 200 &&
                        url.origin ===
                        self.location.origin
                    ){

                        const copy =
                            response.clone();


                        caches
                        .open(
                            CACHE_NAME
                        )
                        .then(
                            function(cache){

                                cache.put(
                                    event.request,
                                    copy
                                );

                            }
                        );

                    }


                    return response;

                }
            )
            .catch(
                function(){

                    return caches.match(
                        event.request
                    );

                }
            )

        );

    }
);


/* =====================================================
   SKIP WAITING
===================================================== */

self.addEventListener(
    "message",
    function(event){

        if(
            event.data &&
            event.data.type ===
            "SKIP_WAITING"
        ){

            self.skipWaiting();

        }

    }
);
