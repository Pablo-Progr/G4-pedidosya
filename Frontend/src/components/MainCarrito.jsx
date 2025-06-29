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
          {productos.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            productos.map((producto) => (
              <div key={producto.idProducto}>
                <span>{producto.nombre}</span> -<span> ${producto.precio}</span>{" "}
                x<span> {producto.cantidad}</span> =
                <strong> ${producto.precio * producto.cantidad}</strong>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="cardResumen">
  <h2>Mostaza Pellegrini</h2>
  <p>5 - 20 min · Mínimo $5.099</p>
  <div className="summary-item">
    <span>Subtotal</span>
    <span>${calcularTotal()}</span>
  </div>
  <div className="summary-item">
    <span>Costo de Envío</span>
    <span>$1.129</span>
  </div>
  <div className="summary-item">
    <span>Tarifa de servicio</span>
    <span>$340</span>
  </div>

  <div className="summary-item">
    <label htmlFor="metodoPago">Método de Pago:</label>
    <select id="metodoPago" name="metodoPago">
      <option value="tarjeta">Tarjeta de crédito/débito</option>
      <option value="efectivo">Efectivo</option>
      <option value="mercadopago">Mercado Pago</option>
    </select>
  </div>

  <button className="coupon-btn">Pasar a finalizar compra</button>
  <div className="total">Total ${calcularTotal() + 1129 + 340}</div>
</div>

    </div>
  );
};

export default MainCarrito;
