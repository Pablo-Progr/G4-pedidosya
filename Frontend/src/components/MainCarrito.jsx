import "../css/maincarrito.css";

const MainCarrito = () => {
  return (
    <div className="main-carrito">

      <div className="cardProductos">
        <h2>Mi pedido</h2>
        <div className="radio-group">
          <label>
            Doble Cuarto de Libra con Queso
          </label>
          <label>
            Nuggets de Pollo x20
          </label>
          <label >
            Pepsi 1.5L
          </label>
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