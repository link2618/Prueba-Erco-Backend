
const { Sequelize } = require('sequelize');

const Cities = require('../models/cities');
const States = require('../models/states');

const cities = {}

cities.getAll = async (req, res) => {

    try {
        const cities = await Cities.findAll()

        res.json({ok:true, data: cities}) 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'fail'
        })
    }
}

cities.getById = async (req, res) => {

    try {
        const { id } = req.params
        const cities = await Cities.findByPk(id)

        res.json({ok:true, data: [cities]}) 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'fail'
        })
    }
}

cities.getByState = async (req, res) => {

    try {
        const { state } = req.params
        const cities = await Cities.findAll({where: {id_state: state}})

        res.json({ok:true, data: cities}) 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'fail'
        })
    }
}

cities.getByCountrie = async (req, res) => {

    try {
        const { countrie } = req.params
        const {in: opIn} = Sequelize.Op;
        const statesDB = await States.findAll({where: {id_country: countrie}})
        const states = statesDB.map( item => item.id_state)

        console.log('-->',states)
        const cities = await Cities.findAll({
            where: {
                id_state: {
                    [opIn]:states
                }
            }, include: [{model:States}]
        })

        res.json({ok:true, data: cities}) 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'fail'
        })
    }
}

module.exports = cities