const { Router } = require('express')

// const validarCampos = require('../middlewares/validar-campos')
const countries = require('../controllers/countries')

const router = Router()

router.get('/', countries.getAll)

module.exports = router