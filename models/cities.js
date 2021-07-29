const { DataTypes } = require('sequelize');

const dbConnection = require('../database/config');
const States = require('./states');

const Cities = dbConnection.define('cities', {
    id_city: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    id_state: {
        type: DataTypes.INTEGER,
        references: {
            model: States,
            key: 'id_state',
        }
    },
    population: {
        type: DataTypes.INTEGER,
    }
}, 
{
    createdAt: false,
    updatedAt: false,
})

Cities.belongsTo(States, {
    targetKey: 'id_state',
    foreignKey: 'id_state',
})

module.exports = Cities