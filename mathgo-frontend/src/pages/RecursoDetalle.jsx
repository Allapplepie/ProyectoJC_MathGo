import { useParams, Link } from 'react-router-dom';

const RecursoDetalle = () => {
    const { tipoRecurso } = useParams();

    // 1. Definimos los datos (nombre y descripción de cada sección)
    const infoRecursos = {
        videos: { titulo: "🎥 Videos educativos", descripcion: "Explora nuestra biblioteca de videos para repasar los conceptos más importantes." },
        material: { titulo: "📚 Material de estudio", descripcion: "Descarga guías, talleres y resúmenes teóricos en formato PDF." },
        actividades: { titulo: "📝 Actividades matemáticas", descripcion: "Pon a prueba lo que sabes con estos ejercicios interactivos." },
        sesiones: { titulo: "💻 Sesiones de aprendizaje remoto", descripcion: "Refuerza tus conocimientos con actividades desde casa." }
    };

    const recurso = infoRecursos[tipoRecurso] || infoRecursos.videos;

    return (
        <section className="contenedor-detalle-curso">
            <div className="contenedor-volver">
                <Link to="/recursos" className="enlace-volver">← Volver a Recursos</Link>
            </div>

            <h1>{recurso.titulo}</h1>
            <p>{recurso.descripcion}</p>

            {/* ========================================== */}
            {/* DISEÑO PARA VIDEOS (El falso reproductor)  */}
            {/* ========================================== */}
            {tipoRecurso === 'videos' && (
                <>
                    <article className="cuadro-detalles-curso">
                        <h3>Clase 1: Introducción al Álgebra</h3>
                        <p>Repasa los conceptos básicos.</p>
                        <div className="simulador-video">
                            <h2 className="play-icon">▶</h2>
                            <span className="video-duracion">Duración: 15:20 min</span>
                        </div>
                    </article>
                    <article className="cuadro-detalles-curso">
                        <h3>Clase 2: Resolución de Ecuaciones</h3>
                        <p>Aprende paso a paso.</p>
                        <div className="simulador-video">
                            <h2 className="play-icon">▶</h2>
                            <span className="video-duracion">Duración: 18:45 min</span>
                        </div>
                    </article>
                </>
            )}

            {/* ========================================== */}
            {/* DISEÑO PARA MATERIAL (Botones de descarga) */}
            {/* ========================================== */}
            {tipoRecurso === 'material' && (
                <div className="cuadro-detalles-curso">
                    <h3>Archivos disponibles</h3>
                    <ul>
                        <li style={{ marginBottom: "15px" }}>
                            <a href="#" className="boton-ver-recursos">📄 Descargar Guía de Derivadas (PDF)</a>
                        </li>
                        <li style={{ marginBottom: "15px" }}>
                            <a href="#" className="boton-ver-recursos">📄 Descargar Taller de Fracciones (PDF)</a>
                        </li>
                        <li style={{ marginBottom: "15px" }}>
                            <a href="#" className="boton-ver-recursos">📄 Resumen de Fórmulas Básicas (PDF)</a>
                        </li>
                    </ul>
                </div>
            )}

            {/* ========================================== */}
            {/* DISEÑO PARA ACTIVIDADES                    */}
            {/* ========================================== */}
            {tipoRecurso === 'actividades' && (
                <>
                    <div className="cuadro-detalles-curso">
                        <h3>Reto 1: Operaciones combinadas</h3>
                        <p>Resuelve la siguiente operación: 5 + (3 x 4) - 2 = ?</p>
                    </div>
                    <div className="cuadro-detalles-curso">
                        <h3>Reto 2: Geometría</h3>
                        <p>Calcula el área de un triángulo con base 10cm y altura 5cm.</p>
                    </div>
                </>
            )}

            {/* ========================================== */}
            {/* DISEÑO PARA SESIONES (El aviso amarillo)   */}
            {/* ========================================== */}
            {tipoRecurso === 'sesiones' && (
                <div className="cuadro-detalles-curso aviso-clase-vivo" style={{ textAlign: "center" }}>
                    <h2>⏳ No hay sesiones programadas</h2>
                    <p>Actualmente no se tienen programadas sesiones remotas por parte de los tutores.</p>
                    <p>Vuelve a revisar esta sección más tarde.</p>
                </div>
            )}

        </section>
    );
};

export default RecursoDetalle;