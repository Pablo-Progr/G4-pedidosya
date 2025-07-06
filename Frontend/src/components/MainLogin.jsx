import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/mainlogin.css";

const MainLogin = ({ handleLogin }) => {
  //Creamos Estados Para El Inicio De Sesion
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  //Funcion Para Enviar Datos Al Backend Para El Inicio De Sesion
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

      handleLogin(response.data); // Envia Esos Datos A Zustand
      setError(null);

      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Iniciaste sesion",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Credenciales incorrectas ");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Usuario o contrasenia incorrecta",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container-mains login">
      <div className="div-content-loginadmin">
        <h1 className="titulo" style={{color:"aliceblue"}}>Inicio de sesion</h1>
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

              <Button className="m-3">
                <Link className="m-3" to="/register">
                  Registrarse
                </Link>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
