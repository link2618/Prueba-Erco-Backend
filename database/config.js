const { Sequelize } = require('sequelize');

const db = process.env.DATABASE
const user = process.env.USER_DATABASE
const pass = process.env.PASSWORD_DATABASE

const dbConnection = new Sequelize(db, user, pass, {
    host: 'localhost',
    dialect: 'postgres',
    // login: false,
})

// const dbC = {
//     Cities: dbConnection.import('../models/cities'),
//     States: dbConnection.import('../models/states')
// }

// dbC.sequelize = dbConnection

module.exports = dbConnection