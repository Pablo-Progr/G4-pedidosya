import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/logoPedidosYa.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import '../css/header.css'

const Header = () => {
  return (
    <Navbar expand="lg" className="row navbar-header">
      <div className="col d-flex justify-content-center">
        <img src={Logo} className="img-logo" />
      </div>
      <div className="col-6 d-flex justify-content-center">
        <Form className="d-flex search-container">
          <Form.Control
            type="Search"
            placeholder="Buscar Locales"
            className="me-2 input-header"
            aria-label="Search"
          />
          <button className="boton-buscar-header">
            <IoIosSearch className="boton-buscar-header-i" />
          </button>
        </Form>
      </div>
      <div className="col d-flex justify-content-end">
        <div>
          <IoPersonOutline />
        </div>
        <div>
          <NavDropdown title="Mi Perfil" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Ayuda en Linea</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Iniciar Sesion</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
