const { conection } = require("../config/database");

const getProductos = (req, res) => {
  const consulta = "select * from productos;";
  conection.query(consulta, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

//Funcion para obtener un local por su ID y sus productos agrupados por categoria
const obtenerLocalPorId = (req, res) => {
  const { id } = req.params;

  const local = "SELECT * FROM locales WHERE idLocal = ?"; //Obtengo el local por su ID
  const productos = `
    SELECT 
      p.idProducto, p.nombre, p.descripcion, p.precio, p.imagen,p.tiempoPreparado ,p.idLocal,
      c.nombre AS categoria
    FROM productos p
 JOIN catproductos c ON p.IdCatProducto = c.idCatProducto
    where idLocal = ?
  `; // Obtengo los productos del local por su ID y los agrupo por categoria

  conection.query(local, [id], (err, localResult) => {
    if (err) {
      console.error("Error al obtener el local:", err);
      return res.status(500).json({ error: "Error al obtener el local" });
    }

    if (localResult.length === 0) {
      return res.status(404).json({ error: "Local no encontrado" });
    }
    const loc = localResult[0];

    conection.query(productos, [id], (err, productosResult) => {
      if (err) {
        console.error("Error al obtener los productos:", err);
        return res
          .status(500)
          .json({ error: "Error al obtener los productos" });
      }

      const productosPorCategoria = {};

      productosResult.forEach((producto) => {
        const categoria = producto.categoria;
        if (!productosPorCategoria[categoria]) {
          productosPorCategoria[categoria] = [];
        }
        productosPorCategoria[categoria].push(producto);
      });

      // Devolver datos del local + productos agrupados
      res.json({
        ...loc,
        productos: productosPorCategoria,
      });
    });
  });
};

module.exports = { getProductos, obtenerLocalPorId };
