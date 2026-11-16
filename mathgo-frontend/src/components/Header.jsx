import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const [usuario, setUsuario] = useState(null);
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [hamburguesaAbierta, setHamburguesaAbierta] = useState(false);
    const navigate = useNavigate();

    // useEffect se ejecuta al cargar la página para revisar si hay sesión
    useEffect(() => {
        const usuarioGuardado = localStorage.getItem("usuarioMathGo");
        if (usuarioGuardado) {
            setUsuario(JSON.parse(usuarioGuardado));
        }
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem("usuarioMathGo");
        localStorage.removeItem("tokenMathGo");
        setUsuario(null);
        setMenuAbierto(false);
        navigate('/'); // Te devuelve al inicio
    };

    return (
        <header className="encabezado">
            <Link className="logo" to="/" aria-label="MathGo, página de inicio">
                <span className="logo-texto">MathGo</span>
            </Link>
            
            <button className="menuHamburger" id="hamburger-boton" type="button" aria-label="Abrir menú" aria-controls="navegacion-principal" aria-expanded="false" onClick={() => setHamburguesaAbierta(!hamburguesaAbierta)} >
                <span></span><span></span><span></span>
            </button>
            
           <nav className={`navegacion ${hamburguesaAbierta ? 'abierto' : ''}`}  id="navegacion-principal" aria-label="Navegación principal">
                <Link to="/">Inicio</Link>
                <Link to="/programas">Lista de programas</Link>
                <Link to="/recursos">Recursos</Link>
                <Link to="/preguntas">Dudas</Link>
                <Link to="/subscripciones">Mis suscripciones</Link>
            </nav>
            
            <div className="usuario">
                {usuario ? (
                    // SI HAY USUARIO LOGUEADO
                    <div className="user-menu-container">
                        <button className="nombreDeUsuario" onClick={() => setMenuAbierto(!menuAbierto)}>
                            Hola, {usuario.nombre}
                        </button>
                        {menuAbierto && (
                            <div className="dropdown-menu show">
                                <Link to="/subscripciones">Mis Cursos</Link>
                                <button onClick={cerrarSesion}>Cerrar Sesión</button>
                            </div>
                        )}
                    </div>
                ) : (
                    // SI NO HAY USUARIO (VISITANTE)
                    <Link to="/login" className="nombreDeUsuario">Ingresar</Link>
                )}
            </div>
        </header>
    );
};

export default Header;