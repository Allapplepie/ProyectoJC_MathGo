import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registros = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [cargando, setCargando] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCargando(true);
        setMensaje('');

        try {
            const respuesta = await fetch('http://localhost:3000/api/usuarios/registro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    nombre: nombre, 
                    correo: correo, 
                    contraseña: contrasena // Ojo: tu backend espera "contraseña" con ñ
                })
            });

            const datos = await respuesta.json();

            if (respuesta.ok) {
                setMensaje('¡Usuario registrado con éxito! Redirigiendo al inicio de sesión...');
                setTimeout(() => {
                    navigate('/login');
                }, 2000); // Espera 2 segundos y lo manda al login
            } else {
                setMensaje(datos.mensaje || 'Error al registrar el usuario');
            }
        } catch (error) {
            setMensaje('Error de conexión. Revisa que el servidor esté encendido.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <section className="contenedor-login">
            <h1>Crear Cuenta</h1>
            <p>Únete a MathGo y empieza a aprender.</p>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Tus datos</legend>
                    
                    <label htmlFor="nombre">Nombre completo:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required 
                        placeholder="Tu nombre"
                    />

                    <label htmlFor="correo">Correo electrónico:</label>
                    <input 
                        type="email" 
                        id="correo" 
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required 
                        placeholder="correo@ejemplo.com"
                    />

                    <label htmlFor="contrasena">Contraseña:</label>
                    <input 
                        type="password" 
                        id="contrasena" 
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required 
                        placeholder="Mínimo 8 caracteres"
                    />

                    <button type="submit" className="boton-ver-recursos btn-formulario" disabled={cargando}>
                        {cargando ? "Registrando..." : "Registrarse"}
                    </button>
                </fieldset>
            </form>

            {/* Mensaje de éxito o error */}
            {mensaje && <p className={mensaje.includes('éxito') ? 'mensaje-exito' : 'mensaje-error'}>{mensaje}</p>}
            
            <p className="texto-registro">
                ¿Ya tienes cuenta? <Link to="/login" className="enlace-azul">Inicia sesión aquí</Link>
            </p>
        </section>
    );
};

export default Registros;