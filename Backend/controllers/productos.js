const { conection } = require("../config/database")

const getProductos = (req, res) => {

    const consulta = "select * from productos;"
    conection.query(consulta, (error, results) => {
        if (error) throw error
        res.json(results)
    })
}

const obtenerLocalPorId = (req, res) => {
    const { id } = req.params;

    const local = "SELECT * FROM locales WHERE idLocal = ?";
    const productos = `
    SELECT * FROM productos
     WHERE idLocal = ?
  `;

    conection.query(local, [id], (err, localResult) => {
        if (err) {
            console.error("Error al obtener el local:", err);
            return res.status(500).json({ error: "Error al obtener el local" });
        }

        if (localResult.length === 0) {
            return res.status(404).json({ error: "Local no encontrado" });
        }

        conection.query(productos, [id], (err, productosResult) => {
            if (err) {
                console.error("Error al obtener los productos:", err);
                return res.status(500).json({ error: "Error al obtener los productos" });
            }

            res.json({
                ...localResult[0],
                productos: productosResult
            });
        });
    });
}

const getProducto = () => {

}

const deleteProducto = () => {

}

const updateProducto = () => {

}


module.exports = { getProductos, getProducto, deleteProducto, obtenerLocalPorId }