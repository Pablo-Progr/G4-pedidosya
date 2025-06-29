const express = require("express");

const { getProductos, obtenerLocalPorId } = require("../controllers/productos");

const router = express.Router();

router.get("/productos", getProductos);
router.get("/local/:id", obtenerLocalPorId);

module.exports = router;
