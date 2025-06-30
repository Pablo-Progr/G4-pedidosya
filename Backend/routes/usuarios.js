const express = require("express"); //Importo Libreria de EXPRESS

const { loginUsuario, crearUsuario } = require("../controllers/usuarios"); //Traigo Mis Rutas de Usuario

const router = express.Router(); //Utilizo la Funcion de Rutas de Express

router.post("/login", loginUsuario);
router.post("/crearUsuario", crearUsuario)//Ruta para hacer Post

module.exports = router;
