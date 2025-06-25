import { useState, useEffect } from "react";
import axios from "axios";

const EditModal = ({ show, onClose, localData, onUpdate }) => {
  //Estados Para Los Datos del Local
  const [nombre, setNombre] = useState(""); 
  const [direccion, setDireccion] = useState("");
  const [imagen, setImagen] = useState("");

  //UseEffect Para Que Se Ejecute cuando cuadno cambie la variable
  useEffect(() => {
    if (localData) {
      setNombre(localData.nombre);
      setDireccion(localData.direccion);
      setImagen(localData.imagen);
    }
  }, [localData]);

  //Funcion Para Actualizar Los Datos Del Local
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/locales/editar/${localData.idLocal}`,
        {
          nombre,
          direccion,
          imagen,
        }
      );
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error actualizando local:", error);
    }
  };

  //Control Del Modal 
  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", width: "100%" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div
              className="modal-header"
              style={{ backgroundColor: "#e60050", color:" white" }}
            >
              <h5 className="modal-title">Editar Local</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Imagen (URL)</label>
                <input
                  type="text"
                  className="form-control"
                  value={imagen}
                  onChange={(e) => setImagen(e.target.value)}
                />
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ backgroundColor: "#e60050" }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-success">
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
