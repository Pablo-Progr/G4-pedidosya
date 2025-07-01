import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/logoPedidosYa.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import "../css/header.css";
import { Link, useNavigate } from "react-router-dom";
import useUsuarioStore from "../store/usuarioStore";

const Header = ({ onBuscar }) => {
  
  //Creo Variable Con Datos y Funcio Importadas Desde Zusatand 
  const usuario = useUsuarioStore((state) => state.usuario);
  const cerrarSesion = useUsuarioStore((state) => state.cerrarSesion);
  const navigate = useNavigate();

  //Funcion Para Cerrar Sesion Utilizando Funcion De Zustand
  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate("/home");
    
  };

  return (
    <Navbar expand="lg" className="row navbar-header">
      <Link to="/home" className="col d-flex justify-content-center">
        <img src={Logo} className="img-logo" />
      </Link>
      <div className="col-6 d-flex justify-content-center">
        <Form className="d-flex search-container">
          <Form.Control
            type="Search"
            placeholder="Buscar Locales, productos"
            className="me-2 input-header"
            aria-label="Search"
            onChange={(e) => onBuscar(e.target.value)}
          />
          <button className="boton-buscar-header">
            <IoIosSearch className="boton-buscar-header-i" />
          </button>
        </Form>
      </div>
      <div className="col d-flex justify-content-center">
        <div className="m-2 perfil">
          <IoPersonOutline />
        </div>
        <div className="m-2 perfil">
          <NavDropdown title="Mi Perfil">
            {usuario ? (
              <NavDropdown.Item onClick={handleCerrarSesion}>
                Cerrar Sesión
              </NavDropdown.Item>
            ) : (
              <NavDropdown.Item as={Link} to="/">
                Iniciar Sesión
              </NavDropdown.Item>
            )}
            <NavDropdown.Item href="#action3">Ayuda en Línea</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
