import { Link, useParams } from 'react-router-dom';

const Aula = () => {
    // Leemos el ID del curso que viene en la URL (ej: /aula/3)
    const { idCurso } = useParams();

    return (
        <section className="contenedor-aula">
            <div className="contenedor-volver">
                <Link to="/subscripciones" className="enlace-volver">
                    ← Volver a mis cursos
                </Link>
            </div>

            <h1 className="titulo-aula">
                Aula Virtual (Curso ID: {idCurso})
            </h1>

            {/* Aviso de clases en vivo */}
            <div className="cuadro-detalles-curso aviso-clase-vivo">
                <h3>💻 ¿Necesitas una clase en vivo?</h3>
                <p>Escríbenos a <a href="mailto:tutorias@mathgo.com" className="enlace-email">tutorias@mathgo.com</a> para agendar tu sesión.</p>
            </div>

            {/* Contenido del curso */}
            <h2 className="titulo-seccion-videos">
                Contenido del Curso
            </h2>
            
            <article className="cuadro-detalles-curso">
                <h3>Clase 1 de ejemplo</h3>
                <p>Este es el espacio donde el backend mostrará los videos reales de la base de datos.</p>
                
                {/* Simulador de video (El cuadro negro con el Play) */}
                <div className="simulador-video">
                    <h2 className="play-icon">▶</h2>
                    <span className="video-duracion">Duración: 30:00 min</span>
                </div>
            </article>
        </section>
    );
};

export default Aula;