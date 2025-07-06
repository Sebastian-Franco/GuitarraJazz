let ultimaPos = 0;
let ultimaHora = null;
const velocidad = 25; // píxeles por segundo

function scrollLento(timestamp) {
    if (ultimaHora === null) {
        ultimaHora = timestamp;
    }

    const deltaTiempo = (timestamp - ultimaHora) / 1000; // segundos
    const desplazamiento = velocidad * deltaTiempo;

    ultimaPos += desplazamiento;
    window.scrollTo(0, ultimaPos);
    ultimaHora = timestamp;

    // detener si llegó al fondo
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
        requestAnimationFrame(scrollLento);
    }
}

window.onload = () => {
    requestAnimationFrame(scrollLento);
};


