import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "../css/mainadmin.css";

const MainAdmin = () => {

    const initialState = {
      nombre: "",
      direccion: "",
      idValoracion:"",
      imagen: "",
    };

    const [datos, setDatos] = useState(initialState);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setDatos({
        ...datos,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        let response = await axios.post(
          "http://localhost:8000/crearLocal",
          {
            nombre: datos.nombre,
            direccion: datos.direccion,
            imagen: datos.imagen
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
                as="textarea"
                rows={3}
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
