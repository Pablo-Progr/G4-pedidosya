import { Navigate } from "react-router-dom";
import useUsuarioStore from "../store/usuarioStore";

const RutaProtegidaAdminLocal = ({children}) => {
  const usuario = useUsuarioStore((state) => state.usuario);
  const rol = useUsuarioStore((state) => state.rol);

  if (!usuario || rol !== "local") {
    return <Navigate to="/" />; // Redirige al login si no está logueado o no es local
  }

  return children; // Si es local, muestra el contenido protegido
};

export default RutaProtegidaAdminLocal;
