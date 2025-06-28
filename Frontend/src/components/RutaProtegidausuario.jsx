import { Navigate } from "react-router-dom";
import useUsuarioStore from "../store/usuarioStore";

const RutaProtegidaUsuario = ({ children }) => {
  const usuario = useUsuarioStore((state) => state.usuario);
  const rol = useUsuarioStore((state) => state.rol);

  if (!usuario || rol !== "usuario") {
    return <Navigate to="/" />; // Si No Esta Logueado o No Es "usuario", Lo Manda Al Login
  }

  return children; // Si Es Usuario, Muestra El Contenido
};

export default RutaProtegidaUsuario;
