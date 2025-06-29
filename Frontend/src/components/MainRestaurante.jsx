import React from "react";
import "../css/mainRestaurante.css"; // Importa tu archivo CSS para estilos
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalProducto from "../components/ModalProducto";
import Header from "./Header";
import useUsuarioStore from "../store/usuarioStore";
import { useNavigate} from "react-router-dom";

const MainRestaurante = () => {
  const { id } = useParams();
  const [local, setLocal] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [miPedido, setMiPedido] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const idUsuario = useUsuarioStore((state) => state.usuario?.idUsuario);

  const navigate = useNavigate();

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

  const realizarCompra = async () => {
    try {
      if (miPedido.length === 0) {
        alert("Tu pedido está vacío");
        return;
      }

      // Preparar los productos en el formato que espera el backend
      const productosParaGuardar = miPedido.map((item) => ({
        idProducto: item.idProducto,
        cantidad: item.cantidad,
        idUsuario: idUsuario,
      }));

      await axios.post("http://localhost:8000/carritos/crearCarrito", {
        productos: productosParaGuardar,
      });

      alert("Compra realizada exitosamente");
      setMiPedido([]);
      navigate("/carrito")
    } catch (error) {
      console.error("Error al realizar la compra:", error);
      alert("Hubo un error al procesar la compra");
    }
  };

  return (
    <div>
      <Header onBuscar={setBusqueda} />
      {console.log(busqueda)}
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
              {Object.keys(local.productos).map((categoria) => (
                <li key={categoria}>
                  <a href={`#${categoria.toLowerCase().replace(/\s/g, "-")}`}>
                    {categoria}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Columna central con las cards */}

        <main className="product-wrapper">
          {Object.entries(local.productos).map(([categoria, productos]) => {
            const productosFiltrados = productos.filter((producto) =>
              producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
            );

            if (productosFiltrados.length === 0) return null;

            return (
              <div
                key={categoria}
                id={categoria.toLowerCase().replace(/\s/g, "-")}
                className="categoria-section"
              >
                <h2>{categoria}</h2>
                <div className="productos-categoria">
                  {productosFiltrados.map((producto) => (
                    <div
                      className="product-card"
                      key={producto.id}
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
                </div>
              </div>
            );
          })}
        </main>
      </div>
      {/* Modal para seleccionar cantidad y agregar al pedido */}
      <ModalProducto
        show={mostrarModal}
        onCerrar={() => setMostrarModal(false)}
        producto={productoSeleccionado}
        cantidad={cantidad}
        setCantidad={setCantidad}
        onAgregar={() => {
          const productoConCantidad = {
            ...productoSeleccionado,
            cantidad,
            total: productoSeleccionado.precio * cantidad,
          };
          setMiPedido([...miPedido, productoConCantidad]);
          setMostrarModal(false);
        }}
      />
      <div className="mi-pedido">
        <h3>Mi pedido</h3>
        {miPedido.length === 0 ? (
          <p>Tu pedido está vacío</p>
        ) : (
          <>
            {miPedido.map((item, index) => (
              <div key={index}>
                <span>{item.nombre}</span>
                <span>
                  {item.cantidad} x ${item.precio}
                </span>
                <strong>= ${item.total}</strong>
              </div>
            ))}

            {/* Subtotal general */}
            <hr />
            <div style={{ fontWeight: "bold", marginTop: "1rem" }}>
              Total: $
              {miPedido.reduce((acc, item) => acc + item.total, 0).toFixed(2)}
            </div>
            <button onClick={realizarCompra}>Realizar compra</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MainRestaurante;
