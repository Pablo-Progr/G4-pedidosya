import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authstore";
import "../css/mainlogin.css";

const MainLogin = ({ onLogin }) => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost/proyectoBit/backend/loginAdmin.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usuario, password: contrasena }),
        credentials: "include",
      }
    );
    const data = await response.json();
    if (data.success) {
      login();
      navigate("/admin-amm");
    } else {
      setError("Usuario o contraseña incorrectos");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "User or Passwrod",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container-mains login">
      <div className="div-content-loginadmin">
        <h2>Admin Login</h2>
        <div className="content-form-admin">
          <Form className="form-admin" onSubmit={handleSubmit}>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Usuario</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Por favor, ingrese su usuario"
                name="username"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Contraseña</h5>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Por favor, ingrese su contraseña"
                name="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </FormGroup>
            {error && <p className="error-message">{error}</p>}
            <div className="d-flex justify-content-center">
              <Button className="m-3" type="submit">
                Iniciar Sesión como Administrador
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
