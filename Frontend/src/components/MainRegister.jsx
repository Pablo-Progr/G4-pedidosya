import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/mainlogin.css";

const MainRegister = () => {
    //Creamos Estados Para El Inicio De Sesion
    const [nombre, setNombre] = useState("");
    const [mail, setMail] = useState("");
    const [tel, setTel] = useState("");
    const [idRol,setIdeRol] = useState(2)
  const [direccion, setDireccion] = useState("");
  const [pass, setPass] = useState("");
    const [error, setError] = useState(null);
    
    const navigate = useNavigate()

  //Funcion Para Enviar Datos Al Backend Para crear usuario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/usuarios/crearUsuario",
          {
            nombre,
              mail,
              tel,
              idRol,
          direccion,
          pass,
        }
      );

      console.log(response.data);
      setError(null);

      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuario creado",
          showConfirmButton: false,
          timer: 1500,
        });
        }
        navigate("/")
    } catch (err) {
      console.error("Error al crear usuario:", err);
      setError("Credenciales incorrectas ");
      Swal.fire({
        position: "center",
        icon: "error",
        title: " incorrecta",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container-mains login">
      <div className="div-content-loginadmin">
        <h1 className="titulo" style={{color:"aliceblue"}}>Registero</h1>
        <div className="content-form-admin">
          <Form className="form-admin" onSubmit={handleSubmit}>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Nombre</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Por favor, ingrese su usuario"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Mail</h5>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Por favor, ingrese su usuario"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Telefono</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Por favor, ingrese su usuario"
                required
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Direccion</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Por favor, ingrese su usuario"
                required
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
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
                Registrarse
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainRegister;
