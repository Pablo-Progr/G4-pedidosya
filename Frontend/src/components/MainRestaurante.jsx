import React from "react";
import "../css/mainRestaurante.css"; // Importa tu archivo CSS para estilos
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MainRestaurante = () => {
  const { id } = useParams();
  const [local, setLocal] = useState(null);

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

  return (
    <div>
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
          {local.productos.map((producto) => (
            <div className="product-card" key={producto.id}>
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
    </div>
  );
};

export default MainRestaurante;
