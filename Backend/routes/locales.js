const express = require("express")

const { getLocales, crearLocal } = require("../controllers/locales")

const router = express.Router()

router.get("/locales", getLocales)
router.post("/locales/crearLocal", crearLocal)




module.exports = router