import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/logoPedidosYa.png";
import { IoPersonOutline } from "react-icons/io5";
import "../css/headerAdmin.css";

const HeaderAdmin = () => {
  return (
    <div>
      <Navbar expand="lg" className="row navbar-header">
        <div className="col d-flex justify-content-center">
          <img src={Logo} className="img-logo" />
        </div>
        <div className="col-6 d-flex justify-content-around">
          <Link to={"/admin"} className="linkBotonAdmin">
            <button className="botonAdmin">Alta Restaurante</button>
          </Link>
          <Link to={"/adminCrud"} className="linkBotonAdmin">
            <button className="botonAdmin">Lista Restaurante</button>
          </Link>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="m-2 perfil">
            <IoPersonOutline />
          </div>
          <div className="m-2 perfil">
            <NavDropdown title="Mi Perfil">
              <NavDropdown.Item href="#action3">
                Ayuda en Linea
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Iniciar Sesion
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderAdmin;
