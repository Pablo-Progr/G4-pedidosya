import PostreInicio from "../img/PostreInicio.webp";
import restauraFoto from "../img/restaurants-foto.webp";
import marketFoto from "../img/market-foto.webp";
import mercadoFoto from "../img/mercados-foto.webp";
import heladoFoto from "../img/helados-foto.webp";
import bebidaFoto from "../img/drinks-foto.webp";
import kioscoFoto from "../img/kioscos-foto.webp";
import chicaPizza from "../img/mina-pedidos-ya.webp";
import ciudad from "../img/top-ciudades.webp";
import hamburguesa from "../img/top-comidas.webp";
import restaurante from "../img/restaurante.jpg";
import pago from "../img/pago.avif";
import supermerk2 from "../img/supermerk2.jpg";
import "../css/mainHome.css";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <>
      {/* Header */}
      <div className="container">
        <div className="m-3">
          <h5>Hola. ¿Qué vas a pedir hoy?</h5>
        </div>
        {/* Categorías */}
        <div className="container">
          <div className="row d-flex justify-content-center">
            <Link to="/restaurantes" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Restaurantes</p>
              <div>
                <img src={restauraFoto} alt="" className="img-tipo-locales" />
              </div>
            </Link>
            <a href="/error" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Pedidos Ya Market</p>
              <div>
                <img src={marketFoto} alt="" className="img-tipo-locales" />
              </div>
            </a>
            <a href="/error" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Mercados</p>
              <div>
                <img src={mercadoFoto} alt="" className="img-tipo-locales" />
              </div>
            </a>
            <a href="/error" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Helados</p>
              <div>
                <img src={heladoFoto} alt="" className="img-tipo-locales" />
              </div>
            </a>
            <a href="/error" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Bebidas</p>
              <div>
                <img src={bebidaFoto} alt="" className="img-tipo-locales" />
              </div>
            </a>
            <a href="/error" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Kiosco</p>
              <div>
                <img src={kioscoFoto} alt="" className="img-tipo-locales" />
              </div>
            </a>
          </div>
        </div>
        <div className="m-3">
          <h5>No te pierdas estas promociones</h5>
        </div>
      </div>

      {/* Promociones */}
      

        <div className="contenedor-promo">

          <Link to="/error" className="card card-amarilla">
            <div className="card-promo">
              <h3>Restaurantes</h3>
              <p>¡Disfrutá estas promociones!</p>
            </div>
            <img src={restaurante} alt="Restaurantes" />
          </Link>

          <Link to="/error" className="card card-rosada">
            <div className="card-promo">
              <h3>Medios de pago</h3>
              <p>¡Conocé todas las opciones de ahorro!</p>
            </div>
            <img src={pago} alt="Medios de pago" />
          </Link>

          <Link to="/error" className="card card-azul">
            <div className="card-promo">
              <h3>Mercados</h3>
              <p>¡Conocé las promos y ahorrá!</p>
            </div>
            <img src={supermerk2} alt="Mercados" />
          </Link>

        </div>
      

      {/* Sección chica pizza */}
      <div className="contenedor-chica-pizza">
        <img
          src={chicaPizza}
          alt="Mujer comiendo pizza"
          className="chica-pizza-imagen"
        />
        <div className="info-pizza">
          <div className="info-item">
            <div className="icono-circulo">
              <img src={ciudad} alt="ciudad" className="icono-chica-pizza" />
            </div>
            <div>
              <Link to="/error" className="titulo-info">
                <h3 className="titulo-info">Top Ciudades</h3>
              </Link>
              <p className="texto-info">
                Buenos Aires, Córdoba, Rosario, La Plata, San Miguel de Tucumán,
                Mar del Plata.
              </p>
            </div>
          </div>
          <div className="info-item">
            <div className="icono-circulo">
              <img
                src={hamburguesa}
                alt="hamburguesa"
                className="icono-chica-pizza"
              />
            </div>
            <div>
              <Link to="/error" className="titulo-info">
                <h3 className="titulo-info">Top Comidas</h3>
              </Link>
              <p className="texto-info">
                Helados, Pizzas, Hamburguesas, Empanadas, Postres, Sándwiches.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección marketing */}
      <div className="contenedor-marketing">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6>Todo lo que necesitás, ¡te lo llevamos!</h6>
              <div>
                <p>
                  En PedidosYa podés dejar volar tu imaginación porque ahora
                  todo lo que quieras lo llevamos directo desde tu cabeza a
                  donde estés, ¡en minutos!
                </p>
                <p>
                  ¿Lo querés? ¡Lo tenés! Pedí a los mejores restaurantes, hacé
                  el pedido del súper, comprá la comida para tu mascota, la
                  bebida para los amigos, pedí lo que necesites de la farmacia y
                  ¡mucho más!
                </p>
                <p>
                  En simples pasos podés tener lo que quieras directamente en tu
                  puerta: descubrí, pedí y recibí a domicilio con PedidosYa.
                </p>
              </div>
            </div>
            <div className="col">
              <img src={PostreInicio} alt="" style={{ margin: "0px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
