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
