const express = require("express")

const { getLocales, crearLocal, deleteLocal } = require("../controllers/locales")

const router = express.Router()

router.get("/locales", getLocales)
router.post("/locales/crearLocal", crearLocal)
router.delete("/locales/eliminar/:id",deleteLocal)




module.exports = router