function mostrarMensaje() {
    var container = document.getElementById('main-container');
    container.style.opacity = '0';

    setTimeout(function () {
        container.style.display = 'none';

        var mensajeContainer = document.createElement('div');
        mensajeContainer.classList.add('container');

        var mensaje = document.createElement('p');
        mensaje.innerText = "Papá, quiero expresarte cuánto te quiero y aprecio. Eres una persona admirable y mereces lo mejor, gracias por el esfuerzo y dedicación que le has dado a tu familia, tienes mucho por delante, no te rindas. ¡Feliz Cumpleaños!";

        mensajeContainer.appendChild(mensaje);
        document.body.appendChild(mensajeContainer);
    }, 500);
    var cancion = new Audio('../rsc/song.mp3');
    cancion.play();
}
