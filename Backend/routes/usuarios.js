const express = require("express");

const { loginUsuario } = require("../controllers/usuarios");

const router = express.Router();

router.post("/login", loginUsuario);

module.exports = router;
