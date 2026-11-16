import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="encabezado">
            <Link className="logo" to="/" aria-label="MathGo, página de inicio">
                <span className="logo-texto">MathGo</span>
            </Link>
            
            <button className="menuHamburger" id="hamburger-boton" type="button" aria-label="Abrir menú" aria-controls="navegacion-principal" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
            
            <nav className="navegacion" id="navegacion-principal" aria-label="Navegación principal">
                <Link to="/">Inicio</Link>
                <Link to="/programas">Lista de programas</Link>
                <Link to="/recursos">Recursos</Link>
                <Link to="/preguntas">Dudas</Link>
                <Link to="/subscripciones">Mis suscripciones</Link>
            </nav>
            
            <div className="usuario">
                {/* Ojo: aquí ya no usamos href, usamos Link de React Router */}
                <Link to="/login" id="btn-perfil" className="nombreDeUsuario">Cargando...</Link>
            </div>
        </header>
    );
};

export default Header;