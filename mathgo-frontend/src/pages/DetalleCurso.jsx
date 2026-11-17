import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const DetalleCurso = () => {
    const { idCurso } = useParams();
    
    // Estados para capturar los datos del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    
    // Estados para mostrar mensajes y estado de carga
    const [mensaje, setMensaje] = useState('');
    const [cargando, setCargando] = useState(false);

    // Información estática del curso (luego se podría traer de Mongo)
    const infoCursos = {
        refuerzo: { titulo: "Sesiones de refuerzo", duracion: "4 semanas", precio: "$122.000", descripcion: "Acompañamiento personalizado." },
        fundamentos: { titulo: "Fundamentos (Nivel 1)", duracion: "6 semanas", precio: "$150.000", descripcion: "Repasa conceptos esenciales." },
        basicas: { titulo: "Matemáticas básicas (Nivel 2)", duracion: "8 semanas", precio: "$200.000", descripcion: "Practica operaciones." },
        avanzadas: { titulo: "Matemáticas avanzadas (Nivel 3)", duracion: "10 semanas", precio: "$350.000", descripcion: "Mayor complejidad." },
        avanzadas2: { titulo: "Matemáticas avanzadas II", duracion: "12 semanas", precio: "$350.000", descripcion: "Nivel universitario." }
    };

    const curso = infoCursos[idCurso] || infoCursos.refuerzo;

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        setCargando(true);
        setMensaje('');

        try {
            // Enviamos los datos al backend (a la ruta que programamos hace tiempo)
            const respuesta = await fetch('https://mathgo-backend-vw2g.onrender.com
/api/usuarios/reserva', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    nombre, 
                    email, 
                    telefono,
                    curso: curso.titulo // Enviamos también el nombre del curso
                })
            });

            if (respuesta.ok) {
                setMensaje("¡Reserva enviada con éxito! Nos pondremos en contacto contigo pronto.");
                setNombre('');
                setEmail('');
                setTelefono('');
            } else {
                setMensaje("Hubo un error al procesar tu reserva. Intenta de nuevo.");
            }
        } catch (error) {
            setMensaje("Error de conexión. Revisa que el servidor esté encendido.");
        } finally {
            setCargando(false);
        }
    };

    return (
        <section aria-labelledby="titulo-curso" className="contenedor-detalle-curso">
            <div className="contenedor-volver">
                <Link to="/programas" className="enlace-volver">← Volver a programas</Link>
            </div>

            <h1 id="titulo-curso">{curso.titulo}</h1>
            
            <div className="cuadro-detalles-curso">
                <h2>Detalles del Curso</h2>
                <ul>
                    <li><strong>Duración:</strong> {curso.duracion}</li>
                    <li><strong>Precio:</strong> {curso.precio}</li>
                    <li><strong>Descripción:</strong> {curso.descripcion}</li>
                </ul>
            </div>

            <div className="contenedor-formulario-curso">
                <h2>Solicitar o Reservar Curso</h2>
                <p>Déjanos tus datos y nos pondremos en contacto contigo para concretar el pago y los horarios.</p>
                
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Datos del estudiante</legend>
                        
                        <label htmlFor="nombre">Nombre completo:</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required 
                            placeholder="Tu nombre aquí" 
                        />

                        <label htmlFor="email">Correo electrónico:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            placeholder="correo@ejemplo.com" 
                        />

                        <label htmlFor="telefono">Teléfono de contacto:</label>
                        <input 
                            type="tel" 
                            id="telefono" 
                            value={telefono} 
                            onChange={(e) => setTelefono(e.target.value)} 
                            required 
                            placeholder="Ej: +57 300 123 4567" 
                        />

                        {/* Mensaje de éxito o error */}
                        {mensaje && <p className={mensaje.includes("éxito") ? "mensaje-exito" : "mensaje-error"}>{mensaje}</p>}

                        <button type="submit" className="boton-ver-recursos btn-formulario" disabled={cargando}>
                            {cargando ? "Enviando..." : "Solicitar Reserva"}
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default DetalleCurso;