function mostrarContenido(id, botonId) {
    const contenidos = document.querySelectorAll('.contenido');
    contenidos.forEach((contenido) => contenido.classList.remove('visible'));


    document.getElementById(id).classList.add('visible');

    const botones = document.querySelectorAll('.botones');
    botones.forEach((boton) => boton.classList.remove('activo'));

    document.getElementById(botonId).classList.add('activo');
}