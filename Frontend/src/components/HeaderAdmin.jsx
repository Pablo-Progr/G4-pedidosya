import { Link, useNavigate } from "react-router-dom";
import useUsuarioStore from "../store/usuarioStore";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/logoPedidosYa.png";
import { IoPersonOutline } from "react-icons/io5";
import "../css/headerAdmin.css";

const HeaderAdmin = () => {
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
              {usuario ? (
                <NavDropdown.Item onClick={handleCerrarSesion}>
                  Cerrar Sesión
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item as={Link} to="/">
                  Iniciar Sesión
                </NavDropdown.Item>
              )}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderAdmin;
