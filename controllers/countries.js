
const Countries = require('../models/countries');

const countries = {}

countries.getAll = async (req, res) => {

    try {
        const countries = await Countries.findAll()
        res.json({ok:true, data: countries})    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'fail'
        })
    }
}

module.exports = countries