function mostrarContenido(contenidoId, botonId) {
    const contenidos = document.querySelectorAll('.contenido');
    contenidos.forEach((contenido) => {
        contenido.classList.remove('visible');
    });

    const contenidoSeleccionado = document.getElementById(contenidoId);
    contenidoSeleccionado.classList.add('visible');

    const botones = document.querySelectorAll('.botones');
    botones.forEach((boton) => {
        boton.classList.remove('seleccionado');
    });

    const botonSeleccionado = document.getElementById(botonId);
    botonSeleccionado.classList.add('seleccionado');
}


function toggleMenu() {
    const menu = document.querySelector('.menunav');
    menu.classList.toggle('active');
}
