import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "../css/mainadmin.css";

const MainAdmin = () => {

    const initialState = {
      titulo: "",
      imagen: "",
      categoria: "",
      descripcion: "",
      link: "",
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
          "http://localhost/proyectoBit/backend/alta.php",
          {
            titulo: datos.titulo,
            imagen: datos.imagen,
            categoria: datos.categoria,
            descripcion: datos.descripcion,
            link: datos.link,
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
                  <Form className="form-admin" > {/*onSubmit={handleSubmit}*/}
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Titulo</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el título"
                name="titulo"
               
              ></Form.Control>{/* onChange={handleChange} */}
            </Form.Group>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Imagen de Portada</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la imagen de portada"
                name="imagen"
                              
              ></Form.Control>{/* onChange={handleChange} */}
            </Form.Group>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Categoria de la publicacion</h5>
              </Form.Label>
              <Form.Select name="categoria">{/* onChange={handleChange} */}
                <option>Seleccione una categoria</option>
                <option value="interviews">Interviews</option>
                <option value="podcast">Podcast</option>
                <option value="resources">Resources</option>
                <option value="for_corporation">For Corporation</option>
                <option value="leaders">Leaders</option>
                <option value="websites">Websites</option>
              </Form.Select>
            </Form.Group>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Descripción</h5>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción"
                              name="descripcion"
                              
              ></Form.Control>{/* onChange={handleChange} */}
            </FormGroup>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5> Link de la publicacion</h5>
              </Form.Label>
              <Form.Control
                placeholder="Ingrese Link de la publicacion"
                type="text"
                name="link"
                              
              ></Form.Control>{/* onChange={handleChange} */}
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="m-3" type="submit">
                Subir Publicacion
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainAdmin;
