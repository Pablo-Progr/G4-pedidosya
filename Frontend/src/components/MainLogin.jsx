import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import "../css/mainlogin.css";

const MainLogin = ({ handleLogin }) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/usuarios/login",
        {
          mail,
          pass,
        }
      );

      console.log(response.data)
      // El backend devuelve idUsuario, nombre, email y tipo (rol)
      handleLogin(response.data); // Envías esos datos al padre o a Zustand
      setError(null);
      if (response) {
        Swal.fire({
          position: "top-end",
          icon: "Inicio de sesion exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
      }

    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Credenciales incorrectas o error del servidor.");
    }
  };

  return (
    <div className="container-mains login">
      <div className="div-content-loginadmin">
        <h2>Login</h2>
        <div className="content-form-admin">
          <Form className="form-admin" onSubmit={handleSubmit}>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Usuario</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Por favor, ingrese su usuario"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Contraseña</h5>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Por favor, ingrese su contraseña"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </FormGroup>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="d-flex justify-content-center">
              <Button className="m-3" type="submit">
                Iniciar Sesión
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
