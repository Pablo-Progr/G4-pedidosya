import "../css/modalProducto.css";

const ModalProducto = ({
  show,
  onCerrar,
  producto,
  cantidad,
  setCantidad,
  onAgregar,
}) => {
  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{producto.nombre}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCerrar}
            ></button>
          </div>
          <div className="modal-body">
            <p>{producto.descripcion}</p>
            <p>Precio unitario: ${producto.precio}</p>
            <div>
              <button className="btn btn-success" onClick={() => setCantidad(Math.max(1, cantidad - 1))}>
                -
              </button>
              <span style={{ margin: "0 10px" }}>{cantidad}</span>
              <button className="btn btn-success" onClick={() => setCantidad(cantidad + 1)}>+</button>
            </div>

          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCerrar}>
              Cancelar
            </button>
            <button className="btn btn-primary" onClick={onAgregar}>
              Agregar al pedido – ${producto.precio * cantidad}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProducto;
