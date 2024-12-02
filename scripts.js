function mostrarCargando(callback, id = null) {
    // Mostrar el spinner de carga
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'flex';

    // Esperar 1.5 segundos y luego ejecutar la acción
    setTimeout(() => {
        spinner.style.display = 'none';
        callback(id); // Ejecuta la función pasada como argumento
    }, 500);
}

function toggleVacante(id) {
    mostrarCargando(() => {
        // Ocultar todos los botones de las tarjetas
        const toggleButtons = document.querySelectorAll('.toggle-button');
        toggleButtons.forEach(button => button.style.display = 'none');

        // Mostrar solo la tarjeta correspondiente
        const vacanteCard = document.getElementById(id);
        vacanteCard.style.display = 'block';
    });
}

function closeVacante(id) {
    mostrarCargando(() => {
        // Ocultar la tarjeta abierta
        const vacanteCard = document.getElementById(id);
        vacanteCard.style.display = 'none';

        // Mostrar todos los botones nuevamente
        const toggleButtons = document.querySelectorAll('.toggle-button');
        toggleButtons.forEach(button => button.style.display = 'block');
    });
}

function mostrarMenuContacto() {
    mostrarCargando(() => {
        // Oculta las vacantes y muestra el menú de contacto
        document.querySelector('.vacantes-container').style.display = 'none';
        document.getElementById('menu-contacto').style.display = 'block';
    });
}

function cerrarMenuContacto() {
    mostrarCargando(() => {
        // Oculta el menú de contacto y vuelve a mostrar las vacantes
        document.getElementById('menu-contacto').style.display = 'none';
        document.querySelector('.vacantes-container').style.display = 'flex';
    });
}
