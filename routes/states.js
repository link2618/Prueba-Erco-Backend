const { Router } = require('express')

// const validarCampos = require('../middlewares/validar-campos')
const states = require('../controllers/states')

const router = Router()

router.get('/', states.getAll)

module.exports = router