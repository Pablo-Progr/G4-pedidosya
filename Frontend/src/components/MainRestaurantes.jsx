import React from "react";
import "../css/restaurantes.css";
import parrilladaFoto from "../img/parrillada.jpg";
import hamburguesaFoto from "../img/hambur.jpg";
import pizzaFoto from "../img/pizza.jpeg";
import empanadaFoto from "../img/empanadas.jpg";
const MainRestaurantes = () => {
  return (
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
        <div className="restaurant-card">
          <img
            className="restaurant-logo"
            src={parrilladaFoto}
            alt="Logo"
          />
          <div className="restaurant-info">
            <span className="sponsored">PATROCINADO</span>
            <h3 className="restaurant-name">Don Calcagni Parrillada</h3>
            <div className="restaurant-meta">
              <span>15-30 min</span>
              <span>·</span>
              <span>Envío $850</span>
            </div>
          </div>
          <div className="restaurant-rating">
            <span className="star">★</span>
            <span>5</span>
          </div>
        </div>

        <div className="restaurant-card">
          <img
            className="restaurant-logo"
            src={pizzaFoto}
            alt="Logo"
          />
          <div className="restaurant-info">
            <h3 className="restaurant-name">Pizzería: Lo de Pablo</h3>
            <div className="restaurant-meta">
              <span>15-30 min</span>
              <span>·</span>
              <span>Envío $1.029</span>
            </div>
          </div>
          <div className="restaurant-rating">
            <span className="star">★</span>
            <span>4.5</span>
          </div>
        </div>

        <div className="restaurant-card">
          <img
            className="restaurant-logo"
            src={hamburguesaFoto}
            alt="Logo"
          />
          <div className="restaurant-info">
            <h3 className="restaurant-name">Roldán Hamburguesas</h3>
            <div className="restaurant-meta">
              <span>10-15 min</span>
              <span>·</span>
              <span>Envío $1.000</span>
            </div>
          </div>
          <div className="restaurant-rating">
            <span className="star">★</span>
            <span>4</span>
          </div>
        </div>

        <div className="restaurant-card">
          <img
            className="restaurant-logo"
            src={empanadaFoto}
            alt="Logo"
          />
          <div className="restaurant-info">
            <h3 className="restaurant-name">Alvarez Empanadas y más!</h3>
            <div className="restaurant-meta">
              <span>20-45 min</span>
              <span>·</span>
              <span>Envío GRATIS</span>
            </div>
          </div>
          <div className="restaurant-rating">
            <span className="star">★</span>
            <span>1.5</span>
          </div>
        </div>
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
  );
};

export default MainRestaurantes;
