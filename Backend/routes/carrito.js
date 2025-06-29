const express = require("express");
const { crearCarrito, obtenerCarritos, confirmarCompra, obtenerCarritoPorUsuario } = require("../controllers/carrito");
const router = express.Router();


router.post("/confirmar", confirmarCompra);

router.post("/carritos/crearCarrito", crearCarrito);
router.get("/carritos", obtenerCarritos);
router.get("/carrito/:idUsuario", obtenerCarritoPorUsuario);
router.post("/confirmar", confirmarCompra);
module.exports = router;