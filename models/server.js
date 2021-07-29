const express = require('express')
const cors = require('cors')

const dbConnection = require('../database/config')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            cities: '/api/cities',
            countries: '/api/countries',
            states: '/api/states',
        }

        // conectar a bd
        this.cocectarBD()

        // Middleware
        this.middelware()

        // Rutas de la app
        this.routes()
    }

    async cocectarBD() {
        try {
            await dbConnection.authenticate()
            console.log('database online')
        } catch (error) {
            throw new Error(error)
        }
    }

    middelware() {
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use( express.json() )
    }

    routes() {
        this.app.use(this.paths.cities, require('../routes/cities'))
        this.app.use(this.paths.countries, require('../routes/countries'))
        this.app.use(this.paths.states, require('../routes/states'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;