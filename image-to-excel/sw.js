
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
            request.method !==
            "GET"
        ){

            return;

        }


        /*
           For app files:
           Cache first.
        */

        if(
            new URL(
                request.url
            ).origin ===
            self.location.origin
        ){

            event.respondWith(

                caches
                .match(
                    request
                )
                .then(
                    function(cached){

                        if(cached){

                            return cached;

                        }


                        return fetch(
                            request
                        )
                        .then(
                            function(response){

                                if(
                                    response &&
                                    response.status === 200
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
                                                request,
                                                copy
                                            );

                                        }
                                    );

                                }


                                return response;

                            }
                        );

                    }
                )

            );


            return;

        }


        /*
           External libraries:
           Network first.

           This allows the latest CDN
           library to load normally.
        */

        event.respondWith(

            fetch(
                request
            )
            .catch(
                function(){

                    return caches.match(
                        request
                    );

                }
            )

        );

    }
);
