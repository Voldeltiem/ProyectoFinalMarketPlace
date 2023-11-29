import Inicio from "./views/Inicio"
import Nava from "./components/Nava"
import Login from "./views/Login"
import Registro from "./views/Registro"
import Perfil from "./views/Perfil"
import NuevaPublicacion from "./views/NuevaPublicacion"
import PublicacionDetalle from "./views/PublicacionDetalle"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/nuevaPublicacion" element={<NuevaPublicacion/>} />
        <Route path="/publicacionDetalle" element={<PublicacionDetalle/>} />
      </Routes>
    </BrowserRouter>
  );
    
}

export default App
