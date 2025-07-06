import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../img/logoPedidosYa.png";
import "../css/headerAdmin.css";

const HeaderAdminLocal = () => {

  return (
    <div>
      <Navbar expand="lg" className="row navbar-header">
        <div className="col d-flex justify-content-center">
          <img src={Logo} className="img-logo" />
        </div>
        <div className="col-6 d-flex justify-content-around">
          <Link to={"/AdminLocal"} className="linkBotonAdmin">
            <button className="botonAdmin">Alta Producto</button>
          </Link>
          <Link to={"/AdminLocalCrud"} className="linkBotonAdmin">
            <button className="botonAdmin">Lista Productos</button>
          </Link>
        </div>
        <div className="col d-flex justify-content-center">
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderAdminLocal;
