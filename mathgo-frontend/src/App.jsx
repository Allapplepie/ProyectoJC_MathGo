import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Importamos los componentes globales
import Header from './components/Header';
import Footer from './components/Footer';

// 2. Importamos todas las páginas
import Inicio from './pages/Inicio';
import Programas from './pages/Programas';
import Recursos from './pages/Recursos';
import Preguntas from './pages/Preguntas';
import Login from './pages/Login';
import Subscripciones from './pages/Subscripciones';
import DetalleCurso from './pages/DetalleCurso';
import Aula from './pages/Aula';

function App() {
  return (
    <BrowserRouter>
      {/* El Header se queda fijo arriba en todas las páginas */}
      <Header />
      
      <main>
        <Routes>
          {/* Ruta de la página principal */}
          <Route path="/" element={<Inicio />} />
          
          {/* Ruta del catálogo de cursos */}
          <Route path="/programas" element={<Programas />} />
          
          {/* Ruta dinámica para ver un curso específico (detalles y formulario) */}
          <Route path="/curso/:idCurso" element={<DetalleCurso />} />
          
          {/* Rutas de recursos y preguntas frecuentes */}
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/preguntas" element={<Preguntas />} />
          
          {/* Rutas de autenticación y perfil */}
          <Route path="/login" element={<Login />} />
          <Route path="/subscripciones" element={<Subscripciones />} />
          
          {/* Ruta dinámica para entrar al contenido del curso (Aula Virtual) */}
          <Route path="/aula/:idCurso" element={<Aula />} />
        </Routes>
      </main>

      {/* El Footer se queda fijo abajo en todas las páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;