import { Link } from 'react-router-dom';

const Programas = () => {
    return (
        <section aria-labelledby="titulo-principal">
            <h1 id="titulo-principal">Lista de programas</h1>
            <p>Conoce las opciones de aprendizaje de MathGo. Para conocer precios y reservar, visita la página de cada curso.</p>
            
            <div className="contenedor-de-recursos">
                
                <article className="tarjeta-recursos">
                    <h2>Sesiones de refuerzo personalizadas</h2>
                    <p>Acompañamiento enfocado en las dudas y necesidades de cada estudiante.</p>
                    {/* Como aún no tenemos las páginas de detalles en React, dejo el Link apuntando a "#" por ahora */}
                    <Link to="#" className="boton-ver-recursos">Ver más</Link>
                </article>

                <article className="tarjeta-recursos">
                    <h2>Fundamentos de matemáticas (Nivel 1)</h2>
                    <p>Repasa conceptos esenciales y fortalece tus bases.</p>
                    <Link to="#" className="boton-ver-recursos">Ver más</Link>
                </article>

                <article className="tarjeta-recursos">
                    <h2>Matemáticas básicas (Nivel 2)</h2>
                    <p>Practica operaciones y desarrolla habilidades para resolver problemas.</p>
                    <Link to="#" className="boton-ver-recursos">Ver más</Link>
                </article>

                <article className="tarjeta-recursos">
                    <h2>Matemáticas avanzadas (Nivel 3)</h2>
                    <p>Profundiza en temas matemáticos de mayor complejidad.</p>
                    <Link to="#" className="boton-ver-recursos">Ver más</Link>
                </article>

                <article className="tarjeta-recursos">
                    <h2>Matemáticas avanzadas II (Nivel Superior)</h2>
                    <p>Se centra en el aprendizaje y aplicación de teorías matemáticas complejas.</p>
                    <Link to="#" className="boton-ver-recursos">Ver más</Link>
                </article>

            </div>
        </section>
    );
};

export default Programas;