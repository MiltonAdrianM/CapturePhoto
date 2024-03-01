
function tomarFoto() {
    // se obtiene la referencia al elemento
    let video = document.getElementById('video');

    //Obtener el canvas y establece su tamaño
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    //Se obtiene el valor del campo id de tipo number
    let nombreImagen = document.getElementById('nombreImagen').value;

    //convierte el canvas en imagen y se guarda localmente
    let dataURL = canvas.toDataURL('image/jpeg');
    

    let enlace = document.createElement('a');
    enlace.href = dataURL;
    console.log(dataURL)
    enlace.download = nombreImagen + ' .jpg';
    enlace.click();    
    
    //liberar camara
    video.pause();
    

}

