const { DataTypes } = require('sequelize');

const dbConnection = require('../database/config');
const Countries = require('./countries');
const Cities = require('./cities');

const States = dbConnection.define('states', {
    id_state: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    id_country: {
        type: DataTypes.INTEGER,
        references: {
            model: Countries,
            key: 'id_country',
        }
    }
}, 
{
    createdAt: false,
    updatedAt: false,
})

// States.hasMany(Cities)

module.exports = States