const { Router } = require('express')

// const validarCampos = require('../middlewares/validar-campos')
const cities = require('../controllers/cities')

const router = Router()

// router.get('/', validarCampos.validate('cities'), validarCampos.validarCamposObligatorios, cities.getAll)
router.get('/', cities.getAll)
router.get('/id/:id', cities.getById)
router.get('/state/:state', cities.getByState)
router.get('/countrie/:countrie', cities.getByCountrie)

module.exports = router