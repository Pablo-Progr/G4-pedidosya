import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Restaurantes from "./pages/Restaurantes";
import Restaurante from "./pages/Restaurante";
import Pedido from "./pages/Pedido";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminCrud from "./pages/AdminCrud";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restaurantes" element={<Restaurantes />} />
          <Route path="/Restaurante/:id" element={<Restaurante />} />
          <Route path="/Pedido" element={<Pedido />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/AdminCrud" element={<AdminCrud />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
