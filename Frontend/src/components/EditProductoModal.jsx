import { useState, useEffect } from "react";
import axios from "axios";

const EditProductoModal = ({ show, onClose, productoData, onUpdate }) => {
  //Estados Para Los Datos del Local
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [tiempoPreparado, setTiempoPreparado] = useState("");
  const [catProducto, setCatProducto] = useState("");
    const [categorias, setCategorias] = useState([]);
    
    

  //UseEffect Para Que Se Ejecute cuando cuadno cambie la variable
  useEffect(() => {
    if (productoData) {
      setNombre(productoData.nombre);
      setPrecio(productoData.precio);
      setDescripcion(productoData.descripcion);
      setImagen(productoData.imagen);
      setTiempoPreparado(productoData.tiempoPreparado);
      setCatProducto(productoData.catProducto);
    }
  }, [productoData]);

  //Funcion Para Actualizar Los Datos Del Local
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
            const response = await axios.put(
              `http://localhost:8000/pr/productos/editar/${productoData.idProducto}`,
              {
                nombre,
                precio,
                descripcion,
                imagen,
                tiempoPreparado,
                idCatProducto: catProducto,
              }
      );
      onUpdate();
      onClose();
      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Producto actualizada correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error actualizando local:", error);
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

  useEffect(() => {
    fetchCategorias();
  }, []);

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
              style={{ backgroundColor: "#e60050", color: " white" }}
            >
              <h5 className="modal-title">Editar Producto</h5>
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
                <label className="form-label">Precio</label>
                <input
                  type="text"
                  className="form-control"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
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
              <div className="mb-3">
                <label className="form-label">Tiempo de Preparación</label>
                <input
                  type="text"
                  className="form-control"
                  value={tiempoPreparado}
                  onChange={(e) => setTiempoPreparado(e.target.value)}
                />
              </div>

              <div className="mb-3">
                {" "}
                <label className="form-label">Categoría</label>{" "}
                <select
                  className="form-select"
                  value={catProducto}
                  onChange={(e) => setCatProducto(e.target.value)}
                  required
                >
                  {" "}
                  <option value="">Seleccione una categoría</option>{" "}
                  {categorias.map((cat) => (
                    <option key={cat.idCatProducto} value={cat.idCatProducto}>
                      {" "}
                      {cat.nombre}{" "}
                    </option>
                  ))}{" "}
                </select>{" "}
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

export default EditProductoModal;
