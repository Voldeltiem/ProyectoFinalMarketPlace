import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Perfil from "./views/Perfil";
import NuevaPublicacion from "./views/NuevaPublicacion";
import PublicacionDetalle from "./views/PublicacionDetalle";
import Favoritos from "./views/Favoritos";
import Publicaciones from "./views/Publicaciones";
import MyContext from "./Context/MyContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MisPublicaciones from "./views/MisPublicaciones";
import PrivateRoute from "./utils/PrivateRoute";
import EditarPublicacion from "./views/EditarPublicacion";

function App() {
  const [idProducto, setIdProducto] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [usuario, setUsuario] = useState(null)
  const [productoDetalle, setProductoDetalle] = useState(null)
  const [esFavoritos, setEsFavoritos] = useState([]);
  const [productosBuscados, setProductosBuscados] = useState([]);
  const [productosBase, setProductosBase] = useState([]);
  const [token, setToken] = useState([]);




  return (
    <>
      <MyContext.Provider
        value={{
          usuario, setUsuario,
          productoDetalle, setProductoDetalle,
          esFavoritos, setEsFavoritos,
          productosBuscados, setProductosBuscados,
          productosBase, setProductosBase,
          token, setToken
        }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/publicaciones" element={<Publicaciones />} />
              <Route path="/nuevaPublicacion" element={<NuevaPublicacion />} />
              <Route path="/misPublicaciones" element={<MisPublicaciones />} />
              <Route path="/publicacionDetalle/:id" element={<PublicacionDetalle />} />
              <Route path="/editarPublicacion/:id" element={<EditarPublicacion />} />
              <Route path="/favoritos" element={<Favoritos />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </MyContext.Provider >
    </>
  );
}

export default App;
