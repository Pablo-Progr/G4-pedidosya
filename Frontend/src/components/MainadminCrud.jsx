import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/mainadmin.css";

const MainAdminCrud = () => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/locales"
        );
        setLocales(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (idLocal) => {
    try {
      await axios.delete(`http://localhost:8000/locales/eliminar/${idLocal}`);
      setLocales(locales.filter((locales) => locales.idLocal !== idLocal));
    } catch (error) {
      console.error("Error eliminando local:", error);
    }
  };

  return (
    <div className="container-mains">
      <div className="container text-center div-content-admin">
        <h2>Listado de Restrurantes</h2>
        <Table responsive className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Direccion</th>
              <th>valoracion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {locales.map((locales, index) => (
              <tr key={locales.id}>
                <td>{index}</td>
                <td>{locales.nombre}</td>
                <td>
                  <img
                    src={locales.imagen}
                    alt={locales.titulo}
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{locales.direccion}</td>
                <td>{locales.idValoracion}</td>
                <td>
                  <Link className="btn btn-warning">
                    <FaEdit />
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(locales.idLocal)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MainAdminCrud;
