import React from "react";
import "../css/restaurantes.css";
import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainRestaurantes = () => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:8000/locales");
        setLocales(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const buscarLocales = async (termino) => {
    try {
      const url = termino
        ? `http://localhost:8000/locales/buscar?termino=${termino}`
        : "http://localhost:8000/locales";

      const response = await axios.get(url);
      setLocales(response.data);
    } catch (error) {
      console.error("Error al buscar locales:", error);
    }
  };

  useEffect(() => {
    buscarLocales(""); // Carga inicial
  }, []);

  return (
    <>
      <Header onBuscar={buscarLocales} />
      <div className="page-layout">
        {/* Columna izquierda */}
        <aside className="sidebar left-sidebar">
          <h3>Ordenar</h3>
          <ul>
            <li>Sugeridos</li>
            <li>Mejor puntuados</li>
            <li>Más cercanos</li>
          </ul>
        </aside>

        {/* Columna central con las cards */}
        <main className="restaurantes-wrapper">
          {locales.map((local, index) => (
            <div className="restaurant-card" key={local.idLocal}>
              <Link to={`/restaurante/${local.idLocal}`}>
                <img
                  className="restaurant-logo"
                  src={local.imagen}
                  alt="Logo"
                />
                <div className="restaurant-info">
                  <h3 className="restaurant-name">
                    {index + 1}. {local.nombre}
                  </h3>
                  <div className="restaurant-meta">
                    <span>{local.direccion}</span>
                  </div>
                </div>
                <div className="restaurant-rating">
                  <span className="star">★</span>
                  <span>5</span>
                </div>
              </Link>
            </div>
          ))}
        </main>

        {/* Columna derecha */}
        <aside className="sidebar right-sidebar">
          <h3>Categorías</h3>
          <ul>
            <li>Pizzas</li>
            <li>Empanadas</li>
            <li>Helados</li>
            <li>Hamburguesas</li>
            <li>Sandwiches</li>
            <li>Parillada</li>
            <li>Pastas</li>
            <li>Sushi</li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default MainRestaurantes;
