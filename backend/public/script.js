
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

//cambio de nombre de usuario al iniciar sesion
document.addEventListener("DOMContentLoaded", () => {
    const btnPerfil = document.getElementById("btn-perfil");
    if (!btnPerfil) return; // Si la página no tiene header, no hace nada

    const usuarioGuardado = localStorage.getItem("usuarioMathGo");

    // --- 1. LÓGICA DE RUTAS (Para que funcione en carpetas y en la raíz) ---
    const enSubcarpeta = window.location.pathname.includes("aulas") || 
                         window.location.pathname.includes("programasCurso") || 
                         window.location.pathname.includes("recursosInfo");
    const rutaBase = enSubcarpeta ? "../" : "";

    if (usuarioGuardado) {
        // --- 2. SI HAY SESIÓN INICIADA ---
        const usuario = JSON.parse(usuarioGuardado);
        btnPerfil.textContent = `Hola, ${usuario.nombre}`;
        
        // Creamos el menú desplegable "por detrás" y lo insertamos en el HTML
        const contenedor = document.createElement("div");
        contenedor.className = "user-menu-container";
        
        // Envolvemos el botón en el contenedor
        btnPerfil.parentNode.insertBefore(contenedor, btnPerfil);
        contenedor.appendChild(btnPerfil);

        // Creamos las opciones del menú
        const dropdown = document.createElement("div");
        dropdown.id = "dropdown-perfil";
        dropdown.className = "dropdown-menu";
        dropdown.innerHTML = `
            <a href="${rutaBase}subscripciones.html">Mis Cursos</a>
            <a href="#" onclick="cerrarSesion(event)">Cerrar Sesión</a>
        `;
        contenedor.appendChild(dropdown);

        // Lógica para abrir/cerrar el menú al hacer clic
        btnPerfil.addEventListener("click", (e) => {
            e.preventDefault();
            dropdown.classList.toggle("show");
        });

        // Si hace clic fuera del menú, se cierra
        document.addEventListener("click", (e) => {
            if (!contenedor.contains(e.target)) {
                dropdown.classList.remove("show");
            }
        });

    } else {
        // --- 3. SI NO HAY SESIÓN (VISITANTE) ---
        btnPerfil.textContent = "Ingresar";
        btnPerfil.href = rutaBase + "login.html"; 
    }
});

// --- 4. FUNCIÓN PARA CERRAR SESIÓN ---
function cerrarSesion(evento) {
    if (evento) evento.preventDefault(); 
    localStorage.removeItem("usuarioMathGo"); 
    localStorage.removeItem("tokenMathGo");
    
    // Detectamos la ruta para devolverlo al index correcto
    const enSubcarpeta = window.location.pathname.includes("aulas") || 
                         window.location.pathname.includes("programasCurso") || 
                         window.location.pathname.includes("recursosInfo");
    window.location.href = enSubcarpeta ? "../index.html" : "index.html";
}


// FORMULARIO DE RESERVA (LIBRE ACCESO)

document.addEventListener("DOMContentLoaded", () => {
    const formReserva = document.getElementById("formulario-reserva");

    if (formReserva) {
        const usuarioGuardado = localStorage.getItem("usuarioMathGo");
        let usuarioLogueado = null;

        // 1. Si YA hay sesión, autocompletamos sus datos
        if (usuarioGuardado) {
            usuarioLogueado = JSON.parse(usuarioGuardado);
            const inputNombre = document.getElementById("nombre");
            const inputEmail = document.getElementById("email");
            
            if (inputNombre) inputNombre.value = usuarioLogueado.nombre;
            if (inputEmail) inputEmail.value = usuarioLogueado.email || usuarioLogueado.correo; 
        }

        // 2. Cualquiera puede enviar el formulario
        formReserva.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            // Capturamos los datos (los haya escrito él o estén autocompletados)
            const datos = {
    nombre: document.getElementById("nombre-reserva").value,
    email: document.getElementById("email-reserva").value,
    telefono: document.getElementById("telefono-reserva").value
};
                          
                       

            console.log("datos antes de validar:", datos);
            if (datos.nombre.trim() === "" || datos.email.trim() === "" || datos.telefono.trim() === "") {
    alert("Por favor, llena todos los campos antes de enviar la reserva.");
    return; // Esto detiene todo y no deja que se envíe vacío
}

            try {
                const respuesta = await fetch('/api/usuarios/reserva', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                });

                if (respuesta.ok) {
                    alert("¡Reserva solicitada con éxito! Nos pondremos en contacto contigo pronto.");
                    formReserva.reset();
                    
                    // Si el usuario estaba logueado, volvemos a llenar sus datos porque el reset los borra
                    if (usuarioLogueado) {
                        document.getElementById("nombre").value = usuarioLogueado.nombre;
                        document.getElementById("email").value = usuarioLogueado.email || usuarioLogueado.correo;
                    }
                } else {
                    alert("Hubo un error al procesar la reserva.");
                }
            } catch (error) {
                console.error(error);
                alert("Error de conexión. Revisa que el servidor esté encendido.");
            }
        });
    }
});

// ==========================================
// FORMULARIO DE CONTACTO / DUDAS (index.html)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.getElementById("formulario-contacto");

    if (formContacto) {
        formContacto.addEventListener("submit", async (e) => {
            e.preventDefault(); 

            // Capturamos el curso seleccionado de los radio buttons
            const cursoSeleccionado = document.querySelector('input[name="curso"]:checked');

            const datos = {
                nombre: document.getElementById("nombre-contacto").value,
                email: document.getElementById("correo-contacto").value, // Tu input se llama "correo"
                edad: document.getElementById("edad").value,
                curso: cursoSeleccionado ? cursoSeleccionado.value : "No especificado",
                mensaje: document.getElementById("mensaje").value
            };

            try {
                const respuesta = await fetch('/api/usuarios/contacto', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                });

                if (respuesta.ok) {
                    alert("¡Gracias por escribirnos! Tu mensaje ha sido enviado.");
                    formContacto.reset(); 
                } else {
                    alert("Hubo un error al enviar el mensaje.");
                }
            } catch (error) {
                console.error(error);
                alert("Error de conexión con el servidor. Revisa que esté encendido.");
            }
        });
    }
});