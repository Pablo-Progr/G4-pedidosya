import { Navigate } from "react-router-dom";
import useUsuarioStore from "../store/usuarioStore";

const RutaProtegidaUsuario = ({ children }) => {
  const usuario = useUsuarioStore((state) => state.usuario);
  const rol = useUsuarioStore((state) => state.rol);

  if (!usuario || rol !== "usuario") {
    return <Navigate to="/" />; // Si no está logueado o no es "usuario", lo manda al login
  }

  return children; // Si es usuario normal, muestra el contenido
};

export default RutaProtegidaUsuario;
