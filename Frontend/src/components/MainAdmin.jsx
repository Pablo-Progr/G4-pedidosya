import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "../css/mainadmin.css";

const MainAdmin = () => {

  //Creo Objeto De datos
    const initialState = {
      nombre: "",
      direccion: "",
      imagen: "",
      mail: "",
      propietario:"",
      
    };
  
 //Creo Estado Don Guardo El Objeto De Datos
    const [datos, setDatos] = useState(initialState);

  //Creo Funcion Para Tomar Nuevos Valores De Datos Y Guardarlos En El Estado
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDatos({
        ...datos,
        [name]: value,
      });
    };

  //Funcion Para Tomar Los Datos Del Estado Y Pasarlos Al Backend Para Guardar En Base de Datos
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        let response = await axios.post(
          "http://localhost:8000/locales/crearLocal",
          {
            nombre: datos.nombre,
            direccion: datos.direccion,
            imagen: datos.imagen,
            mail: datos.mail,
            propietario: datos.propietario
          }
        );
        if (response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Publicación subida correctamente",
            showConfirmButton: false,
            timer: 1500,

          });
        } else {
          alert("Error al subir la publicación");
        }
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
      
    };

  return (
    <div className="container-mains">
      <div className="div-content-admin">
        <h2>Admin Dashboard</h2>
        <div className="content-form-admin">
          <Form className="form-admin" onSubmit={handleSubmit}>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Nombre Local</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el título"
                name="nombre"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Direccion</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la descripción"
                name="direccion"
                onChange={handleChange}
              ></Form.Control>
            </FormGroup>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Imagen de Portada</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la imagen de portada"
                name="imagen"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Mail del Local</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese mail del Local"
                name="mail"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Propietario del Local</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la Nombre del Propietario"
                name="propietario"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="m-3" type="submit">
                Agregar Local
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainAdmin;
