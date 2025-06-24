const express = require("express");

const { getProductos, getProducto, deleteProducto, obtenerLocalPorId } = require("../controllers/productos");

const router = express.Router();

router.get("/productos", getProductos);
router.get("/producto/:id", getProducto);
router.delete("/producto/eliminar/:id", deleteProducto);
router.get("/local/:id", obtenerLocalPorId);

module.exports = router;
