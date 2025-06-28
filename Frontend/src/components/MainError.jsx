import React from "react";
import "../css/error.css";
import { Link } from "react-router-dom";
import riderLost from "../img/rider-lost.png"; // Asegúrate de tener esta imagen o cámbiala por la que uses

const MainError = () => {
return (
    <div className="error-container">
        <h1>¡Ups! Esta página no está en el menú.</h1>
        <p>Parece que el plato que buscás no existe (o se fue corriendo).</p>
        <div className="buttons">
            <Link to="/home" className="btn-primary">Volver al inicio</Link>
            <Link to="/restaurantes" className="btn-secondary">Ver restaurantes cercanos</Link>
        </div>
        <img src={riderLost} alt="Repartidor perdido" className="error-image" />
    </div>
);
};

export default MainError;
