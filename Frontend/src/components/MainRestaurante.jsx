import React from "react";
import "../css/mainRestaurante.css"; // Importa tu archivo CSS para estilos
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MainRestaurante = () => {
  const { id } = useParams();
  const [local, setLocal] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [miPedido, setMiPedido] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/pr/local/${id}`
        );
        setLocal(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [id]);

  if (!local) return <p>Cargando...</p>;

  const handleProductoClick = (producto) => {
    console.log("Producto clickeado:", producto);
    setProductoSeleccionado(producto);
    setCantidad(1);
    setMostrarModal(true);
  };
  return (
    <div>
      <p>Modal visible: {mostrarModal ? "Sí" : "No"}</p>
      <h1>{local.nombre}</h1>
      <p>{local.direccion}</p>

      <div className="main-restaurante">
        {/* Columna izquierda */}
        <aside className=" left-sidebar">
          <br />
          <div className="extremos">
            <h6>Delivery</h6>
            <p>15 - 30 min·$1.099 envío·Mínimo $5.399</p>
          </div>
          <br />
          <div className="extremos">
            <h3>categoria</h3>
            <ul>
              <li>Hamburguesa</li>
              <li>Pizza</li>
              <li>Milanesa</li>
            </ul>
          </div>
        </aside>

        {/* Columna central con las cards */}

        <main className="product-wrapper">
          {local.productos.map((producto, index) => (
            <div
              className="product-card"
              key={producto.id || index} // Usa id si existe, si no, index
              onClick={() => handleProductoClick(producto)}
            >
              <div className="restaurant-info">
                <h3 className="restaurant-name">{producto.nombre}</h3>
                <div className="restaurant-meta">
                  <p>{producto.descripcion}</p>
                </div>
              </div>
              <div>
                <span className="star">$</span>
                <span>{producto.precio}</span>
              </div>
            </div>
          ))}
        </main>
      </div>
      {/* Modal para seleccionar cantidad y agregar al pedido */}
      {mostrarModal && (
        <div className="modal">
          <button onClick={() => setMostrarModal(false)}>X</button>
          <h2>{productoSeleccionado.nombre}</h2>
          {productoSeleccionado.imagen && (
            <img
              src={productoSeleccionado.imagen}
              alt={productoSeleccionado.nombre}
            />
          )}
          <p>{productoSeleccionado.descripcion}</p>
          <p>Precio unitario: ${productoSeleccionado.precio}</p>

          <div>
            <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>
              -
            </button>
            <span>{cantidad}</span>
            <button onClick={() => setCantidad(cantidad + 1)}>+</button>
          </div>

          <button
            onClick={() => {
              const productoConCantidad = {
                ...productoSeleccionado,
                cantidad,
                total: productoSeleccionado.precio * cantidad,
              };
              setMiPedido([...miPedido, productoConCantidad]);
              setMostrarModal(false);
            }}
          >
            Agregar al pedido – ${productoSeleccionado.precio * cantidad}
          </button>
        </div>
      )}

      <div className="mi-pedido">
        <h3>Mi pedido</h3>
        {miPedido.length === 0 ? (
          <p>Tu pedido está vacío</p>
        ) : (
          miPedido.map((item, index) => (
            <div key={index}>
              <span>{item.nombre}</span>
              <span>
                {item.cantidad} x ${item.precio}
              </span>
              <strong>= ${item.total}</strong>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MainRestaurante;
