const Preguntas = () => {
    return (
        <section aria-labelledby="titulo-faq">
            <h1 id="titulo-faq">Preguntas Frecuentes</h1>
            <p>Resolvemos tus dudas sobre los cursos y la plataforma.</p>

            <div className="contenedor-faq">
                
                <details className="cuadro-detalles-curso faq-item">
                    <summary className="faq-pregunta">¿Cómo puedo inscribirme en un curso?</summary>
                    <p className="faq-respuesta">Solo debes ir a la sección "Lista de programas", elegir el curso de tu interés y llenar el formulario de reserva. Nosotros nos pondremos en contacto contigo para concretar el pago y darte acceso a las aulas.</p>
                </details>

                <details className="cuadro-detalles-curso faq-item">
                    <summary className="faq-pregunta">¿Las clases son en vivo o grabadas?</summary>
                    <p className="faq-respuesta">La plataforma cuenta con una Videoteca con clases grabadas para que repases a tu ritmo. Además, las sesiones de refuerzo personalizadas y algunas tutorías se agendan en vivo directamente con el tutor.</p>
                </details>

                <details className="cuadro-detalles-curso faq-item">
                    <summary className="faq-pregunta">¿Necesito tener conocimientos previos?</summary>
                    <p className="faq-respuesta">Depende del curso. En la página de cada programa especificamos el nivel (Básico, Intermedio o Avanzado). Si no estás seguro, te recomendamos empezar por "Fundamentos de matemáticas".</p>
                </details>

                <details className="cuadro-detalles-curso faq-item">
                    <summary className="faq-pregunta">¿Cómo accedo a mis cursos después de comprarlos?</summary>
                    <p className="faq-respuesta">Una vez que inicies sesión con la cuenta que creaste, el botón de tu perfil cambiará a "Hola, [Tu Nombre]". Si haces clic allí, podrás ir a "Mis Cursos" y entrar a las aulas.</p>
                </details>

                <details className="cuadro-detalles-curso faq-item">
                    <summary className="faq-pregunta">¿Qué pasa si tengo problemas técnicos?</summary>
                    <p className="faq-respuesta">Puedes escribirnos desde el formulario de contacto en la página de inicio, o enviarnos un correo directo. Nuestro equipo técnico está disponible para ayudarte.</p>
                </details>

            </div>
        </section>
    );
};

export default Preguntas;