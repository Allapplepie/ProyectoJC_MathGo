import { Link } from 'react-router-dom';

const Recursos = () => {
    return (
        <section aria-labelledby="titulo-principal">
            <h1 id="titulo-principal">Recursos educativos</h1>
            <p>Encuentra materiales complementarios para practicar matemáticas y repasar lo aprendido.</p>
            
            <div className="contenedor-de-recursos">
                
                <article className="tarjeta-recursos">
                    <span className="icono-recurso">🎥</span>
                    <h2>Videos educativos</h2>
                    <p>Utiliza videos para repasar explicaciones y ejemplos.</p>
                    <Link to="#" className="boton-ver-recursos">Ver más</Link>
                </article>

                <article className="tarjeta-recursos">
                    <span className="icono-recurso">📚</span>
                    <h2>Material de estudio</h2>
                    <p>Organiza tus apuntes y consulta material de apoyo.</p>
                    <Link to="#" className="boton-ver-recursos">Ver más</Link>
                </article>

                <article className="tarjeta-recursos">
                    <span className="icono-recurso">📝</span>
                    <h2>Actividades matemáticas</h2>
                    <p>Practica con ejercicios y problemas.</p>
                    <Link to="#" className="boton-ver-recursos">Ver más</Link>
                </article>

                <article className="tarjeta-recursos">
                    <span className="icono-recurso">💻</span>
                    <h2>Sesiones de aprendizaje remoto</h2>
                    <p>Refuerza tus conocimientos con actividades desde casa.</p>
                    <Link to="#" className="boton-ver-recursos">Ver más</Link>
                </article>

            </div>
        </section>
    );
};

export default Recursos;