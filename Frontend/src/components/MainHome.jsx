import PostreInicio from "../img/PostreInicio.webp";
import restauraFoto from "../img/restaurants-foto.webp";
import marketFoto from "../img/market-foto.webp";
import mercadoFoto from "../img/mercados-foto.webp";
import heladoFoto from "../img/helados-foto.webp";
import bebidaFoto from "../img/drinks-foto.webp";
import kioscoFoto from "../img/kioscos-foto.webp";
import "../css/mainHome.css";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div>
      <div className="container">
        <div className="m-3">
          <h5>Hola. Que vas a pedir hoy?</h5>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <Link to="/restaurantes"className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Restaurantes</p>
              <div>
                <img src={restauraFoto} alt="" className=" img-tipo-locales" />
              </div>
            </Link>
            <a href="#" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Pedidos Ya Market</p>
              <div>
                <img src={marketFoto} alt="" className=" img-tipo-locales" />
              </div>
            </a>
            <a href="#" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Mercados</p>
              <div>
                <img src={mercadoFoto} alt="" className=" img-tipo-locales" />
              </div>
            </a>
            <a href="#" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Helados</p>
              <div>
                <img src={heladoFoto} alt="" className=" img-tipo-locales" />
              </div>
            </a>
            <a href="#" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Bebidas</p>
              <div>
                <img src={bebidaFoto} alt="" className="img-tipo-locales" />
              </div>
            </a>
            <a href="#" className="col card card-tipo-locales">
              <p style={{ color: "black" }}>Kiosco</p>
              <div>
                <img src={kioscoFoto} alt="" className=" img-tipo-locales" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="contenedor-marketing">
        <div className="container">
          <div className="row ">
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
    </div>
  );
};

export default MainHome;
