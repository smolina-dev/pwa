
self.addEventListener('fetch', event => {
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
    
    if ( event.request.url.includes('style.css')) {
    
        const respuesta= new Response(`
            body {
                background-color: red;
                color: pink;
            }
        `, {
            headers: {
                'Content-Type': 'text/css'                    
            }
        });
    
        event.respondWith( respuesta);
    
    }
})