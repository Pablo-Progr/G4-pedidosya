const express = require("express");

const { getProductos, obtenerLocalPorId, crearProducto, obtenerProductosPorLocal, eliminarProducto, editarProducto } = require("../controllers/productos");

const router = express.Router();

router.get("/productos", getProductos);
router.get("/local/:id", obtenerLocalPorId);
router.post("/crearProducto", crearProducto);
router.post("/productos/local/", obtenerProductosPorLocal);
router.delete("/productos/eliminar/:id", eliminarProducto);
router.put("/productos/editar/:id", editarProducto);

module.exports = router;
