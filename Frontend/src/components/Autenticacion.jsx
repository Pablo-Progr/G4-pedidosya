import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLogin from "./MainLogin";
import useUsuarioStore from "../store/usuarioStore";

const Autenticacion = () => {
  const iniciarSesion = useUsuarioStore((state) => state.iniciarSesion);
  const usuario = useUsuarioStore((state) => state.usuario);
  const rol = useUsuarioStore((state) => state.rol);
  const navigate = useNavigate();

  // Esta es la función onLogin, VOS la definís acá:
  const handleLogin = (datosUsuario) => {
    iniciarSesion(datosUsuario); // Guarda el usuario en el store
    };
    
    console.log()

  // Redirige si ya está logueado
  useEffect(() => {
    if (usuario && rol) {
      if (rol === "admin") {
        navigate("/Admin");
      } else if (rol === "usuario") {
        navigate("/restaurantes");
      }
    }
  }, [usuario, rol, navigate]);

  return <MainLogin handleLogin={handleLogin} />;
};

export default Autenticacion;
