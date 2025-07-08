import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import "../css/mainadmin.css";
import useUsuarioStore from "../store/usuarioStore";
import EditProductoModal from "./EditProductoModal";

const MainLocalCrud = () => {
  const [idLocal, setIdLocal] = useState("");
  const [categorias, setCategorias] = useState([]);
  const idUsuario = useUsuarioStore((state) => state.usuario?.idUsuario);
  const [productos, setProductos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const buscarLocalPorPropietario = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/locales/buscarporpropietario",
        { idUsuario }
      );
      console.log(response.data);
      const localId = response.data[0].idLocal;
      setIdLocal(localId);
      console.log(idLocal);
      fetchProductos(localId);
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
  const fetchProductos = async (idLocalParam) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/pr/productos/local`,
        { idLocal: idLocalParam }
      );
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const handleDelete = async (idProducto) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/pr/productos/eliminar/${idProducto}`
      );
      setProductos(
        productos.filter((producto) => producto.idProducto !== idProducto)
      );

      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Publicación eliminada correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setProductoSeleccionado(null);
  };

  useEffect(() => {
    buscarLocalPorPropietario();
    fetchCategorias();
  }, []);

  return (
    <div className="container-mains">
      <div className="container text-center div-content-admin">
        <h1>Listado de Productos</h1>
        <Table responsive className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Tiempo de Preparado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={producto.idProducto}>
                <td>{index + 1}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>{producto.descripcion}</td>
                <td>
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    style={{ width: "60px" }}
                  />
                </td>
                <td>{producto.tiempoPreparado} min</td>
                <td>
                  <button
                    className="btn btn-warning m-2"
                    onClick={() => abrirModal(producto)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => handleDelete(producto.idProducto)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <EditProductoModal
        show={modalVisible}
        onClose={cerrarModal}
        productoData={productoSeleccionado}
        onUpdate={() => fetchProductos(idLocal)}
      />
    </div>
  );
};

export default MainLocalCrud;
