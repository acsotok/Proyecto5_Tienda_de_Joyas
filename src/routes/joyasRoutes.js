const express = require('express')
const router = express.Router()
const joyasControllers = require('../controllers/joyasControllers')

router.get("/joyas", joyasControllers.obtenerJoyas)
router.get("/joya/:id", joyasControllers.obtenerJoyaById)
router.get("/joyas/filtros", joyasControllers.obtenerJoyasPorFiltro)
router.get("*", joyasControllers.getDefautl)

module.exports = router;