import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Subscripciones = () => {
    const [cursos, setCursos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    useEffect(() => {
        const cargarCursos = async () => {
            const usuarioGuardado = localStorage.getItem("usuarioMathGo");
            
            if (!usuarioGuardado) {
                navigate('/login');
                return;
            }

            try {
                const respuesta = await fetch('http://localhost:3000/api/usuarios/mis-cursos');
                const datos = await respuesta.json();

                if (respuesta.ok) {
                    setCursos(datos.cursos || []); 
                } else {
                    setError(datos.mensaje || "Error al cargar los cursos");
                }
            } catch (err) {
                setError("Error de conexión. Revisa que el servidor esté encendido.");
            } finally {
                setCargando(false);
            }
        };

        cargarCursos();
    }, [navigate]);

    if (cargando) return <h2 className="mensaje-estado">Cargando tus cursos...</h2>;

    if (error) return <h2 className="mensaje-error">{error}</h2>;

    return (
        <section aria-labelledby="titulo-principal">
            <h1 id="titulo-principal">Mis Cursos Adquiridos</h1>
            <p>Bienvenido a tu panel de estudiante. Aquí tienes acceso a los cursos que has comprado.</p>
            
            <div className="contenedor-de-recursos">
                
                {cursos.length === 0 ? (
                    <p>Aún no has comprado ningún curso. ¡Ve a la lista de programas para empezar!</p>
                ) : (
                    cursos.map((curso, index) => (
                        <article className="tarjeta-recursos" key={curso._id || index}>
                            <h2>{curso.nombre || curso}</h2> 
                            {curso.descripcion && <p>{curso.descripcion}</p>}
                            
                            <p>Estado: <strong className="estado-activo">Activo</strong></p>
                            
                            <Link to={`/aula/${curso._id || index}`} className="boton-ver-recursos">
                                Entrar al Aula
                            </Link>
                        </article>
                    ))
                )}

            </div>
        </section>
    );
};

export default Subscripciones;