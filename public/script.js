
document.addEventListener("DOMContentLoaded", () => {

  
    // 1. MENÚ DE NAVEGACIÓN


    const botonMenu = document.getElementById("hamburger-boton");
    const navegacion = document.getElementById("navegacion-principal");

    if (botonMenu && navegacion) {
        botonMenu.addEventListener("click", () => {
            const abierto = navegacion.classList.toggle("abierto");

            botonMenu.setAttribute("aria-expanded", String(abierto));
            botonMenu.setAttribute(
                "aria-label",
                abierto ? "Cerrar menú" : "Abrir menú"
            );
        });
    }

    // 2. FORMULARIO DE RESERVA
 
    const formularioReserva = document.getElementById("formulario-reserva");

    if (formularioReserva) {
        const campoNombre = formularioReserva.querySelector("#nombre");

        formularioReserva.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nombre = campoNombre?.value.trim();

            if (!nombre) {
                alert("Por favor, escribe tu nombre.");
                campoNombre?.focus();
                return;
            }

            alert(
                `¡Hola ${nombre}!\n\n` +
                "Tu solicitud para el curso ha sido recibida exitosamente. " +
                "Pronto nos comunicaremos contigo."
            );

            formularioReserva.reset();
        });
    }
    // 3. ANIMACIÓN DE TARJETAS
   

    const tarjetasAnimadas = document.querySelectorAll(".tarjeta-recursos");

    tarjetasAnimadas.forEach((tarjeta, index) => {
        tarjeta.classList.add("animar-entrada");

        tarjeta.style.animationDelay = `${index * 0.1}s`;
    });
   
    // 4. BUSCADOR DE VIDEOS
  

    const buscadorVideos = document.getElementById("buscador-videos");

    if (buscadorVideos) {

        const tarjetas = document.querySelectorAll(".tarjeta-recurso-link");

        // Normalizar texto para ignorar mayúsculas y tildes
        const normalizarTexto = (texto) => {
            return texto
                .toLocaleLowerCase("es")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim();
        };

        buscadorVideos.addEventListener("input", () => {

            const textoBusqueda = normalizarTexto(buscadorVideos.value);

            tarjetas.forEach((tarjeta) => {

                const contenido = normalizarTexto(tarjeta.textContent || "");

                const coincide = contenido.includes(textoBusqueda);

                tarjeta.style.display = coincide ? "" : "none";
            });
        });
    }

});
