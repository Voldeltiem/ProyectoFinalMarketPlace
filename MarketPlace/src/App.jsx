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
      <Nava/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Registro" element={<Registro/>} />
        <Route path="/Perfil" element={<Perfil/>} />
        <Route path="/NuevaPublicacion" element={<NuevaPublicacion/>} />
        <Route path="/PublicacionDetalle" element={<PublicacionDetalle/>} />
      </Routes>
    </BrowserRouter>
  );
    
}

export default App
