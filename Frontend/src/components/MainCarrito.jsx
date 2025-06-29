import { useState, useEffect } from "react";
import axios from "axios";
import useUsuarioStore from "../store/usuarioStore";

const MainCarrito = () => {
  const [aclaracion, setAclaracion] = useState("");
  const [metodoPago, setMetodoPago] = useState("efectivo");
  const [carrito, setCarrito] = useState([]);
  const idUsuario = useUsuarioStore((state) => state.usuario?.idUsuario);
  console.log("ID Usuario:", idUsuario);

  useEffect(() => {
    const fetchCarrito = async () => {
      const res = await axios.get(`http://localhost:8000/carrito/${idUsuario}`);
      setCarrito(res.data);
    };
    fetchCarrito();
  }, [idUsuario]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/confirmar", {
        idUsuario,
        aclaracion,
        metodoPago,
      });
      alert("Compra confirmada");
    } catch (error) {
      alert("Error al confirmar la compra" + error.message);
    }
  };

  return (
    <div>
      <h2>Confirmar compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Aclaraciones"
          value={aclaracion}
          onChange={(e) => setAclaracion(e.target.value)}
        />
        <select
          value={metodoPago}
          onChange={(e) => setMetodoPago(e.target.value)}
        >
          <option value="">Método de pago</option>
          <option value="Efectivo">Efectivo</option>
          <option value="Tarjeta">Tarjeta</option>
        </select>
        <button type="submit">Confirmar compra</button>
      </form>

      <h3>Carrito</h3>
      {carrito.map((p) => (
        <div key={p.id}>
          <span>{p.nombre}</span> —{" "}
          <span>
            {p.cantidad} x ${p.precio_unitario}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MainCarrito;
