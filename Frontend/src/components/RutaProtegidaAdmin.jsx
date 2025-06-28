import { Navigate } from "react-router-dom";
import useUsuarioStore from "../store/usuarioStore";

const RutaProtegidaAdmin = ({ children }) => {
  const usuario = useUsuarioStore((state) => state.usuario);
    const rol = useUsuarioStore((state) => state.rol);
    

  if (!usuario || rol !== "admin") {
    return <Navigate to="/" />; // Redirige al login si no está logueado o no es admin
  }

  return children; // Si es admin, muestra el contenido protegido
};

export default RutaProtegidaAdmin;
