import React from "react";
import "../css/mainRestaurante.css"; // Importa tu archivo CSS para estilos

const MainRestaurante = () => {
  return (
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
        <div className="product-card">
          <div className="restaurant-info">
            <h3 className="restaurant-name">Sándwich de carne molida</h3>
            <div className="restaurant-meta">
              <p>Con agregado de papas</p>
            </div>
          </div>
          <div>
            <span className="star">$</span>
            <span>6.000</span>
          </div>
        </div>

        <div className="product-card">
          <div className="restaurant-info">
            <h3 className="restaurant-name">Pizza común</h3>
            <div className="restaurant-meta">
              <p>Salsa de tomate, muzzarela, aceitunas.</p>
            </div>
          </div>
          <div>
            <span className="star">$</span>
            <span>9.000</span>
          </div>
        </div>

        <div className="product-card">
          <div className="restaurant-info">
            <h3 className="restaurant-name">Milanesa napolitana de nalga</h3>
            <div className="restaurant-meta">
              <p>Para 2 personas</p>
            </div>
          </div>
          <div>
            <span className="star">$</span>
            <span>19.000</span>
          </div>
        </div>

        <div className="product-card">
          <div className="restaurant-info">
            <h3 className="restaurant-name">Hamburguesa triple</h3>
            <div className="restaurant-meta">
              <p>Con queso, lechuga y tomate</p>
            </div>
          </div>
          <div>
            <span className="star">$</span>
            <span>14.000</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainRestaurante;
