//obtener acceso a la cámara
navigator.mediaDevices.getUserMedia( { video: true } )
    .then(function(stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.error("Error al acceder a la camara: " + err);
    });