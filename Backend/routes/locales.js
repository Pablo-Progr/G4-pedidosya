const express = require("express")

const { getLocales, crearLocal, deleteLocal, editarLocal, buscarLocales } = require("../controllers/locales")

const router = express.Router()

//Creo Rutas 
router.get("/locales", getLocales)
router.post("/locales/crearLocal", crearLocal)
router.delete("/locales/eliminar/:id", deleteLocal)
router.put("/locales/editar/:id", editarLocal)
router.get("/locales/buscar", buscarLocales)




module.exports = router