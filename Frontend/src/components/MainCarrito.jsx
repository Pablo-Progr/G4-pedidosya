import axios from "axios";
import { useEffect, useState } from "react";
import "../css/maincarrito.css";
import useUsuarioStore from "../store/usuarioStore";

const MainCarrito = () => {
  const [productos, setProductos] = useState([]);
  const idUsuario = useUsuarioStore((state) => state.usuario?.idUsuario);

  const fetchPedido = async () => {
    try {
      const response = await axios.get(
       `http://localhost:8000/carritos/usuario/${idUsuario}`
      );
      setProductos(response.data);
    } catch (error) {
      console.error("Error fetching productos:", error);
    }
  };

  useEffect(() => {
    fetchPedido();
  }, []);

  const calcularTotal = () => {
    return productos.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
  };


  return (
    <div className="main-carrito">
      <div className="cardProductos">
        <h2>Mi pedido</h2>
        <div className="radio-group">
          {productos.map((producto) => (
              <label key={producto.id}>
                {producto.nombre} - ${producto.precio}
              </label>
            )
          )}
        </div>
        <button className="btn">Agregar</button>
      </div>

      <div className="cardResumen">
        <h2>Mostaza Pellegrini</h2>
        <p>5 - 20 min · Mínimo $5.099</p>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>$6.899</span>
        </div>
        <div className="summary-item">
          <span>Costo de Envío</span>
          <span>$1.129</span>
        </div>
        <div className="summary-item">
          <span>Tarifa de servicio</span>
          <span>$340</span>
        </div>
        <button className="coupon-btn">Pasar a finalizar compra</button>
        <div className="total">Total $8.368</div>
      </div>
    </div>
  );
};

export default MainCarrito;
