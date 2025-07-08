import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import useUsuarioStore from "../store/usuarioStore";
import "../css/mainadmin.css";

const MainAdminLocal = () => {

  const idUsuario = useUsuarioStore((state) => state.usuario?.idUsuario);
  const [idLocal, setIdLocal] = useState("");
  const [categorias, setCategorias] = useState([]);

  const initialState = {
    nombre: "",
    precio: "",
    descripcion: "",
    idLocal: idLocal,
    imagen: "",
    tiempoPreparado: "",
    idCatProducto: "",
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

  const buscarLocalPorPropietario = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/locales/buscarporpropietario',
        { idUsuario }
      );
      console.log(response.data);
      setIdLocal(response.data[0].idLocal);
    } catch (error) {
      console.error("Error al buscar el local por propietario:", error);
    }
  };

 
  const fetchCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:8000/catProductos");
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:8000/pr/crearProducto", {
        nombre: datos.nombre,
        precio: datos.precio,
        descripcion: datos.descripcion,
        idLocal: datos.idLocal,
        imagen: datos.imagen,
        tiempoPreparado: datos.tiempoPreparado,
        idCatProducto: datos.idCatProducto,
      });
      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Publicación subida correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        setDatos(initialState); // Reiniciar el formulario
      } else {
        alert("Error al subir la publicación");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  console.log(categorias);

  useEffect(() => {
    buscarLocalPorPropietario();
    fetchCategorias();
  }, []);

  useEffect(() => {
    if (idLocal) {
      setDatos((prev) => ({
        ...prev,
        idLocal,
      }));
    }
  }, [idLocal]);

  return (
    <div className="container-mains">
      <div className="div-content-admin">
        <h2>Admin Dashboard</h2>
        <div className="content-form-admin">
          <Form className="form-admin" onSubmit={handleSubmit}>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Nombre Producto</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Precio del Producto</h5>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio del producto"
                name="precio"
                value={datos.precio}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Descripción</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la descripción"
                name="descripcion"
                value={datos.descripcion}
                onChange={handleChange}
              ></Form.Control>
            </FormGroup>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Imagen de Producto</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la imagen de producto"
                name="imagen"
                value={datos.imagen}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Tiempo de Preparado</h5>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el tiempo de preparado"
                name="tiempoPreparado"
                value={datos.tiempoPreparado}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Categoría</h5>
              </Form.Label>
              <Form.Select
                name="idCatProducto"
                value={datos.idCatProducto}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una categoría</option>
                {categorias.map((cat) => (
                  <option key={cat.idCatProducto} value={cat.idCatProducto}>
                    {" "}
                    {cat.nombre}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="m-3" type="submit">
                Agregar Producto
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainAdminLocal;
