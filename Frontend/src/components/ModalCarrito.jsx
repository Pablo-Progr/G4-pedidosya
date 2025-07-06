import "../css/modalCarrito.css"; // Asegúrate de tener este archivo CSS

const ModalCarrito = ({
  carrito,
  aclaracion,
  metodoPago,
  onConfirmar,
  onCancelar,
}) => {
  const total = carrito.reduce(
    (acc, p) => acc + p.cantidad * p.precio_unitario,
    0
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Resumen de tu compra</h2>
        {carrito.map((item, i) => (
          <p key={i}>
            {item.nombre} — {item.cantidad} x ${item.precio_unitario} = $
            {(item.cantidad * item.precio_unitario).toFixed(2)}
          </p>
        ))}
        <hr />
        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
        <p>
          <strong>Aclaración:</strong> {aclaracion}
        </p>
        <p>
          <strong>Método de pago:</strong> {metodoPago}
        </p>
        <div style={{ marginTop: "1rem" }}>
          <button className="btn btn-success" onClick={onConfirmar}>Confirmar compra</button>
          <button className="btn btn-danger" onClick={onCancelar} style={{ marginLeft: "1rem" }}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCarrito;
