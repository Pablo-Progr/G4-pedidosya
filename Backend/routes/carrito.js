const express = require("express");
const { crearCarrito, obtenerCarritos,obtenerCarritoPorUsuario} = require("../controllers/carrito");
const router = express.Router();


router.post("/carritos/crearCarrito", crearCarrito);
router.get("/carritos/", obtenerCarritos);
router.get("/usuario/:idUsuario", obtenerCarritoPorUsuario);

module.exports = router;