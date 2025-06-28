const express = require("express");
const { crearCarrito, obtenerCarritos } = require("../controllers/carrito");
const router = express.Router();


router.post("/carritos/crearCarrito", crearCarrito);
router.get("/carritos", obtenerCarritos);

module.exports = router;