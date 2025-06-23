import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/mainadmin.css";

const MainAdminCrud = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost/proyectoBit/backend/listarFC.php"
        );
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container-mains">
      <div className="container text-center div-content-admin">
        <h2>Listado de Restrurantes</h2>
        <Table responsive className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Imagen Portada</th>
              <th>Categoria</th>
              <th>Descripcion</th>
              <th>Enlace</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {article.map((for_corporation, index) => (
              <tr key={for_corporation.id}>
                <td>{index}</td>
                <td>{for_corporation.titulo}</td>
                <td>
                  <img
                    src={for_corporation.imagen}
                    alt={for_corporation.titulo}
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{for_corporation.categoria}</td>
                <td>{for_corporation.descripcion}</td>
                <td>
                  <a
                    href={for_corporation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Entrevista
                  </a>
                </td>
                <td>
                  <Link
                    to={`/editInterview/${for_corporation.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          "¿Estás seguro de eliminar esta entrevista?"
                        )
                      ) {
                        axios
                          .post(
                            "http://localhost/proyectoBit/backend/eliminarInterview.php",
                            { id: for_corporation.id }
                          )
                          .then(() => {
                            setArticle(
                              article.filter((a) => a.id !== for_corporation.id)
                            );
                          })
                          .catch((error) =>
                            console.error(
                              "Error deleting for_corporation:",
                              error
                            )
                          );
                      }
                    }}
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
