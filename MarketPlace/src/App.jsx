import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Perfil from "./views/Perfil";
import NuevaPublicacion from "./views/NuevaPublicacion";
import PublicacionDetalle from "./views/PublicacionDetalle";
import Favoritos from "./views/Favoritos";
import Publicaciones from "./views/Publicaciones";
import MyContext from "./context/MyContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [idProducto, setIdProducto] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  return (
    <>
      <MyContext.Provider
        value={{
          idProducto,
          setIdProducto,
          nombreProducto,
          setNombreProducto,
          descripcion,
          setDescripcion,
          precio,
          setPrecio,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/publicaciones" element={<Publicaciones />} />
            <Route path="/nuevaPublicacion" element={<NuevaPublicacion />} />
            <Route
              path="/publicacionDetalle"
              element={<PublicacionDetalle />}
            />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
