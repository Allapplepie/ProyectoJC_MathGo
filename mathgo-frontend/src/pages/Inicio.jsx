import { useState } from 'react';
import { Link } from 'react-router-dom';


const Inicio = () => {

    // Estados para el formulario
    const [contactoNombre, setContactoNombre] = useState('');
    const [contactoCorreo, setContactoCorreo] = useState('');
    const [contactoEdad, setContactoEdad] = useState('');
    const [contactoCurso, setContactoCurso] = useState('refuerzo');
    const [contactoMensaje, setContactoMensaje] = useState('');
    const [estadoEnvio, setEstadoEnvio] = useState(''); // Para mensajes de éxito/error

    const enviarContacto = async (e) => {
        e.preventDefault();
        setEstadoEnvio('Enviando...');
        
        try {
            const respuesta = await fetch('http://localhost:3000/api/usuarios/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    nombre: contactoNombre, 
                    email: contactoCorreo, 
                    edad: contactoEdad, 
                    curso: contactoCurso, 
                    mensaje: contactoMensaje 
                })
            });

            if (respuesta.ok) {
                setEstadoEnvio('¡Mensaje enviado con éxito! Pronto te contactaremos.');
                setContactoNombre('');
                setContactoCorreo('');
                setContactoEdad('');
                setContactoMensaje('');
            } else {
                setEstadoEnvio('Hubo un error al enviar el mensaje.');
            }
        } catch (error) {
            setEstadoEnvio('Error de conexión. Revisa que el servidor esté encendido.');
        }
    };

    

    return (
        <>
            <section id="bienvenida">
                <h1>¡Bienvenido a MathGo!</h1>
                <h3>Un espacio donde el aprendizaje divertido, dinámico y rápido.</h3>
            </section>

           <section id="nuestrosCursos" aria-labelledby="titulo-cursos">
    <h1 id="titulo-cursos">Nuestros cursos</h1>
    <div className="contenedor-de-cursos">
        
        <article className="tarjeta-curso">
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=400&auto=format&fit=crop" alt="Sesión de refuerzo" loading="lazy" />
            <h2>Sesiones de refuerzo personalizadas</h2>
            <p><strong>Duración:</strong> 4 semanas</p>
            <p><strong>Precio:</strong> $122.000</p>
            <Link className="boton-compra" to="/curso/refuerzo">Ver detalles</Link>
        </article>

        <article className="tarjeta-curso">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop" alt="Fundamentos" loading="lazy" />
            <h2>Fundamentos de matemáticas (nivel 1)</h2>
            <p><strong>Duración:</strong> 6 semanas</p>
            <p><strong>Precio:</strong> $150.000</p>
            <Link className="boton-compra" to="/curso/fundamentos">Ver detalles</Link>
        </article>

        <article className="tarjeta-curso">
            <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop" alt="Matemáticas básicas" loading="lazy" />
            <h2>Matemáticas básicas (nivel 2)</h2>
            <p><strong>Duración:</strong> 8 semanas</p>
            <p><strong>Precio:</strong> $200.000</p>
            <Link className="boton-compra" to="/curso/basicas">Ver detalles</Link>
        </article>

        <article className="tarjeta-curso">
            <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop" alt="Matemáticas avanzadas" loading="lazy" />
            <h2>Matemáticas avanzadas (nivel 3)</h2>
            <p><strong>Duración:</strong> 10 semanas</p>
            <p><strong>Precio:</strong> $350.000</p>
            <Link className="boton-compra" to="/curso/avanzadas">Ver detalles</Link>
        </article>

        <article className="tarjeta-curso">
            <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=400&auto=format&fit=crop" alt="Matemáticas avanzadas II" loading="lazy" />
            <h2>Matemáticas avanzadas II (nivel superior)</h2>
            <p><strong>Duración:</strong> 12 semanas</p>
            <p><strong>Precio:</strong> $350.000</p>
            <Link className="boton-compra" to="/curso/avanzadas2">Ver detalles</Link>
        </article>

    </div>
</section>

            <section id="elegirnos" aria-labelledby="titulo-elegirnos">
                <h2 id="titulo-elegirnos">¿Por qué elegirnos?</h2>
                <div className="cajas-de-motivos">
                    <article className="cajas">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop" alt="Clases de calidad" loading="lazy" />
                        <h3>Clases de calidad</h3>
                        <p>Contenido didáctico basado en pedagogías actuales y dinámicas para facilitar la comprensión de conceptos matemáticos complejos.</p>
                    </article>
                    <article className="cajas">
                        <img src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=400&auto=format&fit=crop" alt="Aprendizaje remoto" loading="lazy" />
                        <h3>Aprendizaje remoto</h3>
                        <p>Gracias a nuestra modalidad virtual, puedes acceder a tus lecciones y cursos desde cualquier dispositivo y lugar.</p>
                    </article>
                    <article className="cajas">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop" alt="Recursos en un solo lugar" loading="lazy" />
                        <h3>Recursos en un solo lugar</h3>
                        <p>Encuentra clases, recursos, tutorías y actividades en un solo espacio digital.</p>
                    </article>
                </div>
            </section>

            <section id="sobreNosotros" aria-labelledby="titulo-nosotros">
                <h2 id="titulo-nosotros">Sobre nosotros</h2>
                <p>MathGo es un emprendimiento educativo que busca hacer que las matemáticas sean más fáciles, prácticas y divertidas. Ofrecemos clases en línea, videos y recursos educativos para estudiantes que desean mejorar sus conocimientos y aprender a su propio ritmo.</p>
        <img  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Equipo de profesores de MathGo"  className="imagen-nosotros"  loading="lazy" />

            </section>
<section id="recursos" aria-labelledby="titulo-recursos">
    <h2 id="titulo-recursos">Recursos educativos</h2>
    <div className="contenedor-de-recursos">
        
        <article className="tarjeta-recursos">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop" alt="Videos educativos" loading="lazy" />
            <h3>Videos educativos</h3>
            <Link className="boton-ver-recursos" to="/recursos">Ver más</Link>
        </article>

        <article className="tarjeta-recursos">
            <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop" alt="Material de estudio" loading="lazy" />
            <h3>Material de estudio</h3>
            <Link className="boton-ver-recursos" to="/recursos">Ver más</Link>
        </article>

        <article className="tarjeta-recursos">
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop" alt="Actividades matemáticas" loading="lazy" />
            <h3>Actividades matemáticas</h3>
            <Link className="boton-ver-recursos" to="/recursos">Ver más</Link>
        </article>

        <article className="tarjeta-recursos">
            <img src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=400&auto=format&fit=crop" alt="Sesiones de aprendizaje remoto" loading="lazy" />
            <h3>Sesiones de aprendizaje remoto</h3>
            <Link className="boton-ver-recursos" to="/recursos">Ver más</Link>
        </article>

    </div>
</section>
      <section id="contactanos" aria-labelledby="titulo-contacto">
    <h2 id="titulo-contacto">Contáctanos</h2>
    <p>¿Tienes alguna duda sobre nuestros cursos o recursos? ¡Escríbenos!</p>
    <ul>
        <li><a href="mailto:MathGodigital@gmail.com">MathGodigital@gmail.com</a></li>
        <li><a href="tel:+573024800695">+57 302 480 0695</a></li>
    </ul>

    <form onSubmit={enviarContacto}>
        <fieldset>
            <legend>Solicitudes</legend>
            
            <label htmlFor="contacto-nombre">Nombre completo:</label>
            <input 
                id="contacto-nombre" 
                type="text" 
                value={contactoNombre}
                onChange={(e) => setContactoNombre(e.target.value)}
                required 
            />

            <label htmlFor="contacto-correo">Correo:</label>
            <input 
                id="contacto-correo" 
                type="email" 
                value={contactoCorreo}
                onChange={(e) => setContactoCorreo(e.target.value)}
                required 
            />

            <label htmlFor="contacto-edad">Edad del estudiante:</label>
            <input 
                id="contacto-edad" 
                type="number" 
                min="3" 
                max="100" 
                value={contactoEdad}
                onChange={(e) => setContactoEdad(e.target.value)}
                required 
            />

            <p id="curso-label">Curso de interés</p>
            <label>
                <input type="radio" name="curso" value="refuerzo" checked={contactoCurso === 'refuerzo'} onChange={(e) => setContactoCurso(e.target.value)} required /> 
                Sesiones de refuerzo personalizadas
            </label>
            <label>
                <input type="radio" name="curso" value="fundamentos" checked={contactoCurso === 'fundamentos'} onChange={(e) => setContactoCurso(e.target.value)} /> 
                Curso fundamentos de matemáticas
            </label>
            <label>
                <input type="radio" name="curso" value="basicas" checked={contactoCurso === 'basicas'} onChange={(e) => setContactoCurso(e.target.value)} /> 
                Matemáticas básicas (nivel 2)
            </label>
            <label>
                <input type="radio" name="curso" value="avanzadas" checked={contactoCurso === 'avanzadas'} onChange={(e) => setContactoCurso(e.target.value)} /> 
                Matemáticas avanzadas (nivel 3)
            </label>
            <label>
                <input type="radio" name="curso" value="superior" checked={contactoCurso === 'superior'} onChange={(e) => setContactoCurso(e.target.value)} /> 
                Matemáticas avanzadas II (nivel superior)
            </label>

            <label htmlFor="contacto-mensaje">Mensaje:</label>
            <textarea 
                id="contacto-mensaje" 
                value={contactoMensaje}
                onChange={(e) => setContactoMensaje(e.target.value)}
                required
            ></textarea>
        </fieldset>
        
        <button type="submit" className="boton-ver-recursos">Enviar Mensaje</button>
        
        {/* Mensaje de estado (éxito o error) */}
        {estadoEnvio && <p className={estadoEnvio.includes('éxito') ? 'mensaje-exito' : 'mensaje-error'}>{estadoEnvio}</p>}
    </form>
</section>
        </>
    );
};

export default Inicio;