import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLogin from "./MainLogin";
import useUsuarioStore from "../store/usuarioStore";

//Funcion Que Utiliza Zustand Para Acceder y Modificar El Estado Global Del Usuario
const Autenticacion = () => {
  const iniciarSesion = useUsuarioStore((state) => state.iniciarSesion);
  const usuario = useUsuarioStore((state) => state.usuario);
  const rol = useUsuarioStore((state) => state.rol);
  const navigate = useNavigate();

  //Funcion Para Pasar Al Componente MainLogin Cuando el usuario inicia sesión, recibe los datos del backend y los guarda en el store global.
  const handleLogin = (datosUsuario) => {
    iniciarSesion(datosUsuario); // Guarda El Usuario En El Store
  };

  console.log();

  //Redirige Si Ya Está Logueado  A La Pagina Correspondiente Segun El Rol
  useEffect(() => {
    if (usuario && rol) {
      if (rol === "admin") {
        navigate("/Admin");
      } else if (rol === "usuario") {
        navigate("/Home");
      } else if (rol === "local") {
        navigate("/AdminLocal");
      }
    }
  }, [usuario, rol, navigate]);

  return <MainLogin handleLogin={handleLogin} />;
};

export default Autenticacion;
