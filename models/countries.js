const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres::memory:');

const dbConnection = require('../database/config');

const Countries = dbConnection.define('countries', {
    id_country: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    }
}, 
{
    createdAt: false,
    updatedAt: false,
})

module.exports = Countries