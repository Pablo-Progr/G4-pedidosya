import { useState, useEffect } from "react";
import axios from "axios";
import useUsuarioStore from "../store/usuarioStore";
import "../css/maincarrito.css";
import { Modal } from "react-bootstrap";
import ModalCarrito from "./ModalCarrito";
import { useNavigate } from "react-router-dom";

const MainCarrito = () => {
  const [aclaracion, setAclaracion] = useState("");
  const [metodoPago, setMetodoPago] = useState("efectivo");
  const [carrito, setCarrito] = useState([]);
  const idUsuario = useUsuarioStore((state) => state.usuario?.idUsuario);
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCarrito = async () => {
      const res = await axios.get(`http://localhost:8000/carrito/${idUsuario}`);
      setCarrito(res.data);
    };
    fetchCarrito();
  }, [idUsuario]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarModal(true);
  };

  const enviarCompra = async (e) => {
    e.preventDefault();
    setMostrarModal(true);
    try {
      await axios.post("http://localhost:8000/confirmar", {
        idUsuario,
        aclaracion,
        metodoPago,
      });
      setMostrarModal(false);
           Swal.fire({
          position: "center",
          icon: "success",
          title: "Compra Realizada",
          showConfirmButton: false,
          timer: 1500,
        }); 
      navigate("/Home");
    } catch (error) {
      alert("Error al confirmar la compra" + error.message);
    }
  };

  return (
    <div className="main-carrito">
      <div className="cardProductos">
        <h2>Mi pedido</h2>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          carrito.map((p) => (
            <div key={p.id} className="producto-item">
              <span>{p.nombre}</span>
              <span>
                {p.cantidad} x ${p.precio_unitario}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="cardResumen">
        <h2>Resumen</h2>
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
          <button type="submit">Pasar a finalizar compra</button>
        </form>
        <div className="total"></div>
      </div>

      {mostrarModal && (
        <ModalCarrito
          carrito={carrito}
          aclaracion={aclaracion}
          metodoPago={metodoPago}
          onConfirmar={enviarCompra}
          onCancelar={() => setMostrarModal(false)}
        />
      )}
    </div>
  );
};

export default MainCarrito;
