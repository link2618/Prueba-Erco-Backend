// process.env.NODE_ENV=='test' && require('dotenv').config()

const Server = require('./models/server')

const server = new Server()

server.listen()