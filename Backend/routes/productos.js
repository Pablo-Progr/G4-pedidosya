const express = require("express");

const { getProductos, obtenerLocalPorId, crearProducto } = require("../controllers/productos");

const router = express.Router();

router.get("/productos", getProductos);
router.get("/local/:id", obtenerLocalPorId);
router.post("/crearProducto", crearProducto);

module.exports = router;
