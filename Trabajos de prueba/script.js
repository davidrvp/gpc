function mostrarContenido(id) {
    // Ocultar todos los contenidos
    const contenidos = document.querySelectorAll('.contenido');
    contenidos.forEach((contenido) => {
        contenido.classList.remove('visible');
    });

    // Mostrar el contenido seleccionado
    const contenidoSeleccionado = document.getElementById(id);
    contenidoSeleccionado.classList.add('visible');
}