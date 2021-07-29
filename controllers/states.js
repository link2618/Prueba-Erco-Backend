
const States = require('../models/states');

const states = {}

states.getAll = async (req, res) => {

    try {
        const states = await States.findAll()
        res.json({ok:true, data: states})       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'fail'
        })
    }
}

module.exports = states