const express = require("express");
const { buscarcategorias } = require("../controllers/catProducto");
const router = express.Router();


router.get("/catproductos", buscarcategorias);


module.exports = router;