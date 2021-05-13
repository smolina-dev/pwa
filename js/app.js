

///Verifico si el navegador acepta ServioceWorker
if ( navigator.serviceWorker ) {

    // console.log('Acepta SW!!!');

    //instalo el SW

    navigator.serviceWorker.register('/sw.js');

}