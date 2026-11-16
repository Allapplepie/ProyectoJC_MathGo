import { useParams, Link } from 'react-router-dom';

const DetalleCurso = () => {
    // 1. Leemos qué curso se seleccionó en la URL (ej: /curso/refuerzo)
    const { idCurso } = useParams();

    // 2. Objeto con la información de cada curso
    const infoCursos = {
        refuerzo: {
            titulo: "Sesiones de refuerzo personalizadas",
            duracion: "4 semanas",
            precio: "$122.000",
            descripcion: "Acompañamiento enfocado en las dudas y necesidades de cada estudiante."
        },
        fundamentos: {
            titulo: "Fundamentos de matemáticas (Nivel 1)",
            duracion: "6 semanas",
            precio: "$150.000",
            descripcion: "Repasa conceptos esenciales y fortalece tus bases."
        },
        basicas: {
            titulo: "Matemáticas básicas (Nivel 2)",
            duracion: "8 semanas",
            precio: "$200.000",
            descripcion: "Practica operaciones y desarrolla habilidades para resolver problemas."
        },
        avanzadas: {
            titulo: "Matemáticas avanzadas (Nivel 3)",
            duracion: "10 semanas",
            precio: "$350.000",
            descripcion: "Profundiza en temas matemáticos de mayor complejidad."
        },
        avanzadas2: {
            titulo: "Matemáticas avanzadas II (Nivel Superior)",
            duracion: "12 semanas",
            precio: "$350.000",
            descripcion: "Se centra en el aprendizaje y aplicación de teorías matemáticas complejas."
        }
    };

    // 3. Seleccionamos la info del curso. Si la URL no coincide, usa "refuerzo" por defecto.
    const curso = infoCursos[idCurso] || infoCursos.refuerzo;

    return (
        <section aria-labelledby="titulo-curso" className="contenedor-detalle-curso">
            
            <div className="contenedor-volver">
                <Link to="/programas" className="enlace-volver">
                    ← Volver a la lista de programas
                </Link>
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

            {/* FORMULARIO DE RESERVA */}
            <div className="contenedor-formulario-curso">
                <h2>Solicitar o Reservar Curso</h2>
                <p>Déjanos tus datos y nos pondremos en contacto contigo para concretar el pago y los horarios.</p>
                
                <form id="formulario-reserva">
                    <fieldset>
                        <legend>Datos del estudiante</legend>
                        
                        <label htmlFor="nombre">Nombre completo:</label>
                        <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre aquí" />

                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required placeholder="correo@ejemplo.com" />

                        <label htmlFor="telefono">Teléfono de contacto:</label>
                        <input type="tel" id="telefono" name="telefono" required placeholder="Ej: +57 300 123 4567" />

                        {/* Le agregamos una clase al botón para estilos */}
                        <button type="submit" className="boton-ver-recursos btn-formulario">Solicitar Reserva</button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default DetalleCurso;