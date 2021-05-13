
self.addEventListener('fetch', event => {

    ///En este ekjemplo en el img del html esta mal el nombre del aimagen , esto es para simular 
    //que no encontro algo
        
    //Frecordar que en request vienen las respuestas y una parte del json es un Ok: tru/false para indicar si la misma fallo o no

    const resp = fetch ( event.request )
                .then ( respu => {

                    return respu.ok ? respu : fetch('img/main.jpg')

                    //este es el condicional ternario 
                    // [comdicion Logica] ? [ verdadero] : [ falso]
                });

    event.respondWith ( resp );




    // //Tercer Ejemplo Interceptar imgaen y cambiarla

    // if ( event.request.url.includes('main.jpg')){

    //     const nuevaFoto=fetch('img/main-patas-arriba.jpg');

    //     event.respondWith( nuevaFoto);
    // }


    //Primer ejemplo de como interceptar fetch
    // if ( event.request.url.includes('.jpg')){
        
        // console.log(event.request.url)

        // //varias formas de pasarle al fetch para que devuelva, en este caso la imagen
        // //const fotoReq= fetch('img/main.jpg');
        // // const fotoReq= fetch(event.request.url);
        // const fotoReq= fetch(event.request);

        // event.respondWith( fotoReq);  ///esta accion hace que responda el fetch el serviceWorker con lo que quiero Yo
        
    // }
    
    // event.respondWith(  fetch( event.request ));
    //Segundo Ejemplo
    //Reemplazo lo que viene del archivo style.css por lo suqe Yo Quiero
    
    // if ( event.request.url.includes('style.css')) {
    
    //     const respuesta= new Response(`
    //         body {
    //             background-color: red;
    //             color: pink;
    //         }
    //     `, {
    //         headers: {
    //             'Content-Type': 'text/css'                    
    //         }
    //     });
    
    //     event.respondWith( respuesta);
    
    // }
})