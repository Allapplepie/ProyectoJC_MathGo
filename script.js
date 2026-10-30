// Menú adaptable para móviles
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("hamburger-boton");
    const navegacion = document.getElementById("navegacion-principal");

    if (!boton || !navegacion) return;

    boton.addEventListener("click", () => {
        const abierto = navegacion.classList.toggle("abierto");
        boton.setAttribute("aria-expanded", String(abierto));
        boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Buscamos el formulario de reserva en la página actual
    const formularioReserva = document.getElementById("formulario-reserva");

    // Si el formulario existe (porque estamos en una página de curso), activamos el evento
    if (formularioReserva) {
        formularioReserva.addEventListener("submit", function(evento) {
            // Evitamos que la página se recargue
            evento.preventDefault();

            // Capturamos el nombre del estudiante
            const nombreEstudiante = document.getElementById("nombre").value;

            // Mostramos la alerta de confirmación
            alert(`¡Hola ${nombreEstudiante}!\n\nTu solicitud para el curso ha sido recibida exitosamente. Pronto nos comunicaremos contigo.`);

            // Limpiamos el formulario
            formularioReserva.reset();
        });
    }
});
