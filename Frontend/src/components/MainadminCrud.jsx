import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import "../css/mainadmin.css";
import EditModal from "./EditModal";

const MainAdminCrud = () => {
  const [locales, setLocales] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [localSeleccionado, setLocalSeleccionado] = useState(null);

  const fetchLocales = async () => {
    try {
      const response = await axios.get("http://localhost:8000/locales");
      setLocales(response.data);
    } catch (error) {
      console.error("Error fetching locales:", error);
    }
  };

  useEffect(() => {
    fetchLocales();
  }, []);

  const handleDelete = async (idLocal) => {
    try {
      await axios.delete(`http://localhost:8000/locales/eliminar/${idLocal}`);
      setLocales(locales.filter((local) => local.idLocal !== idLocal));
    } catch (error) {
      console.error("Error eliminando local:", error);
    }
  };

  const abrirModal = (local) => {
    setLocalSeleccionado(local);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setLocalSeleccionado(null);
  };

  return (
    <div className="container-mains">
      <div className="container text-center div-content-admin">
        <h2>Listado de Restaurantes</h2>
        <Table responsive className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Dirección</th>
              <th>Valoración</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {locales.map((local, index) => (
              <tr key={local.idLocal}>
                <td>{index + 1}</td>
                <td>{local.nombre}</td>
                <td>
                  <img
                    src={local.imagen}
                    alt="Imagen"
                    style={{ width: "60px" }}
                  />
                </td>
                <td>{local.direccion}</td>
                <td>{local.idValoracion}</td>
                <td>
                  <button
                    className="btn btn-warning m-2"
                    onClick={() => abrirModal(local)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => handleDelete(local.idLocal)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal de Edición */}
      <EditModal
        show={modalVisible}
        onClose={cerrarModal}
        localData={localSeleccionado}
        onUpdate={fetchLocales}
      />
    </div>
  );
};

export default MainAdminCrud;
