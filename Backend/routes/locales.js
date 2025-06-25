const express = require("express")

const { getLocales, crearLocal, deleteLocal, editarLocal } = require("../controllers/locales")

const router = express.Router()

router.get("/locales", getLocales)
router.post("/locales/crearLocal", crearLocal)
router.delete("/locales/eliminar/:id", deleteLocal)
router.put("/locales/editar/:id", editarLocal)




module.exports = router