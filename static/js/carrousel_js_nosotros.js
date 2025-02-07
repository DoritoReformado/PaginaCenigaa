let indiceActual = 0;
let inicioX = 0;
let finX = 0;

const contenedorCarrusel = document.getElementById('contenedor-carrusel');
const elementos = document.querySelectorAll('.elemento-carrusel');
const totalElementos = elementos.length;

contenedorCarrusel.addEventListener('touchstart', (evento) => {
    inicioX = evento.touches[0].clientX;
});

contenedorCarrusel.addEventListener('touchend', (evento) => {
    finX = evento.changedTouches[0].clientX;
    manejarDeslizamiento();
});

function manejarDeslizamiento() {
    if (inicioX > finX + 50) {
        // Deslizar hacia la izquierda (siguiente)
        moverCarrusel(1);
    } else if (inicioX < finX - 50) {
        // Deslizar hacia la derecha (anterior)
        moverCarrusel(-1);
    }
}

function moverCarrusel(direccion) {
    indiceActual += direccion;

    if (indiceActual < 0) {
        indiceActual = totalElementos - 1;
    } else if (indiceActual >= totalElementos) {
        indiceActual = 0;
    }

    document.querySelector('.contenedor-carrusel').style.transform = `translateX(-${indiceActual * 100}%)`;
}
