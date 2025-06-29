import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Restaurantes from "./pages/Restaurantes";
import Restaurante from "./pages/Restaurante";
import Pedido from "./pages/Pedido";
import Admin from "./pages/Admin";
import AdminCrud from "./pages/AdminCrud";
import Carrito from "./pages/Carrito";
import Autenticacion from "./components/Autenticacion";
import RutaProtegidaAdmin from "./components/RutaProtegidaAdmin";
import RutaProtegidaUsuario from "./components/RutaProtegidausuario";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Restaurantes" element={<Restaurantes />} />
          <Route path="/error" element={<Error />} />
          <Route
            path="/Restaurante/:id"
            element={
              <RutaProtegidaUsuario>
                <Restaurante />
              </RutaProtegidaUsuario>
            }
          />
          <Route
            path="/Pedido"
            element={
              <RutaProtegidaUsuario>
                <Pedido />
              </RutaProtegidaUsuario>
            }
          />
          <Route
            path="/Carrito"
            element={
              <RutaProtegidaUsuario>
                <Carrito />
              </RutaProtegidaUsuario>
            }
          />
          <Route
            path="/Admin"
            element={
              <RutaProtegidaAdmin>
                <Admin />
              </RutaProtegidaAdmin>
            }
          />
          <Route
            path="/AdminCrud"
            element={
              <RutaProtegidaAdmin>
                <AdminCrud />
              </RutaProtegidaAdmin>
            }
          />
          <Route path="/" element={<Autenticacion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
