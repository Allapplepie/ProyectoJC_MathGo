import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [cargando, setCargando] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(''); 
        setCargando(true); 

        try {
            const respuesta = await fetch('https://mathgo-backend-vw2g.onrender.com/api/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo: email, contraseña: password })
            });

            const datos = await respuesta.json();

            if (respuesta.ok) {
                localStorage.setItem("tokenMathGo", datos.token);
                localStorage.setItem("usuarioMathGo", JSON.stringify(datos.usuario));
                
                navigate('/subscripciones');
                window.location.reload(); 
            } else {
                setError(datos.mensaje || "Correo o contraseña incorrectos");
            }
        } catch (err) {
            setError("Error de conexión. Revisa que el servidor esté encendido.");
        } finally {
            setCargando(false); 
        }
    };

    return (
        <section className="contenedor-login">
            <h1>Iniciar Sesión</h1>
            <p>Ingresa a tu cuenta para acceder a tus cursos.</p>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Datos de acceso</legend>
                    
                    <label htmlFor="email">Correo electrónico:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        placeholder="correo@ejemplo.com"
                    />

                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        placeholder="********"
                    />

                    {error && <p className="mensaje-error">{error}</p>}

                    <button type="submit" className="boton-ver-recursos btn-formulario" disabled={cargando}>
                        {cargando ? "Verificando..." : "Ingresar"}
                    </button>
                </fieldset>
            </form>
            
            <p className="texto-registro">
                ¿No tienes cuenta? <Link to="/registro" className="enlace-azul">Regístrate aquí</Link>
            </p>
        </section>
    );
};

export default Login;